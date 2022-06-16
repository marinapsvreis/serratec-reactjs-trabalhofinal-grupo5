import React from "react";
import {} from "./style.css";
import FacebookIcon from '../../Sources/icons/facebook-icon.png'
import GithubIcon from '../../Sources/icons/github-icon.png'
import InstagramIcon from '../../Sources/icons/instagram-icon.png'
import TwitterIcon from '../../Sources/icons/twitter-icon.png'
import WhatsappIcon from '../../Sources/icons/whatsapp-icon.png'

function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="redes_sociais">
            <ul>
              <a
                target="_blank"
                href="https://www.facebook.com/Serra-Funko-114398387933973"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={FacebookIcon}
                    alt="facebook"
                  />
                </li>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/serra_funkoo/"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={InstagramIcon}
                    alt="instagram"
                  />
                </li>
              </a>
              <a
                target="_blank"
                href="https://twitter.com/SerraFunko"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={TwitterIcon}
                    alt="twitter"
                  />
                </li>
              </a>
              <a
                target="_blank"
                href="https://web.whatsapp.com"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={WhatsappIcon}
                    alt="whatsapp"
                  />
                </li>
              </a>
              <a
                target="_blank"
                href="https://github.com/marinapsvreis/serratec-frontendessencial-trabalho-grupo"
                rel="noreferrer"
              >
                <li>
                  <img src={GithubIcon} alt="github" />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
