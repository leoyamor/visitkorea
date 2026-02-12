export type LegalSection = {
  id: string;
  titleEn: string;
  titleEs: string;
  bodyEn: string;
  bodyEs: string;
  bulletsEn: string[];
  bulletsEs: string[];
  icon?: string;
};

export type LegalPageInfo = {
  slug: string;
  path: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs: string;
  sections: LegalSection[];
};

export const legalPages: LegalPageInfo[] = [];

export const getLegalPageBySlug = (_slug: string) => undefined;

export const legalPaths = legalPages.map((page) => page.path);
