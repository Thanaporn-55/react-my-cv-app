import NavBar from "./../components/NavBar";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import css from "./../assets/css.png";
import html from "./../assets/html.png";
import java from "./../assets/java.png";
import react from "./../assets/react.png";
import figma from "./../assets/figma.png";
import node from "./../assets/node.png";
import spring from "./../assets/spring.png";
import Firebase from "./../assets/Firebase.png";

export default function Homee() {
  return (
    <>
      {/* ส่วนของ Navbar */}
      <NavBar pname='h' colorLinkNavbar="#FFE207" />
      {/* ส่วนของ Hero Section */}
      <div className="flex items-center justify-between pt-30 pl-80 pr-80 ">
        {/* รายละเอียดด้านซ้าย */}
        <div className="flex flex-col gap-2">
          <span className="text-white text-6xl font-bold">Full Stack Web</span>
          <span className="text-white text-6xl font-bold"> Developer !</span>
          <span className="text-white text-2xl ">Hi, I'm Thanaporn SAU. A passionate Full Stack</span>
          <span className="text-white text-2xl ">Web Developer based in Thailand.</span>
          <div className="flex gap-3 pt-3">
            <FaLinkedinIn className="text-white text-4xl" />
            <FaGithub className="text-white text-4xl" />
          </div>
        </div>

        {/* รูป */}
        <div>
          <img src="https://i.pinimg.com/736x/f6/38/92/f638922fa02cc085946bad623d9ee3df.jpg" alt=""
            className="w-[450px] h-[450px] object-cover rounded-full" />
        </div>
      </div>
      {/* ส่วนของข้อความ Tech Stack */}
      <div className="flex justify-center pt-20 ">
        <p className="text-white text-2xl font-bold">
          My Tech Stack
        </p>
      </div>

      {/* ส่วนของรูปภาพ Tech Stack */}
      <div className="flex items-center justify-center gap-10 pt-10">
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={java} alt="java" />
        <img src={figma} alt="figma" />
        <img src={react} alt="react" />
        <img src={node} alt="node" />
        <img src={spring} alt="spring" />
        <img src={Firebase} alt="Firebase" />
      </div>

    </>
  )
}  