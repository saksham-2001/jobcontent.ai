

import { Card, CardContent } from "../components/ui/card";

export function BoldTypographyCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-none">
      <CardContent className="p-8">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="mb-3 text-5xl font-extrabold text-gray-800 mb-2">
            {localStorage.getItem("name") || "JOHN DOE"}
          </h1>
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

        {/* organisation details*/}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="space-y-1">
          <p className="text-sm text-gray-600">
            {localStorage.getItem("orgname") || "Company Name"}
          </p>
            <p className="text-sm text-gray-600">
              {localStorage.getItem("street") || "123 Main St,"}
            </p>
            <p className="text-sm text-gray-600">
              {localStorage.getItem("suburb") || "Sa,5000"}
            </p>
            
          </div>
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        
        <div className="mb-6">
          
         
          <p className="text-base  text-gray-600 ">
            Re: {localStorage.getItem("jobrole") || "Web Developer"} Role
          </p>
        </div>

        {/* Cover Letter Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Dear Hiring Manager,</h2>
          <div className="whitespace-pre-wrap text-sm text-gray-700">
            {localStorage.getItem("coverletter") ||
              "Thank you for considering my application. Please feel free to reach out if you require any additional information."}
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-8">
          <p className="text-sm text-gray-700">Sincerely,</p>
          <p className="text-xl font-bold text-gray-800 mt-2">
            {localStorage.getItem("name") || "John Doe"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
