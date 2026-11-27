import { icons, type LucideProps } from "lucide-react";

/**
 * Ícone pelo nome. Lista completa em https://lucide.dev/icons
 * (use o nome em PascalCase, ex.: "SolarPanel", "Ruler", "Dumbbell").
 */
export function Icon({ name, ...props }: { name?: string } & LucideProps) {
  const Cmp = (name && icons[name as keyof typeof icons]) || icons.Check;
  return <Cmp aria-hidden {...props} />;
}
