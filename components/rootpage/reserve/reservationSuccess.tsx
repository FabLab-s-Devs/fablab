const ReservationSuccess = () => {
    return (
        <>
            <div className="flex gap-3 items-center justify-start w-full">
                <h2 className="text-[14px] text-start font-medium text-foreground">
                    Réservation a été effectuée avec succès
                </h2>
                <video
                    src="/assets/checkbox.webm"
                    autoPlay
                    muted
                    playsInline
                    className="h-6 w-6"
                />
            </div>
			<p className="text-sm text-gray-500 text-justify">
				Vous recevrez un e-mail de confirmation contenant la date et
                l'heure de votre réservation ainsi que les règles d'utilisation
                à respecter.
            </p>
            
        </>
    );
};


export default ReservationSuccess;