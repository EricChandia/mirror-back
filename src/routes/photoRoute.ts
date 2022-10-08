import { Router } from 'express';
import { multerMiddleware } from '../middlewares/multerMiddleware';
import { uploadImage } from '../utils/cloudinaryUtil';

const receiveImage = multerMiddleware;

const photoRouter = Router();

photoRouter.post('/upload', (req, res) => {
    receiveImage(req, res, async (err: any) => {
        //handling errors from multer
        if (err) {
            console.log(err);
            return res.json({ error: err.message });
        }

        try {
            const imageStream = req.file.buffer;
            const imageName = new Date().getTime().toString();

            const uploadResult = await uploadImage(imageStream, imageName);

            const uploadedUrl = uploadResult.url;
            return res.json({ url: uploadedUrl });
        } catch (error) {
            console.log(error);
            return res.json({ error: 'Failed to upload' });
        }
    })
});

export default photoRouter;