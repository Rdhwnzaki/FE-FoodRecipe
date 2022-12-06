import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
// import { useSelector } from "react-redux";
// import axios from "axios";

const NavTabs = () => {
  const [key, setKey] = useState("myrecipe");
  return (
    <div className="container text-start  rounded-2 mt-1 bg-white">
      <div className="row  rounded-3">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="myrecipe" title="My Recipe">
            <div className="row">
              <div className="col-3">
                <Image src="/food9.png" height={300} width={300} />
                <h4
                  style={{
                    marginTop: "-40px",
                    marginLeft: "13px",
                    color: "white",
                  }}
                >
                  Indian Salad
                </h4>
              </div>
              <div className="col-3">
                <Image src="/food9.png" height={300} width={300} />
                <h4
                  style={{
                    marginTop: "-40px",
                    marginLeft: "13px",
                    color: "white",
                  }}
                >
                  Indian Salad
                </h4>
              </div>
              <div className="col-3">
                <Image src="/food9.png" height={300} width={300} />
                <h4
                  style={{
                    marginTop: "-40px",
                    marginLeft: "13px",
                    color: "white",
                  }}
                >
                  Indian Salad
                </h4>
              </div>
            </div>
          </Tab>
          <Tab eventKey="savedrecipe" title="Saved Recipe">
            <div className="row">
              <div className="col-3">
                <Image src="/food9.png" height={300} width={300} />
                <h4
                  style={{
                    marginTop: "-40px",
                    marginLeft: "13px",
                    color: "white",
                  }}
                >
                  Indian Salad
                </h4>
              </div>
              <div className="col-3">
                <Image src="/food9.png" height={300} width={300} />
                <h4
                  style={{
                    marginTop: "-40px",
                    marginLeft: "13px",
                    color: "white",
                  }}
                >
                  Indian Salad
                </h4>
              </div>
              <div className="col-3">
                <Image src="/food9.png" height={300} width={300} />
                <h4
                  style={{
                    marginTop: "-40px",
                    marginLeft: "13px",
                    color: "white",
                  }}
                >
                  Indian Salad
                </h4>
              </div>
            </div>
          </Tab>
          <Tab eventKey="likedrecipe" title="Liked Recipe">
            <div className="row">
              <div className="col-3">
                <Image src="/food9.png" height={300} width={300} />
                <h4
                  style={{
                    marginTop: "-40px",
                    marginLeft: "13px",
                    color: "white",
                  }}
                >
                  Indian Salad
                </h4>
              </div>
              <div className="col-3">
                <Image src="/food9.png" height={300} width={300} />
                <h4
                  style={{
                    marginTop: "-40px",
                    marginLeft: "13px",
                    color: "white",
                  }}
                >
                  Indian Salad
                </h4>
              </div>
              <div className="col-3">
                <Image src="/food9.png" height={300} width={300} />
                <h4
                  style={{
                    marginTop: "-40px",
                    marginLeft: "13px",
                    color: "white",
                  }}
                >
                  Indian Salad
                </h4>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default NavTabs;
