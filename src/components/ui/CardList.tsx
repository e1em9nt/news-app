import { Grid, Typography, Divider } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import ErrorAlert from "./ErrorAlert";
import { useArticles } from "../../lib/hooks/useArticles";
import { SKELETON_COUNT, FETCH_LIMIT } from "../../lib/constants";

export default function CardList() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q") ?? "";
  const { data, loading, error } = useArticles({
    search: keyword,
    limit: FETCH_LIMIT,
  });

  if (error) return <ErrorAlert message={error} />;

  console.log(data);
  return (
    <>
      <Typography
        sx={{
          fontFamily: "var(--font)",
          fontSize: "var(--fs-base)",
          fontWeight: 600,
          letterSpacing: 0,
          color: "var(--fc-base)",
        }}
      >
        Results: {data?.count}
      </Typography>

      <Divider sx={{ borderColor: "var(--fc-light)" }} />

      <Grid
        container
        sx={{
          gap: "var(--fs-xl)",
          marginTop: "var(--fs-xl)",
        }}
      >
        {loading
          ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
              <Grid key={idx} /* size={{ xs: 12, md: 3, lg: 2 }} */>
                <CardSkeleton />
              </Grid>
            ))
          : (data?.results ?? []).map((article) => (
              <Grid key={article.id}>
                <Card data={article} />
              </Grid>
            ))}
      </Grid>
    </>
  );
}
