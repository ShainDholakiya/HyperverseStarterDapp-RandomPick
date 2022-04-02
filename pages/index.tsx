import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "./components/Nav";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hyperverse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-3xl">
          Welcome to the{" "}
          <a
            className="font-bold"
            href="https://www.decentology.com/hyperverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hyperverse
          </a>
        </h1>

        <p className="text-l pt-5 pb-10 text-black">
          Get started by exploring our{" "}
          <a
            className="font-bold"
            href="https://github.com/decentology/hyperverse-mono"
            target="_blank"
            rel="noopener noreferrer"
          >
            repo
          </a>
        </p>

        <div className="grid grid-cols-12 gap-4">
          <a
            href="https://docs.hyperverse.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-white rounded-xl col-start-3 col-span-4 shadow-2xl hover:border-transparent hover:text-teal-500 hover:bg-black hover:shadow-inner"
          >
            <h2 className="text-2xl mb-2">Documentation &rarr;</h2>
            <p className="text-s">
              Find more information about the Hyperverse and learn how to build
              web3 apps and/or create modules with the Hyperverse!
            </p>
          </a>

          <a
            href="https://www.decentology.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-white rounded-xl col-span-4 shadow-2xl hover:border-transparent hover:text-teal-500 hover:bg-black hover:shadow-inner"
          >
            <h2 className="text-2xl mb-2">Blog &rarr;</h2>
            <p className="text-s">
              Check out our blogs wher we talk about workshops, hackathons,
              partnerhsips, and more web3 related content!
            </p>
          </a>
        </div>
      </main>

      <footer className="flex justify-center items-center flex-grow">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={"h-1 ml-1"}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
