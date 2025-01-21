

import { Card, CardContent } from "../components/ui/card";

export function ElegantSidebarCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg overflow-hidden rounded-none">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Section */}
        <div className="w-full md:w-1/3 bg-neutral-200 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {localStorage.getItem("name") || "John Doe"}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              {localStorage.getItem("jobrole") || "Web Developer"}
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Contact</h2>
              
              <p className="text-sm text-gray-600">
                {localStorage.getItem("email") || "john.doe@email.com"}
              </p>
              <p className="text-sm text-gray-600">
                {localStorage.getItem("linkedin") || "Linkeidn"}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <CardContent className="w-full md:w-2/3 p-8">
          <div className="space-y-4">
            {/* Date Section */}
            <p className="text-sm text-gray-600">
              Date: {new Date().toLocaleDateString()}
            </p>

            {/* Company Information */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">
                {localStorage.getItem("orgname") || "Company Name"},
              </p>
              <p className="text-sm text-gray-600">
                {localStorage.getItem("street") || "Company Address"},
              </p>
              <p className="text-sm text-gray-600">
                {localStorage.getItem("suburb") || "Company Address"}
              </p>
            </div>

            {/* Cover Letter Content */}
            <h2 className="text-xl font-semibold text-gray-800">
              Dear {localStorage.getItem("hiringManager") || "Hiring Manager"},
            </h2>
            <div className="whitespace-pre-wrap text-sm text-gray-700">
              {localStorage.getItem("coverletter") ||
                "Thank you for considering my application. Please feel free to contact me if you require additional details."}
            </div>

            {/* Closing Section */}
            <div className="pt-4">
              <p className="text-sm text-gray-700">Sincerely,</p>
              <p className="text-sm font-semibold text-gray-800 mt-2">
                {localStorage.getItem("name") || "John Doe"}
              </p>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
