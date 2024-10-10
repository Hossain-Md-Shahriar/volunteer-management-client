import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const needVolunteer = useLoaderData();
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
      {volunteersNeeded ? (
        <Link to={`/be-volunteer/${_id}`} className="btn">Be a Volunteer</Link>
      ) : (
        <button className="btn cursor-pointer" disabled={true}>
          Be a Volunteer
        </button>
      )}
    </div>
  );
};

export default PostDetails;
