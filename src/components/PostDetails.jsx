import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const needVolunteer = useLoaderData();
  const {
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
      <p>{postTitle}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{location}</p>
      <p>{volunteersNeeded}</p>
      <p>{new Date(deadline).toLocaleDateString()}</p>
      <p>{organizer.name}</p>
      <p>{organizer.email}</p>
    </div>
  );
};

export default PostDetails;
