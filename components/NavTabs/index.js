/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
import axios from "axios";
// import { useSelector } from "react-redux";
// import axios from "axios";
export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  console.log("my token", token);
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      isLogin: true,
      token: token,
    },
  };
};

const NavTabs = ({ token }) => {
  const [key, setKey] = useState("myrecipe");
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.URL_BASE}/recipe/recipe-user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
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
              {data ? (
                data.map((item) => (
                  <div className="col-3" key={item.user.id}>
                    <img
                      src={item.photo}
                      style={{ height: "300px", width: "30px" }}
                      alt=""
                    />
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
                ))
              ) : (
                <h1>...Loading</h1>
              )}
            </div>
          </Tab>
          <Tab eventKey="savedrecipe" title="Saved Recipe">
            <div className="row">
              <div className="col-3">
                <Image src="/food9.png" height={300} width={300} alt="" />
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
                <Image src="/food9.png" height={300} width={300} alt="" />
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
                <Image src="/food9.png" height={300} width={300} alt="" />
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
                <Image src="/food9.png" height={300} width={300} alt="" />
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
                <Image src="/food9.png" height={300} width={300} alt="" />
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
                <Image src="/food9.png" height={300} width={300} alt="" />
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
