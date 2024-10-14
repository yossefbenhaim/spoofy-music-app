import {
  login,
  profile,
  register,
} from '../controllers/authenticationController';
import { Router } from 'express';

const router = Router();

router.post('/register', register);

router.post('/login', login);

router.get('/profile', profile);

export default router;
