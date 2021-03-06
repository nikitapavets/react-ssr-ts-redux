const dotenv = require('dotenv');

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  endpoint: process.env.API_URL,
};
