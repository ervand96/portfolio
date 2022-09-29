export interface NavbarProps {
  path: string;
  title: string;
}

export enum navBarPath {
  HOME = "/",
  ABOUT = "/about",
  TODO_LIST = "/todo-list",
  CONTACT = "/contact",
}

export const navbar: NavbarProps[] = [
  { path: navBarPath.HOME, title: "HOME" },
  { path: navBarPath.ABOUT, title: "MY SKILLS" },
  { path: navBarPath.TODO_LIST, title: "ABOUT ME" },
  { path: navBarPath.CONTACT, title: "PROJECTS" },
];
