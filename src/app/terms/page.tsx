import LegalPage from '../../components/LegalPage';
import { siteUrl } from '../../lib/pages';

export const metadata = {
  title: 'Terms',
  description: 'Site usage terms in plain language.',
  alternates: {
    canonical: `${siteUrl}/terms/`
  },
  openGraph: {
    title: 'Terms',
    description: 'Site usage terms in plain language.',
    url: `${siteUrl}/terms/`
  }
};

export default function Page() {
  return <LegalPage path="/terms" />;
}
