import LegalPage from '../../components/LegalPage';
import { siteUrl } from '../../lib/pages';

export const metadata = {
  title: 'About PlanMyKorea',
  description: 'Learn what PlanMyKorea is and how we provide practical South Korea travel planning guidance for international visitors.',
  alternates: {
    canonical: `${siteUrl}/about/`
  },
  openGraph: {
    title: 'About PlanMyKorea',
    description: 'Learn what PlanMyKorea is and how we provide practical South Korea travel planning guidance for international visitors.',
    url: `${siteUrl}/about/`
  }
};

export default function Page() {
  return <LegalPage path="/about" />;
}
