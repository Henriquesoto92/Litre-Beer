import { useState } from "react";
import { DataProps, TableProps } from "./@types";
import Logic from "./components/Logic";
import { useForm } from "react-hook-form";
import {
  Button,
  Group,
  NumberInput,
  SegmentedControl,
  TextInput,
} from "@mantine/core";

function App() {
  const [pack, setPack] = useState<boolean>(false);
  const [pack1, setPack1] = useState<string>("unit");
  const [arrayTable, setArrayTable] = useState<DataProps[]>([]);
  const { register, handleSubmit, resetField, reset } = useForm<DataProps>({
    defaultValues: {
      amount: 0,
      desc: 0,
      mls: 0,
      name: "",
      price: 0,
    },
  });
  console.log(arrayTable);

  const handleFormSubmit = (data: DataProps) => {
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

        <TextInput
          placeholder="Nome da cerveja"
          label="Qual a cerveja?"
          withAsterisk
          {...register("name")}
          radius="md"
        />

        {/* TEM PACK */}
        <SegmentedControl
          value={pack1}
          onChange={setPack1}
          data={[
            { label: "Unidade", value: "unit" },
            { label: "Pack", value: "pack" },
          ]}
          color="yellow"
          radius={8}
          transitionDuration={500}
          transitionTimingFunction="linear"
          style={{ border: "1px solid gray" }}
        />

        {/* QTD DO PACK */}
        {pack1 === "pack" && (
          <TextInput
            placeholder="Quantas unidades do pack?"
            label="Quantas unidades do pack?"
            withAsterisk
            {...register("amount", {
              valueAsNumber: true,
              required: true,
              min: 1,
            })}
            radius="md"
          />
        )}

        {/* PREÇO */}
        <TextInput
          placeholder="Qual o valor?"
          label="Qual o valor?"
          withAsterisk
          {...register("price", {
            valueAsNumber: true,
            required: true,
            min: 1,
          })}
          step={0.01}
          radius="md"
        />

        {/* MLS */}
        <TextInput
          placeholder="Mls"
          label="Quantas Mls da unidade?"
          withAsterisk
          {...register("mls", {
            valueAsNumber: true,
            required: true,
            min: 1,
          })}
          radius="md"
        />

        {/* DESCONTO */}
        <TextInput
          defaultValue={0}
          placeholder="%"
          label="Desconto?"
          withAsterisk
          {...register("desc", {
            valueAsNumber: true,
            required: true,
            min: 1,
            max: 100,
          })}
          radius="md"
        />

        {/* BOTÕES */}
        <Group grow>
          <Button
            variant="filled"
            color="yellow"
            type="submit"
            radius="md"
            size="md"
          >
            Calcular
          </Button>
          <Button
            variant="outline"
            color="yellow"
            radius="md"
            onClick={() => reset()}
            size="md"
          >
            Apagar
          </Button>
        </Group>
      </form>
      <Button
        variant="filled"
        color="yellow"
        radius="md"
        size="md"
        onClick={() => resetResults()}
      >
        resetar resultados
      </Button>

      <Logic data={arrayTable} />
    </div>
  );
}
export default App;
