import { Link } from "react-router-dom";
export default function BannerHeading({ title, subTitle, button, img }) {
  return (
    <>
      <div className="w-11/12 mx-auto mb-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-5 py-4">
        <div className="space-y-4">
          <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
          <p className="text-sm pb-4 pr-10">{subTitle}</p>
          <Link
            to="/all-campaign"
            className="btn btn-primary text-white font-bold"
          >
            {button}
          </Link>
        </div>
        <div>
          <img src={img} alt="" className="rounded-lg shadow-md" />
        </div>
      </div>
    </>
  );
}
