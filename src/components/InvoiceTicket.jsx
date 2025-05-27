import React from "react";

const InvoiceTicket = () => {
  const invoiceData = {
    company: "Smart Bus Services",
    passengerName: "John Doe",
    ticketNumber: "INV-20250502-001",
    route: "New York → Boston",
    date: "2025-05-02",
    time: "10:30 AM",
    seat: "12A",
    price: "$35.00",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg border border-gray-200">
        <div className="bg-blue-600 text-white rounded-t-2xl p-5">
          <h1 className="text-xl font-bold">{invoiceData.company}</h1>
          <p className="text-sm">Bus Ticket Invoice</p>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Passenger:</span>
            <span className="font-semibold">{invoiceData.passengerName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Ticket #:</span>
            <span className="font-semibold">{invoiceData.ticketNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Route:</span>
            <span className="font-semibold">{invoiceData.route}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Date:</span>
            <span className="font-semibold">{invoiceData.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Time:</span>
            <span className="font-semibold">{invoiceData.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Seat:</span>
            <span className="font-semibold">{invoiceData.seat}</span>
          </div>
          <div className="border-t pt-4 flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>{invoiceData.price}</span>
          </div>
        </div>

        <div className="bg-gray-100 rounded-b-2xl p-3 text-center text-xs text-gray-500">
          Thank you for traveling with us.
        </div>
      </div>
    </div>
  );
};

export default InvoiceTicket;
