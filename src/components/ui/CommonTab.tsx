import { Grid2 } from '@mui/material'
import React from 'react'

export default function CommonTab({tabList,setActiveTab,activeTab}:{tabList?:any,setActiveTab?:any,activeTab?:string}) {
  return (
    <div className='border border-[#0071CE] rounded-[8px] p-[3px] w-full' >

        <Grid2 container spacing={2}>

        {tabList.map((item:any,index:number)=>{
            return(
                <Grid2 key={index} size={{xs:6}} >
                    <button onClick={()=>setActiveTab(item.value)}  className={`${activeTab===item.value ? "bg-[#0071CE] border border-[#0071CE] text-white" :"text-black"}  text-[18px] font-[700] w-full h-[52px] rounded-[6px] ${index===0 ? " mr-[3px]" :" mr-[0px]"} `} >{item?.name}</button>
                </Grid2>
            )
        })}

        </Grid2>
       




      
    </div>
  )
}
