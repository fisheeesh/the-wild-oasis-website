"use client"

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createReservationAction } from "../_lib/actions";
import SubmitButton from "./SubmitButton";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

function ReservationForm({ user, cabin }) {
  const { range, resetRange } = useReservation()
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);

  const cabinPrice = numNights * (regularPrice - discount)

  const bookingData = {
    startDate,
    endDate,
    cabinPrice,
    numNights,
    cabinId: id
  }

  /**
   * ? In order to pass additional data to the action, we need to bind the action with the data. 
   * ? First argument is to basically set the disc keyword of that function. (the new value of dist keyword but we are not interested at all so set null)
   * ? And plus, it allows us to pass some additional arguments into the function.
   * $ The passed data (second argument) will be the first argument of the action function.
   * $ So we must receive that data in the action function as first argument then formData.
   */
  const createReservationWithData = createReservationAction.bind(null, bookingData)

  return (
    <div className='scale-[1.005]'>
      <div className='bg-primary-800 text-primary-300 px-5 lg:px-16 py-2 flex justify-between items-center'>
        <p>Logged in as</p>

        <div className='flex gap-4 items-center'>
          <img
            //? Important to display google profile images
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        // action={createReservationWithData} 
        action={(formData) => {
          createReservationWithData(formData)
          resetRange()
        }}
        className='bg-primary-900 py-10 px-5 lg:px-16 text-lg flex gap-5 flex-col'>
        <div className='space-y-2'>
          <label htmlFor='numGuest'>How many guests? <span className="text-red-600">* </span></label>
          <select
            name='numGuest'
            id='numGuest'
            className='px-5 py-2.5 border-2 transition duration-300 border-primary-200 focus:outline-0 focus:border-accent-600 bg-primary-200 text-primary-800 w-full shadow-sm'
            required
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            rows={4}
            name='observations'
            id='observations'
            className='px-5 resize-none py-2.5 border-2 transition duration-300 border-primary-200 focus:outline-0 focus:border-accent-600 bg-primary-200 text-primary-800 w-full shadow-sm'
            placeholder='Any pets, allergies, special requirements, etc.?'
          />
        </div>

        <div className='flex justify-end items-center'>
          {
            !(startDate && endDate) ?
              <div className="px-8 py-4 text-primary-300 font-semibold flex items-center gap-2 cursor-pointer group">
                <ArrowLongLeftIcon className="w-6 h-6 group-hover:-translate-x-3 transition-transform" />
                <span>Start by selecting dates</span>
              </div> :
              <SubmitButton pendingLabel={'Reserving...'}>
                Reserve now
              </SubmitButton>
          }
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
