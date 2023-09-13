import "./index.css";

const CryptoItem = (props) => {
  const { cryptoDetails } = props;
  const { currency_name, usd_value, euro_value, currency_logo } = cryptoDetails;

  return (
    <tr className="crypto-table-data-row">
      <td className="crypto-table-data-row-coin">
        <img src={currency_logo} alt={currency_name} className="crypto-logo" />
        <p className="crypto-currency-name">{currency_name}</p>
      </td>
      <td className="crypto-table-data-usd">{usd_value}</td>
      <td className="crypto-table-data-euro">{euro_value}</td>
    </tr>
  );
};

export default CryptoItem;
