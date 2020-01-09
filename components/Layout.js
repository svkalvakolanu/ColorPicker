import Header from "./Header/Header";

const Layout = props => (
  <div>
    <Header />
    {props.children}

    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
  </div>
);

export default Layout;