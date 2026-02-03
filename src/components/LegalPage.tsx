import { notFound } from 'next/navigation';
import PageLayout from './PageLayout';
import { legalPageData } from '../lib/pages';

export default function LegalPage({ path }: { path: string }) {
  const page = legalPageData.find((item) => item.path === path);
  if (!page) return notFound();

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 16px 32px' }}>
      <PageLayout
        title={page.title}
        description={page.description}
        crumbs={[{ label: 'Home', href: '/' }, { label: page.title }]}
        toc={page.toc}
        sections={page.sections}
        related={page.related}
        faq={page.faq}
        lastUpdated={page.lastUpdated}
      />
    </div>
  );
}
