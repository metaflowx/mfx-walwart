import { Box, Grid2, Typography } from "@mui/material";
import Countdown from "./countdown";
import Image from "next/image";
import circleLine from "../../../public/profile/circleLine.svg";
import SpecialPackage from "./specialPackage";

const Investcmp = () => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 24);
  const targetDate = futureDate.toISOString().split("T")[0] + " 00:00:00"; // Format: YYYY-MM-DD HH:mm:ss
  return (
    <>
      <Box>
        <Box>
          <Typography variant="h5" fontWeight={700} color="#0071CE">
            Member Center
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#0071CE",
            borderRadius: "12px",
            marginTop: "1rem",
          }}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "3rem 1rem",
                  borderRadius: "12px",
                  border: "1px solid #0071CE",
                  textAlign: "center",
                }}
              >
                <Typography color="#0071CE" variant="h6" fontWeight={700}>
                  0.00
                </Typography>
                <Typography color="#0071CE">Today's Earnings(USDT)</Typography>
              </Box>
            </Grid2>

            <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <Box
                sx={{
                  padding: "3rem 1rem",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <Typography color="#fff" variant="h6" fontWeight={700}>
                  0.00
                </Typography>
                <Typography color="#fff">Today's Earnings(USDT)</Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Box>

        <Box textAlign={"center"}>
          <Typography mb={2} mt={4} color="#0071CE" variant="h6">
            Reset Countdown
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                "@media(max-width : 600)": {
                  display: "none",
                },
              }}
            >
              <Image src={circleLine} alt={""} />
            </Box>
            <Countdown targetDate={targetDate} />
            <Box
              sx={{
                transform: "rotate(180deg)",
                "@media(max-width : 600)": {
                  display: "none",
                },
              }}
            >
              <Image src={circleLine} alt={""} />
            </Box>
          </Box>
        </Box>

        <SpecialPackage />
      </Box>
    </>
  );
};

export default Investcmp;
