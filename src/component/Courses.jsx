import { useRef } from "react";
import { useState } from "react";
import { FaChevronRight, FaPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Courses(){
 
   const tabs1={
    Engineering: [
    { name: "IIT Delhi", city: "Delhi" },
    { name: "IIT Kanpur", city: "Kanpur" },
    { name: "NIT Trichy", city: "Tamil Nadu" },
  ],
  Management: [
    { name: "IIM Ahmedabad", city: "Ahmedabad" },
    { name: "IIM Bangalore", city: "Bangalore" },
  ],
  Science: [
    { name: "IIM Ahmedabad", city: "Ahmedabad" },
    { name: "IIM Bangalore", city: "Bangalore" },
  ],
  Law: [
    { name: "IIM Ahmedabad", city: "Ahmedabad" },
    { name: "IIM Bangalore", city: "Bangalore" },
  ],

  Engineering1: [
    { name: "IIT Delhi", city: "Delhi" },
    { name: "IIT Kanpur", city: "Kanpur" },
    { name: "NIT Trichy", city: "Tamil Nadu" },
  ],
  Management1: [
    { name: "IIM Ahmedabad", city: "Ahmedabad" },
    { name: "IIM Bangalore", city: "Bangalore" },
  ],
  Science1: [
    { name: "IIM Ahmedabad", city: "Ahmedabad" },
    { name: "IIM Bangalore", city: "Bangalore" },
  ],
  Law1: [
    { name: "IIM Ahmedabad", city: "Ahmedabad" },
    { name: "IIM Bangalore", city: "Bangalore" },
  ],
  Pharmacy: [
    { name: "IIM Ahmedabad", city: "Rajkot" },
    { name: "IIM Bangalore", city: "Bangalore" },
  ],
  "Commerce and Banking": [
    { name: "SRCC", city: "Delhi" },
    { name: "St. Xavier’s", city: "Mumbai" },
  ],
  "Arts & Humanities": [
    { name: "Ahdh", city: "Delhi" },
    { name: "St. Xavier’s", city: "Mumbai" },
  ],

  Medical: [
    { name: "AIIMS Delhi", city: "Delhi" },
  ],
  };

   const tabKeys = Object.keys(tabs1); // ["Engineering","Management",...]
const [activeTab, setActiveTab] = useState(tabKeys[0]);

const tabScrollRef = useRef(null);

const scrollTabs = (dir) => {
  if (!tabScrollRef.current) return;

  tabScrollRef.current.scrollBy({
    left: dir === "left" ? -250 : 250,
    behavior: "smooth",
  });
};

    return(
        <>
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 
  flex flex-col items-center justify-center gap-6 pt-28 pb-28 lg:pt-48 lg:pb-48 text-center">

  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
    font-extrabold text-[#0A2F66] leading-tight">
    Our Courses
  </h1>

  <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-700">
    Explore career-focused programs designed to match your goals
    and future opportunities.
  </p>

  <ul className="flex flex-row items-center justify-center gap-3 text-[#0A2F66] font-semibold">
    <li className="flex items-center gap-2 hover:underline cursor-pointer">
      Home <FaChevronRight />
    </li>
    <li>Courses</li>
  </ul>
</div>
      
      <div className="relative max-w-7xl mx-auto mb-6">

  {/* Left Arrow */}
  <button
    onClick={() => scrollTabs("left")}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
  >
    <FiChevronLeft size={18} />
  </button>

  {/* Scrollable Tabs */}
  <div
    ref={tabScrollRef}
    className="flex gap-3 overflow-x-hidden px-12"
  >
    {tabKeys.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 whitespace-nowrap rounded-full border
          ${activeTab === tab
            ? "bg-red-600 text-white"
            : "bg-gray-100 text-gray-700"}
        `}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Right Arrow */}
  <button
    onClick={() => scrollTabs("right")}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
  >
    <FiChevronRight size={18} />
  </button>
</div>


    
        <div className="mt-6">
  <h2 className="text-xl font-bold mb-4">
    {activeTab} Colleges
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {tabs1[activeTab]?.map((item, i) => (
      <div key={i} className="p-4 border rounded shadow-sm bg-white">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-500">{item.city}</p>
      </div>
    ))}
  </div>
</div>


 <div className="w-full mt-20 mb-20 ">
                    <div className="flex flex-col lg:flex-row gap-4 px-4 sm:px-6 md:px-12 lg:px-24">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center gap-8 py-2 sm:py-4 lg:py-12 lg:w-1/2 w-full ">
                            <h1 className="text-2xl lg:text-4xl text-black font-bold">Develop Your skills with online courses From A Pro</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="flex flex-row gap-4">
                                    
                                    <a href="/contact" className="bg-[#0ab99d] flex flex-row items-center justify-center gap-3 text-white font-bold cursor-pointer rounded-xl px-6 py-3">Explore All Courses <FaArrowRight /> </a>
                                    <a href="https://www.youtube.com" target="_blank"  rel="noreferrer"  className="flex items-center gap-2 p-4  bg-black text-white rounded-full shadow-lg hover:bg-black transition"  > <FaPlayCircle size={22} /></a>
                                    <span className="flex items-center">Watch Now</span>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center lg:w-1/2 w-full">

  
                            <img
                                src="/image/shape-2-6.png"
                                alt=""
                                className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[90%] opacity-80"
                            />

                            
                            <img
                                src="/image/hero-2.png"
                                alt=""
                                className="relative z-10 max-w-full h-auto"
                            />

                            </div>

                    </div>
            </div>


            <div className="w-full">
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 sm:px-6 md:px-10 lg:px-24  ">
                                <div className="lg:w-1/2 w-full relative py-10 flex justify-center lg:justify-end overflow-visible">
            
              <img
                src="/image/thumb-3.jpg"
                alt=""
                className="object-cover rounded-2xl"
              />
            
              <img
                src="/image/thumb-1.jpg"
                alt=""
                className="hidden xl:block absolute -top-16 left-40 -translate-x-1/2 w-auto h-auto object-cover rounded-xl shadow-lg z-20"
              />
            
              <img
                src="/image/thumb-2.jpg"
                alt=""
                className="hidden xl:block absolute -bottom-20 left-40 -translate-x-1/2 w-auto h-auto object-cover rounded-xl shadow-lg z-30"
              />
            
            </div>
            
            
                                  <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-6 lg:w-1/2 w-full pt-16 pb-16">
                                          <span className="bg-[#0ab99d] text-white rounded-xl px-6 py-3 ">Our About Us</span>
                                         <h1 className="text-2xl lg:text-4xl font-bold text-black">Learn & Grow your skills From anywhere</h1>
                                          <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..
                                          </p>
                                          <div className="flex flex-row ">
                                                <div className="flex flex-col gap-3">
                                                  <h1 className="text-2xl font-bold">Flexible Classes</h1>
                                                  <p>Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.</p>
                                                </div>
                                                 <div className="flex flex-col gap-3">
                                                  <h1 className="text-2xl font-bold">Flexible Classes</h1>
                                                  <p>Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.</p>
                                                </div>
                                          </div>
                                          <a href="/contact" className="bg-[#0ab99d] flex flex-row items-center justify-center gap-3 text-white font-bold cursor-pointer rounded-xl px-6 py-3 mb-14"> More About Us <FaArrowRight /> </a>
            
                                  </div>
                            </div>
                        </div>


                    

        </>
    )
}

export default Courses;