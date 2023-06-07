import axios from "axios";

const reserve = async (data) => {
  const response = await axios.post("http://localhost:8000/api/confirm", data);
  return response.data.message;
};

export { reserve };
