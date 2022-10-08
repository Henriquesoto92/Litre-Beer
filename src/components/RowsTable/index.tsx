import { ActionIcon } from "@mantine/core";
import { IconTrashX } from "@tabler/icons";
import { TableProps } from "../../@types";

interface RowsTableProps {
  tableData: TableProps;
  onDeleteRow: (index: number) => void;
  index: number;
}

const RowsTable = ({ tableData, onDeleteRow, index }: RowsTableProps) => {
  console.log(tableData, "receive table data");
  return (
    <tr>
      <td>{tableData.name}</td>
      <td>
        {tableData.mls}
        {"  "}mls
      </td>
      <td>{tableData.amount}</td>
      <td>
        {new Intl.NumberFormat("pt-BR", {
          currency: "BRL",
          style: "currency",
        }).format(tableData?.price)}
      </td>
      <td>
        {tableData.desc}
        {"  "}%
      </td>
      <td>
        {new Intl.NumberFormat("pt-BR", {
          currency: "BRL",
          style: "currency",
        }).format(tableData?.total)}
      </td>
      <td>
        <ActionIcon
          color="yellow"
          variant="transparent"
          id={index.toString()}
          onClick={(e: any) => {
            console.log(e.target.closest("button").id);
            onDeleteRow(Number(e.target.closest("button").id));
          }}
        >
          <IconTrashX size={26} />
        </ActionIcon>
      </td>
    </tr>
  );
};

export default RowsTable;
