var fs = require("fs");

module.exports = {
  images: {
    domains: ["www.facebook.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/vikar",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/virksomheder",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/uddannelser",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/om-os",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/kontakt",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/vikar/hop-ombord",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/ledige-stillinger.html",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/en",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/en/vikar",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/en/vikrsomheder",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/en/uddannelser",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/en/om-os",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/en/kontakt",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
      {
        source: "/en/vikar/hop-ombord",
        destination: "https://www.moment.dk/",
        permanent: true,
      },
    ];
  },
};
