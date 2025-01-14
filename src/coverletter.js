
// export default function Coverletter(){


// // Now you can render it as HTML
// return ( 
//   <div className="whitespace-pre-wrap">
//     {localStorage.getItem("coverletter")}
//   </div>
// );

// }


import { useState, useEffect } from 'react';
import { Textarea } from './components/ui/textarea';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./components/ui/carousel"
import { Card, CardContent } from "./components/ui/card"
//import { jsPDF } from 'jspdf';

export default function CoverLetter() {
    // Load cover letter from local storage
    const [coverLetter, setCoverLetter] = useState(localStorage.getItem("coverletter") || "");

    // State for selected template
    const [selectedTemplate, setSelectedTemplate] = useState("template1");

    useEffect(() => {
        localStorage.setItem("coverletter", coverLetter);
    }, [coverLetter]);

    const handleTemplateChange = (template) => {
        setSelectedTemplate(template);
    };

    // const handleDownloadPDF = () => {
    //     const doc = new jsPDF();
    //     doc.setFontSize(12);

    //     // Set the content for the selected template
    //     let content = coverLetter;
    //     switch (selectedTemplate) {
    //         case 'template2':
    //             content = `Template 2\n\n${coverLetter}`;
    //             break;
    //         case 'template3':
    //             content = `Template 3\n\n${coverLetter}`;
    //             break;
    //         default:
    //             content = `Template 1\n\n${coverLetter}`;
    //             break;
    //     }

    //     // Add the cover letter content to PDF
    //     doc.text(content, 10, 10);
    //     doc.save('coverletter.pdf');
    // };

    return (
        <div className="min-h-screen flex flex-col bg-black text-white justify-center items-center">
          {/* Header */}
          <header className="p-4 text-center bg-cyan-600 w-full">
            <h1 className="text-3xl font-bold">Choose Your Template</h1>
          </header>
    
          {/* Carousel with different card formats */}
          <div className="w-full flex justify-center mt-8">
            <Carousel className="w-full max-w-4xl">
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="w-5/6 mx-auto"> {/* Card occupies 80% of the screen width */}
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          {/* Different formats for each card */}
                          {index === 0 && (
                            <div className="text-center">
                              <span className="text-4xl  font-semibold">Template 1</span>
                              <div className="mt-10 mb-10 px-10 text-left whitespace-pre-wrap text-base">{localStorage.getItem('coverletter')}</div>
                            </div>
                          )}
                          {index === 1 && (
                            <div className="text-center">
                              <span className="text-4xl font-semibold">Template 2</span>
                              <p className="mt-10 mb-10 px-10 text-left whitespace-pre-wrap text-base">{localStorage.getItem('coverletter')}</p>
                            </div>
                          )}
                          {index === 2 && (
                            <div className="text-center">
                              <span className="text-4xl font-semibold">Template 3</span>
                              <div className="mt-10 mb-10 px-10 text-left whitespace-pre-wrap text-base">{localStorage.getItem('coverletter')}</div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
    
          {/* Download Button */}
          <div className="flex justify-center mt-6 mb-10">
            <button className="bg-cyan-500 text-white p-2 rounded-lg">
              Download as PDF
            </button>
          </div>
        </div>
      );
}
