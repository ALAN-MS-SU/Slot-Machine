import { Build } from "@/Components/Machine/Build/Build";
import { Menu } from "@/Components/Menu/Menu";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center">
      <Menu />
      <Build />
    </div>
  );
}
