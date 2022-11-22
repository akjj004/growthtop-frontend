import axios from "axios";

export const baseUrl = "https://growthtop-backend-production.up.railway.app";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
