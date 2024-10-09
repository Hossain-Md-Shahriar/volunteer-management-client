import { useState } from "react";
import { Link } from "react-router-dom";

const NeedVolunteerCard = ({ needVolunteer }) => {
  const { _id, thumbnail, postTitle, category, deadline } = needVolunteer;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{postTitle}</h2>
        <p>{category}</p>
        <p>{new Date(deadline).toLocaleDateString()}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/need-volunteer/${_id}`}
            onClick={() => setIsClicked(true)}
            className="btn btn-primary"
          >
            {isClicked && <span className="loading loading-spinner"></span>}
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerCard;
