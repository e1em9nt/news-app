import { Box, Pagination } from "@mui/material";

interface ArticlesPaginationProps {
  page: number;
  totalPages: number;
  onChange: (next: number) => void;
}

export default function ArticlesPagination({
  page,
  totalPages,
  onChange,
}: ArticlesPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "var(--fs-xl)",
      }}
    >
      <Pagination
        page={page}
        count={totalPages}
        onChange={(_, next) => onChange(next)}
        siblingCount={1}
        boundaryCount={1}
        sx={{
          "& .MuiPaginationItem-root": {
            fontFamily: "var(--font)",
            fontSize: "var(--fs-base)",
            color: "var(--fc-muted)",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "var(--fc-light)",
            color: "var(--fc-base)",
          },
        }}
      />
    </Box>
  );
}
