const Experience = (props) => {
  return (
    <section className="experience">
      <h2>EXPERIENCE</h2>
      <div className="experience-ibm">
        <h3>IBM</h3>
        <h3 className="blue">Advisory System Analyst</h3>
        <div className="company-details">
          <span>02/2018</span>
          <span>Ongoing</span>
          <span>Pune, India</span>
        </div>
        <div className="project-details">
          <span>IBM Services is the professional services arm of IBM.</span>
          <ul>
            <li>
              Developed a code upgrade tool to upgrade apps from older version
              to the latest version of an internal framework.
            </li>
            <li>
              Built and delivered access and permissions search tool which help
              CISOs to track permissions of employees and their access to
              various applications.
            </li>
            <li>
              Part of the team which migrated a trade reporting legacy
              application to angular and java spring based application.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-servient">
        <h3>Servient</h3>
        <h3 className="blue">Web Developer</h3>
        <div className="company-details">
          <span>05/2014</span>
          <span>02/2018</span>
          <span>Pune,India</span>
        </div>
        <div className="project-details">
          <span>
            A product company operating in legal domain serving an e-discovery
            solution for legal teams of fortune 500 companies and legal firms.
          </span>
          <ul>
            <li>
              Led building of a DIY dashboard which was one of the central
              functionalities of the product from a PoC phase to releasing it in
              the production.
            </li>
            <li>
              Refactored an existing jQuery based query builder tool to include
              a crucial feature using leanings from Redux.
            </li>
            <li>
              Made application more secure by fixing XSS, CSRF and other
              vulnerabilities. This helped the company secure a big client.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-synechron">
        <h3>Synechron</h3>
        <h3 className="blue">Associate Software Developer</h3>
        <div className="company-details">
          <span>04/2012</span>
          <span>05/2014</span>
          <span>Pune,India</span>
        </div>
        <div className="project-details">
          <span>Synechron Inc. is a New York based consulting company.</span>
          <ul>
            <li>
              Built an web app for diabetes patients to calculate cost of
              control of diabetes.
            </li>
            <li>
              Built an PhoneGap based iPad app to showcase patient journey
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
