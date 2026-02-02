import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import "./style.css"
export default function Navbar() {
  

  const [openMenu, setOpenMenu] = useState(null);
const [activeLeft, setActiveLeft] = useState(null);
const [mobileOpen, setMobileOpen] = useState(false);
const [mobileSub, setMobileSub] = useState(null);


  const menus = [
    { key: "admission", title: "Admission" },
    { key: "partners", title: "Partners" },
    { key: "medical", title: "Medical(India and Abroad)" },
    { key: "counselling", title: "Counselling" },
    { key: "abroad", title: "Study Abroad" },
    { key: "more", title: "More" },
  ];

  const dropdownData = {
    admission: {
      left: ["Medical", "Engineering", "Management", "Humanities/Law","Finanace"],
      right: {
        "Medical": [
          "MBBS",
          "UG ",
          "PG",
          "MD/MS",
        ],
        "Engineering": [
          "B Tech",
          "BCA",
          "M Tech",
          "MCA",
        ],
        "Management": [
          "BBA",
          "MBA",
          "HR",
          "Marketing",
        ],
        "Humanities/Law": ["BA", "LLB", "PHD", "MA","Commerce"],
        "Finanace": ["B COM", "MCOM", "BFSI", "CA" ],
      },
    },

    partners: {
      left: ["Universities India", "Universities Abroad", "Companies", "Tech Solutions"],
      right: {
        "Universities India": [
          "About",
          "Courses",
          "Enquire",
          
        ],
        "Universities Abroad": [
          "About",
          "Courses",
          "Enquire",
        ],
        
        "Companies": [
          "About",
          "Opportunities",
          
        ],
        "Tech Solutions": ["LMS", "CRM", "ERP"],
      },
    },

    medical: {
      left: ["MBBS", "PG", "Nursing","Neet Predictor"],
      right: {
        "MBBS": [ "Russia" , "USA", "Ukraine","UK",],

        "PG": ["Gerorgia" ],
              
        "Nursing": [ "Mauritus"],
        
        "Neet Predictor": ["USMLE", "PTE", "FMEG" ],


      },
    },

    counselling: {
      left: ["UG Counselling", "PG Counselling",],
      right: {
        "UG Counselling": ["JoSAA", "NEET UG", "State Counselling"],
        "PG Counselling": ["NEET PG", "AIIMS PG"],
       

      },
    },

    abroad: {
      left: ["Countries", "Exams","visa support","finacial"],
      right: {
         "visa support": ["USA Visa", "UK Visa", "Canada Visa", "Australia Visa"],
        finacial: ["Education Loans", "Scholarships"],
        Countries: ["USA", "UK", "Canada", "Australia", "Germany"],
        Exams: ["IELTS", "TOEFL", "GRE", "GMAT"],
      },
    },

    more: {
      left: ["Law", "Commerce", "IT","Arts","Humanities"],
      right: {
        Law: ["LLB", "LLM", "CLAT"],
        Commerce: ["B.Com", "M.Com", "CA"],
        IT: ["BCA", "MCA", "Data Science"],
        Arts: ["B.A", "M.A", "BFA"],
        Humanities: ["History", "Political Science", "Sociology"],
      },
    },
  };

  return (

    <>
      <nav className="bg-white shadow relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex justify-between items-center">
          <div className="">
            <img src="/image/beyond-logo.jpeg" alt="" className="w-28" />
          </div>

        
          <ul className="hidden lg:flex   gap-8 font-medium">
            {menus.map((menu) => (
              <li
                key={menu.key}
                onMouseEnter={() => {
                  setOpenMenu(menu.key);
                  setActiveLeft(dropdownData[menu.key].left[0]);
                }}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  setActiveLeft(null);
                }}
                className="cursor-pointer"
              >
                <span className="flex items-center gap-1">
                  {menu.title} <FiChevronDown size={14} />
                </span>
              </li>
            ))}
          </ul>

        
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      
      {openMenu && (
        <div
          onMouseEnter={() => setOpenMenu(openMenu)}
          onMouseLeave={() => setOpenMenu(null)}
          className="absolute left-0 right-0 top-16 bg-white border-t shadow-xl"
        >
        <div className="absolute -top-3 left-0 w-full h-3"></div>

          <div className="max-w-7xl mx-auto flex flex-row gap-6 p-6">
            
           
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-4 capitalize">
                {openMenu}
              </h4>
            

              {dropdownData[openMenu].left.map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveLeft(item)}
                  className={`px-3 py-2 rounded cursor-pointer
                    ${
                      activeLeft === item
                        ? "bg-white text-blue-600 font-semibold"
                        : "hover:text-blue-600"
                    }`}
                >
                  {item}
                </div>
              ))}
            </div>

            
            <div className="col-span-2 flex flex-col gap-2">
              {dropdownData[openMenu].right[activeLeft]?.map((item, i) => (
                <NavLink
                  key={i}
                  to=""
                  
                  className="px-4 py-1 rounded hover:bg-gray-100"
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>

    {mobileOpen && (
  <div className="lg:hidden bg-white border-t shadow-lg">
    <ul className="flex flex-col divide-y">
      {menus.map((menu) => (
        <li key={menu.key} className="px-4 py-3">
          
          
          <button
            onClick={() =>
              setMobileSub(mobileSub === menu.key ? null : menu.key)
            }
            className="w-full flex  justify-between items-center font-semibold"
          >
            {menu.title}
            <FiChevronDown
              className={`transition-transform ${
                mobileSub === menu.key ? "rotate-180" : ""
              }`}
            />
          </button>

          
          {mobileSub === menu.key && (
            <div className="mt-3 ml-3  space-y-2 flex flex-wrap gap-3 ">
              {dropdownData[menu.key].left.map((item, i) => (
                <div key={i}>
                  <p className="font-medium text-blue-600">{item}</p>

                  <div className="ml-3 mt-1 space-y-1">
                    {dropdownData[menu.key].right[item]?.map((sub, j) => (
                      <NavLink
                        key={j}
                        to=""
                        className="block text-sm text-gray-600 hover:text-blue-600"
                      >
                        {sub}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
)}

    
    </>
    

  );
}
