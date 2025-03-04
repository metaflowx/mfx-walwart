"use client"
import useAllTransactionHistory from '@/app/customHooks/useAllTransactionHistory'
import CommonBackButton from '@/components/ui/CommonBackButton'
import React from 'react'
import TransactionDetailCard from './TransactionDetailCard'
import { Grid2, Skeleton } from '@mui/material'

export default function Page() {
    const { allTransactionHistory, loading } = useAllTransactionHistory()
    
    return (
        <div>
            <CommonBackButton title="All History" />
            <div className="mt-6">
                <Grid2 container spacing={3}>
                    {loading ? (
                        // Skeleton Loader
                        Array.from(new Array(6)).map((_, index) => (
                          <Grid2 size={{xs:12,sm:6,md:4}} >
                                <Skeleton variant="rectangular" height={150} animation="wave" />
                                <Skeleton variant="text" sx={{ mt: 1 }} />
                                <Skeleton variant="text" width="60%" />
                            </Grid2>
                        ))
                    ) : (
                        allTransactionHistory?.map((transaction, index) => (
                          <Grid2 size={{xs:12,sm:6,md:4}} >
                                <TransactionDetailCard transaction={transaction} />
                            </Grid2>
                        ))
                    )}
                </Grid2>
            </div>
        </div>
    )
}
