

import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function confirm() {
 
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
                  Sorry, the flock number / post code you entered didn't match with the CPH
                  number we've got registed.
                </p>
                <p className="inline-block">
                  Please  <LsLink url="support"> contact our support team</LsLink> in order to gain access to Livestock Information.
                </p>
                <p>Want to try re-entering your flock / postcode?  <LsLink url="flock-details">Verify details</LsLink>.</p>
              </div>
            </div>
          </div>
          <div className="ls-grid-column-one-third  m--t-large"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
