import React from "react";
import "../../App.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-title-container">
        <h1 className="about-header">WELCOME TO HOMER</h1>
        <h3 className="about-subheader">A Safe Place for Diehards</h3>
        <img
          className="about-main image"
          alt="big-logo"
          src="https://Zi.imgur.com/MaLqLee.png"
        />
      </div>
      <div className="about-text-container">
        <h4 className="paragraph-header">What is Homer?</h4>
        <p className="about-text-questions">
          Do you spend an inordinate amount of your day imagining the Bears with
          a competent quarterback?
        </p>
        <p className="about-text-questions">
          Do you avoid conversations about MJ vs Lebron, because you know you'll
          get too heated and 'cause a scene', potentially 'ending a friendship'?
        </p>
        <p className="about-text-questions">
          Do you find that watching any major Chicago sporting event to be a
          physically and emotionally exhausting endeavor?
        </p>
        <p className="about-text-questions">
          Does literally everything about Aaron Rodgers and his smug ass face
          irrationally irritate you, as an otherwise fair and tolerant person?
        </p>
        <p className="about-text">
          If you answered yes to any of these questions, then Homer is the
          sports blog for you. Here we embrace our inner meatball and let our
          diehard flags fly. This is a place for the 'Jim's in Rockford' and
          'Mark's in Joliet' who call-in to local sports radio with jowly,
          meandering, takes on the 85 defense. This is a place for those who
          went on a week long bender after the 16 world series, get emotional
          thinking about D-Rose getting hurt, and have shivers run down their
          spine everytime they hear a football hit an upright.
        </p>
        <p className="about-text">
          Here, we're smart enough to know that our particular brand of fandom
          is too intense for many, and may even prevent us from 'logical
          thinking' or or the formation of 'healthy relationships', yet we lean
          into it anyway. So if you're a Cubs, Bears or Bulls superfan then rest
          easy, because this is your safe space.
        </p>
        <p className="about-text-last">Welcome to Homer!</p>
      </div>
    </div>
  );
}
