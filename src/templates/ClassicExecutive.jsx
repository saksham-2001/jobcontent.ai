import { Card, CardContent } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
//import { generatePlaceholderText } from "@/utils/placeholder"

export function ClassicExecutiveCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-none">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-serif font-bold text-gray-800">John Doe</h1>
          <p className="text-xl text-gray-600 mt-2">Web Developer</p>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">123 Main St, City, State 12345</p>
            <p className="text-sm text-gray-600">john.doe@email.com</p>
            <p className="text-sm text-gray-600">(123) 456-7890</p>
          </div>
          <p className="text-sm text-gray-600 mt-4 md:mt-0">Date: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-serif font-semibold text-gray-800">Dear Hiring Manager,</h2>
          {/* <p className="text-sm text-gray-700">{generatePlaceholderText(50)}</p>
          <p className="text-sm text-gray-700">{generatePlaceholderText(75)}</p>
          <p className="text-sm text-gray-700">{generatePlaceholderText(60)}</p> */}
          <div className="whitespace-pre-wrap"> {localStorage.getItem("coverletter")}</div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4">Professional Qualifications</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>5+ years of experience in web development</li>
            <li>Proficient in JavaScript, React, and Node.js</li>
            <li>Strong problem-solving and communication skills</li>
            <li>Experience with Agile methodologies</li>
            <li>Proven track record of delivering high-quality projects on time</li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-700">Sincerely,</p>
          <p className="text-sm font-serif font-semibold text-gray-800 mt-2">John Doe</p>
        </div>
      </CardContent>
    </Card>
  )
}

