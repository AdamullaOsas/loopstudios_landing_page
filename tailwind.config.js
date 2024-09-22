/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,jsx, js, ts, tsx}"],
    theme: {
        extend: {
            screens: {
                br: "1100px",
            },
        },
    },
    plugins: [],
};
