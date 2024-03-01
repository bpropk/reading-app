export enum RootStackElements {
  // Authen
  AUTHENTICATION_STACK = "AUTHENTICATION_STACK",
  REGISTER_PAGE = "REGISTER_PAGE",
  LOGIN_PAGE = "LOGIN_PAGE",
  FORGOT_PASSWORD_PAGE = "FORGOT_PASSWORD_PAGE",
  RESET_PASSWORD_PAGE = "RESET_PASSWORD_PAGE",

  // In App
  IN_APP_STACK = "IN_APP_STACK",

  // Home
  HOME_STACK = "HOME_STACK",
  HOME_PAGE = "HOME_PAGE",

  // Library
  LIBRARY_STACK = "LIBRARY_STACK",
  LIBRARY_PAGE = "LIBRARY_PAGE",

  // Discover
  DISCOVER_STACK = "DISCOVER_STACK",
  DISCOVER_PAGE = "DISCOVER_PAGE",
  DISCOVER_NEW_PAGE = "DISCOVER_NEW_PAGE",

  // More
  MORE_STACK = "MORE_STACK",
  MORE_PAGE = "MORE_PAGE",
  PROFILE_PAGE = "PROFILE_PAGE",
}

export type RootStackParamList = {
  // Stack

  [RootStackElements.AUTHENTICATION_STACK]: undefined;
  [RootStackElements.IN_APP_STACK]: undefined;

  // Auth
  [RootStackElements.LOGIN_PAGE]: undefined;
  [RootStackElements.REGISTER_PAGE]: undefined;
  [RootStackElements.FORGOT_PASSWORD_PAGE]: undefined;
  [RootStackElements.RESET_PASSWORD_PAGE]: undefined;

  // home
  [RootStackElements.HOME_PAGE]: undefined;

  // library
  [RootStackElements.LIBRARY_PAGE]: undefined;

  // discover
  [RootStackElements.DISCOVER_PAGE]: undefined;
  [RootStackElements.DISCOVER_NEW_PAGE]: undefined;

  // profile
  [RootStackElements.PROFILE_PAGE]: undefined;
  [RootStackElements.MORE_PAGE]: undefined;
};
