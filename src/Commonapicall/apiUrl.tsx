//API url apiUrl.tsx
import axios from 'axios';

export const apiUrl = {
  // apiUrlConfig: "http://192.168.1.10:8000",
  apiUrlConfig: "https://armsjob.vercel.app",
  // apiUrlConfig: "http://192.168.43.150:8000", Motorola One Power
  // apiUrlConfig: "https://djangoapp-mindful-beautys-projects.vercel.app",
  //apiUrlConfig: "https://mbrestapi-f8cphtgaf7fjdyb0.westcentralus-01.azurewebsites.net",    // Azure
}

// Create an Axios instance with the base URL
export const apiAxios = axios.create({
  baseURL: apiUrl.apiUrlConfig,
  // You can add default headers here if needed
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});