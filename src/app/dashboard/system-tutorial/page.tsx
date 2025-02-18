"use client";
import CommonBackButton from "@/components/ui/CommonBackButton";
import { Box, Grid2 } from "@mui/material";
import React, { useState } from "react";
import PackageIntroduction from "./helpcenter/PackageIntroduction";
import AssetRelated from "./helpcenter/AssetRelated";
import InvitationBonus from "./helpcenter/InvitationBonus";

export default function page() {
  const [activeTab, setActiveTab] = useState("package");
  const tabList = [
    {
      title: "Package Introduction",
      val: "package",
    },
    {
      title: "Asset Related",
      val: "asset",
    },
    {
      title: "Invitation Bonus",
      val: "invitation",
    },
  ];
  return (
    <Box>
      <CommonBackButton title="Help Center" />

      <Box
        style={{
          border: " 1.5px solid #DCDCEB",
          borderRadius: "11px",
        }}
        mt={3}
      >
        <Grid2 container spacing={2}>
          {tabList.map((item, index) => {
            return (
              <Grid2 size={{ xs: 4 }}>
                <button
                  onClick={() => setActiveTab(item.val)}
                  className={`w-full h-[70px] rounded-[11px] text-[20px] font-[700] ${
                    item.val === activeTab
                      ? "bg-[#0071CE] border border-[#0071CE] text-white "
                      : "text-[#0071CE]"
                  } `}
                >
                  {item.title}
                </button>
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
      <Box pt={3}>
        {activeTab === "package" ? (
          <PackageIntroduction />
        ) : (
          <>{activeTab === "asset" ? <AssetRelated /> : <InvitationBonus />}</>
        )}
      </Box>
    </Box>
  );
}
