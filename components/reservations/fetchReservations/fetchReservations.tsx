import { getReservationsByPeriod } from "@/lib/actions/reservation.actions";
import { cn, getNextPeriod } from "@/lib/utils";

const TableRow = ({ id, name, email1, email2, status }: { id: string, name: string, email1: string, email2: string, status: string }) => {
    return (
        <tr key={id}>
            <td className="px-6 py-4">{id}</td>
            <td className="px-6 py-4">{name}</td>
            <td className="px-6 py-4">{email1}</td>
            <td className="px-6 py-4">{email2}</td>
            <td className="px-3 py-4 text-center">
                <span className={cn("px-2 py-1 text-base font-semibold text-white rounded-md", status ? 'bg-green-500' : 'bg-red-500')}>
                    {status ? 'Present' : 'Absent'}
                </span>
            </td>
        </tr>
    );
};

export default async function FetchReservations() {
    const period = getNextPeriod()
    const reservations = await getReservationsByPeriod(period);
    console.log("Period: ", period);
    console.log("Reservations: ", reservations);
    return (
        <div className="text-black w-full">
            <div className="px-10 py-10">
                <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-2xl">Current Reservations</span>
                </div>
                <table className=" bg-white w-full">
                    <thead>
                        <tr className="border">
                            <th className="w-auto px-6 py-4 text-start">SG</th>
                            <th className="w-auto px-6 py-4 text-start">Theme</th>
                            <th className="w-auto px-6 py-4 text-start">Chef d'équipe</th>
                            <th className="w-auto px-6 py-4 text-start">Encadrant</th>
                            <th className="w-auto px-6 py-4 text-start">Status</th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        {
                            reservations.map((res: any) => (
                                <TableRow
                                    key={res._id}
                                    id={res.teamId.sg}
                                    name={res.teamId.theme}
                                    email1={res.teamId.chef}
                                    email2={res.teamId.supervisor}
                                    status={res.present}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
