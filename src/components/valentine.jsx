import { useState } from "react";
import loveGif from "../assets/Happy Love You Sticker by milkmochabear.gif";
import loveGif2 from "../assets/My Love Hearts Sticker by milkmochabear.gif";

export default function ValentinePage() {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [noText, setNoText] = useState("No");
  const [showGif, setShowGif] = useState(false);
  

  const noTexts = [
    "Are you sure?",
    "Please 😢",
    "Think again!",
    "Last chance!",
    "You broke my heart 💔",
    "One last chance",
    "Please Please Please",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "Don't do this to me 😭",
    "I'm not giving up!",
    "Pretty please? 🥺",
    "Come on, say yes! 💝",
    "You can't resist forever!",
    "My heart wants you! ❤️",
    "Just one yes! 🎀",
    "Almost clicked yes, right?",
    "Final final chance! 💖"
  ];


  const sizeClasses = [
  
    "w-24 h-12",
    "w-48 h-24",
    "w-72 h-36",
    "w-[500px] h-[250px]",
    "w-[750px] h-[375px]",
    "w-[1000px] h-[500px]",
    "w-[1500px] h-[750px]",
    "w-[2000px] h-[1000px]",
    "w-[2500px] h-[1250px]",
    "w-[3000px] h-[1500px]",
    "w-[3500px] h-[1750px]",
    "w-[4000px] h-[2000px]",
    "w-[4500px] h-[2250px]",
    "w-[5000px] h-[2500px]",
    "w-[5500px] h-[2750px]",
    "w-[6000px] h-[3000px]",
    "w-[6500px] h-[3250px]",
    "w-[7000px] h-[3500px]",
    "w-[7500px] h-[3750px]",
    "w-[8000px] h-[4000px]",
    "w-[8500px] h-[4250px]",
    "w-[9000px] h-[4500px]",
    "w-[9500px] h-[4750px]",
    "w-[10000px] h-[5000px]",
  ];

  const handleNoClick = () => {
    const nextText = noTexts[Math.min(noTexts.indexOf(noText) + 1, noTexts.length - 1)];
    setNoText(nextText);
    setSizeIndex(Math.min(sizeIndex + 1, sizeClasses.length - 1)); 
  };

  return (
    <div className='bg-pink-100 px-3 py-8'>
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 text-center p-4" style={{ fontFamily: "Arial, sans-serif" }}>
      {!showGif ? (
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
            Will you be my Valentine? ❤️
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <button
              onClick={() => setShowGif(true)}
              className={`bg-green-500 text-white font-semibold py-2 px-6  shadow-lg transition-all duration-300 ${sizeClasses[sizeIndex]}`}
            >
              Yes
            </button>

            {sizeIndex < 22 && (
              <button
                onClick={handleNoClick}
                className="bg-red-500 text-white font-semibold py-2 px-6  shadow-lg transition-all duration-300 w-auto"
              >
                {noText}
              </button>
            )}
          </div>
          <img src={loveGif2} alt="Cute giphy" className="mt-6 w-full max-w-[200px] mx-auto" />
        </div>
      ) : (
        <div className="text-center w-full max-w-md">
          <p className="text-2xl md:text-3xl font-bold text-red-600 mb-6">I knew it! 😍</p>
          <img className="w-full max-w-[300px] mx-auto" src={loveGif} alt="Cute giphy" />
        </div>
      )}
    </div>
    </div>
  );
}
