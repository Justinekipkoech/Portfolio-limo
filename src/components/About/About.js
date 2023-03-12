import React, { Component } from 'react';
import "./About.css"

class About extends Component {
    state = {
        skills: [
            {
                name: "HTML5",
                img: "html.png"
            },
            {
                name: "CSS3",
                img: "css.png"
            },
            {
                name: "JavaScript(ES6)",
                img: "javaes6.png"
            },
            {
                name: "Node.js & Express.js",
                img: "node-ex.png"
            },
            {
                name: "Bootstrap",
                img: "bootstrap.png"
            },
            {
                name: "React",
                img: "react.png"
            },
            {
                name: "Ruby on Rails",
                img: "rurails.png"
            },
            {
                name: "Git & GitHub",
                img: "git.png"
            },
            {
                name: "Sql & mysql",
                img: "sql.png"
            },
            {
                name: "NoSql",
                img: "mongo.png"
            }
        ]
    }
    render(){
        return (
            <main className="about">
                <section className="right-left">
                    <section className="left-section">
                        <img src="images/about/DSC_5211.jpg" alt="JUSTINE KIPKOECH LIMO"/>
                        <div>
                            <p><b>Name:</b> Justine Kipkoech Limo</p>
                            <p><b>Phone Number:</b> +254 790 864 214</p>
                            <p><b>Gmail:</b> justinelimoco98@gmail.com</p>
                            <p><b>Address:</b> Nairobi, Kenya</p>
                        </div>
                    </section>
                    <section className="right-section">
                        <h2>Who am I <i className="fa fa-question"></i></h2>
                        <p>Hello there, I am a Full Stack Developer (Frontend  &  Backend)  ,recent graduate  for Software Engineering  at Moringa School,Nairobi.</p>
                        <p>I am a motivated, and passionate software developer with exemplary communication skills. Committed to viable and easily functional app solutions for clients using the best technologies and a good chunk of creativity.
                         Innovative thinker with sound judgment and a resourceful approach to problem-solving. Good with bringing the team together to work on a certain goal within a given timeline.
                        So I'm always seeking to have an opportunity that matches my skills, 
                        to make the best use of all what I have.</p>
                        
                        <p>-Build high-quality applications using Ruby on rails, PostgreSQL, and JavaScript.</p>
                        <p>-Proficient in both HTML5 and CSS3 for the creation of front-end website applications.</p>
                        <p>-Recognize and fix bugs in codes.</p>
                        <p>-Work in different APIs and their integration into projects.</p>
                        <p>-Excellent collaborator among teams.</p>
                        <p>-Strong communication skills.</p>
                        <p>-Work harmoniously with teams under minimal supervision.</p>
                        <p>-Problem-solver who enjoys solving challenging issues through extensive research and analysis.</p>
                        <p>-Adaptable, and easily blend in with people from different walks of life.</p>
                        <p>-An Economist who does research and monitors economic trends.</p>
                        
                    </section>
                </section>
                <section>
                    <h2 className="text-center">My Skills</h2>
                    <section className="skills-container">
                        {this.state.skills.map((skill, index) => 
                            <div className="skill" key={index}>
                                <div>
                                    <img src={`./images/skills/${skill.img}`} alt={skill.name}/>
                                </div>
                                <h4>{skill.name}</h4>
                            </div>
                        )}
                    </section>
                </section>
            </main>
        )
    }
}

export default About;