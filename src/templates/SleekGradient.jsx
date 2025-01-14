import { Card, CardContent } from "@/components/ui/card"
import { generatePlaceholderText } from "@/utils/placeholder"

export function SleekGradientCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-teal-400 to-blue-500 shadow-lg overflow-hidden">
      <div className="bg-white bg-opacity-90 m-1 rounded-lg">
        <CardContent className="p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
            <p className="text-xl text-gray-600">Web Developer</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="space-y-1">
              <p className="text-sm text-gray-600">123 Main St, City, State 12345</p>
              <p className="text-sm text-gray-600">john.doe@email.com</p>
              <p className="text-sm text-gray-600">(123) 456-7890</p>
            </div>
            <p className="text-sm text-gray-600 mt-4 md:mt-0">Date: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Dear Hiring Manager,</h2>
            <p className="text-sm text-gray-700">{generatePlaceholderText(50)}</p>
            <p className="text-sm text-gray-700">{generatePlaceholderText(75)}</p>
            <p className="text-sm text-gray-700">{generatePlaceholderText(60)}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'CSS/Sass', 'Git', 'Agile'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-700">Best regards,</p>
            <p className="text-sm font-semibold text-gray-800 mt-2">John Doe</p>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

