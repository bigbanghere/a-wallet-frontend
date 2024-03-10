import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            fontSize: {
                "xss": "10px",
                "ssm": "13px",
                "msm": '15px',
                "slg": "17px",
            },
            borderRadius: {
                sxl: "10px",
            },
            fontFamily: {
                "sf-pro": ['var(--font-sf-pro-text)', "serif"],
            },
            colors: {
                "grayish-purple": "#EFEEF4",
                "off-white-100": "#F1F1F1",
                "off-white-400": "#F4F4F4",
                "off-white-800": "rgba(120, 120, 120, 1)",
                "off-white-900": "#949494",
                "off-gray-2":"#222222",
                "off-gray-8":"#888888",
                "steel-gray":"#696A6F",
                "blue-gray":"#97A0A7",
                "grayish-blue": "#7D7D85",
                "dodger-blue-100": "#1196FF",
                "dodger-blue-200": "#3DAAE4",
                "sky-blue-1":"#3DA6F0",
                "sky-blue-2":"#5BB7FF",
                "sky-blue-3":"#3DB0D1",
                "cerulean-blue":"#037EE5",
                "royal-blue":"#0477FF",
                "azure-blue": "#007AFF",
                "turquoise":"#3ABCA5",
                "cyan":"#3BB7B7",
                "pale-lime":"#E1FEC6",
                "jungle-green": "#37C383",
                "emerald-green":"#4ECC5E",
                "saffron":"#F09A36",
            },
        },
    },
    plugins: [],
};
export default config;
