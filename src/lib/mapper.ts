import type {
  ArticleDto,
  ArticlesResponseDto,
  Article,
  ArticlesResponse,
} from "../api/types";

/**
 * Converts snake_case Article fields to camelCase
 *
 * @param dto - Article DTO returned by the API
 * @returns mapped Article
 */
export function mapArticleDto(dto: ArticleDto): Article {
  return {
    id: dto.id,
    title: dto.title,
    summary: dto.summary,
    imageUrl: dto.image_url,
    updatedAt: dto.updated_at,
  };
}

/**
 * Maps API response into the app model
 *
 * @param dto - Articles response DTO returned by the API
 * @returns mapped ArticleResponse
 */
export function mapArticlesResponseDto(
  dto: ArticlesResponseDto
): ArticlesResponse {
  return {
    count: dto.count,
    results: dto.results.map(mapArticleDto),
  };
}
