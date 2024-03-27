import { API_URL } from "./constants";

interface News {
  id: string;
  title: string;
  date: string;
  description: string;
  type: string;
  link: string;
}

export const getNews = async (): Promise<News[]> => {
  const url = `${API_URL}/news`;

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
