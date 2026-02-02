import { useRef, useState } from "react";
import { FaArrowRight, FaBriefcase, FaCartPlus, FaChartLine, FaHome, FaStar, FaUserGraduate } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import Slider from "react-slick";



function About() {

   const sliderData = [
  {
    img: "/image/college-1.jpeg",
    text: "Top Engineering Colleges in India",
    date: "14 June 2023",
  },
  {
    img: "/image/college-5.jpg",
    text: "Best MBA Colleges with Placement",
    date: "20 June 2023",
  },
  {
    img: "/image/college-4.jpg",
    text: "Medical Admission Latest News",
    date: "25 June 2023",
  },
  {
    img: "/image/college-3.jpg",
    text: "Commerce Top Universities",
    date: "30 June 2023",
  },
];
   const settings1 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1600,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <div className="w-full">
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 
  flex flex-col items-center justify-center gap-6 pt-28 pb-28 lg:pt-48 lg:pb-48 text-center">

  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
    font-extrabold text-[#0A2F66] leading-tight">
    About Us
  </h1>

  <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-700">
    Building a unified ecosystem that connects people, institutions,
    and solutions for real-world impact.
  </p>

  <ul className="flex flex-row items-center justify-center gap-3 text-[#0A2F66] font-semibold">
    <li className="flex items-center gap-2 hover:underline cursor-pointer">
      Home <FaChevronRight />
    </li>
    <li>About Us</li>
  </ul>
</div>
    
    </div>

      <div className="flex flex-col items-center justify-center w-full pt-20 pb-20 bg-white">
      
        {/* HEADING */}
        <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-24 text-center">
          <span className="text-[#0A5585] text-xl sm:text-2xl font-bold">
            BEYOND ADMISSION
          </span>
      
          <p
            className="text-black text-2xl sm:text-3xl md:text-4xl 
            font-bold pt-3 pb-6 max-w-3xl"
          >
            Support That Continues After You Enroll
          </p>
      
          <p className="text-black text-base sm:text-lg md:text-xl pt-3 max-w-4xl">
            Our commitment doesn’t end with admission. We provide end-to-end
            support—from accommodation assistance and career mentoring to
            internships and placement preparation.
          </p>
        </div>
      
        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-16 pt-8">
      
          {/* CARD 1 */}
          <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <FaHome className="text-[#0A5585] text-xl" />
            </div>
      
            <h3 className="text-lg font-semibold text-black">
              Hostel & Accommodation Support
            </h3>
      
            <p className="text-gray-600 text-sm leading-relaxed">
              Verified hostel and PG assistance near your college for a safe and comfortable stay.
            </p>
          </div>
      
          {/* CARD 2 */}
          <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <FaUserGraduate className="text-[#0A5585] text-xl" />
            </div>
      
            <h3 className="text-lg font-semibold text-black">
              Career Guidance & Mentorship
            </h3>
      
            <p className="text-gray-600 text-sm leading-relaxed">
              Personalized career roadmaps, skill guidance, and future growth planning.
            </p>
          </div>
      
          {/* CARD 3 */}
          <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <FaBriefcase className="text-[#0A5585] text-xl" />
            </div>
      
            <h3 className="text-lg font-semibold text-black">
              Internship & Industry Exposure
            </h3>
      
            <p className="text-gray-600 text-sm leading-relaxed">
              Access to internships, live projects, and industry connections for real-world experience.
            </p>
          </div>
      
          {/* CARD 4 */}
          <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <FaChartLine className="text-[#0A5585] text-xl" />
            </div>
      
            <h3 className="text-lg font-semibold text-black">
              Placement Preparation
            </h3>
      
            <p className="text-gray-600 text-sm leading-relaxed">
              Resume building, mock interviews, and placement readiness programs.
            </p>
          </div>
      
        </div>
      </div>
    
       <div className="w-full mt-10 mb-10">
                      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 sm:px-6 md:px-10 lg:px-24  ">
                              <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-6 lg:w-1/2 w-full pt-16 pb-16">
                                    <span className="bg-[#0ab99d] text-white rounded-xl px-6 py-3 ">Our About Us</span>
                                   <h1 className="text-2xl lg:text-4xl font-bold text-black">Learn & Grow your skills From anywhere</h1>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..
                                    </p>
      
                                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 bg-[#f2f2f2] rounded-2xl px-4 py-8 ">
                <h2 className="text-xl font-bold">Flexible Classes</h2>
                <p className="text-gray-600">
                  Suspendisse ultrice gravida dictum fusce placerat.
                </p>
              </div>
      
              <div className="flex flex-col gap-2 bg-[#f2f2f2] rounded-2xl px-4 py-8">
                <h2 className="text-xl font-bold">Expert Mentors</h2>
                <p className="text-gray-600">
                  Suspendisse ultrice gravida dictum fusce placerat.
                </p>
              </div>
              <div className="flex flex-col gap-2 bg-[#f2f2f2] rounded-2xl px-4 py-8">
                <h2 className="text-xl font-bold">Flexible Classes</h2>
                <p className="text-gray-600">
                  Suspendisse ultrice gravida dictum fusce placerat.
                </p>
              </div>
      
              <div className="flex flex-col gap-2 bg-[#f2f2f2] rounded-2xl px-4 py-8">
                <h2 className="text-xl font-bold">Expert Mentors</h2>
                <p className="text-gray-600">
                  Suspendisse ultrice gravida dictum fusce placerat.
                </p>
              </div>
            </div>
                                    
                                    <a href="/contact" className="bg-[#0ab99d] flex flex-row items-center justify-center gap-3 text-white font-bold cursor-pointer rounded-xl px-6 py-3 mb-14"> More About Us <FaArrowRight /> </a>
      
                            </div>
                            <div className="flex items-stretch justify-center lg:w-1/2 py-6 w-full">
                                <img src="image/admission-1.jpg" alt="" className="rounded-2xl w-full" />
                            </div>
                      </div>
                      
                 </div>

       <div className="max-w-6xl mx-auto py-12">

  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-800">
      Latest Updates
    </h2>
    <p className="text-black text-sm mt-2">
      Stay updated with colleges, admissions & exams
    </p>
  </div>

  <Slider {...settings1}>
    {sliderData.map((item, i) => (
      <div key={i} className="px-3">
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-3">
          <img
            src={item.img}
            alt=""
            className="w-full h-48 object-cover rounded-lg"
          />

          <div className="flex flex-col items-start justify-start gap-4">
            <p className="mt-3 text-gray-800 font-semibold text-sm">
              {item.text}
            </p>

            <span className="text-xs text-gray-500">
              {item.date}
            </span>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
                 <div className="w-full sm:px-6 md:px-10 lg:px-16">
                        <div className="bg-green-300 flex flex-col lg:flex-row items-center justify-between gap-6 px-6 py-6 md:py-10 lg:py-18  ">
                              <div className="flex flex-row gap-3 items-center">
                                  <GiTeacher className="text-4xl" />  
                                  <div className="flex flex-col gap-1">
                                    <h1 className="text-4xl font-bold">3K+</h1>
                                    <span>Succesfully Trained</span>
                                  </div>
                              </div>
                              <div className="flex flex-row gap-3 items-center">
                                  <GiTeacher className="text-4xl font-bold"/>  
                                  <div className="flex flex-col gap-1">
                                    <h1 className="text-4xl font-bold">15K+</h1>
                                    <span>Classes Completed</span>
                                  </div>
                              </div>
                              <div className="flex flex-row gap-3 items-center">
                                  <GiTeacher className="text-4xl font-bold" />  
                                  <div className="flex flex-col gap-1">
                                    <h1 className="text-4xl font-bold">97K+</h1>
                                    <span>Satisfaction Rate</span>
                                  </div>
                              </div>
                              <div className="flex flex-row gap-3 items-center">
                                  <GiTeacher className="text-4xl font-bold" />  
                                  <div className="flex flex-col gap-1">
                                    <h1 className="text-4xl font-bold">102K+</h1>
                                    <span>Students Community</span>
                                  </div>
                              </div>
                        </div>
                 </div>
      
                 <div className="w-full ">
                      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24">
                            <div className="flex flex-col items-center justify-center gap-4 px-4 sm:px-8 lg:px-24 mt-10">
                                    <a href="" className="bg-[#0ab99d] text-white rounded-xl text-center py-2 px-6 ">Choose Your Career</a>
                                    <h1 className="text-2xl font-bold text-black">Discover Your Grain</h1>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 w-full mt-10">
                                <div className="bg-[#4c8b79] flex flex-col items-start justify-start gap-5 rounded-2xl px-10 py-20 pb-20">
                                        <span className="text-white text-4xl font-bold">Start From Today</span>
                                       <h1 className="text-white"> Join Our Training Courses & Build Your Skill</h1>
      
                                       <a href="/contact" className="bg-black text-white   flex flex-row items-center justify-center gap-3  font-bold cursor-pointer rounded-xl px-6 py-3">Join Now  <FaArrowRight /> </a>
      
                                </div>
                                <div className="bg-[#4c8b79] flex flex-col items-start justify-start gap-5 rounded-2xl px-10 py-20 pb-20">
                                        <span className="text-white text-4xl font-bold">Start From Today</span>
                                       <h1 className="text-white"> Join Our Training Courses & Build Your Skill</h1>
      
                                       <a href="/contact" className="bg-black text-white   flex flex-row items-center justify-center gap-3  font-bold cursor-pointer rounded-xl px-6 py-3">Join Now  <FaArrowRight /> </a>
      
                                </div>
                            </div>
                      </div>
                 </div>

                 <div className="bg-[#f2f2f2] w-full mt-10 ">
                <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-24">
                        <div className="flex flex-col items-center justify-center gap-4 mt-20 mb-16">
                            <a href="" className="bg-green-400 rounded-xl text-center py-2 px-6 ">Top Popular Courses</a>
                            <h1 className="text-black text-4xl text-center font-bold ">Histudy Course student can join with us.</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full">

  
  <div className="bg-white flex flex-col rounded-xl p-4 gap-3 h-full shadow">
    <img
      src="/image/course-1-1.jpg"
      alt=""
      className="rounded-xl w-full h-48 object-cover"
    />

    <div className="flex flex-row items-start justify-start gap-2 py-3">
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <span>(4.7)</span>
    </div>

    <h1 className="text-2xl text-black font-semibold">
      It statistics data science and Business analysis
    </h1>

    <div className="flex flex-row justify-between text-sm text-gray-600">
      <span>Lessons</span>
      <span>19h 30min</span>
      <span>Students 20+</span>
    </div>

    <hr className="border-t border-dotted border-gray-300" />

    <div className="flex flex-row items-start justify-start gap-3">
      <img
        src="/image/avata-1.png"
        alt=""
        className="w-7 h-7 rounded-full"
      />
      <h4 className="text-black">
        By Angela in Development
      </h4>
    </div>

    <div className="flex flex-row items-center justify-between mt-auto">
      <h1 className="flex gap-2">
        <span className="text-green-600 font-bold">$60</span>
        <span className=" text-green-600 font-bold">$60</span>
      </h1>
      <h1 className="flex flex-row items-center gap-2 text-green-600 cursor-pointer">
        <FaCartPlus />
        <span>Add to Cart</span>
      </h1>
    </div>
  </div>

 
  <div className="bg-white flex flex-col rounded-xl p-4 gap-3 h-full shadow">
    <img
      src="/image/course-1-2.jpg"
      alt=""
      className="rounded-xl w-full h-48 object-cover"
    />

    <div className="flex flex-row items-start justify-start gap-2 py-3">
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <span>(4.7)</span>
    </div>

    <h1 className="text-2xl text-black font-semibold">
      It statistics data science and Business analysis
    </h1>

    <div className="flex flex-row justify-between text-sm text-gray-600">
      <span>Lessons</span>
      <span>19h 30min</span>
      <span>Students 20+</span>
    </div>

    <hr className="border-t border-dotted border-gray-300" />

    <div className="flex flex-row items-start justify-start gap-3">
      <img
        src="/image/avata-1.png"
        alt=""
        className="w-7 h-7 rounded-full"
      />
      <h4 className="text-black">
        By Angela in Development
      </h4>
    </div>

    <div className="flex flex-row items-center justify-between mt-auto">
      <h1 className="flex gap-2">
        <span className="text-green-600 font-bold">$60</span>
        <span className=" text-green-600 font-bold">$60</span>
      </h1>
      <h1 className="flex flex-row items-center gap-2 text-green-600 cursor-pointer">
        <FaCartPlus />
        <span>Add to Cart</span>
      </h1>
    </div>
  </div>

  
  <div className="bg-white flex flex-col rounded-xl p-4 gap-3 h-full shadow">
    <img
      src="/image/course-1-3.jpg"
      alt=""
      className="rounded-xl w-full h-48 object-cover"
    />

    <div className="flex flex-row items-start justify-start gap-2 py-3">
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <FaStar className="text-green-400" />
      <span>(4.7)</span>
    </div>

    <h1 className="text-2xl text-black font-semibold">
      Bilginer Adobe Illustrator for Graphic Design
    </h1>

    <div className="flex flex-row justify-between text-sm text-gray-600">
      <span>Lessons</span>
      <span>19h 30min</span>
      <span>Students 20+</span>
    </div>

    <hr className="border-t border-dotted border-gray-300" />

    <div className="flex flex-row items-start justify-start gap-3">
      <img
        src="/image/avata-1.png"
        alt=""
        className="w-7 h-7 rounded-full"
      />
      <h4 className="text-black">
        By Angela in Development
      </h4>
    </div>

    <div className="flex flex-row items-center justify-between mt-auto">
      <h1 className="flex gap-2">
        <span className="text-green-600 font-bold">$60</span>
        <span className=" text-green-600 font-bold">$60</span>
      </h1>
      <h1 className="flex flex-row items-center gap-2 text-green-600 cursor-pointer">
        <FaCartPlus />
        <span>Add to Cart</span>
      </h1>
    </div>
  </div>

</div>

                         <a href="/contact" className="bg-[#0ab99d] flex flex-row items-center justify-center gap-3 text-white font-bold cursor-pointer rounded-xl px-6 py-3 mb-14">Load More Course <FaArrowRight /> </a>

                </div>
           </div>

    </>
    
    
  );
}

export default About;
