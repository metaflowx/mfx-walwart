// components/TransactionDetailCard.tsx
import React from 'react';





const TransactionDetailCard = ({ transaction }:{transaction:any}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md my-4 w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg">
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <h3 className="text-xl font-semibold text-gray-800">{transaction.description}</h3>
        <span className="text-green-500 font-bold">${transaction.amount}</span>
      </div>
      <p className="text-sm text-gray-500">{transaction.date}</p>
    </div>
  );
};

export default TransactionDetailCard;
