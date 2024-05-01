const ReservationSuccess = () => {
    return (
        <>
            <div className="flex gap-3 items-center justify-start w-full">
                <h2 className="text-[14px] text-start font-medium text-foreground">
                    Your reservation is successful
                </h2>
                <video
                    src="/assets/checkbox.webm"
                    autoPlay
                    muted
                    playsInline
                    className="h-6 w-6"
                />
            </div>
        </>
    );
};


export default ReservationSuccess;