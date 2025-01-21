

import { Card, CardContent } from "../components/ui/card";

export function ColorfulBlocksCoverLetter() {
  const skills = JSON.parse(localStorage.getItem('skills'));

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg overflow-hidden rounded-none">
      {/* Colorful Block Header */}
      <div className="grid grid-cols-6 grid-rows-6 h-32">
        <div className="bg-red-500 col-span-2 row-span-3"></div>
        <div className="bg-blue-500 col-span-2 row-span-2"></div>
        <div className="bg-yellow-500 col-span-2 row-span-4"></div>
        <div className="bg-green-500 col-span-2 row-span-3"></div>
        <div className="bg-purple-500 col-span-2 row-span-4"></div>
        <div className="bg-pink-500 col-span-2 row-span-2"></div>
      </div>

      <CardContent className="p-8">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            {localStorage.getItem("name") || "John Doe"}
          </h1>
          <p className="text-xl text-gray-600">
            {localStorage.getItem("jobrole") || "Web Developer"}
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
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

        {/* Cover Letter Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Dear Hiring Manager,</h2>
          <div className="whitespace-pre-wrap text-sm text-gray-700">
            {localStorage.getItem("coverletter") ||
              "Thank you for considering my application. Please feel free to reach out if you require any additional information."}
          </div>
        </div>

        {/* Key Skills */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`p-2 rounded text-white text-center ${
                  ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500", "bg-purple-500", "bg-pink-500"][index % 6]
                }`}
              >
                <span className="text-sm font-semibold">{skill}</span>
              </div>
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
    </Card>
  );
}
