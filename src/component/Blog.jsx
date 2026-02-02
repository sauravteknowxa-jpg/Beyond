import { BsCalendar2, BsCalendar2Date } from "react-icons/bs";
import { FaArrowRight, FaCommentAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";


function Blog(){
    return(
        <>
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 
            flex flex-col items-center justify-center gap-6 pt-28 pb-28 lg:pt-48 lg:pb-48 text-center">
        
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-extrabold text-[#0A2F66] leading-tight">
              Beyond Admission Blog
            </h1>
        
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-700">
              Guidance, growth, and real-world success — everything students need
              after enrollment, all in one place.
            </p>
        
            <ul className="flex flex-row items-center justify-center gap-3 text-[#0A2F66] font-semibold">
              <li className="flex items-center gap-2 hover:underline cursor-pointer">
                Home <FaChevronRight />
              </li>
              <li>Beyond Admission</li>
            </ul>
          </div>

          <div className="w-full mt-10 mb-10">
                            <div className="flex flex-col items-start justify-start gap-4 px-4 sm:px-6 md:px-12 lg:px-24">
                              <span className="bg-[#3d6a5d] flex flex-row items-center justify-center gap-3 text-white font-bold cursor-pointer rounded-xl px-6 py-3">BLOG POST</span>
                              <div className="flex flex-col lg:flex-row gap-4 items-start justify-start lg:justify-between w-full">
                                  <h1 className="text-4xl font-bold">Post Popular Post</h1>
                                  <a href="/contact" className="bg-[#0ab99d] flex flex-row items-center justify-center gap-3 text-white font-bold cursor-pointer rounded-xl px-6 py-3">All Blog Post <FaArrowRight /> </a>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full">
          
            
            <div className="bg-white flex flex-col justify-start rounded-xl p-4 gap-3 h-full shadow">
              <img
                src="/image/course-1-1.jpg"
                alt=""
                className="rounded-xl w-full h-48 object-cover"
              />
          
              <ul className="flex flex-row items-start justify-start gap-2 py-3">
                <li className="flex flex-row items-center gap-2"><BsCalendar2Date /><span>14June 2023</span></li>
                <li className="flex flex-row items-center gap-2"><FaCommentAlt /><span>Comment(06)</span></li>
              </ul>
          
              <h1 className="text-lg text-black font-semibold">
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              </h1>
          
               <a href="/contact" className="bg-[#0ab99d] self-start  flex flex-row items-center justify-center gap-3 text-white font-bold cursor-pointer rounded-xl px-6 py-3">All Blog Post <FaArrowRight /> </a>
          
            </div>
          
           
            <div className="bg-white flex flex-col rounded-xl p-4 gap-3 h-full shadow">
              <img
                src="/image/course-1-2.jpg"
                alt=""
                className="rounded-xl w-full h-48 object-cover"
              />
          
          <ul className="flex flex-row items-start justify-start gap-2 py-3">
                <li className="flex flex-row items-center gap-2"><BsCalendar2Date /><span>14June 2023</span></li>
                <li className="flex flex-row items-center gap-2"><FaCommentAlt /><span>Comment(06)</span></li>
              </ul>
          
              <h1 className="text-lg text-black font-semibold">
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              </h1>
          
               <a href="/contact" className="bg-[#0ab99d] self-start  flex flex-row items-center justify-center gap-3 text-white font-bold cursor-pointer rounded-xl px-6 py-3">All Blog Post <FaArrowRight /> </a>
          
            </div>
          
            
            <div className="bg-white flex flex-col rounded-xl p-4 gap-3 h-full shadow">
              <img
                src="/image/course-1-3.jpg"
                alt=""
                className="rounded-xl w-full h-48 object-cover"
              />
          
              <ul className="flex flex-row items-start justify-start gap-2 py-3">
                <li className="flex flex-row items-center gap-2"><BsCalendar2Date /><span>14June 2023</span></li>
                <li className="flex flex-row items-center gap-2"><FaCommentAlt /><span>Comment(06)</span></li>
              </ul>
          
              <h1 className="text-lg text-black font-semibold">
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              </h1>
          
               <a href="/contact" className="bg-[#0ab99d] self-start  flex flex-row items-center justify-center gap-3 text-white font-bold cursor-pointer rounded-xl px-6 py-3">All Blog Post <FaArrowRight /> </a>
          
            </div>
          
          </div>
          
                          </div>
                    </div>
        </>
    )
}
export default Blog;