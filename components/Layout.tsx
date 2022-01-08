import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div id="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
