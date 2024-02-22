import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId },
        shortId: {
            type: String,
            required: true,
            unique: true,
        },
        redirectURL: {
            type: String,
            required: true,
        },
        visitHistory: [{ timestamp: { type: Number } }],
    },
    { versionKey: false, timestamps: true }
);

export default mongoose.model('url', urlSchema);
