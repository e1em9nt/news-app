import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

export default function Form() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [keyword, setKeyword] = useState<string>(query);

  useEffect(() => {
    setKeyword(query);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nextQuery = keyword.trim();

    setSearchParams((prev) => {
      const searchParam = new URLSearchParams(prev);
      if (nextQuery) searchParam.set("q", nextQuery);
      else searchParam.delete("q");

      // reset pagination when searching
      //searchParam.delete("page");

      return searchParam;
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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

      <SearchBar value={keyword} onChange={setKeyword} />
    </Box>
  );
}
