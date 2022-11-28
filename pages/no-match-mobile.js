import { useState } from "react";

import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Input } from "../components/form/Input";
import { useRouter } from "next/router";

export default function confirm() {
  const [mobile, setMobile] = useState("");

  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  const nextStep = () => {
    if (mobile === "07111111111") {
      router.push("mobile");
    } else {
      router.push("support");
    }
  };

  const setMobileMethod = (event) => {
    const value = event.target.value.toString();
    setMobile(value);
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
              <h1 className="m--b-xlarge">Sorry, your details did not match</h1>

              <div className="m--b-xlarge">
                <p>
                  Sorry, the mobile number you entered didn't match with the CPH
                  number we've got registed.
                </p>
                <p className="m--b-xlarge">
                  Here is a hint of what the mobile number registered on our
                  records is. We've obscured some of the characters, for
                  security.{" "}
                </p>
                <h2>********111</h2>{" "}
                <p className="inline-block">
                  I don't regonise this mobile number{" "}
                  <LsLink>Contact support</LsLink>.
                </p>
              </div>

              <div
                className={"m-- t-large m--b-xlarge ls-grid-column-two-thirds"}
              >
                <Input
                  label="Confirm moblile number"
                  onChange={setMobileMethod}
                  placeholder="Mobile Number"
                />
              </div>

              <div className="d--flex d--flex-spaced">
                <div className="m--b-large">
                  <LsLink
                    onClick={nextStep}
                    disabled={mobile === ""}
                    type="button"
                  >
                    Next Step{" "}
                  </LsLink>
                  <LsLink
                    onClick={goHome}
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
    </>
  );
}
