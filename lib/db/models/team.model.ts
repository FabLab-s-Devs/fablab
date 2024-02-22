import { Schema, model, models, Document } from 'mongoose';

export interface ITeam {
    chefId: string;
    supervisorId: string;
    place?: 'uia' | 'technopark';
    createdAt?: Date;
}

const teamSchema = new Schema({
    chefId: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
        unique: true
    },
    supervisorId: {
        type: Schema.Types.ObjectId,
        ref: 'Supervisor',
        required: true,
        unique: true
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
