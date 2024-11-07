export type TLandingPageType = {
  landingPageIdecCollection: any;
};

export type THeroBanner = {
  __typename: string;
  crTitle: string;
  crStyle: string;
  crViewAllLink: null;
  crSlidesPerRow: string;
  crComponentsCollection: {
    items: [];
  };
};

export type THeroSlide = {
  __typename: string;
  bannerOverlineTxt: string;
  bannerTitle: string;
  bannerSubTitle: null;
  bannerBody: string;
  bannerSectionAllignment: string;
  bannerTextColor: string;
  bannerBgImgDsktp: {
    title: string;
    url: string;
  };
  bannerBgImgMob: {
    title: string;
    url: string;
  };
  bannerLinkCollection: {
    items: [
      {
        linkText: string;
        linkId: null;
        linkUrl: string;
        linkStyle: string;
        linkClass: null;
        linkNewWindow: boolean;
      },
    ];
  };
};

export type TUSP = {
  __typename: string;
  introText: any;
  counter1Prefix: string;
  counter1Suffix: string;
  counter1Text: string;
  counter2Prefix: string;
  counter2Suffix: string;
  counter2Text: string;
  counter3Prefix: string;
  counter3Suffix: string;
  counter3Text: string;
};

export type TTextImageComponent = {
  __typename: string;
  tiDescription: any;
  tiOverline: string;
  tiTitle: string;
  tiImagePosition: string;
  tiImageDesktop: {
    title: string;
    url: string;
  };
  tiImageMobile: {
    title: string;
    url: string;
  };
  tiButton: {
    linkText: string;
    linkId: null;
    linkUrl: string;
    linkStyle: string;
    linkClass: null;
    linkNewWindow: boolean;
  };
  tiLink: {
    linkText: string;
    linkId: null;
    linkUrl: string;
    linkStyle: string;
    linkClass: null;
    linkNewWindow: boolean;
  };
};

export type TRandD = {
  __typename: string;
  listLinkIntroduction: null;
  listLinkTitle: string;
  listLinkStyle: string;
  listLinkviewAllLink: {
    linkText: string;
    linkId: null;
    linkUrl: string;
    linkStyle: string;
    linkClass: null;
    linkNewWindow: boolean;
  };
  listLinkCollection: {
    items: [
      {
        linkText: string;
        linkId: null;
        linkUrl: string;
        linkStyle: string;
        linkClass: null;
        linkNewWindow: boolean;
        linkIcon: {
          title: string;
          url: string;
        };
      },
    ];
  };
};

export type TPF = {
  __typename: string;
  ctaText: any;
  ctaTitle: string;
  ctaTextColor: string;
  ctaHideForLoggedInUsers: boolean;
  ctaStyle: string;
  ctaBgImageDsktp: {
    title: string;
    url: string;
  };
  ctaBgImageMob: {
    title: string;
    url: string;
  };
  ctaLink: {
    linkText: string;
    linkId: null;
    linkUrl: string;
    linkStyle: string;
    linkClass: null;
    linkNewWindow: boolean;
  };
};

export type TPopularCategories = {
  __typename: string;
  clmIntroductionText: null;
  clmStyle: string;
  clmTitle: string;
  clmContentsCollection: {
    items: [
      {
        __typename: string;
        cdDescription: null;
        cdTitle: string;
        cdStyle: string;
        cdBadge: null;
        cdOverline1: null;
        cdOverline2: null;
        cdImage: {
          title: string;
          url: string;
        };
        cdLink: {
          linkText: string;
          linkId: null;
          linkIcon: null;
          linkUrl: string;
          linkStyle: string;
          linkClass: null;
          linkNewWindow: boolean;
        };
      },
    ];
  };
};

export type TLoginBanner = {
  __typename: string;
  ctaText: any;
  ctaTitle: string;
  ctaTextColor: string;
  ctaHideForLoggedInUsers: boolean;
  ctaStyle: string;
  ctaBgImageDsktp: {
    title: string;
    url: string;
  };
  ctaBgImageMob: {
    title: string;
    url: string;
  };
  ctaLink: {
    linkText: string;
    linkId: null;
    linkUrl: string;
    linkStyle: string;
    linkClass: null;
    linkNewWindow: boolean;
  };
};

