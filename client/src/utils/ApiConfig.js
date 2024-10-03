const ApiConfig = {
  backendUrl: process.env.REACT_APP_API_URL === 'production' 
      ? "https://petbuddy-backened.onrender.com" 
      : "http://localhost:5000"
};

export default ApiConfig;
