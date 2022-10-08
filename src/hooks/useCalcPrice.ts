import { useMemo } from "react";
import { DataProps } from "../@types";

const calcPrice = (item: DataProps) => {
  const { amount, price, desc } = item;

  if (amount > 0) {
    if (desc > 0) return (price - price * (desc / 100)) / amount;
    return price / amount;
  }
  if (desc > 0) return price - price * (desc / 100);
  return price;
};

const calcMLS = (item: DataProps) => (calcPrice(item) / item.mls) * 1000;

const handleExcludeById = (id: number, data: DataProps[]) =>
  data.filter((_, index) => index != id);

export const useCalcPrice = (data: DataProps[]) => {
  const calculedData = useMemo(
    () => data.map((map) => ({ ...map, total: calcMLS(map) })),
    [data]
  );

  return {
    calculedData,
    handleExcludeById,
  };
};
