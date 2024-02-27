import React from "react";
import mainImg from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* INFO */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby selfies cupping hammock drinking vinegar sriracha cray
            subway tile. Woke bespoke bodega boys listicle meditation unicorn
            cornhole bruh aesthetic chartreuse vegan migas ugh green juice fanny
            pack. Authentic green juice neutra synth, wayfarers echo park
            kickstarter blackbird spyplane la croix marfa. Asymmetrical pok pok
            mumblecore, four dollar toast intelligentsia fit kinfolk.
            Dreamcatcher 8-bit grailed, hammock fam kale chips vice cornhole
            post-ironic. Retro blue bottle gatekeep keffiyeh artisan, tofu
            disrupt flexitarian deep v bitters kickstarter kitsch authentic
            raclette banh mi.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        {/* IMG */}
        <img src={mainImg} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
