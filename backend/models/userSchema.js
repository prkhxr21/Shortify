import mongoose from 'mongoose';

const User = mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
    },
    { versionKey: false, timestamps: true }
);

export default mongoose.model('User', User);
