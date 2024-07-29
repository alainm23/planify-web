/* empty css                                             */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CH8b9P0p.mjs';
import 'kleur/colors';
import { $ as $$SectionContainer, a as $$Icon, b as $$Layout } from '../../chunks/Icon_DQUo6MiD.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { a as auth } from '../../chunks/firebase_DgGSLZ8S.mjs';
import { signInWithEmailAndPassword } from 'firebase/auth';
export { renderers } from '../../renderers.mjs';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    if (!email) {
      return;
    }
    if (!password) {
      return;
    }
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    window.location.href = "/admin/releases";
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3", children: [
      /* @__PURE__ */ jsx("label", { className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Email address" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          name: "email",
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          placeholder: "john.doe@company.com",
          required: true,
          value: email,
          onChange: (e) => setEmail(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 w-full md:w-1/3", children: [
      /* @__PURE__ */ jsx("label", { className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Password" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          name: "password",
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          placeholder: "•••••••••",
          required: true,
          value: password,
          onChange: (e) => setPassword(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 w-full md:w-1/3", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleLogin,
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-1/3",
        children: "Login"
      }
    ) })
  ] }) });
}

const $$Signin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Planify | signin", "description": "Discover the latest updates in Planify." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 px-12 px-md-0 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "shield-tick", "class": "text-4xl" })}
Sign In
</h2> ${renderComponent($$result3, "Login", Login, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Login", "client:component-export": "default" })} ` })} ` })}`;
}, "/home/alain/Proyectos/planify-web/src/pages/auth/signin.astro", void 0);

const $$file = "/home/alain/Proyectos/planify-web/src/pages/auth/signin.astro";
const $$url = "/auth/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
