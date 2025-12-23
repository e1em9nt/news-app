import {
  Card as MUICard,
  CardContent,
  CardActions,
  Skeleton,
  Box,
} from "@mui/material";

export default function CardSkeleton() {
  return (
    <MUICard
      sx={{
        height: "100%",
        width: "clamp(320px, 27.8vw, 400px)",
        boxShadow: "var(--box-shadow)",
        border: "var(--border)",
        borderRadius: "5px",
        backgroundColor: "transparent",
      }}
    >
      {/* image */}
      <Skeleton
        variant="rectangular"
        sx={{
          height: "clamp(160px, 15vw, 217px)",
          backgroundColor: "var(--fc-light)",
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(12px, 1.4vw, var(--fs-m))",
          padding: "clamp(var(--fs-base), 1.75vw, var(--fs-l))",
        }}
      >
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <Skeleton
            variant="circular"
            sx={{ width: 14, height: 14, backgroundColor: "var(--fc-light)" }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "35%",
              fontSize: "var(--fs-xs)",
              lineHeight: "100%",
              backgroundColor: "var(--fc-light)",
            }}
          />
        </Box>

        <Box sx={{ height: "clamp(81px, 7.5vw, 108px)" }}>
          <Skeleton
            variant="text"
            sx={{
              width: "95%",
              fontSize: "clamp(18px, 1.67vw, 24px)",
              lineHeight: 1.5,
              backgroundColor: "var(--fc-light)",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "80%",
              fontSize: "clamp(18px, 1.67vw, 24px)",
              lineHeight: 1.5,
              backgroundColor: "var(--fc-light)",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "60%",
              fontSize: "clamp(18px, 1.67vw, 24px)",
              lineHeight: 1.5,
              backgroundColor: "var(--fc-light)",
            }}
          />
        </Box>

        <Box sx={{ height: "clamp(67.2px, 6vw, 76.8px)" }}>
          <Skeleton
            variant="text"
            sx={{
              width: "98%",
              fontSize: "clamp(var(--fs-xs), 1.11vw, var(--fs-base))",
              lineHeight: "150%",
              backgroundColor: "var(--fc-light)",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "85%",
              fontSize: "clamp(var(--fs-xs), 1.11vw, var(--fs-base))",
              lineHeight: "150%",
              backgroundColor: "var(--fc-light)",
            }}
          />
        </Box>
      </CardContent>

      <CardActions
        sx={{
          padding: "clamp(var(--fs-base), 1.75vw, var(--fs-l))",
          paddingTop: 0,
        }}
      >
        <Skeleton
          variant="text"
          sx={{
            width: 110,
            fontSize: "clamp(var(--fs-xs), 1.11vw, var(--fs-base))",
            lineHeight: "150%",
            backgroundColor: "var(--fc-light)",
          }}
        />
      </CardActions>
    </MUICard>
  );
}
