import { Bar } from "./components/Bar";
import LineChart from "./components/LineChart";
import LineChartMultiBackground from "./components/LineChartMultiBackground";
import SideBar from "./components/SideBar";
import { SearchNormal1, Command, Sms, Notification } from "iconsax-react";
import PropTypes from "prop-types";

function App() {
  return (
    <div className={`bg-blue-400 absolute inset-0`}>
      <SideBar />
      {/* content */}
      <div className={`h-[1200px] ml-24`}>
        {/* header */}
        <div
          className={`bg-white h-24 flex items-center px-6 gap-6 sticky top-0`}
        >
          <div className={`font-bold text-2xl flex-grow`}>Analytics ✌️</div>
          <div className="bg-gray-100 px-4 py-2 h-12 rounded-2xl flex items-center gap-2 text-sm">
            <SearchNormal1
              size={`20`}
              className={`text-black text-opacity-20`}
            />
            <input
              type="text"
              className={`bg-gray-100 outline-none placeholder:text-sm placeholder:text-black placeholder:text-opacity-20`}
              placeholder="Search"
            />
            <Command size={"16"} />
            <div>K</div>
          </div>
          <div className={`relative`}>
            <div
              className={`bg-red-400 w-[6px] h-[6px] rounded-full absolute right-0 top-0`}
            ></div>
            <Sms size={"24"} />
          </div>
          <div className={`relative`}>
            <div
              className={`bg-red-400 w-[6px] h-[6px] rounded-full absolute right-0 top-0`}
            ></div>
            <Notification size={"24"} />
          </div>
        </div>
        <div className={`bg-[#F6F8FA] grid grid-cols-2 p-6 gap-6`}>
          <div className={`rounded-2xl bg-white p-4 h-[320px]`}>
            <Bar />
          </div>
          <div className={`rounded-2xl grid grid-cols-2 gap-1 overflow-hidden`}>
            <CardChart
              title={"Total Revenue"}
              balance={`$4,562`}
              description={
                <>
                  <span className={`text-green-400`}>+12%</span>
                  <span className={`text-gray-400`}>vs preview . 28 days</span>
                </>
              }
            />
            <CardChart
              title={"Total Visitors"}
              balance={`$2,562`}
              description={
                <>
                  <span className={`text-green-400`}>+4%</span>
                  <span className={`text-gray-400`}>vs preview . 28 days</span>
                </>
              }
            />
            <CardChart
              title={"Total Transactions"}
              balance={`$2,262`}
              isGrow={false}
              description={
                <>
                  <span className={`text-red-400`}>-0.89%</span>
                  <span className={`text-gray-400`}>vs preview . 28 days</span>
                </>
              }
            />
            <CardChart
              title={"Total Products"}
              balance={`$2,100`}
              description={
                <>
                  <span className={`text-green-400`}>+2%</span>
                  <span className={`text-gray-400`}>vs preview . 28 days</span>
                </>
              }
            />
          </div>
          <div className={`bg-white rounded-2xl relative overflow-hidden`}>
              <div className={`flex absolute inset-0`}>
                <div className={`w-1/4`}></div>
                <div className={`w-1/4 border-l border-red-400`}></div>
                <div className={`w-1/4 border-l border-red-400`}></div>
                <div className={`w-1/4 border-l border-red-400`}></div>
              </div>
            <div className={`flex`}>
              <div className={`bg-red-400 w-1/4 flex justify-center`}>
                <div className={`bg-green-400`}>
                  <div>Total Market</div>
                  <div>$4,562</div>
                </div>
              </div>
            </div>
            <div>
              <LineChartMultiBackground />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const CardChart = ({ title, balance, description, isGrow = true }) => {
  const color = () => {
    if (isGrow) {
      return {
        borderColor: "rgba(60, 213, 152, 1)",
        fromColor: "rgba(60, 213, 152, 0.4)",
        toColor: "rgba(60, 213, 152, 0)",
      };
    }
    return {
      borderColor: "rgba(253, 101, 101, 1)",
      fromColor: "rgba(253, 101, 101, 0.4)",
      toColor: "rgba(253, 101, 101, 0)",
    };
  };
  return (
    <div className={`flex p-4 bg-white`}>
      <div className={`flex-grow `}>
        <div className={`text-gray-400 text-sm`}>{title}</div>
        <div className={`text-3xl font-semibold mt-2`}>{balance}</div>
        <div className={`space-x-2 text-sm mt-6`}>{description}</div>
      </div>
      <div className={`flex items-center`}>
        <div className={`h-[60px] w-[140px]`}>
          <LineChart
            // borderColor={`rgba(60, 213, 152, 1)`}
            // fromColor='rgba(60, 213, 152, 0.4)'
            // toColor='rgba(60, 213, 152, 0)'
            {...color()}
          />
        </div>
      </div>
    </div>
  );
};

CardChart.propTypes = {
  title: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  description: PropTypes.node,
  isGrow: PropTypes.bool,
};
