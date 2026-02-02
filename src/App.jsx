import { Route, Routes } from "react-router-dom";
import Careeer from "./component/Career";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Courses from "./component/Courses";
import Services from "./component/Services";
import Blog from "./component/Blog";
import PaymentForm from "./component/Payment";
import Medical from "./component/Medical";

function App(){
  return(
    <>
      <Routes>
           <Route path="/" element={<Careeer/>} > 
              <Route index element={<Home />}/>
              < Route path="about" element={<About />}/>
              < Route path="contact" element={<Contact />}/>
              < Route path="courses" element={<Courses />}/>
              < Route path="services" element={<Services />}/>
              < Route path="blog" element={<Blog />}/>
                < Route path="payment" element={<PaymentForm />}/>
                < Route path="medical" element={<Medical />}/>
           </Route>
      </Routes>
    </>
  )
}
export default App;