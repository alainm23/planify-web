import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, e as createTransitionScope, d as renderComponent, f as renderHead, g as renderSlot, u as unescapeHTML, F as Fragment } from './astro/server_CH8b9P0p.mjs';
import 'kleur/colors';
/* empty css                                  */
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';

const $$Astro$6 = createAstro("https://useplanify.com/");
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "/home/alain/Proyectos/planify-web/src/components/icons/Sun.astro", void 0);

const $$Astro$5 = createAstro("https://useplanify.com/");
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "/home/alain/Proyectos/planify-web/src/components/icons/Moon.astro", void 0);

const $$Astro$4 = createAstro("https://useplanify.com/");
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "/home/alain/Proyectos/planify-web/src/components/icons/System.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a || (_a = __template(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3', '> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3', "> <ul data-astro-cid-x3pjskd3> ", ' </ul> </div> </div>  <script>\n  let remove = null;\n  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");\n  const themesMenu = document.getElementById("themes-menu");\n\n  const getThemePreference = () => {\n    if (typeof localStorage !== "undefined") {\n      return localStorage.getItem("theme") ?? "system";\n    }\n\n    return window.matchMedia("(prefers-color-scheme: dark)").matches\n      ? "dark"\n      : "light";\n  };\n\n  const updateIcon = (themePreference) => {\n    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {\n      element.style.scale = element.id === themePreference ? "1" : "0";\n    });\n  };\n\n  const updateTheme = () => {\n    if (remove != null) {\n      remove();\n    }\n    matchMedia.addEventListener("change", updateTheme);\n    remove = () => {\n      matchMedia.removeEventListener("change", updateTheme);\n    };\n\n    const themePreference = getThemePreference();\n    const isDark =\n      themePreference === "dark" ||\n      (themePreference === "system" && matchMedia.matches);\n\n    updateIcon(themePreference);\n    document.documentElement.classList[isDark ? "add" : "remove"]("dark");\n  };\n\n  updateTheme();\n\n  document.addEventListener("click", () => themesMenu.classList.remove("open"));\n\n  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {\n    e.stopPropagation();\n    const isClosed = !themesMenu.classList.contains("open");\n    themesMenu.classList[isClosed ? "add" : "remove"]("open");\n  });\n\n  document.querySelectorAll(".themes-menu-option").forEach((element) => {\n    element.addEventListener("click", (e) => {\n      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim());\n      updateTheme();\n    });\n  });\n\n  document.addEventListener("astro:after-swap", () => {\n    updateTheme();\n    window.scrollTo({ left: 0, top: 0, behavior: "instant" });\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ko5uysgj"), "data-astro-transition-persist"), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), addAttribute(createTransitionScope($$result, "d5hlxqxh"), "data-astro-transition-persist"), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "/home/alain/Proyectos/planify-web/src/components/ThemeToggle.astro", "self");

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Home",
      label: "home",
      url: "/#home"
    },
    {
      title: "Features",
      label: "features",
      url: "/#features"
    },
    {
      title: "What's New",
      label: "whats-new",
      url: "/whats-new"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-400"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </nav> </header>  `;
}, "/home/alain/Proyectos/planify-web/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© ${currentYear} <a class="hover:underline">Planify</a>. All rights reserved
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a href="/privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</a> </li> <li> <a id="contacto" href="mailto:alainmh23@gmail.com" class="hover:underline">Contact</a> </li> </ul> </div> </footer>`;
}, "/home/alain/Proyectos/planify-web/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://useplanify.com/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/alain/Proyectos/planify-web/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro("https://useplanify.com/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  const { userEmail } = Astro2.locals;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${userEmail && renderTemplate`<p>Welcome back, ${userEmail}</p>`} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/home/alain/Proyectos/planify-web/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro("https://useplanify.com/");
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-6xl md:max-w-3xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/alain/Proyectos/planify-web/src/components/SectionContainer.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1722281028,"icons":{"shield-tick":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M12 4.75 4.75 8S4 19.25 12 19.25 19.25 8 19.25 8L12 4.75Z\"/><path d=\"m9.75 12.75 1.25 1.5 3.25-4.5\"/></g>"},"sparkles-2":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M17 4.75C17 5.897 15.897 7 14.75 7 15.897 7 17 8.103 17 9.25 17 8.103 18.103 7 19.25 7 18.103 7 17 5.897 17 4.75Zm0 10c0 1.147-1.103 2.25-2.25 2.25 1.147 0 2.25 1.103 2.25 2.25 0-1.147 1.103-2.25 2.25-2.25-1.147 0-2.25-1.103-2.25-2.25Zm-8-7C9 9.917 6.917 12 4.75 12 6.917 12 9 14.083 9 16.25 9 14.083 11.083 12 13.25 12 11.083 12 9 9.917 9 7.75Z\"/>"},"wand":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M5.045 16.705 16.707 5.043a1 1 0 0 1 1.414 0l.836.836a1 1 0 0 1 0 1.414L7.295 18.955a1 1 0 0 1-1.414 0l-.836-.836a1 1 0 0 1 0-1.414ZM15 7l2 2\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro("https://useplanify.com/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/home/alain/Proyectos/planify-web/node_modules/astro-icon/components/Icon.astro", void 0);

export { $$SectionContainer as $, $$Icon as a, $$Layout as b };
