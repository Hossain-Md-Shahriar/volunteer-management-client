import { useState } from "react";
import MyNeedVolunteer from "../components/MyNeedVolunteer";
import MyVolunteerRequest from "../components/MyVolunteerRequest";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import LoadingState from "../components/LoadingState";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaCircle } from "react-icons/fa";

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
    <div className="max-w-7xl mx-auto px-4 pt-16 pb-28">
      <div className="flex gap-4 items-center text-3xl sm:text-4xl font-bold py-4 text-primary2">
        <FaCircle className="text-xl" />
        <h2>Manage My Post</h2>
      </div>
      <div className="mt-10 mb-24">
        <h3 className="text-2xl text-center pb-6 font-bold text-black/80">
          My Need Volunteer Post
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
        <h3 className="text-2xl text-center pb-6 font-bold text-black/80">
          My Volunteer Requests
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
