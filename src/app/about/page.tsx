import LegalPage from '../../components/LegalPage';
import { siteUrl } from '../../lib/pages';

export const metadata = {
  title: 'About',
  description: 'Why this guide exists and how we keep it simple.',
  alternates: {
    canonical: `${siteUrl}/about/`
  },
  openGraph: {
    title: 'About',
    description: 'Why this guide exists and how we keep it simple.',
    url: `${siteUrl}/about/`
  }
};

export default function Page() {
  return <LegalPage path="/about" />;
}
