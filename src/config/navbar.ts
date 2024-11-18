interface INavbarOption {
  option: string;
  icon: string;
}

const navbarOptions: INavbarOption[] = [
  { option: "home", icon: "mdi:home" },
  { option: "search", icon: "mdi:search" },
  { option: "notifications", icon: "mdi:heart" },
  { option: "profile", icon: "mdi:account-circle" },
  { option: "settings", icon: "mdi:settings" },
];

export { navbarOptions };

export type { INavbarOption };
