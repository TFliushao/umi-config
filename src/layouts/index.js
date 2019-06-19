const Layout = ({ children }) => {
  console.log('layout', children)
  return (
    <div>
      {children}
    </div>
  );
}

export default Layout;
