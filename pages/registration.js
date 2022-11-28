import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RegistrationDiagram } from "../components/RegistrationDiagram";

import { useRouter } from "next/router";

export default function Registration() {
  const router = useRouter();

  const start = () => {
    router.push("cph");
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
            <h1 className="m--b-xlarge">
              What you will need for Registration{" "}
            </h1>
            <div className="m--b-xxlarge">
              <RegistrationDiagram />
            </div>
            <div className="d--flex d--flex-spaced">
              <div className="m--b-xxlarge">
                <LsLink onClick={start} type="button">
                  Start Registration{" "}
                </LsLink>
              </div>
              <p className="p--large">
                Already registered? <LsLink url="/">Sign in.</LsLink>
              </p>
            </div>
          </div>
        </div>
        <div className="ls-grid-column-one-third  m--t-large"></div>
      </div>
      <Footer />
    </>
  );
}
