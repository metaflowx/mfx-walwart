"use client";

import useUserList from "@/app/customHooks/useUserList";
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
  Snackbar,
  TablePagination,
  Skeleton,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import moment from "moment";
import copy from "clipboard-copy";
import { sortAddress } from "@/utils/fun";
import { Copy } from "lucide-react";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import { toast, ToastContainer } from "react-toastify";
import UpdateBalanceDialog from "./UpdateBalanceDialog";

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

interface User {
  _id: string;
  walletAddress: string;
  email?: string;
  mobileNumber?: string;
  status: string;
  createdAt: string;
  totalEarnings: number;
  totalPacakge:number
}

const Tasktable = () => {
  const { allUserList,loading, refetch } = useUserList();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [open, setOpen] = useState(false);
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = async (id: string,status:string) => {
    try {
      const res = await apiRouterCall({
        method: "PUT",
        endPoint: "changeUserStatus",
        id: id,
        data:{
          status:status
        }
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

  const handleCopy = (addresstext: string) => {
    copy(addresstext || "");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      {open && (
          <UpdateBalanceDialog open={open} onClose={() => setOpen(false)}  />
      )}
      <ToastContainer />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Address copied"
      />
      <StyledTableContainer>
        <Table sx={{ minWidth: 650, backgroundColor: "#fff", border: "1px solid #DCDCEB", borderRadius: "8px" }}>
          <TableHead sx={{ backgroundColor: "#E8F7FF" }}>
            <TableRow>
              {["Wallet Add.", "Email/Phone", "Status", "Joining Date", "Total Investment", "Earning", "Action"].map((header) => (
                <TableCell
                  key={header}
                  sx={{ borderBottom: "1px solid #DCDCEB", fontSize: 16, color: "#0071CE" }}
                  align={header === "Action" ? "right" : "left"}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ?(
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
            ):(

              <>
               {allUserList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: User) => (
              <TableRow key={item._id}>
                <TableCell>
                  <Typography onClick={() => handleCopy(item.walletAddress)} style={{ display: "flex", cursor: "pointer" }} color="#000">
                    {sortAddress(item.walletAddress)}&nbsp;
                    <Copy color="#000" size={20} />
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">{item.email || item.mobileNumber}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">{item.status}</Typography>
                </TableCell>
                <TableCell style={{whiteSpace:"pre"}}>
                  <Typography color="#000">{moment(item.createdAt).format("lll")}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">${item?.totalPacakge || 0}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">${item.totalEarnings || 0}</Typography>
                </TableCell>
                <TableCell align="right" style={{whiteSpace:"pre"}} >
                  <FormControlLabel
                    control={<Switch checked={item.status === "BLOCK"} onChange={() => handleChange(item._id,item.status === "BLOCK"? "ACTIVE":"BLOCK")} />}
                    label={item.status === "BLOCK" ? "Unblocked" : "Blocked"}
                    sx={{ color: "#000" }}
                  />
                  {/* <Button onClick={()=>setOpen(true)} >Update Wallet</Button> */}
                </TableCell>
              </TableRow>
            ))}
              </>

            )}
           
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={allUserList?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Tasktable;
