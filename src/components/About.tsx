import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="intro">
      <div className="container">
        <div className="intro__top">
          <p className="eyebrow reveal">Who I am</p>
          <h2 className="intro__statement reveal" style={{ ["--d" as string]: "0.1s" }}>
            Apps built to <span className="serif">ship</span> and scale.
          </h2>
          <div className="intro__grid">
            <div className="intro__big reveal" style={{ ["--d" as string]: "0.15s" }}>
              <b>{profile.years}+</b>
              <span>years building mobile and web apps</span>
            </div>
            <p className="intro__text reveal" style={{ ["--d" as string]: "0.25s" }}>{profile.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
