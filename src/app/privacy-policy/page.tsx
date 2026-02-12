import LegalPage from '../../components/LegalPage';
import { siteUrl } from '../../lib/pages';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Read how PlanMyKorea handles cookies, analytics, and Google AdSense data for transparent travel information browsing.',
  alternates: {
    canonical: `${siteUrl}/privacy-policy/`
  },
  openGraph: {
    title: 'Privacy Policy',
    description: 'Read how PlanMyKorea handles cookies, analytics, and Google AdSense data for transparent travel information browsing.',
    url: `${siteUrl}/privacy-policy/`
  }
};

export default function Page() {
  return <LegalPage path="/privacy-policy" />;
}
