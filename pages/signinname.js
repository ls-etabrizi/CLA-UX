import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Input } from "../components/form/Input";

import { useRouter } from "next/router";

export default function email() {
  const router = useRouter();

  const success = () => {
    router.push("email-support");
  };

  const backHome = () => {
    router.push("/");
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
              <h1 className="m--b-xlarge">Please create your sign in name</h1>
              <p className="m--b-large">
               Now that you've completed verification via your mobile number, we need you to create a sign in name. 
              </p>
            <p className="m--b-xlarge">This must be your email address so we can contact you for any future corrospondence. </p>

              <div className="m--b-xlarge ls-grid-column-two-thirds">
                <Input label="Email Address" type="text" />
                <Input label="Confirm Email Address" type="text" />
              </div>

              <p>We will send you a verification email to this address. In order to complete registration.</p>

              <p className="ls-inset-text">You will need to use this <strong>email address</strong>, in order to <strong>sign in</strong>.</p>

              <div className="d--flex d--flex-spaced">
                <div className="m--t-large m--b-large">
                  <LsLink onClick={success} type="button">
                    Create sign in name{" "}
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
