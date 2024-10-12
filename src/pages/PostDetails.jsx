import { Link, useLoaderData } from "react-router-dom";
import img from "../assets/login_bg.jpg";
import { BiCategory } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

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
    <div className="max-w-7xl mx-auto px-4 pt-10 pb-20">
      <div className="flex gap-4 items-center text-4xl font-bold py-8 text-primary2">
        <FaCircle className="text-xl" />
        <h2>Post Details</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <div className="h-full rounded-lg overflow-hidden shadow-md bg-gray-300">
            <img
              className="w-full h-full object-cover object-center"
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-3xl font-semibold">{postTitle}</p>
          <p className="text-lg border-b-2 border-t-2 border-dashed text-black/75 my-5 py-2">
            {description}
          </p>
          <div className="flex gap-7">
            <p className="text-primary1 font-medium bg-primary1/10 px-4 py-1 rounded-full flex items-center gap-2">
              <BiCategory className="text-lg" /> <span>{category}</span>
            </p>
            <p className="text-primary1 font-medium bg-primary1/10 px-4 py-1 rounded-full flex items-center gap-2">
              <MdOutlineLocationOn className="text-xl" />{" "}
              <span>{location}</span>
            </p>
          </div>
          <p className="my-4 font-medium">
            No. of Volunteers Needed: {volunteersNeeded}
          </p>
          <p className="my-4 font-medium">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </p>
          <div className="border-l-4 pl-3 my-6 border-secondary2/60">
            <h3 className="text-sm font-bold mb-1">Organizer:</h3>
            <p className="text-sm font-semibold">Name: {organizer.name}</p>
            <p className="text-sm font-semibold">Email: {organizer.email}</p>
          </div>
          {volunteersNeeded ? (
            <div className="pt-3">
              <Link
                to={`/be-volunteer/${_id}`}
                className="flex justify-center items-center gap-2 bg-primary2/85 hover:bg-primary2 transition-all text-secondary3 font-semibold py-3 px-5 rounded-md"
              >
                <BsStars className="text-xl" />
                <span>Be a Volunteer</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-lg text-orange-700 p-2 bg-orange-200/45 rounded-lg border-2 border-orange-500/20">
              <FaExclamationCircle />
              <span>We have reached maximum number of volunteers required</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
