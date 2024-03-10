import {ReactNode} from "react";
import {ArrowDownIcon, ArrowPathIcon, ArrowUpIcon, TonIcon, USDTIcon} from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import Tab from "@/app/tab";

const CircleButton = ({children}: { children: ReactNode }) => {
    return (
        <button
            className="w-10 h-10 rounded-full bg-gradient-to-r from-jungle-green to-dodger-blue-200 flex justify-center items-center">
            {children}
        </button>
    )
}

const ListItem = (
    {icon, children}: { icon: ReactNode, children: ReactNode }
) => {
    return (
        <div className="flex flex-row items-center">
            <div className="py-3 mr-3 ">
                {icon}
            </div>
            <div className="grow h-full">
                <div className="h-full flex flex-row items-center justify-between py-3">
                    {children}
                </div>
                <hr className="bg-gradient-to-3 from-[#3AB8B1] to-[#3AB8B10D]"/>
            </div>
        </div>
    )
}


export default function Home() {
    return (
        <main className="w-full min-h-screen p-4">
            <div className="flex flex-col w-full bg-white rounded-[10px] py-5 px-4">
                <div className="text-center">
                    <div className="text-2xl font-medium">5,00$</div>
                    <p className="text-grayish-blue text-xs mt-1.5">Balance</p>
                </div>
                <div
                    className="w-full flex flex-row justify-center items-center space-x-5 mt-4 text-center text-grayish-blue">
                    <div>
                        <CircleButton><ArrowUpIcon className="w-4 h-4 text-white " strokeWidth="3"/></CircleButton>
                        <div className="text-xss mt-1.5">Send</div>
                    </div>
                    <div>
                        <CircleButton><ArrowPathIcon className="w-4 h-4 text-white " strokeWidth="3"/></CircleButton>
                        <div className="text-xss mt-1.5 ">Swap</div>
                    </div>
                    <div>
                        <CircleButton><ArrowDownIcon className="w-4 h-4 text-white" strokeWidth="3"/></CircleButton>
                        <div className="text-xss mt-1.5">Receive</div>
                    </div>
                </div>
                <div className="mt-8">
                    <ListItem icon={
                        <div
                            className="rounded-full h-[30px] w-[30px] bg-gradient-to-r from-sky-blue-2 to-dodger-blue-200 flex justify-center items-center">
                            <TonIcon height={16} width={16}/>
                        </div>}>
                        <div className="flex flex-col space-y-[1px] mr-auto">
                            <div className='text-base font-medium'>Toncoin</div>
                            <div className="text-xs leading-3 text-off-white-800">0 TON</div>
                        </div>
                        <div className="mr-3"><Image src={"/chart-1.png"} alt="chart 1" height={30} width={80}/></div>
                        <div className="font-medium">0,00$</div>
                    </ListItem>
                    <ListItem icon={
                        <div
                            className="mr-3 rounded-full h-[30px] w-[30px] bg-gradient-to-r from-turquoise to-cyan flex justify-center items-center">
                            <USDTIcon className="shrink" height={16} width={16}/>
                        </div>}>

                        <div className="flex flex-col space-y-[1px] mr-auto">
                            <div className='text-base font-medium'>USDT</div>
                            <div className="text-xs leading-3 text-off-white-800">0 USDT</div>
                        </div>
                        <div className="mr-3"><Image src={"/chart-1.png"} alt="chart 1" height={30} width={80}/></div>
                        <div className="font-medium">0,00$</div>

                    </ListItem>
                    <ListItem icon={
                        <div
                            className="text-white mr-3 rounded-full h-[30px] w-[30px] bg-gradient-to-r from-[#37C383] to-[#3DA7ED] flex justify-center items-center">
                            <div className="font-medium leading-4">$</div>
                        </div>}>

                        <div className=' text-base font-medium mr-auto'>Other assets &gt;</div>
                        <div className="font-medium">0,00$</div>
                    </ListItem>
                </div>
                <Tab/>
            </div>
        </main>
    );
}
