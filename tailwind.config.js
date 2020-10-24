module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["Merriweather"],
      mono: ["Inconsolata", "monospace"],
      body: ["Inconsolata"]
    },
    extend: {
      colors: {
        teal: {
          100: "#E6F3F4",
          200: "#C1E0E3",
          300: "#9BCDD2",
          400: "#50A8B0",
          500: "#05828E",
          600: "#057580",
          700: "#034E55",
          800: "#023B40",
          900: "#02272B"
        },
        pink: {
          100: "#F9E7EC",
          200: "#EFC3CF",
          300: "#E59EB1",
          400: "#D25677",
          500: "#BF0D3D",
          600: "#AC0C37",
          700: "#730825",
          800: "#56061B",
          900: "#390412"
        },
        blue: {
          100: "#E6ECEF",
          200: "#C1D0D6",
          300: "#9CB3BE",
          400: "#527A8D",
          500: "#08415C",
          600: "#073B53",
          700: "#052737",
          800: "#041D29",
          900: "#02141C"
        },
        manz: {
          100: "#FBFDF0",
          200: "#F6F9DA",
          300: "#F0F5C4",
          400: "#E4EE98",
          500: "#D9E76C",
          600: "#C3D061",
          700: "#828B41",
          800: "#626831",
          900: "#414520"
        },
        grey: {
          100: "#FAFBFC",
          200: "#F2F6F6",
          300: "#EBF1F1",
          400: "#DBE6E7",
          500: "#CCDBDC",
          600: "#B8C5C6",
          700: "#7A8384",
          800: "#5C6363",
          900: "#3D4242"
        },
        orange: {
          100: "#FEF2E9",
          200: "#FCE0C8",
          300: "#FACDA7",
          400: "#F6A765",
          500: "#F28123",
          600: "#DA7420",
          700: "#914D15",
          800: "#6D3A10",
          900: "#49270B"
        },
        purple: {
          100: "#F3E6EF",
          200: "#E0C0D8",
          300: "#CD9AC1",
          400: "#A84E92",
          500: "#820263",
          600: "#750259",
          700: "#4E013B",
          800: "#3B012D",
          900: "#27011E"
        },
        yellow: {
          100: "#FFFEF1",
          200: "#FFFCDD",
          300: "#FFFAC8",
          400: "#FFF69E",
          500: "#FFF275",
          600: "#E6DA69",
          700: "#999146",
          800: "#736D35",
          900: "#4D4923"
        },
        red: {
          100: "#FFECEB",
          200: "#FFCECD",
          300: "#FFB1AF",
          400: "#FF7774",
          500: "#FF3C38",
          600: "#E63632",
          700: "#992422",
          800: "#731B19",
          900: "#4D1211"
        },
        green: {
          100: "#E6F6F2",
          200: "#C1E9DF",
          300: "#9BDCCB",
          400: "#51C1A4",
          500: "#06A77D",
          600: "#059671",
          700: "#04644B",
          800: "#034B38",
          900: "#023226"
        },
        black: {
          100: "#EBEAE9",
          200: "#CDCBC9",
          300: "#AFABA8",
          400: "#726C67",
          500: "#362D26",
          600: "#312922",
          700: "#201B17",
          800: "#181411",
          900: "#100E0B"
        }
      }
    }
  },
  variants: {},
  corePlugins: {
    container: false
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          "@screen sm": {
            maxWidth: "640px"
          },
          "@screen md": {
            maxWidth: "768px"
          },
          "@screen lg": {
            maxWidth: "900px"
          },
          "@screen xl": {
            maxWidth: "900px"
          }
        }
      });
    }
  ]
};
