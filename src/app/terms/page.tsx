import CommonBackButton from "@/components/ui/CommonBackButton";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - MyApp</title>
        <meta name="description" content="Read our privacy policy to learn how we handle your data." />
      </Head>
      <main className="px-6 py-12 w-full text-gray-200 bg-gray-900  shadow-lg min-h-screen">
        <CommonBackButton title="Terms and Condition" />
        <h1 className="text-4xl font-bold mb-6 text-white pt-3">Privacy Policy</h1>
        <p className="mb-4">
          At <strong>MyApp</strong>, we prioritize your privacy. This document outlines how we collect, use, and protect your personal data when you use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-white">1. Information We Collect</h2>
        <p className="mb-4">
          We collect personal data such as your name, email address, and other details necessary for providing our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-white">2. How We Use Your Information</h2>
        <p className="mb-4">
          Your data is used to improve our services, personalize your experience, and ensure secure transactions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-white">3. Data Protection & Security</h2>
        <p className="mb-4">
          We use industry-standard security measures to protect your personal information from unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-white">4. Third-Party Services</h2>
        <p className="mb-4">
          Some third-party tools may collect information as part of our service. We ensure that they comply with privacy standards.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-white">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, modify, or delete your personal data. Contact us to request changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-white">6. Contact Us</h2>
        <p>
          If you have any questions about our privacy policy, feel free to contact us at:
          <br />
          <span className="font-semibold">support@example.com</span>
        </p>
      </main>
    </>
  );
};

export default PrivacyPolicy;
