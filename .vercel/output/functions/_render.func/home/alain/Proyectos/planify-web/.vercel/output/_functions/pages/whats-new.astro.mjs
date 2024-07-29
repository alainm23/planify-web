/* empty css                                          */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_CH8b9P0p.mjs';
import 'kleur/colors';
import { $ as $$SectionContainer, a as $$Icon, b as $$Layout } from '../chunks/Icon_DQUo6MiD.mjs';
import 'clsx';
import { b as app } from '../chunks/firebase_DgGSLZ8S.mjs';
import { getFirestore, getDocs, query, collection } from 'firebase/firestore';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://useplanify.com/");
const $$ReleaseItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReleaseItem;
  const { index, version, items, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-blue-500 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3${addAttribute(index <= 0 ? "text-xl font-bold text-blue-500" : "text-xl font-semibold text-gray-500 dark:text-white", "class")}>${version}</h3> <!-- <h4 class="font-semibold text-xl text-gray-600 dark:text-white">
        {version}
      </h4> --> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> <ul class="list-disc"> ${items.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </div> </div>`;
}, "/home/alain/Proyectos/planify-web/src/components/ReleaseItem.astro", void 0);

const $$Releases = createComponent(async ($$result, $$props, $$slots) => {
  const db = getFirestore(app);
  const querySnapshot = await getDocs(query(collection(db, "Releases")));
  const releases = querySnapshot.docs.map((doc) => {
    return { documentId: doc.id, ...doc.data() };
  });
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${releases.map((item, index) => renderTemplate`<li class=""> ${renderComponent($$result, "ReleaseItem", $$ReleaseItem, { ...item, "index": index })} </li>`)} </ol>`;
}, "/home/alain/Proyectos/planify-web/src/components/Releases.astro", void 0);

const $$WhatsNew = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Planify | What's New", "description": "Discover the latest updates in Planify." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` <h1 class="text-4xl text-center font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Planify
</h1> <p class="mt-6 text-xl text-center text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
Forget about forgetting things
</p> <div class="flex justify-center mt-6"> <a href="https://flathub.org/apps/details/io.github.alainm23.planify"><img class="flathub" width="240" alt="Download on Flathub" src="https://flathub.org/assets/badges/flathub-badge-en.png"></a> </div> ` })} </main> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "pb-32 px-12 px-md-0 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "sparkles-2", "class": "text-4xl" })}
What's New
</h2> ${renderComponent($$result3, "Releases", $$Releases, {})} ` })} ` })}`;
}, "/home/alain/Proyectos/planify-web/src/pages/whats-new.astro", void 0);

const $$file = "/home/alain/Proyectos/planify-web/src/pages/whats-new.astro";
const $$url = "/whats-new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WhatsNew,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
