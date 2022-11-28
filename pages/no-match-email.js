import { useState } from "react";

import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Input } from "../components/form/Input";
import { useRouter } from "next/router";

export default function confirm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  const nextStep = () => {
    if (email === "person@email.com") {
      router.push("email");
    } else {
      router.push("support");
    }
  };

  const updateEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
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
                  Sorry, the email you entered didn't match with the CPH number
                  we've got registed.
                </p>
                <p className="m--b-xlarge">
                  Here is a hint of what the email registered on our records is.
                  We've obscured some of the characters, for security.{" "}
                </p>
                <h2>*****@email.com</h2>{" "}
                <p className="inline-block">
                  I don't regonise this email <LsLink>Contact support</LsLink>.
                </p>
              </div>

              <div
                className={"m-- t-large m--b-xlarge ls-grid-column-two-thirds"}
              >
                <Input
                  label="Confirm Email"
                  onChange={updateEmail}
                  placeholder="Email"
                />
              </div>

              <div className="d--flex d--flex-spaced">
                <div className="m--b-large">
                  <LsLink
                    onClick={nextStep}
                    disabled={email === ""}
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
