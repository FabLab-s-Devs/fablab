"use client"
import { DialogTrigger, Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import PickDate from "@/components/rootpage/reserve/pickDate/pickDate";
import PickPeriod from "@/components/rootpage/reserve/pickPeriod/pickPeriod";
import { createReservation } from "@/lib/actions/reservation.actions";

const SuccessPage = ({reset}:any) => {
  return (
    <><div className="flex gap-3 items-center justify-start w-full">
      <h2 className="text-[14px] text-start font-medium text-foreground">
        Your reservation is successful
      </h2>
      <video
        src="/assets/checkbox.webm"
        autoPlay
        muted
        playsInline
        className="h-6 w-6" />
    </div>
    <DialogClose onClick={() => reset()} className="w-full text-white font-medium px-2 py-2 bg-primary text-[12px] rounded-md shadow-cta">

      Close
    </DialogClose>

    </>
  )
}

function ReserveButton({ user }: any) {
  const [date, setDate] = useState<Date>(new Date());
  const [period, setPeriod] = useState<string>("1");
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const pages = [<PickDate date={date} setDate={setDate} />, <PickPeriod date={date} selectedPeriod={period} setSelectedPeriod={setPeriod} user={user}/>];
  const resetStates = () => {
    setDate(new Date());
    setPeriod("1");
    setPageIndex(0);
    setError('');
    setIsSuccess(false);
  };
  const onPrevPage = async () => {
    setError('');
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const onNextPage = async () => {
    setError('');
    if (pageIndex < pages.length - 1) {
      if (pageIndex == 0 && !date) {
        setError('You must choose a date.');
        return;
      }
      setPageIndex(pageIndex + 1);
    } else {
      if (pageIndex == 1 && (!period || !["1", "2", "3", "4"].includes(period))) {
        setError('You must choose a correct period.');
        return;
      }
      if (!user.teamId) {
        setError('You must be part of a team to make a reservation.');
        return;
      }
      const reservation = {
        teamId: user.teamId,
        date: date,
        period: parseInt(period),
      };
      try {
        const resResult = await createReservation(reservation);
        if (resResult.error) {
          setError(resResult.error);
        } else {
          setIsSuccess(true);
        }
      } catch (error) {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="submit" className="font-medium px-2 py-2 bg-primary text-[12px] rounded-md shadow-cta">Reserve Now</button>
      </DialogTrigger>
      <DialogContent className="px-6 flex items-start justify-center max-w-96 rounded-md flex-col gap-6">
        {isSuccess ? (
          <SuccessPage reset={resetStates} />
        ) : (
          <>
            {error && <div className="text-red-500">{error}</div>}
            {pages[pageIndex]}
            <div className="flex items-center justify-between w-full">
              {
                pageIndex === 0 ?
                <DialogClose>
                  <button onClick={onPrevPage} className="py-1 px-3 bg-slate-300/55 text-center text-background font-medium rounded-sm">Close</button>
                </DialogClose>
                :
                <button onClick={onPrevPage} className="py-1 px-3 bg-slate-300/55 text-center text-background font-medium rounded-sm">Prev</button>
              }
              
              <button onClick={onNextPage} className="py-1 px-3 bg-primary text-center text-background font-medium rounded-sm">{pageIndex === pages.length - 1 ? "Reserve" : "Next"}</button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ReserveButton;
