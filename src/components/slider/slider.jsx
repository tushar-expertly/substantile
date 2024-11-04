import firstslidelabel from "../../Assets/sliderImage/mytutorslide.jpg";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-r from-purple-100 to-pink-300 py-16 px-4">
      <div className="w-full md:w-6/12 px-4 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Discover our webinar solutions
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Offering the convenience of expert-led sessions designed around your
          schedule and location. Share your goals with us, and we’ll craft a
          personalized plan that addresses your challenges while delivering
          optimal value for you and your team.
        </p>
        <div className="mt-8">
          <Link
            to="/training"
            href="#"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get started today!
          </Link>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-6/12 justify-center">
        <img
          src={firstslidelabel}
          alt="Banner"
          className="w-full md:w-auto h-auto max-h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
