import { Grid, MenuItem, Typography } from '@mui/material';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { ashWhiteColor, primaryColor, whiteColor } from '../../../theme';

interface Column {
  id:
    | 'ID'
    | 'productName'
    | 'ccTypes'
    | 'amount'
    | 'shipping'
    | 'tracking'
    | 'createdDate'
    | 'status';
  label: string;
  minWidth?: number;
  align?: 'right';
  /* eslint-disable-next-line no-unused-vars */
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'ID', label: 'ID' },
  { id: 'productName', label: 'Product Name' },
  {
    id: 'ccTypes',
    label: 'CC Types',
  },
  {
    id: 'amount',
    label: 'Amount',
  },
  {
    id: 'shipping',
    label: 'Shipping',
  },
  {
    id: 'tracking',
    label: 'Tracking #',
  },
  {
    id: 'createdDate',
    label: 'Created Date',
  },
  {
    id: 'status',
    label: 'Status',
  },
];

interface Data {
  ID: number;
  productName: string;
  ccTypes: string;
  amount: string;
  shipping: string;
  tracking: string;
  createdDate: string;
  status: string;
}

function createData(
  ID: number,
  productName: string,
  ccTypes: string,
  amount: string,
  shipping: string,
  tracking: string,
  createdDate: string,
  status: string
): Data {
  return {
    ID,
    productName,
    ccTypes,
    amount,
    shipping,
    tracking,
    createdDate,
    status,
  };
}

const rows = [
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
  createData(
    4236314,
    'Sildenafil 60 mg',
    'Master',
    '$72.00',
    'Cancelled',
    'Not Set',
    '02-12-2022',
    'Confirmed'
  ),
];

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#fafbfb',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  background: ashWhiteColor,
  color: primaryColor,
  '&:hover': {
    background: ashWhiteColor,
    color: primaryColor,
  },
}));

const Orders = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<any>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Grid
      container
      item
      sx={{
        padding: '10px',
        background: whiteColor,
        marginBottom: '10px',
        overflowY: 'scroll',
        boxShadow: '0 10px 20px -8px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ height: '10%' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, fontFamily: 'sans-serif' }}
        >
          Orders
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation={0}>
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        background: '#f2f7ff',
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <StyledTableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.ID}
                      >
                        {columns.map((column) => {
                          const value: any = row[column.id];
                          if (column.id === 'status') {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <CustomMenuItem>{value}</CustomMenuItem>
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          }
                        })}
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
      <Grid sx={{ minHeight: 'calc(100vh - 360px)' }}></Grid>
    </Grid>
  );
};

export default Orders;
