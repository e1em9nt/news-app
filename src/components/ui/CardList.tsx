import { Grid, Typography, Divider, Box } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";

import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import ErrorAlert from "./ErrorAlert";
import ArticlesPagination from "./ArticlesPagination";
import { useArticles } from "../../lib/hooks/useArticles";
import useArticleListParams from "../../lib/hooks/useArticleListParams";
import { SKELETON_COUNT, FETCH_LIMIT } from "../../lib/constants";
import { parseKeywords, countKeywordHits } from "../../lib/search";

export default function CardList() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { keyword, curPage, offset, setPage } =
    useArticleListParams(FETCH_LIMIT);

  const { data, loading, error } = useArticles({
    search: keyword,
    limit: FETCH_LIMIT,
    offset,
  });

  const totalPages = Math.max(1, Math.ceil((data?.count ?? 0) / FETCH_LIMIT));

  const keywordsArr = useMemo(() => parseKeywords(keyword), [keyword]);

  const sortedResults = useMemo(() => {
    const results = data?.results ?? [];
    if (!keywordsArr.length) return results;

    return [...results].sort((a, b) => {
      const aTitle = countKeywordHits(a.title, keywordsArr);
      const bTitle = countKeywordHits(b.title, keywordsArr);
      if (bTitle !== aTitle) return bTitle - aTitle; // title priority

      const aSum = countKeywordHits(a.summary, keywordsArr);
      const bSum = countKeywordHits(b.summary, keywordsArr);
      if (bSum !== aSum) return bSum - aSum; // then summary

      return 0;
    });
  }, [data?.results, keywordsArr]);

  useEffect(() => {
    if (!data) return;
    if (curPage <= totalPages) return;

    setPage(totalPages, { replace: true });
  }, [curPage, totalPages, setPage, data]);

  useEffect(() => {
    if (loading) return;

    requestAnimationFrame(() => {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [curPage]);

  function handlePageChange(nextPage: number) {
    setPage(nextPage, { replace: true });
  }

  if (error) return <ErrorAlert message={error} />;

  console.log(data);
  return (
    <Box ref={containerRef}>
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
        spacing="var(--fs-xl)"
        alignItems="stretch"
        sx={{
          marginTop: "var(--fs-xl)",
        }}
      >
        {loading
          ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
                <CardSkeleton />
              </Grid>
            ))
          : sortedResults.map((article) => (
              <Grid key={article.id} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
                <Card data={article} keywords={keywordsArr} />
              </Grid>
            ))}
      </Grid>

      {!loading && (data?.count ?? 0) > 0 && (
        <ArticlesPagination
          page={curPage}
          totalPages={totalPages}
          onChange={handlePageChange}
        />
      )}
    </Box>
  );
}
