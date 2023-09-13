import { useEffect, useState } from "react";
import CryptoItem from "./crypto";
import "./index.css";

const CryptocurrencyTask = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCryptoList();
  }, []);

  const getCryptoList = () => {
    setIsLoading(true);
    const url = "https://apis.ccbp.in/crypto-currency-converter";
    const options = {
      method: "GET",
    };

    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setCryptoList(jsonData);
        setIsLoading(false);
      });
  };

  const displayLoaderOrContent = () => {
    if (isLoading === true) {
      return (
        <div className="crypto-loader-container">
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <>
        <h1 className="crypto-main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-main-image"
        />
        <table className="crypto-table">
          <thead>
            <tr className="crypto-table-header-row">
              <th className="crypto-table-header-text-coin">Coin Type</th>
              <th className="crypto-table-header-text-usd">USD</th>
              <th className="crypto-table-header-text-euro">EURO</th>
            </tr>
          </thead>
          <tbody>
            {cryptoList.map((eachItem) => (
              <CryptoItem cryptoDetails={eachItem} key={eachItem.id} />
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return <div className="crypto-bg-container">{displayLoaderOrContent()}</div>;
};

export default CryptocurrencyTask;
