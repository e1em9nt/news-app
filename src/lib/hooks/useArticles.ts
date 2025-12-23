import { useState, useEffect } from "react";
import { articleApi } from "../../api/articleApi";
import type { ArticlesResponse } from "../../api/types";

type ArticlesArgs = {
  search?: string;
  limit?: number;
  offset?: number;
};

export function useArticles(args: ArticlesArgs) {
  const [data, setData] = useState<ArticlesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        setError(null);

        const res = await articleApi.getArticles(args);

        setData(res);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [args.search, args.limit, args.offset]);

  return { data, loading, error };
}
