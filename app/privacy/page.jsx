import Link from "next/link"
import Copyright from "../_components/Copyright"
import HeaderSection from "../_components/HeaderSection";

export const metadata = {
    title: 'Privacy'
}

export default function PrivacyPage() {
    return (
        <section className="space-y-12 pt-12">
            <div className="flex items-center gap-6 pb-12">
                <div className="flex-1 h-[1px] bg-primary-800"></div>
                <HeaderSection title='Privacy' />
            </div>

            <p className="sm:text-xl text-base"><strong>Launched Date: </strong> April 11, 2025</p>

            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-3xl font-bold pb-2">Introduction</h3>
                <p>
                    Welcome to <Link href={'/'} className="hover:text-accent-500 transition duration-300">thewildoasis.co</Link>
                </p>
                <p>
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully to understand our practices regarding your personal data and how we handle it.
                </p>
            </div>

            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-3xl font-bold pb-2">Information We Collect</h3>
                <p className="font-bold">Personal Information</p>
                <p>
                    We do not collect personal information unless you choose to contact us. If you send us an email, we may collect the following information:
                </p>
                <p>
                    👉 Your email address <br />
                    👉 Any other details you include in your email
                </p>
                <p className="font-bold">Non-Personal Information</p>
                <p>
                    We do not automatically collect non-personal information such as IP addresses, browser details, or usage data.
                </p>
            </div>

            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-3xl font-bold pb-2">How We Use Your Information</h3>
                <p>If you contact us via email, we use the information you provide solely to:</p>

                <p>
                    👉 Respond to your inquiries. <br />
                    👉 Provide any requested assistance or information.
                </p>
                <p>
                    We do not use your information for marketing purposes or share it with third parties.
                </p>
            </div>
            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-3xl font-bold pb-2">Sharing Your Information</h3>
                <p>We do not sell, rent, or share your personal data with any third parties. Your information is used exclusively for responding to your inquiries.</p>
            </div>
            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-3xl font-bold pb-2">Cookies and Tracking Technologies</h3>
                <p>We do not use cookies or other tracking technologies on our website.</p>
            </div>
            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-3xl font-bold pb-2">Data Retention</h3>
                <p>We retain the information you provide in your emails only as long as necessary to respond to your inquiries. Once the information is no longer needed, it is securely deleted.</p>
            </div>
            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-3xl font-bold pb-2">Your Rights</h3>
                <p>You have the right to:</p>

                <p>
                    👉 Request access to any information you have provided to us. <br />
                    👉 Request the deletion of your information from our records.
                </p>
            </div>
            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-3xl font-bold pb-2">Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date.</p>
            </div>
            <div className="space-y-4 sm:text-xl text-base">
                <h3 className="text-2xl sm:text-3xl font-bold pb-2">Contact Us</h3>
                <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:</p>

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
