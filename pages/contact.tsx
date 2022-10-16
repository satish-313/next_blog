import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const contact = () => {
  return (
    <div className="max-w-4xl mx-auto my-5 px-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <Head>
        <title>About</title>
        <link rel="icon" href="/logo_photo.jpg" />
      </Head>
      <div className="col-span-1 lg:col-span-2 md:mt-20">
        <p className="font-semibold text-gray-500 text-lg mb-3">
          You can send feedback, suggestions and questions by emailing me at
          <span className="underline underline-offset-4 decoration-pink-500 ml-1 font-bold text-blue-500">
            pradhansatish53@gmail.com
          </span>
          .
        </p>
        <p className="font-semibold text-gray-500 text-lg mb-3">
          Alternatively, you can me message on{" "}
          <a href="https://twitter.com/satish_313" target="_blank">
            {" "}
            <span className="underline underline-offset-4 decoration-pink-500 ml-1 font-bold text-blue-500">
              Twitter
            </span>
          </a>{" "}
          Or{" "}
          <a href="https://www.linkedin.com/in/satishkumar313/" target="_blank">
            {" "}
            <span className="underline underline-offset-4 decoration-pink-500 ml-1 font-bold text-blue-500">
              Linkedln
            </span>
          </a>
        </p>
      </div>
      <div className="col-span-1 px-5 mt-2 lg:mt-20 bg-sky-700 rounded-lg flex flex-col items-center">
        <div className="m-5">
          <img
            className="h-52 w-52 rounded-full"
            src="/sana.jpg"
            alt="satish"
          />
        </div>
        <div className="flex gap-3 mb-5">
          <a href="https://twitter.com/satish_313" target="_blank">
            <AiFillTwitterSquare size={30} color="rgb(161 161 170)" />
          </a>
          <a href="https://github.com/satish-313" target="_blank">
            <AiFillGithub size={30} color="rgb(161 161 170)" />
          </a>
          <a href="https://www.linkedin.com/in/satishkumar313/" target="_blank">
            <AiFillLinkedin size={30} color="rgb(161 161 170)" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default contact;
