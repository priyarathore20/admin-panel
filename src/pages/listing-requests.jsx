/* eslint-disable import/no-unresolved */
import { Helmet } from 'react-helmet-async';

import { ListingRequestsView } from 'src/sections/listing-requests';

// ----------------------------------------------------------------------

export default function ListingRequestsPage() {
  return (
    <>
      <Helmet>
        <title>Listing Requests</title>
      </Helmet>

      <ListingRequestsView />
    </>
  );
}
