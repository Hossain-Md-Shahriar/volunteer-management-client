import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NeedVolunteerCard from "../components/NeedVolunteerCard";
import LoadingState from "../components/LoadingState";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import NeedVolunteerTable from "../components/NeedVolunteerTable";
import { FaCircle } from "react-icons/fa";

const NeedVolunteer = () => {
  const [allNeedVolunteer, setAllNeedVolunteer] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [layout, setLayout] = useState(true);
  useEffect(() => {
    getData();
  }, [search, loading]);
  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-need-volunteer?search=${search}`
    );
    setAllNeedVolunteer(data);
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearch(searchText);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-16 pb-28">
      <div className="flex gap-4 items-center text-3xl sm:text-4xl font-bold py-4 text-primary2">
        <FaCircle className="text-xl" />
        <h2>Need Volunteer</h2>
      </div>
      <div className="my-4 sm:my-8 flex justify-end items-center gap-4 sm:gap-8 flex-wrap">
        <form
          onSubmit={handleSearch}
          className="border-2 rounded-lg p-1 focus-within:shadow-md"
        >
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            name="search"
            className="outline-none h-full pl-2"
            placeholder="Enter Post Title"
          />
          <button className="bg-primary1/85 hover:bg-primary1 transition-all py-1 px-3 rounded-md text-white">
            Search
          </button>
        </form>
        <button
          onClick={() => setLayout(!layout)}
          className="text-2xl text-sky-700 flex items-center gap-2"
          title="Change Layout"
        >
          {layout ? <GiHamburgerMenu /> : <BsFillGrid3X3GapFill />}
        </button>
      </div>
      <div>
        <p className="text-end pb-2 font-medium text-sm text-black/70">Results: {allNeedVolunteer.length}</p>
      </div>
      <div>
        {loading ? (
          <LoadingState />
        ) : layout ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allNeedVolunteer.map((needVolunteer) => (
              <NeedVolunteerCard
                key={needVolunteer._id}
                needVolunteer={needVolunteer}
              />
            ))}
          </div>
        ) : (
          <NeedVolunteerTable allNeedVolunteer={allNeedVolunteer} />
        )}
      </div>
    </div>
  );
};

export default NeedVolunteer;
