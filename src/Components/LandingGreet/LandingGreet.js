import "./LandingGreet.css";

const LandingGreet = () => {
  return (
    <>
      <div className="greet-wrapper d-flex justify-content-around flex-wrap p-3">
        Hello Welcome to out website
      </div>
      {/* <hr className="greet-wrapper m-auto" style={{"width":"80vh","height":"2px"}}/> */}
    </>
  );
};

export default LandingGreet;
