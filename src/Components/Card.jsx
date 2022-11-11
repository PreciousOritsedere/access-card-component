import React, { useState } from "react";
import { ReactComponent as Linear } from "../assests/icons/Linear.svg";
import { ReactComponent as Intercom } from "../assests/icons/Intercom.svg";
import { ReactComponent as Arrow } from "../assests/icons/Transfer.svg";
import { ReactComponent as Copy } from "../assests/icons/Copy.svg";
import { ReactComponent as Play } from "../assests/icons/Play.svg";

function Card() {
  const [copy, setCopy] = useState(false);
  const [showMe, setShowMe] = useState(false);

  const link = "app.untitledui.com/integrations/intercom";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  const handleSubmit = () => {
    setShowMe((prev) => !prev);
  };

  return (
    <>
      {!showMe ? (
        <div className="clickContainer">
          <button className="clickBtn" onClick={handleSubmit}>Click Here</button>
        </div>
      ) : null}
      {showMe ? (

      <section className="cardContainer">
        <section className="headIcons">
          <div>
            <Linear />
          </div>
          <div>
            <Arrow />
          </div>
          <div>
            <Intercom />
          </div>
        </section>
        <section className="connectSection">
          <h1>Connect Linear to Intercom</h1>
          <p>
            Prioritize work based on customer needs and build a tighter feedback
            loop with your customers.
          </p>
        </section>
        <section className="inputSection">
          <input type="text" placeholder="Enter your link" />
          <button onClick={handleCopy}>
            <Copy />
            Copy link
            {copy ? <p className="copied">copied</p> : null}
          </button>
        </section>

        <section className="checkContainer">
          <h3>Untitled would like to</h3>
          <div>
            <div className="checkHold">
              <div class="group">
                <input type="checkbox" id="info" />
                <label for="info"><p>Access basic company information and details</p></label>
              </div>
              
            </div>

            <div className="checkHold">
              <div class="group">
                <input type="checkbox" id="bugs" />
                <label for="bugs"><p>Access and edit bug reports and create new issues</p></label>
              </div>
              
            </div>

            <div className="checkHold">
              <div class="group">
                <input type="checkbox" id="issues" />
                <label for="issues"><p>Change issue status and assignee of issues</p></label>
              </div>
              
            </div>

            <div className="checkHold">
              <div class="group">
                <input type="checkbox" id="conversations" />
                <label for="conversations"><p>Open and resolve Intercom conversations</p></label>
              </div>
              
            </div>

            <div className="checkHold">
              <div class="group">
                <input type="checkbox" id="user" />
                <label for="user"><p>Add or remove users and change user roles</p></label>
              </div>
              
            </div>
          </div>
          <p className="privacy">
            We care about your privacy in our Privacy Policy. By clicking Allow
            access, you authorize Untitled to access your information.
          </p>
        </section>
        <div className="btnContainer">
          <button className="play">
            <Play /> How it works
          </button>
          <div>
            <button onClick={handleSubmit}>Cancel</button>
            <button className="access">Allow access</button>
          </div>
        </div>
      </section>
      ) : null}
    </>
  );
}

export default Card;
