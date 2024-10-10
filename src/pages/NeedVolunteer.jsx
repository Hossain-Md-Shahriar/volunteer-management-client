import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NeedVolunteerCard from "../components/NeedVolunteerCard";
import LoadingState from "../components/LoadingState";

const NeedVolunteer = () => {
  const [allNeedVolunteer, setAllNeedVolunteer] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
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
    <div>
      <h3 className="text-2xl">we need volunteer {allNeedVolunteer.length}</h3>
      <div className="my-6 flex justify-center">
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
            placeholder="enter post title"
          />
          <button className="btn">Search</button>
        </form>
      </div>
      {loading ? (
        <LoadingState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allNeedVolunteer.map((needVolunteer) => (
            <NeedVolunteerCard
              key={needVolunteer._id}
              needVolunteer={needVolunteer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NeedVolunteer;
