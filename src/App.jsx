import { Bar } from './components/Bar'
import SideBar from './components/SideBar'
import { SearchNormal1, Command, Sms, Notification } from 'iconsax-react'

function App() {

  return (
    <div className={`bg-blue-400 absolute inset-0`}>
      <SideBar />
      {/* content */}
      <div className={`h-[1200px] ml-24`}>
        {/* header */}
        <div className={`bg-white h-24 flex items-center px-6 gap-6 sticky top-0`}>
          <div className={`font-bold text-2xl flex-grow`}>
            Analytics ✌️
          </div>
          <div className='bg-gray-100 px-4 py-2 h-12 rounded-2xl flex items-center gap-2 text-sm'>
            <SearchNormal1 size={`20`} className={`text-black text-opacity-20`} />
            <input type="text" className={`bg-gray-100 outline-none placeholder:text-sm placeholder:text-black placeholder:text-opacity-20`} placeholder='Search' />
            <Command size={'16'} />
            <div>K</div>
          </div>
          <div className={`relative`}>
            <div className={`bg-red-400 w-[6px] h-[6px] rounded-full absolute right-0 top-0`}></div>
            <Sms size={'24'} />
          </div>
          <div className={`relative`}>
            <div className={`bg-red-400 w-[6px] h-[6px] rounded-full absolute right-0 top-0`}></div>
            <Notification size={'24'} />
          </div>
        </div>
        <div className={`bg-[#F6F8FA] grid grid-cols-2 p-6`}>
          <div className={`rounded-2xl bg-white p-4`}>
            <Bar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
