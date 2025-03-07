"use client"
import useAllTransactionHistory from '@/app/customHooks/useAllTransactionHistory'
import CommonBackButton from '@/components/ui/CommonBackButton'
import React, { useEffect, useState } from 'react'
import TransactionDetailCard from './TransactionDetailCard'
import { FormControl, Grid2, InputLabel, MenuItem, Pagination, Select, Skeleton, Typography } from '@mui/material'

export default function Page() {
  const [filters, setFilters] = useState({
    txType: '',
    txStatus: '',
    settlementStatus: '',
    page: 1,
    limit: 12,
   
   
});
    const { allTransactionHistory,totalPage, loading,refetch } = useAllTransactionHistory(filters)
    const handleFilterChange = (e:any) => {
      setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 });
  };

  const handlePageChange = (event:any, value:any) => {
      setFilters({ ...filters, page: value });
  };
  useEffect(() => {
    refetch();
}, [filters]);
    return (
        <div>
            <CommonBackButton title="All History" />
            <div className="mt-6 flex gap-4">
                <FormControl fullWidth size="small">
                    <InputLabel>Tx Type</InputLabel>
                    <Select fullWidth name="txType" value={filters.txType} onChange={handleFilterChange}>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="deposit">Deposit</MenuItem>
                        <MenuItem value="withdrawal">Withdrawal</MenuItem>
                    </Select>
                </FormControl>
                
                <FormControl fullWidth size="small">
                    <InputLabel>Tx Status</InputLabel>
                    <Select fullWidth name="txStatus" value={filters.txStatus} onChange={handleFilterChange}>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>
                    </Select>
                </FormControl>
                
                <FormControl fullWidth size="small">
                    <InputLabel>Settlement Status</InputLabel>
                    <Select fullWidth name="settlementStatus" value={filters.settlementStatus} onChange={handleFilterChange}>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="settled">Settled</MenuItem>
                        <MenuItem value="unsettled">Unsettled</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="mt-6">
                <Grid2 container spacing={3}>
                    {loading ? (
                        // Skeleton Loader
                        Array.from(new Array(12)).map((_, index) => (
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
            {allTransactionHistory && allTransactionHistory.length>0 && (
 <div className="mt-6 flex justify-center">
 <Pagination
     count={totalPage} 
     page={filters.page}
     onChange={handlePageChange}
     color="primary"
 />
</div>
            )}

            {!loading && allTransactionHistory && allTransactionHistory.length===0 && (
               <Typography variant="h6" color="textSecondary">
               No data found
             </Typography>
            ) }
           
        </div>
    )
}
