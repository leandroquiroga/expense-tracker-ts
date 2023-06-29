import Swal from "sweetalert2";
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
  logo_delete_card,
} from "./TransactionList.css";

import logoDelte from '../../assets/delete.svg'

import "@sandstreamdev/react-swipeable-list/dist/styles.css";

const TransactionList = () => {
  const { transactions, handleDeleteTransaction } = useGlobalState();


  const deleteCard = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteTransaction(id)
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  return (
    <article className={`${container_card}`}>
      {transactions.map((transaction) => (
        <SwipeableList key={transaction.id} scrollStartThreshold={90}>
          <SwipeableListItem
            swipeLeft={{
              content: (
                <img
                  src={logoDelte}
                  alt="delete"
                  className={`${logo_delete_card}`}
                />
              ),
              action: () => deleteCard(transaction.id!),
              actionAnimation: ActionAnimations.RETURN,
            }}
            swipeRight={{
              content: (
                <img
                  src={logoDelte}
                  alt="delete"
                  className={`${logo_delete_card}`}
                />
              ),
              action: () => deleteCard(transaction.id!),
              actionAnimation: ActionAnimations.RETURN,
            }}
          >
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
