import { Schema, model, models, Document } from 'mongoose';

export interface ITeam {
    sg: string;
    theme: string;
    chef: string;
    supervisor: string;
    members: string[];
    place?: string;
    createdAt?: Date;
}

const teamSchema = new Schema({
    sg: {
        type: String,
        required: true,
        unique: true
    },
    theme: {
        type: String,
        required: true
    },
    chef: {
        type: String,
        required: true,
        unique: true
    },
    supervisor: {
        type: String,
        required: true,
    },
    members: {
        type: Array,
        of: String
    },
    place: {
        type: String,
        validate: {
            validator: function (value: string) {
                return ["uia", "technopark"].includes(value);
            },
            message: `Reservation place should be either uia or technopark`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Team = models.Team || model('Team', teamSchema);

export default Team;
