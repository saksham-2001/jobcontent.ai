import { Card, CardContent } from "@/components/ui/card"
import { generatePlaceholderText } from "@/utils/placeholder"

export function PhotoBackgroundCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg overflow-hidden">
      <div className="relative h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">John Doe</h1>
            <p className="text-xl text-gray-200">Web Developer</p>
          </div>
        </div>
      </div>
      <CardContent className="p-8 bg-white bg-opacity-90">
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
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Areas of Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['JavaScript', 'React', 'Node.js', 'CSS/Sass', 'Git', 'Agile'].map((skill) => (
              <div key={skill} className="p-2 bg-gray-100 rounded-lg text-center">
                <span className="text-sm font-semibold text-gray-700">{skill}</span>
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

