import { Rule } from "sanity";

const article = {
  name: "article",
  title: "Clanak",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naslov clanka",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Link",
      type: "slug",
      description: "Generisati link klikom na dugme",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "actual",
      title: "Aktuelan clanak?",
      type: "boolean",
      description:
        "Da li je clanak aktuelan ili ne, odnosno da li se clanak prikazuje u sekciji 'aktuelno'",
      initialValue: false,
    },
    {
      name: "author",
      title: "Autor clanka",
      type: "string",
      description:
        "Koristiti velika i mala slova u zavisnosti od zeljenog prikaza",
      initialValue: "mobilnost.ba",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "content",
      title: "Sadrzaj clanka",
      description:
        "Kreirati sadrzaj clanka na nacin kako ce isti biti prikazan (redosled je bitan). Ukoliko clanak ima izdeljene sekcije sa podnaslovima iste oznaciti sa 'Heading 2', a ukoliko neka od sekcija dalje ima svoje podnaslove, iste oznaciti sa Heading 3. Vertikalno odvajanje sadrzaja (podnaslov od teksta, teskt od fotografije, fotografiju od teksta ili naslova, pasuse i sl.) vrsiti samo prenosom u novi red (1 enter), NE PRAVITI DODATNA VERTIKALNA RASTOJANJA (PRAZNE REDOVE) IZMEDJU SADRZAJA CLANKA",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          title: "Dodaj fotografiju",
          fields: [
            {
              name: "imageAlt",
              title: "Opisni tekst fotografije",
              type: "string",
              description:
                "Kratka opisna recenica koja se prikazuje ukoliko se fotografija ne prikaze (obavezno)",
            },
          ],
        },
      ],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "coverImage",
      title: "Fotografija kartice clanka (cover fotografija)",
      type: "image",
      description:
        "Fotografija koja ce biti prikazana u sklopu kartice clanka (linka prema clanku)",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Opisni tekst fotografije",
          type: "string",
          description:
            "Kratka opisna recenica koja se prikazuje ukoliko se fotografija ne prikaze",
        },
      ],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "excerpt",
      title: "Kratki opis clanka",
      type: "text",
      description:
        "Kratki opis clanka koji se prikazuje u sklopu kartice clanka (linka prema clanku)",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "articleCategory",
      title: "Kategorija kojoj clanak pripada",
      type: "reference",
      to: [{ type: "category" }],
      options: {
        disableNew: true,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "tags",
      title: "Oznake/tagovi",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      description:
        "Oznake/tagovi koje ce biti prikazane za svaki pojednicni clanak",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "source",
      title: "Izvor clanka",
      type: "string",
      description:
        "Ovo polje se popunjava ukoliko je clanak preuzet iz nekog drugog izvora",
    },
    {
      name: "sourceUrl",
      title: "Link izvora clanka",
      type: "url",
      description:
        "Ovo polje se popunjava ukoliko postoji link prema izvoru clanka",
    },
    {
      name: "attachment",
      title: "Dokument/prilog",
      type: "file",
      description:
        "Ovo polje se popunjava ukoliko postoji dokument/prilog za clanak. Ukoliko je samo jedan fajl dirktno moze upload (ne postoji ogranicenje oko tipa fajla), a ukoliko je vise dokumenata iste je potrebno sacuvati u folder, pa taj folder nakon kompresije u .zip ili .rar formatu upload-ovati.",
      fields: [
        {
          name: "attachmentName",
          title: "Naziv priloga",
          type: "string",
          description:
            "Kratak naziv priloga, ono sto ce biti vidljivo korisniku (verovatno sam naziv fajla/foldera, ali potpuno je proizvoljno sta ce pisati). Ovo polje je obavezno",
        },
      ],
    },
  ],
};

export default article;
