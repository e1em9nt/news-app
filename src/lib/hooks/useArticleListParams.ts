import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export default function useArticleListParams(limit: number) {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("q") ?? "";

  const curPage = useMemo(() => {
    const queryPage = Number(searchParams.get("page") ?? "1");
    return Number.isFinite(queryPage) && queryPage > 0
      ? Math.floor(queryPage)
      : 1;
  }, [searchParams]);

  const offset = (curPage - 1) * limit;

  const setPage = (nextPage: number, opts: { replace?: boolean } = {}) => {
    const next = new URLSearchParams(searchParams);
    next.set("page", String(nextPage));
    setSearchParams(next, { replace: opts.replace ?? true });
  };

  const setKeyword = (query: string, opts: { replace?: boolean } = {}) => {
    const next = new URLSearchParams(searchParams);
    const trimmed = query.trim();

    if (trimmed) next.set("q", trimmed);
    else next.delete("q");

    next.set("page", "1");
    setSearchParams(next, { replace: opts.replace ?? true });
  };

  return { keyword, curPage, offset, setPage, setKeyword };
}
