import React, { useState } from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Paypal from "../../components/Paypal";
import "./Payment.css";
import CheckoutForm from "../../components/CheckoutForm";

const Payment = ({ address, setAddress }) => {
  const [checkout, setCheckout] = useState(false);
  const [events, setEvent] = useState("Events");
  const [name, setName] = useState("");
  const [wallet_address, setWalletAddress] = useState("");

  return (
    <div className="payment-container">
      <div className="faq-nav-container">
        <Nav address={address} setAddress={setAddress} />
      </div>
      <div className="paypal-container">
        <div className="payment-content">
          <div className="payment-heading">
            Add NFT verification to any ticket
          </div>
          <div className="payment-description">
            If you have ever used the phrase "admin can you verify this ticket?"
            then you understand the risk associated with buying second hand
            tickets for your favorite live events. With 3-Thentic's NFT Ticket
            Verification Service you can use the power of web 3.0 and BlockChain
            technology to be sure you are buying 100% verified tickets every
            time. You will need to create a crypto wallet inorder to use our
            verification service but it is easy to do and doesn't cost anything.
            We recommend using MetaMask. When you purchase your unique NFT we
            will create it and send it to your wallet address. Then the NFT will
            be linked to the event ticket. To transfer the ticket you will first
            provide the NFT to the buyer, allow them to verify your ownership
            and then transfer the NFT to them along with the event ticket.
          </div>
        </div>
        {checkout ? (
          <Paypal name={name} events={events} wallet_address={wallet_address} />
        ) : (
          <CheckoutForm
            setCheckout={setCheckout}
            setEvent={setEvent}
            name={name}
            events={events}
            wallet_address={wallet_address}
            setName={setName}
            setWalletAddress={setWalletAddress}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
