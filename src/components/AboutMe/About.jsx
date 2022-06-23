import React from "react";
import { useEffect, useState } from "react";
import './About.css'


function About() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <section className="sec-container">
            <h2 style={{ transform: `translateY(${offsetY * 0.3}px)` }}>About Me</h2>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore veritatis totam temporibus iure? Dignissimos.</p>
            </div>

        </section>
    )
}

export default About;