/* empty css                                          */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_CH8b9P0p.mjs';
import 'kleur/colors';
import { $ as $$SectionContainer, a as $$Icon, b as $$Layout } from '../chunks/Icon_DQUo6MiD.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const FEATURES = [
    {
      title: "Organize with Elegance and Efficiency",
      description: "Discover Planify, the native task management application for GNU/Linux. With a minimalist and attractive interface, Planify combines simplicity and functionality so you can focus on what matters. Optimized for performance and ease of use, it enhances your productivity with a hassle-free organization experience. Get organized and achieve more with Planify!",
      image: "/features/planify.png"
    },
    {
      title: "Sync with Todoist and Nextcloud",
      description: "Planify is not limited to working locally, it seamlessly integrates with Todoist and Nextcloud. Sync your tasks across multiple devices and platforms, ensuring you always have access to your to-do list, no matter where you are.",
      image: "/features/sync.png"
    },
    {
      title: "Beautiful Tasks",
      description: "View your tasks elegantly, add notes, priority, attachments, reminders, view URLs, create deadlines and add labels.",
      image: "/features/task.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${FEATURES.map(({ image, title, description }, index) => renderTemplate`<article${addAttribute(
    index % 2 === 0 ? "flex flex-col space-x-0 space-y-8 group md:space-x-8 md:space-y-0 md:flex-row" : "flex flex-col space-x-0 space-y-8 group md:space-x-8 md:space-y-0 md:flex-row-reverse",
    "class"
  )}> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl"> <img alt="Recién llegado vs 5 años en Nueva Zelanda" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <div class="mt-2 text-gray-700 dark:text-gray-400"> ${description} </div> </div> </div> </article>`)} </div>`;
}, "/home/alain/Proyectos/planify-web/src/components/Features.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pt-4 md:pt-0"> <h1 class="text-4xl text-center font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Planify
</h1> <p class="mt-6 text-xl text-center text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
Forget about forgetting things
</p> <div class="flex justify-center mt-6"> <a href="https://flathub.org/apps/details/io.github.alainm23.planify"><img class="flathub" width="240" alt="Download on Flathub" src="https://flathub.org/assets/badges/flathub-badge-en.png"></a> </div> <img src="https://raw.githubusercontent.com/alainm23/planify/master/data/resources/screenshot/screenshot-04.png" alt="Planify"> </div>`;
}, "/home/alain/Proyectos/planify-web/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Planify", "description": "Task manager with Todoist and Nextcloud support designed for GNU/Linux \u{1F680}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "home", "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} </main> <div class="space-y-24 px-12 px-md-0"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "features" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "wand", "class": "text-4xl" })}
Features
</h2> ${renderComponent($$result3, "Features", $$Features, {})} ` })} </div> ` })}`;
}, "/home/alain/Proyectos/planify-web/src/pages/index.astro", void 0);

const $$file = "/home/alain/Proyectos/planify-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
