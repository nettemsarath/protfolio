export default function Achievements() {
  const achievements = [
    {
      title: "Published Articles on Medium",
      link: "https://medium.com/@nettemsarath1",
      tags_list: [
        "Micro services and Event Driven system",
        "Microservices",
        "Concurrency vs parallelism, Process vs threads, Async vs sync"
      ]
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Achievements</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Notable accomplishments and contributions
          </p>
        </div>
        <div className="mt-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  {achievement.title}
                </a>
              </h3>
              <div className="space-y-2">
                {achievement.tags_list.map((tag, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="flex items-center bg-gray-50 rounded-lg p-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
                    <span className="text-gray-700">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}