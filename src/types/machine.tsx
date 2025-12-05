export type Machine = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image?: string; // ruta opcional de imagen
  power?: string;
  applications?: string[];
  features?: string[];
};
