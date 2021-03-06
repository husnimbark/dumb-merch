import NavbarHome from "../partials/NavbarUser";
import ape from "../assets/img/Profil.png";
import Mouse from "../assets/img/Mouse.png";
import LogoDumbMerch from "../assets/img/DumbMerch_Logo.png";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Profile = () => {
  // FOR NAVIGATE
  const forNavigate = useNavigate();

  const Navigate = () => {
    forNavigate("/edit-profile/0");
  };

  // FOR GET ID
  const params = useParams();

  console.log("Id :" + params.id);
  return (
    <>
      <NavbarHome />

      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="my-4" style={{ color: "#F74D4D" }}>
              My Profile
            </h4>
            <img src={ape} alt="profile-pict" />
          </div>

          <div className="col d-block" id="profile-left">
            <div className="mb-4">
              <p style={{ color: "#F74D4D", fontSize: "18px" }}>Name</p>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Segoe UI",
                  lineHeight: "6px",
                }}
              >
                Husni Mubarak
              </p>
            </div>

            <div className="mb-4">
              <p style={{ color: "#F74D4D", fontSize: "18px" }}>Email</p>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Segoe UI",
                  lineHeight: "6px",
                }}
              >
                husni@gmail.com
              </p>
            </div>

            <div className="mb-4">
              <p style={{ color: "#F74D4D", fontSize: "18px" }}>Phone</p>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Segoe UI",
                  lineHeight: "6px",
                }}
              >
                081111122222
              </p>
            </div>

            <div className="mb-4">
              <p style={{ color: "#F74D4D", fontSize: "18px" }}>Gender</p>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Segoe UI",
                  lineHeight: "6px",
                }}
              >
                Male
              </p>
            </div>

            <div className="mb-4">
              <p style={{ color: "#F74D4D", fontSize: "18px" }}>Address</p>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Segoe UI",
                  lineHeight: "26px",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
            </div>

            <div className="mt-2">
              <Button variant="danger" onClick={Navigate}>
                Edit Profile
              </Button>
            </div>
          </div>

          <div className="col">
            <p id="mytrans">My Transaction</p>

            <div className="card" id="cardProfil">
              <div className="card-body">
                <div className="col">
                  <p id="mouse-text">Mouse</p>
                </div>

                <div className="col">
                  <p className="fw-bold" id="sat">
                    Saturday ,
                    <small style={{ marginTop: "2.5px", fontSize: "9px" }}>
                      14 Juli 2021
                    </small>
                    <p id="price">Price : Rp.1.500.000</p>
                  </p>
                  <p id="subtotal">Sub Total : Rp.1.500.000</p>
                </div>
              </div>
            </div>

            <div className="img">
              <img
                src={Mouse}
                alt="Mouse-img"
                style={{
                  position: "absolute",
                  width: "80px",
                  height: "120px",
                  left: "776px",
                  top: "172px",
                }}
              />
              <img
                src={LogoDumbMerch}
                alt="DumbMerch"
                style={{
                  height: "69px",
                  width: "70px",
                  left: "73rem",
                  top: "29.2%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
