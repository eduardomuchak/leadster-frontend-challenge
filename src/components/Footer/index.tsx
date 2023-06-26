import logo from "@/assets/brand/logo.png";
import { Facebook, Instagram, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import colors from "tailwindcss/colors";

function Footer() {
  const websiteRoadMap = [
    {
      title: "Links principais",
      links: [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Ferramenta",
          href: "/",
        },
        {
          title: "Preços",
          href: "/",
        },
        {
          title: "Contato",
          href: "/",
        },
      ],
    },
    {
      title: "Cases",
      links: [
        {
          title: "Geração de Leads B2B",
          href: "/",
        },
        {
          title: "Geração de Leads em Software",
          href: "/",
        },
        {
          title: "Geração de Leads em Imobiliária",
          href: "/",
        },
        {
          title: "Cases de Sucesso",
          href: "/",
        },
      ],
    },
    {
      title: "Materiais",
      links: [
        {
          title: "Blog",
          href: "/",
        },
        {
          title: "Parceria com Agências",
          href: "/",
        },
        {
          title: "Guia Definitivo do Marketing",
          href: "/",
        },
        {
          title: "Materiais Gratuitos",
          href: "/",
        },
      ],
    },
    {
      title: "Siga a Leadster",
      links: [
        {
          title: "Linkedin",
          href: "https://www.linkedin.com/company/leadster-platform",
        },
        {
          title: "Facebook",
          href: "https://www.facebook.com/leadsterplatform",
        },
        {
          title: "Instagram",
          href: "https://www.instagram.com/leadster.com.br",
        },
      ],
      email: "contato@leadster.com.br",
      phone: "(41) 98828-9851",
    },
  ];

  const handleIcon = (title: string) => {
    switch (title) {
      case "Facebook":
        return (
          <Facebook
            size={20}
            color={colors.zinc[400]}
            strokeWidth={1}
            fill={colors.zinc[400]}
          />
        );
      case "Linkedin":
        return (
          <LinkedinIcon
            size={20}
            color={colors.zinc[400]}
            strokeWidth={1}
            fill={colors.zinc[400]}
          />
        );
      case "Instagram":
        return <Instagram size={20} color={colors.zinc[400]} />;
      default:
        return null;
    }
  };

  return (
    <footer className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center py-10">
      <div className="mb-6 flex flex-col gap-1 md:mb-0">
        <Image src={logo} alt="logo" width={270} height={57} />
        <span className="text-zinc-600">
          Transformando visitantes em clientes.
        </span>
      </div>
      <div className="grid w-full grid-flow-row grid-cols-1 px-10 md:grid-cols-4">
        {websiteRoadMap.map((item, index) =>
          item.title !== "Siga a Leadster" ? (
            <div
              key={`${index}-${item.title}`}
              className="w-full px-2 py-4 md:py-10"
            >
              <span className="font-semibold text-zinc-500">{item.title}</span>
              <ul className="mt-10 flex flex-col gap-5">
                {item.links.map((link, index) => (
                  <li key={`${index}-${link.title}`}>
                    <a
                      className="text-sm font-medium text-zinc-400 hover:text-zinc-500 lg:text-base"
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div
              key={`${index}-${item.title}`}
              className="w-full px-2 py-4 md:py-10"
            >
              <span className="font-semibold text-zinc-500">{item.title}</span>
              <ul className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-5">
                {item.links.map((link, index) => (
                  <li key={`${index}-${link.title}`}>
                    <a
                      className="flex items-center justify-center rounded-full bg-zinc-50 p-3.5 text-zinc-500 hover:bg-zinc-100"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {handleIcon(link.title)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-5">
                <div className="flex flex-col flex-wrap gap-1 md:flex-row">
                  <span className="text-sm font-medium text-zinc-600 lg:text-base">
                    E-mail:
                  </span>
                  <span className="text-sm font-medium text-zinc-400 lg:text-base">
                    {item.email}
                  </span>
                </div>
                <div className="flex flex-col flex-wrap gap-1 md:flex-row">
                  <span className="text-sm font-medium text-zinc-600 lg:text-base">
                    Telefone:
                  </span>
                  <span className="text-sm font-medium text-zinc-400 lg:text-base">
                    {item.phone}
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </footer>
  );
}

export default Footer;
