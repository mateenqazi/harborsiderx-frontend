import axios from 'axios';
import { getLocalStorageValue } from '../../../utils/auth';

export const API = {
  getSignUp: async (data: any) => {
    let url = `${process.env.REACT_APP_BACKEND_URL}api/auth/register`;
    const res = await axios.post(url, data).then((response) => response.data);
    return res;
  },
  getLogin: async (data: any) => {
    let url = `${process.env.REACT_APP_BACKEND_URL}api/auth/login`;
    const res = await axios.post(url, data).then((response) => response.data);
    return res;
  },
  getAllQuestion: async (data: any) => {
    let url = `${process.env.REACT_APP_BACKEND_URL}api/questions/get-questions/`;
    const res = await axios.post(url, data, {
      headers: {
        authorization: `Bearer ${getLocalStorageValue('token')}`,
      },
      withCredentials: true,
    });
    return res;
  },
  getGoogleLogin: async () => {
    let url = `${process.env.REACT_APP_BACKEND_URL}api/auth/google/authenticate`;
    const res = await axios.get(url).then((response) => response.data);
    return res;
  },
  getAuthUser: async (data: any) => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    const user = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}api/auth/getAuthUser`,
      {
        headers: {
          authorization: `Bearer ${data.data}`,
        },
        withCredentials: true,
      }
    );
    return user.data;
  },

  saveAnswer: async (data: any) => {
    const user = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}api/answers/save-answers/`,
      data,
      {
        headers: {
          authorization: `Bearer ${getLocalStorageValue('token')}`,
        },
        withCredentials: true,
      }
    );
    return user.data;
  },

  updateUser: async (data: any) => {
    const user = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}api/user/profile-update/`,
      data,
      {
        headers: {
          authorization: `Bearer ${getLocalStorageValue('token')}`,
        },
        withCredentials: true,
      }
    );
    return user.data;
  },

  getMedicines: async() => {
    let url = `${process.env.REACT_APP_BACKEND_URL}api/medicines/`;
    const res = await axios.get(url).then((response) => response.data);
    return res;
  }
};
