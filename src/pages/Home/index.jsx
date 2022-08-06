import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Transfer from "../../components/Transfer";
import Verify from "../../components/Verify";

const Home = ({ address, setAddress }) => {
  return (
    <Fragment>
      <Hero address={address} setAddress={setAddress} />
      <Verify />
      <Transfer address={address} setAddress={setAddress} />
      <Footer />
    </Fragment>
  );
};

export default Home;
