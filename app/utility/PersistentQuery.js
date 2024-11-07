const endpoint =
  "https://graphql.contentful.com/content/v1/spaces/fg4hnnyn9urp/environments/DEV";
const headers = {
  "content-type": "application/json",
  Authorization: "Bearer R5nPywxo-IjJZgx0xhmPtujN99dWIvWUGzcFoCwd2HI",
};

async function getDataFromPersistantQuery() {
  await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer R5nPywxo-IjJZgx0xhmPtujN99dWIvWUGzcFoCwd2HI",
    },
    body: JSON.stringify({
      query: `query{
  landingPageIdecCollection(
    limit: 1
    where: {lpSlug: "home", regions: {regionLabel: "Global"}}
    locale: "en-US"
  ) {
    __typename
    items {
      lpTitle
      lpComponentsCollection(limit: 15) {
        items {
          ... on Carousel {
            __typename
            crTitle
            crStyle
            crViewAllLink {
              linkText
              linkId
              linkUrl
              linkStyle
              linkClass
              linkNewWindow
            }
            crSlidesPerRow
            crComponentsCollection(limit: 10) {
              items {
                __typename
                ... on Banner {
                  bannerOverlineTxt
                  bannerTitle
                  bannerSubTitle
                  bannerBody
                  bannerLinkCollection {
                    items {
                      linkText
                      linkId
                      linkUrl
                      linkStyle
                      linkClass
                      linkNewWindow
                    }
                  }
                  bannerSectionAllignment
                  bannerBgImgDsktp {
                    title
                    url
                  }
                  bannerBgImgMob {
                    title
                    url
                  }
                  bannerTextColor
                }
                ... on Card {
                  __typename
                  cdTitle
                  cdDescription {
                    json
                  }
                  cdStyle
                  cdBadge
                  cdOverline1
                  cdOverline2
                  cdImage {
                    title
                    url
                  }
                  cdLink {
                    linkText
                    linkId
                    linkUrl
                    linkStyle
                    linkClass
                    linkNewWindow
                  }
                }
              }
            }
          }
          ... on Counters {
            __typename
            introText {
              json
            }
            counter1Prefix
            counter1Suffix
            counter1Text
            counter2Prefix
            counter2Suffix
            counter2Text
            counter3Prefix
            counter3Suffix
            counter3Text
          }
          ... on ListOfLinks {
            __typename
            listLinkTitle
            listLinkIntroduction {
              json
            }
            listLinkCollection(limit:8) {
              items {
                linkText
                linkId
                linkUrl
                linkIcon {
                  title
                  url
                }
                linkStyle
                linkClass
                linkNewWindow
              }
            }
            listLinkviewAllLink {
              linkText
              linkId
              linkUrl
              linkStyle
              linkClass
              linkNewWindow
            }
            listLinkStyle
          }
          ... on TextImage {
            __typename
            tiOverline
            tiTitle
            tiDescription {
              json
            }
            tiButton {
              linkText
              linkId
              linkUrl
              linkStyle
              linkClass
              linkNewWindow
            }
            tiLink {
              linkText
              linkId
              linkUrl
              linkStyle
              linkClass
              linkNewWindow
            }
            tiImagePosition
            tiImageDesktop {
              title
              url
            }
            tiImageMobile {
              title
              url
            }
          }
          ... on Columns {
            __typename
            clmTitle
            clmIntroductionText{
              json
            }
            clmContentsCollection(limit: 6) {
              items {
                __typename
                ... on Card {
                  cdTitle
                  cdDescription {
                    json
                  }
                  cdStyle
                  cdBadge
                  cdOverline1
                  cdOverline2
                  cdImage {
                    title
                    url
                  }
                  cdLink {
                    linkText
                    linkId
                    linkUrl
                    linkIcon {
                      title
                      url
                    }
                    linkStyle
                    linkClass
                    linkNewWindow
                  }
                }
              }
            }
          }
          ... on CallToAction {
            __typename
            ctaTitle
            ctaText {
              json
            }
            ctaLink {
              linkText
              linkId
              linkUrl
              linkStyle
              linkClass
              linkNewWindow
            }
            ctaBgImageDsktp {
              title
              url
            }
            ctaBgImageMob {
              title
              url
            }
            ctaTextColor
            ctaHideForLoggedInUsers
            ctaStyle
          }
          ... on RecentProducts {
            __typename
            rpTitle
            rpDescription {
              json
            }
            rpProductListType
          }
          ... on LatestOnArticles {
            __typename
            loaTitle
            loaContentsCollection(limit: 5) {
              __typename
              items {
                __typename
                cdTitle
                cdDescription {
                  json
                }
                cdStyle
                cdBadge
                cdOverline1
                cdOverline2
                cdImage {
                  title
                  url
                }
                cdVideo {
                  title
                  url
                }
                cdLink {
                  linkText
                  linkId
                  linkUrl
                  linkStyle
                  linkNewWindow
                  linkIcon {
                    title
                    url
                  }
                  linkOpenInAPopUp
                }
              }
            }
            loaCta {
              ctaTitle
              ctaLink {
                linkText
                linkUrl
                linkStyle
                linkNewWindow
                linkClass
                linkId
              }
              ctaStyle
            }
          }
        }
      }
    }
  }
      }`,
      extensions: {
        persistedQuery: {
          sha256Hash:
            "df552529222aa880a6c9aff92475f5d7ab37046b2d11f9074ffe0a937a3f126c",
          version: 1,
        },
      },
    }),
  });
  const data = await fetch(endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      extensions: {
        persistedQuery: {
          sha256Hash:
            "df552529222aa880a6c9aff92475f5d7ab37046b2d11f9074ffe0a937a3f126c",
          version: 1,
        },
      },
    }),
  });
  return data.json();
}
export default getDataFromPersistantQuery;
