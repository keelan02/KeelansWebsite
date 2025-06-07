
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
            <img
              src="/image.png"
              alt="Keelan Keohane"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-bold">Keelan Keohane</h1>
              <p className="text-muted-foreground">Monteur vidéo et motion designer</p>
            </Link>
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/exxo_kaki/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black text-white hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
         
          <a
            href="https://www.linkedin.com/in/keelan-keohane-763810290/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-green-600 text-white hover:opacity-80 transition-opacity"
            aria-label="YouTube"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:keohanekeelan2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-orange-600 text-white hover:opacity-80 transition-opacity"
            aria-label="YouTube"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:0789490014"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80 transition-opacity"
            aria-label="YouTube"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
