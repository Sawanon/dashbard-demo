import { Category, Wallet2, Activity, DocumentText1, Setting2, User } from "iconsax-react"

const SideBar = () => {
  return (
   <div style={{height: '100dvh'}} className={`bg-black w-24 fixed flex flex-col`}>
    <div className={`h-24 border-b border-gray-700 flex justify-center items-center`}>
      <div className={`bg-white w-10 h-10 rounded-md`}>
      </div>
    </div>
    <div className={`flex flex-col justify-between pt-6 bg-black flex-grow`}>
      <div className={`flex flex-col gap-6 items-center`}>
        <div className={`bg-primary w-12 cursor-pointer h-12 rounded-2xl flex justify-center items-center`}>
          <Category size="20" color="#fff"/>
        </div>
        <div className={`bg-black hover:bg-primary transition-all w-12 cursor-pointer h-12 rounded-2xl flex justify-center items-center`}>
          <Wallet2 size="20" color="#fff"/>
        </div>
        <div className={`bg-black hover:bg-primary transition-all w-12 cursor-pointer h-12 rounded-2xl flex justify-center items-center`}>
          <Activity size="20" color="#fff"/>
        </div>
        <div className={`bg-black hover:bg-primary transition-all w-12 cursor-pointer h-12 rounded-2xl flex justify-center items-center`}>
          <DocumentText1 size="20" color="#fff"/>
        </div>
        <div className={`bg-black hover:bg-primary transition-all w-12 cursor-pointer h-12 rounded-2xl flex justify-center items-center`}>
          <Setting2 size="20" color="#fff"/>
        </div>
      </div>
      <div className={`flex justify-center pb-4`}>
        <div className={`bg-white rounded-full w-12 h-12 flex items-center justify-center`}>
          <User size={`20`} color="#000" />
        </div>
      </div>
    </div>
   </div>
  )
}

export default SideBar