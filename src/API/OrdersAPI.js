import axios from 'axios';

export const instace = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});


export const geoInstance = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode',
  params: {
    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  }
});

export async function sendOrder(reqBody) {
  try {
    const products = await instace.post(
      '/accept-order',
      reqBody
    );
    return products;
  } catch (error) {
    return error.response;
  }
}
