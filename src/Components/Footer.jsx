import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <section className="bg-[url('https://i.ibb.co.com/RYrhw59/Blog-page-images-3-141-768x402.jpg')] bg-blue-950 bg-blend-multiply bg-no-repeat bg-cover bg-center font-poppins">
      <footer className="footer p-10 w-11/12 mx-auto text-gray-200">
        <aside className="flex items-center gap-4">
          <img
            src="https://i.ibb.co.com/JBc6RpV/Screenshot-19-removebg-preview.png"
            alt=""
            className="w-16"
          />
          <p className="text-xs font-medium text-gray-300">
            <span className="text-3xl text-blue-400 font-bold">Hope Hive</span>
            <br />A hub where people unite to build hope and make a difference.
          </p>
        </aside>
        <nav className="">
          <h6 className="footer-title">Services</h6>
          <Link to="/invest" className="link link-hover">
            Invest
          </Link>
          <Link to="/resources" className="link link-hover">
            Resources
          </Link>
          <Link to="/company" className="link link-hover">
            Company
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/company" className="link link-hover">
            About us
          </Link>
          <a className="link link-hover">Contact</a>
          <Link to="resources" className="link link-hover">
            Blogs
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-transparent p-4 w-11/12 mx-auto text-gray-400">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Hope
            Hive
          </p>
        </aside>
      </footer>
    </section>
  );
}
