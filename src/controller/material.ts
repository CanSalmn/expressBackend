import { createMaterials, getMaterials } from "../db/material";

import express from "express";

export const getMaterial = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const material = await getMaterials();
        console.log("transaction", material);
        return res.status(200).json(material);
    } catch (error) {
        console.log(error);

        return res.sendStatus(400);
    }
};

export const addMaterial = async (
    req: express.Request,
    res: express.Response
) => {
    console.log("req", req.body);
    try {
        const {
            userId,
            materials: [{ materialTitle, materialId, totalRecycling, unit }],
        } = req.body;
        const user = await createMaterials({
            userId,
            materials: [
                {
                    materialTitle,
                    materialId,
                    totalRecycling,
                    unit,
                },
            ],
        });
        return res.status(200).json(user).end();
    } catch (error) {
        console.log("error");
        return res.sendStatus(400);
    }
};
