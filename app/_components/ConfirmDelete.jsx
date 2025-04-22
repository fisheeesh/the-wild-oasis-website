export default function ConfirmDelete({ onCloseModal, onAction, id }) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-accent-500 text-2xl font-bold border-b pb-3">Delete Confirmation.</h1>
            <p className="text-primary-200 text-lg">Are you sure you want to delete this reservation #{id}?</p>
            <div className="flex items-center justify-end gap-4 mt-6">
                <button
                    type="button"
                    onClick={onCloseModal}
                    className="border border-primary-100 px-5 py-2 cursor-pointer hover:bg-primary-100 hover:text-primary-950 transition duration-300">
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={onAction}
                    className="px-5 py-2 bg-accent-500 text-primary-100 cursor-pointer hover:bg-accent-600 transition duration-300">
                    Confirm
                </button>
            </div>
        </div>
    )
}
