import { useLoaderData } from "react-router-dom";
import BannerHeading from "../Components/Reusable Components/BannerHeading";
export default function Resources() {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <BannerHeading
        title={"Empower Your Knowledge"}
        subTitle={
          "Access premium resources to sharpen your entrepreneurial skills. Unlock your entrepreneurial potential by accessing premium resources. Gain invaluable insights from expert-led courses, masterclasses, and in-depth industry reports. Develop essential skills in business planning, marketing, finance, and leadership. Sharpen your decision-making abilities and build a strong foundation for success in the competitive business world."
        }
        button={"Get Premium Resources"}
        img={"https://i.ibb.co.com/RYrhw59/Blog-page-images-3-141-768x402.jpg"}
      />

      <div className="py-10 w-11/12 mx-auto">
        <h2 className="text-xl lg:text-3xl text-center font-bold">
          Resources : Kickstart Your Journey
        </h2>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((d) => (
            <div key={d.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p className="text-orange-400 text-sm font-medium">
                  {d.category}
                </p>
                <h2 className="card-title text-base">{d.title}</h2>
                <p className="text-sm">{d.description}</p>
                <a
                  href="https://www.google.com/search?sca_esv=40d67909390ce45a&rlz=1C1KNTJ_enBD1049BD1049&sxsrf=ADLYWII-DeYgYck6vyEmCHJZp5EtH0MaXA:1736212279209&q=crowdfunding+platform+design&tbm=nws&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JyJJclJuzBPl12qJyPx7ESJehObpS5jg6J88CCM-RK72qUv4GOvBp3LxAsC-35pUAVd1mVJIz_kJEl7OpW0Y42rOM96fEVibRmxJCzmEqh53sBnJMLdHFyYMnh1J8SLKdTBIS0c&sa=X&ved=2ahUKEwi1taDhtuKKAxXX1jgGHfzZGjcQ0pQJegQIEBAB&biw=1396&bih=663&dpr=1.38"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
