import HeaderNav from "./HeaderNav";
import Path from "./Path";
export default function Header() {
  return (
    <header className="flex justify-between items-center flex-wrap gap-2">
      <Path />
      <HeaderNav />
    </header>
  );
}
