import { Grid, Stack, Container, Typography } from '@mui/material';

const companyData = [
  { name: 'Business Name', value: 'BluSmart' },
  { name: 'Company Legal Name', value: 'BluSmart Pvt. Ltd.' },
  { name: 'Industry', value: 'Automobiles' },
  { name: 'Founded In', value: '2016' },
  { name: 'Location', value: 'Noida' },
  { name: 'Email', value: 'info@blusmart.in' },
  { name: 'Founder Name', value: 'Mr. XYZ' },
  { name: 'Company Website', value: 'www.blusmart.in' },
  { name: 'Phone Number', value: '9746573839' },
];

// const valuationDetail = [
//   { name: 'Total Valuation', value: '1 crore' },
//   { name: 'Funding Round', value: '87 lakhs' },
//   { name: 'Total Money Raised', value: '8 crore' },
//   { name: 'Total Rounds Of Funding', value: '4' },
// ];

export default function ListingRequestDetailsView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3">Company Details</Typography>

      <Grid container spacing={2} sx={{ my: 2 }}>
        {companyData.map((item, i) => (
          <Grid item xs={4} key={i}>
            <Stack>
              <Typography variant="b" color="grey" fontWeight="semiBold">
                {item?.name}
              </Typography>

              <Typography variant="p">{item?.value}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
