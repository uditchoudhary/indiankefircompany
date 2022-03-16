import "./LandingGreet.css";

const LandingGreet = () => {
  return (
    <>
      <div className="greet-wrapper d-flex justify-content-around flex-wrap p-3">
        <div className="greet-sec-1 d-flex flex-row">
          <div className="greet-sec-11 col align-items-center">
            <strong className="greet-sec-1-title">FOLLOW YOUR GUT!</strong>
            <p>
              <em>
                We believe great health starts with a happy gut. Our kombucha is
                loaded with antioxidents and beneficial bacteria that
                super-boost your digestion, heling improve immunity, lower
                cholesterol, and increase your overall energy levels.
              </em>
            </p>
          </div>
          <div className="greet-sec-12 col align-items-center">
            <strong className="greet-sec-1-title">IT'S ONLY NATURAL</strong>

            <p>
              <em>
                Everything that makes Yuuva Kombucha comes straight from nature
                starting from the high-grade black tea to the organic herbs and
                fruits blended in post-fermentation. No sugar or artificial
                ingredients are added past this step, making Yuuva Kombucha a
                truly raw kombucha with the most naturally occurring probiotics
                possible.
              </em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingGreet;
