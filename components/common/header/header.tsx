import type { NextComponentType } from "next";
import Link from "next/link";

const HeaderComponent: NextComponentType = () => {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/">
                <a>Startseite</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a>Events</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
