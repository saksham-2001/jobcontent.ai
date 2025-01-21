// import { Card, CardContent } from "../components/ui/card"


// export function GeometricPatternsCoverLetter() {
//   return (
//     <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg overflow-hidden rounded-none">
//       <div className="relative h-40 bg-gradient-to-r from-indigo-500 to-purple-600">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="grid grid-cols-4 gap-4">
//             {[...Array(16)].map((_, i) => (
//               <div key={i} className="w-8 h-8 bg-white bg-opacity-20 transform rotate-45"></div>
//             ))}
//           </div>
//         </div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-4xl font-bold text-white">John Doe</h1>
//         </div>
//       </div>
//       <CardContent className="p-8">
//         <div className="mb-6 text-center">
//           <p className="text-xl text-gray-600">Web Developer</p>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-start mb-8">
//           <div className="space-y-1">
//             <p className="text-sm text-gray-600">123 Main St, City, State 12345</p>
//             <p className="text-sm text-gray-600">john.doe@email.com</p>
//             <p className="text-sm text-gray-600">(123) 456-7890</p>
//           </div>
//           <p className="text-sm text-gray-600 mt-4 md:mt-0">Date: {new Date().toLocaleDateString()}</p>
//         </div>

//         <div className="space-y-4">
//           <h2 className="text-2xl font-semibold text-gray-800">Dear Hiring Manager,</h2>
//           <div className="whitespace-pre-wrap">{localStorage.getItem("coverletter")} </div>
//         </div>

//         <div className="mt-8">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {['JavaScript', 'React', 'Node.js', 'CSS/Sass', 'Git', 'Agile'].map((skill) => (
//               <div key={skill} className="p-2 border border-indigo-500 rounded-lg text-center">
//                 <span className="text-sm font-semibold text-indigo-600">{skill}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-8">
//           <p className="text-sm text-gray-700">Best regards,</p>
//           <p className="text-sm font-semibold text-gray-800 mt-2">John Doe</p>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

import { Card, CardContent } from "../components/ui/card";

export function GeometricPatternsCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg overflow-hidden rounded-none">
      {/* Header Section with Geometric Patterns */}
      <div className="relative h-40 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-white bg-opacity-20 transform rotate-45"></div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            {localStorage.getItem("name") || "John Doe"}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <CardContent className="p-8">
        {/* Contact info*/}
        <div className="mb-8 -mt-2 text-center">
          <p className="text-xl mb-2 text-gray-600">
            {localStorage.getItem("jobrole") || "Web Developer"}
          </p>
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

        {/* Org details */}
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
          <h2 className="text-2xl font-semibold text-gray-800">
            Dear {localStorage.getItem("hiringManager") || "Hiring Manager"},
          </h2>
          <div className="whitespace-pre-wrap text-sm text-gray-700">
            {localStorage.getItem("coverletter") ||
              "Thank you for considering my application. I am eager to contribute my skills to your organization and look forward to the opportunity to discuss how I can be a valuable member of your team."}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(localStorage.getItem("skills")
              ? JSON.parse(localStorage.getItem("skills"))
              : ["JavaScript", "React", "Node.js", "CSS/Sass", "Git", "Agile"]
            ).map((skill) => (
              <div
                key={skill}
                className="p-2 border border-indigo-500 rounded-lg text-center"
              >
                <span className="text-sm font-semibold text-indigo-600">{skill}</span>
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
