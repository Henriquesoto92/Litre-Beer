import { ActionIcon } from "@mantine/core";
import { IconTrashX } from "@tabler/icons";
import { TableProps } from "../../@types";

interface RowsTableProps {
  tableData: TableProps[];
  deleteRow: any;
}

const RowsTable = ({ tableData, deleteRow }: RowsTableProps) => {
  return (
    <>
      {tableData.map((item, index) => {
        <tr key={`${item.name}${index}`}>
          <td>{item.name}</td>
          <td>
            {item.mls}
            {"  "}mls
          </td>
          <td>{item.amount}</td>
          <td>
            {new Intl.NumberFormat("pt-BR", {
              currency: "BRL",
              style: "currency",
            }).format(item?.price)}
          </td>
          <td>
            {item.desc}
            {"  "}%
          </td>
          <td>
            {new Intl.NumberFormat("pt-BR", {
              currency: "BRL",
              style: "currency",
            }).format(item?.total)}
          </td>
          <td>
            <ActionIcon
              color="yellow"
              variant="transparent"
              id={index.toString()}
              onClick={(e: any) => {
                console.log(e.target.closest("button").id);
                deleteRow(Number(e.target.closest("button").id));
              }}
            >
              <IconTrashX size={26} />
            </ActionIcon>
          </td>
        </tr>;
      })}
    </>
  );
};

export default RowsTable;
