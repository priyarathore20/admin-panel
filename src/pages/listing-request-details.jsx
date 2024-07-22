/* eslint-disable import/no-unresolved */
import { Helmet } from 'react-helmet-async';

import { ListingRequestDetailsView } from 'src/sections/listing-request-details';

// ----------------------------------------------------------------------

export default function ListingRequestDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Listing Request Details</title>
      </Helmet>

      <ListingRequestDetailsView />
    </>
  );
}
