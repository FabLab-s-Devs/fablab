"use client";
import { Button } from "@/components/ui/button";
import {
    DialogTrigger,
    Dialog,
    DialogContent,
    DialogClose,
} from "@/components/ui/dialog";
import { useStepper } from "@/components/ui/stepper";
import ReservationSuccess from "@/components/rootpage/reserve/reservationSuccess";
import { useState } from "react";
import ReserveStepper from "./reserveStepper";
import { createReservation } from "@/lib/actions/reservation.actions";

function ReserveButton({ user }: any) {
    const [date, setDate] = useState<Date | null>(null);
    const [period, setPeriod] = useState<string>("1");
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="submit"
                    className="mr-3 px-3 py-2 bg-amber-500 text-white hover:bg-amber-600 rounded-sm"
                >
                    Reserve Now
                </button>
            </DialogTrigger>
            <DialogContent className="px-6 flex items-start justify-center max-w-96 rounded-md flex-col gap-6">
                <div className="flex w-full flex-col gap-4">
                    {
						user && user.teamId ?
						(<ReserveStepper
                        date={date}
                        setDate={setDate}
                        selectedPeriod={period}
                        setSelectedPeriod={setPeriod}
                        Footer={<Footer date={date} period={period} teamId={user.teamId} />}
                    	/>)
						:
						(
							<div className="text-red-500">You must be a chef to reserve.</div>
						)
					}
                </div>
            </DialogContent>
        </Dialog>
    );
}

const Footer = ({ date, period, teamId }: any) => {
    const {
        nextStep,
        prevStep,
        resetSteps,
        currentStep,
        hasCompletedAllSteps,
        isLastStep,
        isOptionalStep,
        isDisabledStep,
    } = useStepper();

    const [error, setError] = useState("");

    const nextPage = async () => {
        const { label } = currentStep;
        setError("");
        if (label == "Date") {
            if (!date) {
                setError("You must choose a date.");
                return;
            }
            nextStep();
        } else if (!period || !["1", "2", "3", "4"].includes(period)) {
            setError("You must choose a correct period.");
        } else {
            try {
                const reservation = { teamId, date, period: parseInt(period) };
                const resResult = await createReservation(reservation);
                resResult.error ? setError(resResult.error) : nextStep();
            } catch (error) {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <>
            {error && <div className="text-red-500">{error}</div>}
            {hasCompletedAllSteps && <ReservationSuccess />}
            <div className="w-full flex justify-end gap-2">
                {hasCompletedAllSteps ? (
                    <DialogClose onClick={resetSteps} className="w-full">
                        <Button
                            size="sm"
                            className="w-full text-center hover:bg-primary"
                        >
                            close
                        </Button>
                    </DialogClose>
                ) : (
                    <>
                        <Button
                            disabled={isDisabledStep}
                            onClick={prevStep}
                            size="sm"
                            variant="secondary"
                            className="hover:bg-secondary"
                        >
                            Prev
                        </Button>
                        <Button
                            size="sm"
                            onClick={nextPage}
                            className="hover:bg-primary"
                        >
                            {isLastStep
                                ? "Finish"
                                : isOptionalStep
                                ? "Skip"
                                : "Next"}
                        </Button>
                    </>
                )}
            </div>
        </>
    );
};

export default ReserveButton;
