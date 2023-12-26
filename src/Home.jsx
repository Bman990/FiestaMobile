
// import Contact from "./Contact";
// import Hero from "./Hero";
// import Menu from "./Menu";
// import Story from "./Story";



// export default function Home(){
//     return(
//         <div>
//             <Hero />
//             <Story />
//             <Menu />
//             <Contact />
//         </div>
//     )
// }








import React from 'react';
import Hero from './Hero';
import Story from './Story';
import Menu from './Menu';
import Contact from './Contact';
import Navbar from './Navbar';

export default function Home() {


  return (
    <div>
      <Hero />
      <Story />
      <Menu />
      <Contact />
    </div>
  );
}