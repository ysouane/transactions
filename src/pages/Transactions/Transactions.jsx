import React, { useState } from "react";
import {
  ACTIONS,
  COLUMNS,
  LOCALIZATION,
  OPTIONS,
  TYPE_OF_ACTIONS,
} from "./TransactionsTableProps";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Table from "../../components/Table";
import "./Transactions.css";

import { ErrorMessage } from "@hookform/error-message";

const Transactions = ({ data, setData }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [typeOfAction, setTypeOfAction] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    reset();
    setShowModal(false);
  };

  const setNewTransactionId = () => {
    const lastId = Number(data[data.length - 1]?.id);
    setValue("id", (lastId + 1).toString());
  };

  const getTransactionValues = (transactionData) => {
    setValue("id", transactionData.id);
    setValue(
      "datetime",
      new Date(transactionData.datetime).toISOString().substr(0, 10)
    );
    setValue("amount", transactionData.amount);
    setValue("type", transactionData.type);
    setValue("mode", transactionData.mode);
    setValue("commentaire", transactionData.commentaire);
  };

  const handleShowModal = (type, transactionData) => {
    if (type === TYPE_OF_ACTIONS.ADD) {
      setNewTransactionId();
      setTypeOfAction("Ajout d'une transaction");
    }

    if (type === TYPE_OF_ACTIONS.EDIT) {
      getTransactionValues(transactionData);
      setTypeOfAction("Modification");
    }

    setShowModal(true);
  };

  const onRemove = (id) => {
    setData(data.filter((transac) => transac.id !== id));
  };

  const onSubmit = (values) => {
    if (typeOfAction === TYPE_OF_ACTIONS.ADD) {
      setData((dataJson) => [...dataJson, values]);
    }

    if (typeOfAction === TYPE_OF_ACTIONS.EDIT) {
      const transactionIndex = data.findIndex((obj) => obj.id === values.id);
      let newArr = [...data];
      newArr[transactionIndex] = values;
      setData(newArr);
    }

    handleCloseModal();
  };

  const handleUserKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      <Table
        title="Liste des transactions"
        data={data}
        columns={COLUMNS}
        actions={ACTIONS(handleShowModal, onRemove)}
        options={OPTIONS(data.length)}
        localization={LOCALIZATION}
      />

      <Modal centered show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{typeOfAction}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="TransactionsForm">
            <input {...register("id", { required: true })} hidden />

            <div className="TransactionsForm">
              <label htmlFor="datePicker">
                Date <span className="TransactionsForm__required">*</span>
              </label>
              <input
                id="datePicker"
                aria-required="true"
                aria-invalid={errors.datetime ? "true" : "false"}
                type="date"
                {...register("datetime", {
                  required: "Veuillez selectionner une date",
                })}
              />
              <ErrorMessage
                className="TransactionsForm__error"
                errors={errors}
                name="datetime"
                as="p"
              />
            </div>

            <div className="TransactionsForm">
              <label htmlFor="Montant">
                Montant <span className="TransactionsForm__required">*</span>
              </label>
              <input
                name="Montant"
                aria-required="true"
                aria-invalid={errors.amount ? "true" : "false"}
                onKeyPress={handleUserKeyPress}
                type="text"
                {...register("amount", {
                  required: "Veuillez saisir un montant",
                })}
              />
              <ErrorMessage
                className="TransactionsForm__error"
                errors={errors}
                name="amount"
                as="p"
              />
            </div>

            <div className="TransactionsForm">
              <label htmlFor="Type">Type</label>
              <select name="Type" {...register("type")}>
                <option value="crédit">Crédit</option>
                <option value="débit">Débit</option>
              </select>
            </div>

            <div className="TransactionsForm">
              <label htmlFor="Mode">Mode</label>
              <input
                name="Mode"
                type="text"
                onKeyPress={handleUserKeyPress}
                {...register("mode")}
              />
            </div>

            <div className="TransactionsForm">
              <label htmlFor="Commentaire">Commentaire</label>
              <input
                name="Commentaire"
                type="text"
                onKeyPress={handleUserKeyPress}
                {...register("commentaire")}
              />
            </div>

            <div className="TransactionsForm__required">
              <span>*</span> Champs obligatoires
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            type="submit"
            variant="primary"
            onClick={handleSubmit(onSubmit)}>
            Enregistrer
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Transactions;
