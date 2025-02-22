interface MenuItem {
  title: string;
  url: string;
  children?: MenuItem[];
}

export type { MenuItem };
