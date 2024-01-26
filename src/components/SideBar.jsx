import React from "react";

function SideBar() {
  return (

    <div>
      <div className="flex h-screen flex-col justify-between border-e bg-black">
        <div className="px-4 py-6">
          <span className="grid h-10 w-32 place-content-center rounded-lg bg-black
           text-xs text-white">
            TradeTracker
          </span>

          <ul className="mt-6 space-y-1">
            <li>
              <a
                href=""
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Dashboard
              </a>
            </li>

           

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Daily Journel
              </a>
            </li>

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Trade log
              </a>
            </li>
            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Reports
              </a>
            </li>
            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Insights
              </a>
            </li>
            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Notebook
              </a>
            </li>
            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Trade Replay
              </a>
            </li>

            
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white p-4 hover:bg-gray-50"
          >
            <img
              alt="Man"
              src="https://avatars.githubusercontent.com/u/89460805?v=4"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Rutika Bhuimbar</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
