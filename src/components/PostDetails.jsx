import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const needVolunteer = useLoaderData();
  const [isClicked, setIsClicked] = useState(false);
  const {
    _id,
    thumbnail,
    postTitle,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizer,
  } = needVolunteer;
  return (
    <div>
        <h2 className="text-3xl">Volunteer Need Post Details</h2>
      <p>{postTitle}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{location}</p>
      <p>{volunteersNeeded}</p>
      <p>{new Date(deadline).toLocaleDateString()}</p>
      <p>{organizer.name}</p>
      <p>{organizer.email}</p>
      <Link
        to={`/be-volunteer/${_id}`}
        onClick={() => setIsClicked(true)}
        className="btn"
      >
        {isClicked && <span className="loading loading-spinner"></span>}
        Be a Volunteer
      </Link>
    </div>
  );
};

export default PostDetails;
