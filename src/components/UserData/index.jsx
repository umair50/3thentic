import "./user_data.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

import axios from "axios";
import { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState("");

  const DeleteUser = async (dataa) => {
    const api = axios.create({
      baseURL: "https://railsapplications.herokuapp.com/users/to_delete",
    });
    const datas = {
      id: dataa,
    };
    const resp = await api.post("", datas);
    if (resp.status === 200) {
      collectData();
    }
  };
  const collectData = async () => {
    const authorization = localStorage.getItem("Authorization");
    const api = axios.create({
      baseURL: "https://railsapplications.herokuapp.com/usersupers/all_users",
      headers: { Authorization: authorization },
    });

    const resp = await api.get("");
    if (resp.status === 200) {
      setData(resp.data);
    }
  };
  useEffect(() => {
    collectData();
  }, []);

  return (
    <div className="main-containers">
      <h1>User Information</h1>
      <table className="dataclass">
        <thead>
          <tr>
            <th>Name</th>
            <th>Wallet Address</th>
            <th>Events</th>
            <th>Transfered</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((d, index) => (
              <tr key={index}>
                <td>{d.name}</td>
                <td>{d.wallet_address}</td>
                <td>{d.events}</td>
                <td>
                  {d.is_transfered ? (
                    <span className="sp-trans">
                      {
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="green"
                          size="2x"
                        />
                      }
                    </span>
                  ) : (
                    <button
                      className="btn-btn-transfered"
                      onClick={() => {
                        DeleteUser(d.id);
                      }}
                    >
                      Transfer Now
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Index;
