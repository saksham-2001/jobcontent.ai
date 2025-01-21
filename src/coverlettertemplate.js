
// import { useState, useEffect } from 'react';
// import { Textarea } from './components/ui/textarea';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "./components/ui/carousel"
// import { Card, CardContent } from "./components/ui/card"
// import { ArtisticBrushStrokesCoverLetter } from './templates/ArtisticBrushStokes';
// import { BoldTypographyCoverLetter } from './templates/BoldTypography';
// import { ClassicExecutiveCoverLetter } from './templates/ClassicExecutive';
// import { ColorfulBlocksCoverLetter } from './templates/Colourfulblocks';
// import { CreativeSplashCoverLetter } from './templates/Creativesplash';
// import { ElegantSidebarCoverLetter } from './templates/ElegantSidebar';
// import { GeometricPatternsCoverLetter } from './templates/GeometricPatterns';
// import { MinimalistAccentCoverLetter } from './templates/MinimalistAccent';
// import { ModernInfographicCoverLetter } from './templates/ModernInforgraphic';
// import { PhotoBackgroundCoverLetter } from './templates/Photobackground';
// import { SleekGradientCoverLetter } from './templates/SleekGradient';

// //import { jsPDF } from 'jspdf';


// export default function CoverLetter() {
//   // Load cover letter from local storage
//   const [coverLetter, setCoverLetter] = useState(localStorage.getItem("coverletter") || "");

//   // State for selected template
//   const [selectedTemplate, setSelectedTemplate] = useState("template1");

//   useEffect(() => {
//     localStorage.setItem("coverletter", coverLetter);
//   }, [coverLetter]);

//   const handleTemplateChange = (template) => {
//     setSelectedTemplate(template);
//   };

//   const templates = [
//     { name: "Artistic Brush Strokes", component: <ArtisticBrushStrokesCoverLetter /> },
//     { name: "Bold Typography", component: <BoldTypographyCoverLetter /> },
//     { name: "Classic Executive", component: <ClassicExecutiveCoverLetter /> },
//     { name: "Colorful Blocks", component: <ColorfulBlocksCoverLetter /> },
//     { name: "Creative Splash", component: <CreativeSplashCoverLetter /> },
//     { name: "Elegant Sidebar", component: <ElegantSidebarCoverLetter /> },
//     { name: "Geometric Patterns", component: <GeometricPatternsCoverLetter /> },
//     { name: "Minimalist Accent", component: <MinimalistAccentCoverLetter /> },
//     { name: "Modern Infographic", component: <ModernInfographicCoverLetter /> },
//     { name: "Photo Background", component: <PhotoBackgroundCoverLetter /> },
//     { name: "Sleek Gradient", component: <SleekGradientCoverLetter /> },
//   ];


//   // const handleDownloadPDF = () => {
//   //     const doc = new jsPDF();
//   //     doc.setFontSize(12);

//   //     // Set the content for the selected template
//   //     let content = coverLetter;
//   //     switch (selectedTemplate) {
//   //         case 'template2':
//   //             content = `Template 2\n\n${coverLetter}`;
//   //             break;
//   //         case 'template3':
//   //             content = `Template 3\n\n${coverLetter}`;
//   //             break;
//   //         default:
//   //             content = `Template 1\n\n${coverLetter}`;
//   //             break;
//   //     }

//   //     // Add the cover letter content to PDF
//   //     doc.text(content, 10, 10);
//   //     doc.save('coverletter.pdf');
//   // };

//   return (
//     <div className="min-h-screen flex flex-col bg-rose-100 text-white justify-center items-center">
//       {/* Header */}
//       <header className="p-4 text-center bg-cyan-600 w-full">
//         <h1 className="text-3xl font-bold">Choose Your Template</h1>
//       </header>

//       {/* Carousel with different card formats */}

