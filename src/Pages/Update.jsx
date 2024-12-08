import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Update() {
  const updateCampaign = useLoaderData();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const description = form.description.value;
    const amount = form.amount.value;
    const deadline = form.deadline.value;
    const photo = form.photo.value;
    const updatedCampaign = {
      title,
      type,
      description,
      amount,
      deadline,
      photo,
    };
    fetch(
      `https://hopehiveserver.vercel.app/myCampaign/${updateCampaign._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCampaign),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your campaign has been saved",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/my-campaign");
        }
      });
  };
  return (
    <>
      <div className="bg-[url('https://i.ibb.co.com/WzQqTmX/bg-addnew.png')] bg-blue-700 bg-blend-multiply bg-no-repeat bg-cover bg-center min-h-[750px] font-poppins">
        <div className="w-full lg:w-3/5 mx-auto py-12 px-5">
          <div className="bg-blue-600 bg-opacity-20 backdrop-blur-sm p-5 rounded-lg border border-gray-400">
            <h2 className="text-xl md:text-3xl font-bold text-yellow-400 text-center">
              Update Campaign
            </h2>
            <div className="space-y-3 pt-8">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                onSubmit={handleUpdate}
              >
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      User Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={updateCampaign?.email}
                    className="bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-yellow-400 w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      User Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={updateCampaign?.displayName || "Lost it"}
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Campaign Title
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    name="title"
                    defaultValue={updateCampaign.title}
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Campaign Type
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    defaultValue={updateCampaign.type}
                    name="type"
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Description
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    name="description"
                    defaultValue={updateCampaign.description}
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Minimum Donation Amount
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder=""
                    defaultValue={updateCampaign.amount}
                    name="amount"
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200 appearance-none"
                    style={{
                      colorScheme: "dark",
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Deadline
                    </span>
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    defaultValue={updateCampaign.deadline}
                    name="deadline"
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200 appearance-none"
                    style={{
                      colorScheme: "dark",
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Image URL
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    name="photo"
                    defaultValue={updateCampaign.photo}
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <button className="btn btn-outline text-yellow-400 w-full hover:btn-warning hover:text-black col-span-1 md:col-span-2 mt-4 text-base">
                  Update Campaign
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
