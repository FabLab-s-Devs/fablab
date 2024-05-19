FetchReservations

export default function FetchReservations() {
    return (
        <div className="bg-slate-100 text-black">
            <div className="px-20 py-10">
                <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-2xl">Current Reservations</span>
                    <select>
                        <option value="UIA">UIA</option>
                        <option value="Technopark">Technopark</option>
                    </select>
                </div>
                <table className=" bg-white w-full">
                    <thead>
                        <tr className="border">
                            <th className="w-auto px-6 py-4 text-start">SG</th>
                            <th className="w-auto px-6 py-4 text-start">Theme</th>
                            <th className="w-auto px-6 py-4 text-start">Chef d’équipe</th>
                            <th className="w-auto px-6 py-4 text-start">Encadrant</th>
                            <th className="w-auto px-6 py-4 text-start">Status</th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        <tr>
                            <td className="px-6 py-4">GA5</td>
                            <td className="px-6 py-4">Station météorologique autonome</td>
                            <td className="px-6 py-4">gilleskydd.immongaultanguillet@e-polytechnique.ma</td>
                            <td className="px-6 py-4">outana.imane@e-polytechnique.ma</td>
                            <td className="px-6 py-4 text-center">
                                <span className="inline-block px-2 py-1 text-base font-semibold text-white bg-green-500 rounded-full">Present</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">GA5</td>
                            <td className="px-6 py-4">Station météorologique autonome</td>
                            <td className="px-6 py-4">gilleskydd.immongaultanguillet@e-polytechnique.ma</td>
                            <td className="px-6 py-4">outana.imane@e-polytechnique.ma</td>
                            <td className="px-6 py-4 text-center">
                                <span className="inline-block px-2 py-1 text-base font-semibold text-white bg-red-500 rounded-full">Absent</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-base text-gray-400">Showing data 1 to 2 of 12 entries</span>
                    <ol className="flex justify-center gap-1 text-xs font-medium">
                        <li>
                            <a href="#" className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                                {/* <span className="sr-only">Prev Page</span> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
                                1
                            </a>
                        </li>

                        <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                            2
                        </li>

                        <li>
                            <a href="#" className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
                                3
                            </a>
                        </li>

                        <li>
                            <a href="#" className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
                                4
                            </a>
                        </li>

                        <li>
                            <a href="#" className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                                <span className="sr-only">Next Page</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                                </svg>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
