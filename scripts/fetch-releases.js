// scripts/fetch-releases.js
import fs from "node:fs/promises";
import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

const xmlUrl = "https://raw.githubusercontent.com/alainm23/planify/refs/heads/master/data/io.github.alainm23.planify.appdata.xml.in.in";

async function main() {
  const res = await fetch(xmlUrl);
  const xml = await res.text();
  const parsed = await parseStringPromise(xml);
  const releases = parsed.component.releases[0].release.map((r) => {
    const version = r.$.version;
    const date = r.$.date;
    let items = [];

    const description = r.description?.[0];
    if (typeof description === "string") {
      items = [description];
    } else if (description.ul?.[0]?.li) {
      items = description.ul[0].li.map((li) => {
        return typeof li === "string" ? li : li._ ?? "";
      });
    }

    return { version, date, items };
  });

  const outputPath = "./src/data/releases.json";
  await fs.writeFile(outputPath, JSON.stringify(releases, null, 2));
  console.log(`✅ Releases written to ${outputPath}`);
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
