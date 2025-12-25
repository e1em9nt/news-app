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
    let cancelledFetch: boolean = false;

    async function fetchArticles() {
      try {
        setLoading(true);
        setError(null);

        const res = await articleApi.getArticles(args);

        if (!cancelledFetch) setData(res);
      } catch (err) {
        if (!cancelledFetch)
          setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (!cancelledFetch) setLoading(false);
      }
    }
    fetchArticles();

    return () => {
      cancelledFetch = true;
    };
  }, [args.search, args.limit, args.offset]);

  return { data, loading, error };
}
