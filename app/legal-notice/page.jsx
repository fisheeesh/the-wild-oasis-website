import Copyright from "../_components/Copyright"
import HeaderSection from "../_components/HeaderSection"

export const metadata = {
    title: 'Legal Notice'
}

export default function LegalNoticePage() {
    return (
        <section className="space-y-12 pt-12">
            <div className="flex items-center gap-6 pb-12">
                <div className="flex-1 h-[1px] bg-primary-800"></div>
                <HeaderSection title='Legal Notice' />
            </div>
            <div className="space-y-6 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-4xl font-bold pb-2">Responsible for the Website</h3>
                <p><strong>Company Name:</strong> SWAM YI PHYO</p>
                <p><strong>Legal Form:</strong> Sole Proprietor (บุคคลธรรมดา)</p>
                <p><strong>Headquarters Address:</strong> STK Resort, Mae-Fah-Luang, Chiang Rai, 57100, Thailand</p>
                <p><strong>Registration Number:</strong> 0105567890123  </p>
                <p><strong>Email: </strong> <a
                    className="hover:text-accent-500 transition duration-300"
                    href="mailto:swanphyo444@gmail.com"
                    target="_blank"
                    rel="nofollow"
                    aria-label="Send me an Email"
                >
                    swanphyo444@gmail.com
                </a></p>
            </div>
            <div className="space-y-6 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-4xl font-bold pb-2">Hosting</h3>
                <p><strong>Hosting Provider:</strong> Vercel</p>
                <p><strong>Address:</strong> 440 N Barranca Ave #4133, Covina, CA 91723</p>
                <p><strong>Phone:</strong> (559) 288-7060</p>
                <p><strong>Email: </strong><a
                    className="hover:text-accent-500 transition duration-300"
                    href="mailto:dmca@vercel.com"
                    target="_blank"
                    rel="nofollow"
                    aria-label="Send me an Email"
                >
                    dmca@vercel.com
                </a></p>
            </div>
            <div className="space-y-6 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-4xl font-bold pb-2">Intellectual Property</h3>
                <p>
                    All content on this site (texts, images, logos, etc.) is the exclusive property of Mr. Swam Yi Phyo, unless stated otherwise. Reproduction, distribution, or use without prior written permission is prohibited and may result in legal action.
                </p>
            </div>
            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-3xl font-bold pb-2">Responsibilities</h3>
                <p>
                    The site owner is not responsible for damages resulting from the use of this site, including interruptions or bugs.
                </p>
                <p>
                    External links on this site do not imply any responsibility for their content.
                </p>
            </div>
            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-4xl font-bold pb-2">International</h3>
                <p>
                    This website is operated by Mr. Swam Yi Phyo, based in Thailand. By using this site, you agree to comply with the applicable laws of Thailand.
                </p>
            </div>
            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-4xl font-bold pb-2">Contact</h3>
                <p>
                    For any questions or requests, contact us at:
                </p>
                <a
                    className="hover:text-accent-500 transition duration-300"
                    href="mailto:swanphyo444@gmail.com"
                    target="_blank"
                    rel="nofollow"
                    aria-label="Send me an Email"
                >
                    swanphyo444@gmail.com
                </a>
            </div>
            <div className="pt-8">
                <Copyright />
            </div>
        </section>
    )
}
