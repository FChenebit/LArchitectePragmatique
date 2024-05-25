/* eslint-disable no-console */
import express from 'express';

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static('site'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
