import React from 'react';
import './Home.css';


import FlutterLogo from '../../assests/image/flutter.jpg';
import AngularLogo from '../../assests/image/angular.jpg';
import JavaLogo from '../../assests/image/java.jpg';
import PythonLogo from '../../assests/image/python.jpg';
import PhpLogo from '../../assests/image/php.png';
import VueLogo from '../../assests/image/vue.png';
import AndroidLogo from '../../assests/image/android.png';

import DjangoLogo from '../../assests/image/dj.png';
import BootstrapLogo from '../../assests/image/Bootstrap.png';
import ReactLogo from '../../assests/image/react.jpg';

const skills = [
  FlutterLogo, AngularLogo,  JavaLogo,
  PythonLogo, PhpLogo, VueLogo, AndroidLogo,
  DjangoLogo, BootstrapLogo, ReactLogo
];

function Home() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">Technologies</h1>
        <h2 className="subtitle">Deep Expertise and Skills</h2>
        <div className="skills-container">
          {skills.map((src, index) => (
            <div className="skill" key={index}>
              <img src={src} alt={`Skill ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
