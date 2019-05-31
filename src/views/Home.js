import React from "react";

class Home extends React.Component {
  render() {
    var cardStyle = {
      width: "18rem"
    };

    return (
      <div className="page">
        <div id="homepage-header">
          <div>
            <img
              src="https://ourspotkc.azurewebsites.net/wp-content/uploads/2019/04/animation-w-alpha-channel.gif"
              alt="Homepage Logo"
              height="300"
              width="300"
            />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row banner banner-full-width">
            <div className="col-m-3 col-sm-12">
              <h2>Our Impact</h2>
            </div>
            <div className="col-m-9 col-sm-12">
              While our focus is for LGBTQ+ individuals; which slightly makes us
              different overall, we also provide the community with intentional
              efforts to empower diverse intersecting identities within the
              LGBTQ+ community thru skill building, support and resources from
              all aspects of life, health and education. We pride ourselves in
              allowing the communities that we serve to determine the work that
              we are doing; not funding, in turn differentiating OSKC from
              mainstream organizations here in the KC metro area.
            </div>
          </div>
          <div className="row card-row">
            <div className="col">
              <div className="card" style={cardStyle}>
                <h2 className="card-img-top text-center">10+</h2>
                <div className="card-body">
                  <h5 className="card-title">Thousand Dollars Raised.</h5>
                  <p className="card-text">
                    All money raised benefits the community through educational
                    events and resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={cardStyle}>
                <h2 className="card-img-top text-center">12+</h2>
                <div className="card-body">
                  <h5 className="card-title">
                    Years Spent Serving Communities
                  </h5>
                  <p className="card-text">
                    Our board is made of individuals who have spent years
                    serving the Kansas City community.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={cardStyle}>
                <h2 className="card-img-top text-center">15+</h2>
                <div className="card-body">
                  <h5 className="card-title">Thousand People Impact</h5>
                  <p className="card-text">
                    Community reach is important to us.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row banner banner-full-width">
            <div className="col-m-3 col-sm-12">
              <h2>Our Values</h2>
            </div>
            <div className="col-m-9 col-sm-12">
              <ul>
                <li>
                  We have equality and respect for all identities regardless of
                  sexual orientation, socio-economic status, or gender.
                </li>
                <li>We promote empowerment and skill enhancements.</li>
                <li>
                  We support by uplifting individuals to their maximum
                  potential.
                </li>
                <li>
                  We are understanding of culturally competency within the
                  LGBTQ+ community.
                </li>
                <li>We approach our work from a C.A.R.E. perspective.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
