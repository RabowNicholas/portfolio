import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-richBlack flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl w-full text-center mb-16">
        <h1 className="text-4xl font-extrabold text-neonPurple">
          Welcome to My Consulting Services
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          I specialize in software engineering, digital product development, and
          marketing strategies. Discover how I can assist your business by
          exploring the services below.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-semibold text-lightLavender mb-8 text-center">
          My Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-neonPurple">
              Software Engineering
            </h3>
            <p className="mt-4 text-gray-300">
              Full-stack development, technical consultation, and scalable
              solutions to bring your ideas to life.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-neonPurple">
              Digital Product Development
            </h3>
            <p className="mt-4 text-gray-300">
              Guiding product development from ideation to launch with a focus
              on UX, features, and market fit.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-neonPurple">
              Marketing Strategy & Execution
            </h3>
            <p className="mt-4 text-gray-300">
              Tailored marketing strategies to boost brand visibility and
              maximize conversions across channels.
            </p>
          </div>
          {/* Service 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-neonPurple">
              Consulting & Training
            </h3>
            <p className="mt-4 text-gray-300">
              Providing one-on-one consultations and workshops to upskill teams
              and resolve business challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl w-full mt-16 text-center">
        <h2 className="text-2xl font-semibold text-lightLavender mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Ready to collaborate? Contact me today to discuss how I can help your
          business grow.
        </p>
        <div className="flex  justify-center gap-6">
          <Link
            href="mailto:your-email@example.com"
            className="button-primary-filled"
          >
            Contact Me
          </Link>
          <Link
            href="https://calendly.com/rabownick123/30min"
            target="_blank"
            className="button-primary-transparent"
          >
            book a call
          </Link>
        </div>
      </div>
    </div>
  );
}
