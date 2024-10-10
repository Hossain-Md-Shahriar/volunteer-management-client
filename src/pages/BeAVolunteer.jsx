import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import LoadingState from "../components/LoadingState";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BeAVolunteer = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [needVolunteer, setNeedVolunteer] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axiosSecure.get(`/all-need-volunteer/${id}`);
    setNeedVolunteer(data);
    setLoading(false);
  };

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (organizer.email === user?.email) {
      return toast.error("Action Not Permitted!");
    }
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const suggestion = form.suggestion.value;
    const status = form.status.value;
    const volunteerRequestData = {
      postId: _id,
      thumbnail,
      postTitle,
      description,
      category,
      location,
      deadline,
      suggestion,
      status,
      organizer,
      volunteer: {
        name,
        email,
      },
    };

    try {
      const { data } = await axiosSecure.post(
        `/volunteer-request`,
        volunteerRequestData
      );
      console.log(data);
      toast.success("Requested!");
      navigate("/manage-my-post");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="my-10">
      <section className="max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Be a Volunteer
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="thumbnail"
              >
                Thumbnail
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue={thumbnail}
                disabled
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="postTitle"
              >
                Post Title
              </label>
              <input
                id="postTitle"
                name="postTitle"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue={postTitle}
                disabled
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-gray-700 " htmlFor="description">
                Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                id="description"
                name="description"
                defaultValue={description}
                disabled
              ></textarea>
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="category"
              >
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue={category}
                disabled
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="location"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue={location}
                disabled
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="volunteersNeeded"
              >
                No. of Volunteers Needed
              </label>
              <input
                id="volunteersNeeded"
                name="volunteersNeeded"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue={volunteersNeeded}
                disabled
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="deadline"
              >
                Deadline
              </label>
              <input
                id="deadline"
                name="deadline"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue={new Date(deadline).toLocaleDateString()}
                disabled
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Organizer Name
              </label>
              <input
                name="organizer_name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue={organizer?.name}
                disabled
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Organizer email
              </label>
              <input
                name="organizer_email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue={organizer?.email}
                disabled
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Volunteer Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue={user?.displayName}
                disabled
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="email"
              >
                Volunteer Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue={user?.email}
                disabled
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="suggestion"
              >
                Suggestion
              </label>
              <input
                id="suggestion"
                name="suggestion"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="status"
              >
                Status
              </label>
              <input
                id="status"
                name="status"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                defaultValue="requested"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Request
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BeAVolunteer;
