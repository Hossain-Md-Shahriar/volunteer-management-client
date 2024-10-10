import { useState } from "react";
import MyNeedVolunteer from "../components/MyNeedVolunteer";
import MyVolunteerRequest from "../components/MyVolunteerRequest";
import { useEffect } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const ManageMyPost = () => {
  const [needVolunteers, setNeedVolunteers] = useState([]);
  const [volunteerRequests, setVolunteerRequests] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-need-volunteers/${user?.email}`
      );
      setNeedVolunteers(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/volunteer-requests/${user?.email}`
      );
      setVolunteerRequests(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl">manage my post</h2>
      <div>
        <MyNeedVolunteer needVolunteers={needVolunteers} />
      </div>
      <div>
        <MyVolunteerRequest volunteerRequests={volunteerRequests} />
      </div>
    </div>
  );
};

export default ManageMyPost;
