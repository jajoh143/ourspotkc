import React from "react";

function About() {
  var titleStyle = {
    marginTop: "25px",
    fontSize: "4rem"
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-10 col-lg-8 ml-auto mr-auto">
          <h2 style={titleStyle}>About Us</h2>
          <hr />
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3">
            <img
                className="img-fluid"
                src="https://ourspotkc.azurewebsites.net/wp-content/uploads/2019/04/IMG_0677-e1555267007730.jpg"
                alt="Starzette Profile"
                width="300"
                height="150"
              />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-9">
              <h3>Personal Testimony</h3>
              <p>
                <b>Everyone needs someone to say, "it's going to be ok!"</b>
              </p>
              <p>
                From infrastructure and access to art and entrepreneurship,
                Kansas City is booming! We have come so far as a city, but yet
                some folks are still being left behind. When I travel to other
                cities and see how far their local LGBTQ+ communities have come,
                the relationships that have been built, and the organizations
                that exist I am truly inspired! But then I come back to KC, and
                while we are progressing as an entire city; there are still huge
                voids in programming, events, and services, creating overall
                division within the LGBTQ+ community. Our Spot KC was formed in
                2016 to address these gaps in services and offer intentional
                programming to those underserved within the LGBTQ+ community.
              </p>
              <p>
                We are not your typical organization, we aren’t going out into
                the community and saying, ‘this is what we are going to do for
                you’ we are actively listening and creating according to what
                they determine is needed making our mission truly community
                driven.
              </p>
              <p>
                We are involving and evolving with the community’s needs. If I
                had to put it in a few words, we identify problems and rectify
                them. We were formed with the intent to first assess the needs
                of the community, identify individuals and organizations key to
                implementation of the process needed and in turn creating
                sustainable solutions.
              </p>
              <p>
                The goal is to mobilize, connect and provide ongoing community
                building opportunities.  This approach sets a necessary
                foundation and emphasizes overall community empowerment.
              </p>
            </div>
          </div>
          <h3>Leadership</h3>
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-8">
              Starzette Palmer is the Executive Director for Our Spot KC. She
              has over 10 years in planning, organizing and executing community
              panel discussions, fundraisers, programs, and events engaging the
              LGBTQ+ community. She is trained in crisis intervention, community
              mobilization and response, policy creation, data collection,
              trauma informed care, addiction and recovery, harm reduction,
              crime prevention through environmental design, event logistics,
              advocacy, pre and post event procedures, and vendor/entertainment
              staffing. Overcoming addiction, homelessness and domestic violence
              was the motivation behind the inception of Our Spot KC and
              continues to fuel the purpose, vision and mission of the
              organization.
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <img
                className="img-fluid"
                src="https://ourspotkc.azurewebsites.net/wp-content/uploads/2019/04/Palmer-Family-Originals-66-e1555268047401.jpg"
                alt="Palmer Family"
                width="300"
                height="150"
              />
            </div>
          </div>
          <h4>Accomplishments</h4>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <img
                className="img-fluid"
                src="https://ourspotkc.azurewebsites.net/wp-content/uploads/2019/04/FB_IMG_1530501236636.jpg"
                alt="Starzette Profile"
                width="300"
                height="150"
              />
            </div>
            <div className="col-sm-12 col-md-8">
              <ul>
                <li>Currently serves on the KC Pridefest Board of Directors</li>
                <li>
                  Implemented and managed the first and only LGBTQ+ youth city
                  wide youth summer programming in partnership with the Mayor’s
                  Office, City of Kansas City, and KC Parks and Rec.
                </li>
                <li>
                  Co-Founder of Outskirts festival, a 2-day Health &amp;
                  Wellness festival centering LBTQ+ women, featuring music,
                  vendors, health screenings, activities, speakers, drum
                  circles, food trucks, kid/teen zones, and more.
                </li>
                <li>
                  Co-founded OurThentic LLC, an entertainment company that
                  planned educational workshops, social events, fundraisers,
                  memorial events, and parades to engage the community in
                  affirming, supportive and safe spaces in the LGBTQ+ community.
                </li>
                <li>
                  Previous Ambassador for the Mid-America Gay and Lesbian
                  Chamber of Commerce.
                </li>
                <li>
                  Previous President of Alpha Nu Chapter of Alpha Psi Kappa
                  Fraternity, Inc. a Non-Profit, Non-Collegiate, Social Service
                  Organization for Dominant Lesbian Women.
                </li>
                <li>
                  Previous Outreach Manager for KCAVP/Passages, she was an
                  advocate for LGBTQ+ survivors of violence, support group
                  facilitator for youth and adults.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
