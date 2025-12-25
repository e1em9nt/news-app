import { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import useArticleListParams from "../../lib/hooks/useArticleListParams";
import { FETCH_LIMIT } from "../../lib/constants";

export default function Form() {
  const { keyword: query, setKeyword: setQueryParam } =
    useArticleListParams(FETCH_LIMIT);
  const [keyword, setKeyword] = useState<string>(query);

  useEffect(() => {
    setKeyword(query);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setQueryParam(keyword, { replace: true });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "42vw",
        minWidth: "190px",
        marginBottom: "clamp(20px, 2vw, 40px)",
      }}
    >
      <Typography
        component="label"
        htmlFor="articles-search"
        sx={{
          display: "block",
          fontWeight: 600,
          fontSize: "var(--fs-base)",
          color: "var(--fc-base)",
          marginBottom: "1rem",
          letterSpacing: 0,
          fontFamily: "var(--font)",
          lineHeight: "100%",
        }}
      >
        Filter by keywords
      </Typography>

      <SearchBar value={keyword} onChange={setKeyword} />
    </Box>
  );
}
