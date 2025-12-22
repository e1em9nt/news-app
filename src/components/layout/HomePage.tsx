import { Box, Typography } from "@mui/material";
import SearchBar from "../ui/SearchBar";
import CardList from "../ui/CardList";

export default function HomePage() {
  return (
    <>
      <Box
        component="form"
        sx={{
          width: "42vw",
          minWidth: "225px",
          marginBottom: "clamp(20px, 2vw, 40px)",
        }}
      >
        <Typography
          component="label"
          htmlFor="articles-search"
          sx={{
            display: "block",
            fontWeight: 600,
            fontSize: "clamp(var(--fs-xs), 1.11vw, var(--fs-base))",
            color: "var(--fc-base)",
            marginBottom: "1rem",
            letterSpacing: 0,
            fontFamily: "var(--font)",
            lineHeight: "100%",
          }}
        >
          Filter by keywords
        </Typography>
        <SearchBar />
      </Box>
      <CardList></CardList>
    </>
  );
}
