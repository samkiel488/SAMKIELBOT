import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data.data;
};

export const login = async (userData) => {
  const response = await api.post('/auth/login', userData);
  return response.data.data;
};

export const verifyToken = async () => {
  const response = await api.get('/auth/verify');
  return response.data.data;
};

// Deploy API
export const deployBot = async (deployData) => {
  const response = await api.post('/deploy', deployData);
  return response.data.data;
};

export const getDeployments = async () => {
  const response = await api.get('/deploy');
  return response.data.data;
};

export const updateDeployment = async (id, updateData) => {
  const response = await api.put(`/deploy/${id}`, updateData);
  return response.data.data;
};

// Update API
export const updateBot = async (updateData) => {
  const response = await api.post('/update', updateData);
  return response.data.data;
};

export const getUpdateHistory = async (deploymentId) => {
  const response = await api.get(`/update/${deploymentId}`);
  return response.data.data;
};
