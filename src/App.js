import { useState, useEffect } from "react";
//import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea"


export default function App() {
  const words = ["fast", "pretty", "accurate"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [jd, setJd] = useState("");
  const [profile, setProfile] = useState("");

  const handleclick= ()=>{
   if(jd=="" || profile=="" ){
    alert("Jd and Profile cannot be empty");
  }
  else{
    console.log("Generating Cover letter");
  }
}

  const handleprofile = (e) => {
    setProfile(e.target.value);
    // console.log(profile);
  }
  const handlejd = (e) => {
    setJd(e.target.value);
    //console.log(jd);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <h1 className="text-3xl font-bold -ml-20 -mt-20 ">
        Create cover letters that are{" "}
        <span >
          {words.map((word, index) => (
            <span
              key={index}
              className={`px-2 text-cyan-500 font-bold duration-500 ${index === currentWordIndex ? "opacity-100" : "opacity-0"
                } absolute`}
            >
              {word}
            </span>
          ))}
        </span>
      </h1>

      {/* Job Description Textbox */}
      <div className="mt-20 w-full max-w-md">
        <label htmlFor="jobDescription" className="block text-lg mb-2">
          Enter Job Description:
        </label>
        <Textarea
          id="jobDescription"
          placeholder="Paste the job description here..."
          className="w-full"
          onChange={handlejd}
        />
      </div>

      {/* Job Description Textbox */}
      <div className="mt-8 w-full max-w-md">
        <label htmlFor="jobDescription" className="block text-lg mb-2">
          Enter Profile details:
        </label>
        <Textarea
          id="jobDescription"
          onChange={handleprofile}
          placeholder="Please tell us about your education, experience and skills..."
          className="w-full"
        />
      </div>

      {/* Submit Button */}
      <Button
        className="mt-6 px-6 py-2 bg-cyan-500 text-lg"
        onClick={handleclick}
      >
        Generate Cover Letter
      </Button>
    </div>
  );
}
