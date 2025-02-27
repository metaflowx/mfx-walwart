"use client";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import useReferralList from "@/app/customHooks/useReferralList";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  FormControlLabel,
  Switch,
  Skeleton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { toast } from "react-toastify";

const StyledTableContainer = styled(TableContainer)({
  "&::-webkit-scrollbar": {
    width: "12px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#E8F7FF",
    borderRadius: "0px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#0071CE",
    borderRadius: "10px",
    border: "1px solid #0071CE",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "red",
  },
});

const Tasktable = () => {
  const { referralList,loading, refetch } = useReferralList();

  const handleChange = async (id: string, status: boolean) => {
    try {
      const res = await apiRouterCall({
        method: "PUT",
        endPoint: "disableReferral",
        id: id,
        data: {
          enableReferral: status,
        },
      });
      if (res?.status === 200) {
        toast.success(res.data.message);
        refetch();
      } else {
        toast.error(res?.data.message);
      }
    } catch (error: any) {
      toast.error(error?.response?.data.message);
    }
  };

  return (
    <Box>
      <StyledTableContainer>
        <Table
          sx={{
            minWidth: 650,
            backgroundColor: "#fff",
            border: "1px solid #DCDCEB",
            borderRadius: "8px",
          }}
          aria-label="simple table"
        >
          <TableHead sx={{ backgroundColor: "#E8F7FF" }}>
            <TableRow>
              <TableCell sx={{ fontSize: 16, color: "#0071CE" }}>
                User
              </TableCell>
              <TableCell sx={{ fontSize: 16, color: "#0071CE" }}>
                Referral Code
              </TableCell>

              <TableCell sx={{ fontSize: 16, color: "#0071CE" }}>
                Level1
              </TableCell>
              <TableCell sx={{ fontSize: 16, color: "#0071CE" }}>
                Level2
              </TableCell>
              <TableCell sx={{ fontSize: 16, color: "#0071CE" }}>
                Level3
              </TableCell>
              <TableCell sx={{ fontSize: 16, color: "#0071CE" }}>
                Earning
              </TableCell>
              <TableCell sx={{ fontSize: 16, color: "#0071CE" }} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (

Array.from(new Array(5)).map((_, index) => (
    <TableRow key={index}>
      <TableCell>
        <Skeleton variant="text" width={120} />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" width={80} />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" width={80} />
      </TableCell>
      <TableCell >
        <Skeleton variant="text" width={60} />
      </TableCell>
    
      <TableCell align="center">
        <Skeleton variant="text" width={80} />
      </TableCell>
      <TableCell align="right" style={{display:"flex"}} >
        <Skeleton variant="circular" width={32} height={32} />
        <Skeleton variant="circular" width={32} height={32} />
      </TableCell>
    </TableRow>
  ))

            ) :(
                <>
                 {referralList && referralList.map((item: any) => (
              <TableRow key={item._id}>
                <TableCell>
                  <Typography color="#000">
                    {item?.userId?.email || item?.userId?.mobileNumber}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">{item?.referralCode}</Typography>
                </TableCell>

                <TableCell>
                  <Typography color="#000">
                    Count:{item.referralStats?.levels?.level1?.count}
                  </Typography>
                  <Typography color="#999">
                    Earning:${item.referralStats?.levels?.level1?.earnings}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">
                    Count:{item.referralStats?.levels?.level2?.count}
                  </Typography>
                  <Typography color="#999">
                    Earning:${item.referralStats?.levels?.level2?.earnings}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">
                    Count:{item.referralStats?.levels?.level3?.count}
                  </Typography>
                  <Typography color="#999">
                    Earning:${item.referralStats?.levels?.level3?.earnings}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">{item?.totalEarnings}</Typography>
                </TableCell>
                <TableCell align="right">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!item?.enableReferral}
                        onChange={() =>
                          handleChange(
                            item._id,
                            item?.enableReferral ? false : true
                          )
                        }
                      />
                    }
                    label={!item?.enableReferral ? "Unblocked" : "Blocked"}
                    sx={{ color: "#000" }}
                  />
                </TableCell>
              </TableRow>
            ))}
                </>
            )}
           
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Box>
  );
};

export default Tasktable;
