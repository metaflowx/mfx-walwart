"use client"
import { apiRouterCall } from '@/app/ApiConfig/Services/Index'
import CommonBackButton from '@/components/ui/CommonBackButton'
import moment from 'moment'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
export default function Page() {
  const [memberList, setMemberList] = useState([])
  const search = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)

  const getLevelDataByLevelId = async () => {
    const levl = search.get("id")
    try {
      const res = await apiRouterCall({
        method: "GET",
        endPoint: "getReferralUsersByLevel",
        params: {
          level: Number(levl)
        }
      })
      if (res?.status === 200) {
        setMemberList(res.data.data)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getLevelDataByLevelId()
  }, [])

  return (
    <div>
      <CommonBackButton title='Member List' />
      <div className="border border-[#DCDCEB] rounded-[20px] mt-4  flex justify-center items-center">
        {isLoading ? (
          <div className="flex flex-col space-y-4 w-full p-4 overflow-hidden">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-300 h-10 w-10"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-300 h-10 w-10"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ) : memberList.length > 0 ? (
          <ul className="w-full p-4">
            {memberList.map((member:any, index) => (
             <>
              <li key={index} className="border-b border-gray-200 py-2 flex justify-between">
               <p> 
                
                {member?.packageName}</p>
                <p>
                Direct Subordinates:{member?.count}
                </p>
                </li>
              <li key={index} className="border-b border-gray-200 py-2 flex justify-between">
               <p className='flex items-center'> 

               <Image src="/profile/logo.svg" alt={""} width={30} height={30} />&nbsp;
                
                {member?.user?.email ||member?.user?.mobileNumber}</p>
                <p>
                Joined Date:{moment(member?.user?.createdAt).format("lll")}
                </p>
                </li>
             </>
            ))}
          </ul>
        ) : (
          <img src="/images/invest/nodatafound.png" />
        )}
      </div>
    </div>
  )
}