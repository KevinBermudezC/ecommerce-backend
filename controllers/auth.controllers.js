import { db } from '../utils/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/env.js';

export const signUp = async (req, res, next) => {
	try {
		//create new user
		const { name, email,password} = req.body;

		const existingUser = await db.user.findUnique({
			where: {
				email,
			},
		});

		if(existingUser) {
			const error = new Error("User already exists");
			error.statusCode = 409;
			throw error;
		}
		//hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		//save user to db
		const newUser = await db.user.create({
			data: {  
				name,
				email,
				password: hashedPassword,
			},
		});

		const token = jwt.sign({id: newUser.id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
	
		
		res.status(201).json({
			success: true,
			message: "User created successfully",
			data: {
				token,
				user: newUser,
			}
		});

	} catch (error) {

		next(error);
	}
};