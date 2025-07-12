import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const FetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("API Error:", error.response || error.message);
    return null;
  }
};
