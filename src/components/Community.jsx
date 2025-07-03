import React from "react";

function Community() {
  return (
    <>
      <div className=" mb-14 p-5 dark:bg-gray-700 dark:border-gray-600 min-h-screen">
        <h2 className="text-4xl text-shadow-sky-300 text-gray-100 font-semibold mb-6">
          Community
        </h2>
        <p className="text-gray-100 mb-4">
          Notable spaces are hosting members:
        </p>
        <button
          type="button"
          className="  w-full min-w-screen-md   text-gray-900   bg-[#F7BE37] hover:bg-[#F7BE36]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm pb-3 px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-white px-1">Check in at a Notable Space</p>
        </button>

        <div className="w-full min-h-screen-md  p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest Join Members
            </h5>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    @Avenu1
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Bonnie Green
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    @Aenu2
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-2.jpg"
                      alt="Michael image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Michael Gough
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    @Avenu3
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-4.jpg"
                      alt="Lana image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Lana Byrd
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    @Avenu4
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
