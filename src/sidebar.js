
/*import React, { useState } from "react";
import { useTable } from "react-table";
import { FaPlus, FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa"; // Import icons

const Sidebar = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [newData, setNewData] = useState({ ds: "", nom: "", prenom: "", datenas: "" });

  const data = React.useMemo(
    () => [
      { ds: "1", nom: "hanaa", prenom: "benchaa", datenas: "  2003-01-23" },
      { ds: "2", nom: "hanane", prenom: "benchaa", datenas: "2000-06-18" },

    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Ds",
        accessor: "ds",
      },
      {
        Header: "Nom",
        accessor: "nom",
      },
      {
        Header: "Prenom",
        accessor: "prenom",
      },
      {
        Header: "DateNas",
        accessor: "datenas",
      },
    ],
    []
  );

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleSave = () => {
    data.push(newData);
    setNewData({ ds: "", nom: "", prenom: "", datenas: "" });
    setIsAdding(false);
  };

  const handleCancel = () => {
    setNewData({ ds: "", nom: "", prenom: "", datenas: "" });
    setIsAdding(false);
  };

  const handleChange = (e, key) => {
    setNewData({
      ...newData,
      [key]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="table-container">
        <table {...getTableProps()} className="data-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
            {isAdding && (
              <tr>
                {columns.map((column) => (
                  <td key={column.id}>
                    <input
                      type="text"
                      value={newData[column.accessor]}
                      onChange={(e) => handleChange(e, column.accessor)}
                      className="input-field"
                    />
                  </td>
                ))}
                <td>
                  <button className="button" onClick={handleSave}>
                    <FaSave /> Enregistrer
                  </button>
                  <button className="button" onClick={handleCancel}>
                    <FaTimes /> Annuler
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {!isAdding && (
        <div className="buttons-container">
          <button className="button" onClick={handleAdd}>
            <FaPlus /> Ajouter
          </button>
          <button className="button">
            <FaTrash /> Supprimer
          </button>
          <button className="button">
            <FaEdit /> Modifier
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;*/


