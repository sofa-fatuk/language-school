import { API_URL } from "./constants";
import { QueryFunctionContext } from "@tanstack/react-query";

interface Course {
  id: string;
  img: string;
  title: string;
  hours: number;
  modules: number;
  price: number;
  width: number;
  color: string;
}

export const getCourses = async (
  context: QueryFunctionContext<string[]>
): Promise<Course[]> => {
  const url = `${API_URL}/courses${context.queryKey[1]}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  return response.json();
};

export const getRecommendedCourses = async (): Promise<Course[]> => {
  const url = `${API_URL}/coursesRecommended`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  return response.json();
};
