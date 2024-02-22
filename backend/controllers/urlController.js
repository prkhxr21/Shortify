import shortid from 'shortid';
import URL from '../models/urlSchema.js';

export async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'url is required' });
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}

export async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

export async function handleRedirect(req, res) {
    const shortId = req.params.shortId;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: { timestamp: Date.now() },
                },
            },
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({ error: 'Entry not found' });
        }
        
        res.json({ redirectUrl: entry.redirectURL });
    } catch (error) {
        console.error('Error updating URL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
