import axios from 'axios';

const BASE_URL = "http://localhost:8080";

export const fetchMovies = async (search = '', genre = '') => {
  try {
    const response = await axios.get(`${BASE_URL}/movies`, {
      params: { search, genre }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return [];
  }
};