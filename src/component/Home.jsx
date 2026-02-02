import { BsCalendar2Date, BsGraphUpArrow } from "react-icons/bs";
import { FaArrowRight, FaCartPlus, FaChartArea, FaCommentAlt, FaGraduationCap, FaIndustry, FaInnosoft, FaLaptopCode, FaLinkedin, FaMobile, FaPinterest, FaPlayCircle, FaRocket, FaScrewdriver, FaStar, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaSquareWebAwesome, FaTwitter } from "react-icons/fa6";
import { GiHiveMind, GiTeacher } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import { MdGraphicEq, MdOutlinePersonOutline } from "react-icons/md";
import Slider from "react-slick";
import { useRef } from "react";
import { FaFire } from "react-icons/fa";
import {  useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaHome, FaUserGraduate, FaBriefcase, FaChartLine } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  Users,
  Globe,
  Building,
  Award,
  GraduationCap,
  Star,
} from "lucide-react";


function Home(){

  const courses = [
  {
    title: "TOURISM & HOSPITALITY",
    desc: "Study travel management, hospitality services, and global tourism trends.",
    img: "/image/tourism.png",
  },
  {
    title: "RETAIL MANAGEMENT",
    desc: "Learn merchandising, sales, and retail operations management.",
    img: "/image/management.png",
  },
  {
    title: "PROJECT MANAGEMENT",
    desc: "Gain expertise in project planning, execution, and leadership.",
    img: "/image/project.jpg",
  },
  {
    title: "NURSING",
    desc: "Study patient care, clinical skills, and healthcare management.",
    img: "/image/nursing.jpg",
  },
  {
    title: "MBA",
    desc: "Learn business administration, strategy, finance, and leadership skills.",
    img: "/image/mba.jpg",
  },
  {
    title: "MANAGEMENT",
    desc: "This is a sample paragraph that provides a brief overview of the course content.",
    img: "/image/admission-1.jpg",
  },
];
   const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Beyond Admission",
      answer:
        "Beyond Admission is a platform that helps students discover and apply to their desired colleges and universities both domestically and internationally. We streamline the admission process by matching students with the best-fit institutions based on their goals and qualifications.",
    },
    {
      question: "How is Beyond Admission different from other platforms?",
      answer:
        "Unlike one-size-fits-all platforms, we focus on personalized matches based on your profile, preferences, and academic background. While others focus heavily on test prep and act as aggregators for recruitment agents and universities only or partially, Beyond Admission prioritizes student fit, success, and direct support.",
    },
    {
      question: "Is Beyond Admission or college change service free to use?",
      answer:
        "Yes! Students can get admissions to any colleges or universities they like all across the world. Our admissions experts help them throughout the way including any formalities, without any additional charges other than mandatory university fees. If visa or immigration assistance is needed, we refer you to our hand-picked partners with additional discounts.",
    },
    {
      question: "Can I apply to multiple universities and countries through Beyond Admission?",
      answer:
        "Yes, you can apply to multiple institutions across countries and track all your applications in one platform. We actively monitor all your applications and guide you accordingly.",
    },
    {
      question: "Which countries can I apply to through Beyond Admission?",
      answer:
        "We currently support admissions to top destinations like Canada, USA, UK, Australia, and select European and Asian countries. New destinations are added regularly.",
    },
    {
      question: "Do you provide visa assistance?",
      answer:
        "We do not directly offer visa guidance, but once your admission is confirmed, our immigration and legal partners ensure you meet all requirements for a successful student visa application.",
    },
    {
      question: "What happens after I receive an admission offer?",
      answer:
        "We help you with the next steps, including accepting the offer, paying tuition deposits, preparing for the visa, and even finding accommodation or travel tips.",
    },
    {
      question: "Can someone help me choose the right university or program?",
      answer:
        "Absolutely. Our expert counselors provide 1-on-1 guidance with the help of our internal AI program selection feature to help you select programs aligned with your academic background and career goals.",
    },
    {
      question: "Do you offer support for SOPs and LORs?",
      answer:
        "Yes. We offer SOP/LOR writing and editing services to ensure your application stands out.",
    },
  ];

 

  const tabs = [
    
      "Engineering",
      "Management",
      "Commerce and Banking",
      "Medical",
      "Science",
      "Hotel Management",
      "Information Technology",
      "Arts & Humanities",
      "Agriculture",
      "Law",
      "Pharmacy",
      "Education",
    ];
  
    const [activeTab, setActiveTab] = useState("Engineering");
    const tabRef = useRef(null);
  
    const scrollTabs = (dir) => {
      if (!tabRef.current) return;
      const width = tabRef.current.clientWidth;
      tabRef.current.scrollBy({
        left: dir === "left" ? -width / 2 : width / 2,
        behavior: "smooth",
      });
    };
    
   
    const featuredColleges = [
      "Parul University",
      "Jadhavpur University",
      "Delhi University",
      "Jawahar Lal Nehru University",
      "Dev Bhoomi University",
      "Indian Institute Of Technology",
      "Jaipur National University",
      "Institute of Engineering and Management",
      "Lingaya's Vidyapeeth",
      "Vivekananda Global University",
    ];
  
    const relatedCourses = [
      "B Tech",
      "M Tech",
      "Bachelor of Engineering",
      "Civil Engineering",
      "Mechanical Engineering",
      "Automobile Engineering",
      "Aerospace Engineering",
      "Aeronautical Engineering",
      "Software Engineering",
      "Computer Engineering",
    ];
  
    const rightCards = [
      {
        title: "Important Exams",
        items: ["JEE Main", "JEE Advanced", "TS EAMCET", "WBJEE", "VITEEE"],
       
      },
      {
        title: "Top States",
        items: ["Maharashtra", "Tamilnadu","Madhya Pradesh", "Uttar Pradesh", "Karnataka", "Rajasthan", "Punjab","Bihar","Assam","Jharkhand","Himachal Pradesh"],
        
      },
    ];
  

    const states = [
  { name: "Andhra Pradesh", img: "/image/ap.png", link: "andhra-pradesh-universities" },
  { name: "Arunachal Pradesh", img: "/image/arunachalp.png", link: "arunachal-pradesh-universities" },
  { name: "Assam", img: "/image/assam.png", link: "assam-universities" },
  { name: "Bihar", img: "/image/bihar.png", link: "bihar-universities" },
  { name: "Chhattisgarh", img: "/image/chhattisgarh.png", link: "chhattisgarh-universities" },
  { name: "Goa", img: "/image/goa.png", link: "goa-universities" },
  { name: "Gujarat", img: "/image/gujarat.png", link: "gujarat-universities" },
  { name: "Haryana", img: "/image/haryana.png", link: "haryana-universities" },
  { name: "Himachal Pradesh", img: "/image/hp.png", link: "himachal-pradesh-universities" },
  { name: "Jharkhand", img: "/image/jharkhand.png", link: "jharkhand-universities" },
  { name: "Karnataka", img: "/image/karnataka.png", link: "karnataka-universities" },
  { name: "Kerala", img: "/image/kerala.png", link: "kerala-universities" },
  { name: "Madhya Pradesh", img: "/image/mp.png", link: "madhya-pradesh-universities" },
  { name: "Maharashtra", img: "/image/maharashtra.png", link: "maharashtra-universities" },
  { name: "Manipur", img: "/image/manipur.png", link: "manipur-universities" },
  
  { name: "Odisha", img: "/image/odisha.png", link: "odisha-universities" },
  { name: "Punjab", img: "/image/punjab.png", link: "punjab-universities" },
  { name: "Rajasthan", img: "/image/rajasthan.png", link: "rajasthan-universities" },
  
  { name: "Telangana", img: "/image/telengana.png", link: "telangana-universities" },
  
  { name: "Uttar Pradesh", img: "/image/uttarpradesh.png", link: "uttar-pradesh-universities" },
  { name: "West Bengal", img: "/image/westbengal.png", link: "west-bengal-universities" },
  { name: "Chandigarh (UT)", img: "/image/chandigarh.png", link: "chandigarh-universities" },
  { name: "Delhi (NCT)", img: "/image/delhi.png", link: "delhi-universities" },
  { name: "Jammu & Kashmir (UT)", img: "/image/jnk.png", link: "jammu-and-kashmir-universities" },
  
];

  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (dir === "left") {
      sliderRef.current.scrollLeft -= 300;
    } else {
      sliderRef.current.scrollLeft += 300;
    }
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


    return(
        <>

          <div className="relative w-full h-screen">

  
  <Slider {...settings} className="h-full">
    {[
      "/image/college-3.jpg",
      "/image/college-4.jpg",
      "/image/college-5.jpg",
    ].map((img, i) => (
      <div key={i} className="w-full h-screen relative">
        <img
          src={img}
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    ))}
  </Slider>

 
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
      Search Colleges, Courses and Exams
    </h1>

 
    <div className="bg-white rounded-full w-full max-w-2xl flex items-center px-4 py-2 shadow-lg">
      <input
        type="text"
        placeholder="Search for colleges, exams, courses and more.."
        className="flex-1 outline-none text-black px-2"
      />
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
        Search
      </button>
    </div>

    
    <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
      <span className="text-sm">Popular: B.Tech, MBA, NEET, JEE</span>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
        Need Counselling
      </button>
    </div>
  </div>
</div>


<section
      className="py-20 bg-gradient-to-l from-blue-50 to-white"
      
    >
      <div className="max-w-7xl mx-auto px-4">

       
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-600">
            Study Destinations
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Countries We Serve
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Explore opportunities across top education destinations worldwide.
            We have partnerships with leading universities in these countries.
          </p>
        </div>

       
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

         
          <a
            href="/"
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 opacity-0 group-hover:opacity-5"></div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="text-5xl">🇺🇸</span>
                <div>
                  <h3 className="text-xl font-semibold">USA</h3>
                  <p className="text-sm text-gray-500">500+ Universities</p>
                </div>
              </div>

              <p className="mt-4 text-gray-500">
                Ivy League & Top Universities
              </p>

              <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                Explore Programs →
              </div>
            </div>
          </a>

         
          <a
            href="/"
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-red-800 opacity-0 group-hover:opacity-5"></div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="text-5xl">🇬🇧</span>
                <div>
                  <h3 className="text-xl font-semibold">United Kingdom</h3>
                  <p className="text-sm text-gray-500">130+ Universities</p>
                </div>
              </div>

              <p className="mt-4 text-gray-500">
                Russell Group Universities
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600">
                Explore Programs →
              </div>
            </div>
          </a>

          
          <a
            href="/"
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-0 group-hover:opacity-5"></div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="text-5xl">🇨🇦</span>
                <div>
                  <h3 className="text-xl font-semibold">Canada</h3>
                  <p className="text-sm text-gray-500">100+ Universities</p>
                </div>
              </div>

              <p className="mt-4 text-gray-500">
                PR Pathway Options
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600">
                Explore Programs →
              </div>
            </div>
          </a>

          
          <a
            href="/"
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-yellow-600 opacity-0 group-hover:opacity-5"></div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="text-5xl">🇦🇺</span>
                <div>
                  <h3 className="text-xl font-semibold">Australia</h3>
                  <p className="text-sm text-gray-500">45+ Universities</p>
                </div>
              </div>

              <p className="mt-4 text-gray-500">
                Group of Eight Universities
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600">
                Explore Programs →
              </div>
            </div>
          </a>

        
          <a
            href="/"
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-yellow-500 opacity-0 group-hover:opacity-5"></div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="text-5xl">🇩🇪</span>
                <div>
                  <h3 className="text-xl font-semibold">Germany</h3>
                  <p className="text-sm text-gray-500">400+ Universities</p>
                </div>
              </div>

              <p className="mt-4 text-gray-500">
                Low Tuition Fees
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600">
                Explore Programs →
              </div>
            </div>
          </a>

         
          <a
            href="/"
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-green-600 opacity-0 group-hover:opacity-5"></div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="text-5xl">🇮🇳</span>
                <div>
                  <h3 className="text-xl font-semibold">India</h3>
                  <p className="text-sm text-gray-500">200+ Universities</p>
                </div>
              </div>

              <p className="mt-4 text-gray-500">
                Top Private Universities
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600">
                Explore Programs →
              </div>
            </div>
          </a>

        </div>

        
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            View All Destinations →
          </a>
        </div>
      </div>
    </section>


<div className=" flex-col gap-3 w-full mt-10 ">
            
             <div className="flex flex-col gap-2 items-center justify-center">
                    <span className="text-black font-bold text-3xl">Updates</span>
                    <span className="text-gray-800"></span>
             </div>

<div className="w-full px-4 py-6">
      <div className="flex lg:flex-row flex-col gap-3">

      
        <div className=" lg:w-[20%] w-full h-full  flex lg:flex-col flex-wrap gap-3">
          <a href="#" className="bg-red-600 text-white p-3 text-center rounded font-bold">APPLY NOW</a>
          <a href="#" className="bg-green-600 text-white p-3 text-center rounded font-bold">MERIT LIST</a>
          <a href="#" className="bg-blue-600 text-white p-3 text-center rounded font-bold">ADMISSION INFO</a>
          <a href="#" className="bg-blue-600 text-white p-3 text-center rounded font-bold">ADMISSION INFO</a>
          <a href="#" className="bg-yellow-500 text-black p-3 text-center rounded font-bold">NEWS</a>
          
          <a href="#" className="bg-yellow-500 text-black p-3 text-center rounded font-bold">NEWS</a>
          <a href="#" className="bg-indigo-700 text-white p-3 text-center rounded font-bold">
            Colleges in <br /><span className="text-xl">India</span>
          </a>
        </div>

       
       <div className="bg-white border rounded shadow w-full">
      <div className="bg-[#242d3e] text-white px-4 py-2 font-bold">
        LATEST UPDATES 2026
      </div>

      <div className="h-[380px] overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
       

          <div className="border rounded p-3 flex flex-row gap-2">
      <p className="text-red-600 text-sm">22 Jan 2026</p>
      <p className="text-gray-600 text-sm">Sage University</p>
      <p className="font-semibold">BA BSc Part II Re-Exam</p>
    </div>

   
    <div className="border rounded p-3 flex flex-row gap-2">
      <p className="text-red-600 text-sm">21 Jan 2026</p>
      <p className="text-gray-600 text-sm">Parul University</p>
      <p className="font-semibold">BBA 6th Semester Schedule</p>
    </div>

   
    <div className="border rounded p-3 flex flex-row gap-2">
      <p className="text-red-600 text-sm">20 Jan 2026</p>
      <p className="text-gray-600 text-sm">RGPV</p>
      <p className="font-semibold"> Admission 2026-27</p>
    </div>

   
    <div className="border rounded p-3 flex flex-row gap-2">
      <p className="text-red-600 text-sm">20 Jan 2026</p>
      <p className="text-gray-600 text-sm">LNCT University</p>
      <p className="font-semibold">PGDM Admission 2026-27</p>
    </div>

     <div className="border rounded p-3 flex flex-row gap-2">
      <p className="text-red-600 text-sm">22 Jan 2026</p>
      <p className="text-gray-600 text-sm">Barkatullah University</p>
      <p className="font-semibold">UG Philosophy Exam Date Change</p>
    </div>

    
    <div className="border rounded p-3 flex flex-row gap-2">
      <p className="text-red-600 text-sm">22 Jan 2026</p>
      <p className="text-gray-600 text-sm">Sage University</p>
      <p className="font-semibold">BA BSc Part II Re-Exam</p>
    </div>

   
    <div className="border rounded p-3 flex flex-row gap-2">
      <p className="text-red-600 text-sm">21 Jan 2026</p>
      <p className="text-gray-600 text-sm">Parul University</p>
      <p className="font-semibold">BBA 6th Semester Schedule</p>
    </div>

   
    <div className="border rounded p-3 flex flex-row gap-2">
      <p className="text-red-600 text-sm">20 Jan 2026</p>
      <p className="text-gray-600 text-sm">RGPV</p>
      <p className="font-semibold"> Admission 2026-27</p>
    </div>

        </div>
      </div>

      <div className="bg-[#242d3e] text-right p-2 text-white text-sm">
        View All →
      </div>
    </div>
       
        <div className="w-full lg:w-[20%] flex lg:flex-col flex-wrap gap-3">
          <a href="#" className="bg-purple-600 text-white p-3 text-center rounded font-bold">EXAM SCHEDULE</a>
          <a href="#" className="bg-pink-600 text-white p-3 text-center rounded font-bold">EXAM RESULTS</a>
          <a href="#" className="bg-gray-700 text-white p-3 text-center rounded font-bold">NOTIFICATIONS</a>
          <a href="#" className="bg-pink-600 text-white p-3 text-center rounded font-bold">EXAM RESULTS</a>
          <a href="#" className="bg-gray-700 text-white p-3 text-center rounded font-bold">NOTIFICATIONS</a>
          
          <a href="#" className="bg-orange-500 text-white p-3 text-center rounded font-bold">STUDY ABROAD</a>
          <a href="#" className="bg-indigo-700 text-white p-3 text-center rounded font-bold">
            Colleges in <br /><span className="text-xl">States</span>
          </a>
        </div>

      </div>
    </div>

      </div>


  <div className="w-full px-6 sm:px-8 lg:px-12 mt-16 mb-16">
   
  <div className="text-center mb-8">
    <h2 className="m-0 p-0 text-3xl font-bold">
      Popular Courses 
    </h2>

    <p className="mt-4 text-gray-600 leading-relaxed">
      Discover top education destinations known for excellence and innovation.
      <br />
      Explore vibrant campuses and world-renowned institutions that offer
      unparalleled learning experiences
    </p>
  </div>

 
  <div className="max-w-7xl mx-auto py-8">
    <Slider {...settings3}>

     
      <div className="px-3">
        <div className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-red-600">
          <img
            src="/image/foreign-1.jpg"
            alt="Malta"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-3 text-center">MBBS / Medical</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>MBBS in Russia</li>
              <li>MBBS in Philipines</li>
              <li>MBBS in China</li>
              <li>MBBS in Ukraine</li>
              <li>MBBS in India</li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="px-3">
        <div className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-red-600">
          <img
            src="/image/foreign-2.jpg"
            alt="Mauritius"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-3 text-center">
              Engineering
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>B.Tech in India</li>
              <li>MS in USA</li>
              <li>M.Tech in IIT</li>
              <li>Engineering in Germany</li>
              <li>B.Tech in Private Universities</li>
              
            </ul>
          </div>
        </div>
      </div>

     
      <div className="px-3">
        <div className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-red-600">
          <img
            src="/image/foreign-3.jpg"
            alt="Netherlands"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-3 text-center">
              MBA / Management
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>MBA in India</li>
              <li> MBA in UK</li>
              <li>MBA in USA</li>
              <li>PGDM Programs</li>
              <li>Executive MBA</li>
              
            </ul>
          </div>
        </div>
      </div>

      
      <div className="px-3">
        <div className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-red-600">
          <img
            src="/image/foreign-4.jpg"
            alt="Romania"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-3 text-center">
              LAW
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>BA LLB (5 years)</li>
              <li>BBA LLB</li>
              <li>LLB (3 years)</li>
              <li>LLM</li>
              <li>Corporate Law</li>
             
            </ul>
          </div>
        </div>
      </div>

        <div className="px-3">
        <div className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-red-600">
          <img
            src="/image/foreign-4.jpg"
            alt="Romania"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-3 text-center">
              Science & Humanities
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>BSc Programs</li>
              <li>BA Programs</li>
              <li>MSc Programs</li>
              <li>MA Programs</li>
              <li>PhD Programs</li>
             
            </ul>
          </div>
        </div>
      </div>
    </Slider>
  </div>
</div>


<div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-l from-blue-50 to-white rounded-lg">
     
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">Why Beyond Admission</h2>
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
              Numerous Study Destinations
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
              Stress-Free Admission Process
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            Forget the paperwork. We take care of your application from start to
            finish, ensuring a smooth, fast, and professional admission journey.
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
              Single Application Form
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            Apply to several partner universities with just one form. Save time
            and effort while increasing your chances of admission.
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
              Personalized Assistance When Needed
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            Need help with your CV, motivation letter, or visa process? Our
            optional support services are available to guide you through each
            step.
          </p>
        </div>

      </div>
    </div>

   <div className="w-full mb-20  bg-gradient-to-r from-blue-50 to-white ">
      <div className="text-center pt-10 mb-20">
  <h2 className="text-3xl font-bold text-gray-800">
    Trending Colleges & Courses
  </h2>
  <p className="text-xl text-black mt-6">
    Updated list of colleges, specializations & career paths
  </p>
</div>

      <div className="max-w-7xl mx-auto bg-white shadow-sm py-3 relative mb-6">
        <button
          onClick={() => scrollTabs("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          <FiChevronLeft size={18} />
        </button>

        <div
          ref={tabRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition
                ${
                  activeTab === tab
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTabs("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          <FiChevronRight size={18} />
        </button>
      </div>

     
     <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">

  <div className="bg-white rounded-xl shadow p-5  h-[500px] overflow-y-auto flex flex-wrap gap-3">
    <h3 className="w-full text-lg font-bold mb-4">Featured Colleges</h3>
    {featuredColleges.map((college, i) => (
      <div
        key={i}
        className="px-3 py-2 border rounded-lg inline-block"
      >
        {college}
      </div>
    ))}
  </div>

  
  <div className="flex flex-col gap-6 h-[500px]">
    {rightCards.map((card, idx) => (
      <div key={idx} className="bg-white rounded-xl shadow p-5 flex-1 overflow-y-auto flex flex-wrap gap-3">
        
        <h3 className="w-full text-lg font-bold mb-4">{card.title}</h3>
        {card.items.map((item, i) => (
          <div key={i} className="px-3 py-2 border rounded-lg inline-block">
            {item}
          </div>
        ))}
      </div>
    ))}
  </div>

  
  <div className="bg-white rounded-xl shadow p-5 h-[500px] overflow-y-auto flex flex-wrap gap-3">
    <h3 className="w-full text-lg font-bold mb-4">Related Courses</h3>
    {relatedCourses.map((course, i) => (
      <div key={i} className="px-3 py-2 border rounded-lg inline-block">
        {course}
      </div>
    ))}
  </div>

</div>


    </div>


<div className="w-full bg-gradient-to-t from-blue-50 to-white  ">
  
  <div className="flex flex-col items-center justify-center px-4 py-16  text-center">

    <span className="text-[#2563eb] lg:text-4xl sm:text-base font-bold tracking-widest">
      Our Services
    </span>

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pt-3 pb-4 max-w-3xl">
      Support, Growth & Career After Enrollment
    </h2>

    <p className="text-gray-600 max-w-4xl text-base sm:text-lg leading-relaxed">
      Our commitment doesn’t stop once you secure admission. We continue to
      walk with you through every stage of your academic and professional
      journey — from accommodation support and career mentoring to internships,
      skill development, and placement preparation.  
      <br /><br />
      Explore our Beyond Admission blogs to discover expert insights,
      practical tips, and success stories that help you grow with confidence.
    </p>

  </div>
</div>


<div className="bg-gradient-to-b from-blue-50 to-white  max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
gap-6 px-4 sm:px-6 lg:px-16 pb-20 items-stretch">

  
  <div className="flex flex-col w-full h-full group">
    <img
      src="/image/campus-1.jpg"
      className="rounded-3xl w-full h-56 object-cover"
    />
    <ul className="flex gap-4 px-2 pt-4 text-sm text-gray-500">
      <li className="flex items-center gap-1"><IoTimeOutline /> Feb 02, 2024</li>
      <li className="flex items-center gap-1"><MdOutlinePersonOutline /> Career Team</li>
    </ul>
    <p className="text-black text-xl font-semibold hover:text-blue-700 px-2 pt-3 cursor-pointer">
      How Hostel & Campus Support Shapes Student Success
    </p>
    <a href="/" className="text-blue-700 font-semibold px-2 pt-3"> 
      Read more →
    </a>
  </div>

 
  <div className="flex flex-col w-full h-full group">
    <img
      src="/image/campus-2.jpg"
      className="rounded-3xl w-full h-56 object-cover"
    />
    <ul className="flex gap-4 px-2 pt-4 text-sm text-gray-500">
      <li className="flex items-center gap-1"><IoTimeOutline /> Feb 05, 2024</li>
      <li className="flex items-center gap-1"><MdOutlinePersonOutline /> Placement Desk</li>
    </ul>
    <p className="text-black text-xl font-semibold hover:text-blue-700 px-2 pt-3 cursor-pointer">
      Placement Preparation: What Every Student Should Know
    </p>
    <a href="/" className="text-blue-700 font-semibold px-2 pt-3"> 
      Read more →
    </a>
  </div>

 
  <div className="flex flex-col w-full h-full group">
    <img
      src="/image/campus-3.jpg"
      className="rounded-3xl w-full h-56 object-cover"
    />
    <ul className="flex gap-4 px-2 pt-4 text-sm text-gray-500">
      <li className="flex items-center gap-1"><IoTimeOutline /> Feb 07, 2024</li>
      <li className="flex items-center gap-1"><MdOutlinePersonOutline /> Internship Team</li>
    </ul>
    <p className="text-black text-xl font-semibold hover:text-blue-700 px-2 pt-3 cursor-pointer">
      Why Internships Matter More Than Your Degree
    </p>
    <a href="/" className="text-blue-700 font-semibold px-2 pt-3"> 
      Read more →
    </a>
  </div>

  
  <div className="flex flex-col w-full h-full group">
    <img
      src="/image/campus-4.jpg"
      className="rounded-3xl w-full h-56 object-cover"
    />
    <ul className="flex gap-4 px-2 pt-4 text-sm text-gray-500">
      <li className="flex items-center gap-1"><IoTimeOutline /> Feb 10, 2024</li>
      <li className="flex items-center gap-1"><MdOutlinePersonOutline /> Mentorship Team</li>
    </ul>
    <p className="text-black text-xl font-semibold hover:text-blue-700 px-2 pt-3 cursor-pointer">
      Career Mentorship: Your Roadmap After College
    </p>
    <a href="/" className="text-blue-700 font-semibold px-2 pt-3"> 
      Read more →
    </a>
  </div>

 
  <div className="flex flex-col w-full h-full group">
    <img
      src="/image/campus-5.jpg"
      className="rounded-3xl w-full h-56 object-cover"
    />
    <ul className="flex gap-4 px-2 pt-4 text-sm text-gray-500">
      <li className="flex items-center gap-1"><IoTimeOutline /> Feb 12, 2024</li>
      <li className="flex items-center gap-1"><MdOutlinePersonOutline /> Student Support</li>
    </ul>
    <p className="text-black text-xl font-semibold hover:text-blue-700 px-2 pt-3 cursor-pointer">
      Life After Admission: Managing Academics & Growth
    </p>
    <a href="/" className="text-blue-700 font-semibold px-2 pt-3"> 
      Read more →
    </a>
  </div>


  <div className="flex flex-col w-full h-full group">
    <img
      src="/image/campus-6.jpg"
      className="rounded-3xl w-full h-56 object-cover"
    />
    <ul className="flex gap-4 px-2 pt-4 text-sm text-gray-500">
      <li className="flex items-center gap-1"><IoTimeOutline /> Feb 15, 2024</li>
      <li className="flex items-center gap-1"><MdOutlinePersonOutline /> Career Coach</li>
    </ul>
    <p className="text-black text-xl font-semibold hover:text-blue-700 px-2 pt-3 cursor-pointer">
      From Classroom to Career: Your Transition Guide
    </p>
    <a href="/" className="text-blue-700 font-semibold px-2 pt-3"> 
      Read more →
    </a>
  </div>

</div>


 <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

       
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-600">
            Our Impact
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Numbers That Speak
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Our track record reflects our commitment to student success
          </p>
        </div>

        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">10000+</p>
            <p className="mt-2 text-lg font-semibold">Students Placed</p>
            <p className="mt-1 text-sm text-gray-500">
              Successfully admitted students
            </p>
          </div>

      
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">25+</p>
            <p className="mt-2 text-lg font-semibold">Countries</p>
            <p className="mt-1 text-sm text-gray-500">
              Global destinations covered
            </p>
          </div>

          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">500+</p>
            <p className="mt-2 text-lg font-semibold">Partner Universities</p>
            <p className="mt-1 text-sm text-gray-500">
              Worldwide university network
            </p>
          </div>

          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">98%</p>
            <p className="mt-2 text-lg font-semibold">Success Rate</p>
            <p className="mt-1 text-sm text-gray-500">
              Visa approval rate
            </p>
          </div>

         
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">15+</p>
            <p className="mt-2 text-lg font-semibold">Years Experience</p>
            <p className="mt-1 text-sm text-gray-500">
              In education consultancy
            </p>
          </div>

          {/* 6 */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">4.9/5</p>
            <p className="mt-2 text-lg font-semibold">Student Rating</p>
            <p className="mt-1 text-sm text-gray-500">
              Based on reviews
            </p>
          </div>

        </div>
      </div>
    </section>   


<div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
  
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
      Frequently Asked <span className="text-blue-600">Questions</span>
    </h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
      Have questions about Beyond Admission? Find answers to the most common queries from students regarding our services, support, and processes.
    </p>
  </div>

  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full sm:px-6 md:px-10 lg:px-16 mt-10">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="border rounded-lg shadow-sm overflow-hidden flex flex-col h-auto"
      >
        <button
          className="w-full flex justify-between items-center px-4 py-3 font-medium bg-white focus:outline-none"
          onClick={() => toggle(index)}
        >
          <span>{faq.question}</span>
          <span className="ml-2">
            {activeIndex === index ? (
              <FaMinus className="text-blue-600" />
            ) : (
              <FaPlus className="text-blue-600" />
            )}
          </span>
        </button>

       
        {activeIndex === index && (
          <div className="px-4 py-3 text-gray-700 border-t bg-blue-50">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</div>


 <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center relative">

        <h2 className="text-2xl font-bold mb-8">Universities by State</h2>

        
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
        >
          <FiChevronLeft size={22} />
        </button>

        
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
        >
          <FiChevronRight size={22} />
        </button>

      
        <ul
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10"
        >
          {states.map((state, i) => (
            <li key={i} className="min-w-[140px]">
              <a
                href={state.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center bg-white shadow rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src={state.img}
                  alt={state.name}
                  className="h-16 mb-2 object-contain"
                />
                <p className="text-sm font-semibold text-gray-700">
                  {state.name}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>         



          <div className="w-full bg-[#54baa8] ">
  <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 px-5 py-10 lg:py-16 lg:px-24">

  
    <div className="flex flex-col gap-2 text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
        Join Our Newsletter
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-lg">
        Subscribe our newsletter to get our latest updates, offers & news.
      </p>
    </div>

   
    <div className="w-full sm:w-[420px] bg-white flex items-center rounded-full p-2 shadow-lg">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 text-sm outline-none rounded-full"
      />
      <button className="bg-black text-white text-sm sm:text-base rounded-full px-5 py-2 hover:bg-gray-800 transition">
        Subscribe
      </button>
    </div>

  </div>
</div>


           
            <div className='w-full bg-[#0e2a46] text-white'>
                <div className='flex flex-col items-start justify-start gap-2 sm:p-2 md:px-4  w-full '>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  items-start justify-between sm:px-4 md:px-8 lg:px-8 p-2 md:py-16 w-full'>
                        <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                            <img src="/image/beyond-logo.jpeg" alt="" className="w-28 rounded-sm" />
                            <p className='text-white text-sm '>Your trusted partner for admissions in India and abroad. We help students achieve their dreams of studying at top universities worldwide.</p>
                            <ul className='flex flex-wrap items-start justify-start gap-4 '>
                                
                                
                                 <li className="rounded-full p-3 bg-gray-500">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li className="rounded-full p-3 bg-gray-500">
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <FaInstagram />
                                    </a>
                                </li>
                               <li className="rounded-full p-3 bg-gray-500">
                                    <a href="https://in.pinterest.com/" target="_blank">
                                        <FaPinterest />
                                    </a>
                                </li>
                                <li className="rounded-full p-3 bg-gray-500">
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <FaTwitter />
                                    </a>
                                </li>
                            </ul>
                        </div>

                       

                        

                        <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                            <h3 className='text-white text-lg md:text-2xl font-bold'>quick links:</h3>
                            <ul className='flex flex-col items-start justify-start gap-4 '>
                                <li className='text-gray-400 text-lg font-semibold cursor-pointer'><a href="/stake">About Us</a></li>
                                <li className='text-gray-400 text-lg font-semibold cursor-pointer'><a href="/contact">Study Abroad</a> </li>
                                <li className='text-gray-400 text-lg font-semibold cursor-pointer'><a href="/service">India Admissions</a></li>
                                <li className='text-gray-400 text-lg font-semibold cursor-pointer'><a href="/event">Courses</a></li>
                                <li className='text-gray-400 text-lg font-semibold cursor-pointer'><a href="/contact">Contact Us</a></li>
                            </ul>

                        </div>
                       
                        <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                            <h3 className='text-white text-lg md:text-2xl font-bold'>Popular Courses</h3>

                            <ul className='flex flex-col items-start justify-start gap-4 '>
                                <li className='text-gray-400 text-lg font-semibold cursor-pointer'><a href="/">MBBS Abroad</a></li>
                                <li className='text-gray-400 text-lg font-semibold cursor-pointer'><a href="/about">Engineering</a></li>
                                <li className='text-gray-400 text-lg font-semibold cursor-pointer'><a href="/service">MBA</a></li>
                                <li className='text-gray-400 text-lg font-semibold cursor-pointer'><a href="/blog">Medical & Nursing</a></li>
                                <li className='text-gray-400 text-lg font-semibold cursor-pointer'><a href="/contact">Paramedical</a></li>
                            </ul>
                        </div>

                        <div className='flex flex-col items-start justify-start gap-6 p-6  '>
                            <h3 className='text-white text-lg md:text-2xl font-bold'>Gallery</h3>
                            <ul className='grid grid-cols-3 items-start justify-start gap-4 '>
                                <li className=' cursor-pointer'>
                                    <img src="/image/thumb-1-1.png" alt="" height="70" width="120" />
                                </li>
                                <li className=' cursor-pointer'>
                                    <img src="/image/thumb-1-2.png" alt="" height="70" width="120" />
                                </li>
                                <li className=' cursor-pointer'>
                                    <img src="/image/thumb-1-3.png" alt="" height="70" width="120" />
                                </li>
                                <li className=' cursor-pointer'>
                                    <img src="/image/thumb-1-4.png" alt="" height="70" width="120" />
                                </li>
                                <li className=' cursor-pointer'>
                                    <img src="/image/thumb-1-5.png" alt="" height="70" width="120" />
                                </li>
                                <li className=' cursor-pointer'>
                                    <img src="/image/thumb-1-6.png" alt="" height="70" width="120" />
                                </li>
                            </ul>

                        </div>

                    </div>


                </div>

            </div>
            <div className='bg-black text-white flex flex-wrap items-center justify-center gap-2 p-3  sm:px-6 md:px-12 lg:px-16 py-5 w-full'>
                <span className='text-[#ffffff] text-sm'>Copyright © 2023 <span className="text-[#0ab99d]">Educate</span> || All Rights Reserved</span>
            </div>
        </>
    )
}

export default Home;