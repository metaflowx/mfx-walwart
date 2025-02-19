import CommonBackButton from '@/components/ui/CommonBackButton'
import React from 'react'

export default function page() {
  return (
    <div>
      <CommonBackButton title='Member List' />
      <div className="border border-[#DCDCEB] rounded-[20px] mt-4 flex h-[400px] justify-center items-center ">
        <img src="/images/invest/nodatafound.png" />
      </div>
    </div>

  )
}
