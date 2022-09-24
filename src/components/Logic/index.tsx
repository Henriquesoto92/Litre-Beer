import { useEffect, useState } from "react";

const data = [
  {
    name: "Heinken 350",
    pack: true,
    qtdpack: 12,
    mls: 350,
    price: 35,
    desc: 1,
  },
  {
    name: "Heinken 600",
    pack: false,
    qtdpack: 0,
    mls: 600,
    price: 8,
    desc: 0,
  },
  {
    name: "stella 600",
    pack: false,
    qtdpack: 0,
    mls: 600,
    price: 10,
    desc: 10,
  },
];

const Logic = () => {
  const [resultPrice, setResultPrice] = useState<number>(0);
  const [resultPrice2, setResultPrice2] = useState<number>(0);
  const [resultPrice3, setResultPrice3] = useState<number>(0);

  console.log(resultPrice);

  const name = "heineken 350";
  const pack = true;
  const qtdPack = 12;
  const mls = 350;
  const price = 43.08;
  const desc = 5;

  const handleOnChange = () => {
    function calcPrice() {
      if (pack && desc > 0) {
        return (price - price * (desc / 100)) / qtdPack;
      } else if (pack && desc < 1) {
        return price / qtdPack;
      } else if (!pack && desc > 0) {
        return price - price * (desc / 100);
      } else {
        return price;
      }
    }

    function valueMLS() {
      return (calcPrice() / mls) * 1000;
    }

    console.log(valueMLS(), "valueMLS");
    setResultPrice(valueMLS());
  };

  return (
    <>
      <button className="text-5xl" onClick={handleOnChange}>
        o valor do litro da {name} é de R${resultPrice}
      </button>
    </>
  );
};

export default Logic;
