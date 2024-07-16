import React from 'react';
import './about.css';
import CV from '../../assets/CV Amine Bouguettaya.pdf';
import AboutImage from '../../assets/about.jpg';
import { FcDownload } from 'react-icons/fc';
//import data from './data';


const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>

        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {/*data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))*/}
          </div>
          <p>
    En tant que développeur logiciel junior, je suis ravi de commencer mon parcours dans le développement informatique. Même si je suis nouveau dans ce domaine, j'ai une bonne compréhension des bases et je suis impatient d'en apprendre davantage.
</p>
<p>
    Je suis vraiment intéressé par la technologie et je suis déterminé à continuer à apprendre et à grandir. De plus, j'envisage d'explorer des opportunités dans l'analyse de données également.
</p>


          <a href={CV} download className="btn primary">
          Télécharger le CV <FcDownload />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default About;
