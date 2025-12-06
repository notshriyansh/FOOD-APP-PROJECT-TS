import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>

      <User name="Shriyansh Sharma" />
      <UserClass />
    </div>
  );
};

export default About;
