import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import LoadingState from "../components/LoadingState";
import useAxiosSecure from "../hooks/useAxiosSecure";
import background from "../assets/volunteer_background.svg";

const UpdatePost = () => {
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [needVolunteer, setNeedVolunteer] = useState({});
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/all-need-volunteer/${id}`);
      setNeedVolunteer(data);
      setLoading(false);
      setStartDate(data.deadline);
    };
    getData();
  }, []);

  const {
    _id,
    thumbnail,
    postTitle,
    description,
    category,
    location,
    volunteersNeeded,
  } = needVolunteer;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const postTitle = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = parseInt(form.volunteersNeeded.value);
    const deadline = startDate;

    const updatedNeedVolunteerData = {
      thumbnail,
      postTitle,
      description,
      category,
      location,
      volunteersNeeded,
      deadline,
      organizer: {
        name: user?.displayName,
        email: user?.email,
      },
    };

    try {
      const { data } = await axiosSecure.put(
        `/all-need-volunteer/${_id}`,
        updatedNeedVolunteerData
      );
      console.log(data);
      toast.success("Post Updated Successfully!");
      navigate("/manage-my-post");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="py-20 max-w-2xl lg:max-w-7xl mx-auto px-4">
      <div className="lg:flex rounded-lg shadow-lg overflow-hidden border border-black/20">
        <div className="w-1/2 hidden lg:block">
          <div className="h-full">
            <img
              className="w-full h-full object-cover"
              src={background}
              alt=""
            />
          </div>
        </div>
        <section className="lg:w-1/2 p-6 bg-secondary3/70">
          <h2 className="text-2xl font-semibold border-l-4 pl-2 py-1 border-secondary2">
            Update Volunteer Post
          </h2>

          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
              <div>
                <label className="text-gray-700" htmlFor="thumbnail">
                  Thumbnail
                </label>
                <input
                  id="thumbnail"
                  name="thumbnail"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  defaultValue={thumbnail}
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="postTitle">
                  Post Title
                </label>
                <input
                  id="postTitle"
                  name="postTitle"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  defaultValue={postTitle}
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
                ></textarea>
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="border p-2 rounded-md"
                  defaultValue={category}
                >
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Social Service">Social Service</option>
                  <option value="Animal Welfare">Animal Welfare</option>
                </select>
              </div>

              <div>
                <label className="text-gray-700" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  defaultValue={location}
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="volunteersNeeded">
                  No. of Volunteers Needed
                </label>
                <input
                  id="volunteersNeeded"
                  name="volunteersNeeded"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  defaultValue={volunteersNeeded}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Deadline</label>

                {/* Date Picker Input Field */}
                <DatePicker
                  className="border p-2 rounded-md w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="name">
                  Organizer Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  defaultValue={user?.displayName}
                  disabled
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="email">
                  Organizer email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  defaultValue={user?.email}
                  disabled
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-200 transform bg-primary2 rounded-md hover:bg-primary2/75">
                Update Post
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdatePost;
