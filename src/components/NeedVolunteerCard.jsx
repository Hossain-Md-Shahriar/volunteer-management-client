import { useState } from "react";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

const NeedVolunteerCard = ({ needVolunteer }) => {
  const {
    _id,
    thumbnail,
    postTitle,
    category,
    deadline,
    volunteersNeeded,
    location,
  } = needVolunteer;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="flex flex-col justify-between group p-4 rounded-xl transform hover:-translate-y-1 shadow-xl hover:shadow-2xl transition-all duration-200">
      <div className="overflow-hidden rounded-lg w-full h-56 bg-gray-300">
        <img
          className="w-full h-full object-center object-cover"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="space-y-2 pt-3">
        <h2 className="text-xl font-bold">{postTitle}</h2>
        <div className="flex justify-between">
          <p className="flex items-center gap-1 group-hover:text-primary2 text-black font-medium">
            <BiCategory className="text-lg" /> {category}
          </p>
          <p className="text-sm bg-green-300/45 border border-green-500 rounded-full px-3 text-green-700">
            Deadline:{" "}
            <span className="font-semibold">
              {new Date(deadline).toLocaleDateString()}
            </span>
          </p>
        </div>
        <p className="font-medium flex items-center gap-1 pt-2">
          <MdOutlineLocationOn className="text-xl" /> <span>{location}</span>
        </p>
        <p className="font-medium">Volunteers Needed: {volunteersNeeded}</p>
      </div>
      <div className="pt-3">
        <Link to={`/need-volunteer/${_id}`} onClick={() => setIsClicked(true)}>
          <button className="font-medium flex items-center justify-center gap-3 bg-primary1/85 hover:bg-primary1 transition-all text-secondary3 py-2 px-2 w-full rounded-lg">
            {isClicked && <span className="loading loading-spinner"></span>}
            <span>View Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NeedVolunteerCard;
