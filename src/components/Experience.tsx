import { Building2, Calendar } from 'lucide-react';

export default function Experience() {
  const companies = [
    {
      id: 3,
      company_name: "Collabera Digital",
      company_URL: "https://www.collaberadigital.com/",
      worked_till: "March 2023 - Aug 2024",
      work_did_in_company: [
        'Worked on an internal ML application for a client. Using the web app, users can upload a dataset, process the dataset of images, generate annotations, and using those annotations and a base model, they can fine-tune and create a new ML model.'
      ]
    },
    {
      id: 2,
      company_name: "Avantari Technologies",
      company_URL: "https://www.avantari.org",
      worked_till: "April 2019 - Sep 2022",
      work_did_in_company: [
        `Developed APIs required for www.smartdhyana.com app and also integrated payment gateways (Instamojo, PayPal), containerized the application, and deployed it on AWS.`,
        `Worked with the ML team in building a subscription-based machine learning application, www.decs.ai, for both the front end and backend, and integrated Stripe payment gateway for subscription purchases.`
      ]
    },
    {
      id: 1,
      company_name: "Nvest Bank",
      company_URL: "https://nvestbank.com",
      worked_till: "2018 - Feb 2019",
      work_did_in_company: [
        `My role was to develop APIs required for the front-end team and write optimized MongoDB queries. I connected to the Ethereum blockchain and exchanged tokens using Web3.js.`
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Professional Experience</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            My journey in software development
          </p>
        </div>
        <div className="mt-12 gap-6 leading-8 space-y-8">
          {companies.map((company) => (
            <div key={company.id} className="bg-white rounded-lg p-6 shadow-2xl transition-shadow duration-300 transform">

  <div className="flex items-center justify-between mb-4">
    <div className="flex flex-col">
      <div className="flex items-center mb-1">
        <Building2 className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">{company.company_name}</h3>
      </div>
      <a
        href={company.company_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
      >
        {company.company_URL}
      </a>
    </div>
    <div className="flex items-center text-gray-500">
      <Calendar className="h-5 w-5 mr-2" />
      <span className="text-sm">{company.worked_till}</span>
    </div>
  </div>
  <hr className="my-2 border-gray-200" />
  <ul className="mt-4 space-y-2">
    {company.work_did_in_company.map((work, index) => (
      <li key={index} className="text-gray-700 flex items-start">
        <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
        {work}
      </li>
    ))}
  </ul>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
