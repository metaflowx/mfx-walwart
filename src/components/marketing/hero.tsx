"use client";

import { useEffect, useMemo, useState } from "react";

import { iocConfig, tokenConfig } from "@/constants/contract";

import { useRouter } from "next/navigation";

export default function Hero() {
   const router = useRouter();

  const [amount, setAmount] = useState<string>("");


  // const progressWidth = (progress / max) * 100;



  


  return (
    <main className="min-h-screen  flex items-center justify-center sm:mt-10 mt-10 heroBg">
     hero
    </main>
  );
}
