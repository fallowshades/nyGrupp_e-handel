import { Helmet } from "react-helmet-async";
import React from "react";
type basic = {
  type: "basic";
  title: string;
  description: string;
};

type Advanced = {
  type: "advanced";
  title: string;
  description: string;
  url?: any;
  canonicalUrl?: any;
  ogImage?: any;
};

type Props = Advanced; // basic |

const MetaTags = (props: Props) => {
  const { type, title, description, url, canonicalUrl, ogImage } = props;

  return (
    <Helmet>
      {/* Meta Description */}
      <meta name="description" content={description} />
      <title>{title}</title>

      {type === "advanced" && (
        <>
          {/* Canonical Link */}
          <link rel="canonical" href={canonicalUrl} />

          {/* Open Graph Tags */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          {/* Open Graph Tags  extra*/}
          <meta property="og:url" content={url} />
          {ogImage && <meta property="og:image" content={ogImage} />}

          {/* Optional Charset and Viewport */}
          <meta charSet="UTF-8" />
        </>
      )}
    </Helmet>
  );
};

export default MetaTags;
