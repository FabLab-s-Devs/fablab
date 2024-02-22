import { Schema, model, models } from 'mongoose';

export interface IUser {
    _id?: string;
    email: string;
    role: 'admin' | 'chef' | 'student' | 'supervisor';
    teamId?: string;
    createdAt?: Date;
  }

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        validate: {
            validator: function (value: string) {
                return ["admin", "chef", "student", "supervisor"].includes(value);
            },
            message: `there are only 4 roles: admin, chef, supervisor, and student`
        }
    },
    teamId: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



export default models.User || model("User", userSchema)
