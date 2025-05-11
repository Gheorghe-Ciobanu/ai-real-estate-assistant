import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        AI Assistant for Real Estate Professionals
      </h1>
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-8">
        Automate client follow-ups, lead qualification, and calendar scheduling with your own smart real estate agent.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="#" className="w-full md:w-auto">
          <button className="bg-black text-white px-6 py-3 rounded-xl text-lg w-full">Start Free Trial</button>
        </a>
        <a href="#" className="w-full md:w-auto">
          <button className="border border-black px-6 py-3 rounded-xl text-lg w-full">Join Waitlist</button>
        </a>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Solo Plan</h2>
          <p className="mb-4">Perfect for independent agents.</p>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Automated lead responses</li>
            <li>Appointment booking</li>
            <li>CRM integration</li>
          </ul>
          <button className="bg-black text-white w-full py-3 rounded-xl">$99/mo – Start Trial</button>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Team Plan</h2>
          <p className="mb-4">Ideal for real estate teams.</p>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>All Solo features</li>
            <li>Team dashboards</li>
            <li>Advanced reporting</li>
          </ul>
          <button className="bg-black text-white w-full py-3 rounded-xl">$299/mo – Start Trial</button>
        </div>
      </div>
    </div>
  );
}
