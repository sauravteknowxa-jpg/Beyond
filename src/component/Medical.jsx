import { useState } from "react";
import { BsPersonBadgeFill } from "react-icons/bs";
import { FaBook, FaBookReader, FaHandsHelping } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";
import Slider from "react-slick";

function Medical() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    neet: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1600,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  return (
    <>

    <div className="w-full">
          <div className="flex lg:flex-row flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-6 text-sm text-gray-600 lg:w-1/2">
                <div className="flex flex-col gap-3">
                            <span className="text-[#0A2F66] text-2xl font-semibold">Enroll it !</span>
                             <h1 className="text-4xl text-black font-bold">Where your Dream fulfill into Reality</h1>
                        <p className="text-2xl"> The Expert Advisor helps students get direct admission in MBBS fast and easy. We guide them step by step, take care of all the paperwork, and give helpful advice, so they can focus on studying, enjoy learning, and have a smooth, stress-free journey to becoming a doctor.</p>
                 </div>
                  <div className="flex justify-start">
                        <a
                        href=""
                        className="bg-green-500 hover:bg-green-600 transition text-white rounded-full px-6 py-3 font-medium"
                        >
                        Explore More <FaChevronRight className="inline-block ml-2" />
                        </a>
                    </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <img src="/image/doctor-1.webp" alt="" />
            </div>
          </div>
        
        </div>

<div className="w-full bg-gradient-to-r from-[#4979ca] to-[#e672de]">
        <div className="w-full flex flex-col items-center justify-center gap-5 py-20 px-4 sm:px-8 lg:px-16">
            <span className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">Beyond Admission</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-4"> How it Works</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-8 lg:px-16 ">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4">
                    
                    <FaBookReader size={32} className="text-green-600" />
                    <h3 className="text-xl font-semibold">Requirements</h3>
                    <p className="text-gray-600 text-sm text-center">Understand the Requirement of Students for college Selection and  Counselling.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4">
                    
                    <BsPersonBadgeFill size={32} className="text-green-600" />

                    <h3 className="text-xl font-semibold">Advisory</h3>
                    <p className="text-gray-600 text-sm text-center">Our team guide you for better college slection to get the admmission .</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4">
                    
                    <FaBook size={32} className="text-green-600" />
                    <h3 className="text-xl font-semibold">Predictions</h3>
                    <p className="text-gray-600 text-sm text-center">We will predict the college with the neet predictor and select best college to get admission.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4">
                    
                    <FaHandsHelping size={32} className="text-green-600" />
                    <h3 className="text-xl font-semibold">Support</h3>
                    <p className="text-gray-600 text-sm text-center">Our team provides ongoing support throughout your journey .</p>
                </div>
            </div>
        </div>
    </div>
     
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-8 lg:px-16 mt-10 mb-10">
  <Slider {...settings3}>

    
    <div className="px-3">
      <div className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-red-600">
        <img
          src="/image/foreign-1.jpg"
          alt="Russia MBBS"
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-3 text-center">MBBS in Russia</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Globally Recognized Medical Universities</li>
            <li>No Donation or Capitation Fee</li>
            <li>Affordable Tuition & Living Cost</li>
            <li>NMC & WHO Approved Colleges</li>
            <li>English Medium Education</li>
            <li>High FMGE Passing Ratio</li>
          </ul>
        </div>
      </div>
    </div>

   
    <div className="px-3">
      <div className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-red-600">
        <img
          src="/image/foreign-2.jpg"
          alt="Georgia MBBS"
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-3 text-center">
            MBBS in Georgia
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>High Quality Medical Education</li>
            <li>No Entrance Exam Required</li>
            <li>Affordable Fee Structure</li>
            <li>European Standard Curriculum</li>
            <li>English Medium Teaching</li>
            <li>Safe & Student-Friendly Environment</li>
          </ul>
        </div>
      </div>
    </div>

    
    <div className="px-3">
      <div className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-red-600">
        <img
          src="/image/foreign-3.jpg"
          alt="Kazakhstan MBBS"
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-3 text-center">
            MBBS in Kazakhstan
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Low Cost Medical Education</li>
            <li>NMC Approved Universities</li>
            <li>No Donation Policy</li>
            <li>English Medium Programs</li>
            <li>Modern Infrastructure & Labs</li>
            <li>High FMGE Success Rate</li>
          </ul>
        </div>
      </div>
    </div>

    
    <div className="px-3">
      <div className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-red-600">
        <img
          src="/image/foreign-4.jpg"
          alt="Uzbekistan MBBS"
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-3 text-center">
            MBBS in Uzbekistan
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Affordable MBBS Fee Structure</li>
            <li>NMC & WHO Recognized Colleges</li>
            <li>English Medium Education</li>
            <li>Safe Hostel Facilities</li>
            <li>Strong Clinical Exposure</li>
            <li>Simple Admission Process</li>
          </ul>
        </div>
      </div>
    </div>

  </Slider>
</div>

    <div className="max-w-7xl mx-auto px-4 py-16">
     
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 italic">
          “Your Trusted Partner for Fast, Easy, and Reliable University Admissions”
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-8 lg:px-16">
        
       
        <div className="bg-white rounded-xl shadow-md p-6  flex flex-col items-start gap-2">
          <img
            src="/image/art-1.png"
            alt="icon"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-xl font-semibold mb-3">
            <a href="" className="hover:text-blue-600">
              MBBS & BDS Admission Guidance (India & Abroad)
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            Explore a growing list of trusted universities in multiple countries
            across Europe and beyond. More destinations are continuously being
            added to match your academic goals.
          </p>
        </div>

       
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-2">
          <img
            src="/image/art-2.png"
            alt="icon"
            className="w-24 h-24  mb-4"
          />
          <h3 className="text-xl font-semibold mb-3">
            <a href="" className="hover:text-blue-600">
              Direct Admission Support in Medical Colleges

            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            We help students navigate state and national counselling processes, including MCC, DGHS, and all state-level rounds, with accurate updates and step-by-step support.
          </p>
        </div>

      
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-2">
          <img
            src="/image/art-3.png"
            alt="icon"
            className="w-24 h-24  mb-4"
          />
          <h3 className="text-xl font-semibold mb-3">
            <a href="" className="hover:text-blue-600">
              College & Budget Planning

            </a>
          </h3>
          <p className="text-gray-600 text-sm">
           With strong associations with trusted institutions, we assist eligible students in exploring direct admission options ethically and transparently.
          </p>
        </div>

        
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-2">
          <img
            src="/image/art-4.png"
            alt="icon"
            className="w-24 h-24  mb-4"
          />
          <h3 className="text-xl font-semibold mb-3">
            <a href="" className="hover:text-blue-600">
              Advanced Technology Platform
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            Our user-friendly platform lets you register, upload documents, and
            track your application — all in one place, from any device.
          </p>
        </div>

       
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-2">
          <img
            src="/image/art-5.png"
            alt="icon"
            className="w-24 h-24  mb-4"
          />
          <h3 className="text-xl font-semibold mb-3">
            <a href="" className="hover:text-blue-600">
              Training and Support for Partners
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            We support recruitment partners with onboarding, training, and
            ongoing tools to succeed in helping their students get admitted
            faster.
          </p>
        </div>

      
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-2">
          <img
            src="/image/art-6.png"
            alt="icon"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-xl font-semibold mb-3">
            <a href="" className="hover:text-blue-600">
             Abroad Medical Education Guidance
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            Explore MBBS abroad options in countries like Russia, Uzbekistan, Georgia, Kazakhstan, the Philippines, and more—with complete visa, travel, and admission support.


          </p>
        </div>

      </div>
    </div>

    <section className="bg-gradient-to-t from-[#f2f4c6] to-[#bbe6e4] from py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-cneter">
      
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Connect With Us
          </h3>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="MOBILE NO."
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            >
              <option value="">Select Course</option>
              <option value="MBBS">MBBS</option>
              <option value="MD MS">MD MS</option>
              <option value="BDS">BDS</option>
              <option value="BAMS">BAMS</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="neet"
              placeholder="NEET SCORE"
              value={formData.neet}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </div>
      
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Guiding Thousands of Medical Careers
          </h2>

          <p className="text-gray-600 text-lg">
            “A leading medical admission advisory platform, providing  aspirants with expert guidance and complete support to achieve successful MBBS admissions in top medical colleges.”
          </p>

          <p className="text-gray-800 font-semibold">
            The Doctors Guardian is the perfect choice if you’re looking for a
            reliable, transparent, and student-friendly counselling platform to
            build your dream medical career.
          </p>
        </div>
      </div>
    </section>

    
    </>
  );
}   
export default Medical;