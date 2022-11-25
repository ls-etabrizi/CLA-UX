import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


import { useRouter } from "next/router";

export default function email() {
  const router = useRouter();

  const emailgo = () => {
    router.push("email");
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
              <h1 className="m--b-xlarge">Please confirm your sign in name</h1>
              <p className="m--b-large">
               Now that you've completed verification via your mobile number, we need you to confirm your sign in name. 
              </p>

              <p className="m--b-large">We have the following email address assigned to this CPH. This will be your sign in name.</p>

              <h2>person@email.com</h2>

            <p className="m--b-xlarge"><strong>We will send you a verification email to this address</strong>. In order to complete registration. </p>


              <p className="m--b-xlarge">Would you prefer to use a different email for sign in? <LsLink>Create a different sign in name</LsLink>.</p>


              <div className="d--flex d--flex-spaced">
                <div className="m--t-large m--b-large">
                  <LsLink onClick={emailgo} type="button">
                    Confirm sign in name{" "}
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
