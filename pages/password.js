import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Input } from "../components/form/Input";

import { useRouter } from "next/router";

export default function email() {
  const router = useRouter();

  const success = () => {
    router.push("success");
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
          <div className="ls-grid-column-one-half">
            <div>
              <h1 className="m--b-large">Please create your password</h1>
              <p>
                We've completed verification with the following sign in name.
              </p>
              <h2 className="m--b-large">
                {" "}
                <strong>person@email.com</strong>
              </h2>
              <p className="ls-inset-text">
                You will need to use this <strong>email address</strong>, in
                order to <strong>sign in</strong>.
              </p>
              <p className="m--b-large">
                Please provide a password for your newly registered Information
                Livestock account.
              </p>

              <div className="m--b-xlarge ls-grid-column-two-thirds">
                <Input label="Password" type="password" />
                <Input label="Confirm Password" type="password" />
              </div>

              <p className="ls-inset-text">
                At least 12 characters. A combination of uppercase letters,
                lowercase letters, numbers, and symbols.
              </p>

              <div className="d--flex d--flex-spaced">
                <div className="m--b-large">
                  <LsLink onClick={success} type="button">
                    Create Password{" "}
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
