import { AddBox, Edit, DeleteOutline } from "@material-ui/icons";

export const TYPE_OF_ACTIONS = {
  ADD: "Ajout d'une transaction",
  EDIT: "Modification",
  DELETE: "Suppression",
};

export const COLUMNS = [
  {
    title: "Date",
    field: "datetime",
    type: "datetime",
  },
  {
    title: "Type",
    field: "type",
  },
  {
    title: "Mode",
    field: "mode",
  },
  {
    title: "Montant",
    field: "amount",
  },
  {
    title: "Commentaire",
    field: "commentaire",
  },
];

export const ACTIONS = (handleShowModal, remove) => [
  {
    icon: AddBox,
    tooltip: TYPE_OF_ACTIONS.ADD,
    isFreeAction: true,
    onClick: () => {
      handleShowModal(TYPE_OF_ACTIONS.ADD);
    },
  },
  {
    icon: Edit,
    tooltip: TYPE_OF_ACTIONS.EDIT,
    onClick: (event, rowData) => {
      handleShowModal(TYPE_OF_ACTIONS.EDIT, rowData);
    },
  },
  {
    icon: DeleteOutline,
    tooltip: TYPE_OF_ACTIONS.DELETE,
    onClick: (event, rowData) => {
      const formatDatetime = new Date(rowData.datetime).toLocaleDateString(
        "fr-FR"
      );

      const confirmRemove = window.confirm(
        `Etes vous sur de vouloir supprimer la transaction en date du ${formatDatetime} ?`
      );

      if (confirmRemove) {
        remove(rowData.id);
      }
    },
  },
];

export const LOCALIZATION = {
  body: {
    emptyDataSourceMessage: "Pas de transactions à afficher",
  },
  pagination: {
    labelDisplayedRows: "{from}-{to} de {count}",
    labelRowsSelect: "lignes",
    labelRowsPerPage: "lignes par page:",
    firstAriaLabel: "Première page",
    firstTooltip: "Première page",
    previousAriaLabel: "Page précédente",
    previousTooltip: "Page précédente",
    nextAriaLabel: "Page suivante",
    nextTooltip: "Page suivante",
    lastAriaLabel: "Dernière page",
    lastTooltip: "Dernière page",
  },
};

export const OPTIONS = (dataLength) => ({
  actionsColumnIndex: -1,
  pageSizeOptions: [5, 10, 15, dataLength],
});
