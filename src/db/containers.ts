import mongoose from "mongoose";

const ContainersSchema = new mongoose.Schema({
    containerId: { type: String, required: true },
    address: { type: String, required: true },
    type: { type: String, required: true },
    capacity: { type: String, required: true },
    title: { type: String,required: true },
    description: { type: String,required: true },
    lastUpdated: { type: String, required: true },
    location: {
        latitude: { type: String, required: true },
        longitude: { type: String, select: true },
    },
});

export const ContainerModel = mongoose.model("Container", ContainersSchema);

export const getContainers = () => ContainerModel.find();

export const createContainer = (values: Record<string, any>) =>
    new ContainerModel(values).save().then((container) => container.toObject());
