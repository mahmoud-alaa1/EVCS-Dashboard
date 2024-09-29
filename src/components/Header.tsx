import HeaderNav from "./HeaderNav";
import Path from "./Path";
export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Path />
      <HeaderNav />
    </header>
  );
}
