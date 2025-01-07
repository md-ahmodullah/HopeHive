import { Link } from "react-router-dom";
export default function Cards({ info }) {
  const { _id, title, description, photo, amount } = info;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt={title}
            className="w-full h-[200px] object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="text-base md:text-lg font-semibold">{title}</h2>
          <h2 className="text-base md:text-lg font-semibold">${amount}</h2>
          <p className="text-sm py-1">{description}</p>
          <Link to={`/details/${_id}`} className="btn btn-primary text-white">
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}
