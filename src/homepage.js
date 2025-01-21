import { useState, useEffect, Terminal } from "react";

import { useNavigate } from "react-router-dom";

import Groq from "groq-sdk";
//import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "./components/ui/alert";



function AlertHome() {
    return (
        <Alert className="border-black" >

            <AlertTitle > Missing Info!</AlertTitle>
            <AlertDescription >
                Please enter the job description and profile details.
            </AlertDescription>
            <div className="flex justify-end  ">
                <Button>OK</Button>
            </div>
        </Alert>
    )
}
export default function Homepage() {


    const words = ["fast", "pretty", "accurate"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [jd, setJd] = useState("");
    const [profile, setProfile] = useState("");
    const navigate = useNavigate();
    const [showdialog, setShowdialog] = useState(false);


    const client = new Groq({
        apiKey: process.env.REACT_APP_API_KEY,
        dangerouslyAllowBrowser: true

    });

    async function genratecoverletter() {
        const chatCompletion = await client.chat.completions.create({
            messages: [

                { role: 'user', content: `Act as a career coach and create a professional cover letter based on the job description: ${jd} and align it with the user profile: ${profile}. I want the response to include the cover letter content only without including "Dear Hiring Manager" and any "Regards" in the end.` },
                
            ],
            model: 'llama-3.3-70b-versatile',
        });

        const coverletter = chatCompletion.choices[0].message.content;
        console.log(coverletter);
        const stringfiedcoverletter = JSON.stringify(coverletter);
        // console.log(stringfiedcoverletter);

        localStorage.setItem('coverletter', coverletter);
        console.log(localStorage.getItem('coverletter'));
    }
    const handleclick = () => {
        if (jd == "" || profile == "") {

            setShowdialog(true);

            //alert("Jd and Profile cannot be empty");

        }
        else {
            console.log("Generating Cover letter");
            genratecoverletter();
            navigate('/coverlettertemplate');
        }
    }
    const handlealert = () => {
        setShowdialog(false);

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
        <div>
            <div className={`min-h-screen ${showdialog ? "opacity-10" : "opacity-100"} bg-background text-foreground flex flex-col items-center justify-center px-4`}>



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


            {showdialog &&
                <div className=" -mt-[120px] max-w-xl mx-auto " onClick={handlealert}>
                    <AlertHome className="bg-black text-white" ></AlertHome>
                </div>
            }
        </div>


    );
}
