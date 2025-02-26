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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import moment from "moment";
import copy from "clipboard-copy";
import { sortAddress } from "@/utils/fun";
import { Copy } from "lucide-react";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import { toast, ToastContainer } from "react-toastify";

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
}

const Tasktable = () => {
  const { allUserList, refetch } = useUserList();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = async (id: string) => {
    try {
      const res = await apiRouterCall({
        method: "PUT",
        endPoint: "changeUserStatus",
        id: id,
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
              {["Wallet Add.", "Email/Phone", "Status", "Joining Date", "Earning", "Action"].map((header) => (
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
            {allUserList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: User) => (
              <TableRow key={item._id}>
                <TableCell>
                  <Typography onClick={() => handleCopy(item.walletAddress)} style={{ display: "flex", cursor: "pointer" }} color="#000">
                    {sortAddress(item.walletAddress)}
                    <Copy color="#fff" />
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">{item.email || item.mobileNumber}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">{item.status}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">{moment(item.createdAt).format("lll")}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#000">${item.totalEarnings}</Typography>
                </TableCell>
                <TableCell align="right">
                  <FormControlLabel
                    control={<Switch checked={item.status === "BLOCK"} onChange={() => handleChange(item._id)} />}
                    label={item.status === "BLOCK" ? "Unblocked" : "Blocked"}
                    sx={{ color: "#000" }}
                  />
                </TableCell>
              </TableRow>
            ))}
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
