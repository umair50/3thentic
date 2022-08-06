import React, { useState } from "react";
import "./index.css";
import VerifyImg from "../../assets/VerifyImg.png";
import contract from "../../ethereum/collection";
import { useToasts } from "react-toast-notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Verify = () => {
  const [UserArress, setUserArress] = useState("");
  const [ShowTokens, setShowTokens] = useState(false);
  const [TokenAmount, setTokenAmount] = useState(0);
  const [events, setEvent] = useState("");
  const { addToast } = useToasts();

  // let nftContract = contract;
  let _TokenAmount;

  const onVerify = async () => {
    if (UserArress === "") {
      addToast(`User Address Cannot be empty`, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    if (events === "") {
      addToast("Events Cannot Be Empty", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    if (events === "nodeMinerWahaj") {
      _TokenAmount = await contract.methods.balanceOf(UserArress, 1).call();
      console.log(_TokenAmount);
      setShowTokens(true);
      setTokenAmount(_TokenAmount);
      return;
    }

    console.log("to checkout the value in _tokenAmount", _TokenAmount);
  };

  return (
    <div className="verify-container">
      <div className="verify-header">Verify Ownership</div>
      <div className="verify-desc">
        In the box below enter the NFT address of the ticket you want to
        purchase. If it comes back verified then you can be sure it is an
        authentic ticket.
      </div>
      <div className="verify-input-container">
        <input
          type="text"
          className="verify-input"
          onChange={(e) => {
            setUserArress(e.target.value);
            setShowTokens(false);
          }}
          placeholder="Enter Address"
        />
        <div className="verify-font-awesome">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <select
          className="verify-select"
          onChange={(e) => {
            setEvent(e.target.value);
          }}
        >
          <option>Events</option>
          <option value="nodeMinerWahaj">Node Miner Wahaj</option>
          <option value="General Admission Saturday">
            General Admission Saturday
          </option>
          <option value="VIP Access">VIP Access</option>
        </select>
        <button className="verify-btn" onClick={onVerify}>
          Verify
        </button>
      </div>

      {ShowTokens && (
        <div className="balance-of-user">
          This user has {TokenAmount} Ticket
        </div>
      )}
      <img src={VerifyImg} className="VerifyImgBackground" alt="verify.png" />
    </div>
  );
};

export default Verify;
