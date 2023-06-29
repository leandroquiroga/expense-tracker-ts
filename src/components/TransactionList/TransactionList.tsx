import {
  SwipeableList,
  SwipeableListItem,
  ActionAnimations
} from "@sandstreamdev/react-swipeable-list";

import { useGlobalState } from "../../hooks/useGlobalState";
import { amountNegative } from "../../utilities";
import {
  card,
  card_amount_decrement,
  card_amount_increment,
  card_description,
  card_optional,
  container_card,
} from "./TransactionList.css";

import logoDelte from '../../assets/delete.svg'

import "@sandstreamdev/react-swipeable-list/dist/styles.css";

const TransactionList = () => {
  const { transactions, handleDeleteTransaction } = useGlobalState();

  return (
    <article className={`${container_card}`}>
      {transactions.map((transaction) => (
        <SwipeableList 
          key={transaction.id}
        >
          <SwipeableListItem
            swipeLeft={{
              content: <img src={logoDelte} alt="delete" />,
              action: () => handleDeleteTransaction(transaction.id!),
              actionAnimation: ActionAnimations.REMOVE,
            }}
            swipeRight={{
              content: <img src={logoDelte} alt="delete" />,
              action: () => handleDeleteTransaction(transaction.id!),
              actionAnimation: ActionAnimations.REMOVE,
            }}>
            <article className={`${card}`}>
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
              </div>
            </article>
          </SwipeableListItem>
        </SwipeableList>
      ))}
    </article>
  );
};

export default TransactionList;
