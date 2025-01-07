import { Link } from "react-router-dom";
export default function BannerCards({ title, subTitle, btn, btnText, img }) {
  return (
    <div className="bg-blue-600 bg-opacity-20 backdrop-blur-sm p-5 rounded-lg border border-gray-400">
      <div className="space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-300">{subTitle}</p>
        <div className="flex items-start justify-between">
          <Link to="/invest" className={`${btn}`}>
            {btnText}
          </Link>
          <img src={img} alt="" className="w-14 h-14 object-cover" />
        </div>
      </div>
    </div>
  );
}
