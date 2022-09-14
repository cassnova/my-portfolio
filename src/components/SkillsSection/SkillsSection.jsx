import React from "react";
import './SkillsSection.css';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { SiVisualstudiocode, SiWordpress } from 'react-icons/si';
import { TbBrandFirebase, TbBrandBootstrap, TbBrandCss3, TbBrandJavascript } from 'react-icons/tb';


function SkillsSection() {
    return (
        <section className="skills-container" id="skills">
            <h1>HABILIDADES TÉCNICAS</h1>
            <div className="skills-logo-container">


                <AiOutlineHtml5 className="skills-icon-container" />


                <TbBrandCss3 className="skills-icon-container" />


                <TbBrandJavascript className="skills-icon-container" />


                <FaReact className="skills-icon-container" />

                <TbBrandFirebase className="skills-icon-container" />

                <TbBrandBootstrap className="skills-icon-container" />

                <SiVisualstudiocode className="skills-icon-container" />

                <SiWordpress className="skills-icon-container" />

            </div>
        </section>
    )
}

export default SkillsSection;