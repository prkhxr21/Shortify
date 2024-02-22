import mongoose from 'mongoose';
import dotenv from 'dotenv';
mongoose.set('strictQuery', true);

dotenv.config();

export async function dbConnect() {
    return mongoose.connect(process.env.DATABASE_URL);
}
