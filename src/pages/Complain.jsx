import NavbarAdmin from "../partials/NavbarAdmin";
import profil from "../assets/img/Profil.png";
import { useState } from "react";
import "../assets/css/color.css";

export default function Complain() {
  const [data, setData] = useState({
    message: {
      input: "",
    },
    from: "Admin",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector("#pleaseInput").value;

    setData({
      message: input,
      from: "Admin",
    });
  };
  console.log(data);

  return (
    <>
      <NavbarAdmin></NavbarAdmin>

      <div className="container-sm d-flex py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card rounded-fix bg-dumbgrey" id="chat3">
              <div className="card-body m-4">
                <div className="row">
                  <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                    <div className="">
                      <div className="input-group rounded mb-3">
                        <input
                          type="search"
                          className="form-control rounded"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="search-addon bg-black border-0 text-white"
                        />
                        <span
                          className="input-group-text bg-dumbred border-0"
                          id="search-addon"
                        >
                          <i className="fa fa-search text-white"></i>
                        </span>
                      </div>

                      <div className="section">
                        <ul className="list-unstyled">
                          <li className="p-2">
                            <a
                              href="#!"
                              className="d-flex justify-content-between text-decoration-none"
                            >
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                    alt="avatar"
                                    className="d-flex align-self-center me-3"
                                    width={60}
                                  />
                                  <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1 bg-dumbgrey">
                                  <p className="fw-bold mb-0">
                                    Admin 1
                                  </p>
                                  <p className="small text-muted bg-dumbgrey">
                                    Hello, Are you there?
                                  </p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">
                                  Just now
                                </p>
                                <span className="badge bg-danger rounded-pill float-end">
                                  3
                                </span>
                              </div>
                            </a>
                          </li>

                          <li className="p-2">
                            <a
                              href="#!"
                              className="d-flex justify-content-between text-decoration-none"
                            >
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                    alt="avatar"
                                    className="d-flex align-self-center me-3 "
                                    width="60"
                                  />
                                  <span className="badge bg-warning badge-dot"></span>
                                </div>
                                <div className="pt-1 bg-dumbgrey">
                                  <p className="fw-bold mb-0">
                                    Admin 2
                                  </p>
                                  <p className="small text-muted">
                                    Lorem ipsum dolor sit.
                                  </p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1 bg-dumbgrey">
                                  5 mins ago
                                </p>
                                <span className="badge bg-danger rounded-pill float-end">
                                  2
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-7 col-xl-8">
                    <div className="chat-header clearfix d-flex text-white pb-5 ms-5">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                        alt="avatar"
                        className="d-flex align-self-center me-3 "
                        width="60"
                      />

                      <div className="mt-2">
                        <h6 className="m-b-0">Admin 1</h6>
                        <small className="text-muted">
                          Last seen: 2 hours ago
                        </small>
                      </div>
                    </div>

                    <div className="p-5 section border-start border-3 bg-dumbgrey overflow-scroll ms-4 h-75">
                      <div className="d-flex flex-row justify-content-start">
                        <img
                          className=""
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                          alt="avatar 1"
                          width={60}
                        />
                        <div>
                          <p className="small p-2 ms-3 mb-1 rounded-3 text-white bg-dumbred">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                            12:00 PM | Aug 13
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row justify-content-end">
                        <div>
                          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-black">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                          </p>
                          <p className="small me-3 mb-3 rounded-3 text-muted">
                            12:00 PM | Aug 13
                          </p>
                        </div>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1"  width={60} />
                      </div>

                      <div className="d-flex flex-row justify-content-start">
                        <img
                          className=""
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                          alt="avatar 1"
                          width={60}
                        />
                        <div>
                          <p className="small p-2 ms-3 mb-1 rounded-3 text-white bg-dumbred">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                          </p>
                          <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                            12:00 PM | Aug 13
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row justify-content-end">
                        <div>
                          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-black">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                          <p className="small me-3 mb-3 rounded-3 text-muted">
                            12:00 PM | Aug 13
                          </p>
                        </div>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1"  width={60} />
                      </div>

                      <div className="d-flex flex-row justify-content-start">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                          alt="avatar 1"
                          width={60}
                        />
                        <div>
                          <p className="small p-2 ms-3 mb-1 rounded-3 text-white bg-dumbred">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </p>
                          <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                            12:00 PM | Aug 13
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row justify-content-end">
                        <div>
                          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-black">
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt.
                          </p>
                          <p className="small me-3 mb-3 rounded-3 text-muted">
                            12:00 PM | Aug 13
                          </p>
                        </div>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1"  width={60}/>
                      </div>
                    </div>

                    <div className="text-muted d-flex justify-content-start pt-3 mt-4 ms-5">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar"
                        width={60}
                      />
                      <input
                        onSubmit={handleOnSubmit}
                        type="text"
                        className="form-control font-smaller ms-2 text-white bg-black font-smaller ms-2 text-white bg-black border-0"
                        id="exampleFormControlInput2"
                        placeholder="Type Message"
                      />

                      <span
                        className="input-group-text border-0 bg-dumbred"
                        id="search-addon"
                      >
                        <i
                          type="submit"
                          className="bi bi-send-fill text-white"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
