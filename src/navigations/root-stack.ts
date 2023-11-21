export enum RootStackElements {
  HOME_STACK = "HOME_STACK",
  HOME_PAGE = "HOME_PAGE",

  LIBRARY_STACK = "LIBRARY_STACK",
  LIBRARY_PAGE = "LIBRARY_PAGE",

  DISCOVER_STACK = "DISCOVER_STACK",
  DISCOVER_PAGE = "DISCOVER_PAGE",

  MORE_STACK = "MORE_STACK",
  MORE_PAGE = "MORE_PAGE",
}

export type RootParamsList = {
  [RootStackElements.HOME_PAGE]: undefined;
  [RootStackElements.LIBRARY_PAGE]: undefined;
  [RootStackElements.DISCOVER_PAGE]: undefined;
  [RootStackElements.MORE_PAGE]: undefined;
};
