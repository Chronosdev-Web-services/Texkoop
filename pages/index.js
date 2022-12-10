import Layout from "../components/Layout";
import Delivery from "../components/Home/Delivery";
import StandOut from "../components/Home/StandOut";
import NewLocation from "../components/Home/NewLocation";
import Partners from "../components/Home/Partners";
import RideWithUs from "../components/Home/RideWithUs";
import MakeItHappen from "../components/Home/MakeItHappen";
import DayIn from "../components/Home/DayIn";
import TooGood from "../components/Home/TooGood";
import PartnerWithUs from "../components/Home/PartnerWithUs";
import MobileApp from "../components/Home/MobileApp";
import LogoScroll from "../components/Home/LogoScroll";
import { useRef } from "react";

export default function Home() {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5;
  };
  return (
    <Layout title="Homepage">
      <div className=" mx-auto">
        <div>
          <video
            src="/videos/1.mp4"
            onCanPlay={() => setPlayBack()}
            autoPlay
            playback
            ref={videoRef}
            loop
            muted
            className="w-full object-cover h-full"
          ></video>
        </div>
      </div>
      <Delivery />
      <StandOut />
      <NewLocation />
      <Partners />
      <LogoScroll />
      <RideWithUs />
      <MakeItHappen />
      <DayIn />
      <TooGood />
      <PartnerWithUs />
      <MobileApp />
    </Layout>
  );
}
