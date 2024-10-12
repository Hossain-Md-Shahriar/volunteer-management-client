import { useState } from "react";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

const NeedVolunteerCard = ({ needVolunteer }) => {
  const { _id, thumbnail, postTitle, category, deadline, volunteersNeeded, location } =
    needVolunteer;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="group border-2 p-3 rounded-xl transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <div className="overflow-hidden rounded-lg w-full h-56">
        <img
          className="w-full h-full object-center object-cover"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </div>
      <div className="space-y-2 pt-3">
        <h2 className="text-xl font-bold">{postTitle}</h2>
        <div className="flex justify-between">
          <p className="flex items-center gap-1 group-hover:text-primary2 text-black font-medium">
            <BiCategory className="text-lg" /> {category}
          </p>
          <p className="text-sm bg-secondary2/25 border border-primary2/35 rounded-full px-3 text-primary2/85">
            Deadline:{" "}
            <span className="font-semibold">
              {new Date(deadline).toLocaleDateString()}
            </span>
          </p>
        </div>
        <p className="font-medium flex items-center gap-1 py-2">
          <MdOutlineLocationOn className="text-xl" /> <span>{location}</span>
        </p>
        <p className="font-medium">Volunteers Needed: {volunteersNeeded}</p>
        <div className="pt-3">
          <Link
            to={`/need-volunteer/${_id}`}
            onClick={() => setIsClicked(true)}
          >
            <button className="flex items-center justify-center gap-3 bg-primary1/90 hover:bg-primary1 transition-all text-secondary3 py-2 px-2 w-full rounded-lg">
              {isClicked && <span className="loading loading-spinner"></span>}
              <span>View Details</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerCard;
