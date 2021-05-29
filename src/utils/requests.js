import axios from "axios";
import { serverUrl, token } from "../constants/index";

export const getRequest = async (endpoint, page) => {
  return await axios.get(serverUrl + endpoint, {
    params: {
      page: page,
    },
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postRequest = async (endpoint, data) => {
  try {
    return await axios.post(serverUrl + endpoint, data, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return { error: err };
  }
};

export const putRequest = async (endpoint, data) => {
  try {
    return await axios.put(serverUrl + endpoint, data, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return err;
  }
};

export const deleteRequest = async (endpoint) => {
  try {
    return await axios.delete(serverUrl + endpoint, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return err;
  }
};
