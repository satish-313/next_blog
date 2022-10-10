import { NextPage } from "next/types";
import Header from "./Header";

interface Props {
  children?: React.ReactNode;
}
const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
