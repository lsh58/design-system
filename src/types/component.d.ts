namespace Component {
  // Gnb, Snb
  type Page = {
    id: string;
    title: string;
    link: string;
    pages?: Page[];
    path?: string[];
  };

  // Icon
  type IconColor =
    | "text-gdsLightColorIconNormal"
    | "text-gdsLightColorIconStrong"
    | "text-gdsLightColorIconSubtle"
    | "text-gdsLightColorIcon"
    | "text-gdsDarkColorIconNormal"
    | "text-gdsDarkColorIconStrong"
    | "text-gdsDarkColorIconSubtle"
    | "text-gdsDarkColorIconDisable";

  type IconSize =
    | "gdsIconSizeLg"
    | "gdsIconSizeMd"
    | "gdsIconSizeSm"
    | "gdsIconSizeXs";
  interface Icon {
    name: string;
    color?: IconColor;
    size?: IconSize;
  }
}
