import { NextPage } from "next";
import Link from "next/link";
import moment from "moment"
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
            className="h-6 w-6 mr-4 rounded-full"
            src={post.author.picture.url}
            alt={post.author.name}
          />
          <div className="flex flex-col md:flex-row md:items-center justify-items-start">
            <span className="font-medium">{post.author.name} - </span>
            <span className="text-xs md:ml-2 font-semibold text-gray-600">{moment(post.createdAt).format("MMM Do YY")}</span>
          </div>
        </div>
        <Link href={`/post/${post.slug}`}>
          <div className="my-2 cursor-pointer ">
            <p className="font-semibold text-sm md:text-xl">{post.title}</p>
            <p className="hidden md:block text-gray-500">{post.excerpt}</p>
          </div>
        </Link>
        <div className="flex m-2 space-x-2">
          {post.categories.map((category) => (
            <Link
              key={category.slug}
              href={{ pathname: `/tag/${category.slug}` }}
            >
              <span className="text-xs md:text-sm border-2 p-1 hover:bg-yellow-200 rounded-lg cursor-pointer">
                {category.categoryName}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-1 md:w-36 md:h-36 self-center justify-self-center">
        <img
          className="w-full h-full object-cover"
          src={post.coverImage.url}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Posts;
