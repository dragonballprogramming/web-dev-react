import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import EmailForm from "./EmailForm";

function Landing(){
  return (
    <div>
        <Header />
        <section class="masthead">
          <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
              <div class="d-flex justify-content-center">
                <div class="text-center">
                  <h1 class="mx-auto my-0 text-uppercase logo-heading"><img class="main-logo" src="img/brandmark-design.png" alt="" /></h1>
                  <h2 class="h2 mx-auto mt-2 mb-5">Your Local Web Design and SEO Professional</h2>
                  <a class="btn-1 btn btn-primary contact-btn" href="#signup">Contact Me</a>
                </div>
              </div>
            </div>
          </header>
        </section>
    {/* About section  */}
      <section class="about-section" id="about">

        <div class="columns-about">
          <div class="rounded float-left">
            <h2 class="text-white mb-4 card-title mission-statement">Our Mission</h2>
            <p class="text-white-50 about-text">
              Colorado Designs is a web development, search engine and digital marketing company based out of Colorado. 
              Our team of professionals is dedicated to helping companies reach their dreams by creating beautiful websites that rank on Google. 
              We believe in the power of technology and its potential to help businesses succeed. With our expertise, we can help you build an online presence that will make you stand out from the crowd and reach your goals. 
              Join us as we work together to make your dreams a reality!
            </p>
          </div>
        </div>
      </section>
    {/* <!-- Projects--> */}
      <section class="projects-section" id="projects">
        <section class="card-body left-column" id="left-column">
          <div class="card full-card" style={{ backgroundImage: "url('img/man-searching-for-job.png');" }}>
            <div class="card-content">
              <h2 class="card-title">SEO</h2>
              <p class="body-card">
                Search Engine Optimization 101: Why It Is Important and How You Can Get Ranked High on Search Engines
              </p>
              <a href="/seo" class="button-card">Learn More</a>
            </div>
          </div>
        </section>
        <section class="card-body right-column" id="right-column">
          <div class="card full-card" style={{ backgroundImage: "url('img/lightning-mountain.png');" }}>
            <div class="card-content">
              <h2 class="card-title">Lightning Fast</h2>
              <p class="body-card">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries,
              </p>
              <a href="/faster" class="button-card">Learn More</a>
            </div>
          </div>
        </section>
        <section class="card-body center-column" id="center-column">
          <div class="card full-card">
            <div class="card-content">
              <h2 class="card-title">Mobile Friendly</h2>
              <p class="body-card">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries,
              </p>
              <a href="/mobilefriend" class="button-card">Learn More</a>
            </div>
          </div>
        </section>

        </section>
        {/* <!-- Signup--> */}
        <section class="signup-section" id="signup">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5">
              <div class="col-md-10 col-lg-8 mx-auto text-center">
                <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                <h2 class="text-white mb-5">Contact Me</h2>
                <EmailForm />
              </div>
            </div>
          </div>
        </section>
      {/* <!-- Contact--> */}
      <section class="contact-section bg-black">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Address</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">P.O. Box 482, Pierce CO 80650</div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50"><a class="text-blue" href="#!">customerconnect@colorad-designs.com</a></div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Phone</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">+1 (720) 808-4903 </div>
                </div>
              </div>
            </div>
          </div>
          <div class="social d-flex justify-content-center">
            <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
            <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
            <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </section>
        <Footer />
    </div>

  );
};

export default Landing;
