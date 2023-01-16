/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const Navbar = ({ login }) => {
  const router = useRouter();
  const logout = async () => {
    try {
      const result = await fetch("/api/logout");
      const { logout } = await result.json();
      if (logout) {
        Swal.fire("success", "Anda Berhasil Logout", "success");
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Head>
        <title>Food Recipe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <nav className="container-fluid mt-5">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <Link href="/">
                {" "}
                <h6>Home</h6>{" "}
              </Link>
            </div>
            <div className="col-1">
              <Link href="/add-recipe">
                {" "}
                <h6>Add Recipe</h6>{" "}
              </Link>
            </div>
            <div className="col-1">
              <Link href="/search">
                {" "}
                <h6>Search</h6>{" "}
              </Link>
            </div>
            <div className="col-1">
              <Link href="/profile">
                {" "}
                <h6 style={{ marginLeft: "40px" }}>Profile</h6>{" "}
              </Link>
            </div>
            <div className="col-1 offset-7">
              {!login ? (
                <Link href="/login">
                  <div className="btn" style={{ borderRadius: "30px" }}>
                    <Image
                      src="/user.png"
                      height={20}
                      width={20}
                      priority
                      alt=""
                    />
                    <h6>Login</h6>
                  </div>
                </Link>
              ) : (
                <div
                  className="btn"
                  style={{ borderRadius: "30px" }}
                  onClick={() => logout()}
                >
                  <Image
                    src="/user.png"
                    height={20}
                    width={20}
                    priority
                    alt=""
                  />
                  <h6>Logout</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="container-fluid bg-white">{children}</div> */}
    </>
  );
};

export default Navbar;
