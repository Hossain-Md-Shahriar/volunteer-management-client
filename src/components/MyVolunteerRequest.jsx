import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { ImCancelCircle } from "react-icons/im";
import "../style/table.css";
import { FaExclamationCircle } from "react-icons/fa";

const MyVolunteerRequest = ({
  volunteerRequests,
  getVolunteerRequestsData,
}) => {
  const [toastId, setToastId] = useState(null);

  const showConfirmationToast = (_id, postId) => {
    // if the toast is already visible do nothing
    if (toastId) return;

    // create a new toast and store its ID
    const id = toast(
      (t) => (
        <div className="font-medium">
          Are you sure you want to cancel?
          <div className="flex justify-center items-center mt-2">
            <button
              onClick={() => {
                toast.dismiss(t.id); // Close the toast
                cancelHandler(_id, postId); // Call cancel logic
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

  const cancelHandler = async (id, postId) => {
    console.log(postId);
    try {
      const { data } = await axios.delete(
        `${
          import.meta.env.VITE_API_URL
        }/volunteer-request?id=${id}&postId=${postId}`
      );
      console.log(data);
      toast.success("Request Cancelled");

      // refresh UI
      getVolunteerRequestsData();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  if (!volunteerRequests.length) {
    return (
      <div className="py-4">
        <div className="flex items-center justify-center gap-3 text-lg text-orange-700 p-2 bg-orange-200/45 rounded-lg border-2 border-orange-500/20">
          <FaExclamationCircle />
          <span>You haven't made any request to be volunteer</span>
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
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {volunteerRequests.map((volunteerRequest) => (
            <tr key={volunteerRequest._id}>
              <td>{volunteerRequest.postTitle}</td>
              <td>{volunteerRequest.category}</td>
              <td>{volunteerRequest.location}</td>
              <td className="">
                <span className="text-sm bg-secondary2/25 border border-primary2/35 rounded-full px-3 text-primary2/85 w-28">
                  {new Date(volunteerRequest.deadline).toLocaleDateString()}
                </span>
              </td>
              <td className="flex justify-center items-center p-3">
                <button
                  onClick={() =>
                    showConfirmationToast(
                      volunteerRequest._id,
                      volunteerRequest.postId
                    )
                  }
                  className="text-2xl text-gray-600 hover:text-red-500"
                >
                  <ImCancelCircle />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyVolunteerRequest;
