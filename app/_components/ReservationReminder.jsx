"use client"

import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useReservation } from './ReservationContext';
import { motion } from 'framer-motion';

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-6 left-0 right-0 mx-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-fit py-5 px-6 bg-accent-500 text-primary-800 font-semibold shadow-xl shadow-slate-900 flex gap-6 items-center justify-between">
      <p className='text-sm lg:text-base'>
        <span>👋</span> Don’t forget to reserve your dates <br /> from{' '}
        {format(new Date(range.from), 'MMM dd yyyy')} to{' '}
        {format(new Date(range.to), 'MMM dd yyyy')}
      </p>
      <button
        type='button'
        onClick={resetRange}
        className='rounded-full cursor-pointer p-1 hover:bg-accent-600 transition-all'
      >
        <XMarkIcon className='h-5 w-5' />
      </button>
    </motion.div>
  );
}

export default ReservationReminder;