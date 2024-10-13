import React, { useState, FormEvent } from "react";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom"; // Import Link component

const LandingView = () => {
  const [name, setName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Welcome, ${name}! Stay safe!`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#006633] p-10 text-white">
      <header className="text-center mt-8">
        <h1 className="text-5xl font-bold">Project Safety Fuse</h1>
      </header>

      <section className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold">About Our App</h2>
        <p className="mt-4">
          Our Fire Safety Navigator app is designed to help you find the safest
          and shortest route out of a building during a fire. With real-time
          pathfinding and hazard detection, you can navigate with confidence and
          ensure your safety.
        </p>
      </section>

      <section className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold">Features</h2>
        <ul className="mt-4 list-disc list-inside">
          <li>
            🔍 <strong>Shortest Path</strong>: Find the quickest escape route
            from your current location.
          </li>
          <li>
            🚧 <strong>Hazard Alerts</strong>: Receive real-time notifications
            about hazards on your path.
          </li>

          <li>
            📞 <strong>Emergency Contacts</strong>: Access emergency contacts
            quickly in case of an emergency.
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold">Get Started</h2>
        <p className="mt-4">
          Enter your name to begin your journey towards safety:
        </p>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleChange}
            className="p-2 rounded-md text-black"
            required
          />
          <Link to="/home">
            <button
              type="submit"
              className="ml-2 p-2 bg-white text-red-500 rounded-md hover:bg-gray-300 transition"
            >
              Submit
            </button>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default LandingView;
