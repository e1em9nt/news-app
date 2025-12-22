import { useEffect, useState } from "react";

import { Grid, Typography, Divider } from "@mui/material";
import Card from "./Card";
import { NEWS_API } from "../../lib/constants";

export type Article = {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  updated_at: string;
};
type ArticlesResponse = {
  count: number;
  results: Article[];
};

export default function CardList() {
  const [news, setNews] = useState<ArticlesResponse | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`${NEWS_API}articles/?search=school`);

        if (!res.ok) throw new Error("Failed to fetch news");

        const data = await res.json();
        console.log(data);
        setNews(data);
      } catch (err) {
        if (err instanceof Error) throw new Error(err.message);
      }
    }
    fetchNews();
  }, []);

  console.log(news);
  return (
    <>
      <Typography
        sx={{
          fontFamily: "var(--font)",
          fontSize: "clamp(var(--fs-xs), 1.11vw, var(--fs-base))",
          fontWeight: 600,
          letterSpacing: 0,
          color: "var(--fc-base)",
        }}
      >
        Results: {news?.count}
      </Typography>
      <Divider sx={{ color: "var(--fc-light)" }} />
      <Grid
        container
        sx={{
          gap: "clamp(25px, 2.5vw, 45px)",
          marginTop: "clamp(25px, 2.5vw, 45px)",
        }}
      >
        {news?.results.map((article) => (
          <Grid /* size={{ xs: 12, md: 6, lg: 4, xl: 3 }} */ key={article.id}>
            <Card data={article} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
