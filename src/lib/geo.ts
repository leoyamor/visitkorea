import type { TreeNode } from "../data/siteTree";
import type { SupportedLang } from "./i18n";
import {
  EDITORIAL_AUTHOR_NAME,
  EDITORIAL_REVIEWER_NAME,
  EDITORIAL_UPDATED_ISO,
} from "./editorial";
import { getHubFaqItems } from "./hubFaq";
import { withLang } from "./i18n";
import { absoluteUrl } from "./site";

export type JsonLdNode = Record<string, unknown>;

type CollectionSchemaArgs = {
  canonicalUrl: string;
  routePath: string;
  node: TreeNode;
  lang: SupportedLang;
  description: string;
};

type LeafSchemaArgs = {
  canonicalUrl: string;
  node: TreeNode;
  lang: SupportedLang;
  description: string;
  segments: string[];
};

const URL_PATTERN = /https?:\/\/[^\s<>"')\]]+/gi;

const compact = (value?: string) => (value ?? "").replace(/\s+/g, " ").trim();

const unique = <T>(items: T[]) => [...new Set(items)];

const trimTrailingPunctuation = (value: string) =>
  value.replace(/[),.;:!?]+$/g, "");

const toQuestion = (title: string, lang: SupportedLang) => {
  const normalized = compact(title).replace(/[.:]+$/, "");
  if (!normalized) return "";
  if (/[?？]$/.test(normalized)) return normalized;
  return lang === "es" ? `¿${normalized}?` : `${normalized}?`;
};

const toCanonicalPath = (path: string) => {
  if (path === "/") return "/";
  return `${path.replace(/\/+$/, "")}/`;
};

const joinRoute = (basePath: string, slug: string) => {
  if (basePath === "/") return `/${slug}`;
  return `${basePath.replace(/\/+$/, "")}/${slug}`;
};

const extractUrlsFromText = (text?: string) => {
  if (!text) return [];
  const matches = text.match(URL_PATTERN) ?? [];
  return matches
    .map(trimTrailingPunctuation)
    .filter(Boolean)
    .filter((value) => {
      try {
        const parsed = new URL(value);
        return parsed.protocol === "http:" || parsed.protocol === "https:";
      } catch {
        return false;
      }
    });
};

export const getNodeSourceUrls = (node: TreeNode) => {
  const chunks: string[] = [node.description, node.quickAnswer].filter(
    (value): value is string => Boolean(value)
  );

  for (const section of node.content ?? []) {
    const sectionChunks = [section.title, section.emphasis, section.body].filter(
      (value): value is string => Boolean(value)
    );
    chunks.push(...sectionChunks);
    for (const bullet of section.bullets ?? []) {
      chunks.push(bullet);
    }
  }

  return unique(
    chunks
      .map((chunk) => extractUrlsFromText(chunk))
      .flat()
      .map((url) => {
        try {
          return new URL(url).toString();
        } catch {
          return url;
        }
      })
  );
};

const buildFaqItems = (node: TreeNode, lang: SupportedLang) => {
  const baseQuickQuestion =
    lang === "es"
      ? `¿Cuál es la respuesta rápida sobre ${node.title}?`
      : `What is the quick answer for ${node.title}?`;
  const items: { question: string; answer: string }[] = [];

  const quickAnswer = compact(node.quickAnswer);
  if (quickAnswer) {
    items.push({ question: baseQuickQuestion, answer: quickAnswer });
  }

  for (const section of node.content ?? []) {
    const question = toQuestion(section.title, lang);
    const answer = compact(
      [section.emphasis, section.body, (section.bullets ?? []).join(" ")]
        .map(compact)
        .filter(Boolean)
        .join(" ")
    );
    if (!question || !answer) continue;
    items.push({ question, answer });
  }

  return unique(items.map((item) => `${item.question}||${item.answer}`))
    .map((entry) => {
      const [question, answer] = entry.split("||");
      return { question, answer };
    })
    .slice(0, 10);
};

export const buildCollectionSchemaNodes = ({
  canonicalUrl,
  routePath,
  node,
  lang,
  description,
}: CollectionSchemaArgs): JsonLdNode[] => {
  const children = node.children ?? [];
  if (!children.length) return [];
  const faqItems = getHubFaqItems(node.slug, lang);

  const listId = `${canonicalUrl}#itemlist`;
  const itemListElement = children.map((child, index) => {
    const childPath = joinRoute(routePath, child.slug);
    const childUrl = absoluteUrl(withLang(toCanonicalPath(childPath), lang));
    return {
      "@type": "ListItem",
      position: index + 1,
      url: childUrl,
      name: child.title,
      description: compact(child.description),
    };
  });

  const schemaNodes: JsonLdNode[] = [
    {
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#collection`,
      url: canonicalUrl,
      name: node.title,
      description,
      inLanguage: lang,
      mainEntity: { "@id": listId },
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      author: {
        "@type": "Organization",
        name: EDITORIAL_AUTHOR_NAME,
      },
      reviewedBy: {
        "@type": "Organization",
        name: EDITORIAL_REVIEWER_NAME,
      },
      dateModified: EDITORIAL_UPDATED_ISO,
    },
    {
      "@type": "ItemList",
      "@id": listId,
      name:
        lang === "es" ? `${node.title} - lista de guías` : `${node.title} guide list`,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: children.length,
      itemListElement,
    },
  ];

  if (faqItems.length) {
    schemaNodes.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      inLanguage: lang,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemaNodes;
};

export const buildLeafSchemaNodes = ({
  canonicalUrl,
  node,
  lang,
  description,
  segments,
}: LeafSchemaArgs): JsonLdNode[] => {
  const sourceUrls = getNodeSourceUrls(node);
  const faqItems = buildFaqItems(node, lang);
  const keywords = unique(
    [
      node.title,
      ...segments.map((segment) => segment.replace(/-/g, " ").trim()),
      "Korea travel",
      lang === "es" ? "guía de viaje" : "travel guide",
    ].filter(Boolean)
  );

  const schemaNodes: JsonLdNode[] = [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: node.title,
      description,
      inLanguage: lang,
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
      author: {
        "@type": "Organization",
        name: EDITORIAL_AUTHOR_NAME,
      },
      reviewedBy: {
        "@type": "Organization",
        name: EDITORIAL_REVIEWER_NAME,
      },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      dateModified: EDITORIAL_UPDATED_ISO,
      keywords,
      about: [
        {
          "@type": "Thing",
          name:
            lang === "es"
              ? "Planificación de viajes a Corea del Sur"
              : "South Korea travel planning",
        },
      ],
      citation: sourceUrls,
    },
  ];

  if (faqItems.length) {
    schemaNodes.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      inLanguage: lang,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (sourceUrls.length) {
    schemaNodes.push({
      "@type": "ItemList",
      "@id": `${canonicalUrl}#sources`,
      name:
        lang === "es" ? "Fuentes oficiales recomendadas" : "Recommended official sources",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: sourceUrls.length,
      itemListElement: sourceUrls.map((url, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url,
      })),
    });
  }

  return schemaNodes;
};
