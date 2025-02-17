import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div>
      <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/auth/logo.png"
                className="w-[178px] h-[42px] sm:w-[178px] sm:h-[42px]"
              />
            </Link>
    </div>
  )
}
