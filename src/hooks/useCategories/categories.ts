export type AllCategoryNames =
  | "Agências"
  | "Chatbot"
  | "Marketing Digital"
  | "Geração de Leads"
  | "Mídia Paga";

interface Category {
  id: number;
  name: AllCategoryNames;
  isActive: boolean;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Agências",
    isActive: false,
  },
  {
    id: 2,
    name: "Chatbot",
    isActive: false,
  },
  {
    id: 3,
    name: "Marketing Digital",
    isActive: false,
  },
  {
    id: 4,
    name: "Geração de Leads",
    isActive: false,
  },
  {
    id: 5,
    name: "Mídia Paga",
    isActive: false,
  },
];
