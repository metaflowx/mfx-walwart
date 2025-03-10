
import moment from 'moment';
import React from 'react';
import { formatUnits } from 'viem';





const TransactionDetailCard = ({ transaction }:{transaction:any}) => {
 
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md my-4 w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg">
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <h3 className="text-xl font-semibold text-gray-800">Amount</h3>
        <span className="text-green-500 font-bold">${transaction?.amountInWei>0 ? formatUnits(transaction?.amountInWei,18):"0"}</span>
      </div>
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <h3 className="text-xl font-semibold text-gray-800">Settlement Status</h3>
        <span className={`${transaction?.settlementStatus==="pending" ? "text-yellow-400":"text-green-500"}  font-bold capitalize`}>{transaction?.settlementStatus}</span>
      </div>
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <h3 className="text-xl font-semibold text-gray-800">Tx. Type</h3>
        <span className={`${transaction?.txType==="withdrawal" ? "text-red-500":"text-green-500"}  font-bold capitalize`}>{transaction?.txType}</span>
      </div>
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <h3 className="text-xl font-semibold text-gray-800">Tx. Status</h3>
        <span className={`${transaction?.txStatus==="pending" ? "text-yellow-400":"text-green-500"}  font-bold capitalize`}>{transaction?.txStatus}</span>
      </div>
      <p className="text-sm text-gray-500">{moment(transaction?.createdAt).format("lll")}</p>
    </div>
  );
};

export default TransactionDetailCard;
