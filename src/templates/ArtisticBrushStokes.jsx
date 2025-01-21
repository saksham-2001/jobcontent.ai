

import { Card, CardContent } from "../components/ui/card";

export function ArtisticBrushStrokesCoverLetter() {
  const name = localStorage.getItem("name") || "Your Name";
  const email = localStorage.getItem("email") || "your.email@example.com";
  const linkedin = localStorage.getItem("Linkedin") || "https://linkedin.com/in/exampleprofile";
  const orgName = localStorage.getItem("orgname") || "Organization Name";
  const street = localStorage.getItem("street") || "Street Address";
  const suburb = localStorage.getItem("suburb") || "Suburb, State";
  const jobRole = localStorage.getItem("jobrole") || "Job Role";
  const coverLetter = localStorage.getItem("coverletter") || "Your cover letter content goes here.";

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg overflow-hidden rounded-none">
      <div className="relative h-48 bg-yellow-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,75 Q100,15 200,75 T400,75" fill="none" stroke="#F59E0B" strokeWidth="8" />
            <path d="M0,85 Q100,25 200,85 T400,85" fill="none" stroke="#10B981" strokeWidth="8" />
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
            <p className="text-xl text-gray-600">{email}</p>
            <a
              href={linkedin.startsWith("http") ? linkedin : `https://${linkedin}`}
              className="text-xl text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">{orgName},</p>
            <p className="text-sm text-gray-600">{street},</p>
            <p className="text-sm text-gray-600">{suburb}</p>
            <p className="text-l text-gray-600">RE: Application for {jobRole} role</p>
          </div>
          <p className="text-sm text-gray-600 mt-4 md:mt-0">Date: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Dear Hiring Manager,</h2>
          <p className="whitespace-pre-wrap text-sm text-gray-700">{coverLetter}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {JSON.parse(localStorage.getItem('skills')).map((skill, index) => (
              <div key={skill} className="relative p-2 rounded-lg overflow-hidden">
                <div
                  className={`absolute inset-0 opacity-20 ${
                    index % 2 === 0 ? "bg-yellow-400" : "bg-green-400"
                  }`}
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)",
                  }}
                ></div>
                <span className="relative z-10 text-sm font-semibold text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-700">Best regards,</p>
          <p className="text-sm font-semibold text-gray-800 mt-2">{name}</p>
        </div>
      </CardContent>
    </Card>
  );
}
