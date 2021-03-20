import React from "react";
import { FaHeart, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
    <span className="footl"><a className="Footer-link"  href="https://github.com/mimnetto/colleen-blake-client" target="_blank" rel="noreferrer"> <FaGithub size={30}/></a> </span>
    <p className="foot">Made with <FaHeart/> and React</p>
  </div>
);

export default Footer;
