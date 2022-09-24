import { useState } from "react";
import { dataprops } from "./@types";
import Logic from "./components/Logic";

function App() {
  const [descriptionValue, setDescriptionValue] = useState({
    name: "",
    pack: false,
    qtdpack: 0,
    mls: 0,
    price: 0,
    desc: 0,
  });

  const handleOnChange = (event: any, key: any) => {
    setDescriptionValue({ ...descriptionValue, [key]: event.target.value });
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-[#EAEAEA]">
      <h1 className="text-5xl font-extrabold text-center text-[#352F29]">
        Preço/Litro
      </h1>
      <p className="w-full max-w-xs text-center mt-2.5 font-bold text-2xl text-[#352F29]">
        Calcule de forma facil e rapida o preço do litro da cerveja
      </p>

      <form className="form-control w-full max-w-xs gap-2.5 mt-2.5 p-2.5 bg-[#D9D9D9] rounded-[12px]">
        <div>
          <label className="label">
            <span className="label-text font-bold text-2xl text-[#352F29]">
              Qual a cerveja?
            </span>
          </label>
          <input
            type="text"
            value={descriptionValue.name}
            onChange={(event) => handleOnChange(event, "name")}
            placeholder="Qual a cerveja?"
            className="input input-bordered w-full max-w-xs font-bold text-2xl bg-[#EDF2F7]  border-[1px] border-[#776F69] "
          />
        </div>
        <div className="btn-group p-0 mt-2 bg-[#EDF2F7] border-[1px] border-[#776F69] rounded-btn ">
          <button
            type="button"
            className="btn btn-active w-1/2 bg-yellow"
            onClick={() =>
              setDescriptionValue((pastState) => ({
                ...pastState,
                pack: false,
              }))
            }
          >
            Unidade
          </button>
          <button
            type="button"
            className="btn w-1/2"
            onClick={() =>
              setDescriptionValue((pastState) => ({
                ...pastState,
                pack: true,
              }))
            }
          >
            Pack
          </button>
        </div>
        {descriptionValue.pack && (
          <div>
            <label className="label">
              <span className="label-text font-bold text-2xl text-[#352F29]">
                Qual a quantidade (em unidades)?
              </span>
            </label>
            <input
              type="number"
              value={descriptionValue.qtdpack}
              onChange={(event) => handleOnChange(event, "qtdpack")}
              placeholder="Qual a quantidade (em unidades)?"
              className="input input-bordered w-full max-w-xs font-bold text-2xl bg-[#EDF2F7]  border-[1px] border-[#776F69]"
            />
          </div>
        )}
        <div>
          <label className="label">
            <span className="label-text font-bold text-2xl text-[#352F29]">
              Qual o valor? (pack ou un)
            </span>
          </label>
          <input
            required
            value={descriptionValue.price}
            onChange={(event) => handleOnChange(event, "price")}
            type="number"
            placeholder="Qual o valor? (Pack ou Un)"
            className="input input-bordered w-full max-w-xs font-bold text-2xl bg-[#EDF2F7]  border-[1px] border-[#776F69]"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text font-bold text-2xl text-[#352F29]">
              Quantas Mls da unidade?
            </span>
          </label>
          <input
            type="number"
            value={descriptionValue.mls}
            onChange={(event) => handleOnChange(event, "mls")}
            placeholder="Quantas Mls da unidade?"
            className="input input-bordered w-full max-w-xs font-bold text-2xl bg-[#EDF2F7]  border-[1px] border-[#776F69]"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-bold text-2xl text-[#352F29]">
              Desconto?
            </span>
          </label>
          <input
            type="number"
            value={descriptionValue.desc}
            onChange={(event) => handleOnChange(event, "desc")}
            placeholder="Desconto?"
            className="input input-bordered w-full max-w-xs font-bold text-2xl bg-[#EDF2F7] border-[1px] border-[#776F69]"
          />
        </div>
        <div className="flex gap-5 mt-5 justify-center">
          <button className="btn flex-1 bg-yellow" type="submit">
            Calcular
          </button>
          <button className="btn flex-1 bg-yellow bg-opacity-1" type="reset">
            Apagar
          </button>
        </div>
      </form>
      <Logic />
    </div>
  );
}

export default App;
