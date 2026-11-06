import {About} from "./component/About";
import {Contact} from "./component/Contact";
import {Home} from "./component/Home";
import {Test} from "./component/Test";

import { Routes, Route } from "react-router";

export default function App(){
  return(
    <>
      <Routes>
        {/* Learn / means home page  */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  )
}