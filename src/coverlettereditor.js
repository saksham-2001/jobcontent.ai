import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
export default function CoverLetterEditor(){
    return(
        <div>

        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
          <div className="bg-white shadow-lg rounded-xl w-full max-w-4xl p-8 space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 text-center">Cover Letter Editor</h1>

            {/* Input Fields for Name, Position, Company Address */}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">Your Name</label>
                <Input
                  id="name"
                  //value={name}
                  //onChange={handleChange(setName)}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-gray-700 font-medium">Position Applying For</label>
                <Input
                  id="position"
                  //value={position}
                  //onChange={handleChange(setPosition)}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter the position"
                />
              </div>

              <div>
                <label htmlFor="companyAddress" className="block text-gray-700 font-medium">Company Address</label>
                <Textarea
                  id="companyAddress"
                  //value={companyAddress}
                  //onChange={handleChange(setCompanyAddress)}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter the company address"
                  rows={4}
                />
              </div>
{/* 
              <div>
                <label className="block text-gray-700 font-medium">Core Skills</label>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <label htmlFor={`skill${index + 1}`} className="block text-gray-700 font-medium">
                        Skill {index + 1}
                      </label>
                      <Input
                        id={`skill${index + 1}`}
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder={`Enter skill ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div> */}

            </div>

            {/* Preview Section */}
            {/* <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Preview</h2>
              <div className="bg-white p-6 border border-gray-300 rounded-md shadow-sm mt-4 whitespace-pre-line">
                {generateCoverLetter()}
              </div>
            </div> */}
          </div>
        </div>
      </div>

    )
}