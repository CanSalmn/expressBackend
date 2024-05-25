import { createImage, getImage } from "../db/slider";
import express from "express";
export const addImage = async (req: express.Request, res: express.Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const image = await createImage({
            filename: req.file.filename,
            filepath: req.file.path,
        });
        return res.status(200).json(image).end();
    } catch (error) {
        console.error("Error saving image:", error);
        return res.status(500).json({ message: "Error saving image" });
    }
};
export const getCurrentImage = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const image = await getImage();
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        return res.status(200).json(image).end();
    } catch (error) {
        console.error("Error retrieving image:", error);
        return res.status(500).json({ message: "Error retrieving image" });
    }
};
