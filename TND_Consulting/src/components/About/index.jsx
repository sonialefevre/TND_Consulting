import { Link } from "react-router-dom";
import "./style.scss";
import { Icon } from "semantic-ui-react";

const About = () => {
  return (
    <div className="pageContainerAbout">
      <section className="me">
        <header>
          <h1 className="me_title">About me</h1>
        </header>
        <section>
          <p>I am 36 years-old.</p>
          <p>I live in Bordeaux, France.</p>
        </section>
        <main>
          <p>
            I love to improve and challenge what is in place, I will never let a
            place without adding my enhancement touch.
          </p>
          <p>
            I am passionate about my work and especially my functional areas
            (Absence & Time tracking), I keep myself informed and trained and
            learn every day something new (even after 4 years full time on it).
          </p>
          <p>
            I have a "talent" for finding workarounds, sometimes Workday can be
            limited and not fit the client requirements, I always try to find at
            least a middle ground by reaching the system limits.
          </p>
          <p>
            I have a financial background and programming interests, I am crazy
            about Excel and love data transformation, data loading and making
            analysis, which is generally uncommon for Workday consultants.
          </p>
        </main>
      </section>
      <section className="website">
        <header>
          <h3 className="website_title">About this website</h3>
        </header>
        <main>
          <p>This website was made by Sonia Lefèvre</p>
          <p>Find more about her work here:</p>
          <div>
            <a href="https://github.com/sonialefevre" target="_blank">
              <Icon name="github" size="large" color="grey" />
            </a>
            <span>
              {" "}
              <a
                href="https://www.linkedin.com/in/sonialefevrewebdev/"
                target="_blank"
              >
                <Icon name="linkedin" size="large" color="grey" />
              </a>
            </span>
          </div>
        </main>
      </section>
    </div>
  );
};

export default About;
