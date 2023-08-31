import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-section">
          <div className="footer-parts">
            <a href="/" style={{ textDecoration: "none" }}>
              <img
                src="/images/logo.png"
                alt="loading"
                style={{ height: "50px" }}
              />
              <span className="icon-head">eBook</span>
            </a><br /><br />
            <div> Copyright © 2022 eBook. All rights reserved</div>
          </div>

          <div className="footer-parts">
            <div className="heading">Company</div>
            <br />
            <a href="#" className="connect">
              About us
            </a>
            <br />
            <br />
            <a href="#" className="connect">
              careers
            </a>
            <br />
            <br />
            <a href="#" className="connect">
              Contact us
            </a>
            <br />
            <br />
            <a href="#" className="connect">
              How it works
            </a>
            <br />
            <br />
          </div>
          <div className="footer-parts">
            <div className="heading">Support</div>
            <br />
            <a href="#" className="connect">
              Help center
            </a>
            <br />
            <br />
            <a href="#" className="connect">
              Terms of service
            </a>
            <br />
            <br />
            <a href="#" className="connect">
              Legal
            </a>
            <br />
            <br />
            <a href="#" className="connect">
              Private policy
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
