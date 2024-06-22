import Banner from './components/banner';
import AboutUs from './components/about';
import LatestProjects from './components/latest-projects';
import ContactUs from './components/contact-us';
const siteData = {
  headline: 'Welcome to Briguy Tries!',
  tagLoop: 3,
  tags: [
    {
      tagName:'<Web /><Javascript /><CSS /><HTML /><React /><Front-end />'
    }
  ]
}
export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col">       
        <section id="intro-banner" className="py-4">   
          <Banner bannerData={siteData} />
        </section>
        <section id="latest-projects" className="py-4">
          <LatestProjects />
        </section>
        <section id="about-us" className="py-4">
          <AboutUs />
        </section>
        
        <section id="contact-us" className="py-4">
          <ContactUs />
        </section>
    </main>
  );
}
