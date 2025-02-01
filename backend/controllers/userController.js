import { token } from 'morgan';
import { getSignedJwtToken } from '../middleware/auth.js';
import userModel from '../models/userSchema.js';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const login = async (req, res) => {
    try {
        const { email } = req.body;
        const userInput = email;
        const password = req.body.password;
        if (!userInput || !password) {
            res.json({
                message: 'Username or email and password are required.',
            });
        }
        const exists = await userModel.findOne({
            $or: [{ username: userInput }, { email: userInput }],
        });

        //since checked already with signup
        // if (!exists) return res.json({ message: 'please try to signup' });

        const passwordMatch = await bcrypt.compare(password, exists.password);
        if (!passwordMatch) {
            return res.json({ code: 400, message: 'Incorrect password.' });
        }
        token = getSignedJwtToken({
            email: exists.email,
            id: exists._id,
        });

        return res.json({
            email: exists.email,
            id: exists._id,
            message: 'User logged in',
            token: token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            code: 500,
            message: 'Internal Server Error',
            success: false,
        });
    }
};

export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(200).send({
                code: 400,
                message: 'enter the all fields',
                success: false,
            });
        const exists = await userModel.findOne({ email: email });
        if (exists) return await login(req, res);

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const User = new userModel({
            email,
            password: hashedPassword,
        });
        const token = await getSignedJwtToken({
            email: User.email,
            id: User._id,
        });

        await User.save();
        if (!User) {
            return res.status(200).send({
                code: 400,
                message: 'User not created',
                success: false,
            });
        } else {
            return res.status(200).send({
                code: 201,
                message: `User ${User.email} created successfully`,
                success: true,
                user: User,
                token: token,
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            code: 500,
            message: 'Internal Server Error',
            success: false,
        });
    }
};

export const getUserById = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await userModel
            .findOne({ username: username })
            .populate('theme')
            .exec();
        if (user) {
            res.status(200).send({
                code: 200,
                message: 'User details getting successfully',
                docs: user,
                success: true,
            });
        } else {
            res.status(400).send({
                code: 400,
                message: 'There is no user',
                success: false,
            });
        }
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Internal Server Error',
            success: false,
        });
    }
};

export const getUserWithToken = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).exec();
        if (user) {
            res.status(200).send({
                code: 200,
                message: 'User details getting successfully',
                docs: user,
                success: true,
            });
        }
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Internal Server Error',
            success: false,
        });
    }
};
