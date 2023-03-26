import { Divider } from '@devmax/ui';
import { ArrowBackUp, Home, Home2 } from 'tabler-icons-react';
import styles from './navbar.module.scss';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className="w-[300px] h-screen flex flex-col bg-slate-800 text-white">
      <div className="bg-slate-900 h-16 flex items-center justify-center">
        <h1 className="font-bold text-2xl">Crypto Realestate</h1>
      </div>
      <div className="flex-1">
        <ul className="flex flex-col">
          <li>
            <div className="flex gap-3 items-center text-lg cursor-pointer hover:bg-slate-700 p-3">
              <ArrowBackUp />
              Go back to site
            </div>
          </li>

          <li>
            <div className="flex gap-3 items-center text-lg cursor-pointer hover:bg-slate-700 p-3">
              <Home />
              Dashboard
            </div>
          </li>
          <li>
            <div className="flex gap-3 items-center text-lg cursor-pointer hover:bg-slate-700 p-3">
              <Home2 />
              Properties
            </div>
          </li>
        </ul>
      </div>
      <div className="font-bold text-lg text-center p-5">Devmax Admin v0.1</div>
    </div>
  );
}

export default Navbar;
