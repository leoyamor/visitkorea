  const fs = require("fs");

  const files = ["src/pages/[...slug].astro", "src/pages/es/[...slug].astro"];
  const replacement = `export const getStaticPaths = () => {
    const paths: string[] = [];
    const walk = (node: TreeNode, prefix: string[] = []) => {
      if (!node.children) return;
      for (const child of node.children) {
        const next = [...prefix, child.slug];
        const nextPath = next.join("/");
        paths.push(nextPath);
        walk(child, next);
      }
    };
    walk(siteTree);
    return paths.map((slug) => ({ params: { slug } }));
  };`;

  for (const file of files) {
    let s = fs.readFileSync(file, "utf8");
    s = s.replace(
      /export const getStaticPaths = \(\) => \{[\s\S]*?return paths\.map\(\(slug\) => \(\{ params: \{ slug \} \}\)\);\s*\};/,
      replacement
    );
    fs.writeFileSync(file, s, "utf8");
  }
  console.log("patched getStaticPaths");
