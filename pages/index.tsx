import type { NextPage } from "next";
import Head from "next/head";
import { Posts, Widgets } from "../components";
import { getCategories, getRecentPost } from "../service";
import { Category, Post } from "../typings";

interface Props {
  posts: Post[];
  categories: Category[]
}

const Home: NextPage<Props> = ({ posts, categories }) => {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      <Head>
        <title>SenoCode - for learning</title>
        <link rel="icon" href="/logo_photo.jpg" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5 p-5">
        <div className="lg:col-span-1 col-span-1 lg:order-last">
          <div className="lg:sticky lg:relative lg:top-20">
            <p className="font-semibold text-gray-700 text-xs">
              DISCOVER MORE OF WHAT MATTERS TO YOU
            </p>
            <Widgets categories={categories}/>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-10">
          {posts.map((post) => (
            <Posts post={post} key={post.id}/>
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
    props: { posts , categories },
  };
};
