
import { useState } from "react";
import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Input } from "../components/form/Input";

import { useRouter } from "next/router";

export default function support() {
  const router = useRouter();
  const [postcode, setPostcode] = useState(null);
  const [flockNumber, setFlockNumber] = useState(null);

  const goHome = () => {
    router.push("/");
  };

  const nextStep = () => {
    if (flockNumber === "111111" && postcode === "BS11AA") {
      router.push("signinname?signup=flock");
    }else {
        router.push("no-match-flock")
    }
  };

  const updatePostcode = (event) => {
    const value = event.target.value.toString();
    setPostcode(value);
  };

  const updateFlockNumber = (event) => {
    const value = event.target.value.toString();
    setFlockNumber(value);
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
          <div className="ls-grid-column-one-half">
            <div>
              <h1 className="m--b-xlarge">Verify your details</h1>

              <div className="m--b-large">
                <p>
                  We now need to verify your details. You can do this via the
                  flock number / postcode used, when you signed up as a keeper
                  with APHA.
                </p>
                <p className="m--b-large">
                  This will need to match with the CPH number we have on record,
                  as shown.{" "}
                </p>
                <p className="">
                  <strong className="p--large">CPH - 12 / 123 / 1238</strong>{" "}
                  <span>
                    Is this incorrect?{" "}
                    <LsLink url="cph">Re-enter CPH number</LsLink>
                  </span>
                </p>
              </div>
            </div>
            <div className={"m--t-large  m--b-xlarge ls-grid-column-one-third"}>
              <Input maxLength={6} label="Confirm Flock Number" onChange={updateFlockNumber} placeholder="Flock Number" />
              <Input
                label="Confirm Postcode"
                placeholder="Postcode"
                onChange={updatePostcode}
              />
            </div>
            <p className="m--b-xlarge">
                I don't know the flock number / post code for this CPH?{" "}
                <LsLink url="support">Contact support </LsLink>.
              </p>

            <div className="d--flex d--flex-spaced">
              <div className="m--b-large">
                <LsLink onClick={nextStep} type="button">Next Step </LsLink>
                <LsLink
                  styleClear
                  onClick={goHome}
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
