"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { CSSProperties } from "react"; // Import for CSSProperties typing

export default function CalenderModal() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className=" flex items-center justify-center">
      <Card className="w-full bg-transparent max-w-[400px] p-0 shadow-lg rounded-[20px]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg bg-white text-black "
        
          styles={{
            head_cell: {
              width: "100%",
              textAlign: "center",
              padding: "0.5rem",
            } as CSSProperties, // Explicit type for style
            cell: {
              padding: "0.25rem",
            } as CSSProperties, // Explicit type for style
            nav_button: {
              padding: "0.5rem",
              border: "none",
              backgroundColor: "transparent",
            } as CSSProperties, // Explicit type for style
          }}
        />
      </Card>
    </div>
  );
}
