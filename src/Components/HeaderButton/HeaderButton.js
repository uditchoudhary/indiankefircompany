import "./HeaderButton.css";
const HeaderButton = () => {
  const toggleTheme = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };

  const getWeather = () => {
    console.log("Checking weather");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successLocation);
    } else {
      alert("Sorry !!! Geo is not supported");
    }
  };

  const successLocation = (pos) => {
    var crd = pos.coords;
    let lat = crd.latitude;
    let long = crd.longitude;

    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        var weatherReport = document.getElementById("weatherReport");
        let cityname = data.city.name;
        let temperature = `${data.list[0].temp.day} degree`;
        let output = `Weather of ${cityname} is ${temperature}`;
        weatherReport.innerText = output;
      });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-row header-top-design ">
        {/* Modal starts here  */}
        <button
          className="coupon-modal col-1"
          data-bs-toggle="modal"
          data-bs-target="#couponModal"
        >
          &#9758; Check deals
        </button>
        <div
          className="modal fade modal-toggle"
          id="couponModal"
          tabIndex="-1"
          aria-labelledby="couponModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Coupons
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Sorry! No Coupons available at the this moment. </p>
                Try again later or <a href="/contactUs">Contact Us</a> for
                discount.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Ends here  */}
        <button className="toggle-button col-1" onClick={toggleTheme}>
          Toggle Theme
        </button>
        <button className="col-1 weather-info" onClick={getWeather}>
          Check Weather
        </button>
        <span id="weatherReport" className="col weather-info"></span>
      </div>
    </div>
  );
};

export default HeaderButton;
