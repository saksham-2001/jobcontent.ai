import { Card, CardContent } from "../components/ui/card"


export function ModernInfographicCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-100 shadow-lg overflow-hidden rounded-none">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-xl mt-2">Web Developer</p>
      </div>
      <CardContent className="p-8">
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
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills & Expertise</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { skill: 'JavaScript', level: 90 },
              { skill: 'React', level: 85 },
              { skill: 'Node.js', level: 80 },
              { skill: 'CSS/Sass', level: 88 },
              { skill: 'Git', level: 85 },
              { skill: 'Agile', level: 82 },
            ].map(({ skill, level }) => (
              <div key={skill} className="flex flex-col items-center">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      className="text-gray-300"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="30"
                      cx="40"
                      cy="40"
                    />
                    <circle
                      className="text-blue-600"
                      strokeWidth="8"
                      strokeDasharray={30 * 2 * Math.PI}
                      strokeDashoffset={30 * 2 * Math.PI * (1 - level / 100)}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="30"
                      cx="40"
                      cy="40"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">{level}%</span>
                </div>
                <span className="mt-2 text-sm font-medium text-gray-700">{skill}</span>
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

