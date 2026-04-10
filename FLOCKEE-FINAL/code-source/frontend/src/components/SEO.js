import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords,
  canonical,
  ogImage = 'https://customer-assets.emergentagent.com/job_velo-pro/artifacts/08zgqmsz_ChatGPT%20Image%2014%20fe%CC%81vr.%202026%20a%CC%80%2014_57_05.png',
  type = 'website',
  localBusiness = false,
  location = 'Paris'
}) => {
  const siteUrl = 'https://velo-pro.preview.emergentagent.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const schemaOrgBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flockee",
    "image": ogImage,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+33745259508",
    "email": "contact@flockee.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Paris",
      "addressLocality": location,
      "addressRegion": "Île-de-France",
      "postalCode": "75000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8566,
      "longitude": 2.3522
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      siteUrl
    ],
    "priceRange": "€€",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 48.8566,
        "longitude": 2.3522
      },
      "geoRadius": "50000"
    }
  };

  const schemaOrgProduct = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Vélo électrique Flockee Delivery Bike",
    "image": ogImage,
    "description": "Vélo électrique professionnel pour la livraison des restaurants à Paris. Batterie 21 Ah, 100 km d'autonomie, transmission courroie.",
    "brand": {
      "@type": "Brand",
      "name": "Flockee"
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteUrl}/tarifs`,
      "priceCurrency": "EUR",
      "price": "2190",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Flockee"
      }
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Flockee" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="geo.region" content="FR-IDF" />
      <meta name="geo.placename" content={location} />
      <meta name="geo.position" content="48.8566;2.3522" />
      <meta name="ICBM" content="48.8566, 2.3522" />

      {/* Schema.org for Google */}
      {localBusiness && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgBusiness)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgProduct)}
      </script>
    </Helmet>
  );
};

export default SEO;