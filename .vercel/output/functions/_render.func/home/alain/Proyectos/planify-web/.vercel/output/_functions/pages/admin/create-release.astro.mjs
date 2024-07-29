/* empty css                                             */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CH8b9P0p.mjs';
import 'kleur/colors';
import { $ as $$SectionContainer, a as $$Icon, b as $$Layout } from '../../chunks/Icon_DQUo6MiD.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { d as db } from '../../chunks/firebase_DgGSLZ8S.mjs';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
export { renderers } from '../../renderers.mjs';

function CreateRelease() {
  useState("");
  const [version, setVersion] = useState("");
  const [date, setDate] = useState("");
  const [items, setItems] = useState([
    {
      value: ""
    }
  ]);
  const addInput = () => {
    setItems([...items, { value: "" }]);
  };
  const removeInput = (_index) => {
    setItems(items.filter((input, index) => index !== _index));
  };
  const handleInputChange = (index, event) => {
    const newInputs = items.map((input, _index) => {
      if (index === _index) {
        return { ...input, value: event.target.value };
      }
      return input;
    });
    setItems(newInputs);
  };
  const handleAction = async () => {
    if (!version) {
      return;
    }
    if (!date) {
      return;
    }
    if (items.length <= 0) {
      return;
    }
    const _items = items.map((item) => item.value);
    addDoc(collection(db, "Releases"), {
      // title,
      version,
      date: new Date(date).toLocaleDateString("en-US"),
      items: _items
    }).then(() => {
      window.location.href = "/whats-new";
    }).catch((error) => {
      console.error(error);
    });
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "mt-6 w-full md:w-1/2", children: [
      /* @__PURE__ */ jsx("label", { className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Version" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "version",
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          required: true,
          value: version,
          onChange: (e) => setVersion(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 w-full md:w-1/2", children: [
      /* @__PURE__ */ jsx("label", { className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Date" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "date",
          name: "version",
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          required: true,
          value: date,
          onChange: (e) => setDate(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 w-full md:w-1/2", children: [
      /* @__PURE__ */ jsx("label", { className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Features" }),
      items.map((item, index) => {
        return /* @__PURE__ */ jsxs("div", { className: "flex mt-6", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "version",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: true,
              value: item.value,
              onChange: (event) => handleInputChange(index, event)
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "ms-4 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                type: "button",
                onClick: () => removeInput(index),
                children: "Eliminar"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "ms-4 px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
                type: "button",
                onClick: addInput,
                children: "Agregar"
              }
            )
          ] })
        ] }, index);
      })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 w-full md:w-1/3", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleAction,
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-1/3",
        children: "Create"
      }
    ) })
  ] }) });
}

const $$CreateRelease = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Planify | Admin", "description": "Discover the latest updates in Planify." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 px-12 px-md-0 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "shield-tick", "class": "text-4xl" })}
Create Release
</h2> ${renderComponent($$result3, "CreateReleaseComponent", CreateRelease, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CreateRelease", "client:component-export": "default" })} ` })} ` })}`;
}, "/home/alain/Proyectos/planify-web/src/pages/admin/create-release.astro", void 0);

const $$file = "/home/alain/Proyectos/planify-web/src/pages/admin/create-release.astro";
const $$url = "/admin/create-release";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CreateRelease,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
