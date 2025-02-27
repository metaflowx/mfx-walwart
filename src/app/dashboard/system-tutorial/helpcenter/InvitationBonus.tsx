"use client"
import { useRouter } from "next/navigation";
import React from "react";

export default function InvitationBonus() {
  const router = useRouter()
  return (
    <div className="min-h-screen  py-10">
    <div className="container mx-auto px-0 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 rounded-lg">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-4">🌟 Unlock Unlimited Earnings with Walmart’s 3-Level Referral Program! 🌟</h1>
        <p className="text-lg mb-8">Ready to make your earnings soar? 🚀 Invite friends and expand your network to earn daily!</p>
        <button onClick={()=>router.push("/dashboard/profile")} className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition duration-300">
          Start Referring Today!
        </button>
      </section>

      {/* How It Works Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Level 1</h3>
            <p className="text-lg mb-4">Get a 12% commission on every direct referral (people YOU invite)! 🎯</p>
            <p className="text-lg font-semibold">Example: 100 USDT investment → Earn 12 USDT 💸</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Level 2</h3>
            <p className="text-lg mb-4">Earn 3% from referrals made by your referrals (second-level). 🔗</p>
            <p className="text-lg font-semibold">Example: 100 USDT investment → Earn 3 USDT 🔑</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Level 3</h3>
            <p className="text-lg mb-4">Grab 2% from referrals made by your second-level referrals (third-level). 🌐</p>
            <p className="text-lg font-semibold">Example: 100 USDT investment → Earn 2 USDT 🤑</p>
          </div>
        </div>
      </section>

      {/* Example Earnings Section */}
      <section className="mt-16 bg-gray-50 p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Example Earnings from a 100 USDT Investment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Level 1</h3>
            <p className="text-lg">Earn 12 USDT 💵</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Level 2</h3>
            <p className="text-lg">Earn 3 USDT 💰</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Level 3</h3>
            <p className="text-lg">Earn 2 USDT 🤑</p>
          </div>
        </div>
        <p className="text-xl mt-4 font-semibold">Total: 17 USDT from a 100 USDT investment! 💸</p>
      </section>

      {/* Benefits Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why You’ll Love This Program</h2>
        <div className="space-y-4">
          <p className="text-lg">• <span className="font-semibold">Earn Daily:</span> The more you refer, the more you earn—daily! 📅</p>
          <p className="text-lg">• <span className="font-semibold">Unlimited Potential:</span> Your earning potential grows exponentially! 📈</p>
          <p className="text-lg">• <span className="font-semibold">Easy & Secure:</span> Just invite friends and let Walmart handle the rest. 🔒</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">📈 Start Referring Today and Watch Your Earnings Multiply! 💸</h2>

        <p className="text-xl mt-4 font-semibold">The more you refer, the more you earn—there's no limit to how much you can make! 🌍</p>
        <p className="text-xl mt-4 font-semibold">Don’t wait—your financial freedom is just a referral away. 🌟💰</p>

        

        <button onClick={()=>router.push("/dashboard")} className="bg-green-500 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-green-400 transition duration-300">
          Start Earning Now!
        </button>
      </section>
    </div>
  </div>
  );
}
