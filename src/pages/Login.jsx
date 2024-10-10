import google from "../assets/google.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Login = () => {
  const { signIn, signInWithGoogle, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const from = location.state || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      const result = await signIn(email, password);
      console.log(result?.user);

      // get token from server using email
      const { data } = await axiosSecure.post("/jwt", {
        email: result?.user?.email,
      });
      console.log(data);

      toast.success("logged In successfully");
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
    <div className="dark:bg-[#101010] transition-all duration-150 pb-20">
      <div className="max-w-6xl mx-auto py-16 dark:text-[#f0f0f0]">
        <div className="mx-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Login to Your Account
          </h2>
          <div className="md:w-1/2 lg:w-1/3 mx-auto shadow-lg px-5 py-8 rounded-xl border-2 border-[#4793af54]">
            <form onSubmit={handleLogin}>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered dark:bg-[#49494986]"
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
                  className="input input-bordered dark:bg-[#49494986]"
                  required
                />
              </div>
              <div className="form-control mt-7">
                <button className="btn btn-neutral border-none bg-[#4793AF] hover:bg-[#4793afc3] text-white">
                  Login
                </button>
              </div>
            </form>
            <p className="py-3 text-center text-sm text-[#797979] dark:text-[#b3b3b3]">
              Or,
            </p>
            <div
              onClick={handleGoogleSignIn}
              className="flex cursor-pointer items-center justify-center text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
            >
              <div className="px-4 py-2">
                <img className="w-8" src={google} alt="" />
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </div>
            <p className="text-center pt-3 border-t dark:border-[#565656] mt-5">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#4793AF] font-semibold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
