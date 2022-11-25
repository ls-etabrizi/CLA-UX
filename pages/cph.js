import { useState } from "react";

import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Input } from "../components/form/Input";

import { useRouter } from "next/router";

export default function cph() {
  const [valid, setValid] = useState(false);

  const [nonValid, setNonValid] = useState(false);

  const [finalCph, setFinalCPh] = useState("");

  const cphold = ["", "", "", "", "", "", "", "", ""];

  const router = useRouter();

  const nextStep = () => {
    if (finalCph === "121231234") {
      router.push("email");
    }

    if (finalCph === "121231235") {
      router.push("confirmDetails-mobile");
    }

    if (finalCph === "121231236") {
      router.push("confirmDetails-email");
    }
  };
  const backHome = () => {
    router.push("/");
  };

  const checkFinalCPH = (cph) => {
    setFinalCPh(cph);

    if (cph === "121231234" || cph === "121231235" || cph === "121231236") {
      setNonValid(false);
      setValid(true);
    } else {
      setNonValid(true);
      setValid(false);
    }
  };

  const checkCPH = (event) => {
    if (event.target.value !== "") {
      cphold.splice(event.target.id, 1, event.target.value);
    } else {
      cphold.splice(event.target.id, 1, event.target.value);
    }

    if (cphold.join("").length === 9) {
      setValid(true);
      checkFinalCPH(cphold.join(""));
    } else {
      setValid(false);
    }
  };

  return (
    <div>
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
              <h1 className="m--b-xlarge">Enter your CPH Number</h1>
              <div className="m--b-xlarge">
                <p>
                  In order to register an account, you will need to provide your
                  CPH number.{" "}
                </p>
                <p>
                  If you don't have this, please read about{" "}
                  <LsLink
                    target="_blank"
                    url="https://www.gov.uk/guidance/sheep-and-goat-keepers-register-your-holding-and-flock-or-herd"
                  >
                    obtaining a CPH number
                  </LsLink>
                  .
                </p>
              </div>
              <h3>Please enter your CPH </h3>
              <div className="m--b-xlarge">
                <Input id="0" small onChange={checkCPH} maxLength="1" />
                <Input id="1" small onChange={checkCPH} maxLength="1" />
                <span className="division">/</span>
                <Input id="2" small onChange={checkCPH} maxLength="1" />
                <Input id="3" small onChange={checkCPH} maxLength="1" />
                <Input id="4" small onChange={checkCPH} maxLength="1" />
                <span className="division">/</span>
                <Input id="5" small onChange={checkCPH} maxLength="1" />
                <Input id="6" small onChange={checkCPH} maxLength="1" />
                <Input id="7" small onChange={checkCPH} maxLength="1" />
                <Input id="8" small onChange={checkCPH} maxLength="1" />
                <div className={valid ? "inline-icon" : "hidden"}>
                  <div className="success-icon"></div>
                  <span className="m--l-small m--t-medium"> CPH - valid </span>
                </div>
                <div className={nonValid ? "inline-icon" : "hidden"}>
                  <div className="failed-icon"></div>
                  <span className="m--l-small m--t-medium">
                    {" "}
                    CPH - not valid{" "}
                  </span>
                </div>
              </div>

              <div className="d--flex d--flex-spaced">
                <div className="m--b-large">
                  <LsLink onClick={nextStep} disabled={!valid} type="button">
                    Next Step{" "}
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
              <p>
                By registering an account you agree to our{" "}
                <LsLink
                  target="_blank"
                  url="https://livestockinformation.org.uk/privacy/"
                >
                  privacy policy
                </LsLink>{" "}
                and{" "}
                <LsLink
                  url="https://livestockinformation.org.uk/cookies/"
                  target="_blank"
                >
                  cookies
                </LsLink>
                .
              </p>
            </div>
          </div>
          <div className="ls-grid-column-one-third  m--t-large"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
