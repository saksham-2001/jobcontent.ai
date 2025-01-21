
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
      </div>

      <CardContent className="p-8">
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">
              {localStorage.getItem("street") || "123 Main St, City, State 12345"}
            </p>
            <p className="text-sm text-gray-600">
              {localStorage.getItem("email") || "john.doe@email.com"}
            </p>
            <p className="text-sm text-gray-600">
              {localStorage.getItem("phone") || "(123) 456-7890"}
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Company Information */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {localStorage.getItem("orgname") || "Company Name"}
          </p>
          <p className="text-sm text-gray-600">
            {localStorage.getItem("street") || "Company Address"}
          </p>
          <p className="text-sm text-gray-600">
            {localStorage.getItem("suburb") || "Company Address"}
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
