import { createContainer, getContainers } from "../db/containers";
import express from "express";


export const getAllContainers = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const containers = await getContainers();
        console.log("containers", containers);
        return res.status(200).json(containers);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const addContainer = async (
    req: express.Request,
    res: express.Response
) => {
    console.log("req", req.body);
    try {
        const {
            containerId,
            address,
            type,
            capacity,
            lastUpdated,
            location: {
                latitude,
                longitude,
            }
        } = req.body;
        const user = await createContainer({
            containerId,
            address,
            type,
            capacity,
            lastUpdated,
            location: {
                latitude,
                longitude,
            }
        });
        return res.status(200).json(user).end();
    } catch (error) {
        console.log("error", error);
        return res.sendStatus(400);
    }
};
