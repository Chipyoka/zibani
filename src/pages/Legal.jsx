
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useEffect } from 'react';

const Legal = () => {
    // Set page title
    document.title = 'Legal & Compliance - Zibani';

    // Get the official email from environment variables
    const officialEmail = import.meta.env.VITE_APP_OFFICIAL_EMAIL;
    console.log('Official Email:', officialEmail);
    if (!officialEmail) {
        console.error('Official email is not set in environment variables.');
        return <div>Error: Official email not configured.</div>;
    }

    // Always start to top of the page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Navbar />
            <section className="max-w-4xl mx-auto px-4 py-16 mt-20 text-gray-800">
            <h1 className="text-3xl font-bold mb-8">Legal & Compliance</h1>

            <section className="mb-10 text-gray-700 text-left">
                <h2 className="text-2xl font-semibold mb-4">1. Terms of Service</h2>
                <p className="mb-4">
                Welcome to <strong>Zibani</strong>. By accessing and using our web application, you agree to comply with and be bound by the following terms and conditions. These terms apply to all users, visitors, and contributors to the platform.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                <li>Zibani is a location-aware, audio-first platform built to enrich travel experiences and preserve Zambia’s cultural heritage.</li>
                <li>The content provided is for informational and cultural enrichment purposes only and should not be treated as authoritative travel or legal advice.</li>
                <li>Users may not redistribute, republish, or exploit the content for commercial purposes without express permission.</li>
                <li>We reserve the right to suspend access or modify the platform at any time without prior notice.</li>
                <li>All users are expected to use the application lawfully and respectfully, in accordance with applicable laws and public standards.</li>
                </ul>
            </section>

            <hr className="my-6" />

            <section className="mb-10 text-gray-700 text-left">
                <h2 className="text-2xl font-semibold mb-4">2. Privacy Policy</h2>
                <p className="mb-4">
                Zibani is committed to protecting your personal data and maintaining transparency on how we collect, store, and use your information.
                </p>

                <h3 className="text-lg font-semibold mt-4">2.1 What We Collect</h3>
                <ul className="list-disc pl-6 space-y-2">
                <li><strong>Location Data:</strong> With your explicit permission, we access your device's GPS to determine your current town for context-aware audio experiences. This location data is not stored or transmitted to third parties.</li>
                <li><strong>Device Information:</strong> We collect anonymized data such as browser type, operating system, and usage patterns for performance optimization and debugging.</li>
                <li><strong>Feedback Submissions:</strong> When you submit feedback, we may collect your email and message solely for internal improvements and community enrichment.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4">2.2 How We Use It</h3>
                <ul className="list-disc pl-6 space-y-2">
                <li>To deliver location-specific cultural and tourism audio content.</li>
                <li>To enhance the functionality and accessibility of the app.</li>
                <li>To improve user experience through anonymized analytics and feedback.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4">2.3 Data Protection</h3>
                <p>
                All user data is processed in accordance with the <strong>Data Protection Act of Zambia</strong>, and applicable international standards. We implement encryption and secure storage practices to ensure data integrity and confidentiality.
                </p>
            </section>

            <hr className="my-6" />

            <section className="mb-10 text-gray-700 text-left">
                <h2 className="text-2xl font-semibold mb-4">3. Cookie Policy</h2>
                <p className="mb-4">
                Zibani uses cookies to improve performance, store user preferences, and enhance your overall browsing experience.
                </p>
                <h3 className="text-lg font-semibold mt-4">3.1 What are Cookies?</h3>
                <p className="mb-4">
                Cookies are small text files stored on your device by your browser. They help us remember your settings, such as audio preferences or town filters, and optimize load times.
                </p>

                <h3 className="text-lg font-semibold mt-4">3.2 Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 space-y-2">
                <li><strong>Functional Cookies:</strong> Help remember UI preferences and accessibility options.</li>
                <li><strong>Analytical Cookies:</strong> Used to anonymously track how users interact with the app, helping us improve.</li>
                <li><strong>Session Cookies:</strong> Maintain app state during your visit and expire once you close the browser.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4">3.3 Managing Your Preferences</h3>
                <p>
                You can opt out of non-essential cookies through your browser settings. Continued use of the app implies consent to our cookie usage under applicable law.
                </p>
            </section>

            <hr className="my-6" />

            <section className="mb-10 text-gray-700 text-left">
                <h2 className="text-2xl font-semibold mb-4">4. Content Accuracy and Responsibility</h2>
                <p className="mb-4">
                The cultural, historical, and tourism content presented in Zibani is curated from verified sources and local contributors. However, we do not guarantee the absolute accuracy of every piece of information. Users are encouraged to verify facts independently if needed.
                </p>
                <p>
                Zibani shall not be held liable for any discrepancies or decisions made based on the information provided in the app. All content is subject to continuous improvement and feedback integration.
                </p>
            </section>

            <hr className="my-6" />

            <section className="mb-10 text-gray-700 text-left">
                <h2 className="text-2xl font-semibold mb-4">5. Compliance with Zambian Laws</h2>
                <p>
                Zibani complies with the regulatory framework set forth by the Government of Zambia, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The <strong>Data Protection Act of 2021</strong></li>
                <li>The <strong>Electronic Communications and Transactions Act</strong></li>
                <li>Applicable provisions of the <strong>Zambian Constitution</strong> relating to digital rights and cultural preservation</li>
                <li>
                    The <strong>Cyber Security Act of 2025</strong> enforcing ethical conduct in cyberspace, protects user rights, and prohibits the misuse of digital platforms, including the dissemination of false information or unauthorized data access.
                </li>
                </ul>
                <p className="mt-4">
                We are committed to operating transparently and responsibly as a cultural-tech platform designed to preserve and promote Zambian heritage.
                </p>
            </section>

            <p className="px-6 py-4 bg-gray-100 rounded-md text-sm text-left text-gray-500 mt-8">
                Last updated: July 2025 — For any legal concerns, data access requests, or partnership queries, please contact: <a href={`mailto:${officialEmail}`} className="text-primary hover:underline">{officialEmail}</a>
            </p>
            </section>
            <Footer />
            <ScrollToTop />
        </>
    );
}      

export default Legal;
