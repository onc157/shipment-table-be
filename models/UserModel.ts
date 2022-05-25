import { Schema, Document, model, Model } from 'mongoose';

export interface UserInterface {
    email: string;
    name: string;
    avatar?: string;
}

export interface UserDocumentInterface extends UserInterface, Document {}

const UserSchema: Schema<UserDocumentInterface> = new Schema<UserDocumentInterface>({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: null,
    },
});

export const UserModel = model<UserDocumentInterface, Model<UserDocumentInterface>>(
    'user',
    UserSchema
);