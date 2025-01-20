import { Card, CardContent } from "../components/ui/card"


export function ElegantSidebarCoverLetter() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg overflow-hidden rounded-none">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 bg-neutral-200 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-sm text-gray-600 mt-1">Web Developer</p>
          </div>
          <div className="space-y-4 mt-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Contact</h2>
              <p className="text-sm text-gray-600">123 Main St, City, State 12345</p>
              <p className="text-sm text-gray-600">john.doe@email.com</p>
              <p className="text-sm text-gray-600">(123) 456-7890</p>
            </div>
          </div>
        </div>
        <CardContent className="w-full md:w-2/3 p-8">
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
            <div className="mb-6">
              <p className="text-sm text-gray-600">Company name</p>
              <p className="text-sm text-gray-600">Comapny Address</p>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Dear Hiring Manager,</h2>
            <div className="whitespace-pre-wrap">{localStorage.getItem("coverletter")} </div>
            <div className="pt-4">
              <p className="text-sm text-gray-700">Sincerely,</p>
              <p className="text-sm font-semibold text-gray-800 mt-2">John Doe</p>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

