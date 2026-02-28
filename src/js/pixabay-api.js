import axios from "axios";

const API_KEY = "14065997-636d53df3ecdad4eb4f635f43"; // встав свій ключ
const BASE_URL = "https://pixabay.com/api/";


export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 15,
    page,
  };

  const response = await axios.get(BASE_URL, { params });  
  return response.data; // <-- саме це вимагає завдання
}
