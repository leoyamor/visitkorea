  import fs from "node:fs";

  const exists = (p) => fs.existsSync(p);
  const read = (p) => fs.readFileSync(p, "utf8");
  const write = (p, s) => fs.writeFileSync(p, s, "utf8");

  function patchSiteTree() {
    const p = "src/data/siteTree.ts";
    if (!exists(p)) return;
    let s = read(p);
    const re = /\n\s*{\n\s*title: "Shopping & Deals",[\s\S]*?\n\s*},\n\s*{\n\s*title: "Latest Travel Updates for Korea",/;
    if (re.test(s)) {
      s = s.replace(re, '\n    {\n      title: "Latest Travel Updates for Korea",');
      write(p, s);
    }
  }

  function patchSlugFile(p) {
    if (!exists(p)) return;
    let s = read(p);
    s = s.replace(/\n\s*const HIDDEN_HUBS = new Set\(\["shopping-and-deals"\]\);/g, "");
    s = s.replace(/if \(!HIDDEN_HUBS\.has\(nextPath\)\)\s*\{\s*paths\.push\(nextPath\);\s*\}/g, "paths.push(nextPath);");
    s = s.replace(/\n\s*"\/shopping-and-deals":[^\n]*\n/g, "\n");
    s = s.replace(/\n\s*"shopping-and-deals": \{[\s\S]*?\n\s*\},(?=\n\s*"[a-z0-9-]+":)/gi, "\n");
    write(p, s);
  }

  function patchTreePage() {
    const p = "src/components/TreePage.astro";
    if (!exists(p)) return;
    let s = read(p);
    s = s.replace(
      /const children = \(node\.children \?\? \[\]\)\.filter\(\s*\(child\) => \!\(isHome && child\.slug === "shopping-and-deals"\)\s*\);/g,
      "const children = node.children ?? [];"
    );
    write(p, s);
  }

  function patchSitemap() {
    const p = "src/pages/sitemap.xml.ts";
    if (!exists(p)) return;
    let s = read(p);
    s = s.replace(/\n\s*const hiddenPaths = new Set\(\["\/shopping-and-deals"\]\);/g, "");
    s = s.replace(/if \(!hiddenPaths\.has\(nextPath\)\)\s*\{\s*paths\.push\(nextPath\);\s*\}/g, "paths.push(nextPath);");
    write(p, s);
  }

  function patchHubFile(p) {
    if (!exists(p)) return;
    let s = read(p);
    s = s.replace(/\n\s*"shopping-and-deals": \[[\s\S]*?\n\s*\],/g, "");
    write(p, s);
  }

  function patchPagesTs() {
    const p = "src/lib/pages.ts";
    if (!exists(p)) return;
    let s = read(p);
    s = s.replace(/\n\s*{ category: 'shopping', slug: 'shopping-in-seoul'[\s\S]*?},/g, "");
    s = s.replace(/\n\s*{ category: 'shopping', slug: 'shopping-in-busan'[\s\S]*?},/g, "");
    s = s.replace(/\n\s*{ category: 'shopping', slug: 'how-to-get-discounts'[\s\S]*?},/g, "");
    write(p, s);
  }

  function patchRedirects() {
    const p = "public/_redirects";
    if (!exists(p)) return;
    let s = read(p);
    const lines = [
      "/shopping-and-deals/shopping-in-seoul /travel-basics/shopping-and-discounts 301",
      "/shopping-and-deals/shopping-in-seoul/ /travel-basics/shopping-and-discounts/ 301",
      "/shopping-and-deals/shopping-in-busan /travel-basics/shopping-and-discounts 301",
      "/shopping-and-deals/shopping-in-busan/ /travel-basics/shopping-and-discounts/ 301",
      "/shopping-and-deals/how-to-get-discounts /travel-basics/shopping-and-discounts 301",
      "/shopping-and-deals/how-to-get-discounts/ /travel-basics/shopping-and-discounts/ 301",
      "/shopping-and-deals/tax-refund-explained /travel-basics/shopping-and-discounts 301",
      "/shopping-and-deals/tax-refund-explained/ /travel-basics/shopping-and-discounts/ 301",
      "/es/shopping-and-deals/shopping-in-seoul /es/travel-basics/shopping-and-discounts 301",
      "/es/shopping-and-deals/shopping-in-seoul/ /es/travel-basics/shopping-and-discounts/ 301",
      "/es/shopping-and-deals/shopping-in-busan /es/travel-basics/shopping-and-discounts 301",
      "/es/shopping-and-deals/shopping-in-busan/ /es/travel-basics/shopping-and-discounts/ 301",
      "/es/shopping-and-deals/how-to-get-discounts /es/travel-basics/shopping-and-discounts 301",
      "/es/shopping-and-deals/how-to-get-discounts/ /es/travel-basics/shopping-and-discounts/ 301",
      "/es/shopping-and-deals/tax-refund-explained /es/travel-basics/shopping-and-discounts 301",
      "/es/shopping-and-deals/tax-refund-explained/ /es/travel-basics/shopping-and-discounts/ 301"
    ];
    for (const line of lines) {
      if (!s.includes(line)) s += (s.endsWith("\n") ? "" : "\n") + line + "\n";
    }
    write(p, s);
  }

  patchSiteTree();
  patchSlugFile("src/pages/[...slug].astro");
  patchSlugFile("src/pages/es/[...slug].astro");
  patchTreePage();
  patchSitemap();
  patchHubFile("src/lib/hubFaq.ts");
  patchHubFile("src/lib/hubGuide.ts");
  patchPagesTs();
  patchRedirects();

  console.log("patch done");
