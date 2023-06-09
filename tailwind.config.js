/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      /** Base Scheme */
      gdsLightColorPrimaryNormal: "#016FF2",
      gdsLightColorPrimaryStrong: "#0167DF",
      gdsLightColorPrimaryHeavy: "#015ECB",
      gdsLightColorPrimarySubtle: "#EBF4FF",
      gdsDarkColorPrimaryNormal: "#2A8BFE",
      gdsDarkColorPrimaryStrong: "#0B7AFE",
      gdsDarkColorPrimaryHeavy: "#016BEA",
      gdsDarkColorPrimarySubtle: "#002147",
      /** Emphasis */
      gdsLightColorStatusSuccessBold: "#39CE76",
      gdsLightColorStatusInfoBold: "#016FF2",
      gdsLightColorStatusErrorBold: "#FF5353",
      gdsLightColorStatusWarningBold: "#FF7F00",
      gdsDarkColorStatusSuccessBold: "#61D792",
      gdsDarkColorStatusInfoBold: "#2A8BFE",
      gdsDarkColorStatusErrorBold: "#F87171",
      gdsDarkColorStatusWarningBold: "#FB923C",
      /** Subtle */
      gdsLightColorStatusSuccessSubtle: "rgba(176, 235, 200, 0.3)",
      gdsLightColorStatusInfoSubtle: "rgba(143, 194, 255, 0.3)",
      gdsLightColorStatusErrorSubtle: "rgba(254, 202, 202, 0.3)",
      gdsLightColorStatusWarningSubtle: "rgba(254, 215, 170, 0.3)",
      gdsDarkColorStatusSuccessSubtle: "rgba(22, 163, 81, 0.3)",
      gdsDarkColorStatusSuccessSubtle: "rgba(1, 65, 142, 0.3)",
      gdsDarkColorStatusSuccessSubtle: "rgba(205, 29, 29, 0.3)",
      gdsDarkColorStatusSuccessSubtle: "rgba(194, 65, 12, 0.3)",
      /** Accent */
      gdsLightColorAccentYellow: "#FFD333",
      gdsLightColorAccenTeal: "#15C6B2",
      gdsLightColorAccentUltramarine: "#545FE8",
      gdsLightColorAccentPurple: "#A855F7",
      gdsLightColorAccentPink: "#EE4E9D",
      gdsDarkColorAccentYellow: "#FFE247",
      gdsDarkColorAccentTeal: "#4ED9C8",
      gdsDarkColorAccentUltramarine: "#7681FC",
      gdsDarkColorAccentPurple: "#C084FC",
      gdsDarkColorAccentPink: "#F472B6",
      /** Elevation(surface) Color */
      gdsLightElevationSurfaceSunken: "#F2F5F7",
      gdsLightElevationSurfaceDefault: "#FFFFFF",
      gdsLightElevationSurfaceRaised: "#F2F5F7",
      gdsLightElevationSurfaceOverlay: "#FFFFFF",
      gdsDarkElevationSurfaceSunken: "#1D242A",
      gdsDarkElevationSurfaceDefault: "#060809",
      gdsDarkElevationSurfaceRaised: "#1D242A",
      gdsDarkElevationSurfaceOverlay: "#2E3842",
      /** Text Color */
      gdsLightColorTextPrimary: "#1D242A",
      gdsLightColorTextSecondary: "#2E3842",
      gdsLightColorTextTertiary: "#4A5A69",
      gdsLightColorTextAssistant: "#A5B4C0",
      gdsLightColorTextHint: "#C3CCD5",
      gdsLightColorTextDisable: "#E6EBEF",
      gdsLightColorTextInteractive: "#002147",
      gdsLightColorTextlink: "#5CA6FE",
      gdsColorLightTextAccent: "#016FF2",
      gdsDarkColorTextPrimary: "#F2F5F7",
      gdsDarkColorTextSecondary: "#E6EBEF",
      gdsDarkColorTextTertiary: "#DAE1E7",
      gdsDarkColorTextAssistant: "#A5B4C0",
      gdsDarkColorTextHint: "#4A5A69",
      gdsDarkColorTextDisable: "#2E3842",
      gdsDarkColorTextInteractive: "#016FF2",
      gdsDarkColorTextlink: "#005ECC",
      gdsDarkColorTextAccent: "#2A8BFE",
      /** Icon Color */
      gdsLightColorIconNormal: "#657B90",
      gdsLightColorIconStrong: "#2E3842",
      gdsLightColorIconSubtle: "#C3CCD5",
      gdsLightColorIcon: "#F0F3F5",
      gdsDarkColorIconNormal: "#A5B4C0",
      gdsDarkColorIconStrong: "#DAE1E7",
      gdsDarkColorIconSubtle: "#657B90",
      gdsDarkColorIconDisable: "#2E3842",
      /** Border Color */
      gdsLightColorBorderNormal: "#F2F5F7",
      gdsLightColorBorderStrong: "#E6EBEF",
      gdsDarkColorBorderNormal: "#2E3842",
      gdsDarkColorBorderStrong: "#4A5A69",
      /** Interaction State Layer */
      gdsLightInteractionHover: "#002147",
      gdsLightInteractionPressed: "#002147",
      gdsLightInteractionDisabled: "#002147",
      gdsDarkInteractionClearHover: "#D1E6FF",
      gdsDarkInteractionHover: "#002147",
      gdsDarkInteractionPressed: "#002147",
      gdsDarkInteractionDisabled: "#002147",
      /** Dimmer */
      gdsLightElevationSurfaceDimmer: "rgba(0, 0, 0, 0.3)",
      gdsDarkElevationSurfaceDimmer: "rgba(0, 0, 0, 0.5)",
    },
    backgroundImage: {
      /** Gradient Color */
      gdsLightColorGradient: "linear-gradient(90deg, #0069FF 0%, #4299FF 100%)",
      gdsDarkColorGradient: "linear-gradient(90deg, #2981F4 0%, #76B5FF 100%)",
    },
    fontFamily: {
      sans: "pretendard", // sans: 기본적용 폰트
      typefaceFamily: "pretendard",
      typefaceBrand: "Gotham Rounded",
      typefaceCode: "Roboto mono",
    },
    fontSize: {
      gdsTypescale25: "11px",
      gdsTypescale50: "12px",
      gdsTypescale60: "13px",
      gdsTypescale75: "14px",
      gdsTypescale100: "16px",
      gdsTypescale200: "18px",
      gdsTypescale300: "20px",
      gdsTypescale400: "22px",
      gdsTypescale500: "24px",
      gdsTypescale600: "28px",
      gdsTypescale700: "32px",
      gdsTypescale800: "36px",
      gdsTypescale900: "40px",
      gdsTypescale1000: "46px",
    },
    fontWeight: {
      gdsTypescaleWeightBold: "700",
      gdsTypescaleWeightSemibold: "500",
      gdsTypescaleWeightRegular: "400",
    },
    spacing: {
      gdsSpacing000: 0,
      gdsSpacing025: "2px",
      gdsSpacing050: "4px",
      gdsSpacing075: "6px",
      gdsSpacing100: "8px",
      gdsSpacing150: "12px",
      gdsSpacing200: "16px",
      gdsSpacing250: "20px",
      gdsSpacing300: "24px",
      gdsSpacing400: "32px",
      gdsSpacing500: "40px",
      gdsSpacing600: "48px",
      gdsSpacing800: "64px",
      gdsSpacing1000: "80px",
      ...defaultTheme.spacing,
    },
    screens: {
      xs: "767px",
      sm: "1023px",
      md: "1339px",
      lg: "1920px",
    },
    borderRadius: {
      gdsRadius100: "8px",
      gdsRadius200: "12px",
      gdsRadius300: "16px",
      gdsRadius400: "20px",
      gdsRadiusCircle: "50%",
    },
    borderWidth: {
      gdsBorder100: "1px",
      gdsBorder200: "2px",
      ...defaultTheme.borderWidth,
    },
    extend: {},
  },
  plugins: [],
};
