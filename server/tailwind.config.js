/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/**/*.blade.php"],
    theme: {
        extend: {
            colors: {
                goldenYellow: "#ED9100",
                bgBlack: "#0F0A06",
            },
            fontFamily: {
                yellowtail: ['"YellowTail"', "cursive"],
                poppins: ['"Poppins"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
