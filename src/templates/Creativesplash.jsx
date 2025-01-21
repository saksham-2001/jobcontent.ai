
import { Card, CardContent } from "../components/ui/card";

export function CreativeSplashCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg overflow-hidden rounded-none">
      {/* Header Section with Gradient Background */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
        <h1 className="text-4xl font-bold">
          {localStorage.getItem("name") || "John Doe"}
        </h1>
        
        <p className="text-xl mt-2">
          {localStorage.getItem("jobrole") || "Web Developer"}
        </p>
        <div className="flex items-center space-x-2">
              <a className="flex items-center space-x-2" href={localStorage.getItem('linkedin')} target="_blank" rel="noopener noreferrer">
                <span >{'\u{1F517}'}</span> {/* Unicode for "Bust in Silhouette" */}
                <span className="text-sm ">{localStorage.getItem("linkedin")}</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a href={`mailto:${localStorage.getItem("email")}`} className="flex items-center space-x-2">
                <span >&#9993;</span> {/* Unicode for "Envelope" */}
                <span className="text-sm">{localStorage.getItem("email")}</span>
              </a>
            </div>
      </div>

      <CardContent className="p-8">
        {/* Org infor */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="space-y-1">
          <p className="text-sm text-gray-600">
              {localStorage.getItem("orgname") || "XYZ"}
            </p>
            <p className="text-sm text-gray-600">
              {localStorage.getItem("street") || "123 Main St"}
            </p>
            <p className="text-sm text-gray-600">
              {localStorage.getItem("suburb") || "City, State 12345"}
            </p>
            <p className="py-2 text-base text-gray-600">
             RE: {localStorage.getItem("jobrole") || "Web Developer"} Role
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            Date: {new Date().toLocaleDateString()}
          </p>
        </div>

       

        {/* Cover Letter Content */}
        <div className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Dear {localStorage.getItem("hiringManager") || "Hiring Manager"},
          </h2>
          <div className="whitespace-pre-wrap text-sm text-gray-700">
            {localStorage.getItem("coverletter") ||
              "Thank you for considering my application. Please feel free to contact me if you require additional details."}
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
