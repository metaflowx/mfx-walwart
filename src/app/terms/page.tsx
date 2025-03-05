import CommonBackButton from "@/components/ui/CommonBackButton";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto text-black px-4 py-10 max-w-3xl">
      <CommonBackButton title="Walmart Inc. Terms and Conditions" />
     
      <p className="mb-4 pt-3">
        Welcome to Walmart Inc.! By accessing or using our platform, you agree to the following Terms and Conditions. Please read them carefully.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Walmart Inc.’s services, you agree to these Terms and Conditions. If you do not agree, please refrain from using the platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use the services offered by Walmart Inc. By agreeing to these Terms, you confirm that you meet this age requirement.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Account Registration & Security</h2>
        <p>
          To use our services, you may need to create an account. You agree to provide accurate and up-to-date information during registration.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Membership Packages & Earnings</h2>
        <p>
          Walmart Inc. offers a variety of membership packages that provide daily earnings, bonuses, and access to exclusive promotions.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Withdrawals & Transactions</h2>
        <p>
          You can withdraw your earnings in USDT (Polygon/BEP20) with a minimum withdrawal of 1.88 USDT. Transaction delays or fees may apply.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Platform Use</h2>
        <ul className="list-disc pl-6">
          <li>Violate laws or regulations</li>
          <li>Engage in fraudulent or misleading behavior</li>
          <li>Attempt to manipulate the platform’s operations</li>
          <li>Interfere with the platform’s servers</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Termination & Suspension of Account</h2>
        <p>
          Walmart Inc. reserves the right to suspend or terminate your account at any time, with or without notice, for violations of these Terms.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Privacy & Data Protection</h2>
        <p>
          We value your privacy and handle your personal information in accordance with our Privacy Policy.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Disclaimers & Limitation of Liability</h2>
        <p>
          Walmart Inc. does not guarantee specific earnings or returns. Participation in the platform is at your own risk.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Amendments</h2>
        <p>
          Walmart Inc. may update or amend these Terms and Conditions at any time. Changes will be posted on this page.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Governing Law & Dispute Resolution</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction where Walmart Inc. is incorporated.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">12. Severability</h2>
        <p>
        If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision will be severed from the remaining provisions, which will continue in full force.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
