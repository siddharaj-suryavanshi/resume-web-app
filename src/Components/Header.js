import image0 from "../media/image0.jpeg";
import "font-awesome/css/font-awesome.min.css";

const Header = (props) => {
  return (
    <header className="App">
      <div className="header">
        <h1>Siddharaj Suryavanshi</h1>
        <h2 className="role">Software Developer</h2>
        <div className="grid-container">
          <div class="grid-item">
            <i className="fa fa-phone"></i>
            +91-7738958923
          </div>
          <div class="grid-item">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            sid.sunvanshi@gmail.com
          </div>
          <div class="grid-item"></div>
          <div class="grid-item">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Pune,India
          </div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
        </div>
      </div>
      <div>
        <img src={image0} alt="" height="200" width="200"></img>
      </div>
    </header>
  );
};

export default Header;
