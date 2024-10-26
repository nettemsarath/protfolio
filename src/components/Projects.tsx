export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SmartDhyana",
      about: "A Meditation Ring to Measure your Mindfulness and Track Heart Rate variability (HRV) through Dhyana App. Dhyana identifies your inhale/exhale cycles and trains you to become a breathing champ.",
      tags: ["ReactJS", "NodeJS", "Mongodb", "Docker", "AWS", "S3", "Paypal", "Instamojo", "nginx", "Socket.IO", "Multer", "AppSignal", "Redis"],
      demo: "https://www.smartdhyana.com/",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Decs.ai",
      about: "Decs is a Machine Learning Application built for various purposes like humazised chatBots and interactive Holobots, custom audio and video Generation using Different custom Models",
      tags: ["ReactJS", "Redux-ToolKit", "NodeJS", "Mongodb", "AWS", "Lambda", "S3", "Stripe", "Docker", "nginx", "AppSignal"],
      demo: "https://www.decs.ai/",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "GX Nitrous",
      about: "GX Nitrous is crypto Application, where one can buy can crypto currency Token along with GX Token and also user can become an affliate. It also has crypto Trading where user can trade any currency",
      tags: ["NodeJS", "Socket.IO", "Web3JS", "Mongodb"],
      demo: "https://gxnitrous.com/",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Showcasing my best work
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </a>
                  <p className="leading-6 mt-3 text-base text-gray-500">{project.about}</p>
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}