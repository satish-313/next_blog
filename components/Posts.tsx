import { NextPage } from "next";
import Link from "next/link";
import { Post } from "../typings";

interface Props {
  post: Post;
}

const Posts: NextPage<Props> = ({ post }) => {
  return (
    <div className="bg-white my-5 grid grid-cols-3 gap-4 rounded-lg border-b-4 border-gray-300">
      <div className="col-span-2">
        <div className="flex items-center">
          <img
            className="h-5 w-5 mr-4 rounded-full"
            src={post.author.picture.url}
            alt={post.author.name}
          />
          <span className="font-medium">{post.author.name}</span>
        </div>
        <Link href={`/post/${post.slug}`}>
          <div className="my-2 cursor-pointer ">
            <p className="font-semibold text-xl">{post.title}</p>
            <p className="hidden md:block text-gray-500">{post.excerpt}</p>
          </div>
        </Link>

        <div className="flex justify-between">
          <div className="space-x-2">
            {post.categories.map((catogery) => (
              <span
                key={catogery.slug}
                className="border-2 p-1 hover:bg-yellow-200 rounded-lg cursor-pointer"
              >
                {catogery.categoryName}
              </span>
            ))}
          </div>
          <span>oct 8 2022</span>
        </div>
      </div>
      <div className="col-span-1 my-auto">
        <img
          className="w-full rounded-xl"
          src={post.coverImage.url}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Posts;
