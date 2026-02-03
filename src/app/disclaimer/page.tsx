import LegalPage from '../../components/LegalPage';
import { siteUrl } from '../../lib/pages';

export const metadata = {
  title: 'Disclaimer',
  description: 'Travel info is general and can change.',
  alternates: {
    canonical: `${siteUrl}/disclaimer/`
  },
  openGraph: {
    title: 'Disclaimer',
    description: 'Travel info is general and can change.',
    url: `${siteUrl}/disclaimer/`
  }
};

export default function Page() {
  return <LegalPage path="/disclaimer" />;
}
