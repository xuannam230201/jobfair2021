import axios from 'axios';

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`http://localhost:8000/${url}`, {
    headers: { Authorization: token }
  });
  return res;
}

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`http://localhost:8000/${url}`, post, {
    headers: { Authorization: token }
  })
  return res;
}