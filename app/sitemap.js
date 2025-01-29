export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const currentDate = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/termsconditions`,
      lastModified: currentDate,
      changeFrequency: 'never',
    },
  ];
}
