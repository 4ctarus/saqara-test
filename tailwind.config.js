/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        title: [
          "var(--md-sys-typescale-title-medium-font-size)",
          {
            fontFamily: "var(--md-sys-typescale-title-medium-font-family-name)",
            fontStyle: "var(--md-sys-typescale-title-medium-font-family-style)",
            fontWeight: "var(--md-sys-typescale-title-medium-font-weight)",
            letterSpacing: "var(--md-sys-typescale-title-medium-tracking)",
            lineHeight: "var(--md-sys-typescale-title-medium-height)",
            textTransform:
              "var(--md-sys-typescale-title-medium-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-title-medium-text-decoration)",
          },
        ],
        "title-large": [
          "var(--md-sys-typescale-title-large-font-size)",
          {
            fontFamily: "var(--md-sys-typescale-title-large-font-family-name)",
            fontStyle: "var(--md-sys-typescale-title-large-font-family-style)",
            fontWeight: "var(--md-sys-typescale-title-large-font-weight)",
            letterSpacing: "var(--md-sys-typescale-title-large-tracking)",
            lineHeight: "var(--md-sys-typescale-title-large-height)",
            textTransform: "var(--md-sys-typescale-title-large-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-title-large-text-decoration)",
          },
        ],
        "title-small": [
          "var(--md-sys-typescale-title-small-font-size)",
          {
            fontFamily: "var(--md-sys-typescale-title-small-font-family-name)",
            fontStyle: "var(--md-sys-typescale-title-small-font-family-style)",
            fontWeight: "var(--md-sys-typescale-title-small-font-weight)",
            letterSpacing: "var(--md-sys-typescale-title-small-tracking)",
            lineHeight: "var(--md-sys-typescale-title-small-height)",
            textTransform: "var(--md-sys-typescale-title-small-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-title-small-text-decoration)",
          },
        ],
        display: [
          "var(--md-sys-typescale-display-medium-font-size)",
          {
            fontFamily:
              "var(--md-sys-typescale-display-medium-font-family-name)",
            fontStyle:
              "var(--md-sys-typescale-display-medium-font-family-style)",
            fontWeight: "var(--md-sys-typescale-display-medium-font-weight)",
            letterSpacing: "var(--md-sys-typescale-display-medium-tracking)",
            lineHeight: "var(--md-sys-typescale-display-medium-height)",
            textTransform:
              "var(--md-sys-typescale-display-medium-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-display-medium-text-decoration)",
          },
        ],
        "display-large": [
          "var(--md-sys-typescale-display-large-font-size)",
          {
            fontFamily:
              "var(--md-sys-typescale-display-large-font-family-name)",
            fontStyle:
              "var(--md-sys-typescale-display-large-font-family-style)",
            fontWeight: "var(--md-sys-typescale-display-large-font-weight)",
            letterSpacing: "var(--md-sys-typescale-display-large-tracking)",
            lineHeight: "var(--md-sys-typescale-display-large-height)",
            textTransform:
              "var(--md-sys-typescale-display-large-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-display-large-text-decoration)",
          },
        ],
        "display-small": [
          "var(--md-sys-typescale-display-small-font-size)",
          {
            fontFamily:
              "var(--md-sys-typescale-display-small-font-family-name)",
            fontStyle:
              "var(--md-sys-typescale-display-small-font-family-style)",
            fontWeight: "var(--md-sys-typescale-display-small-font-weight)",
            letterSpacing: "var(--md-sys-typescale-display-small-tracking)",
            lineHeight: "var(--md-sys-typescale-display-small-height)",
            textTransform:
              "var(--md-sys-typescale-display-small-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-display-small-text-decoration)",
          },
        ],
        headline: [
          "var(--md-sys-typescale-headline-medium-font-size)",
          {
            fontFamily:
              "var(--md-sys-typescale-headline-medium-font-family-name)",
            fontStyle:
              "var(--md-sys-typescale-headline-medium-font-family-style)",
            fontWeight: "var(--md-sys-typescale-headline-medium-font-weight)",
            letterSpacing: "var(--md-sys-typescale-headline-medium-tracking)",
            lineHeight: "var(--md-sys-typescale-headline-medium-height)",
            textTransform:
              "var(--md-sys-typescale-headline-medium-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-headline-medium-text-decoration)",
          },
        ],
        "headline-large": [
          "var(--md-sys-typescale-headline-large-font-size)",
          {
            fontFamily:
              "var(--md-sys-typescale-headline-large-font-family-name)",
            fontStyle:
              "var(--md-sys-typescale-headline-large-font-family-style)",
            fontWeight: "var(--md-sys-typescale-headline-large-font-weight)",
            letterSpacing: "var(--md-sys-typescale-headline-large-tracking)",
            lineHeight: "var(--md-sys-typescale-headline-large-height)",
            textTransform:
              "var(--md-sys-typescale-headline-large-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-headline-large-text-decoration)",
          },
        ],
        "headline-small": [
          "var(--md-sys-typescale-headline-small-font-size)",
          {
            fontFamily:
              "var(--md-sys-typescale-headline-small-font-family-name)",
            fontStyle:
              "var(--md-sys-typescale-headline-small-font-family-style)",
            fontWeight: "var(--md-sys-typescale-headline-small-font-weight)",
            letterSpacing: "var(--md-sys-typescale-headline-small-tracking)",
            lineHeight: "var(--md-sys-typescale-headline-small-height)",
            textTransform:
              "var(--md-sys-typescale-headline-small-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-headline-small-text-decoration)",
          },
        ],
        body: [
          "var(--md-sys-typescale-body-medium-font-size)",
          {
            fontFamily: "var(--md-sys-typescale-body-medium-font-family-name)",
            fontStyle: "var(--md-sys-typescale-body-medium-font-family-style)",
            fontWeight: "var(--md-sys-typescale-body-medium-font-weight)",
            letterSpacing: "var(--md-sys-typescale-body-medium-tracking)",
            lineHeight: "var(--md-sys-typescale-body-medium-height)",
            textTransform: "var(--md-sys-typescale-body-medium-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-body-medium-text-decoration)",
          },
        ],
        "body-large": [
          "var(--md-sys-typescale-body-large-font-size)",
          {
            fontFamily: "var(--md-sys-typescale-body-large-font-family-name)",
            fontStyle: "var(--md-sys-typescale-body-large-font-family-style)",
            fontWeight: "var(--md-sys-typescale-body-large-font-weight)",
            letterSpacing: "var(--md-sys-typescale-body-large-tracking)",
            lineHeight: "var(--md-sys-typescale-body-large-height)",
            textTransform: "var(--md-sys-typescale-body-large-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-body-large-text-decoration)",
          },
        ],
        "body-small": [
          "var(--md-sys-typescale-body-small-font-size)",
          {
            fontFamily: "var(--md-sys-typescale-body-small-font-family-name)",
            fontStyle: "var(--md-sys-typescale-body-small-font-family-style)",
            fontWeight: "var(--md-sys-typescale-body-small-font-weight)",
            letterSpacing: "var(--md-sys-typescale-body-small-tracking)",
            lineHeight: "var(--md-sys-typescale-body-small-height)",
            textTransform: "var(--md-sys-typescale-body-small-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-body-small-text-decoration)",
          },
        ],
        label: [
          "var(--md-sys-typescale-label-medium-font-size)",
          {
            fontFamily: "var(--md-sys-typescale-label-medium-font-family-name)",
            fontStyle: "var(--md-sys-typescale-label-medium-font-family-style)",
            fontWeight: "var(--md-sys-typescale-label-medium-font-weight)",
            letterSpacing: "var(--md-sys-typescale-label-medium-tracking)",
            lineHeight: "var(--md-sys-typescale-label-medium-height)",
            textTransform:
              "var(--md-sys-typescale-label-medium-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-label-medium-text-decoration)",
          },
        ],
        "label-large": [
          "var(--md-sys-typescale-label-large-font-size)",
          {
            fontFamily: "var(--md-sys-typescale-label-large-font-family-name)",
            fontStyle: "var(--md-sys-typescale-label-large-font-family-style)",
            fontWeight: "var(--md-sys-typescale-label-large-font-weight)",
            letterSpacing: "var(--md-sys-typescale-label-large-tracking)",
            lineHeight: "var(--md-sys-typescale-label-large-height)",
            textTransform: "var(--md-sys-typescale-label-large-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-label-large-text-decoration)",
          },
        ],
        "label-small": [
          "var(--md-sys-typescale-label-small-font-size)",
          {
            fontFamily: "var(--md-sys-typescale-label-small-font-family-name)",
            fontStyle: "var(--md-sys-typescale-label-small-font-family-style)",
            fontWeight: "var(--md-sys-typescale-label-small-font-weight)",
            letterSpacing: "var(--md-sys-typescale-label-small-tracking)",
            lineHeight: "var(--md-sys-typescale-label-small-height)",
            textTransform: "var(--md-sys-typescale-label-small-text-transform)",
            textDecoration:
              "var(--md-sys-typescale-label-small-text-decoration)",
          },
        ],
      },
      colors: {
        "surface-tint": "var(--md-sys-color-surface-tint)",
        "surface-tint-color": "var(--md-sys-color-surface-tint-color)",
        "on-error-container": "var(--md-sys-color-on-error-container)",
        "on-error": "var(--md-sys-color-on-error)",
        "error-container": "var(--md-sys-color-error-container)",
        "on-tertiary-container": "var(--md-sys-color-on-tertiary-container)",
        "on-tertiary": "var(--md-sys-color-on-tertiary)",
        "tertiary-container": "var(--md-sys-color-tertiary-container)",
        tertiary: "var(--md-sys-color-tertiary)",
        shadow: "var(--md-sys-color-shadow)",
        error: "var(--md-sys-color-error)",
        outline: "var(--md-sys-color-outline)",
        "on-background": "var(--md-sys-color-on-background)",
        background: "var(--md-sys-color-background)",
        "inverse-on-surface": "var(--md-sys-color-inverse-on-surface)",
        "inverse-surface": "var(--md-sys-color-inverse-surface)",
        "on-surface-variant": "var(--md-sys-color-on-surface-variant)",
        "on-surface": "var(--md-sys-color-on-surface)",
        "surface-variant": "var(--md-sys-color-surface-variant)",
        surface: "var(--md-sys-color-surface)",
        "on-secondary-container": "var(--md-sys-color-on-secondary-container)",
        "on-secondary": "var(--md-sys-color-on-secondary)",
        "secondary-container": "var(--md-sys-color-secondary-container)",
        secondary: "var(--md-sys-color-secondary)",
        "inverse-primary": "var(--md-sys-color-inverse-primary)",
        "on-primary-container": "var(--md-sys-color-on-primary-container)",
        "on-primary": "var(--md-sys-color-on-primary)",
        "primary-container": "var(--md-sys-color-primary-container)",
        primary: "var(--md-sys-color-primary)",
        // custom
        disabled: "var(--md-sys-color-disabled)",
      },
      boxShadow: {
        1: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        2: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
        3: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        4: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
        5: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
}
