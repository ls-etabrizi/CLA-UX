import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function support() {

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
              <h1 className="m--b-xlarge">Support</h1>

              <div className="m--b-xlarge">
                <p>
                  Contact us at Livestock Information, if your having problems
                  in registering your account.
                </p>
                <p >
                  <LsLink>devsupport@livestockinformation.org.uk</LsLink> Our
                  support team will get back to you within 2 working days.
                </p>
                <p>Alternatively, you can contact us via telephone: </p>
                <p className="p--large">
                  <strong>0345 050 9876</strong>
                </p>
                <p>
                  Our office hours are Monday to Friday 08:00 to 18:00. Please
                  note that we are closed on weekends and bank holidays.
                </p>
              </div>
            </div>
            <div className="ls-grid-column-one-third  m--t-large"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
