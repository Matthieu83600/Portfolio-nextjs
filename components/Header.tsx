import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-inherit pb-5 pt-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row items-center justify-between p-4">
        <h1 className='text-xl'>Mon Portfolio</h1>
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
