import { Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { DataProps, TableProps } from "../../@types";
import { IconDiscount } from "@tabler/icons";
import RowsTable from "./Rows";

interface LogicProps {
  data: DataProps[];
  setArrayTable: React.Dispatch<React.SetStateAction<DataProps[]>>;
}

const Logic = ({ data, setArrayTable }: LogicProps) => {
  const [tableData, setTableData] = useState<TableProps[]>([] as TableProps[]);

  useEffect(() => {
    function calcPrice(item: DataProps) {
      // se tem pack "amout maior que 0"
      if (item.amount > 0) {
        //se tem desconto e o desconto for maior que 0?
        if (item.desc > 0) {
          return (item.price - item.price * (item.desc / 100)) / item.amount;
          // se não ele vai pagar o valor sem desconto multiplicado pela quantidade de packs
        } else {
          return item.price / item.amount;
        }
        //se é unidade
      } else {
        // se é unidade e tem desconto
        if (item.desc > 0) {
          return item.price - item.price * (item.desc / 100);
          // se é unidade sem desconto
        } else {
          return item.price;
        }
      }
    }

    function valueMLS(item: DataProps) {
      return (calcPrice(item) / item.mls) * 1000;
    }

    setTableData(
      data.map((map) => {
        return { ...map, total: valueMLS(map) };
      })
    );
  }, [data]);

  const deleteRow = (idItem: number) => {
    const tableDataFiltered = tableData.filter((item, index) => {
      if (index != idItem) {
        return item;
      }
    });
    setArrayTable(tableDataFiltered);
    console.log(tableDataFiltered);
  };

  return (
    <Table striped highlightOnHover style={{ maxWidth: "320px" }}>
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
        <RowsTable tableData={tableData} deleteRow={deleteRow} />
      </tbody>
    </Table>
  );
};

export default Logic;
