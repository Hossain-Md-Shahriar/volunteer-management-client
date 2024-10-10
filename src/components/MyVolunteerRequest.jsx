import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

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
        <span>
          Are you sure?
          <button
            onClick={() => {
              toast.dismiss(t.id); // Close the toast
              cancelHandler(_id, postId); // Call cancel logic
              setToastId(null); // reset the toast ID when dismissed
            }}
            className="px-2 py-1 ml-2 bg-green-500 text-white rounded"
          >
            Yes
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id); // Dismiss toast if "No"
              setToastId(null); // reset the toast ID when dismissed
            }}
            className="px-2 py-1 ml-2 bg-red-500 text-white rounded"
          >
            No
          </button>
        </span>
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
        `${import.meta.env.VITE_API_URL}/volunteer-request?id=${id}&postId=${postId}`
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
      <div className="py-10">
        <p className="text-center">
          You haven't made any request to be volunteer
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Post Title</th>
            <th>Category</th>
            <th>Location</th>
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
                <button
                  onClick={() =>
                    showConfirmationToast(
                      volunteerRequest._id,
                      volunteerRequest.postId
                    )
                  }
                  className="btn btn-error"
                >
                  Cancel
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
