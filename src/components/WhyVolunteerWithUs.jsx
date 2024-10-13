import skill from "../assets/skill.png";
import network from "../assets/network.png";
import support from "../assets/support.png";
import { Link } from "react-router-dom";

const WhyVolunteerWithUs = () => {
  return (
    <section className="my-28 md:my-36 text-center">
      <h2 className="text-4xl font-extrabold mb-6">Why Volunteer With Us?</h2>
      <p className="text-lg text-black/75 mb-12">
        Make an impact, grow your skills, and be part of a supportive community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="group flex flex-col items-center bg-gradient-to-r from-rose-50 via-fuchsia-50 to-cyan-50 border-2 border-fuchsia-100 px-4 py-5 rounded-3xl">
          <img
            src={support}
            alt="Impact Icon"
            className="w-24 h-24 mb-4 group-hover:scale-105 transition-all duration-500"
          />
          <h3 className="text-2xl font-semibold text-black/90 mb-2">
            Make a Difference
          </h3>
          <p className="text-black/60 text-center">
            Contribute to projects that improve lives and transform communities.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col items-center bg-gradient-to-r from-rose-50 via-fuchsia-50 to-cyan-50 border-2 border-fuchsia-100 px-4 py-5 rounded-3xl">
          <img
            src={skill}
            alt="Skills Icon"
            className="w-24 h-24 mb-4 group-hover:scale-105 transition-all duration-500"
          />
          <h3 className="text-2xl font-semibold text-black/90 mb-2">
            Gain New Skills
          </h3>
          <p className="text-black/60 text-center">
            Develop valuable skills that benefit your personal and professional
            life.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col items-center bg-gradient-to-r from-rose-50 via-fuchsia-50 to-cyan-50 border-2 border-fuchsia-100 px-4 py-5 rounded-3xl">
          <img
            src={network}
            alt="Connections Icon"
            className="w-24 h-24 mb-4 group-hover:scale-105 transition-all duration-500"
          />
          <h3 className="text-2xl font-semibold text-black/90 mb-2">
            Build Connections
          </h3>
          <p className="text-black/60 text-center">
            Network with people who share your passion for making the world
            better.
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-12">
        <p className="italic text-gray-700">
          “Volunteering has changed my life and helped me make a positive impact
          on my community.” - Nusrat, Volunteer
        </p>
      </div>

      <div className="mt-8">
        <Link
          to="/need-volunteer"
          className="inline-block px-8 py-4 bg-primary1/80 hover:bg-primary1 transition-all text-white rounded-lg text-lg font-semibold"
        >
          Start Volunteering Now
        </Link>
      </div>
    </section>
  );
};

export default WhyVolunteerWithUs;
