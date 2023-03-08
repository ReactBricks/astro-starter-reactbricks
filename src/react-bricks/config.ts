import { types } from "react-bricks/frontend";

import bricks from "./bricks";
import pageTypes from "./pageTypes";
import AstroLink from "./AstroLink";

const config: types.ReactBricksConfig = {
  appId: process.env.ASTRO_PUBLIC_APP_ID + "",
  apiKey: process.env.API_KEY + "",
  pageTypes,
  bricks,
  logo: "/logo.svg",
  previewPath: "/preview",
  // contentClassName: 'content', // Defined dynamically
  // isDarkColorMode: ...,        // in _app.tsx
  // toggleColorMode: ...,        // to manage Dark Mode
  renderLocalLink: AstroLink,
  navigate: () => {},
  loginPath: "/admin",
  editorPath: "/admin/editor",
  playgroundPath: "/admin/playground",
  appSettingsPath: "/admin/app-settings",
  useCssInJs: false,
  appRootElement: "#root",
  //clickToEditSide: types.ClickToEditSide.BottomRight,
  clickToEditSide: undefined,
  customFields: [],
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: 'Smartphone'}],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
};

export default config;