//       <div className="w-full flex justify-center mt-8">
//         <Carousel className="w-full  max-w-4xl ">
//           <CarouselContent>
//             {templates.map((template, index) => (
//               <CarouselItem key={index}>
//                 <div className="p-1">
//                   {/* <Card className=" mx-auto bg-rose-100">  */}
//                     <CardContent className="flex aspect-square items-center justify-center p-6">
//                       <div className="text-center">
//                         <span className="text-2xl font-semibold">{template.name}</span>
//                         <div className="mt-10 w-full mb-10 px-10 text-left whitespace-pre-wrap text-base">
//                           {template.component}
//                         </div>
//                       </div>
//                     </CardContent>
//                   {/* </Card> */}
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious   className="fixed top-1/2 left-4 transform -translate-y-1/2 bg-cyan-500 p-2 rounded-full text-white z-50" />
//           <CarouselNext   className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-cyan-500 p-2 rounded-full text-white z-50"  />
//         </Carousel>
//       </div>
//       {/* Download Button */}
//       <div className="flex justify-center mt-6 mb-10">
//         <button className="bg-cyan-500 text-white p-2 rounded-lg">
//           Download as PDF
//         </button>
//       </div>
//     </div>
//   );
// }



//'use client'

import { useState, useEffect, useRef, } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"
import { Card, CardContent } from "./components/ui/card"

import { Button } from "./components/ui/button"
//import { Download } from 'lucide-react'
import { motion } from "framer-motion"
import { useToast } from "./components/ui/use-toast"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ArtisticBrushStrokesCoverLetter } from './templates/ArtisticBrushStokes';
import { BoldTypographyCoverLetter } from './templates/BoldTypography';
import { ClassicExecutiveCoverLetter } from './templates/ClassicExecutive';
import { ColorfulBlocksCoverLetter } from './templates/Colourfulblocks';
import { CreativeSplashCoverLetter } from './templates/Creativesplash';
import { ElegantSidebarCoverLetter } from './templates/ElegantSidebar';
import { GeometricPatternsCoverLetter } from './templates/GeometricPatterns';
import { MinimalistAccentCoverLetter } from './templates/MinimalistAccent';
import { ModernInfographicCoverLetter } from './templates/ModernInforgraphic';
import { PhotoBackgroundCoverLetter } from './templates/Photobackground';
import { SleekGradientCoverLetter } from './templates/SleekGradient';

