

import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export function ClassicExecutiveCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-none">
      <CardContent className="p-8">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-4xl mb-2 font-serif font-bold text-gray-800">
            {localStorage.getItem("name") || "John Doe"}
          </h1>
          <div className="flex items-center justify-center">
            <a className="flex items-center space-x-2" href={localStorage.getItem('linkedin')} target="_blank" rel="noopener noreferrer">
              <span className="text-blue-600">{'\u{1F517}'}</span> {/* Unicode for "Bust in Silhouette" */}
              <span className="text-sm text-gray-700">{localStorage.getItem("linkedin")}</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href={`mailto:${localStorage.getItem("email")}`} className="flex items-center space-x-2">
              <span className="text-blue">&#9993;</span> {/* Unicode for "Envelope" */}
              <span className="text-sm text-gray-700">{localStorage.getItem("email")}</span>
            </a>
          </div>

        </div>

        <Separator className="my-6" />

        {/* Org Details */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="space-y-1">
          <p className="text-sm text-gray-600">
              {localStorage.getItem("orgname") || "XYZ "}
            </p>
            <p className="text-sm text-gray-600">
              {localStorage.getItem("street") || "123 Main St, "}
            </p>
            <p className="text-sm text-gray-600">
              {localStorage.getItem("suburb") || "City, State 12345"}
            </p>
            <p className="text-base text-gray-600 mt-2">
            Re: {localStorage.getItem("jobrole") || "Web Developer"} Role
          </p>
          </div>
         
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Cover Letter Content */}
        <div className="space-y-4">
          <h2 className="text-xl font-serif font-semibold text-gray-800">
            Dear Hiring Manager,
          </h2>
          <div className="whitespace-pre-wrap text-sm text-gray-700">
            {localStorage.getItem("coverletter") ||
              "Thank you for considering my application. Please feel free to reach out if you require any additional information."}
          </div>
        </div>

        {/* Professional Qualifications */}
        <div className="mt-8">
          <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4">
            Relevant Skills
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <div>
              {JSON.parse(localStorage.getItem('skills')).map((skill, index) => (

                <li key={index}>{skill}</li>

              ))
              }
            </div>
          </ul>
        </div>

        {/* Closing Section */}
        <div className="mt-8">
          <p className="text-sm text-gray-700">Sincerely,</p>
          <p className="text-sm font-serif font-semibold text-gray-800 mt-2">
            {localStorage.getItem("name") || "John Doe"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
