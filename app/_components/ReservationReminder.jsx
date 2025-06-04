"use client"

import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useReservation } from './ReservationContext';

function ReservationReminder() {
  // CHANGE
  const { range, resetRange } = useReservation()

  if (!range.from || !range.to) return null;

  return (
    <div className='fixed bottom-6 w-fit left-16 right-16 sm:right-auto sm:left-1/2 sm:-translate-x-1/2  py-5 px-8 rounded-full bg-accent-500 text-primary-800 font-semibold justify-center shadow-xl shadow-slate-900 flex gap-8 items-center'>
      <p className='text-sm lg:text-base'>
        <span>👋</span> Don'f forget to reserve your dates <br /> from{' '}
        {format(new Date(range.from), 'MMM dd yyyy')} to{' '}
        {format(new Date(range.to), 'MMM dd yyyy')}
      </p>
      <button type='button' onClick={resetRange} className='rounded-full cursor-pointer p-1 hover:bg-accent-600 transition-all'>
        <XMarkIcon className='h-5 w-5' />
      </button>
    </div>
  );
}

export default ReservationReminder;
