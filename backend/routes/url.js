import express from 'express';
import {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    handleRedirect,
} from '../controllers/urlController.js';

const router = express.Router();

router.get('/analytics/:shortId', handleGetAnalytics);
router.get('/:shortId', handleRedirect);
router.post('/', handleGenerateNewShortURL);

export default router;
