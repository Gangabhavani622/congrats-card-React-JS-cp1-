const element = (
  // Write your code here.
  <div className="background-container">
    <div>
      <h1 className="heading">Congratulations</h1>
      <div className="sub-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
            className="image"
          />
          <h1 className="name">Kiran V</h1>
          <p className="para">
            Vishnu Institute of Computer Education and Technology, Bhimavaram
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
            className="image2"
          />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
