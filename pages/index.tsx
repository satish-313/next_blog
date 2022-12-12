import type { NextPage } from "next";
import Head from "next/head";
import { Posts, Widgets } from "../components";
import { getCategories, getRecentPost } from "../service";
import { Category, Post } from "../typings";

interface Props {
  posts: Post[];
  categories: Category[];
}

const Home: NextPage<Props> = ({ posts, categories }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white">
      <Head>
        <title>SenoCode - for learning</title>
        <link rel="icon" href="/logo_photo.jpg" />
      </Head>
      <div className="grid grid-cols-2 px-5 py-4 bg-lime-400 rounded ">
        <div className="col-span-2 md:col-span-1 px-2">
          <h1 className="mt-5 text-2xl font-bold text-gray-700 font-mono">
            Welcome developer,
          </h1>
          <h4 className="text-normal font-semibold font-mono text-gray-600 mt-2">
            Learn new things, Discover new topic.
          </h4>
          <h4 className="text-sm font-semibold font-mono text-gray-500 mt-2 mb-4">
            Master full stack web development, with us. Proficient in
            JavaScript, TypeScript
          </h4>
          <span className="px-4 py-2 bg-teal-400 rounded-xl font-bold text-fuchsia-900 bg-lime-600 bg-amber-300">Stay tune</span>
        </div>
        <div className="hidden md:block col-span-1 mx-auto my-auto">
          <img
            className="object-fit h-52 rounded"
            src="./developer.gif"
            alt="web development"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5 p-5">
        <div className="lg:col-span-1 col-span-1 lg:order-last">
          <div className="lg:sticky lg:top-20">
            <p className="font-semibold text-gray-700 text-xs">
              DISCOVER MORE OF WHAT MATTERS TO YOU
            </p>
            <Widgets categories={categories} />
          </div>
        </div>
        <div className="lg:col-span-2 space-y-10">
          {posts.map((post) => (
            <Posts post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const posts = await getRecentPost();
  const categories = await getCategories();

  return {
    props: { posts, categories },
  };
};
