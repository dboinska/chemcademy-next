const MainLayout = ({ children, navbar, footer }) => {
  return (
    <>
      {navbar}
      <main>{children}</main>
      {footer}
    </>
  );
};

export default MainLayout;
