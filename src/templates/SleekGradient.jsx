
import { Card, CardContent } from "../components/ui/card";
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function SleekGradientCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-teal-400 to-blue-500 shadow-lg overflow-hidden rounded-none">
      <div className="bg-white bg-opacity-90 m-1 rounded-lg">
        <CardContent className="p-8">
          {/* Name and Contact Info */}
          <div className="mb-6">
            <h1 className="text-4xl mb-2 font-bold text-gray-800">
              {localStorage.getItem("name") || "John Doe"}
            </h1>

            {/* <div className="flex items-center space-x-2">
              <a className=" flex items-center space-x-2" href={localStorage.getItem('linkedin')} target="_blank" rel="noopener noreferrer" >
                <FaLinkedin className=" text-blue-600  " />
                
                <span className="text-sm text-gray-700">{localStorage.getItem("linkedin")}</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a href={`mailto:${localStorage.getItem("email")}`} className="flex items-center space-x-2">
                <FaEnvelope className=" text-blue" />
               
                <span className="text-sm text-gray-700">{localStorage.getItem("email")}</span>
              </a>
            </div> */}
            <div className="flex items-center space-x-2">
              <a className="flex items-center space-x-2" href={localStorage.getItem('linkedin')} target="_blank" rel="noopener noreferrer">
                <span className="text-blue-600">{'\u{1F517}'}</span> {/* Unicode for "Bust in Silhouette" */}
                <span className="text-sm text-gray-700">{localStorage.getItem("linkedin")}</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a href={`mailto:${localStorage.getItem("email")}`} className="flex items-center space-x-2">
                <span className="text-blue">&#9993;</span> {/* Unicode for "Envelope" */}
                <span className="text-sm text-gray-700">{localStorage.getItem("email")}</span>
              </a>
            </div>


          </div>


          {/* Organisation details */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="space-y-1">
              <p className="text-sm text-gray-600">
                {localStorage.getItem("street") || "123 Main St,"}
              </p>
              <p className="text-sm text-gray-600">
                {localStorage.getItem("suburb") || "City, State 12345"}
              </p>

              <p className="text-base \ text-gray-600">
                Subject: Application for {localStorage.getItem("jobrole") || "Web Developer"} Role
              </p>
            </div>

            <p className="text-sm text-gray-600 mt-4 md:mt-0">
              Date: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Cover Letter Content Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Dear {localStorage.getItem("hiringManager") || "Hiring Manager"},
            </h2>
            <div className="whitespace-pre-wrap text-sm text-gray-700">
              {localStorage.getItem("coverletter") ||
                "Thank you for considering my application. I am eager to contribute my skills to your organization and look forward to the opportunity to discuss how I can be a valuable member of your team."}
            </div>
          </div>

          {/* Key Skills Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Key Skills
            </h3>
        
            <div className="flex flex-wrap gap-2">
              {JSON.parse(localStorage.getItem("skills")).map((skill) => (
                <span key={skill} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
        
          </div>

          
          {/* Closing Section */}
          <div className="mt-8">
            <p className="text-sm text-gray-700">Best regards,</p>
            <p className="text-sm font-semibold text-gray-800 mt-2">
              {localStorage.getItem("name") || "John Doe"}
            </p>



          </div>
        </CardContent>
      </div>
    </Card>
  );
}
