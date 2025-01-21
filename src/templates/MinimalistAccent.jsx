

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
        </div>

        {/* Contact and Date Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-start">
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

        {/* Separator */}
        <Separator className="my-6" />

        {/* Company Info Section */}
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