export default function CoverLetterTemplate() {
  const [coverLetter, setCoverLetter] = useState(localStorage.getItem("coverletter") || "");
  const [showtexteditor, setTexteditor] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const { toast } = useToast()
  //onst carouselRef = useRef(null);
  // const templateRefs = useRef([]);
  const templateRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("coverletter", coverLetter);
    // Ensure all fonts are loaded
    document.fonts.ready.then(() => {
      console.log('All fonts are loaded');
    });
  }, [coverLetter]);

  const templates = [
    { name: "Sleek Gradient", component: <SleekGradientCoverLetter /> },
    { name: "Bold Typography", component: <BoldTypographyCoverLetter /> },
    { name: "Classic Executive", component: <ClassicExecutiveCoverLetter /> },
    { name: "Colorful Blocks", component: <ColorfulBlocksCoverLetter /> },
    { name: "Creative Splash", component: <CreativeSplashCoverLetter /> },
    { name: "Elegant Sidebar", component: <ElegantSidebarCoverLetter /> },
    { name: "Geometric Patterns", component: <GeometricPatternsCoverLetter /> },
    { name: "Minimalist Accent", component: <MinimalistAccentCoverLetter /> },
    { name: "Modern Infographic", component: <ModernInfographicCoverLetter /> },
    { name: "Photo Background", component: <PhotoBackgroundCoverLetter /> },
    { name: "Artistic Brush Strokes", component: <ArtisticBrushStrokesCoverLetter /> },

  ];

  const handleDownloadPDF = async () => {
    console.log(selectedTemplate);
    const template = templateRefs.current[selectedTemplate];
    if (!template) {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Generating PDF",
      description: "Please wait while we generate your cover letter...",
    });

    try {
      // Add a small delay to ensure all styles are applied
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(template, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: null,
        onclone: (clonedDoc) => {
          // Apply print-specific styles to the cloned document
          const style = clonedDoc.createElement('style');
          style.textContent = `
            @media print {
              body { 
              -webkit-print-color-adjust: exact; }
              
            }
          `;
          clonedDoc.head.appendChild(style);
        }
      });

      const imgData = canvas.toDataURL('image/png');


      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

      // **Add Clickable Links**
      const links = template.querySelectorAll("a");
      links.forEach((link) => {
        const rect = link.getBoundingClientRect();
        const x = (rect.left - template.getBoundingClientRect().left) * 2; // Adjust for scaling
        const y = (rect.top - template.getBoundingClientRect().top) * 2; // Adjust for scaling
        const width = rect.width * 2;
        const height = rect.height * 2;

        pdf.link(x, y, width, height, { url: link.href });
      });


      pdf.save(`${templates[selectedTemplate].name}Cover_letter.pdf`);

      toast({
        title: "PDF Downloaded",
        description: `Your ${templates[selectedTemplate].name} cover letter has been downloaded.`,
      });
    } catch (error) {
      console.error('PDF generation failed:', error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };
  const handleEditPDF = () => {
    navigate('/coverlettereditor')

  }
  return (


    <div className="min-h-screen  flex flex-col bg-gradient-to-br from-purple-200 to-cyan-300 text-gray-800">
      <header className="p-6 text-center bg-blue-400 text-white shadow-lg">
        <h1 className="text-4xl font-bold">Choose Your Cover Letter Template</h1>
      </header>






      <div>
        <div className=" flex justify-end p-3 ">
          <motion.div
            // className="absolute top-4 right-4 z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleEditPDF}
              className=" shadow-lg mr-2 "
            >
              {/* <Download className="mr-2 h-4 w-4" /> 
               */}Edit pdf
            </Button>
          </motion.div>

          <motion.div
            // className="absolute top-4 right-4 z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleDownloadPDF}
              className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg "
            >
              {/* <Download className="mr-2 h-4 w-4" /> 
               */}Download PDF
            </Button>
          </motion.div>
        </div>


        <main className="flex  items-center justify-center p-3">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl relative"
          >
            <Carousel
            // ref={carouselRef}


            >
              <CarouselContent>
                {templates.map((template, index) => (
                  <CarouselItem
                    key={index}


                  >

                    {/* <Card className="mx-auto bg-transparent shadow-xl hover:shadow-2xl transition-shadow duration-300"> */}
                    <CardContent className=" flex items-center justify-center ">
                      <div
                        className="text-center bg-transparent w-[75%] ml-20"


                      >
                        <h2 className="text-2xl mb-2 font-semibold mb-4">{template.name}</h2>
                        <div className="  text-left whitespace-pre-wrap text-sm overflow-hidden"
                          ref={(el) => (templateRefs.current[index] = el)}
                        >
                          {template.component}
                        </div>
                      </div>
                    </CardContent>
                    {/* </Card> */}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div onClick={() => { setSelectedTemplate(selectedTemplate - 1); }}>
                <CarouselPrevious className=" fixed top-1/2 left-4 transform -translate-y-1/2 bg-blue-400 p-2 rounded-full text-white z-50"

                />
              </div>
              <div onClick={() => { setSelectedTemplate(selectedTemplate + 1); }}>
                <CarouselNext className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-blue-400 p-2 rounded-full text-white z-50"

                />
              </div>
            </Carousel>


          </motion.div>
        </main>
      </div>


      <footer className=" p-4 text-center text-gray-600 bg-gray-100">
        <p>&copy; 2025 Cover Letter Generator. All rights reserved.</p>
      </footer>
    </div>

  );
}

