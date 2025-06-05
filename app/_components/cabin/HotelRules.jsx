import { FileText } from 'lucide-react'

const rules = ['Smoking not allowed', 'Pets not allowed', 'Swimming pool closed from 8.00pm - 6.00am']

export default function HotelRules() {
    return (
        <div className='mb-16'>
            <h1 className='font-semibold text-4xl pb-8 text-accent-500'>Hotel Rules</h1>
            <div className='space-y-2'>
                {
                    rules.map(rule => (
                        <div key={rule} className='flex items-center gap-4'>
                            <FileText />
                            <p>{rule}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
