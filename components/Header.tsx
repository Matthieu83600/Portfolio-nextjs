import Link from 'next/link';
import Image from 'next/image';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-inherit pb-5 pt-5 shadow-sm">
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
        <Image
          src="/assets/logo.svg"
          width={0}
          height={0}
          style={{ width: '70px', height: 'auto' }}
          loading="lazy"
          alt="Mon logo"
        />
        <nav>
          <ul className="flex flex-wrap items-center justify-between p-4">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/">Biographie</Link>
            </li>
            <li>
              <Link href="/">Technologies</Link>
            </li>
            <li>
              <Link href="/projets">Projets</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
