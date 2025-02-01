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
            validate: {
                validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
                message: (props) => `${props.value} is not a valid email!`,
            },
        },
        password: {
            type: String,
            require: true,
            minlength: [6, 'Password must be at least 6 characters long'],
        },
    },
    { versionKey: false, timestamps: true }
);

export default mongoose.model('User', User);
