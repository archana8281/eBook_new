import React, { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import jwt_decode from "jwt-decode";
import { video } from "../../utlis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function View() {
  const [data, setData] = useState();
  let token = localStorage.getItem("access_token");
  var decode = jwt_decode(token);
  var subject = decode.data.subject;

  useEffect(() => {
    axios
      .get(`http://localhost/ebook/SERVER/user/data?subject=` + subject)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

    if (!data) return "Data not found!!";

  return (
    <div>
      <Header />
      <div className="user-view">
        <div className="recent-view">
          <div className="container">
            <h2>Recently view</h2>
            <hr className="uline" />
            <div className="recent-content">
              {video.map((itm) => (
                <div className="video-list" key={itm.id}>
                  {itm.vid}
                </div>
              ))}
            </div>
            <h4>
              <a href="/view/review">Show all</a>
            </h4>
          </div>
        </div>
        <div className="content-view" >
          <div className="container">
            <h2>Your Gallery</h2>
            <hr className="uline" />
            <div className="search">
              <input
                type="search"
                name="content"
                placeholder=" search the data"
              />
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </button>
            </div>

            <div className="recent-content">
              {data &&
              data?.length !== 0 &&
              data.map((itm) => (
                <div className="video-list" key={itm.Cid}>
                  <div dangerouslySetInnerHTML={{__html: itm.path }}  id="video" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
