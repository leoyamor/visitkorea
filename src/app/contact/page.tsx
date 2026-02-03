import LegalPage from '../../components/LegalPage';
import { siteUrl } from '../../lib/pages';

export const metadata = {
  title: 'Contact',
  description: 'How to reach us with feedback or corrections.',
  alternates: {
    canonical: `${siteUrl}/contact/`
  },
  openGraph: {
    title: 'Contact',
    description: 'How to reach us with feedback or corrections.',
    url: `${siteUrl}/contact/`
  }
};

export default function Page() {
  return <LegalPage path="/contact" />;
}
