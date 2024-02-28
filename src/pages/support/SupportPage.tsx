import { ContactUs, Features, Searchbar, VideoTutorials } from './components';
import { FAQs } from './components/FAQs';

export function SupportPage() {
  return (
    <>
      <Searchbar />

      <Features />

      <VideoTutorials />

      <ContactUs />

      <FAQs />
    </>
  );
}
