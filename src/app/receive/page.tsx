import Slider from "./slider";
import {CheckIcon, CopyIcon, InformationCircleIcon, ShareIcon, TonIcon, CurrencyDollarIcon} from "@/components/icons";

import 'swiper/css';

import 'swiper/css/pagination';
import {ReactNode} from "react";


const ListItem = (
    {icon, children}: { icon: ReactNode, children: ReactNode }
) => {
    return (
        <div className="flex flex-row items-center">
            <div className="py-3 mx-3 ">
                {icon}
            </div>
            <div className="grow h-full">
                <div className="h-full flex flex-row items-center justify-between p-3">
                    {children}
                </div>
                <hr className="bg-gradient-to-3 from-[#3AB8B1] to-[#3AB8B10D]"/>
            </div>
        </div>
    )
}

const Page = () => {
    return (

        <main className="w-full min-h-screen h-full">
            <div className="pt-7">

                <div className="flex flex-row justify-center items-center">
                    <div className="text-xl font-medium leading-6">Receive Toncoin</div>
                    <InformationCircleIcon height={14} width={14} className="ml-1.5 text-electric-blue"/>
                    {/*<div className="h-3.5 w-3.5 bg-electric-blue">i</div>*/}
                </div>
                <div className="mt-4">
                    <Slider/>
                </div>
                <div className="flex flex-row mt-4 space-x-1.5 px-4 text-white text-sms">
                    <button className="grow h-10 rounded-sxl bg-gradient-to-r from-sky-blue-3 to-dodger-blue-100">
                        Copy <CopyIcon  className="inline" width={15} height={15}/>
                    </button>
                    <button className="grow h-10 rounded-sxl bg-gradient-to-r from-sky-blue-3 to-dodger-blue-100">
                        Share <ShareIcon className="inline" width={15} height={15}/> </button>
                </div>
                <div className="mt-6 text-center text-msm font-medium">
                    Choose assets for receiving
                </div>
                <div className="mx-4 mt-4 py-2.5 bg-white rounded-sxl">

                    <ListItem icon={
                        <div
                            className="rounded-full h-[30px] w-[30px] bg-gradient-to-r from-sky-blue-3 to-dodger-blue-200 flex justify-center items-center">
                            <TonIcon height={16} width={16}/>
                        </div>}>
                        <div className="flex flex-col space-y-[1px] mr-auto">
                            <div className='text-msm font-medium bg-gradient-to-r from-[#5BB8FF] to-[#0D93FF] inline-block text-transparent bg-clip-text'>Toncoin</div>
                            <div className="text-xs leading-3 text-off-white-800">0 TON</div>
                        </div>
                        <div><CheckIcon height={16} width={16} strokeWidth={4} className="text-sky-blue-3"/></div>
                    </ListItem>

                    <ListItem icon={
                        <div
                            className="rounded-full h-[30px] w-[30px] bg-gradient-to-r from-turquoise to-cyan flex justify-center items-center">
                            <div className="text-base leading-4 text-white font-medium">$</div>
                        </div>}>

                        <div className="flex flex-col space-y-[1px] mr-auto">
                            <div className='text-msm font-medium bg-gradient-to-r from-[#39BD9E] to-[#3BB5BE] inline-block text-transparent bg-clip-text'>USDT</div>
                            <div className="text-xs leading-3 text-off-white-800">0 USDT</div>
                        </div>
                        <div className="flex flex-col space-y-[1px] mr-auto">
                            <div className='text-msm font-medium bg-gradient-to-r from-[#39BD9E] to-[#3BB5BE] inline-block text-transparent bg-clip-text'>USDT</div>
                            <div className="text-xs leading-3 text-off-white-800">0 USDT</div>
                        </div>

                    </ListItem>
                    <ListItem icon={
                        <div
                            className="rounded-full h-[30px] w-[30px] bg-gradient-to-r from-turquoise to-cyan flex justify-center items-center">
                            <div className="text-base leading-4 text-white font-medium">$</div>
                        </div>}>

                        <div className="flex flex-col space-y-[1px] mr-auto">
                            <div className='text-msm font-medium bg-gradient-to-r from-[#39BD9E] to-[#3BB5BE] inline-block text-transparent bg-clip-text'>USDT</div>
                            <div className="text-xs leading-3 text-off-white-800">0 USDT</div>
                        </div>
                        <div className="flex flex-col space-y-[1px] mr-auto">
                            <div className='text-msm font-medium bg-gradient-to-r from-[#39BD9E] to-[#3BB5BE] inline-block text-transparent bg-clip-text'>USDT</div>
                            <div className="text-xs leading-3 text-off-white-800">0 USDT</div>
                        </div>

                    </ListItem>
                </div>
            </div>
        </main>
    )
}
export default Page;