import axios from 'axios'

// Determine API base URL based on environment
// - In production (deployed): use deployed backend
// - In development (local): use local backend
// - Can be overridden with VITE_API_BASE_URL environment variable
const getApiBaseUrl = () => {
  // If explicitly set via environment variable, use that
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL
  }
  
  // In production mode (when built/deployed), use deployed backend
  if (import.meta.env.PROD) {
    return 'https://lunaria-beauty.onrender.com'
  }
  
  // In development (local), use local backend
  return 'http://localhost:5001'
}

const API_BASE_URL = getApiBaseUrl()

// Log the API base URL in development for debugging
if (import.meta.env.DEV) {
  console.log(`🔗 API Base URL: ${API_BASE_URL}`)
}

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient

