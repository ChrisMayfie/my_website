import Head from "next/head";
import Link from "next/link";
import img1 from "src/images/github-mark-white.png";
import img2 from "src/images/In-White-72.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Christopher Mayfield</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-700">
        <div>
          <h1 className="mb-8 text-3xl font-bold text-white">
            Christopher Mayfield
          </h1>
        </div>
        <div>
          <h1 className="mb-8 items-center text-xl font-bold text-white">
            CS Student | Software Engineer | Adventure Seeker
          </h1>
        </div>
        <div>
          <h1 className="mb-8 items-center text-base font-semibold text-white">
            Studying at Rutgers University - New Brunswick NJ | Class of 2026
          </h1>
        </div>
        <div>
          <h1 className="mb-8 items-center text-base font-extralight text-white">
            Front End Development, Back End Development, and Data Science
          </h1>
        </div>
        <div>
          <h1 className="mb-8 items-center text-base font-bold text-white">
            Projects & Socials:
          </h1>
        </div>
        <a
          href="https://www.onnatank.com/"
          target="_blank"
          className="group mx-auto mb-8 block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white">
              Onnatank - TS, React, MySQL
            </h3>
          </div>
          <p className="text-sm text-slate-500 group-hover:text-white">
            Onnatank is a simple web based tool that allows a user to enter
            their vehicle&apos;s information as well as a location to see how
            far they can travel &quot;On(n)-a-tank&quot; of gas.
          </p>
        </a>
        <div className="flex space-x-10">
          <div>
            <a
              href="https://github.com/ChrisMayfie?tab=repositories"
              target="_blank"
            >
              <Image src={img1} alt="My GitHub" className="h-10 w-10" />
            </a>
          </div>
          <div>
            <a href="https://linkedin.com/in/chrismayfie" target="_blank">
              <Image src={img2} alt="My LinkedIn" className="h-10 w-10" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
