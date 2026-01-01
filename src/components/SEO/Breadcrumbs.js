'use client'
import { usePathname } from 'next/navigation';
import { generateBreadcrumbsSchema } from './BreadcrumbsSchema';

export default function BreadcrumbsSchema({ pageTitle }) {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }

  const breadcrumbs = generateBreadcrumbsSchema(pathname, pageTitle);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbs),
      }}
    />
  );
}

