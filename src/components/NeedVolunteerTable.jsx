import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/table.css";

const NeedVolunteerTable = ({ allNeedVolunteer }) => {
  const [isClicked, setIsClicked] = useState([false, ""]);
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Post Title</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Volunteers Needed</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allNeedVolunteer.map((needVolunteer) => (
            <tr key={needVolunteer._id}>
              <td>
                <img
                  className="w-40 h-24 object-cover rounded-xl bg-gray-300"
                  src={needVolunteer.thumbnail}
                  alt=""
                />
              </td>
              <td>
                <span>{needVolunteer.postTitle}</span>
              </td>
              <td>
                <span>{needVolunteer.category}</span>
              </td>
              <td>
                <p className="text-sm bg-green-300/45 border border-green-500 rounded-full px-3 text-green-700">
                  {new Date(needVolunteer.deadline).toLocaleDateString()}
                </p>
              </td>
              <td>
                <span>{needVolunteer.volunteersNeeded}</span>
              </td>
              <td>
                <span>{needVolunteer.location}</span>
              </td>
              <td>
                <Link
                  to={`/need-volunteer/${needVolunteer._id}`}
                  onClick={() => setIsClicked([true, needVolunteer._id])}
                >
                  <button className="font-medium flex items-center justify-center bg-primary1/90 hover:bg-primary1 transition-all text-secondary3 py-2 px-2 w-full rounded-md">
                    {isClicked[0] && isClicked[1] === needVolunteer._id ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      <span>View Details</span>
                    )}
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NeedVolunteerTable;
