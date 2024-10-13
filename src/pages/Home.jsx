import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import NeedVolunteerCard from "../components/NeedVolunteerCard";
import LoadingState from "../components/LoadingState";
import { Link } from "react-router-dom";
import WhyVolunteerWithUs from "../components/WhyVolunteerWithUs";

const Home = () => {
  const [allNeedVolunteer, setAllNeedVolunteer] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/need-volunteers`
      );
      setAllNeedVolunteer(data);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <div>
      <Banner />
      <div className="my-28 md:my-36 max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-4xl text-center font-extrabold">
            Volunteer Needs Now
          </h2>
          <p className="text-center max-w-2xl text-black/75">
            Make a difference today by joining one of our urgent volunteer
            opportunities. Explore current openings across various categories
            and lend a helping hand to those who need it most. Together, we can
            create meaningful change.
          </p>
        </div>
        <div className="mt-12">
          {loading ? (
            <LoadingState />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allNeedVolunteer.map((needVolunteer) => (
                <NeedVolunteerCard
                  key={needVolunteer._id}
                  needVolunteer={needVolunteer}
                />
              ))}
            </div>
          )}
          <div className="flex justify-center mt-12">
            <Link
              to="/need-volunteer"
              className="py-3 px-8 text-xl font-medium bg-primary2/80 hover:bg-primary2 transition-all text-white rounded-lg"
            >
              See All
            </Link>
          </div>
        </div>

        <WhyVolunteerWithUs />
      </div>
    </div>
  );
};

export default Home;
