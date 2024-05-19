import FetchReservations from '@/components/reservations/fetchReservations/fetchReservations'
import Time from '@/components/reservations/time/time'
import Image from 'next/image'

export default function Reservations() {
    return (
        <div>
            <Time/>
            <FetchReservations/>
        </div>
    )
}