import { Typography, Box } from "@mui/material";
import Button from "../ui/Button";

interface NotFoundProps {
  errorMsg?: string;
}

export default function NotFound({
  errorMsg = "Sorry, we were unable to find that page",
}: NotFoundProps) {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        gap: "var(--fs-l)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: "clamp(4rem, 5vw, 7.5rem)",
          fontWeight: "900",
          fontFamily: "var(--font)",
          color: "var(--fc-base)",
        }}
      >
        404
      </Typography>
      <Typography
        component="h3"
        sx={{
          fontSize: "var(--fs-2xl)",
          fontWeight: "900",
          fontFamily: "var(--font)",
          color: "var(--fc-base)",
        }}
      >
        Page Not Found
      </Typography>
      <Typography
        sx={{
          fontSize: "var(--fs-l)",
          fontFamily: "var(--font)",
          color: "var(--fc-base)",
          textAlign: "center",
          mb: "2rem",
        }}
      >
        {errorMsg}
      </Typography>
      <Button type="back" path="/">
        Back to homepage
      </Button>
    </Box>
  );
}
