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

export default function Home() {
  return (
    <Layout title="Homepage">
      <div className=" mx-auto">
        <div>
          <video
            src="/videos/1.mp4"
            muted
            controls
            className="w-full object-cover h-full"
          ></video>
        </div>
      </div>
      <Delivery />
      <StandOut />
      <NewLocation />
      <Partners />
      <RideWithUs />
      <MakeItHappen />
      <DayIn />
      <TooGood />
      <PartnerWithUs />
      <MobileApp />
    </Layout>
  );
}
