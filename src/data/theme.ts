import type { TailwindColor } from "@/utils/types";

type Theme = {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "teal",
    blur: {
      top: "teal",
      bottom: "violet",
    },
  },
};

export default theme;
