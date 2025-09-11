'use client';

import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { ApiOrder } from '../api-order';
import { ApiExample } from '../api-example';

// ----------------------------------------------------------------------

export function ApiSeamless() {
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Agents List</PageTitle>

      <ApiOrder />

      <ApiExample />
    </DashboardContent>
  );
}
