import React from "react";
import "./Innovation.css";

const Innovation = () => {
  return (
    <div>
      <div className="inn">
        <div className="left">
          <div className="box"></div>
          <img
            src="6.jpeg"
            className="ilb"
            alt=""
          />
        </div>
        <div className="right">
          <h2>INNOVATION</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            qui distinctio ea a perspiciatis velit dignissimos dolorem
            consectetur nobis, eaque officia nihil iusto deserunt. Architecto
            recusandae temporibus corporis mollitia culpa!
          </p>
          <div className="button1">READ MORE</div>
        </div>
      </div>

      <div className="sus">
        <div className="left">
          <h2>SUSTAINABILITY</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            qui distinctio ea a perspiciatis velit dignissimos dolorem
            consectetur nobis, eaque officia nihil iusto deserunt. Architecto
            recusandae temporibus corporis mollitia culpa!
          </p>
          <div className="button1">READ MORE</div>
        </div>
        <div className="right">
          <div className="box"></div>
          <img
            src="7.jpeg"
            className="ilb"
            alt=""
          />
        </div>
      </div>


    <div className="ic">
    <img src="ic.jpeg" alt=""/>
    <div className="button1">INVESTOR CENTRE</div>
    </div>



    <div className="vop">
        <div className="vopl">
    <img src="ic2.jpeg" alt=""/>
    </div>
    <div className="vopr">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi aspernatur, assumenda et tempora repellendus reiciendis omnis at perferendis, repudiandae quidem dicta exercitationem quisquam debitis soluta qui deserunt voluptates sint quibusdam!</p>
        <div className="button1">VIEW OPEN POSITION</div>
    </div>
    </div>

    </div>
  );
};

export default Innovation;
