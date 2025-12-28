import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000",
});

// -------- LISTINGS --------
export const getListings = async () => {
  const res = await API.get("/listings");
  return res.data; // backend returns array
};

// -------- SETTINGS --------
export const getSettings = async () => {
  const res = await API.get("/settings");
  return res.data;
};

export const updateSettings = async (settings) => {
  const res = await API.post("/settings", settings);
  return res.data;
};

