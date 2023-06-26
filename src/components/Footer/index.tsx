import logo from "@/assets/brand/logo.png";
import Image from "next/image";

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
                      className="font-medium text-zinc-400 hover:text-zinc-500"
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
              className="w-full bg-red-500 px-2 py-4 md:py-10"
            >
              <span className="font-semibold text-zinc-500">{item.title}</span>
              <ul className="mt-10 flex flex-row gap-5">
                {item.links.map((link, index) => (
                  <li key={`${index}-${link.title}`}>
                    <a
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-400 font-medium text-white hover:bg-zinc-500"
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </footer>
  );
}

export default Footer;