export type TLOA = {
  __typename: string;
  loaTitle: string;
  loaCta: {
    ctaTitle: string;
    ctaStyle: string;
    ctaLink: {
      linkText: string;
      linkUrl: string;
      linkStyle: string;
      linkNewWindow: boolean;
      linkClass: null;
      linkId: null;
    };
  };
  loaContentsCollection: {
    __typename: string;
    items: [
      {
        __typename: string;
        cdDescription: any;
        cdTitle: string;
        cdStyle: string;
        cdBadge: null;
        cdOverline1: string;
        cdOverline2: null;
        cdVideo: null;
        cdImage: {
          title: string;
          url: string;
        };
        cdLink: {
          linkText: string;
          linkId: null;
          linkUrl: string;
          linkStyle: string;
          linkNewWindow: boolean;
          linkIcon: null;
          linkOpenInAPopUp: string;
        };
      },
    ];
  };
};

export type TOLATWO = {
  __typename: string;
  cdDescription: any;
  cdTitle: string;
  cdStyle: string;
  cdBadge: null;
  cdOverline1: string;
  cdOverline2: null;
  cdVideo: null;
  cdImage: {
    title: string;
    url: string;
  };
  cdLink: {
    linkText: string;
    linkId: null;
    linkUrl: string;
    linkStyle: string;
    linkNewWindow: boolean;
    linkIcon: null;
    linkOpenInAPopUp: string;
  };
};

export type THelp = {
  __typename: string;
  clmIntroductionText: any;
  clmStyle: string;
  clmTitle: string;
  clmContentsCollection: {
    items: [
      {
        __typename: string;
        cdDescription: any;
        cdTitle: string;
        cdStyle: string;
        cdBadge: null;
        cdOverline1: null;
        cdOverline2: null;
        cdImage: {
          title: string;
          url: string;
        };
        cdLink: {
          linkText: string;
          linkId: null;
          linkUrl: string;
          linkIcon: null;
          linkStyle: string;
          linkClass: null;
          linkNewWindow: boolean;
        };
      },
    ];
  };
};

export type TCarousel = {
  __typename: string;
  crTitle: string;
  crStyle: string;
  crSlidesPerRow: string;
  crViewAllLink: {
    linkText: string;
    linkId: null;
    linkUrl: string;
    linkStyle: string;
    linkClass: null;
    linkNewWindow: boolean;
  };
  crComponentsCollection: {
    items: [
      {
        __typename: string;
        cdDescription: null;
        cdTitle: string;
        cdStyle: string;
        cdBadge: null;
        cdOverline1: string;
        cdOverline2: null;
        cdImage: {
          title: string;
          url: string;
        };
        cdLink: {
          linkText: string;
          linkId: null;
          linkUrl: string;
          linkStyle: string;
          linkClass: null;
          linkNewWindow: boolean;
        };
      },
    ];
  };
};

export type TCarouselSlide = {
  __typename: string;
  cdDescription: null;
  cdTitle: string;
  cdStyle: string;
  cdBadge: null;
  cdOverline1: string;
  cdOverline2: null;
  crStyle: string;
  cdImage: {
    title: string;
    url: string;
  };
  cdLink: {
    linkText: string;
    linkId: null;
    linkUrl: string;
    linkStyle: string;
    linkClass: null;
    linkNewWindow: boolean;
  };
};

export type TCarouselSettings = {
  dots: boolean;
  arrows: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
  pauseOnFocus: boolean;
  responsive: [
    {
      breakpoint: number;
      settings: {
        slidesToShow: number;
      };
    },
  ];
};

export type TLogin = {
  __typename: string;
  plintroText: null;
  plDescription: any;
  plpageName: string;
  plHeading: string;
  plFeatures: [
    {
      id: string;
      key: string;
      value: string;
    },
  ];
  plbackgroundImage: {
    title: string;
    url: string;
  };
};
