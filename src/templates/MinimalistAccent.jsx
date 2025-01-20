import { Card, CardContent } from "../components/ui/card"
import { Separator } from "../components/ui/separator"

export function MinimalistAccentCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-none">
      <CardContent className="p-8">
        <div className="border-l-4 border-green-500 pl-4">
          <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
          <p className="text-lg text-gray-600">Web Developer</p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-start">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">123 Main St, City, State 12345</p>
            <p className="text-sm text-gray-600">john.doe@email.com</p>
            <p className="text-sm text-gray-600">(123) 456-7890</p>
          </div>
          <p className="text-sm text-gray-600 mt-4 md:mt-0">Date: {new Date().toLocaleDateString()}</p>
        </div>

        <Separator className="my-6" />

        <div className="mb-6">
          <p className="text-sm text-gray-600">Comapny Name</p>
          <p className="text-sm text-gray-600">Company Address</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Dear Hiring Manager,</h2>
          <div className="whitespace-pre-wrap">{localStorage.getItem("coverletter")} </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-700">Best regards,</p>
          <p className="text-sm font-semibold text-gray-800 mt-2">John Doe</p>
        </div>
      </CardContent>
    </Card>
  )
}

