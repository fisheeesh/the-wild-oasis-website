import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }) {
    const [settings, bookDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id)
    ])

    const session = await auth()

    return (
        <div className="grid max-[1150px]:grid-cols-1 grid-cols-2 border border-primary-800 min-h-[400px]">
            <DateSelector settings={settings} bookDates={bookDates} cabin={cabin} />
            {session?.user ? <ReservationForm user={session?.user} cabin={cabin} /> : <LoginMessage />}
        </div>
    )
}
