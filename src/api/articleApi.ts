import { NEWS_API } from "../lib/constants";
import type {
  ArticleDto,
  Article,
  ArticlesResponseDto,
  ArticlesResponse,
} from "./types";
import { mapArticleDto, mapArticlesResponseDto } from "../lib/mapper";

type GetArticlesParams = {
  search?: string;
  limit?: number;
  offset?: number;
};

function buildQuery(params?: GetArticlesParams): string {
  if (!params) return "";

  const queryString = new URLSearchParams();

  if (params.search) queryString.set("search", params.search);

  if (typeof params.limit === "number")
    queryString.set("limit", String(params.limit));

  if (typeof params.offset === "number")
    queryString.set("offset", String(params.offset));

  const str = queryString.toString();
  return str ? `?${str}` : "";
}

async function requestJson(url: string) {
  const res = await fetch(url);

  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

  return await res.json();
}

export const articleApi = {
  async getArticles(params?: GetArticlesParams): Promise<ArticlesResponse> {
    const query = buildQuery(params);
    const dto: ArticlesResponseDto = await requestJson(
      `${NEWS_API}articles/${query}`
    );
    return mapArticlesResponseDto(dto);
  },

  async getArticleById(id: number | string): Promise<Article> {
    const dto: ArticleDto = await requestJson(`${NEWS_API}articles/${id}/`);
    return mapArticleDto(dto);
  },
};
