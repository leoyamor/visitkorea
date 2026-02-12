import LegalPage from '../../components/LegalPage';
import { siteUrl } from '../../lib/pages';

export const metadata = {
  title: 'Contact PlanMyKorea',
  description: 'Contact PlanMyKorea to report outdated South Korea travel information or ask general questions.',
  alternates: {
    canonical: `${siteUrl}/contact/`
  },
  openGraph: {
    title: 'Contact PlanMyKorea',
    description: 'Contact PlanMyKorea to report outdated South Korea travel information or ask general questions.',
    url: `${siteUrl}/contact/`
  }
};

export default function Page() {
  return <LegalPage path="/contact" />;
}
