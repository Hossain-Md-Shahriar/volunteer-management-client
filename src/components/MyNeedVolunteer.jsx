import { Link } from "react-router-dom";

const MyNeedVolunteer = ({ needVolunteers }) => {
  return (
    <div className="my-10">
      <h3 className="text-2xl">
        My Need Volunteer Post: {needVolunteers.length}
      </h3>
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
            {needVolunteers.map((needVolunteer) => (
              <tr key={needVolunteer._id}>
                <td>{needVolunteer.postTitle}</td>
                <td>{needVolunteer.category}</td>
                <td>{needVolunteer.location}</td>
                <td className="flex gap-2">
                    <Link to={`/update/${needVolunteer._id}`} className="btn btn-success">Update</Link>
                    <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyNeedVolunteer;
