import React, {useState} from 'react';

import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WelcomeBanner } from "../components/WelcomeBanner";
import { AsideInfo } from "../components/AsideInfo";
import { useRouter } from "next/router";

import { Modal } from '../components/Modal';

export default function Home() {

  const [openModal, setOpenModal ] = useState(false);

  const router = useRouter();

  const goToSignup = () => {
    router.push("/sign-up");
  };
  
  return (
    <>
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
      <div className="cla-width-container landing">
        <div className="d--flex m--t-xlarge">
          <div className="ls-grid-column-two-thirds">
            <div className="ls-home">
              <h2>Welcome to the Livestock Information Service</h2>
              <p>This is the first step in a series of changes to livestock reporting in England, replacing the current ARAMS service and in the future, providing a single place for all livestock reporting.  </p>
              <p>The new Livestock Information Service can currently be used for reporting sheep, goat and deer movements. There is also an option to maintain an online Holding Register by recording other livestock events such as tagging.</p>
              <h2>Create account or Sign in</h2>
              <p>To create an account, you will need a CPH and be registered as a keeper.</p>
              <LsLink onClick={goToSignup} className="m--b-xlarge" type="button">Create account / Sign in</LsLink>
              <h2 className="m--b-large">Are you a Vet looking to record a visit for a holding?</h2>
              <p>You will be required to sign in via the Royal College of Veterinary Surgeons (RCVS) to access the Livestock Service and record a visit for a holding. </p>
              <LsLink onClick={()=> { setOpenModal(!openModal)}} className="m--b-xlarge" type="button">Vet Sign in via RCVS</LsLink>
              <p>Using the online service to report your livestock movements makes a real difference for traceability - digital notifications are faster and more accurate.</p>
            </div>
          </div>
          <div className="ls-grid-column-one-third  m--t-large">
            <AsideInfo />
          </div>
        </div>
      </div>
      <Footer />
      <Modal large open={openModal} onClick={() => {setOpenModal(!openModal)}}>
        <p>sign in form</p>
      </Modal>


    </>
  );
}
