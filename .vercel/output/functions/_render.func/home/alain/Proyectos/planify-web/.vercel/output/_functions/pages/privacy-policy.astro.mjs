/* empty css                                          */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CH8b9P0p.mjs';
import 'kleur/colors';
import { $ as $$SectionContainer, a as $$Icon, b as $$Layout } from '../chunks/Icon_DQUo6MiD.mjs';
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Planify | Privacy Policy", "description": "Discover the latest updates in Planify." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 px-12 px-md-0 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "shield-tick", "class": "text-4xl" })}
Privacy Policy
</h2> <p>
We do not collect any personal data at all. All your app data is either
      being stored locally on your device or in your own Todoist or Nextcloud
      account if you have enabled this functionality.
</p> <p>
Should you have any questions or concerns in regards to our privacy
      policy, we are always here to help you and you can reach out to us via
      email address: <b>alainmh23@gmail.com</b>.
</p> ` })} ` })}`;
}, "/home/alain/Proyectos/planify-web/src/pages/privacy-policy.astro", void 0);

const $$file = "/home/alain/Proyectos/planify-web/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PrivacyPolicy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
