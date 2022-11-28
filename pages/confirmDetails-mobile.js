import { useState } from "react";

import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Input } from "../components/form/Input";
import { useRouter } from "next/router";

export default function confirm() {
  const [mobile, setMobile] = useState(null);
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  const nextStep = () => {
    if (mobile === "07111111111") {
      router.push("mobile");
    }
    if (mobile !== "07111111111") {
      router.push("no-match-mobile");
    }
  };

  const updateMobile = (event) => {
    const value = event.target.value.toString();
    setMobile(value);
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
          <div className="ls-grid-column-one-half">
            <div>
              <h1 className="m--b-xlarge">Verify your details</h1>

              <div className="m--b-xlarge">
                <p>
                  We now need to verify your details. You can do this via the
                  mobile number used, when you signed up as a keeper with APHA.
                </p>
                <p className="m--b-large">
                  This will need to match with the CPH number we have on record,
                  as shown.{" "}
                </p>
                <p className="m--b-xlarge">
                  <strong className="p--large">CPH - 12 / 123 / 1235</strong>{" "}
                  <span>
                    Is this incorrect?{" "}
                    <LsLink url="cph">Re-enter CPH number</LsLink>
                  </span>
                </p>
              </div>

              <div className={"m--t-large m--b-xlarge ls-grid-column--thirds"}>
                <Input
                  label="Confirm mobile number"
                  placeholder="Mobile number"
                  onChange={updateMobile}
                />

                <p>
                  I don't remember the mobile I used with APHA?{" "}
                  <LsLink url="support">Contact support </LsLink>.
                </p>
              </div>

              <div className="d--flex d--flex-spaced">
                <div className="m--b-large">
                  <LsLink
                    onClick={nextStep}
                    disabled={mobile === null || mobile === ""}
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
    </div>
  );
}
