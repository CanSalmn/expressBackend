import mongoose from "mongoose";

const BalanceSchema = new mongoose.Schema({
    transactionId: { type: String, required: true },
    userId: { type: String, required: true },
    details: {
        date: { type: String, default: Date.now },
        transactionType: { type: Boolean, required: true },
        containerId: { type: String, default: null },
        price: { type: String, required: true },
        transactionTitle: { type: String, required: true }
    },

});

export const BalanceModel = mongoose.model("Balance", BalanceSchema);

export const getTransaction = () => BalanceModel.find().limit(100);


export const createTransaction = (values: Record<string, any>) =>
    new BalanceModel(values).save().then((transaction) => transaction.toObject());




// export const getUserByEmail = (email: string) => BalanceModel.findOne({ email });

// export const getUserBySessionToken = (sessionToken: string) => {
//     UserModel.findOne({
//         "authentication.sessionToken": sessionToken,
//     });
// };

// export const getUserById = (id: string) => UserModel.findById(id);

// export const createUser = (values: Record<string, any>) =>
//     new UserModel(values).save().then((user) => user.toObject());

// export const deleteUserById = (id: string) =>
//     UserModel.findOneAndDelete({ _id: id });

// export const updateUserById = (id: string, values: Record<string, any>) => {
//     UserModel.findByIdAndUpdate(id, values);
// };


