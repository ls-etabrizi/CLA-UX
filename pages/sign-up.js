import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WelcomeBanner } from "../components/WelcomeBanner";
import { AsideInfo } from "../components/AsideInfo";

import { Input } from "../components/form/Input";

export default function Home() {
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
            <div className="ls-grid-column-two-thirds">
              <h1>Sign in </h1>
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
              <p className="p--large">
                Not registered yet?{" "}
                <LsLink url="cph">Register for an account</LsLink>
              </p>
            </div>
          </div>
          <div className="ls-grid-column-one-third  m--t-large">
            <AsideInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
