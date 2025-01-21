
import { useState } from "react";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useNavigate } from "react-router-dom";

export default function CoverLetterEditor() {
  if (localStorage.getItem("skills") == null) {
    localStorage.setItem("skills", JSON.stringify(["", "", "", "", "", ""]));
  }

  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [linkedin, setLinkedin] = useState(localStorage.getItem("linkedin"));
  const [jobrole, setJobrole] = useState(localStorage.getItem("jobrole"));
  const[orgname, setOrgname]= useState(localStorage.getItem('orgname'));
  const [street, setStreet] = useState(localStorage.getItem("street"));
  const [suburb, setSuburb] = useState(localStorage.getItem("suburb"));
  const [maincontent, setMaincontent] = useState(localStorage.getItem("coverletter"));
  const [skills, setSkills] = useState(JSON.parse(localStorage.getItem("skills")));
  const navigate = useNavigate();

  const handleSkillChange = (i, val) => {
    const updatedskills = [...skills];
    updatedskills[i] = val;
    setSkills(updatedskills);
    localStorage.setItem("skills", JSON.stringify(updatedskills));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-50 flex flex-col items-center py-12 px-6">
      <Card className="max-w-4xl w-full shadow-2xl transform transition-all hover:scale-105">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">Cover Letter Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Name Input */}
            <div className="animate-fade-in">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  localStorage.setItem("name", e.target.value);
                }}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div className="animate-fade-in">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Your Email
              </label>
              <Input
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  localStorage.setItem("email", e.target.value);
                }}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* LinkedIn Input */}
            <div className="animate-fade-in">
              <label htmlFor="linkedin" className="block text-gray-700 font-medium mb-1">
                Your LinkedIn
              </label>
              <Input
                id="linkedin"
                value={linkedin}
                onChange={(e) => {
                  setLinkedin(e.target.value);
                  localStorage.setItem("linkedin", e.target.value);
                }}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter the link to your LinkedIn account"
              />
            </div>

            {/* Job Role Input */}
            <div className="animate-slide-in">
              <label htmlFor="jobrole" className="block text-gray-700 font-medium mb-1">
                Position Applying For
              </label>
              <Input
                id="jobrole"
                value={jobrole}
                onChange={(e) => {
                  setJobrole(e.target.value);
                  localStorage.setItem("jobrole", e.target.value);
                }}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter the position"
              />
            </div>

            <div className="animate-slide-in">
              <label htmlFor="orgname" className="block text-gray-700 font-medium mb-1">
              Company's Name
              </label>
              <Input
                id="orgname"
                value={orgname}
                onChange={(e) => {
                  setOrgname(e.target.value);
                  localStorage.setItem("orgname", e.target.value);
                }}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter the position"
              />
            </div>

            {/* Address Fields */}
            <div className="space-y-4">
              <div className="animate-fade-in">
                <label htmlFor="street" className="block text-gray-700 font-medium mb-1">
                  Comapny's Street Name and Number
                </label>
                <Input
                  id="street"
                  value={street}
                  onChange={(e) => {
                    setStreet(e.target.value);
                    localStorage.setItem("street", e.target.value);
                  }}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="36 First Avenue"
                />
              </div>
              <div className="animate-fade-in">
                <label htmlFor="suburb" className="block text-gray-700 font-medium mb-1">
                 Company's Suburb and Postcode
                </label>
                <Input
                  id="suburb"
                  value={suburb}
                  onChange={(e) => {
                    setSuburb(e.target.value);
                    localStorage.setItem("suburb", e.target.value);
                  }}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Brighton, SA, 5016"
                />
              </div>
            </div>

            {/* Cover Letter Textarea */}
            <div className="animate-slide-in">
              <label htmlFor="maincontent" className="block text-gray-700 font-medium mb-1">
                AI-Generated Cover Letter
              </label>
              <Textarea
                id="maincontent"
                value={maincontent}
                onChange={(e) => {
                  setMaincontent(e.target.value);
                  localStorage.setItem("coverletter", e.target.value);
                }}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Write your cover letter content here"
                rows={4}
              />
            </div>

            {/* Core Skills */}
            <div>
              <label className="block text-gray-700 font-medium mb-4">Core Skills:</label>
              <div className="grid grid-cols-2 gap-4 animate-fade-in">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <Input
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder={`Enter skill ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <div className="p-4">
          <Button
            className="w-full bg-cyan-500 text-white hover:bg-cyan-600 transition"
            onClick={() => { navigate('/coverlettertemplate') }}
          >
            Save & Continue
          </Button>
        </div>
      </Card>
    </div>
  );
}
