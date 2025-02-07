import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white py-4">
      <div className="container">
        {/* Icone dei social */}
        <div className="row justify-content-center mt-5">
          <div className="col-6">
            <div className="row">
              <div className="col mb-2">
                <FaFacebook size={25} className="footer-icon me-2" />
                <FaInstagram size={25} className="footer-icon me-2" />
                <FaTwitter size={25} className="footer-icon me-2" />
                <FaYoutube size={25} className="footer-icon" />
              </div>
            </div>
            {/* Link di navigazione */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <div className="col">
                <div className="row">
                  <div className="col footer-links">
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Contact us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col footer-links">
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Legal Notices
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col footer-links">
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Cookie Preferences
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col footer-links">
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link" className="text-white">
                        Corporate Information
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottone */}
            <div className="row">
              <div className="col mb-2">
                <button
                  type="button"
                  className="btn btn-sm footer-button rounded-0 mt-3"
                >
                  Service Code
                </button>
              </div>
            </div>
            {/* Copyright */}
            <div className="row">
              <div className="col mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
