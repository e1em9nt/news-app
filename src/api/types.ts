export type ArticleDto = {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  updated_at: string;
};

export type ArticlesResponseDto = {
  count: number;
  results: ArticleDto[];
};

export type Article = {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  updatedAt: string;
};

export type ArticlesResponse = {
  count: number;
  results: Article[];
};
