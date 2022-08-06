import React, { Fragment, useState } from "react";
import FaqItem from "../../components/FaqItem";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import "./index.css";
import PolygonMetmask from "../../assets/PolygonMetamask.png";
import AddressMetmask from "../../assets/AddressMetamask.png";

const Faq = ({ address, setAddress }) => {
  const [QA] = useState([
    {
      question: "Do I have to know a lot about crypto currency?",
      answer: `
    No! 🙂  We want this to be simple but as secure and functional as possible.  If you want to learn more about blockchain and crypto currency you can start here.

    We are happy to answer any questions you might have, contact us at-  3thentic@gmail.com
    `,
    },
    {
      question:
        " Do I need a crypto wallet, what is it and where do I get one?",
      answer: `
      Yes, you do need a crypto wallet.  A crypto wallet is where your NFT will be stored.  We recommend MetaMask for your crypto wallet, you can download it here.
    `,
    },
    {
      question: "Do I have to buy crypto currency?",
      answer:
        "You do not have to buy any currency, we will send you some for free along with the NFT once we have your wallet address.",
    },
    {
      question: "What is an NFT?",
      answer: `“Non-fungible token”.

        “Non-fungible” more or less means that it’s unique and can’t be replaced with something else. For example, a bitcoin is fungible — trade one for another bitcoin, and you’ll have exactly the same thing. A one-of-a-kind trading card, however, is non-fungible. If you traded it for a different card, you’d have something completely different. You gave up a Squirtle, and got a 1909 T206 Honus Wagner, which StadiumTalk calls “the Mona Lisa of baseball cards.” (I’ll take their word for it.) ” Excerpt take from The Verge
        
        All this means is that through our Verification Management System  your event ticket now has an NFT connected to it that can not be changed or substituted for anything else and only you own it, until you transfer the NFT and ticket to some one else.`,
    },
    {
      question: "Are these NFT's collectible?",
      answer:
        "No.  These are functional NFT’s not collectible ones.  If you would like a unique collectible one for your event we can create that.  Please contact us for further information.",
    },
    {
      question: `What is the "gas" fee?`,
      answer:
        "Gas is the name for what it costs to pay the miners on the blockchain to verify ownership of an NFT and to transfer the NFT.  For verifying and transferring the NFT you should only need a fraction of a Polygon and we provide that for you for free.",
    },
    {
      question: `What network do I need to be on?`,
      answer: "We use the Polygon network  for our NFT’s.",
      image: PolygonMetmask,
    },
    {
      question: `How do I connect to the Polygon network?`,
      answer: `Once you have a crypto wallet it needs to be connected to the Polygon network.

      Follow this link for to get connected.  It’s very simple!`,
    },
    {
      question: ` Where is my address?`,
      answer: `For viewing, receiving or transferring your NFT you will need to know where your wallet address is.  You will also use this address for receiving crypto currency.`,
      image: AddressMetmask,
    },
    {
      question: `Why is the Blockchain so secure?`,
      answer: `“Cryptography — mathematical methods of keeping data secret and proving identity — now enters the picture when it comes to recording transactions. Blockchain uses the same cryptographic key technology that keeps hackers from sniffing your credit card number when you type it into an e-commerce website. One digital key ensures only you can enter a transaction to the blockchain involving your assets, and another digital key lets someone else confirm it really was you who added the transaction.”  more info at Cnet`,
    },
  ]);

  return (
    <Fragment>
      <div className="faq-container">
        <div className="faq-nav-container">
          <Nav address={address} setAddress={setAddress} />
        </div>
        <div className="faq-card-container">
          <div className="faq-card-title">FAQ</div>
          {QA.map((qa, index) => {
            return <FaqItem qa={qa} key={index} />;
          })}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Faq;
