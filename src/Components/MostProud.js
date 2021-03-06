const MostProud = (props) => {
  return (
    <div className="most-proud">
      <div className="code-tool">
        <h2 className="main">MOST PROUD OF</h2>
        <h3>
          <i class="fa fa-lightbulb-o" aria-hidden="true"></i>&nbsp;Code upgrade
          tool
        </h3>
        <p>
          Built a babel and Himalaya based transpiler tool which upgrades code
          written in older version of an internal framework to its newer
          version. This tool replaced the practice of rebuilding the application
          with the latest version of the framework.
        </p>
      </div>
      <div className="servient-app">
        <h3>
          <i class="fa fa-line-chart" aria-hidden="true"></i>&nbsp;Improved
          Servient front-end app and team practices
        </h3>
        <p>
          Successfully pitched and led incremental migration of the UI app at
          Servient which was not performant and had become difficult to add
          features to. Helped team members to get familiar with the new way of
          building UIs with react and tools like webpack, babel, NPM.
        </p>
      </div>
      <div className="ibm-hackathon">
        <h3>
          <i class="fa fa-users" aria-hidden="true"></i>&nbsp; Won IBM - Call
          for Code Hackathon
        </h3>
        <p>
          Built an offline payments wallet application with subtle use of QR
          codes. Played a crucial part in refining the user workflow and the
          core idea. The submission won India level prize.
        </p>
      </div>
    </div>
  );
};
export default MostProud;
