import mongoose from "mongoose";

const MaterialSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    materials: [
        {
            materialTitle: { type: String, required: true },
            materialId: { type: String, required: true },
            totalRecycling: { type: String, required: true },
            unit: { type: String, required: true },
        },
    ],
});

export const MaterialModel = mongoose.model("Material", MaterialSchema);

export const getMaterials = () => MaterialModel.find();

export const createMaterials = (values: Record<string, any>) =>
    new MaterialModel(values)
        .save()
        .then((material) => material.toObject());
