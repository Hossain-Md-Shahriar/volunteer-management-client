import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import "../style/table.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiPencilBold } from "react-icons/pi";
import { FaExclamationCircle } from "react-icons/fa";

const MyNeedVolunteer = ({ needVolunteers, getNeedVolunteersData }) => {
  const [toastId, setToastId] = useState(null);

  const showConfirmationToast = (_id) => {
    // if the toast is already visible do nothing
    if (toastId) return;

    // create a new toast and store its ID
    const id = toast(
      (t) => (
        <div className="font-medium">
          Are you sure you want to delete?
          <div className="flex justify-center items-center mt-2">
            <button
              onClick={() => {
                toast.dismiss(t.id); // Close the toast
                deleteHandler(_id); // Call delete logic
                setToastId(null); // reset the toast ID when dismissed
              }}
              className="w-full px-2 py-1 ml-2 bg-green-500 text-white rounded"
            >
              Yes
            </button>
            <button
              onClick={() => {
                toast.dismiss(t.id); // Dismiss toast if "No"
                setToastId(null); // reset the toast ID when dismissed
              }}
              className="w-full px-2 py-1 ml-2 bg-red-500 text-white rounded"
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity, // Keep toast open until dismissed
      }
    );

    // Store the toast ID in state
    setToastId(id);
  };

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/need-volunteer/${id}`
      );
      console.log(data);
      toast.success("Deleted Successfully!");

      // refresh UI
      getNeedVolunteersData();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  if (!needVolunteers.length) {
    return (
      <div className="py-4">
        <div className="flex items-center justify-center gap-3 text-lg text-orange-700 p-2 bg-orange-200/45 rounded-lg border-2 border-orange-500/20">
          <FaExclamationCircle />
          <span>You don't have any need volunteer post</span>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table>
        <thead>
          <tr>
            <th>Post Title</th>
            <th>Category</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {needVolunteers.map((needVolunteer) => (
            <tr key={needVolunteer._id}>
              <td>{needVolunteer.postTitle}</td>
              <td>{needVolunteer.category}</td>
              <td>{needVolunteer.location}</td>
              <td className="flex justify-center gap-9 text-2xl p-3">
                <Link
                  to={`/update/${needVolunteer._id}`}
                  className="text-gray-600 hover:text-green-400 transition-all duration-200"
                  title="Update"
                >
                  <PiPencilBold />
                </Link>
                <button
                  onClick={() => showConfirmationToast(needVolunteer._id)}
                  className="text-gray-600 hover:text-red-400 transition-all duration-200"
                  title="Delete"
                >
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyNeedVolunteer;
