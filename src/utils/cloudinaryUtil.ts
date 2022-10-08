const cloudinary = require('cloudinary').v2;
import dotenv from "dotenv";
import { timeout_error } from "./errorUtils";
import sharp from "sharp";

dotenv.config();

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

// cloudinary.config({ 
//     cloud_name: 'dm7kjkcf0', 
//     api_key: '714392574653413', 
//     api_secret: 'xagZMKTvyXzbQ8_LMWv7d5BDAl8' ,
//     secure: true
//   });

cloudinary.config({
    secure: true
  });

const uploadStream = (fileStream:any, name:any) => {

    //wrapping into promise for using modern async/await
    return new Promise<any>((resolve, reject) => {        
        cloudinary.uploader.upload_stream({ public_id: name }, (error:any, result:any) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        }).end(fileStream)
    });
};

export const uploadImage = async (fileStream:any, fileName:any)=>{
    try{
        const minifiedFile = await sharp(fileStream).jpeg( { quality: 50 }).toBuffer(); //reduce quality of the image in 50%, convert to jpeg
        const result = await uploadStream(minifiedFile, fileName); 
        return result;
    }catch(error){
        throw timeout_error("Error uploading image: " + error);
    }
}