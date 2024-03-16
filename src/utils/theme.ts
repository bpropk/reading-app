import type { Theme } from "@epubjs-react-native/core";

export const light: Theme = {
  body: {
    background: "#fff",
  },
  span: {
    color: "#000 !important",
  },
  p: {
    color: "#000 !important",
  },
  li: {
    color: "#000 !important",
  },
  h1: {
    color: "#000 !important",
  },
  a: {
    color: "#000 !important",
    "pointer-events": "auto",
    cursor: "pointer",
  },
  "::selection": {
    background: "lightskyblue",
  },
};

export const dark: Theme = {
  body: {
    background: "#333",
  },
  span: {
    color: "#fff !important",
  },
  p: {
    color: "#fff !important",
  },
  li: {
    color: "#fff !important",
  },
  h1: {
    color: "#fff !important",
  },
  a: {
    color: "#fff !important",
    "pointer-events": "auto",
    cursor: "pointer",
  },
  "::selection": {
    background: "lightskyblue",
  },
};

export const sepia: Theme = {
  body: {
    background: "#e8dcb8",
  },
  span: {
    color: "#333 !important",
  },
  p: {
    color: "#333 !important",
  },
  li: {
    color: "#333 !important",
  },
  h1: {
    color: "#333 !important",
  },
  a: {
    color: "#333 !important",
    "pointer-events": "auto",
    cursor: "pointer",
  },
  "::selection": {
    background: "lightskyblue",
  },
};
