import { useState } from "react";
import MyNeedVolunteer from "../components/MyNeedVolunteer";
import MyVolunteerRequest from "../components/MyVolunteerRequest";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import LoadingState from "../components/LoadingState";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageMyPost = () => {
  const axiosSecure = useAxiosSecure();
  const [needVolunteers, setNeedVolunteers] = useState([]);
  const [needLoading, setNeedLoading] = useState(true);
  const [volunteerRequests, setVolunteerRequests] = useState([]);
  const [requestLoading, setRequestLoading] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    getNeedVolunteersData();
  }, []);

  const getNeedVolunteersData = async () => {
    const { data } = await axiosSecure.get(
      `/all-need-volunteers/${user?.email}`
    );
    setNeedVolunteers(data);
    setNeedLoading(false);
  };

  useEffect(() => {
    getVolunteerRequestsData();
  }, []);

  const getVolunteerRequestsData = async () => {
    const { data } = await axiosSecure.get(
      `/volunteer-requests/${user?.email}`
    );
    setVolunteerRequests(data);
    setRequestLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl">manage my post</h2>
      <div className="my-10">
        <h3 className="text-2xl">
          My Need Volunteer Post: {needVolunteers.length}
        </h3>
        {needLoading ? (
          <LoadingState />
        ) : (
          <MyNeedVolunteer
            needVolunteers={needVolunteers}
            getNeedVolunteersData={getNeedVolunteersData}
          />
        )}
      </div>
      <div className="my-10">
        <h3 className="text-2xl">
          My Volunteer Requests: {volunteerRequests.length}
        </h3>
        {requestLoading ? (
          <LoadingState />
        ) : (
          <MyVolunteerRequest
            volunteerRequests={volunteerRequests}
            getVolunteerRequestsData={getVolunteerRequestsData}
          />
        )}
      </div>
    </div>
  );
};

export default ManageMyPost;
