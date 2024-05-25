import mongoose from "mongoose";
import multer from "multer";

const ImageSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
    filepath: {
        type: String,
        required: true,
    },
});

export const ImageModel = mongoose.model("Image", ImageSchema);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});
export const upload = multer({ storage: storage });
export const getImage = () => ImageModel.find();
export const createImage = (values: Record<any, any>) =>
    new ImageModel(values).save().then((Image) => Image.toObject());
