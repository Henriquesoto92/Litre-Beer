import { Table as TableMantine } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import { DataProps, TableProps } from "../../@types";
import { IconDiscount } from "@tabler/icons";
import RowsTable from "../RowsTable";
import { useCalcPrice } from "../../hooks/useCalcPrice";

interface LogicProps {
  data: DataProps[];
  setArrayTable: React.Dispatch<React.SetStateAction<DataProps[]>>;
}

const Table = ({ data, setArrayTable }: LogicProps) => {
  const { calculedData, handleExcludeById } = useCalcPrice(data);

  const handleDelete = (index: number) => {
    const newArray = handleExcludeById(index, data);
    setArrayTable(newArray);
  };

  return (
    <TableMantine striped highlightOnHover style={{ maxWidth: "320px" }}>
      <thead
        style={{
          background: "#D9D9D9",
          color: "#352F29",
        }}
      >
        <tr>
          <th>Cerveja</th>
          <th>Mls</th>
          <th>Qtd</th>
          <th>R$</th>
          <th>
            <IconDiscount />
          </th>
          <th>R$/L</th>
          <th>{"  "}</th>
        </tr>
      </thead>
      <tbody
        style={{
          color: "#352F29",
        }}
      >
        {calculedData.map((item, index) => (
          <RowsTable
            tableData={item}
            onDeleteRow={handleDelete}
            key={`${item.name}${index}`}
            index={index}
          />
        ))}
      </tbody>
    </TableMantine>
  );
};

export default Table;
