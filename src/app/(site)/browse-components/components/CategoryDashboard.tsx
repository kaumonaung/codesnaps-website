import { use } from 'react';

import BrowseFilter from '~/app/(site)/browse-components/components/BrowseFilter';
import BrowseGrid from '~/app/(site)/browse-components/components/BrowseGrid';
import { getAllComponentsByCategory } from '~/lib/components/database/queries';

import getSupabaseServerComponentClient from '~/core/supabase/server-component-client';
import getPageFromQueryParams from '~/app/dashboard/[organization]/utils/get-page-from-query-param';

interface DasbboardPageParams {
  searchParams: {
    page?: string;
    free?: string;
    search?: string;
    interactive?: string;
    layout?: string;
    elements?: string;
  };
  organization: string;
  category: string;
}

export default function CategoryDashboard({
  searchParams,
  organization,
  category,
}: DasbboardPageParams) {
  const pageIndex = getPageFromQueryParams(searchParams.page);
  const perPage = 20;

  const { components, count } = use(
    fetchComponents({
      pageIndex,
      perPage,
      category,
      ...searchParams,
    }),
  );

  const pageCount = count ? Math.ceil(count / perPage) : 0;

  return (
    <div className={'mb-10'}>
      <BrowseFilter pageIndex={pageIndex} />

      <BrowseGrid
        pageIndex={pageIndex}
        pageCount={pageCount}
        components={components}
        organization={organization}
      />
    </div>
  );
}

async function fetchComponents(params: {
  pageIndex: number;
  perPage: number;
  category: string;
  free?: string;
  search?: string;
  interactive?: string;
  layout?: string;
  elements?: string;
}) {
  const {
    pageIndex,
    perPage,
    free,
    search,
    category,
    interactive,
    layout,
    elements,
  } = params;

  const client = getSupabaseServerComponentClient();

  const searchParams = {
    pageIndex,
    perPage,
    free,
    search,
    interactive,
    layout,
    elements,
  };

  const {
    data: components,
    error,
    count,
  } = await getAllComponentsByCategory(client, category, searchParams);

  if (error) {
    console.error(error);

    return {
      components: [],
      count: 0,
    };
  }

  return {
    components,
    count: count ?? 0,
  };
}
