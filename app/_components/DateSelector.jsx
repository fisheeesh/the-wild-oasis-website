"use client"

import { differenceInDays, isSameDay, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, bookDates, cabin }) {
  const { range, setRange, resetRange } = useReservation()

  const displayedRange = isAlreadyBooked(range, bookDates) ? {} : range

  const { regularPrice, discount } = cabin

  const numNights = differenceInDays(displayedRange.to, displayedRange.from)

  const cabinPrice = numNights * (regularPrice - discount)

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      {/* Latest version */}
      <DayPicker
        timeZone="UTC"
        className="flex items-center justify-center py-6 min-[1025px]:pt-20 px-[50%] sm:px-0"
        styles={{
          months: { width: "33rem" },
          day: { width: "32px", height: "32px" },
          day_button: { width: "30px", height: "30px" },
        }}
        mode="range"
        onSelect={(range) => setRange(range || { from: null, to: null })}
        selected={displayedRange}
        min={minBookingLength}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(new Date().getFullYear(), 5 * 12)}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={[{ before: new Date() }, (curDate) => bookDates.some(date => isSameDay(date, curDate))]}
      />

      {/* version: 8 */}
      {/* <DayPicker
        className="place-self-center pt-12 rdp"
        mode="range"
        onSelect={(range) => setRange(range || { from: null, to: null })}
        selected={range}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={{ before: new Date() }}
      /> */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2 px-5 md:px-8 bg-accent-500 text-primary-800 h-auto md:h-[72px]">
        <div className="flex items-center gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-lg md:text-xl lg:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p className="">
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border w-fit cursor-pointer hover:bg-primary-800 hover:text-primary-200 transition duration-200 border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
