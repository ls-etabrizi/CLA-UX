import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WelcomeBanner } from "../components/WelcomeBanner";
import { AsideInfo } from "../components/AsideInfo";

import { Input } from "../components/form/Input";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Livestock Information Service</title>
        <meta name="description" content="Livestock Information Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <WelcomeBanner
        title="Livestock Information Service"
        intro="The new Livestock Information Service for reporting sheep, goat and deer movements."
      />
      <div className="cla-width-container">
        <div className="d--flex m--t-xlarge">
          <div className="ls-grid-column-two-thirds">
            <div className="ls-grid-column-two-thirds">
              <h1 className="m--b-xlarge">Successfully registered</h1>

              <p className="m--b-xlarge p--large">
                You are now registered with the Livestock Information Service,
                you can now sign in with your details
              </p>

              <div className="m--b-xlarge">
                <Input label="Sign in Email" placeholder="Sign in Email" />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Password"
                />
                <LsLink>Forgot your password?</LsLink>
              </div>
              <div className="m--b-xxlarge">
                <LsLink type="button">Sign in</LsLink>
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
          <div className="ls-grid-column-one-third  m--t-large">
            <AsideInfo />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
