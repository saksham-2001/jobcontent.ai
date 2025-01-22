// import { useState, useEffect, Terminal } from "react";

// import { useNavigate } from "react-router-dom";

// import Groq from "groq-sdk";
// //import { Input } from "./components/ui/input";
// import { Button } from "./components/ui/button";
// import { Textarea } from "./components/ui/textarea"
// import {
//     Alert,
//     AlertDescription,
//     AlertTitle,
// } from "./components/ui/alert";
// import { motion } from "framer-motion"



// function AlertHome() {
//     return (
//         <Alert className="border-black" >

//             <AlertTitle > Missing Info!</AlertTitle>
//             <AlertDescription >
//                 Please enter the job description and profile details.
//             </AlertDescription>
//             <div className="flex justify-end  ">
//                 <Button>OK</Button>
//             </div>
//         </Alert>
//     )
// }
// export default function Homepage() {


//     const words = ["fast", "pretty", "accurate"];
//     const [currentWordIndex, setCurrentWordIndex] = useState(0);
//     const [jd, setJd] = useState("");
//     const [profile, setProfile] = useState("");
//     const navigate = useNavigate();
//     const [showdialog, setShowdialog] = useState(false);


//     const client = new Groq({
//         apiKey: process.env.REACT_APP_API_KEY,
//         dangerouslyAllowBrowser: true

//     });

//     async function genratecoverletter() {
//         const chatCompletion = await client.chat.completions.create({
//             messages: [

//                 { role: 'user', content: `Act as a career coach and create a professional cover letter based on the job description: ${jd} and align it with the user profile: ${profile}. I want the response to include the cover letter content only without including "Dear Hiring Manager" and any "Regards" in the end.` },
                
//             ],
//             model: 'llama-3.3-70b-versatile',
//         });

//         const coverletter = chatCompletion.choices[0].message.content;
//         console.log(coverletter);
//         const stringfiedcoverletter = JSON.stringify(coverletter);
//         // console.log(stringfiedcoverletter);

//         localStorage.setItem('coverletter', coverletter);
//         console.log(localStorage.getItem('coverletter'));
//     }
//     const handleclick = () => {
//         if (jd == "" || profile == "") {

//             setShowdialog(true);

//             //alert("Jd and Profile cannot be empty");

//         }
//         else {
//             console.log("Generating Cover letter");
//             genratecoverletter();
//             navigate('/coverlettertemplate');
//         }
//     }
//     const handlealert = () => {
//         setShowdialog(false);

//     }
//     const handleprofile = (e) => {
//         setProfile(e.target.value);
//         // console.log(profile);
//     }
//     const handlejd = (e) => {
//         setJd(e.target.value);
//         //console.log(jd);
//     }
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//         }, 2000); // Change word every 2 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="flex flex-row space-even">

            


//             <div className={`min-h-screen ${showdialog ? "opacity-10" : "opacity-100"} bg-background text-foreground flex flex-col items-center justify-center px-4`}>



//                 {/* Header Section */}
//                 <h1 className="text-3xl font-bold -ml-20 -mt-20 ">
//                     Create cover letters that are{" "}
//                     <span >
//                         {words.map((word, index) => (
//                             <span
//                                 key={index}
//                                 className={`px-2 text-cyan-500 font-bold duration-500 ${index === currentWordIndex ? "opacity-100" : "opacity-0"
//                                     } absolute`}
//                             >
//                                 {word}
//                             </span>
//                         ))}
//                     </span>
//                 </h1>

//                 {/* Job Description Textbox */}
//                 <div className="mt-20 w-full max-w-md">
//                     <label htmlFor="jobDescription" className="block text-lg mb-2">
//                         Enter Job Description:
//                     </label>
//                     <Textarea
//                         id="jobDescription"
//                         placeholder="Paste the job description here..."
//                         className="w-full"
//                         onChange={handlejd}
//                     />
//                 </div>

//                 {/* Job Description Textbox */}
//                 <div className="mt-8 w-full max-w-md">
//                     <label htmlFor="jobDescription" className="block text-lg mb-2">
//                         Enter Profile details:
//                     </label>
//                     <Textarea
//                         id="jobDescription"
//                         onChange={handleprofile}
//                         placeholder="Please tell us about your education, experience and skills..."
//                         className="w-full"
//                     />
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                     className="mt-6 px-6 py-2 bg-cyan-500 text-lg"
//                     onClick={handleclick}
//                 >
//                     Generate Cover Letter
//                 </Button>
//             </div>


