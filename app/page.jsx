//COMPONENT
import Abuot from "./component/AboutMe";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Project from "./component/Project";
import DarkModeButton from "@/app/component/darkMode/DarkMode";



export default function root() {
  return (
    <div>
      <Home />
      <Abuot />
      <Project />
      <DarkModeButton className={"fixed right-4 bottom-16 p-2 rounded-full bg-gray-500"} />  
      <Contact />
    </div>
  );
}