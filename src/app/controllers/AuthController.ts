import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface IUser {
  id: string;
  email: string;
  password?: string;
}

class AuthController {
  async authenticate(req: Request, res: Response){
    const repository = getRepository(User);
    const { email, password } = req.body;

    const user = await repository.findOne({ where: { email } })

    if(!user){
      return res.sendStatus(401).json({ message: 'USER NOT EXISTS' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password );

    if(!isValidPassword){
      return res.sendStatus(401).json({ message: 'INVALID PASSWORD' })
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

    delete user.password

    res.json({ user, token })
  }
}

export default new AuthController();