export default function Footer() {
  return (
    <section className="bg-blue-100">
      <footer className="footer text-base-content p-10 w-11/12 mx-auto">
        <aside className="flex items-center gap-4">
          <img
            src="https://i.ibb.co.com/JBc6RpV/Screenshot-19-removebg-preview.png"
            alt=""
            className="w-16"
          />
          <p className="text-xs text-gray-500 font-semibold">
            <span className="text-3xl text-blue-600 font-bold">Hope Hive</span>
            <br />A hub where people unite to build hope and make a difference.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Funding</a>
          <a className="link link-hover">Donation</a>
          <a className="link link-hover">Ideas</a>
          <a className="link link-hover">Creation</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Details</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-blue-100 text-base-content p-4 border-t-2 border-gray-300 w-11/12 mx-auto">
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
