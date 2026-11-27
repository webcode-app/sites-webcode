import type { ClientConfig } from "@/lib/types";

/** Dados estruturados para o Google entender que é um negócio local (ajuda no SEO). */
export function JsonLd({ client }: { client: ClientConfig }) {
  const c = client;
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: c.business.name,
    description: c.business.description,
    telephone: c.contact.phone ?? c.contact.whatsapp,
    email: c.contact.email,
    address: { "@type": "PostalAddress", streetAddress: c.contact.address, addressLocality: c.business.city, addressRegion: c.business.state, addressCountry: "BR" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: c.reviews.rating, reviewCount: c.reviews.count },
    sameAs: c.contact.instagram ? [`https://instagram.com/${c.contact.instagram}`] : undefined,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
