"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

const RatingCard = ({ product }: { product?: any }) => {
  const router = useRouter();
 const search =useSearchParams()
 const taskId =search.get("taskId")
  return (
    <Box
      sx={{
        borderRadius: "30px",
        overflow: "hidden",
        border: "1px solid #DCDCEB",
        height: "100%",
        "&:hover": {
          border: "1px solid #1DAEFF",
          boxShadow: "0px 17px 50px 0px #8F90A652",
        },
      }}
    >
      <Card sx={{ borderRadius: "12px", height: "100%" }}>
        <Box sx={{ position: "relative" }}>
          <img
            src={product?.image}
            style={{
              padding: "15px",
              width: "100%",
              borderRadius: "30px",
              height: "350px",
              objectFit: "cover",
            }}
            alt={""}
          />
         
        </Box>

        <CardContent>
          <Typography
            variant="h6"
            sx={{
              color: "#110229",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            {product.title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Rating defaultValue={5} disabled style={{ color: "#faaf00" }} />
            <Typography
              variant="body2"
              color="#110229"
              sx={{ fontSize: "16px", fontWeight: 400 }}
            >
              {product?.points} Points
            </Typography>
          </Box>

          <Button
            onClick={() => router.push(`/dashboard/rating?id=${product?._id}&taskId=${taskId}`)}
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              background: "#0071CE",
              borderRadius: "12px",
              height: "50px",
            }}
          >
            Rating Immediately
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RatingCard;
