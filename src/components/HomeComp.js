import React from "react";
import "../css/style.css";
import Navbar from "./Navbar";
const HomeComp = () => {
  return (
    <>
      <div className="div0">
        <div className="div1">
          <Navbar />
          <div className="home0">
          <div className="heading1">
          <h1>John BUGINGO</h1>
          <h2>Software Developer</h2>
          </div>
          <div className="table1">
            <img src="/john (1).jpg"></img>
          </div>  
          </div> 
        </div>
        <div className="div2">
          <p><label>Hello,</label> As a junior UX/UI Designer based in Kigali, I get to combine my love for technology with my passion for Front-end and Back-end.<br/> I enjoy using my creativity and problem-solving skills to create coding experiences that not only look great but also work seamlessly for the user.<br/> I beleive that continuous learning is the key to success and I'm always on the lookout for fresh challenges to keep me motivated and engaged</p>
        </div>
      </div>
    </>
  );
};
export default HomeComp;
