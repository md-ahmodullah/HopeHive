export default function AddNewCampaign() {
  return (
    <>
      <div className="bg-[url('https://i.ibb.co.com/WzQqTmX/bg-addnew.png')] bg-blue-700 bg-blend-multiply bg-no-repeat bg-cover bg-center min-h-screen font-poppins">
        <div className="w-3/5 mx-auto py-12">
          <div className="bg-blue-600 bg-opacity-20 backdrop-blur-sm p-5 rounded-lg border border-gray-400">
            <h2 className="text-xl md:text-3xl font-bold text-yellow-400 text-center">
              Add New Campaign
            </h2>
            <div className="space-y-3 pt-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      User Email
                    </span>
                  </label>
                  <input
                    type="email"
                    value="spiderman@net.com"
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
                    value="Tom Holland"
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
                    placeholder="e.g. Change Starts Here"
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
                    placeholder="e.g. Startup, Business, Ideas"
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
                    placeholder="e.g. It is quite brilliant move to start changes through crowd funding.."
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
                    placeholder="e.g. 1200"
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
                    placeholder="e.g. dd/mm/yyyy"
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
                    placeholder="e.g. https://i.ibb.co.com/crowdfunding.png"
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <button className="btn btn-outline text-yellow-400 w-full hover:btn-warning hover:text-black col-span-2 mt-4 text-base">
                  Add Campaign
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
