import image0 from "../media/image0.jpeg";

const Header = (props) => {
  return (
    <header className="App">
      <div>
        <h1>YUVRAJ JADHAV</h1>
        <h2 className="role">Software Developer</h2>
        <div>
          <span className="contact">+91-9890175152</span>
          <span className="email">yugoja20@gmail.com</span>
          <span className="address">Pune,India</span>
        </div>
      </div>
      <div>
        <img src={image0} alt="" height="200" width="200"></img>
      </div>
    </header>
  );
};

export default Header;
