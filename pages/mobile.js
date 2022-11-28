import { useState } from "react";

import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Input } from "../components/form/Input";

import { useRouter } from "next/router";

export default function email() {
  const router = useRouter();

  const password = () => {
    router.push("signinname");
  };

  const backHome = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Livestock Information Service</title>
        <meta name="description" content="Livestock Information Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="cla-width-container">
        <div className="d--flex m--t-xlarge">
          <div className="ls-grid-column-two-thirds">
            <div>
              <h1 className="m--b-xlarge">Please check your mobile</h1>
              <h2 className="m--b-xlarge" onClick={password}>
                We've sent you a verification code to *******111
              </h2>
              <div className="m--b-xlarge">
                {/* <p>We've hidden some of the characters of your email shown for security reasons. This email address is the one we have on record for your CPH number.</p> */}
                <p className="m--b-xlarge">
                  It might take a few of minutes to arrive. The code will expire
                  after 2 hours.
                </p>
                <div className="ls-grid-column-one-third">
                  <Input
                    label="Enter the 6 digit security code"
                    maxLength={6}
                  />
                </div>
                {/* <p>The email address shown doesn't seem to be mine? <LsLink>Contact helpdesk</LsLink></p> */}
                <p>
                  Theres a problem with my code?{" "}
                  <LsLink>Retry sending code</LsLink>
                </p>
              </div>
              <div className="m--b-large">
                <LsLink onClick={password} type="button">
                  Continue{" "}
                </LsLink>
                <LsLink
                  onClick={backHome}
                  styleClear
                  className="m--l-large"
                  type="button"
                >
                  Cancel{" "}
                </LsLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
