import NavbarUser from "../partials/NavbarUser";
import BoredApe from "../assets/img/about-us.avif";
import CEO from "../assets/img/tom.webp";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const navigate = useNavigate();

  const toNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <NavbarUser></NavbarUser>
      <div className="container mt-5 p-5">
        <div className="text-center">
          <h1 className="fw-bold" id="au1">
            Dumb Merch
          </h1>
          <p id="au2">
            Easy, Fast, and ReliableGo shopping for merchandise, just go to dumb merch
            shopping. the biggest merchandise in Indonesia
          </p>

          <div className="icon">
            <img
              className="img-fluid rounded mx-auto"
              alt="bored-ape"
              src={BoredApe}
            />
          </div>

          <div className="mt-5">
            <p id="au3">
              "The local marketplace for unique and creative goods. Its home to a universe of special, 
              extraordinary items, from unique handcrafted pieces to vintage treasures.In a time of 
              increasing automation, its our mission to keep human connection at the heart of commerce. 
              Thats why we built a place where creativity lives and thrives because its powered by people. 
              We help our community of sellers turn their ideas into successful businesses. Our platform 
              connects them with millions of buyers looking for an alternative - something special with 
              a human touch, for those moments in life that deserve imagination."
            </p>
          </div>

          <div className="row mt-5">
            <div id="au4" className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top rounded"
                src={CEO}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Bored Ape</h5>
                <p>Dumb Merch Founder</p>
              </div>
            </div>
          </div>

          <div className="d-inline">
            <button className="btn btn-primary mx-4" style={{ width: "8rem" }}>
              Contact Us
            </button>
            <button className="btn btn-success" onClick={toNavigate}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
