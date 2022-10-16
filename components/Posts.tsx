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
        <div className="flex justify-between m-2">
          <div className="space-x-2">
            {post.categories.map((category) => (
              <Link
                key={category.slug}
                href={{ pathname: `/tag/${category.slug}` }}
              >
                <span className="border-2 p-1 hover:bg-yellow-200 rounded-lg cursor-pointer">
                  {category.categoryName}
                </span>
              </Link>
            ))}
          </div>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="col-span-1 sm:w-24 sm:h-24 md:w-36 md:h-36 self-center justify-self-center">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={post.coverImage.url}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Posts;
