import { useEffect, useState } from "react";
import { DataProps, TableProps } from "../../@types";

interface LogicProps {
  data: DataProps[];
}

const Logic = ({ data }: LogicProps) => {
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

    console.log(tableData, "datalogic");
  }, [data]);

  return (
    <>
      {tableData.map((item, index) => (
        <p key={`${item.name}${index}`}>
          o valor do litro da {item.name} é de
          {new Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
          }).format(item?.total)}
          , com {item.mls}
          Mls e valor por unidade de {item.price}
        </p>
      ))}
    </>
  );
};

export default Logic;
