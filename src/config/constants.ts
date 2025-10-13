import { CustomAppRoutes } from "./local_api";

export const LOGO = "/images/logo.svg";
export const TOMAN_WHITE_SVG = "/images/toman-white.svg";
export const TOMAN_SVG = "/images/toman.svg";

export const HEADER_ITEMS = [
  { name: "خانه", link: CustomAppRoutes.home },
  { name: "درباره ما", link: CustomAppRoutes.about },
  { name: "قیمت‌گذاری", link: CustomAppRoutes.pricing },
  { name: "محصولات", link: CustomAppRoutes.products },
  { name: "وبلاگ", link: CustomAppRoutes.blogs },
  { name: "تماس با ما", link: CustomAppRoutes.contact },
];
