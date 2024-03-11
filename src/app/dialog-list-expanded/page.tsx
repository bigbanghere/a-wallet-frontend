import {ReactNode} from "react";
import {ArrowDownIcon, ArrowPathIcon, ArrowUpIcon, ChevronDownIcon} from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

const CircleButton = ({children}: { children: ReactNode }) => {
    return (
        <button
            className="w-[30px] h-[30px] rounded-full gradient-border">
            <div className="rounded-full bg-white w-7 h-7 flex justify-center items-center mx-auto">
                {/*<div className="bg-gradient-to-r from-[#38C385] to-[#3DACDF] inline-block text-transparent bg-clip-text">*/}
                    {children}
                {/*</div>*/}
            </div>
        </button>
    )
}


const ListItem = ({variant = 0}: { variant: number }) => {
    return (

        <div className="flex flex-row items-center">
            <div className="py-3 mr-3 ">
                {variant === 0 ? (
                    <div className=" rounded-full w-10 h-10 overflow-hidden relative">
                        <Link href="#">
                            <Image style={{objectFit: "cover"}} fill alt="monkey" src="/v.png"
                                   className="rounded-full"/>
                        </Link>
                    </div>
                ) : (
                    <div
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-jungle-green to-dodger-blue-200 flex justify-center items-center text-white">
                        <ArrowDownIcon/>
                    </div>
                )}
            </div>
            <div className="grow h-full border-b border-grayish-purple">
                <div className="h-full flex flex-row items-center justify-between py-3">
                    <div className="text-left text-xs">
                        <div className="font-medium text-[13px]">Vsevolod</div>
                        <div className="text-off-gray-8 line-clamp-2 text-clip">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do sfsfLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sfsf
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do sfsfLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sfsf
                        </div>
                    </div>
                    <div className="grow text-xs flex flex-col items-end space-y-1.5">
                        <div className="text-off-gray-8 ">
                            15:00
                        </div>
                        {variant === 1 ? (
                            <p className="font-medium text-sky-blue-2 whitespace-nowrap">+2,2 TON</p>
                        ) : (
                            <div
                                className="text-white bg-azure-blue rounded-full h-[22px] w-[22px] text-center leading-[22px]">1
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <main className="w-full min-h-screen p-4">
            <div className="bg-white flex flex-row items-center justify-between rounded-[10px] py-2.5 px-4">
                <div className="flex flex-row items-center">
                    <div className="text-center">
                        <div className="text-[13px] font-medium leading-4">5,00$</div>
                        <p className="text-grayish-blue text-xs mt-1 leading-3">Balance</p>
                    </div>
                    <div className="ml-3"><ChevronDownIcon strokeWidth={3} height={9} width={9} className="text-grayish-blue"/></div>
                </div>
                <div
                    className="flex flex-row-reverse justify-center  items-center text-center text-grayish-blue">

                    <div>
                        <CircleButton><ArrowDownIcon className="w-4 h-4" strokeWidth="3"/></CircleButton>

                    </div>
                    <div className="mr-[-8px]">
                        <CircleButton>
                            <ArrowPathIcon className="w-4 h-4"
                                           strokeWidth="3"/>
                        </CircleButton>
                    </div>

                    <div className="mr-[-8px]">
                        <CircleButton><ArrowUpIcon className="w-4 h-4" strokeWidth="3"/></CircleButton>

                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full bg-white rounded-[10px] mt-4 pt-5 px-4  space-y-4">

                <div className="flex text-[13px] font-medium text-center space-x-4">
                    <Link href="#" className="text-royal-blue custom-link"
                          aria-current="page">All</Link>
                    <Link href="#" className="text-off-white-900"
                          aria-current="page">Top clients</Link>
                    <Link href="#" className="text-off-white-900"
                          aria-current="page">Top clients</Link>
                </div>
                <div>
                    {[1, 2, 3, 4, 5].map((e) => (
                        <ListItem key={e} variant={e % 2}/>
                    ))}
                </div>
            </div>
        </main>
    );
}
