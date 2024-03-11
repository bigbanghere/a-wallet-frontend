"use client"
import clsx from "clsx";
import {Tab} from '@headlessui/react'
import Link from "next/link";
import Image from "next/image";




const MenuTab = () => {
    const categories = ["Smarts", "NFTs", "Jettons"]
    return (

        <Tab.Group>

            <div className="mt-3.5">
                <Tab.List className="w-full outline-none p-px flex flex-row gap-3 bg-off-white-100 justify-around rounded-md text-black text-xs">
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            className={({selected}) =>
                                clsx('rounded-md grow py-1 text-xs outline-none', selected && 'bg-white font-semibold ')
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="grid grid-cols-5 gap-4 mt-4 pr-4">

                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => (
                    <div key={e} className="bg-off-white-400 w-[50px] h-[50px] overflow-hidden relative">
                        <Link href="#"><Image style={{objectFit: "cover"}} fill alt="monkey" src="/monkey.png"
                                              className="rounded-md"/></Link>
                    </div>
                ))}
                <button
                    className="w-[50px] h-[50px] rounded-md bg-off-white-400 text-off-white-800 hover:text-black transition-colors leading-[50px] text-center">
                    All &gt;
                </button>

            </Tab.Panels>
        </Tab.Group>
    )
}

export default MenuTab;