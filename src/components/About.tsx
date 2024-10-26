export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              With over 5 years of experience in web development, I specialize in building scalable applications
              using modern technologies. My passion lies in creating intuitive user experiences and solving
              complex problems through clean, efficient code.
            </p>
            <div className="mt-10 space-y-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    🎯
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Problem Solver</h3>
                  <p className="mt-2 text-base text-gray-500">
                    I enjoy tackling complex challenges and finding elegant solutions.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    💡
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Creative Thinker</h3>
                  <p className="mt-2 text-base text-gray-500">
                    I bring innovative ideas and solutions to every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
              alt="Working on laptop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}