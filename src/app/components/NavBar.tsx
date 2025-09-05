"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center px-2 py-4">
      <nav className="font-sans flex items-center justify-between w-full max-w-lg rounded-[10px] bg-white px-6 py-3 shadow-11">
        <div className="--logo-and-title flex items-center gap-2">
          <div className="--logo">
            <Image
              src={"/images/logos/g1.png"}
              width={40}
              height={40}
              alt="logo"
              className="rounded-full"
            />
          </div>
          <div className="--title relative flex items-center text-lg font-semibold">
            <span className="text-[#4251AB] text-2xl font-black">Spok</span>
            <span className="text-[#DEDADE] text-2xl font-extrabold">Sibi</span>
            <span className="text-[#4251AB] text-2xl font-black">.</span>
          </div>
        </div>

        <div className="--navigation-link">
          <ul className="flex items-center gap-4 text-base font-medium">
            <li>
              <Link 
                href="/" 
                className={`flex items-center gap-1 px-3 py-2 rounded-[10px] transition-colors ${
                  pathname === "/" 
                    ? "bg-[#4251AB] text-white" 
                    : "hover:text-[#4251AB]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house-gear-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708z" />
                  <path d="M11.07 9.047a1.5 1.5 0 0 0-1.742.26l-.02.021a1.5 1.5 0 0 0-.261 1.742 1.5 1.5 0 0 0 0 2.86 1.5 1.5 0 0 0-.12 1.07H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6 4.724 4.724a1.5 1.5 0 0 0-1.654 1.03" />
                  <path d="m13.158 9.608-.043-.148c-.181-.613-1.049-.613-1.23 0l-.043.148a.64.64 0 0 1-.921.382l-.136-.074c-.561-.306-1.175.308-.87.869l.075.136a.64.64 0 0 1-.382.92l-.148.045c-.613.18-.613 1.048 0 1.229l.148.043a.64.64 0 0 1 .382.921l-.074.136c-.306.561.308 1.175.869.87l.136-.075a.64.64 0 0 1 .92.382l.045.149c.18.612 1.048.612 1.229 0l.043-.15a.64.64 0 0 1 .921-.38l.136.074c.561.305 1.175-.309.87-.87l-.075-.136a.64.64 0 0 1 .382-.92l.149-.044c.612-.181.612-1.049 0-1.23l-.15-.043a.64.64 0 0 1-.38-.921l.074-.136c.305-.561-.309-1.175-.87-.87l-.136.075a.64.64 0 0 1-.92-.382ZM12.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
                <span>Beranda</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/kosakata" 
                className={`flex items-center gap-1 px-3 py-2 rounded-[10px] transition-colors ${
                  pathname === "/kosakata" 
                    ? "bg-[#4251AB] text-white" 
                    : "hover:text-[#4251AB]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-translate"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
                </svg>
                <span>Kosakata</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}