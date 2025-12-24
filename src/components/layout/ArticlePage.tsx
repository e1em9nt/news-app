import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Container, Paper } from "@mui/material";

import Button from "../ui/Button";
import ErrorAlert from "../ui/ErrorAlert";
import ArticleSkeleton from "../ui/ArticleSkeleton";
import type { Article } from "../../api/types";
import { articleApi } from "../../api/articleApi";

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        setArticle(null);
        setError(null);

        if (!id) return;

        const res = await articleApi.getArticleById(id);
        setArticle(res);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch article"
        );
      }
    }

    fetchArticle();
  }, [id]);

  if (error) return <ErrorAlert message={error} />;

  if (!article) return <ArticleSkeleton />;

  return (
    <Box>
      <Box
        sx={{
          height: "clamp(190px, 22.5vw, 245px)",
          width: "100%",
          backgroundImage: `url(${article.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container maxWidth={false} disableGutters>
        <Paper
          sx={{
            margin: "var(--space-page)",
            mt: "clamp(-100px, -8vw, -95px)",
            padding: "var(--space-page)",
            border: "var(--border)",
            borderRadius: "5px",
            boxShadow: "var(--box-shadow)",
            backgroundColor: "var(--bg)",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: "var(--fs-ml)",
              letterSpacing: 0,
              textAlign: "center",
              color: "var(--fc-base)",
              mb: "var(--fs-2xl)",
            }}
          >
            {article.title}
          </Typography>
          <Typography
            sx={{
              whiteSpace: "pre-line",
              lineHeight: "150%",
              fontFamily: "var(--font)",
              letterSpacing: 0,
              fontSize: "clamp(1.6rem, 1.1vw, 1.8rem)",
              color: "var(--fc-muted)",
            }}
          >
            {article.summary}
          </Typography>
        </Paper>

        <Button
          path="/articles"
          type="back"
          sx={{ marginLeft: "clamp(2rem, 10vw, 15rem)", marginBottom: "3rem" }}
        >
          Back to homepage
        </Button>
      </Container>
    </Box>
  );
}
