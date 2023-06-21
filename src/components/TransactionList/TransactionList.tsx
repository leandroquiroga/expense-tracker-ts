import { useGlobalState } from "../../hooks/useGlobalState";
import { amountNegative } from "../../utilities";
import { Button } from "../Form/Button";
import { button_close, card, card_amount_decrement, card_amount_increment, card_description, card_optional, container_card } from "./TransactionList.css";

const TransactionList = () => {
  const { transactions, handleDeleteTransaction } = useGlobalState();
  
  return (
    <article className={`${container_card}`}>
      {transactions.map((transaction) => (
        <article key={transaction.id} className={`${card}`}>
          {(amountNegative(transaction.mount))}
          <div className={`${card_description}`}>
            <h1>{transaction.description}</h1>
            <small>{transaction.options}</small>
          </div>
          <div className={`${card_optional}`}>
            <p
              className={`${
                amountNegative(transaction.mount)
                  ? `${card_amount_decrement}`
                  : `${card_amount_increment}`
              }`}>
              $ {transaction.mount}
            </p>
            <Button
              value="x"
              type="button"
              style={`${button_close}`}
              action={() => handleDeleteTransaction(transaction.id!)}
            />
          </div>
        </article>
      ))}
    </article>
  );
};

export default TransactionList;
