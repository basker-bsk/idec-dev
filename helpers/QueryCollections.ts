import { gql } from "@apollo/client";
// Header
export const HEADER_QUERY = gql`
  {
    headerCollection(
      limit: 1
      locale: "en-US"
      where: { regions: { regionLabel: "Global" } }
    ) {
      items {
        hdName
        hdSearchBoxPlaceholder
        hdWelcomeUserPrelogin
        hdWelcomeUserPostlogin
        hdLoginLabel
        hdLogoutLabel
        hdMainNavigation {
          menusTitle
          menusDescription
          menusItemsCollection(limit: 7) {
            items {
              linkText
              linkUrl
              linkIcon {
                title
                url
              }
              linkClass
              linkId
              linkNewWindow
              linkChildrenCollection(limit: 10) {
                items {
                  linkText
                  linkUrl
                  linkIcon {
                    title
                    url
                  }
                  linkClass
                  linkId
                  linkHideText
                  linkNewWindow
                  linkChildrenCollection(limit: 8) {
                    items {
                      linkText
                      linkUrl
                      linkIcon {
                        title
                        url
                      }
                      linkClass
                      linkId
                      linkHideText
                      linkNewWindow
                      linkChildrenCollection(limit: 8) {
                        items {
                          linkText
                          linkUrl
                          linkIcon {
                            title
                            url
                          }
                          linkClass
                          linkId
                          linkHideText
                          linkNewWindow
                        }
                      }
                    }
                  }
                }
              }
              sys {
                id
              }
            }
          }
        }
        hdRegionIndicator
        hdProductFinder
        hdProductFinderHeading
        hdProductFinderBackgroundImage {
          title
          url
        }
        hdProductFinderIntroText
        hdProductFinderLink {
          linkText
          linkUrl
          linkNewWindow
          linkClass
          linkId
        }
      }
    }
  }
`;

// Footer
export const FOOTER_QUERY = gql`
  {
    footerCollection(limit: 1, locale: "en-US") {
      items {
        ftName
        ftIntroText
        ftSocialMediaLinksCollection(limit: 6) {
          items {
            linkText
            linkUrl
            linkNewWindow
            linkId
          }
        }
        ftNavigationCollection(limit: 4) {
          items {
            menusTitle
            menusDescription
            menusItemsCollection(limit: 15) {
              items {
                linkText
                linkUrl
                linkStyle
                linkSubText
                linkNewWindow
                linkClass
                linkId
              }
            }
          }
        }
        ftQrCode {
          title
          url
        }
        ftCopyrightText
        ftBottomNavigation {
          menusTitle
          menusDescription
          menusItemsCollection(limit: 5) {
            items {
              linkText
              linkUrl
              linkNewWindow
              linkClass
              linkId
            }
          }
        }
      }
    }
  }
`;

// Login
export const LOGIN_QUERY = gql`
  {
    landingPageIdecCollection(
      limit: 1
      where: { lpSlug: "login", regions: { regionLabel: "Global" } }
      locale: "en-US"
    ) {
      items {
        lpTitle
        lpPageTitle
        lpComponentsCollection(limit: 1) {
          items {
            ... on PreloginForm {
              __typename
              plpageName
              plbackgroundImage {
                title
                url
              }
              plHeading
              plintroText {
                json
              }
              plFeatures
              plDescription {
                json
              }
            }
          }
        }
        lpSeoTitle
        lpSeoDescription
        lpCanonicalUrl
        lpFeaturedImage {
          title
          url
        }
        lpNoIndex
        lpNoFollow
      }
    }
  }
`;

// Register
export const REGISTER_QUERY = gql`
  {
    landingPageIdecCollection(
      limit: 1
      where: { lpSlug: "registration", regions: { regionLabel: "Global" } }
      locale: "en-US"
    ) {
      items {
        lpTitle
        lpPageTitle
        lpComponentsCollection(limit: 1) {
          items {
            ... on PreloginForm {
              __typename
              plpageName
              plbackgroundImage {
                title
                url
              }
              plHeading
              plintroText {
                json
              }
              plFeatures
              plDescription {
                json
              }
            }
          }
        }
        lpSeoTitle
        lpSeoDescription
        lpCanonicalUrl
        lpFeaturedImage {
          title
          url
        }
        lpNoIndex
        lpNoFollow
      }
    }
  }
`;

// Forgot Password
export const FORGOT_PASSWORD = gql`
  {
    landingPageIdecCollection(
      limit: 1
      where: { lpSlug: "forgot-password", regions: { regionLabel: "Global" } }
      locale: "en-US"
    ) {
      items {
        lpTitle
        lpPageTitle
        lpComponentsCollection(limit: 1) {
          items {
            ... on PreloginForm {
              __typename
              plpageName
              plbackgroundImage {
                title
                url
              }
              plHeading
              plintroText {
                json
              }
              plFeatures
              plDescription {
                json
              }
            }
          }
        }
        lpSeoTitle
        lpSeoDescription
        lpCanonicalUrl
        lpFeaturedImage {
          title
          url
        }
        lpNoIndex
        lpNoFollow
      }
    }
  }
`;

// Regions
export const REGIONS_QUERY = gql`
  {
    regionsCollection(locale: "en-US") {
      items {
        regionLabel
        regionAllowedLanguages
        regionSite
      }
    }
  }
`;
