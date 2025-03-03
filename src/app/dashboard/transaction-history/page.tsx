"use client"
import useAllTransactionHistory from '@/app/customHooks/useAllTransactionHistory'
import CommonBackButton from '@/components/ui/CommonBackButton'
import React from 'react'
import TransactionDetailCard from './TransactionDetailCard'

export default function page() {

    const {allTransactionHistory}=useAllTransactionHistory()
    console.log(">>>>>>>>>>>.allTransactionHistory",allTransactionHistory);
    

  return (
    <div>
         <CommonBackButton title="All History"  />

         <div className="mt-6">
        {allTransactionHistory?.map((transaction) => (
          <TransactionDetailCard  transaction={allTransactionHistory} />
        ))}
      </div>

      
    </div>
  )
}
