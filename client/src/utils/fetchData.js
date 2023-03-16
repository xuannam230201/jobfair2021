import axios from 'axios';

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`/${url}`, {
    headers: { Authorization: token }
  });
  return res;
}

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`/${url}`, post, {
    headers: { Authorization: token }
  })
  return res;
}