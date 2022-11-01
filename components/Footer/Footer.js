import Logo from "../Header/Logo";
import SimpleCard from "../Introduction/SimpleCard";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="content-center md:px-10 xl:px-40 py-6 md:flex justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <SimpleCard title="Help">
            <a className="block hover:text-blue-500 hover:font-bold" href="/">
              About
            </a>
            <a className="block hover:text-blue-500 hover:font-bold" href="/">
              Contact
            </a>
            <a className="block hover:text-blue-500 hover:font-bold" href="/">
              Mentoring
            </a>
            <a className="block hover:text-blue-500 hover:font-bold" href="/">
              Support
            </a>
          </SimpleCard>
          <SimpleCard title="Browse">
            <a className="block hover:text-blue-500 hover:font-bold" href="/">
              Articles
            </a>
            <a className="block hover:text-blue-500 hover:font-bold" href="/">
              Courses
            </a>
          </SimpleCard>
          <SimpleCard title="Community">
            <a className="block hover:text-blue-500 hover:font-bold" href="/">
              App Jams
            </a>
          </SimpleCard>
        </div>
        <div className="flex sm:items-center text-center justify-center ">
          <Logo />
        </div>
      </div>
      <div className="text-center py-6 text-xl">
        Copyright &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
