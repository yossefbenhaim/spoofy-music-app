import { Request, Response } from 'express';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import trpcClient from '../trpcClient';
import * as dotenv from 'dotenv';
dotenv.config();

const NX_JWT_SECRET = process.env['NX_JWT_SECRET'] as string;

const pool = new Pool({
  connectionString: 'postgres://postgres:yossef7875@localhost:5432/spoofy',
});

export const register = async (req: Request, res: Response) => {
  const { username, email, password, coordinates } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      'INSERT INTO spoofy."Users" (user_name, email,  "password",coordinates) VALUES ($1, $2, $3, $4) RETURNING id',
      [username, email, hashedPassword, coordinates]
    );
    res.status(201).json({ userId: result.rows[0].id });
  } catch (error) {
    res.status(400).json({ error: 'User registration failed' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      `SELECT * FROM spoofy."Users" WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const user = result.rows[0];

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, NX_JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Login failed' });
  }
};

export const profile = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    console.log('test');

    const result = await trpcClient.spoofyQueryRouter.getUserById.query(
      '9853cf23-4cb0-40b8-a471-2d136b117357'
    );

    console.log(result);

    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch profile' });
  }
};
