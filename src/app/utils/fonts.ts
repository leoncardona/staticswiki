import localFont from "next/font/local";

export const bladeRunnerFont = localFont({
  src: "../../../public/fonts/BladeRunner.ttf",
});

export const hackNerdFont = localFont({
  src: [
    {
      path: "../../../public/fonts/HackNerdFontMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/HackNerdFontMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/HackNerdFontMono-Bold.ttf",
      weight: "700",
      style: "normal",
    }
  ],
});
