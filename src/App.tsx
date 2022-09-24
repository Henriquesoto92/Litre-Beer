import { useState } from "react";
import { dataProps } from "./@types";
import Logic from "./components/Logic";
import { useForm } from "react-hook-form";

function App() {
  const [pack, setPack] = useState<boolean>(false);
  const [arrayTable, setArrayTable] = useState<dataProps[]>([]);
  const { register, handleSubmit, resetField, reset } = useForm<dataProps>({
    defaultValues: {
      amount: 0,
      desc: 0,
      mls: 0,
      name: "",
      price: 0,
    },
  });

  console.log(arrayTable);

  const handleFormSubmit = (data: dataProps) => {
    setArrayTable((prev) => [...prev, data]);
    reset();
  };

  const resetResults = () => {
    setArrayTable([]);
  };

  return (
    <div className="flex flex-col items-center justify pt-10 min-h-screen bg-[#EAEAEA]">
      <h1 className="text-5xl font-extrabold text-center text-[#352F29]">
        Preço/Litro
      </h1>
      <p className="w-full max-w-xs text-center mt-2.5 font-bold text-2xl text-[#352F29]">
        Calcule de forma facil e rapida o preço do litro da cerveja
      </p>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="form-control w-full max-w-xs gap-2.5 mt-2.5 p-2.5 bg-[#D9D9D9] rounded-[12px]"
      >
        {/* NOME */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-2xl text-[#352F29]">
              Qual a cerveja?
            </span>
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Qual a cerveja?"
            className="input input-bordered w-full max-w-xs font-bold text-2xl bg-[#EDF2F7]  border-[1px] border-[#776F69] "
          />
        </div>

        {/* TEM PACK */}
        <div className="btn-group p-0 mt-2 bg-[#EDF2F7] border-[1px] border-[#776F69] rounded-btn ">
          <button
            type="button"
            className="btn btn-active w-1/2 bg-yellow"
            onClick={() => {
              resetField("amount");
              setPack(false);
            }}
          >
            Unidade
          </button>
          <button
            type="button"
            className="btn w-1/2"
            onClick={() => {
              setPack(true);
            }}
          >
            Pack
          </button>
        </div>

        {/* QTD DO PACK */}
        {pack && (
          <div>
            <label className="label">
              <span className="label-text font-bold text-2xl text-[#352F29]">
                Qual a quantidade (em unidades)?
              </span>
            </label>
            <input
              defaultValue={0}
              required
              type="number"
              {...register("amount", {
                valueAsNumber: true,
              })}
              placeholder="Qual a quantidade (em unidades)?"
              className="input input-bordered w-full max-w-xs font-bold text-2xl bg-[#EDF2F7]  border-[1px] border-[#776F69]"
            />
          </div>
        )}

        {/* PREÇO */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-2xl text-[#352F29]">
              Qual o valor?
            </span>
          </label>
          <input
            min={1}
            required
            step={0.01}
            {...register("price", { valueAsNumber: true })}
            type="number"
            placeholder="Qual o valor?"
            className="input input-bordered w-full max-w-xs font-bold text-2xl bg-[#EDF2F7]  border-[1px] border-[#776F69]"
          />
        </div>

        {/* MLS */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-2xl text-[#352F29]">
              Quantas Mls da unidade?
            </span>
          </label>
          <input
            min={1}
            required
            type="number"
            {...register("mls", { valueAsNumber: true })}
            placeholder="Quantas Mls da unidade?"
            className="input input-bordered w-full max-w-xs font-bold text-2xl bg-[#EDF2F7]  border-[1px] border-[#776F69]"
          />
        </div>

        {/* DESCONTO */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-2xl text-[#352F29]">
              Desconto?
            </span>
          </label>
          <input
            min={0}
            max={100}
            type="number"
            {...register("desc", { valueAsNumber: true })}
            placeholder="Desconto?"
            className="input input-bordered w-full max-w-xs font-bold text-2xl bg-[#EDF2F7] border-[1px] border-[#776F69]"
          />
        </div>

        {/* BOTÕES */}
        <div className="flex gap-5 mt-5 justify-center">
          <button className="btn flex-1 bg-yellow" type="submit">
            Calcular
          </button>
          <button
            className="btn flex-1 bg-yellow bg-opacity-1"
            onClick={() => reset()}
          >
            Apagar
          </button>
        </div>
      </form>
      <button
        className="btn flex-1 bg-yellow bg-opacity-1"
        onClick={() => resetResults()}
      >
        resetar resultados
      </button>

      <Logic data={arrayTable} />
    </div>
  );
}

export default App;
