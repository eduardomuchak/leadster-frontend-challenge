import { Button } from "../ui/Button";
import Select from "../ui/Select";

function HeroSection() {
  const options = [
    { value: 1, label: "Data de Publicação" },
    { value: 2, label: "Nome da Agência" },
    { value: 3, label: "Nome do Chatbot" },
  ];

  return (
    <section className="bg-red flex w-full bg-white px-5 py-6 md:py-12 lg:py-[90px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between border-b-2 border-gray-bd pb-6">
          <div className="flex w-full flex-row items-center gap-3 ">
            <Button>Agências</Button>
            <Button>Chatbot</Button>
            <Button>Marketing Digital</Button>
            <Button>Geração de Leads</Button>
            <Button>Mídia Paga</Button>
          </div>
          <div className="flex min-w-[312px] flex-row items-center gap-3 ">
            <label className="flex min-w-[100px] flex-1 text-base font-semibold">
              Ordenar por
            </label>
            <Select options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
