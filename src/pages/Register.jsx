import google from "../assets/google.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import bgImg from "../assets/register_bg.jpg";

const Register = () => {
  const { updateUserProfile, createUser, user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const from = location.state || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have an Uppercase Letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must have a Lowercase Letter");
      return;
    }

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photo);
      setUser({ ...result?.user, displayName: name, photoURL: photo });

      // get token from server using email
      const { data } = await axiosSecure.post("/jwt", {
        email: result?.user?.email,
      });
      console.log(data);

      toast.success("Registration Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result?.user);

      // get token from server using email
      const { data } = await axiosSecure.post("/jwt", {
        email: result?.user?.email,
      });
      console.log(data);

      toast.success("Logged In Successfully");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div
      className="pb-20 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-6xl mx-auto pt-14">
        <div className="mx-4">
          <div className="max-w-sm mx-auto shadow-lg px-5 py-8 rounded-xl backdrop-blur-md bg-white/60">
            <h2 className="text-2xl font-medium mb-4 text-center">
              Register Your Account
            </h2>
            <form onSubmit={handleRegister}>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="photo url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-7">
                <button className="btn btn-neutral border-none bg-primary2/80 hover:bg-primary2 text-white">
                  Register
                </button>
              </div>
            </form>
            <p className="py-3 text-center text-sm text-[#797979]">
              Or,
            </p>
            <div
              onClick={handleGoogleSignIn}
              className="flex cursor-pointer items-center justify-center text-gray-600 transition-colors duration-300 transform border rounded-lg bg-white hover:bg-gray-50 "
            >
              <div className="px-4 py-2">
                <img className="w-8" src={google} alt="" />
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign up with Google
              </span>
            </div>
            <p className="text-center mt-5">
              Already have an account?{" "}
              <Link to="/login" className="text-secondary1 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
