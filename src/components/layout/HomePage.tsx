import { Box } from "@mui/material";
import Form from "../ui/Form";
import CardList from "../ui/CardList";
import ThemeToggle from "../ui/ThemeToggle";

export default function HomePage() {
  return (
    <Box sx={{ margin: "var(--space-page)" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Form />
        <ThemeToggle />
      </Box>

      <CardList />
    </Box>
  );
}
