import Head from 'next/head';
import settings from '../../settings/settings-development';

const socialTags = ({
  canonicalURL,
  title = settings.title,
  description = settings.description,
  image,
  createdAt,
  updatedAt,
}) => {
  const metaTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image:src', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'og:title', content: title },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: canonicalURL },
    { name: 'og:image', content: image },
    { name: 'og:description', content: description },
    {
      name: 'og:published_time',
      content: createdAt || new Date().toISOString(),
    },
    {
      name: 'og:modified_time',
      content: updatedAt || new Date().toISOString(),
    },
  ];

  return metaTags;
};

const SEO = ({ title, description = settings.description, image = settings.social.image, url }) => {
  const HOST = process.env.NEXT_PUBLIC_HOST;
  const canonicalURL = url ? `${HOST}/${url}` : HOST;
  const metaTitle = title ? `${title} | Chemcademy Tomasz Boinski` : 'Chemcademy Tomasz Boinski';
  const metaImage = `${HOST}/${image}`;
  const metaBackground = `${HOST}/tlo.jpg`;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      <meta itemprop="name" content={metaTitle} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={metaImage} />

      {socialTags({ canonicalURL, title: metaTitle, description, image: metaImage }).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: metaTitle,
            url: canonicalURL,
            logo: metaImage,
            image: metaBackground,
            hasMap: 'https://goo.gl/maps/cGy6atdyyN7My36QA',
            telephone: '731 026 396',
            email: 'tboinski@yahoo.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Dom handlowy Manhattan lokal 3B plac Pułaskiego 7',
              addressLocality: 'Olsztyn',
              addressRegion: 'Warmińsko- mazurskie',
              postalCode: '10-515',
              addressCountry: 'PL',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '53.780585656146705',
              longitude: '20.490466228835803',
            },
            sameAs: ['https://www.facebook.com/chemcademy'],
          }),
        }}
      />

      {typeof url === 'string' && <link rel="canonical" href={canonicalURL} />}
    </Head>
  );
};

export default SEO;
