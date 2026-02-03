import { notFound } from 'next/navigation';
import PageLayout from '../../../components/PageLayout';
import { categories, subPageData, siteUrl } from '../../../lib/pages';

export function generateStaticParams() {
  return subPageData.map((page) => ({ category: page.category, slug: page.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const page = subPageData.find((item) => item.category === params.category && item.slug === params.slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `${siteUrl}${page.path}/`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteUrl}${page.path}/`
    }
  };
}

export default function SubPage({ params }: { params: { category: string; slug: string } }) {
  const page = subPageData.find((item) => item.category === params.category && item.slug === params.slug);
  if (!page) return notFound();

  const categoryMeta = categories.find((category) => category.slug === page.category);
  const categoryLabel = categoryMeta?.title ?? page.category ?? 'Category';

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 16px 32px' }}>
      <PageLayout
        title={page.title}
        description={page.description}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: categoryLabel, href: `/${page.category}` },
          { label: page.title }
        ]}
        toc={page.toc}
        sections={page.sections}
        related={page.related}
        faq={page.faq}
        lastUpdated={page.lastUpdated}
      />
    </div>
  );
}
