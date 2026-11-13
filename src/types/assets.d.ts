declare module "*.svg" {
  import type { FC, SVGProps } from "react";

  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.png" {
  const content: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };

  export default content;
}
