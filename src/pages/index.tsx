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
            Student | Software Engineer | Adventure Seeker
          </h1>
        </div>
        <div>
          <h1 className="mb-8 items-center text-base font-semibold text-white">
            Studying at Rutgers University - New Brunswick NJ | Class of 2026
          </h1>
        </div>
        <div>
          <h1 className="mb-8 items-center text-base font-extralight text-white">
            Computer Science, Artificial Intelligence, and Data Science
          </h1>
        </div>
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
