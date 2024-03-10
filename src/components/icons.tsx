interface Props {

    height?: number | `${number}`;
    width?: number | `${number}`;
    className?: string;
    strokeWidth?: number | `${number}`
}


export const ArrowUpIcon = ({height = 24, width = 24, className = "", strokeWidth = 2}: Props) => {
    return (
        <svg
            className={className}
            width={width} height={height}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth}
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"/>
        </svg>
    )
}

export const ArrowDownIcon = ({height = 24, width = 24, className = "", strokeWidth = 2}: Props) => {
    return (
        <svg
            className={className}
            width={width} height={height}
            strokeWidth={strokeWidth}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
        </svg>
    )
}
export const ChevronDownIcon = ({height = 24, width = 24, className = "", strokeWidth = 2}: Props) => {
    return (
        <svg
            className={className}
            width={width} height={height} strokeWidth={strokeWidth}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"   stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
        </svg>
    )
}
export const ChevronLeftIcon = ({height = 24, width = 24, className = "", strokeWidth = 2}: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor"
             className={className}
             width={width} height={height} strokeWidth={strokeWidth}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
        </svg>

    )
}
export const CheckIcon = ({height = 24, width = 24, className = "", strokeWidth = 2}: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"

             className={className}
             width={width} height={height} strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
        </svg>


    )
}
export const ClipIcon = ({height = 24, width = 24, className = "", strokeWidth = 2}: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"

             className={className}
             width={width} height={height} strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"/>
        </svg>
    )
}

export const PaperAirplaneIcon = ({height = 24, width = 24, className = "", strokeWidth = 2}: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor"

             className={className}
             width={width} height={height} strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
        </svg>

    )
}


export const ArrowPathIcon = ({height = 24, width = 24, className = "", strokeWidth = 2}: Props) => {
    return (
        <svg
            className={className}
            width={width} height={height}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth}
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>

        </svg>
    )
}
export const TonIcon = ({height = 24, width = 24, className = "", strokeWidth = 2}: Props) => {
    return (
        <svg
            strokeWidth={strokeWidth}
            className={className}
            width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.5435 0.371979H3.29975C1.41628 0.371979 0.222495 2.40367 1.17007 4.04612L7.49214 15.004C7.90469 15.7195 8.93857 15.7195 9.35112 15.004L15.6745 4.04612C16.6208 2.4063 15.427 0.371979 13.5448 0.371979H13.5435ZM7.487 11.7179L6.11016 9.05323L2.78798 3.11146C2.56882 2.73116 2.83951 2.24382 3.29846 2.24382H7.48571V11.7192L7.487 11.7179ZM14.0527 3.11018L10.7318 9.05451L9.35498 11.7179V2.24253H13.5422C14.0012 2.24253 14.2719 2.72987 14.0527 3.11018Z"
                fill="white"/>
        </svg>
    )
}
export const USDTIcon = ({height = 24, width = 24, className = "", strokeWidth = 2}: Props) => {
    return (
        <svg
            strokeWidth={strokeWidth}
            className={className}
            width={width} height={height}
            viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.2732 6.0014V3.77H16.3759V0.370102H2.48106V3.77H7.58436V5.9996C3.43686 6.1901 0.318359 7.0115 0.318359 7.9955C0.318359 8.9795 3.43836 9.8009 7.58436 9.9926V17.1401H11.2744V9.992C15.4144 9.8009 18.5266 8.9801 18.5266 7.997C18.5266 7.0139 15.4144 6.1931 11.2744 6.002M11.2744 9.3866V9.3848C11.1703 9.3914 10.6354 9.4235 9.44436 9.4235C8.49216 9.4235 7.82226 9.3965 7.58616 9.3842V9.3872C3.92196 9.2249 1.18686 8.5868 1.18686 7.8233C1.18686 7.0598 3.92226 6.4226 7.58616 6.26V8.7515C7.82616 8.768 8.51256 8.8085 9.45996 8.8085C10.5979 8.8085 11.17 8.7611 11.275 8.7515V6.26C14.932 6.4229 17.6608 7.0616 17.6608 7.8224C17.6608 8.5832 14.9308 9.2222 11.275 9.3851"
                fill="white"/>
        </svg>

    )
}