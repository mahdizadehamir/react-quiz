import axios from "axios";
const base_url = "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple";
const fetchApi = async () => {
  const response = await axios.get(base_url);
  console.log(response.data)
  return response.data;
};

export { fetchApi };
