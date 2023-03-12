import React, { Component } from 'react';
import "./Home.css"

class Home extends Component {
    render(){
        return (
            <main>
                <section className="container home">
                    <section className="resizable">
                        <section>
                        {/* <img src="images/about/NCPL.jpeg" alt="JUSTINE KIPKOECH LIMO"/> */}

                            <h3> Justine Kipkoech limo</h3>
                        </section>
                        <section>
                            <p> I am a Full Stack Developer.</p>
                            <p> I am an API Tester. </p>
                            <p> I am a Fashion Stylist. </p>


                        </section>
                        <section className="social-media-icons">
                            <a aria-label="WhatsApp" style={{"--color": "#0c0"}} rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=+254 790864214&text=Hi"><i className="fa fa-whatsapp"></i></a>
                            <a aria-label="LinkedIn" style={{"--color": "#0bb"}} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/justine-limo/"><i className="fa fa-linkedin"></i></a>
                            <a aria-label="GitHub" style={{"--color": "#b0b"}} rel="noreferrer" target="_blank" href="https://github.com/Justinekipkoech"><i className="fa fa-github"></i></a>
                        </section>
                        <section className="home-btns">
                            <a rel="noreferrer" target="_self" href="https://docs.google.com/document/d/1OLQkE_HX4R07mzJTum-bTvYlfl7chg8IabSwnDPP9tE/" download>Get My Resume</a>
                        </section>
                    </section>
                </section>
            </main>
        )
    }
}
export default Home