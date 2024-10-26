import { ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 lg:pt-40 lg:pb-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-blue-600 uppercase">
                Full Stack Developer
              </span>
              <span className="mt-1 block text-2xl tracking-tight font-extrabold sm:text-2xl xl:text-4xl">
                <span className="block text-gray-900">Hi, I'm Sarath</span>
                <span className="block text-blue-600">Building Digital Solutions</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Specialized in full-stack development with expertise in AWS, Docker, and microservices architecture.
            </p>
            
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              With over 5 years of experience in web development, I specialize in building scalable applications
              using modern technologies.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://docs.google.com/document/d/1kSKxAc82aAt6IkMjHWcq5PRN94wSuZfaq1iRJmnbNmM/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                View Resume
                <FileText className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="hidden md:block mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="Developer workspace"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mt-8">
                  {/* GitHub */}
                  <a
                    href="https://github.com/nettemsarath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform transform hover:scale-110"
                  >
                    <svg className="h-8 w-8 text-gray-800 hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/nettemsarath/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform transform hover:scale-110"
                  >
                    <svg className="h-8 w-8 text-blue-700 hover:text-blue-800 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                      href="https://www.instagram.com/nettemsarath/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform transform hover:scale-110"
                    >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-pink-500"
                  >
                    <path d="M16.98 3h-9.96C4.66 3 3 4.66 3 6.98v9.96C3 19.34 4.66 21 6.98 21h9.96C19.34 21 21 19.34 21 16.98v-9.96C21 4.66 19.34 3 16.98 3zM12 17.64c-3.12 0-5.64-2.52-5.64-5.64S8.88 6.36 12 6.36s5.64 2.52 5.64 5.64-2.52 5.64-5.64 5.64zM18.36 6.64c-.54 0-1.08-.21-1.46-.59-.38-.38-.59-.92-.59-1.46 0-1.16.94-2.1 2.1-2.1.54 0 1.08.21 1.46.59.38.38.59.92.59 1.46 0 1.16-.94 2.1-2.1 2.1z"/>
                  </svg>

                  </a>

                  {/* Medium */}
                <a
                    href="https://medium.com/@nettemsarath1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform transform hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 1770 1000">
                    <circle cx="500" cy="500" r="500"/>
                    <ellipse ry="475" rx="250" cy="501" cx="1296"/>
                    <ellipse cx="1682" cy="502" rx="88" ry="424"/>
                  </svg>
                  </a>
        </div>
      </div>
      
    </section>
  );
}