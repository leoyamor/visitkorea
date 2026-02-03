import LegalPage from '../../components/LegalPage';
import { siteUrl } from '../../lib/pages';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How we handle data and site analytics.',
  alternates: {
    canonical: `${siteUrl}/privacy-policy/`
  },
  openGraph: {
    title: 'Privacy Policy',
    description: 'How we handle data and site analytics.',
    url: `${siteUrl}/privacy-policy/`
  }
};

export default function Page() {
  return <LegalPage path="/privacy-policy" />;
}