//             {showdialog &&
//                 <div className=" -mt-[120px] max-w-xl mx-auto " onClick={handlealert}>
//                     <AlertHome className="bg-black text-white" ></AlertHome>
//                 </div>
//             }


// <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="mt-16"
//         >
//           <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
//           <div className="flex flex-col ">
//             {[
//               {
//                 title: "Generate with AI",
//                 description: "Our AI analyzes your inputs to create a tailored cover letter.",
//               },
//               {
//                 title: "Customize in Editor",
//                 description: "Fine-tune your cover letter with our user-friendly editor.",
//               },
//               {
//                 title: "Choose Template & Download",
//                 description: "Select a professional template and download your letter.",
//               },
//             ].map((step, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                 <h4 className="text-xl font-semibold mb-2">
//                   {index + 1}. {step.title}
//                 </h4>
//                 <p>{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </motion.section>
//         </div>


//     );
// }

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Groq from "groq-sdk"
import { Button } from "./components/ui/button"
import { Textarea } from "./components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert"
import { motion } from "framer-motion"

function AlertHome() {
  return (
    <Alert className="border-black">
      <AlertTitle>Missing Info!</AlertTitle>
      <AlertDescription>Please enter the job description and profile details.</AlertDescription>
      <div className="flex justify-end">
        <Button>OK</Button>
      </div>
    </Alert>
  )
}

export default function Homepage() {
  const words = ["professional", "customised", "pretty"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [jd, setJd] = useState("")
  const [profile, setProfile] = useState("")
  const navigate = useNavigate()
  const [showdialog, setShowdialog] = useState(false)

  const client = new Groq({
    apiKey: process.env.REACT_APP_API_KEY,
    dangerouslyAllowBrowser: true,
  })

  async function generateCoverLetter() {
    const chatCompletion = await client.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Act as a career coach and create a professional cover letter based on the job description: ${jd} and align it with the user profile: ${profile}. I want the response to include the cover letter content only without including "Dear Hiring Manager" and any "Regards" in the end.`,
        },
      ],
      model: "llama-3.3-70b-versatile",
    })

    const coverLetter = chatCompletion.choices[0].message.content
    console.log(coverLetter)
    localStorage.setItem("coverletter", coverLetter)
  }

  const handleClick = () => {
    if (jd === "" || profile === "") {
      setShowdialog(true)
    } else {
      console.log("Generating Cover letter")
      generateCoverLetter()
      navigate("/coverlettereditor")
    }
  }

  const handleAlert = () => {
    setShowdialog(false)
  }

  const handleProfile = (e) => {
    setProfile(e.target.value)
  }

  const handleJd = (e) => {
    setJd(e.target.value)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 text-gray-800">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 shadow-md"
      >
        <h1 className="text-2xl font-bold">CoverLetter AI</h1>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl -ml-20 mr-10 font-bold mb-10">
            Create cover letters that are{" "}
            <span >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentWordIndex ? 1 : 0,
                    y: index === currentWordIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className=" absolute px-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered tool helps you create tailored cover letters in minutes. Stand out from the crowd and land
            your dream job!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-[3]"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="jobDescription" className="block text-lg mb-2 font-semibold">
                  Enter Job Description:
                </label>
                <Textarea
                  id="jobDescription"
                  placeholder="Paste the job description here..."
                  className="w-full border-gray-300"
                  rows={8}
                  onChange={handleJd}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="profileDetails" className="block text-lg mb-2 font-semibold">
                  Enter Profile details:
                </label>
                <Textarea
                  id="profileDetails"
                  onChange={handleProfile}
                  placeholder="Please tell us about your education, experience and skills..."
                  className="w-full border-gray-300"
                  rows={7}
                />
              </div>

              <Button
                className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                onClick={handleClick}
              >
                Generate Cover Letter
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex-[1]"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Generate with AI",
                    description: "Our AI analyzes your inputs to create a tailored cover letter.",
                  },
                  {
                    title: "Customize in Editor",
                    description: "Fine-tune your cover letter with our user-friendly editor.",
                  },
                  {
                    title: "Choose Template & Download",
                    description: "Select a professional template and download your letter.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-md"
                  >
                    <h4 className="text-xl font-semibold mb-2 text-cyan-700">
                      {index + 1}. {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {showdialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-xl mx-auto" onClick={handleAlert}>
            <AlertHome className="bg-white text-black" />
          </div>
        </div>
      )}
    </div>
  )
}

