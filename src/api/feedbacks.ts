import { API_URL } from "./constants";

interface Feedbacks {
  id: string;
  name: string;
  description: string;
  color: string;
}

export const getFeedbacks = async (): Promise<Feedbacks[]> => {
  const url = `${API_URL}/feedbacks`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  return response.json();
};

export const getRecommendedFeedbacks = async (): Promise<Feedbacks[]> => {
  const url = `${API_URL}/feedbacksRecommended`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  return response.json();
};
