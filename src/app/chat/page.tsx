import clsx from "clsx";
import {CheckIcon, ChevronLeftIcon, ClipIcon, PaperAirplaneIcon} from "@/components/icons";


const ReceiveMessage = ({username, message, time}: {username:string, message:string, time: string})=>{
    return (
        <div className="flex flex-row items-start text-xs">
            <div className="w-8 h-8 bg-saffron rounded-full mr-2.5"/>
            <div className="space-y-1.5">
                <div className="font-medium text-ssm text-off-gray-2">{username}</div>
                <div className="rounded-lg bg-grayish-purple/50 p-2">{message}</div>
                <div className="text-grayish-blue">{time}</div>
            </div>
        </div>
    )
}

const SendMessage = ({message, time}: {message:string, time: string})=>{
    return (

        <div className="flex flex-row justify-end items-start text-xs ">
            <div className="space-y-1.5  mr-2.5">
                <div className="flex flex-row  space-x-1">
                    <CheckIcon className="self-end h-3 w-3 bg-emerald-green rounded-full text-white p-0.5" strokeWidth={3} height={12} width={12}/>
                    <div className="rounded-lg bg-pale-lime p-2">{message}</div>
                </div>
                <div className="text-grayish-blue text-right">{time}</div>
            </div>
            <div className="w-8 h-8 bg-saffron rounded-full"/>
        </div>
    )
}

const InputMenu = ({className=""}:{className?:string})=>{
    return (
        <div className={`flex flex-row justify-between text-blue-gray  items-center space-x-2.5 ${className}`}>
            <div className="relative rounded-lg  w-full outline-0">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <PaperAirplaneIcon width={14} height={14} />
                </div>
                <input type="text" name="price" id="price"
                       className={clsx(
                           "h-8 w-full bg-grayish-purple outline-0",
                           "block w-full rounded-lg border-0 py-1.5 pl-8 ",
                           "placeholder:text-blue-gray ",
                           "sm:text-sm sm:leading-6"
                       )}
                       placeholder="Write your message"/>
            </div>
            {/*<input type="text" placeholder="Write your message" className="grow bg-grayish-purple rounded-lg h-8 "/>*/}
            <button>
                <ClipIcon width={32} height={32} className=" p-2 rounded-full bg-grayish-purple"/>
            </button>
        </div>
    )
}


export default function Home() {
    return (
        <main className="w-full min-h-screen p-4 h-full">
            <div className="h-full flex flex-col w-full bg-white rounded-sxl py-4">
                <div className="flex flex-row justify-between items-center border-b border-grayish-purple pb-2.5 px-4">
                    <div className="flex flex-row items-center text-cerulean-blue">
                        <div><ChevronLeftIcon/></div>
                        <div className="text-slg">Back</div>
                    </div>
                    <div className="text-center">
                        <div className="text-msm text-black font-semibold">Info</div>
                        <div className="text-ssm text-off-white-800">300 messages</div>
                    </div>
                    <div className="text-3xl">🦄</div>
                </div>
                <div className="grow h-full p-4 space-y-8 overflow-x-scroll">
                    <ReceiveMessage username="Anonymous"
                                    message="Hi! I'll provide the product right now!"
                                    time="15:00"
                    />
                    <ReceiveMessage username="Anonymous"
                                    message="Hi! I'll provide the product right now!"
                                    time="15:00"
                    />
                    <ReceiveMessage username="Anonymous"
                                    message="Hi! I'll provide the product right now!"
                                    time="15:00"
                    />
                    <ReceiveMessage username="Anonymous"
                                    message="Hi! I'll provide the product right now!"
                                    time="15:00"
                    />
                    <ReceiveMessage username="Anonymous"
                                    message="Hi! I'll provide the product right now!"
                                    time="15:00"
                    />
                    <SendMessage message="All right, thanks!" time="15:00"/>
                    <ReceiveMessage username="Anonymous"
                                    message="Wish you the best of luck!"
                                    time="15:00"
                    />
                    <SendMessage message="Thank you, and the same to you!" time="15:00"/>


                    <div className="mt-15 p-4 text-center border border-grayish-purple rounded-sxl  text-ssm">
                        <div className="text-steel-gray">Order successfully completed</div>
                        <button
                            className="w-52 mt-2.5 gap-2.5 rounded-sxl  text-saffron border border-saffron font-medium py-2.5">
                            Leave a review
                        </button>
                    </div>
                </div>
                <InputMenu className="mx-4 mt-16"/>
            </div>
        </main>
    );
}
