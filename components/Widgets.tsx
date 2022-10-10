import { NextPage } from "next";
import { Category } from "../typings";

interface Props {
  categories: Category[];
}

const Widgets: NextPage<Props> = ({ categories }) => {
  return (
    <div className="bg-white my-3 flex flex-wrap ">
      {categories.map((category) => (
        <span key={category.id} className="text-sm m-2 border-2 px-2 py-2 rounded-lg hover:bg-yellow-200 cursor-pointer">
          {category.categoryName}
        </span>
      ))}
    </div>
  );
};

export default Widgets;
