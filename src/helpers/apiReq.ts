import axios from "axios";
import currentUser from './currentUser';
const { access_token } = currentUser;

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${access_token()}`
  },
});
