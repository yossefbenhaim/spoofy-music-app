import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env['NX_AUTHENTICATION_PORT'];

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT ?? '8000'}`);
});
