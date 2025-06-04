import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { format, formatDistance, isPast, isToday, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import DeleteReservation from './DeleteReservation';
import DeleteReservationModal from './DeleteReservationModal';
import Menus from './Menu';
import Modal from './Modal';

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '');

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuest,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  const statusBgColor = (status) => {
    if (status === 'unconfirmed') return 'bg-blue-600 text-blue-200'
    if (status === 'checked-in') return 'bg-green-800 text-green-200'
    if (status === 'checked-out') return 'bg-gray-600 text-gray-200'
  }

  return (
    <div className='flex md:flex-row flex-col border border-primary-800'>
      <div className='relative h-44 md:h-34 lg:h-36 aspect-square'>
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className='object-cover object-center'
        />
      </div>

      <div className='flex-grow px-5 py-3 flex flex-col gap-2 md:gap-1'>
        <div className='flex items-center justify-between'>
          <h3 className='text-2xl font-semibold'>
            {numNights} nights in Cabin {name}
          </h3>
          <div className='lg:hidden'>
            <Menus>
              {!isPast(startDate) && <Menus.Toggle id={id} />}

              <Modal>
                <Menus.List id={id}>
                  <Modal.Opens open='edit-form'>
                    <Menus.Button href={`/account/reservations/edit/${id}`} icon={<PencilSquareIcon className="text-primary-600 w-4 h-4" />}>Edit</Menus.Button>
                  </Modal.Opens>

                  <Modal.Opens open='delete'>
                    <Menus.Button icon={<TrashIcon className="text-primary-600 w-4 h-4" />}>Delete</Menus.Button>
                  </Modal.Opens>
                </Menus.List>

                <Modal.Window name={'delete'}>
                  <DeleteReservationModal id={id} onDelete={onDelete} />
                </Modal.Window>
              </Modal>
            </Menus>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          <p className='text-sm lg:text-base text-primary-300'>
            {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
            {isToday(new Date(startDate))
              ? 'Today'
              : formatDistanceFromNow(startDate)}
            ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-baseline gap-1'>
          <div className='flex items-center gap-4'>
            <p className='text-xl font-semibold text-accent-400'>${totalPrice}</p>
            <p className='text-primary-300'>&bull;</p>
            <p className='text-lg text-primary-300'>
              {numGuest} guest{numGuest > 1 && 's'}
            </p>
          </div>
          <p className='md:ml-auto text-sm text-primary-400'>
            Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}
          </p>
        </div>

        <div className='flex items-center gap-2 mt-auto'>
          <div className='flex items-center gap-2'>
            <p className='text-primary-300 text-sm'>Type: </p>
            {isPast(new Date(startDate)) ? (
              <span className='bg-yellow-800 text-yellow-200 h-5 px-3 uppercase text-[10px] font-bold flex items-center rounded-sm'>
                past
              </span>) : (
              <span className='bg-green-800 justify-center text-green-200 h-5 px-3 uppercase text-[10px] font-bold flex items-center rounded-sm'>
                upcoming
              </span>)
            }
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-primary-300 text-sm'>Status: </p>
            <span className={`${statusBgColor(status)}  justify-center h-5 px-3 uppercase text-[10px] font-bold flex items-center rounded-sm`}>
              {status}
            </span>
          </div>
        </div>
      </div>

      <div className='hidden md:flex flex-col border-l border-primary-800 w-[100px]'>
        {
          !isPast(startDate) ?
            <>
              <Link
                href={`/account/reservations/edit/${id}`}
                className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'
              >
                <PencilSquareIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
                <span className='mt-1'>Edit</span>
              </Link>
              <DeleteReservation bookingId={id} onDelete={onDelete} />
            </> : null
        }
      </div>
    </div>
  );
}

export default ReservationCard;
