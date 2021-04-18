import image0 from "../media/image0.jpeg";
//import "font-awesome/css/font-awesome.min.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="personal-info">
        <h1>SIDDHARAJ SURYAVANSHI</h1>
        <h2 className="role blue">Software Developer</h2>
        <div className="contact">
          <span className="aa">
            <i className="fa fa-phone"></i> &nbsp; +91-7738958923
          </span>
          <span className="aa">
            <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;
            sid.sunvanshi@gmail.com
          </span>
          <div className="loc">
            <span className="aa">
              <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
              Pune,India
            </span>
          </div>
        </div>
      </div>
      <div className="photo">
        <img src={image0} alt="" height="200" width="200"></img>
      </div>
    </div>
  );
};

export default Header;
