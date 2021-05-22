import "font-awesome/css/font-awesome.min.css";

const Experience = () => {
  return (
    <div className="experience">
      <h2 className="main">EXPERIENCE</h2>
      <div className="experience-ibm exp">
        <h3>IBM</h3>
        <h4 className="blue">Advisory System Analyst</h4>
        <div className="company-details">
          <span>
            <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp; 02/2018 -
          </span>
          <span>Ongoing</span>
          <span>
            {" "}
            <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Pune, India
          </span>
        </div>
        <div className="project-details">
          <p>IBM Services is the professional services arm of IBM.</p>
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
      <div className="experience-servient exp">
        <h3>Servient</h3>
        <h4 className="blue">Web Developer</h4>
        <div className="company-details">
          <span>
            <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp; 05/2014 -
          </span>
          <span>02/2018</span>
          <span>
            {" "}
            <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Pune,India
          </span>
        </div>
        <div className="project-details">
          <p>
            A product company operating in legal domain serving an e-discovery
            solution for legal teams of fortune 500 companies and legal firms.
          </p>
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
      <div className="experience-synechron exp">
        <h3>Synechron</h3>
        <h4 className="blue">Associate Software Developer</h4>
        <div className="company-details">
          <span>
            <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp; 04/2012 -
          </span>
          <span>05/2014</span>
          <span>
            {" "}
            <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Pune,India
          </span>
        </div>
        <div className="project-details">
          <p>Synechron Inc. is a New York based consulting company.</p>
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
    </div>
  );
};

export default Experience;
