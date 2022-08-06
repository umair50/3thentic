import React, { useState } from "react";
import "./index.css";
import { useToasts } from "react-toast-notifications";
import contract from "../../ethereum/collection";
import web3 from "../../ethereum/web3";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Transfer = ({ address, setAddress }) => {
  const { addToast } = useToasts();
  const [RecipientAddress, setRecipientAddress] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Loading, setLoading] = useState(false);

  const [events, setEvent] = useState("");

  const TransferNFT = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (RecipientAddress === "") {
        addToast(`Recipient Address Cannot be empty`, {
          appearance: "error",
          autoDismiss: true,
        });
        return;
      }
      if (events === "") {
        addToast("Events Cannot be Empty", {
          appearance: "error",
          autoDismiss: true,
        });
        return;
      }

      if (parseInt(Quantity) < 1) {
        addToast(`Quantity must be greator than 0`, {
          appearance: "error",
          autoDismiss: true,
        });
        return;
      }
      let userAddress = address;
      if (!userAddress) {
        const accounts = await web3.eth.requestAccounts();
        userAddress = accounts[0];
        setAddress(accounts[0]);
      }
      alert(userAddress);
      alert(RecipientAddress);
      alert(0);
      alert(Quantity);
      await contract.methods
        .safeTransferFrom(
          userAddress,
          RecipientAddress,
          0,
          parseInt(Quantity),
          "0x6d6168616d000000000000000000000000000000000000000000000000000000"
        )
        .send({
          from: userAddress,
        });
      addToast("Token Successfully Transfered", {
        appearance: "success",
        autoDismiss: false,
      });
    } catch (error) {
      addToast(error.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    setLoading(false);
  };
  return (
    <div className="transfer-container">
      <div className="trasnfer-header">Transfer Your NFT</div>
      <div className="transfer-content-container">
        <div className="transfer-text">
          If you are the ticket owner then you will transfer the NFT with the
          ticket when you sell it to the buyer. Enter the wallet address of the
          buyer and enter the quantity as 1.
        </div>
        {Loading ? (
          <div className={`Loader-Text ${!Loading && "visible-div"} `}>
            <Loader
              type="BallTriangle"
              color="#ff8b3d"
              height={80}
              width={80}
            />
            <span className="LoadingText"> Awaiting Approval </span>
          </div>
        ) : (
          <div className="transfer-input-container">
            <input
              type="text"
              className="transfer-input"
              placeholder="Enter Recipient Address"
              onChange={(e) => setRecipientAddress(e.target.value)}
            />
            <input
              type="text"
              className="transfer-input"
              placeholder="Enter Quantity to Transfer"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <div className="transfer-font-awesome-icon">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>

            <select
              className="transfer-select"
              onChange={(e) => {
                setEvent(e.target.value);
              }}
            >
              <option>Events</option>
              <option value="General Admission Friday">
                General Admission Friday
              </option>
              <option value="General Admission Saturday">
                General Admission Saturday
              </option>
              <option value="VIP Access">VIP Access</option>
            </select>
            <button className="transfer-btn" onClick={TransferNFT}>
              Transfer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transfer;
