

import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export function MinimalistAccentCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-none">
      <CardContent className="p-8">
        {/* Name and Role Section */}
        <div className="border-l-4 border-green-500 pl-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {localStorage.getItem("name") || "John Doe"}
          </h1>
          <p className="text-lg text-gray-600">
            {localStorage.getItem("jobrole") || "Web Developer"}
          </p>
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

        {/* Contact and Date Section */}
       
        
          

        {/* Separator */}
        <Separator className="my-6" />

        {/* Company Info Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="space-y-1">
          <p className="text-sm text-gray-600">
              {localStorage.getItem("orgname") || "XYZ"}
            </p>
            <p className="text-sm text-gray-600">
              {localStorage.getItem("street") || "123 Main St,"}
            </p>
            <p className="text-sm text-gray-600">
              {localStorage.getItem("suburb") || " City, State 12345"}
            </p>
            <p className="text-base py-3 text-gray-600">
              RE: {localStorage.getItem("jobrole") || "Web Developer"} Role
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Cover Letter Content */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Dear Hiring Manager,
          </h2>
          <div className="whitespace-pre-wrap text-sm text-gray-700">
            {localStorage.getItem("coverletter") ||
              "Thank you for considering my application. I am eager to contribute my skills to your organization and look forward to the opportunity to discuss how I can be a valuable member of your team."}
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-6">
          <p className="text-sm text-gray-700">Best regards,</p>
          <p className="text-sm font-semibold text-gray-800 mt-2">
            {localStorage.getItem("name") || "John Doe"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
