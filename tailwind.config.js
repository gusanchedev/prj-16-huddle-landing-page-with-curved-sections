module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        pink: "hsl(322, 100%, 66%)",
        lightPink: "hsl(321, 100%, 78%)",
        lightRed: "hsl(0, 100%, 63%)",
        veryDarkCyan: "hsl(192, 100%, 9%)",
        veryPaleBlue: "hsl(207, 100%, 98%)",
      },
      backgroundImage: {
        bgfootertopdesktop: "url('images/bg-footer-top-desktop.svg')",
        bgfootertopmobile: "url('images/bg-footer-top-mobile.svg')",
        bgsectionbottomdesktop1:
          "url('images/bg-section-bottom-desktop-1.svg')",
        bgsectionbottomdesktop2:
          "url('images/bg-section-bottom-desktop-2.svg')",
        bgsectionbottommobile1: "url('images/bg-section-bottom-mobile-1.svg')",
        bgsectionbottommobile2: "url('images/bg-section-bottom-mobile-2.svg')",
        bgsectiontopdesktop1: "url('images/bg-section-top-desktop-1.svg')",
        bgsectiontopdesktop2: "url('images/bg-section-top-desktop-2.svg')",
        bgsectiontopmobile1: "url('images/bg-section-top-mobile-1.svg')",
        bgsectiontopmobile2: "url('images/bg-section-top-mobile-2.svg')",
      },
      backgroundPosition: {
        mytop: "top -2rem",
      },
    },
  },
  plugins: [],
};
