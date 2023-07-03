export interface NavbarProps {
  path: string;
  title: string;
}

export enum navBarPath {
  HOME = "/",
  SERVICES = "/service",
  ABOUT_ME = "/about_me",
  SKILLS = "/skills",
  PORTFOLIO = "/portfolio",
  CLIENTS = "/clients",
  CONTACT = "/contact",
}

export enum navBarTitle {
  HOME = "HOME",
  SERVICES = "SERVICES",
  ABOUT_ME = "ABOUT ME",
  SKILLS = "SKILLS",
  PORTFOLIO = "PORTFOLIO",
  CLIENTS = "CLIENTS",
  CONTACT = "CONTACT",
}

export const navbar: NavbarProps[] = [
  { path: navBarPath.HOME, title: navBarTitle.HOME },
  { path: navBarPath.SERVICES, title: navBarTitle.SERVICES },
  { path: navBarPath.ABOUT_ME, title: navBarTitle.ABOUT_ME },
  { path: navBarPath.SKILLS, title: navBarTitle.SKILLS },
  { path: navBarPath.PORTFOLIO, title: navBarTitle.PORTFOLIO },
  { path: navBarPath.CLIENTS, title: navBarTitle.CLIENTS },
  { path: navBarPath.CONTACT, title: navBarTitle.CONTACT },
];
