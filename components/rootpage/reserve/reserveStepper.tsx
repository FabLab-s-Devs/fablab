"use client";
import { StepItem, Stepper, Step, useStepper } from "@/components/ui/stepper";
import PickDate from "@/components/rootpage/reserve/pickDate";
import PickPeriod from "@/components/rootpage/reserve/pickPeriod";

const steps = [{ label: "Date" }, { label: "Période" }] satisfies StepItem[];

function ReserveStepper({
    date,
    setDate,
    selectedPeriod,
    setSelectedPeriod,
	Footer,
}: any) {
    return (
        <Stepper initialStep={0} steps={steps}>
            {steps.map((stepProps) => {
                const name = stepProps.label;

                return (
                    <Step key={name} {...stepProps}>
                        {name === "Date" ? (
                            <PickDate date={date} setDate={setDate} />
                        ) : name === "Période" ? (
                            <PickPeriod
                                date={date}
                                selectedPeriod={selectedPeriod}
                                setSelectedPeriod={setSelectedPeriod}
                            />
                        ) : null}
                    </Step>
                );
            })}
            {Footer}
        </Stepper>
    );
}

export default ReserveStepper;
