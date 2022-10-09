import { Router } from 'express';
import { multerMiddleware } from '../middlewares/multerMiddleware';
import { uploadImage } from '../utils/cloudinaryUtil';
import {photoService} from "../services/photoService";
import { notFoundError } from '../utils/errorUtils';

const receiveImage = multerMiddleware;

const photoRouter = Router();

photoRouter.post('/uploadPhoto', (req, res) => {
    receiveImage(req, res, async (err: any) => {
        const { id:userId } = res.locals.user;

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
            console.log(uploadedUrl);

            await photoService.insertPhoto(userId, uploadedUrl);

            return res.json({ url: uploadedUrl });
        } catch (error) {
            console.log(error);
            return res.json({ error: 'Failed to upload' });
        }
    })
});

photoRouter.get('/getProfilePhotos', async (req, res) => {
    const { id:userId } = res.locals.user;

    const profilePhotos = await photoService.getProfilePhotos(userId);
    //console.log(profilePhotos);

    if(!profilePhotos){
        throw notFoundError("This profile does not have any photos");
    }

    return res.status(200).send(profilePhotos);

});

export default photoRouter;