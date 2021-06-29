import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface IUser {
  id: string;
  email: string;
  password?: string;
  createdAt: string;
  updatedAt: string;
}

class AuthController {
  async authenticate(req: Request, res: Response){
    const repository = getRepository(User);
    const { email, password } = req.body;

    const user = await repository.findOne({ where: { email } });

    if(!user){
      return res.sendStatus(401).json({ message: 'USER NOT EXISTS' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password );

    if(!isValidPassword){
      return res.sendStatus(401).json({ message: 'INVALID PASSWORD' })
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

    // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
    delete user.password
    // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
    delete user.createdAt
    // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
    delete user.updatedAt

    res.json({ user, token })
  }
}

export default AuthController;
