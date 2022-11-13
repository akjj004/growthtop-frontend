import axios from "axios";

export const baseUrl = "https://free-amazon-scraper.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "614381dbf5msh0a6b1e14c52e6f6p1f93d7jsn4fbd6f8cf94a",
      "X-RapidAPI-Host": "free-amazon-scraper.p.rapidapi.com",
    },
    params: {
        api_key: "7dae27a1663bcb0eacc7da0eee3c69e9"
    }
  });
  return data;
};

// headers: {
//     'X-RapidAPI-Key': '614381dbf5msh0a6b1e14c52e6f6p1f93d7jsn4fbd6f8cf94a',
//     'X-RapidAPI-Host': 'free-amazon-scraper.p.rapidapi.com'
//   }