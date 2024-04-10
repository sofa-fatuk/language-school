import { API_URL } from "./constants";
import { QueryFunctionContext } from "@tanstack/react-query";

interface Course {
  id: string;
  img: string;
  language: string;
  level: string;
  hours: number;
  modules: number;
  price: number;
  width: number;
  color: string;
  lessons: number;
  tasks: number;
  tests: number;
  expertHours: number;
}

export const getCourse = async (context: QueryFunctionContext<string[]>) => {
  const {
    queryKey: [, id],
  } = context;
  const response = await fetch(`${API_URL}/courses/${id}`);
  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }

  return response.json();
};

export const getCourses = async (
  context: QueryFunctionContext<string[]>
): Promise<Course[]> => {
  const url = `${API_URL}/courses${context.queryKey[1]}&_limit=6`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  return response.json();
};

export const getCoursesForSlider = async (): Promise<Course[]> => {
  const url = `${API_URL}/coursesForSlider`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  return response.json();
};

export const getSimilarCourses = async (): Promise<Course[]> => {
  const url = `${API_URL}/similarCourses`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  return response.json();
};
