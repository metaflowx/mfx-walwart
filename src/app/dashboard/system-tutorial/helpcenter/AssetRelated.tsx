import { Box } from "@mui/material";
import React from "react";

export default function AssetRelated() {
  return (
    <div className="min-h-screen  py-10">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 rounded-lg">
          <h1 className="text-2xl sm:text-4xl font-semibold mb-4">Welcome to Walmart Inc. - A Smart Way to Grow Your Earnings! 🌟🚀</h1>
          <p className="text-lg mb-8">Our platform is launching on March 5, 2025, offering you an innovative way to grow your wealth by engaging with ads, promotions, and referring friends! 💵📅</p>
          {/* <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition duration-300">
            Join Walmart Inc. Today!
          </button> */}
        </section>

        {/* About Walmart Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-6">About Walmart Inc. 🏢</h2>
          <p className="text-lg text-center mb-8">
            Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores in the United States and 23 other countries 🌍. With a rich history of growth and innovation, Walmart is a trusted name globally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Headquarters:</h3>
              <p className="text-lg">Bentonville, AR 📍</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Founder(s):</h3>
              <p className="text-lg">Bud Walton, Sam Walton 👥</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Founded:</h3>
              <p className="text-lg">1962 📅</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Employees:</h3>
              <p className="text-lg">2,300,000 👨‍👩‍👧‍👦</p>
            </div>
          </div>
        </section>

        {/* How We Generate Revenue Together Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-6">How We Generate Revenue Together 🔄</h2>
          <div className="space-y-6">
            <p className="text-lg text-center">
              Walmart’s platform combines tailored ads, exclusive promotions, and global partnerships to help you earn daily returns while contributing to our success. Here’s how it works:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Viewing Ads 🎯</h3>
              <p className="text-lg mb-4">
                Walmart will show you ads and special offers based on your interests. By interacting with these ads, you help us generate revenue from advertisers. In return, we share a portion of that revenue with you as daily returns. 📈💰
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Promotions & Deals 💥</h3>
              <p className="text-lg mb-4">
                Access exclusive offers and limited-time discounts through our partnerships with top brands and services. These promotions benefit you and contribute to Walmart’s earnings. 🛍️
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Your Earnings, Our Growth 🌱</h3>
              <p className="text-lg mb-4">
                The more you engage with ads, promotions, and special offers, the more you contribute to Walmart’s growth. In turn, we share those profits with you, helping you grow your wealth. 💵
              </p>
            </div>
          </div>
        </section>

        {/* 3-Level Referral Rewards Section */}
        <section className="mt-16 bg-gray-50 p-8 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">3-Level Referral Rewards - Earn Even More! 🎉</h2>
          <p className="text-lg mb-8">
            Maximize your earnings by referring others to Walmart Inc. Here’s how our 3-Level Referral Program works:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Level 1</h3>
              <p className="text-lg">Earn 12% commission on your direct referrals (people YOU invite). 💬</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Level 2</h3>
              <p className="text-lg">Earn 3% commission from referrals made by your direct referrals. 🔄</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Level 3</h3>
              <p className="text-lg">Earn 2% commission from referrals made by your second-level referrals. 🔁</p>
            </div>
          </div>
          <p className="text-xl mt-4 font-semibold">The more people you refer, the higher your earnings will grow! 📈🔥</p>
        </section>

        {/* Fast and Secure Withdrawals Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-6">Fast and Secure Withdrawals 🔒💵</h2>
          <p className="text-lg text-center mb-8">
            We prioritize your security and convenience. Walmart offers fast and secure withdrawals, with a minimum withdrawal amount of just 1.88 USDT, and transactions are supported via USDT (Polygon/BEP20). Withdraw your earnings easily, whenever you like. ⚡💸
          </p>
        </section>

        {/* Why Choose Walmart Inc. Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Walmart Inc.? 🤔</h2>
          <div className="space-y-4">
            <p className="text-lg">• <span className="font-semibold">Innovative Platform:</span> Earn daily by engaging with ads, promotions, and referrals. 💻💰</p>
            <p className="text-lg">• <span className="font-semibold">Global eCommerce Leader:</span> Walmart brings trusted global expertise to help you maximize your earnings. 🌎</p>
            <p className="text-lg">• <span className="font-semibold">Unlimited Referral Earnings:</span> Earn from your network of referrals — the more people you invite, the more you earn. 🔗</p>
            <p className="text-lg">• <span className="font-semibold">Seamless Withdrawals:</span> Enjoy secure, fast, and easy withdrawals with a low minimum requirement. 💵🚀</p>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us: 📞💬</h2>
          <p className="text-lg mb-8">If you have any questions or need assistance, our customer support team is ready to help you every step of the way.</p>
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-green-400 transition duration-300">
            Get in Touch
          </button>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Walmart Inc. Today and Experience a Smarter Way to Grow Your Earnings! 🚀💰</h2>
          {/* <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition duration-300">
            Start Earning Now!
          </button> */}
        </section>
      </div>
    </div>
  );
}
