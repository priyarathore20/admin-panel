import React from 'react';
import { Link } from 'react-router-dom';

import {
  Paper,
  Table,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Container,
  TableContainer,
} from '@mui/material';

const companies = [
  {
    name: 'Tech Solutions',
    founded: 2010,
    contact: '123-456-7890',
    email: 'info@techsolutions.com',
  },
  {
    name: 'Innovative Minds',
    founded: 2015,
    contact: '987-654-3210',
    email: 'contact@innovativeminds.com',
  },
  {
    name: 'Future Enterprises',
    founded: 2000,
    contact: '555-123-4567',
    email: 'support@futureenterprises.com',
  },
  {
    name: 'Creative Agency',
    founded: 2012,
    contact: '444-555-6666',
    email: 'hello@creativeagency.com',
  },
  {
    name: 'Bright Technologies',
    founded: 2018,
    contact: '333-222-1111',
    email: 'info@brighttech.com',
  },
  {
    name: 'Green Solutions',
    founded: 2008,
    contact: '999-888-7777',
    email: 'contact@greensolutions.com',
  },
  {
    name: 'NextGen Innovations',
    founded: 2020,
    contact: '777-666-5555',
    email: 'support@nextgen.com',
  },
  {
    name: 'Alpha Corp',
    founded: 1998,
    contact: '888-999-0000',
    email: 'info@alphacorp.com',
  },
];

export default function ListingRequestsView() {
  return (
    <Container maxWidth="xl">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell align="left">Founded In</TableCell>
              <TableCell align="left">Contact</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((row, index) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.founded}</TableCell>
                <TableCell align="left">{row.contact}</TableCell>
                <TableCell align="left">{row.email}</TableCell>

                <TableCell align="left">
                  <Link to={`${index}`}>
                    <Button size="large" type="submit" variant="contained" color="inherit">
                      View Now
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
