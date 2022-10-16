import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const about = () => { 
  return (
    <div className="max-w-4xl mx-auto my-5 px-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <Head>
        <title>About</title>
        <link rel="icon" href="/logo_photo.jpg" />
      </Head>
      <div className="col-span-1 lg:col-span-2 md:mt-20">
        <h1 className="font-bold text-3xl mb-5">
          Hi! I'm <span className="underline underline-offset-4 decoration-pink-500">Satish Kumar</span>{" "}
        </h1>
        <p className="font-semibold text-gray-500 text-lg mb-3">
          I have started the learning programming in covid, after that it become
          daily ritual.
        </p>
        <p className="font-semibold text-gray-500 text-lg mb-3">
          I try to learn new stuff everyday. Here I write down everything that I
          learned for everybody to learn.
        </p>
      </div>
      <div className="col-span-1 px-5 lg:mt-20 bg-sky-700 rounded-lg flex flex-col items-center">
        <img src="/coding.gif" alt="" />
      </div>
    </div>
  );
};

export default about;
