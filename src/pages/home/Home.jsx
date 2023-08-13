import Landing from "./homeComponents/Landing";
import Overview from "./homeComponents/Overview";
import Testimonials from "./homeComponents/Testimonials";
import ContactBanner from "../../components/contactBanner/ContactBanner";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Landing />
      <Overview />
      <Testimonials />
      <ContactBanner />
    </>
  );
};

export default Home;
