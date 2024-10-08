import Link from "next/link";
import { FaTimes } from "react-icons/fa";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <FaTimes
          className="text-black w-6 h-6 cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex flex-col items-center gap-6 mt-10">
        <Link href="/">
          <div onClick={onClose}>Home</div>
        </Link>
        <Link href="/services">
          <div onClick={onClose}>Services</div>
        </Link>
        <Link href="/projects">
          <div onClick={onClose}>Projects</div>
        </Link>
        <Link href="/about">
          <div onClick={onClose}>About</div>
        </Link>
        <Link href="/contact">
          <div
            className="px-5 py-3 font-medium text-white whitespace-nowrap bg-[#9CAE47] rounded-[30px] cursor-pointer"
            onClick={onClose}
          >
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
