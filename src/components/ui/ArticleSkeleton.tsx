import { Box, Container, Paper, Skeleton } from "@mui/material";

export default function ArticleSkeleton() {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        sx={{
          height: "clamp(190px, 22.5vw, 245px)",
          width: "100%",
          backgroundColor: "var(--fc-light)",
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "min(760px, 95%)" }}>
              <Skeleton
                variant="text"
                sx={{
                  width: "95%",
                  fontSize: "var(--fs-ml)",
                  lineHeight: 1.2,
                  backgroundColor: "var(--fc-light)",
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  width: "70%",
                  fontSize: "var(--fs-ml)",
                  lineHeight: 1.2,
                  backgroundColor: "var(--fc-light)",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ mt: "var(--fs-2xl)" }}>
            <Skeleton
              variant="text"
              sx={{
                width: "98%",
                fontSize: "clamp(1.6rem, 1.1vw, 1.8rem)",
                lineHeight: "150%",
                backgroundColor: "var(--fc-light)",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                width: "96%",
                fontSize: "clamp(1.6rem, 1.1vw, 1.8rem)",
                lineHeight: "150%",
                backgroundColor: "var(--fc-light)",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                width: "94%",
                fontSize: "clamp(1.6rem, 1.1vw, 1.8rem)",
                lineHeight: "150%",
                backgroundColor: "var(--fc-light)",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                width: "92%",
                fontSize: "clamp(1.6rem, 1.1vw, 1.8rem)",
                lineHeight: "150%",
                backgroundColor: "var(--fc-light)",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                width: "75%",
                fontSize: "clamp(1.6rem, 1.1vw, 1.8rem)",
                lineHeight: "150%",
                backgroundColor: "var(--fc-light)",
              }}
            />
          </Box>
        </Paper>

        <Box sx={{ margin: "var(--space-page)" }}>
          <Skeleton
            variant="text"
            sx={{
              width: 180,
              fontSize: "var(--fs-base)",
              lineHeight: "150%",
              backgroundColor: "var(--fc-light)",
              marginLeft: "clamp(2rem, 10vw, 15rem)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
