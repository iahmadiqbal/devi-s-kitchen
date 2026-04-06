import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import AnnouncementBanner from "./AnnouncementBanner";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="overflow-x-hidden">
    <ScrollToTop />
    <AnnouncementBanner />
    <Header />
    <main className="pt-16 md:pt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
