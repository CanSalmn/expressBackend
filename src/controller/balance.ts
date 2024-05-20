import { getTransaction, createTransaction } from "../db/balance";
import express from "express";

export const getAllTransaction = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const transaction = await getTransaction();
        console.log("transaction",transaction)
        return res.status(200).json(transaction);
    } catch (error) {
        console.log(error);

        return res.sendStatus(400);
    }
};

export const addTransaction = async (
    req: express.Request,
    res: express.Response
) => {
    console.log("req", req.body);
    try {
        const {
            transactionId,
            userId,
            details: { date, transactionType, containerId, price, transactionTitle },
        } = req.body;
        const user = await createTransaction({
            transactionId,
            userId,
            details: {
                date,
                transactionType,
                containerId,
                price,
                transactionTitle,
            },
        });
        return res.status(200).json(user).end();
    } catch (error) {
        console.log("error");
        return res.sendStatus(400);
    }
};

// export const deleteUser = async (
//     req: express.Request,
//     res: express.Response
// ) => {
//     try {
//         const { id } = req.params;

//         const deletedUser = await deleteUserById(id);

//         return res.json(deletedUser);
//     } catch (error) {
//         console.log(error);
//         return res.sendStatus(403);
//     }
// };

// export const updateUser = async (
//     req: express.Request,
//     res: express.Response
// ) => {
//     try {
//         const { id } = req.params;
//         const { username } = req.body;

//         if (!username) {
//             return res.sendStatus(403);
//         }

//         const user = await getUserById(id);
//         user.username = username;
//         await user.save();
//         return res.status(200).json(user).end();
//     } catch (error) {
//         console.log(error);
//         return res.sendStatus(400);
//     }
// };
