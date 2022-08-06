// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { useToasts } from "react-toast-notifications";

const Index = ({
  setCheckout,
  setEvent,
  setName,
  setWalletAddress,
  name,
  events,
  wallet_address,
}) => {
  const { addToast } = useToasts();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCheckout(true);
    if (wallet_address === "") {
      addToast(`Wallet Address Cannot be empty`, {
        appearance: "error",
        autoDismiss: true,
      });
      setCheckout(false);
      return;
    }
  };

  return (
    <div className="payment-form">
      <form className="form payment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-type"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="input-type"
          required
          placeholder="Wallet Address"
          value={wallet_address}
          onChange={(e) => {
            setWalletAddress(e.target.value);
            // setWalletCheck(false);
          }}
        />

        <div className="font-awesome-icon">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <select
          className="form-select"
          value={events}
          onChange={(e) => setEvent(e.target.value)}
        >
          <option>Events</option>
          <option value="General Admission Friday">
            General Admission Friday
          </option>
          <option value="General Admission Saturday">
            General Admission Saturday
          </option>
          <option value="VIP Access=">VIP Access</option>
        </select>
        <button className="btn-payment" onClick={handleSubmit}>
          CheckOut
        </button>
      </form>
    </div>
  );
};
export default Index;
