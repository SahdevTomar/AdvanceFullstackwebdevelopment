import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold dark:text-white">EduStream</h1>
      <DarkModeToggle />
    </nav>
  );
}
