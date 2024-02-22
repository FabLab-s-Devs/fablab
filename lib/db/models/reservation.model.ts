import { Schema, model, models } from 'mongoose';

export interface IReservation {
    teamId: string;
    status: 'confirmed' | 'abscent' | 'canceled';
    place: 'uia' | 'technopark';
    date: string;
    period: 1 | 2 | 3 | 4;
    createdAt?: Date;
}

const ReservationSchema = new Schema({
    teamId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        required: false,
        validate: {
            validator: function (value: string) {
                return ["confirmed", "abscent", "canceled"].includes(value);
            },
            message: `Reservation status should be either confirmed, abscent or canceled`
        },
        default: 'confirmed'
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
    date: {
        type: Date,
        required: true,
        validate: {
            validator: function (value: Date) {
                return value >= new Date();
            },
            message: `Reservation should be in the future!`
        }
    },
    period: {
        type: Number,
        required: true,
        min: 1,
        max: 4
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Reservation = models.Reservation || model('Reservation', ReservationSchema);

export default Reservation;