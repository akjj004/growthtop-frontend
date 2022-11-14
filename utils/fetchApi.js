import axios from "axios";

export const baseUrl = "https://free-amazon-scraper.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {});
  return data;
};
