export default function Skills() {
  const skillsData = {
    FrameWorks: "NodeJS (ExpressJS), Reactjs and Redux-toolKit, MongoDB (NoSql Database), Docker, Nginx, Redis, Github Actions",
    AWS_Services: "AWS Services (EC2 instance, S3 Bucket, SES, Lambda using serverless Framework, Route53, Load-balancer, Cognito, cloudFront)",
    Others: "payment gateway integration (Stripe, Paypal, Instamojo), Database Backups, Centralized Error Log monitoring (using Appsignal)"
  };

  const techStack = [
    {
      id: 1,
      type: "Frontend",
      list: [
        { name: "ReactJS" },
        { name: "Javascript" }
      ]
    },
    {
      id: 2,
      type: "Backend",
      list: [
        { name: "NodeJS" },
        { name: "Mongodb" },
        { name: "Docker" },
        { name: "Nginx" },
        { name: "AWS" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Skills & Expertise</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Technologies and tools I work with
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Tech Stack</h3>
            <div className="grid gap-6">
              {techStack.map((category) => (
                <div key={category.id} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{category.type}</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.list.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Skills */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Expertise</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Frameworks & Tools</h4>
                <p className="text-gray-600">{skillsData.FrameWorks}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">AWS Services</h4>
                <p className="text-gray-600">{skillsData.AWS_Services}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Skills</h4>
                <p className="text-gray-600">{skillsData.Others}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}