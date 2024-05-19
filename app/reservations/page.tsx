import FetchReservations from '@/components/reservations/fetchReservations/fetchReservations'
import Time from '@/components/reservations/time/time'

export default function Reservations() {
    return (
        <div className='flex flex-col min-h-screen w-full items-center gap-5 '>
            <Time/>
            <FetchReservations/>
        </div>
    )
}