  const fs = require("fs");

  function exists(p){ return fs.existsSync(p); }
  function read(p){ return fs.readFileSync(p, "utf8"); }
  function write(p,s){ fs.writeFileSync(p, s, "utf8"); }

  function removeShoppingBlock() {
    const p = "src/data/siteTree.ts";
    if (!exists(p)) return;
    let s = read(p);

    const start = s.indexOf('title: "Shopping & Deals"');
    const end = s.indexOf('title: "Latest Travel Updates for Korea"');
    if (start !== -1 && end !== -1 && end > start) {
      const head = s.lastIndexOf("{", start);
      const tail = s.lastIndexOf("{", end);
      s = s.slice(0, head) + s.slice(tail);
      write(p, s);
    }
  }

  function stripInFile(p) {
    if (!exists(p)) return;
    let s = read(p);
    s = s.replace(/const HIDDEN_HUBS = new Set\(\["shopping-and-deals"\]\);[\r\n]*/g, "");
    s = s.replace(/if \(!HIDDEN_HUBS\.has\(nextPath\)\)\s*\{\s*paths\.push\(nextPath\);\s*\}/g, "paths.push(nextPath);");
    s = s.replace(/"\/shopping-and-deals":[^\n]*\n/g, "");
    s = s.replace(/"shopping-and-deals":\s*\{[\s\S]*?\},\s*\n/g, "");
    write(p, s);
  }

  function stripMapBlock(p) {
    if (!exists(p)) return;
    let s = read(p);
    s = s.replace(/"shopping-and-deals":\s*\[[\s\S]*?\],\s*\n/g, "");
    write(p, s);
  }

  function force404Redirects() {
    const p = "public/_redirects";
    if (!exists(p)) return;
    let s = read(p);

    const block = [
      "/shopping-and-deals/shopping-in-seoul /404.html 404!",
      "/shopping-and-deals/shopping-in-seoul/ /404.html 404!",
      "/shopping-and-deals/shopping-in-busan /404.html 404!",
      "/shopping-and-deals/shopping-in-busan/ /404.html 404!",
      "/shopping-and-deals/how-to-get-discounts /404.html 404!",
      "/shopping-and-deals/how-to-get-discounts/ /404.html 404!",
      "/shopping-and-deals/tax-refund-explained /404.html 404!",
      "/shopping-and-deals/tax-refund-explained/ /404.html 404!",
      "/es/shopping-and-deals/shopping-in-seoul /es/404/index.html 404!",
      "/es/shopping-and-deals/shopping-in-seoul/ /es/404/index.html 404!",
      "/es/shopping-and-deals/shopping-in-busan /es/404/index.html 404!",
      "/es/shopping-and-deals/shopping-in-busan/ /es/404/index.html 404!",
      "/es/shopping-and-deals/how-to-get-discounts /es/404/index.html 404!",
      "/es/shopping-and-deals/how-to-get-discounts/ /es/404/index.html 404!",
      "/es/shopping-and-deals/tax-refund-explained /es/404/index.html 404!",
      "/es/shopping-and-deals/tax-refund-explained/ /es/404/index.html 404!"
    ].join("\n") + "\n";

    if (!s.includes("/shopping-and-deals/shopping-in-seoul /404.html 404!")) {
      s = block + s;
      write(p, s);
    }
  }

  removeShoppingBlock();
  stripInFile("src/pages/[...slug].astro");
  stripInFile("src/pages/es/[...slug].astro");
  stripInFile("src/pages/sitemap.xml.ts");
  stripMapBlock("src/lib/hubFaq.ts");
  stripMapBlock("src/lib/hubGuide.ts");

  force404Redirects();

  console.log("done");
