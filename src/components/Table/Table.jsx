import React from "react";
import MaterialTable from "@material-table/core";

const Table = ({ title, data, columns, actions, options, localization }) => {
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      actions={actions}
      options={options}
      localization={localization}
    />
  );
};

export default Table;
