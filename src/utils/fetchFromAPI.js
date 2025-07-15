// File: src/utils/fetchFromAPI.js

import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// url = something like "search?part=snippet&q=reactjs"
const fetchFromAPI = async (url) => {
  try {
    const fullUrl = `${BASE_URL}/${url}${
      url.includes("?") ? "&" : "?"
    }key=${API_KEY}`;
    const { data } = await axios.get(fullUrl);
    return data;
  } catch (error) {
    console.error(
      "YouTube API Error:",
      error.response?.data?.error || error.message
    );
    return null;
  }
};

export default fetchFromAPI;
