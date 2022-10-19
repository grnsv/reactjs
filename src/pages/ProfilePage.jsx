import React from 'react';
import { useSelector } from 'react-redux';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { userSelector } from '../redux/firebase/selectors';

function ProfilePage() {
  const user = useSelector(userSelector);
  const rows = [
    'uid',
    'displayName',
    'email',
    'emailVerified',
    'phoneNumber',
    'photoURL',
    'isAnonymous',
  ];
  const metadata = [
    'createdAt',
    'creationTime',
    'lastLoginAt',
    'lastSignInTime',
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Property</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
              <TableCell align="right">{user[row]}</TableCell>
            </TableRow>
          ))}
          {metadata.map((row) => (
            <TableRow
              key={`metadata.${row}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
              <TableCell align="right">{user.metadata[row]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProfilePage;
