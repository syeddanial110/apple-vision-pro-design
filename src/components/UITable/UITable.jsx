import React from "react";
import DataTable from "react-data-table-component";

const UITable = ({ columns, data, selectableRows, ...props }) => {
  const customStyles = {
    headRow: {
      style: {
        border: "none",
        backgroundColor: "",
        padding: 0,
      },
    },
    headCells: {
      style: {
        padding: 0,
        color: "#fff !important",
        display: "flex",
        justifyContent: "flex-start",
        "&:nth-child(1)": { paddingLeft: "8px" },

        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        padding: 0,
        display: "flex",
        fontSize: "15px",
        justifyContent: "flex-start",
        "&:nth-child(1)": { paddingLeft: "8px" },

        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        flex: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
    rows: {
      style: {
        // "&:nth-child": {
        //   borderTop: "1px solid rgba(0, 0, 0, .12)",
        //   marginTop: "8px",
        // },
        minHeight: "72px", // override the row height
        width: "100%",
      },
    },
    table: {
      style: {
        // border: "1px solid #C4C4C4",
        borderRadius: "10px",
        padding: "10px",
        width: "auto !important",
      },
    },
    // pagination: { style: { border: "none" } },
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows={selectableRows}
      customStyles={customStyles}
      // pagination={p}
      // subHeaderComponent={subHeaderComponentMemo}
      // subHeader
      // persistTableHead
      // subHeader={subHeaderComponentMemo ?? false}
      {...props}
    />
  );
};

export default UITable;
