import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NeedVolunteerCard from "../components/NeedVolunteerCard";
import LoadingState from "../components/LoadingState";

const NeedVolunteer = () => {
  const [allNeedVolunteer, setAllNeedVolunteer] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-need-volunteer`
    );
    setAllNeedVolunteer(data);
    setLoading(false);
  };

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div>
      <h3 className="text-2xl">we need volunteer {allNeedVolunteer.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allNeedVolunteer.map((needVolunteer) => (
          <NeedVolunteerCard
            key={needVolunteer._id}
            needVolunteer={needVolunteer}
          />
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteer;
