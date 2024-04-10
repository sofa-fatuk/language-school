import { API_URL } from "./constants";
import { QueryFunctionContext } from "@tanstack/react-query";

interface News {
  id: string;
  title: string;
  date: string;
  description: string;
  type: string;
  link: string;
  index: number;
}

export const getNews = async (
  context: QueryFunctionContext<string[]>
): Promise<News[]> => {
  const url = `${API_URL}/news${context.queryKey[1]}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  return response.json();
};

export const getRecommendedNews = async (): Promise<News[]> => {
  const url = `${API_URL}/newsRecommended`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  return response.json();
};
