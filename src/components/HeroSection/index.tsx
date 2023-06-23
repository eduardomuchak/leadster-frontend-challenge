import thumbnail from "../../assets/misc/thumbnail.png";
import CardsContainer from "../CardsContainer";
import VideoCardModal from "../VideoCardModal";
import Button from "../ui/Button";
import Select from "../ui/Select";

function HeroSection() {
  const options = [
    { value: 1, label: "Data de Publicação" },
    { value: 2, label: "Nome da Agência" },
    { value: 3, label: "Nome do Chatbot" },
  ];

  const cards = [
    {
      id: 1,
      thumbnail: thumbnail,
      video: "https://via.placeholder.com/360x290",
      title: "Como aumentar sua Geração de Leads feat. Traktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.",
      assets: [
        {
          type: "spreadsheet",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "document",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "presentation",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "folder",
          url: "https://via.placeholder.com/360x290",
        },
      ],
    },
    {
      id: 1,
      thumbnail: thumbnail,
      video: "https://via.placeholder.com/360x290",
      title: "Como aumentar sua Geração de Leads feat. Traktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.",
      assets: [
        {
          type: "spreadsheet",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "document",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "presentation",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "folder",
          url: "https://via.placeholder.com/360x290",
        },
      ],
    },
    {
      id: 2,
      thumbnail: thumbnail,
      video: "https://via.placeholder.com/360x290",
      title: "Como aumentar sua Geração de Leads feat. Traktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.",
      assets: [
        {
          type: "spreadsheet",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "document",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "presentation",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "folder",
          url: "https://via.placeholder.com/360x290",
        },
      ],
    },
    {
      id: 3,
      thumbnail: thumbnail,
      video: "https://via.placeholder.com/360x290",
      title: "Como aumentar sua Geração de Leads feat. Traktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.",
      assets: [
        {
          type: "spreadsheet",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "document",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "presentation",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "folder",
          url: "https://via.placeholder.com/360x290",
        },
      ],
    },
    {
      id: 4,
      thumbnail: thumbnail,
      video: "https://via.placeholder.com/360x290",
      title: "Como aumentar sua Geração de Leads feat. Traktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.",
      assets: [
        {
          type: "spreadsheet",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "document",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "presentation",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "folder",
          url: "https://via.placeholder.com/360x290",
        },
      ],
    },
    {
      id: 5,
      thumbnail: thumbnail,
      video: "https://via.placeholder.com/360x290",
      title: "Como aumentar sua Geração de Leads feat. Traktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.",
      assets: [
        {
          type: "spreadsheet",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "document",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "presentation",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "folder",
          url: "https://via.placeholder.com/360x290",
        },
      ],
    },
    {
      id: 6,
      thumbnail: thumbnail,
      video: "https://via.placeholder.com/360x290",
      title: "Como aumentar sua Geração de Leads feat. Traktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.",
      assets: [
        {
          type: "spreadsheet",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "document",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "presentation",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "folder",
          url: "https://via.placeholder.com/360x290",
        },
      ],
    },
    {
      id: 7,
      thumbnail: thumbnail,
      video: "https://via.placeholder.com/360x290",
      title: "Como aumentar sua Geração de Leads feat. Traktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.",
      assets: [
        {
          type: "spreadsheet",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "document",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "presentation",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "folder",
          url: "https://via.placeholder.com/360x290",
        },
      ],
    },
    {
      id: 8,
      thumbnail: thumbnail,
      video: "https://via.placeholder.com/360x290",
      title: "Como aumentar sua Geração de Leads feat. Traktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.",
      assets: [
        {
          type: "spreadsheet",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "document",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "presentation",
          url: "https://via.placeholder.com/360x290",
        },
        {
          type: "folder",
          url: "https://via.placeholder.com/360x290",
        },
      ],
    },
  ];

  return (
    <section className="bg-red flex w-full bg-white px-5 py-6 md:py-12 lg:py-[90px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between pb-7">
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
        <CardsContainer>
          {cards.map((card) => (
            <VideoCardModal key={card.id} data={card} />
          ))}
        </CardsContainer>
      </div>
    </section>
  );
}

export default HeroSection;
