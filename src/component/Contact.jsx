import { FaChevronRight } from "react-icons/fa6";

function Contact(){
return(
    <>
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 
  flex flex-col items-center justify-center gap-6 pt-28 pb-28 lg:pt-48 lg:pb-48 text-center">

  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
    font-extrabold text-[#0A2F66] leading-tight">
    Contact Us
  </h1>

  <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-700">
    We’re here to help you — reach out for guidance, support, or inquiries.
  </p>

  <ul className="flex flex-row items-center justify-center gap-3 text-[#0A2F66] font-semibold">
    <li className="flex items-center gap-2 hover:underline cursor-pointer">
      Home <FaChevronRight />
    </li>
    <li>Contact</li>
  </ul>
</div>

    </>
)
}
export default Contact;