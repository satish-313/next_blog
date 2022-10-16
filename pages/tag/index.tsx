import { useEffect, useState } from "react";
// import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getCategories } from "../../service";
import { Category } from "../../typings";
import { Loading } from "../../components";

// interface Props {
//   categories: Category[];
// }

const categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getCategories()
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
    setLoading(false)
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-4xl mx-auto my-5 px-2">
      <Head>
        <title>category</title>
        <link rel="icon" href="/logo_photo.jpg" />
      </Head>
      <h4 className="font-semibold underline underline-offset-8 text-xl mb-5">
        Categories
      </h4>
      <div className="flex flex-wrap justify-around gap-16">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={{ pathname: `/tag/${category.slug}` }}
          >
            <div className="col-span-1 flex flex-col items-center cursor-pointer group overflow-hidden">
              <img
                className="object-contain group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={category.coverImage.url}
                alt={category.categoryName}
                height="112px"
                width="112px"
              />
              <div className="ml-3 p-2">
                <h4 className="font-semibold">{category.categoryName}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default categories;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const categories = await getCategories();

//   return {
//     props: { categories },
//   };
// };
