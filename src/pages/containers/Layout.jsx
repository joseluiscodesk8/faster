import Menu from "../components/Manu";

const Layout = ({ childre }) => {
  return (
    <>
      <Menu />
      {childre}
    </>
  );
};

export default Layout;
