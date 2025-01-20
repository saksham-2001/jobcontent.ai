import { Card, CardContent } from "../components/ui/card"


export function GeometricPatternsCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg overflow-hidden rounded-none">
      <div className="relative h-40 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-white bg-opacity-20 transform rotate-45"></div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">John Doe</h1>
        </div>
      </div>
      <CardContent className="p-8">
        <div className="mb-6 text-center">
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
          <div className="whitespace-pre-wrap">{localStorage.getItem("coverletter")} </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['JavaScript', 'React', 'Node.js', 'CSS/Sass', 'Git', 'Agile'].map((skill) => (
              <div key={skill} className="p-2 border border-indigo-500 rounded-lg text-center">
                <span className="text-sm font-semibold text-indigo-600">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-700">Best regards,</p>
          <p className="text-sm font-semibold text-gray-800 mt-2">John Doe</p>
        </div>
      </CardContent>
    </Card>
  )
}

