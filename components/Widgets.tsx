import { NextPage } from "next";
import Link from "next/link";
import { Category } from "../typings";

interface Props {
  categories: Category[];
}

const Widgets: NextPage<Props> = ({ categories }) => {
  return (
    <div className="bg-white my-3 flex flex-wrap ">
      {categories.map((category) => (
        <Link key={category.slug} href={`tag/${category.slug}`}>
          <span className="text-sm m-2 border-2 px-2 py-2 rounded-lg hover:bg-yellow-200 cursor-pointer">
            {category.categoryName}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Widgets;
