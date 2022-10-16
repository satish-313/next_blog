import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { AiTwotoneTags } from "react-icons/ai";
import { Posts } from "../../components";
import { getPostsBasedOnCategory } from "../../service";
import { Post } from "../../typings";

interface Props {
  posts: Post[];
  slug: string;
}

const category: NextPage<Props> = ({ posts, slug }) => {
  return (
    <div className="max-w-4xl mx-auto my-5 px-2">
      <Head>
        <title>{slug}</title>
        <link rel="icon" href="/logo_photo.jpg" />
      </Head>
      <div className="flex space-x-3 items-center mb-5">
        <AiTwotoneTags size={30} />
        <h3 className="capitalize text-2xl font-bold">{slug}</h3>
      </div>
      <div>
        <span className="underline underline-offset-8 mb-5">Latest</span>
        <div>
          {posts.map((post) => (
            <Posts post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default category;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let slug: string = "";
  if (context.params) slug = context.params.slug as string;

  if (slug.length === 0) {
    return {
      notFound: true,
    };
  }

  const posts = await getPostsBasedOnCategory(slug);

  return {
    props: { posts, slug },
  };
};
