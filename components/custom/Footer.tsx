import { Linkedin, X, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex justify-around text-sm py-16 bg-gray-300 dark:bg-gray-600 ">
      <div className="">
        <ul>
          <li>About Us</li>
          <li>Copyright @ 2024</li>
          <li>
            Developed by{" "}
            <a href="https://github.com/muntaxir4" target="_blank">
              Muntasir
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <p>Connect With Us</p>
        <div className="flex gap-2 mt-2">
          <Linkedin size={18} />
          <X size={18} />
          <Facebook size={18} />
        </div>
      </div>
    </footer>
  );
}
