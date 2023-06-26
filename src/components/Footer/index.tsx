import logo from "@/assets/brand/logo.png";
import { Facebook, Instagram, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import colors from "tailwindcss/colors";
import GridItemContainer from "./GridItemContainer";
import { websiteRoadMap } from "./WebsiteRoadMap";

function Footer() {
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
      <div className="mb-6 flex flex-col items-center justify-center gap-1 md:mb-0">
        <Image src={logo} alt="logo" width={270} height={57} />
        <span className="text-sm font-medium text-zinc-500 lg:text-base">
          Transformando visitantes em clientes.
        </span>
      </div>
      <div className="grid w-full grid-flow-row grid-cols-1 px-10 md:grid-cols-4">
        {websiteRoadMap.map((item, index) =>
          item.title !== "Siga a Leadster" ? (
            <GridItemContainer
              title={item.title}
              key={`${index}-${item.title}`}
            >
              <ul className="mt-2 flex flex-col gap-2 md:mt-10 md:gap-5">
                {item.links.map((link, index) => (
                  <li key={`${index}-${link.title}`}>
                    <a
                      className="text-sm font-medium text-zinc-500 hover:text-zinc-600 lg:text-base"
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </GridItemContainer>
          ) : (
            <GridItemContainer
              title={item.title}
              key={`${index}-${item.title}`}
            >
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
                  <span className="text-sm font-medium text-zinc-500 lg:text-base">
                    {item.email}
                  </span>
                </div>
                <div className="flex flex-col flex-wrap gap-1 md:flex-row">
                  <span className="text-sm font-medium text-zinc-600 lg:text-base">
                    Telefone:
                  </span>
                  <span className="text-sm font-medium text-zinc-500 lg:text-base">
                    {item.phone}
                  </span>
                </div>
              </div>
            </GridItemContainer>
          )
        )}
      </div>
      <div className="grid w-full grid-cols-1 gap-4 px-10 md:gap-0 lg:grid-flow-row lg:grid-cols-2">
        <div className="flex h-10 w-full items-center justify-center ">
          <span className="text-center text-sm font-medium text-zinc-500">
            Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
            <a
              className="text-primary-blue-300 transition-all hover:text-primary-blue-400"
              href="https://leadster.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Leadster
            </a>
          </span>
        </div>
        <div className="-order-1 flex h-10 w-full items-center justify-center lg:order-2">
          <span className="text-center text-sm font-medium text-zinc-500">
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
