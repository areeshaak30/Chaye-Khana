import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full z-50 pt-2 sm:pt-3 md:pt-4">
        <Navbar />
      </header>

      <main className="flex-1 w-full">{children}</main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutWrapper;
