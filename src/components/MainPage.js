import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NameBox from "./NameBox";
import AboutUs from "./AboutUs";
import ContactInfo from "./ContactInfo";
import Location from "./Location";
import MenuList from "./MenuList";
export default function MainPage() {
  const [ci, setci] = useState(false);
  const [l, setl] = useState(false);
  function changeContactInfo() {
    setci(!ci);
    if (l) {
      setl(false);
    }
  }

  function changeLocation() {
    setl(!l);
    if (ci) {
      setci(false);
    }
  }

  const [aboutUsVisible, setAboutUsVisible] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);
  const [contactInfoVisible, setContactInfoVisible] = useState(false);
  function aboutUsHandler() {
    setAboutUsVisible(!aboutUsVisible);
  }
  function contactInfoHandler() {
    setContactInfoVisible(!contactInfoVisible);
    if (locationVisible) setLocationVisible(!locationVisible);
  }
  function locationHandler() {
    setLocationVisible(!locationVisible);
    if (contactInfoVisible) setContactInfoVisible(!contactInfoVisible);
  }
  return (
    <div>
      <Header changeAboutUs={aboutUsHandler} colorOfAU={aboutUsVisible} />
      <NameBox />
      <AboutUs isVisibleAU={aboutUsVisible} />
      <MenuList isVisibleML={true} />
      <Footer
        changeContactInfo={changeContactInfo}
        changeLocation={changeLocation}
        colorOfCI={ci ? "#ef70fa" : "blue"}
        colorOfL={l ? "#ef70fa" : "blue"}
      />

      {l && <Location isVisibleL={l} />}
      {ci && <ContactInfo isVisibleCI={ci} />}
    </div>
  );
}
