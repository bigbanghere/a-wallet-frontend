import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        fontSize: {
            "xss": "10px",
            "xs": "12px",
            sm: '0.875rem',
            base: '1rem',
            lg: "1.125rem",
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
            '9xl': '8rem',
        },
        extend: {
            fontFamily: {
                "sf-pro": ['var(--font-sf-pro-text)', "serif"],
            },
            colors: {
                "off-gray-8":"#888888",
                "off-white-100": "#F1F1F1",
                "off-white-400": "#F4F4F4",
                "off-white-800": "rgba(120, 120, 120, 1)",
                "off-white-900": "#949494",
                "grayish-blue": "#7D7D85",
                "jungle-green": "#37C383",
                "dodger-blue-100": "#1196FF",
                "dodger-blue-200": "#3DAAE4",
                "sky-blue-1":"#3DA6F0",
                "sky-blue-2":"#5BB7FF",
                "sky-blue-3":"#3DB0D1",
                "royal-blue":"#0477FF",
                "turquoise":"#3ABCA5",
                "cyan":"#3BB7B7",
                "grayish-purple": "#EFEEF4",
                "azure-blue":"#007AFF"
            },
        },
    },
    plugins: [],
};
export default config;
