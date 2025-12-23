import type {
  ArticleDto,
  ArticlesResponseDto,
  Article,
  ArticlesResponse,
} from "../api/types";

export function mapArticleDto(dto: ArticleDto): Article {
  return {
    id: dto.id,
    title: dto.title,
    summary: dto.summary,
    imageUrl: dto.image_url,
    updatedAt: dto.updated_at,
  };
}

export function mapArticlesResponseDto(
  dto: ArticlesResponseDto
): ArticlesResponse {
  return {
    count: dto.count,
    results: dto.results.map(mapArticleDto),
  };
}
