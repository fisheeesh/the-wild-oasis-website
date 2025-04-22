"use client"

import { TrashIcon } from '@heroicons/react/24/solid';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';
import Modal from './Modal';
import ConfirmDelete from './ConfirmDelete';
import toast from 'react-hot-toast';

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    startTransition(() => onDelete(bookingId))
    toast.success('Reservation deleted successfully!')
  }

  return (
    <Modal>
      <Modal.Opens open={'delete'}>
        <button disabled={isPending} className='group cursor-pointer flex items-center gap-2 uppercase disabled:cursor-not-allowed text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'>
          {
            !isPending ?
              <>
                <TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
                <span className='mt-1'>Delete</span>
              </> :
              <span className='mx-auto'><SpinnerMini /></span>
          }
        </button>
      </Modal.Opens>

      <Modal.Window name={'delete'}>
        <ConfirmDelete onAction={handleDelete} id={bookingId} />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteReservation;
