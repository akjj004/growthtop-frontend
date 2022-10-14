import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`container-fluid ${classes.hero}`}>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">GROWTHTOP</h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <button type="button" className="btn btn-outline-primary">
                Get Started !
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
