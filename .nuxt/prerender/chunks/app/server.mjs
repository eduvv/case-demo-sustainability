import { getCurrentInstance, version, defineComponent, computed, ref, h, resolveComponent, reactive, createApp, toRef, isRef, defineAsyncComponent, provide, onErrorCaptured, unref, useSSRContext, inject, renderSlot, openBlock, createBlock, Teleport, createCommentVNode, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, Fragment, renderList, resolveDirective, mergeProps, createTextVNode, toDisplayString, createVNode, withCtx, Transition, createSlots, withDirectives, toHandlers, withKeys, withModifiers, resolveDynamicComponent } from 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { $fetch } from 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/ofetch@1.0.0/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/unctx@2.1.1/node_modules/unctx/dist/index.mjs';
import { hasProtocol, isEqual, parseURL, joinURL, stringifyParsedURL, stringifyQuery, parseQuery } from 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/ufo@1.0.1/node_modules/ufo/dist/index.mjs';
import { createError as createError$1, sendRedirect } from 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/h3@1.0.2/node_modules/h3/dist/index.mjs';
import { useHead, createHead as createHead$1 } from 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/@unhead+vue@1.0.17_vue@3.2.45/node_modules/@unhead/vue/dist/index.mjs';
import { renderDOMHead, debouncedRenderDOMHead } from 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/@unhead+dom@1.0.17/node_modules/@unhead/dom/dist/index.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/node-fetch-native@1.0.1/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/unenv@1.0.1/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/unstorage@1.0.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/unstorage@1.0.1/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/defu@6.1.1/node_modules/defu/dist/defu.mjs';
import 'file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/radix3@1.0.0/node_modules/radix3/dist/index.mjs';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      const el = void 0;
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0 = defineNuxtLink({ componentName: "NuxtLink" });
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defuFn = createDefu((object, key, currentValue, _namespace) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const inlineConfig = {};
defuFn(inlineConfig);
const components = {};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
function createHead(initHeadObject) {
  const unhead = createHead$1();
  const legacyHead = {
    unhead,
    install(app) {
      if (version.startsWith("3")) {
        app.config.globalProperties.$head = unhead;
        app.provide("usehead", unhead);
      }
    },
    use(plugin) {
      unhead.use(plugin);
    },
    resolveTags() {
      return unhead.resolveTags();
    },
    headEntries() {
      return unhead.headEntries();
    },
    headTags() {
      return unhead.resolveTags();
    },
    push(input, options) {
      return unhead.push(input, options);
    },
    addEntry(input, options) {
      return unhead.push(input, options);
    },
    addHeadObjs(input, options) {
      return unhead.push(input, options);
    },
    addReactiveEntry(input, options) {
      const api = useHead(input, options);
      if (typeof api !== "undefined")
        return api.dispose;
      return () => {
      };
    },
    removeHeadObjs() {
    },
    updateDOM(document2, force) {
      if (force)
        renderDOMHead(unhead, { document: document2 });
      else
        debouncedRenderDOMHead(unhead, { delayFn: (fn) => setTimeout(() => fn(), 50), document: document2 });
    },
    internalHooks: unhead.hooks,
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    }
  };
  unhead.addHeadObjs = legacyHead.addHeadObjs;
  unhead.updateDOM = legacyHead.updateDOM;
  unhead.hooks.hook("dom:beforeRender", (ctx) => {
    for (const hook of legacyHead.hooks["before:dom"]) {
      if (hook() === false)
        ctx.shouldRender = false;
    }
  });
  if (initHeadObject)
    legacyHead.addHeadObjs(initHeadObject);
  return legacyHead;
}
version.startsWith("2.");
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const node_modules__pnpm_nuxt_643_0_0_node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_sF5fM3LTTq = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  head.push(appHead);
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = useHead;
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const { renderSSRHead } = await import('file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/@unhead+ssr@1.0.17/node_modules/@unhead/ssr/dist/index.mjs');
      const meta = await renderSSRHead(head.unhead);
      return {
        ...meta,
        bodyScriptsPrepend: meta.bodyTagsOpen,
        bodyScripts: meta.bodyTags
      };
    };
  }
});
const globalMiddleware = [];
function getRouteFromPath(fullPath) {
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = parseURL(fullPath.toString());
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: fullPath
  };
}
const node_modules__pnpm_nuxt_643_0_0_node_modules_nuxt_dist_app_plugins_router_mjs_hFNJ39OY2j = defineNuxtPlugin((nuxtApp) => {
  const initialURL = nuxtApp.ssrContext.url;
  const routes = [];
  const hooks = {
    "navigate:before": [],
    "resolve:before": [],
    "navigate:after": [],
    error: []
  };
  const registerHook = (hook, guard) => {
    hooks[hook].push(guard);
    return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
  };
  useRuntimeConfig().app.baseURL;
  const route = reactive(getRouteFromPath(initialURL));
  async function handleNavigation(url, replace) {
    try {
      const to = getRouteFromPath(url);
      for (const middleware of hooks["navigate:before"]) {
        const result = await middleware(to, route);
        if (result === false || result instanceof Error) {
          return;
        }
        if (result) {
          return handleNavigation(result, true);
        }
      }
      for (const handler2 of hooks["resolve:before"]) {
        await handler2(to, route);
      }
      Object.assign(route, to);
      if (false)
        ;
      for (const middleware of hooks["navigate:after"]) {
        await middleware(to, route);
      }
    } catch (err) {
      for (const handler2 of hooks.error) {
        await handler2(err);
      }
    }
  }
  const router = {
    currentRoute: route,
    isReady: () => Promise.resolve(),
    options: {},
    install: () => Promise.resolve(),
    push: (url) => handleNavigation(url),
    replace: (url) => handleNavigation(url),
    back: () => window.history.go(-1),
    go: (delta) => window.history.go(delta),
    forward: () => window.history.go(1),
    beforeResolve: (guard) => registerHook("resolve:before", guard),
    beforeEach: (guard) => registerHook("navigate:before", guard),
    afterEach: (guard) => registerHook("navigate:after", guard),
    onError: (handler2) => registerHook("error", handler2),
    resolve: getRouteFromPath,
    addRoute: (parentName, route2) => {
      routes.push(route2);
    },
    getRoutes: () => routes,
    hasRoute: (name) => routes.some((route2) => route2.name === name),
    removeRoute: (name) => {
      const index = routes.findIndex((route2) => route2.name === name);
      if (index !== -1) {
        routes.splice(index, 1);
      }
    }
  };
  nuxtApp.vueApp.component("RouterLink", {
    functional: true,
    props: {
      to: String,
      custom: Boolean,
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      ariaCurrentValue: String
    },
    setup: (props, { slots }) => {
      const navigate = () => handleNavigation(props.to, props.replace);
      return () => {
        var _a;
        const route2 = router.resolve(props.to);
        return props.custom ? (_a = slots.default) == null ? void 0 : _a.call(slots, { href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
          e.preventDefault();
          return navigate();
        } }, slots);
      };
    }
  });
  nuxtApp._route = route;
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const initialLayout = useState("_layout");
  nuxtApp.hooks.hookOnce("app:created", async () => {
    router.beforeEach(async (to, from) => {
      var _a;
      to.meta = reactive(to.meta || {});
      if (nuxtApp.isHydrating) {
        to.meta.layout = (_a = initialLayout.value) != null ? _a : to.meta.layout;
      }
      nuxtApp._processingMiddleware = true;
      const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
      for (const middleware of middlewareEntries) {
        const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
        {
          if (result === false || result instanceof Error) {
            const error = result || createError$1({
              statusCode: 404,
              statusMessage: `Page Not Found: ${initialURL}`
            });
            return callWithNuxt(nuxtApp, showError, [error]);
          }
        }
        if (result || result === false) {
          return result;
        }
      }
    });
    router.afterEach(() => {
      delete nuxtApp._processingMiddleware;
    });
    await router.replace(initialURL);
    if (!isEqual(route.fullPath, initialURL)) {
      await callWithNuxt(nuxtApp, navigateTo, [route.fullPath]);
    }
  });
  return {
    provide: {
      route,
      router
    }
  };
});
var DomHandler = {
  innerWidth(el) {
    if (el) {
      let width = el.offsetWidth;
      let style = getComputedStyle(el);
      width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  width(el) {
    if (el) {
      let width = el.offsetWidth;
      let style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  },
  getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  },
  getOuterWidth(el, margin) {
    if (el) {
      let width = el.offsetWidth;
      if (margin) {
        let style = getComputedStyle(el);
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      }
      return width;
    }
    return 0;
  },
  getOuterHeight(el, margin) {
    if (el) {
      let height = el.offsetHeight;
      if (margin) {
        let style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getClientHeight(el, margin) {
    if (el) {
      let height = el.clientHeight;
      if (margin) {
        let style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h2 = win.innerHeight || e.clientHeight || g.clientHeight;
    return { width: w, height: h2 };
  },
  getOffset(el) {
    if (el) {
      let rect = el.getBoundingClientRect();
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
    return {
      top: "auto",
      left: "auto"
    };
  },
  index(element) {
    if (element) {
      let children = element.parentNode.childNodes;
      let num = 0;
      for (let i = 0; i < children.length; i++) {
        if (children[i] === element)
          return num;
        if (children[i].nodeType === 1)
          num++;
      }
    }
    return -1;
  },
  addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.className += " " + styles[i];
        }
      }
    }
  },
  addClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  },
  removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  },
  hasClass(element, className) {
    if (element) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  },
  find(element, selector) {
    return this.isElement(element) ? element.querySelectorAll(selector) : [];
  },
  findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  },
  getHeight(el) {
    if (el) {
      let height = el.offsetHeight;
      let style = getComputedStyle(el);
      height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      return height;
    }
    return 0;
  },
  getWidth(el) {
    if (el) {
      let width = el.offsetWidth;
      let style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      return width;
    }
    return 0;
  },
  absolutePosition(element, target) {
    if (element) {
      let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
      let elementOuterHeight = elementDimensions.height;
      let elementOuterWidth = elementDimensions.width;
      let targetOuterHeight = target.offsetHeight;
      let targetOuterWidth = target.offsetWidth;
      let targetOffset = target.getBoundingClientRect();
      let windowScrollTop = this.getWindowScrollTop();
      let windowScrollLeft = this.getWindowScrollLeft();
      let viewport = this.getViewport();
      let top, left;
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        element.style.transformOrigin = "bottom";
        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
        element.style.transformOrigin = "top";
      }
      if (targetOffset.left + elementOuterWidth > viewport.width)
        left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
      else
        left = targetOffset.left + windowScrollLeft;
      element.style.top = top + "px";
      element.style.left = left + "px";
    }
  },
  relativePosition(element, target) {
    if (element) {
      let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
      const targetHeight = target.offsetHeight;
      const targetOffset = target.getBoundingClientRect();
      const viewport = this.getViewport();
      let top, left;
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        element.style.transformOrigin = "bottom";
        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
        element.style.transformOrigin = "top";
      }
      if (elementDimensions.width > viewport.width) {
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        left = 0;
      }
      element.style.top = top + "px";
      element.style.left = left + "px";
    }
  },
  getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  },
  getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  },
  getHiddenElementOuterHeight(element) {
    if (element) {
      element.style.visibility = "hidden";
      element.style.display = "block";
      let elementHeight = element.offsetHeight;
      element.style.display = "none";
      element.style.visibility = "visible";
      return elementHeight;
    }
    return 0;
  },
  getHiddenElementOuterWidth(element) {
    if (element) {
      element.style.visibility = "hidden";
      element.style.display = "block";
      let elementWidth = element.offsetWidth;
      element.style.display = "none";
      element.style.visibility = "visible";
      return elementWidth;
    }
    return 0;
  },
  getHiddenElementDimensions(element) {
    if (element) {
      let dimensions = {};
      element.style.visibility = "hidden";
      element.style.display = "block";
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = "none";
      element.style.visibility = "visible";
      return dimensions;
    }
    return 0;
  },
  fadeIn(element, duration) {
    if (element) {
      element.style.opacity = 0;
      let last = +new Date();
      let opacity = 0;
      let tick = function() {
        opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();
        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
      };
      tick();
    }
  },
  fadeOut(element, ms) {
    if (element) {
      let opacity = 1, interval = 50, duration = ms, gap = interval / duration;
      let fading = setInterval(() => {
        opacity -= gap;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }
        element.style.opacity = opacity;
      }, interval);
    }
  },
  getUserAgent() {
    return navigator.userAgent;
  },
  appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target.el && target.elElement)
      target.elElement.appendChild(element);
    else
      throw new Error("Cannot append " + target + " to " + element);
  },
  isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  },
  scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  },
  clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  },
  getSelection() {
    if (window.getSelection)
      return window.getSelection().toString();
    else if (document.getSelection)
      return document.getSelection().toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  },
  calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null)
      return this.calculatedScrollbarWidth;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  },
  getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  },
  resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  },
  isVisible(element) {
    return element && element.offsetParent != null;
  },
  invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  },
  isExist(element) {
    return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
  },
  isClient() {
    return false;
  },
  focus(el, options) {
    el && document.activeElement !== el && el.focus(options);
  },
  isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  },
  getFocusableElements(element, selector = "") {
    let focusableElements = this.find(
      element,
      `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`
    );
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  },
  getFirstFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  },
  getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  },
  getNextFocusableElement(container, element, selector) {
    const focusableElements = this.getFocusableElements(container, selector);
    const index = focusableElements.length > 0 ? focusableElements.findIndex((el) => el === element) : -1;
    const nextIndex = index > -1 && focusableElements.length >= index + 1 ? index + 1 : -1;
    return nextIndex > -1 ? focusableElements[nextIndex] : null;
  },
  isClickable(element) {
    const targetNode = element.nodeName;
    const parentNode = element.parentElement && element.parentElement.nodeName;
    return targetNode == "INPUT" || targetNode == "BUTTON" || targetNode == "A" || parentNode == "INPUT" || parentNode == "BUTTON" || parentNode == "A" || this.hasClass(element, "p-button") || this.hasClass(element.parentElement, "p-button") || this.hasClass(element.parentElement, "p-checkbox") || this.hasClass(element.parentElement, "p-radiobutton");
  },
  applyStyle(element, style) {
    if (typeof style === "string") {
      element.style.cssText = style;
    } else {
      for (let prop in style) {
        element.style[prop] = style[prop];
      }
    }
  },
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  },
  isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  },
  exportCSV(csv, filename) {
    let blob = new Blob([csv], {
      type: "application/csv;charset=utf-8;"
    });
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename + ".csv");
    } else {
      let link = document.createElement("a");
      if (link.download !== void 0) {
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", filename + ".csv");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        csv = "data:text/csv;charset=utf-8," + csv;
        window.open(encodeURI(csv));
      }
    }
  }
};
class ConnectedOverlayScrollHandler {
  constructor(element, listener = () => {
  }) {
    this.element = element;
    this.listener = listener;
  }
  bindScrollListener() {
    this.scrollableParents = DomHandler.getScrollableParents(this.element);
    for (let i = 0; i < this.scrollableParents.length; i++) {
      this.scrollableParents[i].addEventListener("scroll", this.listener);
    }
  }
  unbindScrollListener() {
    if (this.scrollableParents) {
      for (let i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].removeEventListener("scroll", this.listener);
      }
    }
  }
  destroy() {
    this.unbindScrollListener();
    this.element = null;
    this.listener = null;
    this.scrollableParents = null;
  }
}
function primebus() {
  const allHandlers = /* @__PURE__ */ new Map();
  return {
    on(type, handler2) {
      let handlers = allHandlers.get(type);
      if (!handlers)
        handlers = [handler2];
      else
        handlers.push(handler2);
      allHandlers.set(type, handlers);
    },
    off(type, handler2) {
      let handlers = allHandlers.get(type);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler2) >>> 0, 1);
      }
    },
    emit(type, evt) {
      let handlers = allHandlers.get(type);
      if (handlers) {
        handlers.slice().map((handler2) => {
          handler2(evt);
        });
      }
    }
  };
}
var ObjectUtils = {
  equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.deepEquals(obj1, obj2);
  },
  deepEquals(a, b) {
    if (a === b)
      return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.deepEquals(a[i], b[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  },
  resolveFieldData(data, field) {
    if (data && Object.keys(data).length && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") === -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  },
  isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  },
  getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  },
  filter(value, fields, filterValue) {
    var filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  },
  reorderArray(value, from, to) {
    let target;
    if (value && from !== to) {
      if (to >= value.length) {
        target = to - value.length;
        while (target-- + 1) {
          value.push(void 0);
        }
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  },
  findIndexInList(value, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
          index = i;
          break;
        }
      }
    }
    return index;
  },
  contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val))
          return true;
      }
    }
    return false;
  },
  insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  },
  removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
      str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
    }
    return str;
  },
  getVNodeProp(vnode, prop) {
    let props = vnode.props;
    if (props) {
      let kebapProp = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      let propName = Object.prototype.hasOwnProperty.call(props, kebapProp) ? kebapProp : prop;
      return vnode.type.props[prop].type === Boolean && props[propName] === "" ? true : props[propName];
    }
    return null;
  },
  isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && typeof value === "object" && Object.keys(value).length === 0;
  },
  isNotEmpty(value) {
    return !this.isEmpty(value);
  },
  isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  },
  findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  },
  findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
};
var lastId = 0;
function UniqueComponentId(prefix = "pv_id_") {
  lastId++;
  return `${prefix}${lastId}`;
}
function handler() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex = 999) => {
    const lastZIndex = getLastZIndex(key, baseZIndex);
    const newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = (key) => {
    return getLastZIndex(key).value;
  };
  const getLastZIndex = (key, baseZIndex = 0) => {
    return [...zIndexes].reverse().find((obj) => obj.key === key) || { key, value: baseZIndex };
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: (key) => getCurrentZIndex(key)
  };
}
var ZIndexUtils = handler();
const FilterMatchMode = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
const FilterOperator = {
  AND: "and",
  OR: "or"
};
const FilterService = {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = ObjectUtils.resolveFieldData(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  },
  filters: {
    startsWith(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() === filter.getTime();
      else
        return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() !== filter.getTime();
      else
        return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in(value, filter) {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i = 0; i < filter.length; i++) {
        if (ObjectUtils.equals(value, filter[i])) {
          return true;
        }
      }
      return false;
    },
    between(value, filter) {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime)
        return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else
        return filter[0] <= value && value <= filter[1];
    },
    lt(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() < filter.getTime();
      else
        return value < filter;
    },
    lte(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() <= filter.getTime();
      else
        return value <= filter;
    },
    gt(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() > filter.getTime();
      else
        return value > filter;
    },
    gte(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() >= filter.getTime();
      else
        return value >= filter;
    },
    dateIs(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() > filter.getTime();
    }
  },
  register(rule, fn) {
    this.filters[rule] = fn;
  }
};
const defaultOptions = {
  ripple: false,
  inputStyle: "outlined",
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left"
    }
  },
  filterMatchModeOptions: {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  }
};
const PrimeVueSymbol = Symbol();
var PrimeVue = {
  install: (app, options) => {
    let configOptions = options ? { ...defaultOptions, ...options } : { ...defaultOptions };
    const PrimeVue2 = {
      config: reactive(configOptions)
    };
    app.config.globalProperties.$primevue = PrimeVue2;
    app.provide(PrimeVueSymbol, PrimeVue2);
  }
};
let timeout;
function bindEvents(el) {
  el.addEventListener("mousedown", onMouseDown);
}
function unbindEvents(el) {
  el.removeEventListener("mousedown", onMouseDown);
}
function create(el) {
  let ink = document.createElement("span");
  ink.className = "p-ink";
  ink.setAttribute("role", "presentation");
  ink.setAttribute("aria-hidden", "true");
  el.appendChild(ink);
  ink.addEventListener("animationend", onAnimationEnd);
}
function remove(el) {
  let ink = getInk(el);
  if (ink) {
    unbindEvents(el);
    ink.removeEventListener("animationend", onAnimationEnd);
    ink.remove();
  }
}
function onMouseDown(event2) {
  let target = event2.currentTarget;
  let ink = getInk(target);
  if (!ink || getComputedStyle(ink, null).display === "none") {
    return;
  }
  DomHandler.removeClass(ink, "p-ink-active");
  if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
    let d = Math.max(DomHandler.getOuterWidth(target), DomHandler.getOuterHeight(target));
    ink.style.height = d + "px";
    ink.style.width = d + "px";
  }
  let offset = DomHandler.getOffset(target);
  let x = event2.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
  let y = event2.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;
  ink.style.top = y + "px";
  ink.style.left = x + "px";
  DomHandler.addClass(ink, "p-ink-active");
  timeout = setTimeout(() => {
    if (ink) {
      DomHandler.removeClass(ink, "p-ink-active");
    }
  }, 401);
}
function onAnimationEnd(event2) {
  if (timeout) {
    clearTimeout(timeout);
  }
  DomHandler.removeClass(event2.currentTarget, "p-ink-active");
}
function getInk(el) {
  for (let i = 0; i < el.children.length; i++) {
    if (typeof el.children[i].className === "string" && el.children[i].className.indexOf("p-ink") !== -1) {
      return el.children[i];
    }
  }
  return null;
}
const Ripple = {
  mounted(el, binding) {
    if (binding.instance.$primevue && binding.instance.$primevue.config && binding.instance.$primevue.config.ripple) {
      create(el);
      bindEvents(el);
    }
  },
  unmounted(el) {
    remove(el);
  }
};
var OverlayEventBus = primebus();
var script$i = {
  name: "Portal",
  props: {
    appendTo: {
      type: String,
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mounted: false
    };
  },
  mounted() {
    this.mounted = DomHandler.isClient();
  },
  computed: {
    inline() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.inline ? renderSlot(_ctx.$slots, "default", { key: 0 }) : $data.mounted ? (openBlock(), createBlock(Teleport, {
    key: 1,
    to: $props.appendTo
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, ["to"])) : createCommentVNode("", true);
}
script$i.render = render$i;
var script$h = {
  name: "VirtualScroller",
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  props: {
    id: {
      type: String,
      default: null
    },
    style: null,
    class: null,
    items: {
      type: Array,
      default: null
    },
    itemSize: {
      type: [Number, Array],
      default: 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      default: "vertical"
    },
    numToleratedItems: {
      type: Number,
      default: null
    },
    delay: {
      type: Number,
      default: 0
    },
    lazy: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loaderDisabled: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    showSpacer: {
      type: Boolean,
      default: true
    },
    showLoader: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      first: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      last: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      numItemsInViewport: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      lastScrollPos: this.isBoth() ? { top: 0, left: 0 } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  watch: {
    numToleratedItems(newValue) {
      this.d_numToleratedItems = newValue;
    },
    loading(newValue) {
      this.d_loading = newValue;
    },
    items(newValue, oldValue) {
      if (!oldValue || oldValue.length !== (newValue || []).length) {
        this.init();
      }
    },
    orientation() {
      this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
    }
  },
  mounted() {
    this.init();
    this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
  },
  methods: {
    init() {
      this.setSize();
      this.calculateOptions();
      this.setSpacerSize();
    },
    isVertical() {
      return this.orientation === "vertical";
    },
    isHorizontal() {
      return this.orientation === "horizontal";
    },
    isBoth() {
      return this.orientation === "both";
    },
    scrollTo(options) {
      this.element && this.element.scrollTo(options);
    },
    scrollToIndex(index, behavior = "auto") {
      const both = this.isBoth();
      const horizontal = this.isHorizontal();
      const first = this.first;
      const { numToleratedItems } = this.calculateNumItems();
      const itemSize = this.itemSize;
      const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
      const calculateCoord = (_first, _size) => _first * _size;
      const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });
      if (both) {
        const newFirst = { rows: calculateFirst(index[0], numToleratedItems[0]), cols: calculateFirst(index[1], numToleratedItems[1]) };
        if (newFirst.rows !== first.rows || newFirst.cols !== first.cols) {
          scrollTo(calculateCoord(newFirst.cols, itemSize[1]), calculateCoord(newFirst.rows, itemSize[0]));
        }
      } else {
        const newFirst = calculateFirst(index, numToleratedItems);
        if (newFirst !== first) {
          horizontal ? scrollTo(calculateCoord(newFirst, itemSize), 0) : scrollTo(0, calculateCoord(newFirst, itemSize));
        }
      }
    },
    scrollInView(index, to, behavior = "auto") {
      if (to) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        const { first, viewport } = this.getRenderedRange();
        const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });
        const isToStart = to === "to-start";
        const isToEnd = to === "to-end";
        if (isToStart) {
          if (both) {
            if (viewport.first.rows - first.rows > index[0]) {
              scrollTo(viewport.first.cols * this.itemSize[1], (viewport.first.rows - 1) * this.itemSize[0]);
            } else if (viewport.first.cols - first.cols > index[1]) {
              scrollTo((viewport.first.cols - 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
            }
          } else {
            if (viewport.first - first > index) {
              const pos = (viewport.first - 1) * this.itemSize;
              horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
            }
          }
        } else if (isToEnd) {
          if (both) {
            if (viewport.last.rows - first.rows <= index[0] + 1) {
              scrollTo(viewport.first.cols * this.itemSize[1], (viewport.first.rows + 1) * this.itemSize[0]);
            } else if (viewport.last.cols - first.cols <= index[1] + 1) {
              scrollTo((viewport.first.cols + 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
            }
          } else {
            if (viewport.last - first <= index + 1) {
              const pos = (viewport.first + 1) * this.itemSize;
              horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
            }
          }
        }
      } else {
        this.scrollToIndex(index, behavior);
      }
    },
    getRenderedRange() {
      const calculateFirstInViewport = (_pos, _size) => Math.floor(_pos / (_size || _pos));
      let firstInViewport = this.first;
      let lastInViewport = 0;
      if (this.element) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        const scrollTop = this.element.scrollTop;
        const scrollLeft = this.element.scrollLeft;
        if (both) {
          firstInViewport = { rows: calculateFirstInViewport(scrollTop, this.itemSize[0]), cols: calculateFirstInViewport(scrollLeft, this.itemSize[1]) };
          lastInViewport = { rows: firstInViewport.rows + this.numItemsInViewport.rows, cols: firstInViewport.cols + this.numItemsInViewport.cols };
        } else {
          const scrollPos = horizontal ? scrollLeft : scrollTop;
          firstInViewport = calculateFirstInViewport(scrollPos, this.itemSize);
          lastInViewport = firstInViewport + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: firstInViewport,
          last: lastInViewport
        }
      };
    },
    calculateNumItems() {
      const both = this.isBoth();
      const horizontal = this.isHorizontal();
      const itemSize = this.itemSize;
      const contentPos = this.getContentPosition();
      const contentWidth = this.element ? this.element.offsetWidth - contentPos.left : 0;
      const contentHeight = this.element ? this.element.offsetHeight - contentPos.top : 0;
      const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
      const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
      const numItemsInViewport = both ? { rows: calculateNumItemsInViewport(contentHeight, itemSize[0]), cols: calculateNumItemsInViewport(contentWidth, itemSize[1]) } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, itemSize);
      const numToleratedItems = this.d_numToleratedItems || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
      return { numItemsInViewport, numToleratedItems };
    },
    calculateOptions() {
      const both = this.isBoth();
      const first = this.first;
      const { numItemsInViewport, numToleratedItems } = this.calculateNumItems();
      const calculateLast = (_first, _num, _numT, _isCols) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
      const last = both ? { rows: calculateLast(first.rows, numItemsInViewport.rows, numToleratedItems[0]), cols: calculateLast(first.cols, numItemsInViewport.cols, numToleratedItems[1], true) } : calculateLast(first, numItemsInViewport, numToleratedItems);
      this.last = last;
      this.numItemsInViewport = numItemsInViewport;
      this.d_numToleratedItems = numToleratedItems;
      this.$emit("update:numToleratedItems", this.d_numToleratedItems);
      if (this.showLoader) {
        this.loaderArr = both ? Array.from({ length: numItemsInViewport.rows }).map(() => Array.from({ length: numItemsInViewport.cols })) : Array.from({ length: numItemsInViewport });
      }
      if (this.lazy) {
        this.$emit("lazy-load", { first, last });
      }
    },
    getLast(last = 0, isCols) {
      if (this.items) {
        return Math.min(isCols ? (this.columns || this.items[0]).length : this.items.length, last);
      }
      return 0;
    },
    getContentPosition() {
      if (this.content) {
        const style = getComputedStyle(this.content);
        const left = parseInt(style.paddingLeft, 10) + Math.max(parseInt(style.left, 10), 0);
        const right = parseInt(style.paddingRight, 10) + Math.max(parseInt(style.right, 10), 0);
        const top = parseInt(style.paddingTop, 10) + Math.max(parseInt(style.top, 10), 0);
        const bottom = parseInt(style.paddingBottom, 10) + Math.max(parseInt(style.bottom, 10), 0);
        return { left, right, top, bottom, x: left + right, y: top + bottom };
      }
      return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    },
    setSize() {
      if (this.element) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        const parentElement = this.element.parentElement;
        const width = this.scrollWidth || `${this.element.offsetWidth || parentElement.offsetWidth}px`;
        const height = this.scrollHeight || `${this.element.offsetHeight || parentElement.offsetHeight}px`;
        const setProp = (_name, _value) => this.element.style[_name] = _value;
        if (both || horizontal) {
          setProp("height", height);
          setProp("width", width);
        } else {
          setProp("height", height);
        }
      }
    },
    setSpacerSize() {
      const items = this.items;
      if (items) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        const contentPos = this.getContentPosition();
        const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = { ...this.spacerStyle, ...{ [`${_name}`]: (_value || []).length * _size + _cpos + "px" } };
        if (both) {
          setProp("height", items, this.itemSize[0], contentPos.y);
          setProp("width", this.columns || items[1], this.itemSize[1], contentPos.x);
        } else {
          horizontal ? setProp("width", this.columns || items, this.itemSize, contentPos.x) : setProp("height", items, this.itemSize, contentPos.y);
        }
      }
    },
    setContentPosition(pos) {
      if (this.content) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        const first = pos ? pos.first : this.first;
        const calculateTranslateVal = (_first, _size) => _first * _size;
        const setTransform = (_x = 0, _y = 0) => {
          this.contentStyle = { ...this.contentStyle, ...{ transform: `translate3d(${_x}px, ${_y}px, 0)` } };
        };
        if (both) {
          setTransform(calculateTranslateVal(first.cols, this.itemSize[1]), calculateTranslateVal(first.rows, this.itemSize[0]));
        } else {
          const translateVal = calculateTranslateVal(first, this.itemSize);
          horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
        }
      }
    },
    onScrollPositionChange(event2) {
      const target = event2.target;
      const both = this.isBoth();
      const horizontal = this.isHorizontal();
      const contentPos = this.getContentPosition();
      const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
      const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));
      const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
        return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
      };
      const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
        if (_currentIndex <= _numT)
          return 0;
        else
          return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
      };
      const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols) => {
        let lastValue = _first + _num + 2 * _numT;
        if (_currentIndex >= _numT) {
          lastValue += _numT + 1;
        }
        return this.getLast(lastValue, _isCols);
      };
      const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
      const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
      let newFirst = both ? { rows: 0, cols: 0 } : 0;
      let newLast = this.last;
      let isRangeChanged = false;
      let newScrollPos = this.lastScrollPos;
      if (both) {
        const isScrollDown = this.lastScrollPos.top <= scrollTop;
        const isScrollRight = this.lastScrollPos.left <= scrollLeft;
        const currentIndex = { rows: calculateCurrentIndex(scrollTop, this.itemSize[0]), cols: calculateCurrentIndex(scrollLeft, this.itemSize[1]) };
        const triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
        };
        isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols;
        newScrollPos = { top: scrollTop, left: scrollLeft };
      } else {
        const scrollPos = horizontal ? scrollLeft : scrollTop;
        const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
        const currentIndex = calculateCurrentIndex(scrollPos, this.itemSize);
        const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
        isRangeChanged = newFirst !== this.first || newLast !== this.last;
        newScrollPos = scrollPos;
      }
      return {
        first: newFirst,
        last: newLast,
        isRangeChanged,
        scrollPos: newScrollPos
      };
    },
    onScrollChange(event2) {
      const { first, last, isRangeChanged, scrollPos } = this.onScrollPositionChange(event2);
      if (isRangeChanged) {
        const newState = { first, last };
        this.setContentPosition(newState);
        this.first = first;
        this.last = last;
        this.lastScrollPos = scrollPos;
        this.$emit("scroll-index-change", newState);
        if (this.lazy) {
          this.$emit("lazy-load", newState);
        }
      }
    },
    onScroll(event2) {
      this.$emit("scroll", event2);
      if (this.delay) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }
        if (!this.d_loading && this.showLoader) {
          const { isRangeChanged: changed } = this.onScrollPositionChange(event2);
          changed && (this.d_loading = true);
        }
        this.scrollTimeout = setTimeout(() => {
          this.onScrollChange(event2);
          if (this.d_loading && this.showLoader && !this.lazy) {
            this.d_loading = false;
          }
        }, this.delay);
      } else {
        this.onScrollChange(event2);
      }
    },
    getOptions(renderedIndex) {
      const count = (this.items || []).length;
      const index = this.isBoth() ? this.first.rows + renderedIndex : this.first + renderedIndex;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      };
    },
    getLoaderOptions(index, extOptions) {
      let count = this.loaderArr.length;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0,
        ...extOptions
      };
    },
    elementRef(el) {
      this.element = el;
    },
    contentRef(el) {
      this.content = el;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-virtualscroller",
        {
          "p-both-scroll": this.isBoth(),
          "p-horizontal-scroll": this.isHorizontal()
        },
        this.class
      ];
    },
    contentClass() {
      return [
        "p-virtualscroller-content",
        {
          "p-virtualscroller-loading": this.d_loading
        }
      ];
    },
    loaderClass() {
      return [
        "p-virtualscroller-loader",
        {
          "p-component-overlay": !this.$slots.loader
        }
      ];
    },
    loadedItems() {
      const items = this.items;
      if (items && !this.d_loading) {
        if (this.isBoth()) {
          return items.slice(this.first.rows, this.last.rows).map((item) => this.columns ? item : item.slice(this.first.cols, this.last.cols));
        } else if (this.isHorizontal() && this.columns)
          return items;
        else
          return items.slice(this.first, this.last);
      }
      return [];
    },
    loadedRows() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns() {
      if (this.columns) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        if (both || horizontal) {
          return this.d_loading && this.loaderDisabled ? both ? this.loaderArr[0] : this.loaderArr : this.columns.slice(both ? this.first.cols : this.first, both ? this.last.cols : this.last);
        }
      }
      return this.columns;
    }
  }
};
const _hoisted_1$h = ["tabindex"];
const _hoisted_2$e = {
  key: 1,
  class: "p-virtualscroller-loading-icon pi pi-spinner pi-spin"
};
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return !$props.disabled ? (openBlock(), createElementBlock("div", {
    key: 0,
    ref: $options.elementRef,
    class: normalizeClass($options.containerClass),
    tabindex: $props.tabindex,
    style: normalizeStyle($props.style),
    onScroll: _cache[0] || (_cache[0] = (...args) => $options.onScroll && $options.onScroll(...args))
  }, [
    renderSlot(_ctx.$slots, "content", {
      styleClass: $options.contentClass,
      items: $options.loadedItems,
      getItemOptions: $options.getOptions,
      loading: $data.d_loading,
      getLoaderOptions: $options.getLoaderOptions,
      itemSize: $props.itemSize,
      rows: $options.loadedRows,
      columns: $options.loadedColumns,
      contentRef: $options.contentRef,
      spacerStyle: $data.spacerStyle,
      contentStyle: $data.contentStyle,
      vertical: $options.isVertical(),
      horizontal: $options.isHorizontal(),
      both: $options.isBoth()
    }, () => [
      createElementVNode("div", {
        ref: $options.contentRef,
        class: normalizeClass($options.contentClass),
        style: normalizeStyle($data.contentStyle)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.loadedItems, (item, index) => {
          return renderSlot(_ctx.$slots, "item", {
            key: index,
            item,
            options: $options.getOptions(index)
          });
        }), 128))
      ], 6)
    ]),
    $props.showSpacer ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "p-virtualscroller-spacer",
      style: normalizeStyle($data.spacerStyle)
    }, null, 4)) : createCommentVNode("", true),
    !$props.loaderDisabled && $props.showLoader && $data.d_loading ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass($options.loaderClass)
    }, [
      _ctx.$slots && _ctx.$slots.loader ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($data.loaderArr, (_, index) => {
        return renderSlot(_ctx.$slots, "loader", {
          key: index,
          options: $options.getLoaderOptions(index, $options.isBoth() && { numCols: _ctx.d_numItemsInViewport.cols })
        });
      }), 128)) : (openBlock(), createElementBlock("i", _hoisted_2$e))
    ], 2)) : createCommentVNode("", true)
  ], 46, _hoisted_1$h)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
    renderSlot(_ctx.$slots, "default"),
    renderSlot(_ctx.$slots, "content", {
      items: $props.items,
      rows: $props.items,
      columns: $options.loadedColumns
    })
  ], 64));
}
function styleInject$5(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$5 = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    contain: content;\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n.p-virtualscroller .p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.p-virtualscroller-loader.p-component-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n";
styleInject$5(css_248z$5);
script$h.render = render$h;
var script$g = {
  name: "Dropdown",
  emits: ["update:modelValue", "change", "focus", "blur", "before-show", "before-hide", "show", "hide", "filter"],
  props: {
    modelValue: null,
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      default: "200px"
    },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
      type: String,
      default: "contains"
    },
    filterFields: {
      type: Array,
      default: null
    },
    editable: Boolean,
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dataKey: null,
    showClear: {
      type: Boolean,
      default: false
    },
    inputId: {
      type: String,
      default: null
    },
    inputClass: {
      type: String,
      default: null
    },
    inputStyle: {
      type: null,
      default: null
    },
    inputProps: {
      type: null,
      default: null
    },
    panelClass: {
      type: String,
      default: null
    },
    panelStyle: {
      type: null,
      default: null
    },
    panelProps: {
      type: null,
      default: null
    },
    filterInputProps: {
      type: null,
      default: null
    },
    clearIconProps: {
      type: null,
      default: null
    },
    appendTo: {
      type: String,
      default: "body"
    },
    loading: {
      type: Boolean,
      default: false
    },
    clearIcon: {
      type: String,
      default: "pi pi-times"
    },
    dropdownIcon: {
      type: String,
      default: "pi pi-chevron-down"
    },
    filterIcon: {
      type: String,
      default: "pi pi-search"
    },
    loadingIcon: {
      type: String,
      default: "pi pi-spinner pi-spin"
    },
    resetFilterOnHide: {
      type: Boolean,
      default: false
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    autoOptionFocus: {
      type: Boolean,
      default: true
    },
    autoFilterFocus: {
      type: Boolean,
      default: false
    },
    selectOnFocus: {
      type: Boolean,
      default: false
    },
    filterMessage: {
      type: String,
      default: null
    },
    selectionMessage: {
      type: String,
      default: null
    },
    emptySelectionMessage: {
      type: String,
      default: null
    },
    emptyFilterMessage: {
      type: String,
      default: null
    },
    emptyMessage: {
      type: String,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    },
    "aria-label": {
      type: String,
      default: null
    },
    "aria-labelledby": {
      type: String,
      default: null
    }
  },
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  searchTimeout: null,
  searchValue: null,
  isModelValueChanged: false,
  focusOnHover: false,
  data() {
    return {
      focused: false,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: false
    };
  },
  watch: {
    modelValue() {
      this.isModelValueChanged = true;
    },
    options() {
      this.autoUpdateModel();
    }
  },
  mounted() {
    this.autoUpdateModel();
  },
  updated() {
    if (this.overlayVisible && this.isModelValueChanged) {
      this.scrollInView(this.findSelectedOptionIndex());
    }
    this.isModelValueChanged = false;
  },
  beforeUnmount() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      ZIndexUtils.clear(this.overlay);
      this.overlay = null;
    }
  },
  methods: {
    getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)["index"];
    },
    getOptionLabel(option) {
      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    },
    getOptionValue(option) {
      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    },
    getOptionRenderKey(option, index) {
      return (this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)) + "_" + index;
    },
    isOptionDisabled(option) {
      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    },
    isOptionGroup(option) {
      return this.optionGroupLabel && option.optionGroup && option.group;
    },
    getOptionGroupLabel(optionGroup) {
      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
    },
    getOptionGroupChildren(optionGroup) {
      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren);
    },
    getAriaPosInset(index) {
      return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
    },
    show(isFocus) {
      this.$emit("before-show");
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      isFocus && DomHandler.focus(this.$refs.focusInput);
    },
    hide(isFocus) {
      const _hide = () => {
        this.$emit("before-hide");
        this.overlayVisible = false;
        this.focusedOptionIndex = -1;
        this.searchValue = "";
        this.resetFilterOnHide && (this.filterValue = null);
        isFocus && DomHandler.focus(this.$refs.focusInput);
      };
      setTimeout(() => {
        _hide();
      }, 0);
    },
    onFocus(event2) {
      if (this.disabled) {
        return;
      }
      this.focused = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.overlayVisible && this.scrollInView(this.focusedOptionIndex);
      this.$emit("focus", event2);
    },
    onBlur(event2) {
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.searchValue = "";
      this.$emit("blur", event2);
    },
    onKeyDown(event2) {
      if (this.disabled) {
        event2.preventDefault();
        return;
      }
      const metaKey = event2.metaKey || event2.ctrlKey;
      switch (event2.code) {
        case "ArrowDown":
          this.onArrowDownKey(event2);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event2, this.editable);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(event2, this.editable);
          break;
        case "Home":
          this.onHomeKey(event2, this.editable);
          break;
        case "End":
          this.onEndKey(event2, this.editable);
          break;
        case "PageDown":
          this.onPageDownKey(event2);
          break;
        case "PageUp":
          this.onPageUpKey(event2);
          break;
        case "Space":
          this.onSpaceKey(event2, this.editable);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event2);
          break;
        case "Escape":
          this.onEscapeKey(event2);
          break;
        case "Tab":
          this.onTabKey(event2);
          break;
        case "Backspace":
          this.onBackspaceKey(event2, this.editable);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && ObjectUtils.isPrintableCharacter(event2.key)) {
            !this.overlayVisible && this.show();
            !this.editable && this.searchOptions(event2, event2.key);
          }
          break;
      }
    },
    onEditableInput(event2) {
      const value = event2.target.value;
      this.searchValue = "";
      const matched = this.searchOptions(event2, value);
      !matched && (this.focusedOptionIndex = -1);
      this.$emit("update:modelValue", value);
    },
    onContainerClick(event2) {
      if (this.disabled || this.loading) {
        return;
      }
      if (DomHandler.hasClass(event2.target, "p-dropdown-clear-icon") || event2.target.tagName === "INPUT") {
        return;
      } else if (!this.overlay || !this.overlay.contains(event2.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
    },
    onClearClick(event2) {
      this.updateModel(event2, null);
    },
    onFirstHiddenFocus(event2) {
      const focusableEl = event2.relatedTarget === this.$refs.focusInput ? DomHandler.getFirstFocusableElement(this.overlay, ":not(.p-hidden-focusable)") : this.$refs.focusInput;
      DomHandler.focus(focusableEl);
    },
    onLastHiddenFocus(event2) {
      const focusableEl = event2.relatedTarget === this.$refs.focusInput ? DomHandler.getLastFocusableElement(this.overlay, ":not(.p-hidden-focusable)") : this.$refs.focusInput;
      DomHandler.focus(focusableEl);
    },
    onOptionSelect(event2, option, isHide = true) {
      const value = this.getOptionValue(option);
      this.updateModel(event2, value);
      isHide && this.hide(true);
    },
    onOptionMouseMove(event2, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event2, index);
      }
    },
    onFilterChange(event2) {
      const value = event2.target.value;
      this.filterValue = value;
      this.focusedOptionIndex = -1;
      this.$emit("filter", { originalEvent: event2, value });
      !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown(event2) {
      switch (event2.code) {
        case "ArrowDown":
          this.onArrowDownKey(event2);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event2, true);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(event2, true);
          break;
        case "Home":
          this.onHomeKey(event2, true);
          break;
        case "End":
          this.onEndKey(event2, true);
          break;
        case "Enter":
          this.onEnterKey(event2);
          break;
        case "Escape":
          this.onEscapeKey(event2);
          break;
        case "Tab":
          this.onTabKey(event2, true);
          break;
      }
    },
    onFilterBlur() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated() {
      if (this.overlayVisible) {
        this.alignOverlay();
      }
    },
    onOverlayClick(event2) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event2,
        target: this.$el
      });
    },
    onOverlayKeyDown(event2) {
      switch (event2.code) {
        case "Escape":
          this.onEscapeKey(event2);
          break;
      }
    },
    onArrowDownKey(event2) {
      const optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event2, optionIndex);
      !this.overlayVisible && this.show();
      event2.preventDefault();
    },
    onArrowUpKey(event2, pressedInInputText = false) {
      if (event2.altKey && !pressedInInputText) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event2, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event2.preventDefault();
      } else {
        const optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event2, optionIndex);
        !this.overlayVisible && this.show();
        event2.preventDefault();
      }
    },
    onArrowLeftKey(event2, pressedInInputText = false) {
      pressedInInputText && (this.focusedOptionIndex = -1);
    },
    onHomeKey(event2, pressedInInputText = false) {
      if (pressedInInputText) {
        event2.currentTarget.setSelectionRange(0, 0);
        this.focusedOptionIndex = -1;
      } else {
        this.changeFocusedOptionIndex(event2, this.findFirstOptionIndex());
        !this.overlayVisible && this.show();
      }
      event2.preventDefault();
    },
    onEndKey(event2, pressedInInputText = false) {
      if (pressedInInputText) {
        const target = event2.currentTarget;
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex = -1;
      } else {
        this.changeFocusedOptionIndex(event2, this.findLastOptionIndex());
        !this.overlayVisible && this.show();
      }
      event2.preventDefault();
    },
    onPageUpKey(event2) {
      this.scrollInView(0);
      event2.preventDefault();
    },
    onPageDownKey(event2) {
      this.scrollInView(this.visibleOptions.length - 1);
      event2.preventDefault();
    },
    onEnterKey(event2) {
      if (!this.overlayVisible) {
        this.onArrowDownKey(event2);
      } else {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event2, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.hide();
      }
      event2.preventDefault();
    },
    onSpaceKey(event2, pressedInInputText = false) {
      !pressedInInputText && this.onEnterKey(event2);
    },
    onEscapeKey(event2) {
      this.overlayVisible && this.hide(true);
      event2.preventDefault();
    },
    onTabKey(event2, pressedInInputText = false) {
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          DomHandler.focus(this.$refs.firstHiddenFocusableElementOnOverlay);
          event2.preventDefault();
        } else {
          if (this.focusedOptionIndex !== -1) {
            this.onOptionSelect(event2, this.visibleOptions[this.focusedOptionIndex]);
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
    },
    onBackspaceKey(event2, pressedInInputText = false) {
      if (pressedInInputText) {
        !this.overlayVisible && this.show();
      }
    },
    onOverlayEnter(el) {
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
      this.alignOverlay();
      this.scrollInView();
      this.autoFilterFocus && DomHandler.focus(this.$refs.filterInput);
    },
    onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    },
    onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.overlay = null;
    },
    onOverlayAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    alignOverlay() {
      if (this.appendTo === "self") {
        DomHandler.relativePosition(this.overlay, this.$el);
      } else {
        this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + "px";
        DomHandler.absolutePosition(this.overlay, this.$el);
      }
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = (event2) => {
          if (this.overlayVisible && this.overlay && !this.$el.contains(event2.target) && !this.overlay.contains(event2.target)) {
            this.hide();
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = () => {
          if (this.overlayVisible && !DomHandler.isTouchDevice()) {
            this.hide();
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    hasFocusableElements() {
      return DomHandler.getFocusableElements(this.overlay, ":not(.p-hidden-focusable)").length > 0;
    },
    isOptionMatched(option) {
      return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
    },
    isValidOption(option) {
      return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    },
    isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    },
    isSelected(option) {
      return ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.equalityKey);
    },
    findFirstOptionIndex() {
      return this.visibleOptions.findIndex((option) => this.isValidOption(option));
    },
    findLastOptionIndex() {
      return ObjectUtils.findLastIndex(this.visibleOptions, (option) => this.isValidOption(option));
    },
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index), (option) => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex() {
      return this.hasSelectedOption ? this.visibleOptions.findIndex((option) => this.isValidSelectedOption(option)) : -1;
    },
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    searchOptions(event2, char) {
      this.searchValue = (this.searchValue || "") + char;
      let optionIndex = -1;
      let matched = false;
      if (this.focusedOptionIndex !== -1) {
        optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex((option) => this.isOptionMatched(option));
        optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex;
      } else {
        optionIndex = this.visibleOptions.findIndex((option) => this.isOptionMatched(option));
      }
      if (optionIndex !== -1) {
        matched = true;
      }
      if (optionIndex === -1 && this.focusedOptionIndex === -1) {
        optionIndex = this.findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        this.changeFocusedOptionIndex(event2, optionIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.searchValue = "";
        this.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedOptionIndex(event2, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index;
        this.scrollInView();
        if (this.selectOnFocus) {
          this.onOptionSelect(event2, this.visibleOptions[index], false);
        }
      }
    },
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
      const element = DomHandler.findSingle(this.list, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({ block: "nearest", inline: "start" });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroller && this.virtualScroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex);
        }, 0);
      }
    },
    autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], false);
      }
    },
    updateModel(event2, value) {
      this.$emit("update:modelValue", value);
      this.$emit("change", { originalEvent: event2, value });
    },
    flatOptions(options) {
      return (options || []).reduce((result, option, index) => {
        result.push({ optionGroup: option, group: true, index });
        const optionGroupChildren = this.getOptionGroupChildren(option);
        optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
        return result;
      }, []);
    },
    overlayRef(el) {
      this.overlay = el;
    },
    listRef(el, contentRef) {
      this.list = el;
      contentRef && contentRef(el);
    },
    virtualScrollerRef(el) {
      this.virtualScroller = el;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-dropdown p-component p-inputwrapper",
        {
          "p-disabled": this.disabled,
          "p-dropdown-clearable": this.showClear && !this.disabled,
          "p-focus": this.focused,
          "p-inputwrapper-filled": this.modelValue,
          "p-inputwrapper-focus": this.focused || this.overlayVisible,
          "p-overlay-open": this.overlayVisible
        }
      ];
    },
    inputStyleClass() {
      return [
        "p-dropdown-label p-inputtext",
        this.inputClass,
        {
          "p-placeholder": !this.editable && this.label === this.placeholder,
          "p-dropdown-label-empty": !this.editable && !this.$slots["value"] && (this.label === "p-emptylabel" || this.label.length === 0)
        }
      ];
    },
    panelStyleClass() {
      return [
        "p-dropdown-panel p-component",
        this.panelClass,
        {
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false
        }
      ];
    },
    dropdownIconClass() {
      return ["p-dropdown-trigger-icon", this.loading ? this.loadingIcon : this.dropdownIcon];
    },
    visibleOptions() {
      const options = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        const filteredOptions = FilterService.filter(options, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          const optionGroups = this.options || [];
          const filtered = [];
          optionGroups.forEach((group) => {
            const filteredItems = group.items.filter((item) => filteredOptions.includes(item));
            if (filteredItems.length > 0)
              filtered.push({ ...group, items: [...filteredItems] });
          });
          return this.flatOptions(filtered);
        }
        return filteredOptions;
      }
      return options;
    },
    hasSelectedOption() {
      return ObjectUtils.isNotEmpty(this.modelValue);
    },
    label() {
      const selectedOptionIndex = this.findSelectedOptionIndex();
      return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.placeholder || "p-emptylabel";
    },
    editableInputValue() {
      const selectedOptionIndex = this.findSelectedOptionIndex();
      return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.modelValue || "";
    },
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields() {
      return this.filterFields || [this.optionLabel];
    },
    filterResultMessageText() {
      return ObjectUtils.isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptyFilterMessageText;
    },
    filterMessageText() {
      return this.filterMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptyFilterMessageText() {
      return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || "";
    },
    emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || "";
    },
    selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll("{0}", "1") : this.emptySelectionMessageText;
    },
    id() {
      return this.$attrs.id || UniqueComponentId();
    },
    focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? `${this.id}_${this.focusedOptionIndex}` : null;
    },
    ariaSetSize() {
      return this.visibleOptions.filter((option) => !this.isOptionGroup(option)).length;
    },
    virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    VirtualScroller: script$h,
    Portal: script$i
  }
};
const _hoisted_1$g = ["id"];
const _hoisted_2$d = ["id", "value", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant"];
const _hoisted_3$8 = ["id", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-disabled"];
const _hoisted_4$6 = { class: "p-dropdown-trigger" };
const _hoisted_5$4 = {
  key: 0,
  class: "p-dropdown-header"
};
const _hoisted_6$4 = { class: "p-dropdown-filter-container" };
const _hoisted_7$3 = ["value", "placeholder", "aria-owns", "aria-activedescendant"];
const _hoisted_8$2 = {
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
};
const _hoisted_9$2 = ["id"];
const _hoisted_10$2 = ["id"];
const _hoisted_11$2 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove"];
const _hoisted_12$1 = {
  key: 0,
  class: "p-dropdown-empty-message",
  role: "option"
};
const _hoisted_13$1 = {
  key: 1,
  class: "p-dropdown-empty-message",
  role: "option"
};
const _hoisted_14 = {
  key: 1,
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
};
const _hoisted_15 = {
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
};
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VirtualScroller = resolveComponent("VirtualScroller");
  const _component_Portal = resolveComponent("Portal");
  const _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", {
    ref: "container",
    id: $options.id,
    class: normalizeClass($options.containerClass),
    onClick: _cache[16] || (_cache[16] = (...args) => $options.onContainerClick && $options.onContainerClick(...args))
  }, [
    $props.editable ? (openBlock(), createElementBlock("input", mergeProps({
      key: 0,
      ref: "focusInput",
      id: $props.inputId,
      type: "text",
      style: $props.inputStyle,
      class: $options.inputStyleClass,
      value: $options.editableInputValue,
      placeholder: $props.placeholder,
      tabindex: !$props.disabled ? $props.tabindex : -1,
      disabled: $props.disabled,
      autocomplete: "off",
      role: "combobox",
      "aria-label": _ctx.ariaLabel,
      "aria-labelledby": _ctx.ariaLabelledby,
      "aria-haspopup": "listbox",
      "aria-expanded": $data.overlayVisible,
      "aria-controls": $options.id + "_list",
      "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
      onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
      onKeydown: _cache[2] || (_cache[2] = (...args) => $options.onKeyDown && $options.onKeyDown(...args)),
      onInput: _cache[3] || (_cache[3] = (...args) => $options.onEditableInput && $options.onEditableInput(...args))
    }, $props.inputProps), null, 16, _hoisted_2$d)) : (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      ref: "focusInput",
      id: $props.inputId,
      style: $props.inputStyle,
      class: $options.inputStyleClass,
      tabindex: !$props.disabled ? $props.tabindex : -1,
      role: "combobox",
      "aria-label": _ctx.ariaLabel || ($options.label === "p-emptylabel" ? void 0 : $options.label),
      "aria-labelledby": _ctx.ariaLabelledby,
      "aria-haspopup": "listbox",
      "aria-expanded": $data.overlayVisible,
      "aria-controls": $options.id + "_list",
      "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
      "aria-disabled": $props.disabled,
      onFocus: _cache[4] || (_cache[4] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[5] || (_cache[5] = (...args) => $options.onBlur && $options.onBlur(...args)),
      onKeydown: _cache[6] || (_cache[6] = (...args) => $options.onKeyDown && $options.onKeyDown(...args))
    }, $props.inputProps), [
      renderSlot(_ctx.$slots, "value", {
        value: $props.modelValue,
        placeholder: $props.placeholder
      }, () => [
        createTextVNode(toDisplayString($options.label === "p-emptylabel" ? "\xA0" : $options.label || "empty"), 1)
      ])
    ], 16, _hoisted_3$8)),
    $props.showClear && $props.modelValue != null ? (openBlock(), createElementBlock("i", mergeProps({
      key: 2,
      class: ["p-dropdown-clear-icon", $props.clearIcon],
      onClick: _cache[7] || (_cache[7] = (...args) => $options.onClearClick && $options.onClearClick(...args))
    }, $props.clearIconProps), null, 16)) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_4$6, [
      renderSlot(_ctx.$slots, "indicator", {}, () => [
        createElementVNode("span", {
          class: normalizeClass($options.dropdownIconClass),
          "aria-hidden": "true"
        }, null, 2)
      ])
    ]),
    createVNode(_component_Portal, { appendTo: $props.appendTo }, {
      default: withCtx(() => [
        createVNode(Transition, {
          name: "p-connected-overlay",
          onEnter: $options.onOverlayEnter,
          onAfterEnter: $options.onOverlayAfterEnter,
          onLeave: $options.onOverlayLeave,
          onAfterLeave: $options.onOverlayAfterLeave
        }, {
          default: withCtx(() => [
            $data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              ref: $options.overlayRef,
              style: $props.panelStyle,
              class: $options.panelStyleClass,
              onClick: _cache[14] || (_cache[14] = (...args) => $options.onOverlayClick && $options.onOverlayClick(...args)),
              onKeydown: _cache[15] || (_cache[15] = (...args) => $options.onOverlayKeyDown && $options.onOverlayKeyDown(...args))
            }, $props.panelProps), [
              createElementVNode("span", {
                ref: "firstHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: _cache[8] || (_cache[8] = (...args) => $options.onFirstHiddenFocus && $options.onFirstHiddenFocus(...args))
              }, null, 544),
              renderSlot(_ctx.$slots, "header", {
                value: $props.modelValue,
                options: $options.visibleOptions
              }),
              $props.filter ? (openBlock(), createElementBlock("div", _hoisted_5$4, [
                createElementVNode("div", _hoisted_6$4, [
                  createElementVNode("input", mergeProps({
                    ref: "filterInput",
                    type: "text",
                    value: $data.filterValue,
                    onVnodeUpdated: _cache[9] || (_cache[9] = (...args) => $options.onFilterUpdated && $options.onFilterUpdated(...args)),
                    class: "p-dropdown-filter p-inputtext p-component",
                    placeholder: $props.filterPlaceholder,
                    role: "searchbox",
                    autocomplete: "off",
                    "aria-owns": $options.id + "_list",
                    "aria-activedescendant": $options.focusedOptionId,
                    onKeydown: _cache[10] || (_cache[10] = (...args) => $options.onFilterKeyDown && $options.onFilterKeyDown(...args)),
                    onBlur: _cache[11] || (_cache[11] = (...args) => $options.onFilterBlur && $options.onFilterBlur(...args)),
                    onInput: _cache[12] || (_cache[12] = (...args) => $options.onFilterChange && $options.onFilterChange(...args))
                  }, $props.filterInputProps), null, 16, _hoisted_7$3),
                  createElementVNode("span", {
                    class: normalizeClass(["p-dropdown-filter-icon", $props.filterIcon])
                  }, null, 2)
                ]),
                createElementVNode("span", _hoisted_8$2, toDisplayString($options.filterResultMessageText), 1)
              ])) : createCommentVNode("", true),
              createElementVNode("div", {
                class: "p-dropdown-items-wrapper",
                style: normalizeStyle({ "max-height": $options.virtualScrollerDisabled ? $props.scrollHeight : "" })
              }, [
                createVNode(_component_VirtualScroller, mergeProps({ ref: $options.virtualScrollerRef }, $props.virtualScrollerOptions, {
                  items: $options.visibleOptions,
                  style: { height: $props.scrollHeight },
                  tabindex: -1,
                  disabled: $options.virtualScrollerDisabled
                }), createSlots({
                  content: withCtx(({ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }) => [
                    createElementVNode("ul", {
                      ref: (el) => $options.listRef(el, contentRef),
                      id: $options.id + "_list",
                      class: normalizeClass(["p-dropdown-items", styleClass]),
                      style: normalizeStyle(contentStyle),
                      role: "listbox"
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(items, (option, i) => {
                        return openBlock(), createElementBlock(Fragment, {
                          key: $options.getOptionRenderKey(option, $options.getOptionIndex(i, getItemOptions))
                        }, [
                          $options.isOptionGroup(option) ? (openBlock(), createElementBlock("li", {
                            key: 0,
                            id: $options.id + "_" + $options.getOptionIndex(i, getItemOptions),
                            style: normalizeStyle({ height: itemSize ? itemSize + "px" : void 0 }),
                            class: "p-dropdown-item-group",
                            role: "option"
                          }, [
                            renderSlot(_ctx.$slots, "optiongroup", {
                              option: option.optionGroup,
                              index: $options.getOptionIndex(i, getItemOptions)
                            }, () => [
                              createTextVNode(toDisplayString($options.getOptionGroupLabel(option.optionGroup)), 1)
                            ])
                          ], 12, _hoisted_10$2)) : withDirectives((openBlock(), createElementBlock("li", {
                            key: 1,
                            id: $options.id + "_" + $options.getOptionIndex(i, getItemOptions),
                            style: normalizeStyle({ height: itemSize ? itemSize + "px" : void 0 }),
                            class: normalizeClass(["p-dropdown-item", { "p-highlight": $options.isSelected(option), "p-focus": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions), "p-disabled": $options.isOptionDisabled(option) }]),
                            role: "option",
                            "aria-label": $options.getOptionLabel(option),
                            "aria-selected": $options.isSelected(option),
                            "aria-disabled": $options.isOptionDisabled(option),
                            "aria-setsize": $options.ariaSetSize,
                            "aria-posinset": $options.getAriaPosInset($options.getOptionIndex(i, getItemOptions)),
                            onClick: ($event) => $options.onOptionSelect($event, option),
                            onMousemove: ($event) => $options.onOptionMouseMove($event, $options.getOptionIndex(i, getItemOptions))
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              index: $options.getOptionIndex(i, getItemOptions)
                            }, () => [
                              createTextVNode(toDisplayString($options.getOptionLabel(option)), 1)
                            ])
                          ], 46, _hoisted_11$2)), [
                            [_directive_ripple]
                          ])
                        ], 64);
                      }), 128)),
                      $data.filterValue && (!items || items && items.length === 0) ? (openBlock(), createElementBlock("li", _hoisted_12$1, [
                        renderSlot(_ctx.$slots, "emptyfilter", {}, () => [
                          createTextVNode(toDisplayString($options.emptyFilterMessageText), 1)
                        ])
                      ])) : !$props.options || $props.options && $props.options.length === 0 ? (openBlock(), createElementBlock("li", _hoisted_13$1, [
                        renderSlot(_ctx.$slots, "empty", {}, () => [
                          createTextVNode(toDisplayString($options.emptyMessageText), 1)
                        ])
                      ])) : createCommentVNode("", true)
                    ], 14, _hoisted_9$2)
                  ]),
                  _: 2
                }, [
                  _ctx.$slots.loader ? {
                    name: "loader",
                    fn: withCtx(({ options }) => [
                      renderSlot(_ctx.$slots, "loader", { options })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["items", "style", "disabled"])
              ], 4),
              renderSlot(_ctx.$slots, "footer", {
                value: $props.modelValue,
                options: $options.visibleOptions
              }),
              !$props.options || $props.options && $props.options.length === 0 ? (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString($options.emptyMessageText), 1)) : createCommentVNode("", true),
              createElementVNode("span", _hoisted_15, toDisplayString($options.selectedMessageText), 1),
              createElementVNode("span", {
                ref: "lastHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: _cache[13] || (_cache[13] = (...args) => $options.onLastHiddenFocus && $options.onLastHiddenFocus(...args))
              }, null, 544)
            ], 16)) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])
      ]),
      _: 3
    }, 8, ["appendTo"])
  ], 10, _hoisted_1$g);
}
function styleInject$4(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$4 = "\n.p-dropdown {\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n}\n.p-dropdown-clear-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n.p-dropdown-trigger {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n}\n.p-dropdown-label {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    flex: 1 1 auto;\n    width: 1%;\n    text-overflow: ellipsis;\n    cursor: pointer;\n}\n.p-dropdown-label-empty {\n    overflow: hidden;\n    opacity: 0;\n}\ninput.p-dropdown-label {\n    cursor: default;\n}\n.p-dropdown .p-dropdown-panel {\n    min-width: 100%;\n}\n.p-dropdown-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-dropdown-items-wrapper {\n    overflow: auto;\n}\n.p-dropdown-item {\n    cursor: pointer;\n    font-weight: normal;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n}\n.p-dropdown-item-group {\n    cursor: auto;\n}\n.p-dropdown-items {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n.p-dropdown-filter {\n    width: 100%;\n}\n.p-dropdown-filter-container {\n    position: relative;\n}\n.p-dropdown-filter-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n.p-fluid .p-dropdown {\n    display: flex;\n}\n.p-fluid .p-dropdown .p-dropdown-label {\n    width: 1%;\n}\n";
styleInject$4(css_248z$4);
script$g.render = render$g;
var script$f = {
  name: "Button",
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: String,
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: "pi pi-spinner pi-spin"
    }
  },
  computed: {
    buttonClass() {
      return {
        "p-button p-component": true,
        "p-button-icon-only": this.icon && !this.label,
        "p-button-vertical": (this.iconPos === "top" || this.iconPos === "bottom") && this.label,
        "p-disabled": this.$attrs.disabled || this.loading,
        "p-button-loading": this.loading,
        "p-button-loading-label-only": this.loading && !this.icon && this.label
      };
    },
    iconStyleClass() {
      return [
        this.loading ? "p-button-loading-icon " + this.loadingIcon : this.icon,
        "p-button-icon",
        this.iconClass,
        {
          "p-button-icon-left": this.iconPos === "left" && this.label,
          "p-button-icon-right": this.iconPos === "right" && this.label,
          "p-button-icon-top": this.iconPos === "top" && this.label,
          "p-button-icon-bottom": this.iconPos === "bottom" && this.label
        }
      ];
    },
    badgeStyleClass() {
      return [
        "p-badge p-component",
        this.badgeClass,
        {
          "p-badge-no-gutter": this.badge && String(this.badge).length === 1
        }
      ];
    },
    disabled() {
      return this.$attrs.disabled || this.loading;
    },
    defaultAriaLabel() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs["aria-label"];
    }
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$f = ["aria-label", "disabled"];
const _hoisted_2$c = { class: "p-button-label" };
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", {
    class: normalizeClass($options.buttonClass),
    type: "button",
    "aria-label": $options.defaultAriaLabel,
    disabled: $options.disabled
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      $props.loading && !$props.icon ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass($options.iconStyleClass)
      }, null, 2)) : createCommentVNode("", true),
      $props.icon ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass($options.iconStyleClass)
      }, null, 2)) : createCommentVNode("", true),
      createElementVNode("span", _hoisted_2$c, toDisplayString($props.label || "\xA0"), 1),
      $props.badge ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass($options.badgeStyleClass)
      }, toDisplayString($props.badge), 3)) : createCommentVNode("", true)
    ])
  ], 10, _hoisted_1$f)), [
    [_directive_ripple]
  ]);
}
script$f.render = render$f;
var script$e = {
  name: "InputText",
  emits: ["update:modelValue"],
  props: {
    modelValue: null
  },
  methods: {
    onInput(event2) {
      this.$emit("update:modelValue", event2.target.value);
    }
  },
  computed: {
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    }
  }
};
const _hoisted_1$e = ["value"];
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    class: normalizeClass(["p-inputtext p-component", { "p-filled": $options.filled }]),
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args))
  }, null, 42, _hoisted_1$e);
}
script$e.render = render$e;
var script$d = {
  name: "InputNumber",
  emits: ["update:modelValue", "input", "focus", "blur"],
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    format: {
      type: Boolean,
      default: true
    },
    showButtons: {
      type: Boolean,
      default: false
    },
    buttonLayout: {
      type: String,
      default: "stacked"
    },
    incrementButtonClass: {
      type: String,
      default: null
    },
    decrementButtonClass: {
      type: String,
      default: null
    },
    incrementButtonIcon: {
      type: String,
      default: "pi pi-angle-up"
    },
    decrementButtonIcon: {
      type: String,
      default: "pi pi-angle-down"
    },
    locale: {
      type: String,
      default: void 0
    },
    localeMatcher: {
      type: String,
      default: void 0
    },
    mode: {
      type: String,
      default: "decimal"
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    currency: {
      type: String,
      default: void 0
    },
    currencyDisplay: {
      type: String,
      default: void 0
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    minFractionDigits: {
      type: Number,
      default: void 0
    },
    maxFractionDigits: {
      type: Number,
      default: void 0
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: 1
    },
    allowEmpty: {
      type: Boolean,
      default: true
    },
    highlightOnFocus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    inputId: {
      type: String,
      default: null
    },
    inputClass: {
      type: String,
      default: null
    },
    inputStyle: {
      type: null,
      default: null
    },
    inputProps: {
      type: null,
      default: null
    },
    incrementButtonProps: {
      type: null,
      default: null
    },
    decrementButtonProps: {
      type: null,
      default: null
    },
    "aria-labelledby": {
      type: String,
      default: null
    },
    "aria-label": {
      type: String,
      default: null
    }
  },
  numberFormat: null,
  _numeral: null,
  _decimal: null,
  _group: null,
  _minusSign: null,
  _currency: null,
  _suffix: null,
  _prefix: null,
  _index: null,
  groupChar: "",
  isSpecialChar: null,
  prefixChar: null,
  suffixChar: null,
  timer: null,
  data() {
    return {
      d_modelValue: this.modelValue,
      focused: false
    };
  },
  watch: {
    modelValue(newValue) {
      this.d_modelValue = newValue;
    },
    locale(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    localeMatcher(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    mode(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    currency(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    currencyDisplay(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    useGrouping(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    minFractionDigits(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    maxFractionDigits(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    suffix(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    prefix(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    }
  },
  created() {
    this.constructParser();
  },
  methods: {
    getOptions() {
      return {
        localeMatcher: this.localeMatcher,
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        useGrouping: this.useGrouping,
        minimumFractionDigits: this.minFractionDigits,
        maximumFractionDigits: this.maxFractionDigits
      };
    },
    constructParser() {
      this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
      const numerals = [...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(9876543210)].reverse();
      const index = new Map(numerals.map((d, i) => [d, i]));
      this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
      this._group = this.getGroupingExpression();
      this._minusSign = this.getMinusSignExpression();
      this._currency = this.getCurrencyExpression();
      this._decimal = this.getDecimalExpression();
      this._suffix = this.getSuffixExpression();
      this._prefix = this.getPrefixExpression();
      this._index = (d) => index.get(d);
    },
    updateConstructParser(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.constructParser();
      }
    },
    escapeRegExp(text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    },
    getDecimalExpression() {
      const formatter = new Intl.NumberFormat(this.locale, { ...this.getOptions(), useGrouping: false });
      return new RegExp(`[${formatter.format(1.1).replace(this._currency, "").trim().replace(this._numeral, "")}]`, "g");
    },
    getGroupingExpression() {
      const formatter = new Intl.NumberFormat(this.locale, { useGrouping: true });
      this.groupChar = formatter.format(1e6).trim().replace(this._numeral, "").charAt(0);
      return new RegExp(`[${this.groupChar}]`, "g");
    },
    getMinusSignExpression() {
      const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false });
      return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, "")}]`, "g");
    },
    getCurrencyExpression() {
      if (this.currency) {
        const formatter = new Intl.NumberFormat(this.locale, { style: "currency", currency: this.currency, currencyDisplay: this.currencyDisplay, minimumFractionDigits: 0, maximumFractionDigits: 0 });
        return new RegExp(`[${formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, "")}]`, "g");
      }
      return new RegExp(`[]`, "g");
    },
    getPrefixExpression() {
      if (this.prefix) {
        this.prefixChar = this.prefix;
      } else {
        const formatter = new Intl.NumberFormat(this.locale, { style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay });
        this.prefixChar = formatter.format(1).split("1")[0];
      }
      return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
    },
    getSuffixExpression() {
      if (this.suffix) {
        this.suffixChar = this.suffix;
      } else {
        const formatter = new Intl.NumberFormat(this.locale, { style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay, minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.suffixChar = formatter.format(1).split("1")[1];
      }
      return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
    },
    formatValue(value) {
      if (value != null) {
        if (value === "-") {
          return value;
        }
        if (this.format) {
          let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
          let formattedValue = formatter.format(value);
          if (this.prefix) {
            formattedValue = this.prefix + formattedValue;
          }
          if (this.suffix) {
            formattedValue = formattedValue + this.suffix;
          }
          return formattedValue;
        }
        return value.toString();
      }
      return "";
    },
    parseValue(text) {
      let filteredText = text.replace(this._suffix, "").replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
      if (filteredText) {
        if (filteredText === "-")
          return filteredText;
        let parsedValue = +filteredText;
        return isNaN(parsedValue) ? null : parsedValue;
      }
      return null;
    },
    repeat(event2, interval, dir) {
      if (this.readonly) {
        return;
      }
      let i = interval || 500;
      this.clearTimer();
      this.timer = setTimeout(() => {
        this.repeat(event2, 40, dir);
      }, i);
      this.spin(event2, dir);
    },
    spin(event2, dir) {
      if (this.$refs.input) {
        let step = this.step * dir;
        let currentValue = this.parseValue(this.$refs.input.$el.value) || 0;
        let newValue = this.validateValue(currentValue + step);
        this.updateInput(newValue, null, "spin");
        this.updateModel(event2, newValue);
        this.handleOnInput(event2, currentValue, newValue);
      }
    },
    onUpButtonMouseDown(event2) {
      if (!this.disabled) {
        this.$refs.input.$el.focus();
        this.repeat(event2, null, 1);
        event2.preventDefault();
      }
    },
    onUpButtonMouseUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonMouseLeave() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonKeyUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonKeyDown(event2) {
      if (event2.keyCode === 32 || event2.keyCode === 13) {
        this.repeat(event2, null, 1);
      }
    },
    onDownButtonMouseDown(event2) {
      if (!this.disabled) {
        this.$refs.input.$el.focus();
        this.repeat(event2, null, -1);
        event2.preventDefault();
      }
    },
    onDownButtonMouseUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonMouseLeave() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonKeyUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonKeyDown(event2) {
      if (event2.keyCode === 32 || event2.keyCode === 13) {
        this.repeat(event2, null, -1);
      }
    },
    onUserInput() {
      if (this.isSpecialChar) {
        this.$refs.input.$el.value = this.lastValue;
      }
      this.isSpecialChar = false;
    },
    onInputKeyDown(event2) {
      if (this.readonly) {
        return;
      }
      this.lastValue = event2.target.value;
      if (event2.shiftKey || event2.altKey) {
        this.isSpecialChar = true;
        return;
      }
      let selectionStart = event2.target.selectionStart;
      let selectionEnd = event2.target.selectionEnd;
      let inputValue = event2.target.value;
      let newValueStr = null;
      if (event2.altKey) {
        event2.preventDefault();
      }
      switch (event2.code) {
        case "ArrowUp":
          this.spin(event2, 1);
          event2.preventDefault();
          break;
        case "ArrowDown":
          this.spin(event2, -1);
          event2.preventDefault();
          break;
        case "ArrowLeft":
          if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
            event2.preventDefault();
          }
          break;
        case "ArrowRight":
          if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
            event2.preventDefault();
          }
          break;
        case "Tab":
        case "Enter":
          newValueStr = this.validateValue(this.parseValue(inputValue));
          this.$refs.input.$el.value = this.formatValue(newValueStr);
          this.$refs.input.$el.setAttribute("aria-valuenow", newValueStr);
          this.updateModel(event2, newValueStr);
          break;
        case "Backspace": {
          event2.preventDefault();
          if (selectionStart === selectionEnd) {
            const deleteChar = inputValue.charAt(selectionStart - 1);
            const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue);
            if (this.isNumeralChar(deleteChar)) {
              const decimalLength = this.getDecimalLength(inputValue);
              if (this._group.test(deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
              } else if (this._decimal.test(deleteChar)) {
                this._decimal.lastIndex = 0;
                if (decimalLength) {
                  this.$refs.input.$el.setSelectionRange(selectionStart - 1, selectionStart - 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                }
              } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
                newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
              } else if (decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            }
            this.updateValue(event2, newValueStr, null, "delete-single");
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event2, newValueStr, null, "delete-range");
          }
          break;
        }
        case "Delete":
          event2.preventDefault();
          if (selectionStart === selectionEnd) {
            const deleteChar = inputValue.charAt(selectionStart);
            const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue);
            if (this.isNumeralChar(deleteChar)) {
              const decimalLength = this.getDecimalLength(inputValue);
              if (this._group.test(deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
              } else if (this._decimal.test(deleteChar)) {
                this._decimal.lastIndex = 0;
                if (decimalLength) {
                  this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                }
              } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
                newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
              } else if (decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            }
            this.updateValue(event2, newValueStr, null, "delete-back-single");
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event2, newValueStr, null, "delete-range");
          }
          break;
        case "Home":
          if (this.min) {
            this.updateModel(event2, this.min);
            event2.preventDefault();
          }
          break;
        case "End":
          if (this.max) {
            this.updateModel(event2, this.max);
            event2.preventDefault();
          }
          break;
      }
    },
    onInputKeyPress(event2) {
      if (this.readonly) {
        return;
      }
      event2.preventDefault();
      let code = event2.which || event2.keyCode;
      let char = String.fromCharCode(code);
      const isDecimalSign = this.isDecimalSign(char);
      const isMinusSign = this.isMinusSign(char);
      if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
        this.insert(event2, char, { isDecimalSign, isMinusSign });
      }
    },
    onPaste(event2) {
      event2.preventDefault();
      let data = (event2.clipboardData || window["clipboardData"]).getData("Text");
      if (data) {
        let filteredData = this.parseValue(data);
        if (filteredData != null) {
          this.insert(event2, filteredData.toString());
        }
      }
    },
    allowMinusSign() {
      return this.min === null || this.min < 0;
    },
    isMinusSign(char) {
      if (this._minusSign.test(char) || char === "-") {
        this._minusSign.lastIndex = 0;
        return true;
      }
      return false;
    },
    isDecimalSign(char) {
      if (this._decimal.test(char)) {
        this._decimal.lastIndex = 0;
        return true;
      }
      return false;
    },
    isDecimalMode() {
      return this.mode === "decimal";
    },
    getDecimalCharIndexes(val) {
      let decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      const filteredVal = val.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "");
      const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
      this._decimal.lastIndex = 0;
      return { decimalCharIndex, decimalCharIndexWithoutPrefix };
    },
    getCharIndexes(val) {
      const decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      const minusCharIndex = val.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      const suffixCharIndex = val.search(this._suffix);
      this._suffix.lastIndex = 0;
      const currencyCharIndex = val.search(this._currency);
      this._currency.lastIndex = 0;
      return { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex };
    },
    insert(event2, text, sign = { isDecimalSign: false, isMinusSign: false }) {
      const minusCharIndexOnText = text.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
        return;
      }
      const selectionStart = this.$refs.input.$el.selectionStart;
      const selectionEnd = this.$refs.input.$el.selectionEnd;
      let inputValue = this.$refs.input.$el.value.trim();
      const { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex } = this.getCharIndexes(inputValue);
      let newValueStr;
      if (sign.isMinusSign) {
        if (selectionStart === 0) {
          newValueStr = inputValue;
          if (minusCharIndex === -1 || selectionEnd !== 0) {
            newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
          }
          this.updateValue(event2, newValueStr, text, "insert");
        }
      } else if (sign.isDecimalSign) {
        if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
          this.updateValue(event2, inputValue, text, "insert");
        } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event2, newValueStr, text, "insert");
        } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event2, newValueStr, text, "insert");
        }
      } else {
        const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
        const operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
        if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
          if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
            const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
            newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
            this.updateValue(event2, newValueStr, text, operation);
          }
        } else {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event2, newValueStr, text, operation);
        }
      }
    },
    insertText(value, text, start, end) {
      let textSplit = text === "." ? text : text.split(".");
      if (textSplit.length === 2) {
        const decimalCharIndex = value.slice(start, end).search(this._decimal);
        this._decimal.lastIndex = 0;
        return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
      } else if (end - start === value.length) {
        return this.formatValue(text);
      } else if (start === 0) {
        return text + value.slice(end);
      } else if (end === value.length) {
        return value.slice(0, start) + text;
      } else {
        return value.slice(0, start) + text + value.slice(end);
      }
    },
    deleteRange(value, start, end) {
      let newValueStr;
      if (end - start === value.length)
        newValueStr = "";
      else if (start === 0)
        newValueStr = value.slice(end);
      else if (end === value.length)
        newValueStr = value.slice(0, start);
      else
        newValueStr = value.slice(0, start) + value.slice(end);
      return newValueStr;
    },
    initCursor() {
      let selectionStart = this.$refs.input.$el.selectionStart;
      let inputValue = this.$refs.input.$el.value;
      let valueLength = inputValue.length;
      let index = null;
      let prefixLength = (this.prefixChar || "").length;
      inputValue = inputValue.replace(this._prefix, "");
      selectionStart = selectionStart - prefixLength;
      let char = inputValue.charAt(selectionStart);
      if (this.isNumeralChar(char)) {
        return selectionStart + prefixLength;
      }
      let i = selectionStart - 1;
      while (i >= 0) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i--;
        }
      }
      if (index !== null) {
        this.$refs.input.$el.setSelectionRange(index + 1, index + 1);
      } else {
        i = selectionStart;
        while (i < valueLength) {
          char = inputValue.charAt(i);
          if (this.isNumeralChar(char)) {
            index = i + prefixLength;
            break;
          } else {
            i++;
          }
        }
        if (index !== null) {
          this.$refs.input.$el.setSelectionRange(index, index);
        }
      }
      return index || 0;
    },
    onInputClick() {
      const currentValue = this.$refs.input.$el.value;
      if (!this.readonly && currentValue !== DomHandler.getSelection()) {
        this.initCursor();
      }
    },
    isNumeralChar(char) {
      if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
        this.resetRegex();
        return true;
      }
      return false;
    },
    resetRegex() {
      this._numeral.lastIndex = 0;
      this._decimal.lastIndex = 0;
      this._group.lastIndex = 0;
      this._minusSign.lastIndex = 0;
    },
    updateValue(event2, valueStr, insertedValueStr, operation) {
      let currentValue = this.$refs.input.$el.value;
      let newValue = null;
      if (valueStr != null) {
        newValue = this.parseValue(valueStr);
        newValue = !newValue && !this.allowEmpty ? 0 : newValue;
        this.updateInput(newValue, insertedValueStr, operation, valueStr);
        this.handleOnInput(event2, currentValue, newValue);
      }
    },
    handleOnInput(event2, currentValue, newValue) {
      if (this.isValueChanged(currentValue, newValue)) {
        this.$emit("input", { originalEvent: event2, value: newValue, formattedValue: currentValue });
      }
    },
    isValueChanged(currentValue, newValue) {
      if (newValue === null && currentValue !== null) {
        return true;
      }
      if (newValue != null) {
        let parsedCurrentValue = typeof currentValue === "string" ? this.parseValue(currentValue) : currentValue;
        return newValue !== parsedCurrentValue;
      }
      return false;
    },
    validateValue(value) {
      if (value === "-" || value == null) {
        return null;
      }
      if (this.min != null && value < this.min) {
        return this.min;
      }
      if (this.max != null && value > this.max) {
        return this.max;
      }
      return value;
    },
    updateInput(value, insertedValueStr, operation, valueStr) {
      insertedValueStr = insertedValueStr || "";
      let inputValue = this.$refs.input.$el.value;
      let newValue = this.formatValue(value);
      let currentLength = inputValue.length;
      if (newValue !== valueStr) {
        newValue = this.concatValues(newValue, valueStr);
      }
      if (currentLength === 0) {
        this.$refs.input.$el.value = newValue;
        this.$refs.input.$el.setSelectionRange(0, 0);
        const index = this.initCursor();
        const selectionEnd = index + insertedValueStr.length;
        this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
      } else {
        let selectionStart = this.$refs.input.$el.selectionStart;
        let selectionEnd = this.$refs.input.$el.selectionEnd;
        this.$refs.input.$el.value = newValue;
        let newLength = newValue.length;
        if (operation === "range-insert") {
          const startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
          const startValueStr = startValue !== null ? startValue.toString() : "";
          const startExpr = startValueStr.split("").join(`(${this.groupChar})?`);
          const sRegex = new RegExp(startExpr, "g");
          sRegex.test(newValue);
          const tExpr = insertedValueStr.split("").join(`(${this.groupChar})?`);
          const tRegex = new RegExp(tExpr, "g");
          tRegex.test(newValue.slice(sRegex.lastIndex));
          selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
        } else if (newLength === currentLength) {
          if (operation === "insert" || operation === "delete-back-single")
            this.$refs.input.$el.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
          else if (operation === "delete-single")
            this.$refs.input.$el.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
          else if (operation === "delete-range" || operation === "spin")
            this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
        } else if (operation === "delete-back-single") {
          let prevChar = inputValue.charAt(selectionEnd - 1);
          let nextChar = inputValue.charAt(selectionEnd);
          let diff = currentLength - newLength;
          let isGroupChar = this._group.test(nextChar);
          if (isGroupChar && diff === 1) {
            selectionEnd += 1;
          } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
            selectionEnd += -1 * diff + 1;
          }
          this._group.lastIndex = 0;
          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
        } else if (inputValue === "-" && operation === "insert") {
          this.$refs.input.$el.setSelectionRange(0, 0);
          const index = this.initCursor();
          const selectionEnd2 = index + insertedValueStr.length + 1;
          this.$refs.input.$el.setSelectionRange(selectionEnd2, selectionEnd2);
        } else {
          selectionEnd = selectionEnd + (newLength - currentLength);
          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
        }
      }
      this.$refs.input.$el.setAttribute("aria-valuenow", value);
    },
    concatValues(val1, val2) {
      if (val1 && val2) {
        let decimalCharIndex = val2.search(this._decimal);
        this._decimal.lastIndex = 0;
        if (this.suffixChar) {
          return val1.replace(this.suffixChar, "").split(this._decimal)[0] + val2.replace(this.suffixChar, "").slice(decimalCharIndex) + this.suffixChar;
        } else {
          return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
        }
      }
      return val1;
    },
    getDecimalLength(value) {
      if (value) {
        const valueSplit = value.split(this._decimal);
        if (valueSplit.length === 2) {
          return valueSplit[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
        }
      }
      return 0;
    },
    updateModel(event2, value) {
      this.d_modelValue = value;
      this.$emit("update:modelValue", value);
    },
    onInputFocus(event2) {
      this.focused = true;
      if (!this.disabled && !this.readonly && this.$refs.input.$el.value !== DomHandler.getSelection() && this.highlightOnFocus) {
        event2.target.select();
      }
      this.$emit("focus", event2);
    },
    onInputBlur(event2) {
      this.focused = false;
      let input = event2.target;
      let newValue = this.validateValue(this.parseValue(input.value));
      this.$emit("blur", { originalEvent: event2, value: input.value });
      input.value = this.formatValue(newValue);
      input.setAttribute("aria-valuenow", newValue);
      this.updateModel(event2, newValue);
    },
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    maxBoundry() {
      return this.d_modelValue >= this.max;
    },
    minBoundry() {
      return this.d_modelValue <= this.min;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-inputnumber p-component p-inputwrapper",
        {
          "p-inputwrapper-filled": this.filled,
          "p-inputwrapper-focus": this.focused,
          "p-inputnumber-buttons-stacked": this.showButtons && this.buttonLayout === "stacked",
          "p-inputnumber-buttons-horizontal": this.showButtons && this.buttonLayout === "horizontal",
          "p-inputnumber-buttons-vertical": this.showButtons && this.buttonLayout === "vertical"
        }
      ];
    },
    upButtonClass() {
      return [
        "p-inputnumber-button p-inputnumber-button-up",
        this.incrementButtonClass,
        {
          "p-disabled": this.showButtons && this.max !== null && this.maxBoundry()
        }
      ];
    },
    downButtonClass() {
      return [
        "p-inputnumber-button p-inputnumber-button-down",
        this.decrementButtonClass,
        {
          "p-disabled": this.showButtons && this.min !== null && this.minBoundry()
        }
      ];
    },
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    upButtonListeners() {
      return {
        mousedown: (event2) => this.onUpButtonMouseDown(event2),
        mouseup: (event2) => this.onUpButtonMouseUp(event2),
        mouseleave: (event2) => this.onUpButtonMouseLeave(event2),
        keydown: (event2) => this.onUpButtonKeyDown(event2),
        keyup: (event2) => this.onUpButtonKeyUp(event2)
      };
    },
    downButtonListeners() {
      return {
        mousedown: (event2) => this.onDownButtonMouseDown(event2),
        mouseup: (event2) => this.onDownButtonMouseUp(event2),
        mouseleave: (event2) => this.onDownButtonMouseLeave(event2),
        keydown: (event2) => this.onDownButtonKeyDown(event2),
        keyup: (event2) => this.onDownButtonKeyUp(event2)
      };
    },
    formattedValue() {
      const val = !this.modelValue && !this.allowEmpty ? 0 : this.modelValue;
      return this.formatValue(val);
    },
    getFormatter() {
      return this.numberFormat;
    }
  },
  components: {
    INInputText: script$e,
    INButton: script$f
  }
};
const _hoisted_1$d = {
  key: 0,
  class: "p-inputnumber-button-group"
};
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_INInputText = resolveComponent("INInputText");
  const _component_INButton = resolveComponent("INButton");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass($options.containerClass)
  }, [
    createVNode(_component_INInputText, mergeProps({
      ref: "input",
      id: $props.inputId,
      class: ["p-inputnumber-input", $props.inputClass],
      role: "spinbutton",
      style: $props.inputStyle,
      value: $options.formattedValue,
      "aria-valuemin": $props.min,
      "aria-valuemax": $props.max,
      "aria-valuenow": $props.modelValue,
      disabled: $props.disabled,
      readonly: $props.readonly,
      placeholder: $props.placeholder,
      "aria-labelledby": _ctx.ariaLabelledby,
      "aria-label": _ctx.ariaLabel,
      onInput: $options.onUserInput,
      onKeydown: $options.onInputKeyDown,
      onKeypress: $options.onInputKeyPress,
      onPaste: $options.onPaste,
      onClick: $options.onInputClick,
      onFocus: $options.onInputFocus,
      onBlur: $options.onInputBlur
    }, $props.inputProps), null, 16, ["id", "class", "style", "value", "aria-valuemin", "aria-valuemax", "aria-valuenow", "disabled", "readonly", "placeholder", "aria-labelledby", "aria-label", "onInput", "onKeydown", "onKeypress", "onPaste", "onClick", "onFocus", "onBlur"]),
    $props.showButtons && $props.buttonLayout === "stacked" ? (openBlock(), createElementBlock("span", _hoisted_1$d, [
      createVNode(_component_INButton, mergeProps({
        class: $options.upButtonClass,
        icon: $props.incrementButtonIcon
      }, toHandlers($options.upButtonListeners), {
        disabled: $props.disabled,
        tabindex: -1,
        "aria-hidden": "true"
      }, $props.incrementButtonProps), null, 16, ["class", "icon", "disabled"]),
      createVNode(_component_INButton, mergeProps({
        class: $options.downButtonClass,
        icon: $props.decrementButtonIcon
      }, toHandlers($options.downButtonListeners), {
        disabled: $props.disabled,
        tabindex: -1,
        "aria-hidden": "true"
      }, $props.decrementButtonProps), null, 16, ["class", "icon", "disabled"])
    ])) : createCommentVNode("", true),
    $props.showButtons && $props.buttonLayout !== "stacked" ? (openBlock(), createBlock(_component_INButton, mergeProps({
      key: 1,
      class: $options.upButtonClass,
      icon: $props.incrementButtonIcon
    }, toHandlers($options.upButtonListeners), {
      disabled: $props.disabled,
      tabindex: -1,
      "aria-hidden": "true"
    }, $props.incrementButtonProps), null, 16, ["class", "icon", "disabled"])) : createCommentVNode("", true),
    $props.showButtons && $props.buttonLayout !== "stacked" ? (openBlock(), createBlock(_component_INButton, mergeProps({
      key: 2,
      class: $options.downButtonClass,
      icon: $props.decrementButtonIcon
    }, toHandlers($options.downButtonListeners), {
      disabled: $props.disabled,
      tabindex: -1,
      "aria-hidden": "true"
    }, $props.decrementButtonProps), null, 16, ["class", "icon", "disabled"])) : createCommentVNode("", true)
  ], 2);
}
function styleInject$3(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$3 = "\n.p-inputnumber {\n    display: inline-flex;\n}\n.p-inputnumber-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 auto;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {\n    display: none;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    padding: 0;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-input {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n    padding: 0;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group {\n    display: flex;\n    flex-direction: column;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {\n    flex: 1 1 auto;\n}\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {\n    order: 3;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.p-inputnumber-buttons-horizontal .p-inputnumber-input {\n    order: 2;\n    border-radius: 0;\n}\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {\n    order: 1;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.p-inputnumber-buttons-vertical {\n    flex-direction: column;\n}\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {\n    order: 1;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    width: 100%;\n}\n.p-inputnumber-buttons-vertical .p-inputnumber-input {\n    order: 2;\n    border-radius: 0;\n    text-align: center;\n}\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {\n    order: 3;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    width: 100%;\n}\n.p-inputnumber-input {\n    flex: 1 1 auto;\n}\n.p-fluid .p-inputnumber {\n    width: 100%;\n}\n.p-fluid .p-inputnumber .p-inputnumber-input {\n    width: 1%;\n}\n.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {\n    width: 100%;\n}\n";
styleInject$3(css_248z$3);
script$d.render = render$d;
var script$9$1 = {
  name: "CurrentPageReport",
  props: {
    pageCount: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 0
    },
    first: {
      type: Number,
      default: 0
    },
    rows: {
      type: Number,
      default: 0
    },
    totalRecords: {
      type: Number,
      default: 0
    },
    template: {
      type: String,
      default: "({currentPage} of {totalPages})"
    }
  },
  computed: {
    text() {
      let text = this.template.replace("{currentPage}", this.currentPage).replace("{totalPages}", this.pageCount).replace("{first}", this.pageCount > 0 ? this.first + 1 : 0).replace("{last}", Math.min(this.first + this.rows, this.totalRecords)).replace("{rows}", this.rows).replace("{totalRecords}", this.totalRecords);
      return text;
    }
  }
};
const _hoisted_1$6$1 = { class: "p-paginator-current" };
function render$9$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", _hoisted_1$6$1, toDisplayString($options.text), 1);
}
script$9$1.render = render$9$1;
var script$8$1 = {
  name: "FirstPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-first p-paginator-element p-link",
        {
          "p-disabled": this.$attrs.disabled
        }
      ];
    }
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$5$1 = /* @__PURE__ */ createElementVNode("span", { class: "p-paginator-icon pi pi-angle-double-left" }, null, -1);
const _hoisted_2$5$1 = [
  _hoisted_1$5$1
];
function render$8$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", {
    class: normalizeClass($options.containerClass),
    type: "button"
  }, _hoisted_2$5$1, 2)), [
    [_directive_ripple]
  ]);
}
script$8$1.render = render$8$1;
var script$7$1 = {
  name: "JumpToPageDropdown",
  emits: ["page-change"],
  props: {
    page: Number,
    pageCount: Number,
    disabled: Boolean
  },
  methods: {
    onChange(value) {
      this.$emit("page-change", value);
    }
  },
  computed: {
    pageOptions() {
      let opts = [];
      for (let i = 0; i < this.pageCount; i++) {
        opts.push({ label: String(i + 1), value: i });
      }
      return opts;
    }
  },
  components: {
    JTPDropdown: script$g
  }
};
function render$7$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_JTPDropdown = resolveComponent("JTPDropdown");
  return openBlock(), createBlock(_component_JTPDropdown, {
    modelValue: $props.page,
    options: $options.pageOptions,
    optionLabel: "label",
    optionValue: "value",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.onChange($event)),
    class: "p-paginator-page-options",
    disabled: $props.disabled
  }, null, 8, ["modelValue", "options", "disabled"]);
}
script$7$1.render = render$7$1;
var script$6$1 = {
  name: "JumpToPageInput",
  inheritAttrs: false,
  emits: ["page-change"],
  props: {
    page: Number,
    pageCount: Number,
    disabled: Boolean
  },
  data() {
    return {
      d_page: this.page
    };
  },
  watch: {
    page(newValue) {
      this.d_page = newValue;
    }
  },
  methods: {
    onChange(value) {
      if (value !== this.page) {
        this.d_page = value;
        this.$emit("page-change", value - 1);
      }
    }
  },
  computed: {
    inputArialabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.jumpToPageInputLabel : void 0;
    }
  },
  components: {
    JTPInput: script$d
  }
};
function render$6$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_JTPInput = resolveComponent("JTPInput");
  return openBlock(), createBlock(_component_JTPInput, {
    ref: "jtpInput",
    modelValue: $data.d_page,
    class: "p-paginator-page-input",
    "aria-label": $options.inputArialabel,
    disabled: $props.disabled,
    "onUpdate:modelValue": $options.onChange
  }, null, 8, ["modelValue", "aria-label", "disabled", "onUpdate:modelValue"]);
}
script$6$1.render = render$6$1;
var script$5$1 = {
  name: "LastPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-last p-paginator-element p-link",
        {
          "p-disabled": this.$attrs.disabled
        }
      ];
    }
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$4$1 = /* @__PURE__ */ createElementVNode("span", { class: "p-paginator-icon pi pi-angle-double-right" }, null, -1);
const _hoisted_2$4$1 = [
  _hoisted_1$4$1
];
function render$5$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", {
    class: normalizeClass($options.containerClass),
    type: "button"
  }, _hoisted_2$4$1, 2)), [
    [_directive_ripple]
  ]);
}
script$5$1.render = render$5$1;
var script$4$1 = {
  name: "NextPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-next p-paginator-element p-link",
        {
          "p-disabled": this.$attrs.disabled
        }
      ];
    }
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$3$1 = /* @__PURE__ */ createElementVNode("span", { class: "p-paginator-icon pi pi-angle-right" }, null, -1);
const _hoisted_2$3$1 = [
  _hoisted_1$3$1
];
function render$4$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", {
    class: normalizeClass($options.containerClass),
    type: "button"
  }, _hoisted_2$3$1, 2)), [
    [_directive_ripple]
  ]);
}
script$4$1.render = render$4$1;
var script$3$1 = {
  name: "PageLinks",
  inheritAttrs: false,
  emits: ["click"],
  props: {
    value: Array,
    page: Number
  },
  methods: {
    onPageLinkClick(event2, pageLink) {
      this.$emit("click", {
        originalEvent: event2,
        value: pageLink
      });
    },
    ariaPageLabel(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
    }
  },
  computed: {},
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$2$1 = { class: "p-paginator-pages" };
const _hoisted_2$2$1 = ["aria-label", "aria-current", "onClick"];
function render$3$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("span", _hoisted_1$2$1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.value, (pageLink) => {
      return withDirectives((openBlock(), createElementBlock("button", {
        key: pageLink,
        class: normalizeClass(["p-paginator-page p-paginator-element p-link", { "p-highlight": pageLink - 1 === $props.page }]),
        type: "button",
        "aria-label": $options.ariaPageLabel(pageLink),
        "aria-current": pageLink - 1 === $props.page ? "page" : void 0,
        onClick: ($event) => $options.onPageLinkClick($event, pageLink)
      }, [
        createTextVNode(toDisplayString(pageLink), 1)
      ], 10, _hoisted_2$2$1)), [
        [_directive_ripple]
      ]);
    }), 128))
  ]);
}
script$3$1.render = render$3$1;
var script$2$1 = {
  name: "PrevPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-prev p-paginator-element p-link",
        {
          "p-disabled": this.$attrs.disabled
        }
      ];
    }
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$1$1 = /* @__PURE__ */ createElementVNode("span", { class: "p-paginator-icon pi pi-angle-left" }, null, -1);
const _hoisted_2$1$1 = [
  _hoisted_1$1$1
];
function render$2$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", {
    class: normalizeClass($options.containerClass),
    type: "button"
  }, _hoisted_2$1$1, 2)), [
    [_directive_ripple]
  ]);
}
script$2$1.render = render$2$1;
var script$1$2 = {
  name: "RowsPerPageDropdown",
  emits: ["rows-change"],
  props: {
    options: Array,
    rows: Number,
    disabled: Boolean
  },
  methods: {
    onChange(value) {
      this.$emit("rows-change", value);
    }
  },
  computed: {
    rowsOptions() {
      let opts = [];
      if (this.options) {
        for (let i = 0; i < this.options.length; i++) {
          opts.push({ label: String(this.options[i]), value: this.options[i] });
        }
      }
      return opts;
    }
  },
  components: {
    RPPDropdown: script$g
  }
};
function render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RPPDropdown = resolveComponent("RPPDropdown");
  return openBlock(), createBlock(_component_RPPDropdown, {
    modelValue: $props.rows,
    options: $options.rowsOptions,
    optionLabel: "label",
    optionValue: "value",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.onChange($event)),
    class: "p-paginator-rpp-options",
    disabled: $props.disabled
  }, null, 8, ["modelValue", "options", "disabled"]);
}
script$1$2.render = render$1$1;
var script$c = {
  name: "Paginator",
  emits: ["update:first", "update:rows", "page"],
  props: {
    totalRecords: {
      type: Number,
      default: 0
    },
    rows: {
      type: Number,
      default: 0
    },
    first: {
      type: Number,
      default: 0
    },
    pageLinkSize: {
      type: Number,
      default: 5
    },
    rowsPerPageOptions: {
      type: Array,
      default: null
    },
    template: {
      type: [Object, String],
      default: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    },
    currentPageReportTemplate: {
      type: null,
      default: "({currentPage} of {totalPages})"
    },
    alwaysShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      d_first: this.first,
      d_rows: this.rows
    };
  },
  watch: {
    first(newValue) {
      this.d_first = newValue;
    },
    rows(newValue) {
      this.d_rows = newValue;
    },
    totalRecords(newValue) {
      if (this.page > 0 && newValue && this.d_first >= newValue) {
        this.changePage(this.pageCount - 1);
      }
    }
  },
  mounted() {
    this.setPaginatorAttribute();
    this.createStyle();
  },
  methods: {
    changePage(p) {
      const pc = this.pageCount;
      if (p >= 0 && p < pc) {
        this.d_first = this.d_rows * p;
        const state = {
          page: p,
          first: this.d_first,
          rows: this.d_rows,
          pageCount: pc
        };
        this.$emit("update:first", this.d_first);
        this.$emit("update:rows", this.d_rows);
        this.$emit("page", state);
      }
    },
    changePageToFirst(event2) {
      if (!this.isFirstPage) {
        this.changePage(0);
      }
      event2.preventDefault();
    },
    changePageToPrev(event2) {
      this.changePage(this.page - 1);
      event2.preventDefault();
    },
    changePageLink(event2) {
      this.changePage(event2.value - 1);
      event2.originalEvent.preventDefault();
    },
    changePageToNext(event2) {
      this.changePage(this.page + 1);
      event2.preventDefault();
    },
    changePageToLast(event2) {
      if (!this.isLastPage) {
        this.changePage(this.pageCount - 1);
      }
      event2.preventDefault();
    },
    onRowChange(value) {
      this.d_rows = value;
      this.changePage(this.page);
    },
    createStyle() {
      if (this.hasBreakpoints()) {
        this.styleElement = document.createElement("style");
        this.styleElement.type = "text/css";
        document.head.appendChild(this.styleElement);
        let innerHTML = "";
        const keys = Object.keys(this.template);
        const sortedBreakpoints = {};
        keys.sort((a, b) => parseInt(a) - parseInt(b)).forEach((key) => {
          sortedBreakpoints[key] = this.template[key];
        });
        for (const [index, [key]] of Object.entries(Object.entries(sortedBreakpoints))) {
          const minValue = Object.entries(sortedBreakpoints)[index - 1] ? `and (min-width:${Object.keys(sortedBreakpoints)[index - 1]})` : "";
          if (key === "default") {
            innerHTML += `
                            @media screen ${minValue} {
                                .paginator[${this.attributeSelector}],
                                .p-paginator-default{
                                    display: flex !important;
                                }
                            }
                        `;
          } else {
            innerHTML += `
                        .paginator[${this.attributeSelector}], .p-paginator-${key} {
                                display: none !important;
                            }
                        @media screen ${minValue} and (max-width: ${key}) {
                            .paginator[${this.attributeSelector}], .p-paginator-${key} {
                                display: flex !important;
                            }
                            .paginator[${this.attributeSelector}],
                            .p-paginator-default{
                                display: none !important;
                            }
                        }
                    `;
          }
        }
        this.styleElement.innerHTML = innerHTML;
      }
    },
    hasBreakpoints() {
      return typeof this.template === "object";
    },
    getPaginatorClasses(key) {
      return [
        {
          "p-paginator-default": !this.hasBreakpoints(),
          [`p-paginator-${key}`]: this.hasBreakpoints()
        }
      ];
    },
    setPaginatorAttribute() {
      if (this.$refs.paginator && this.$refs.paginator.length >= 0) {
        [...this.$refs.paginator].forEach((el) => {
          el.setAttribute(this.attributeSelector, "");
        });
      }
    },
    getAriaLabel(labelType) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria[labelType] : void 0;
    }
  },
  computed: {
    templateItems() {
      let keys = {};
      if (this.hasBreakpoints()) {
        keys = this.template;
        if (!keys.default) {
          keys.default = "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown";
        }
        for (const item in keys) {
          keys[item] = this.template[item].split(" ").map((value) => {
            return value.trim();
          });
        }
        return keys;
      }
      keys["default"] = this.template.split(" ").map((value) => {
        return value.trim();
      });
      return keys;
    },
    page() {
      return Math.floor(this.d_first / this.d_rows);
    },
    pageCount() {
      return Math.ceil(this.totalRecords / this.d_rows);
    },
    isFirstPage() {
      return this.page === 0;
    },
    isLastPage() {
      return this.page === this.pageCount - 1;
    },
    calculatePageLinkBoundaries() {
      const numberOfPages = this.pageCount;
      const visiblePages = Math.min(this.pageLinkSize, numberOfPages);
      let start = Math.max(0, Math.ceil(this.page - visiblePages / 2));
      let end = Math.min(numberOfPages - 1, start + visiblePages - 1);
      const delta = this.pageLinkSize - (end - start + 1);
      start = Math.max(0, start - delta);
      return [start, end];
    },
    pageLinks() {
      let pageLinks = [];
      let boundaries = this.calculatePageLinkBoundaries;
      let start = boundaries[0];
      let end = boundaries[1];
      for (var i = start; i <= end; i++) {
        pageLinks.push(i + 1);
      }
      return pageLinks;
    },
    currentState() {
      return {
        page: this.page,
        first: this.d_first,
        rows: this.d_rows
      };
    },
    empty() {
      return this.pageCount === 0;
    },
    currentPage() {
      return this.pageCount > 0 ? this.page + 1 : 0;
    },
    attributeSelector() {
      return UniqueComponentId();
    }
  },
  components: {
    CurrentPageReport: script$9$1,
    FirstPageLink: script$8$1,
    LastPageLink: script$5$1,
    NextPageLink: script$4$1,
    PageLinks: script$3$1,
    PrevPageLink: script$2$1,
    RowsPerPageDropdown: script$1$2,
    JumpToPageDropdown: script$7$1,
    JumpToPageInput: script$6$1
  }
};
const _hoisted_1$c = { key: 0 };
const _hoisted_2$b = {
  key: 0,
  class: "p-paginator-left-content"
};
const _hoisted_3$7 = {
  key: 1,
  class: "p-paginator-right-content"
};
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FirstPageLink = resolveComponent("FirstPageLink");
  const _component_PrevPageLink = resolveComponent("PrevPageLink");
  const _component_NextPageLink = resolveComponent("NextPageLink");
  const _component_LastPageLink = resolveComponent("LastPageLink");
  const _component_PageLinks = resolveComponent("PageLinks");
  const _component_CurrentPageReport = resolveComponent("CurrentPageReport");
  const _component_RowsPerPageDropdown = resolveComponent("RowsPerPageDropdown");
  const _component_JumpToPageDropdown = resolveComponent("JumpToPageDropdown");
  const _component_JumpToPageInput = resolveComponent("JumpToPageInput");
  return ($props.alwaysShow ? true : $options.pageLinks && $options.pageLinks.length > 1) ? (openBlock(), createElementBlock("nav", _hoisted_1$c, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.templateItems, (value, key) => {
      return openBlock(), createElementBlock("div", {
        key,
        ref_for: true,
        ref: "paginator",
        class: normalizeClass(["p-paginator p-component", $options.getPaginatorClasses(key)])
      }, [
        _ctx.$slots.start ? (openBlock(), createElementBlock("div", _hoisted_2$b, [
          renderSlot(_ctx.$slots, "start", { state: $options.currentState })
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(value, (item) => {
          return openBlock(), createElementBlock(Fragment, { key: item }, [
            item === "FirstPageLink" ? (openBlock(), createBlock(_component_FirstPageLink, {
              key: 0,
              "aria-label": $options.getAriaLabel("firstPageLabel"),
              onClick: _cache[0] || (_cache[0] = ($event) => $options.changePageToFirst($event)),
              disabled: $options.isFirstPage || $options.empty
            }, null, 8, ["aria-label", "disabled"])) : item === "PrevPageLink" ? (openBlock(), createBlock(_component_PrevPageLink, {
              key: 1,
              "aria-label": $options.getAriaLabel("prevPageLabel"),
              onClick: _cache[1] || (_cache[1] = ($event) => $options.changePageToPrev($event)),
              disabled: $options.isFirstPage || $options.empty
            }, null, 8, ["aria-label", "disabled"])) : item === "NextPageLink" ? (openBlock(), createBlock(_component_NextPageLink, {
              key: 2,
              "aria-label": $options.getAriaLabel("nextPageLabel"),
              onClick: _cache[2] || (_cache[2] = ($event) => $options.changePageToNext($event)),
              disabled: $options.isLastPage || $options.empty
            }, null, 8, ["aria-label", "disabled"])) : item === "LastPageLink" ? (openBlock(), createBlock(_component_LastPageLink, {
              key: 3,
              "aria-label": $options.getAriaLabel("lastPageLabel"),
              onClick: _cache[3] || (_cache[3] = ($event) => $options.changePageToLast($event)),
              disabled: $options.isLastPage || $options.empty
            }, null, 8, ["aria-label", "disabled"])) : item === "PageLinks" ? (openBlock(), createBlock(_component_PageLinks, {
              key: 4,
              "aria-label": $options.getAriaLabel("pageLabel"),
              value: $options.pageLinks,
              page: $options.page,
              onClick: _cache[4] || (_cache[4] = ($event) => $options.changePageLink($event))
            }, null, 8, ["aria-label", "value", "page"])) : item === "CurrentPageReport" ? (openBlock(), createBlock(_component_CurrentPageReport, {
              key: 5,
              "aria-live": "polite",
              template: $props.currentPageReportTemplate,
              currentPage: $options.currentPage,
              page: $options.page,
              pageCount: $options.pageCount,
              first: $data.d_first,
              rows: $data.d_rows,
              totalRecords: $props.totalRecords
            }, null, 8, ["template", "currentPage", "page", "pageCount", "first", "rows", "totalRecords"])) : item === "RowsPerPageDropdown" && $props.rowsPerPageOptions ? (openBlock(), createBlock(_component_RowsPerPageDropdown, {
              key: 6,
              "aria-label": $options.getAriaLabel("rowsPerPageLabel"),
              rows: $data.d_rows,
              options: $props.rowsPerPageOptions,
              onRowsChange: _cache[5] || (_cache[5] = ($event) => $options.onRowChange($event)),
              disabled: $options.empty
            }, null, 8, ["aria-label", "rows", "options", "disabled"])) : item === "JumpToPageDropdown" ? (openBlock(), createBlock(_component_JumpToPageDropdown, {
              key: 7,
              "aria-label": $options.getAriaLabel("jumpToPageDropdownLabel"),
              page: $options.page,
              pageCount: $options.pageCount,
              onPageChange: _cache[6] || (_cache[6] = ($event) => $options.changePage($event)),
              disabled: $options.empty
            }, null, 8, ["aria-label", "page", "pageCount", "disabled"])) : item === "JumpToPageInput" ? (openBlock(), createBlock(_component_JumpToPageInput, {
              key: 8,
              page: $options.currentPage,
              onPageChange: _cache[7] || (_cache[7] = ($event) => $options.changePage($event)),
              disabled: $options.empty
            }, null, 8, ["page", "disabled"])) : createCommentVNode("", true)
          ], 64);
        }), 128)),
        _ctx.$slots.end ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
          renderSlot(_ctx.$slots, "end", { state: $options.currentState })
        ])) : createCommentVNode("", true)
      ], 2);
    }), 128))
  ])) : createCommentVNode("", true);
}
function styleInject$2(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$2 = "\n.p-paginator-default {\n    display: flex;\n}\n.p-paginator {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n.p-paginator-left-content {\n    margin-right: auto;\n}\n.p-paginator-right-content {\n    margin-left: auto;\n}\n.p-paginator-page,\n.p-paginator-next,\n.p-paginator-last,\n.p-paginator-first,\n.p-paginator-prev,\n.p-paginator-current {\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    line-height: 1;\n    user-select: none;\n    overflow: hidden;\n    position: relative;\n}\n.p-paginator-element:focus {\n    z-index: 1;\n    position: relative;\n}\n";
styleInject$2(css_248z$2);
script$c.render = render$c;
function bind(el, binding) {
  const { onFocusIn, onFocusOut } = binding.value || {};
  el.$_pfocustrap_mutationobserver = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
      if (mutation.type === "childList" && !el.contains(document.activeElement)) {
        const findNextFocusableElement = (el2) => {
          const focusableElement = DomHandler.isFocusableElement(el2) ? el2 : DomHandler.getFirstFocusableElement(el2);
          return ObjectUtils.isNotEmpty(focusableElement) ? focusableElement : findNextFocusableElement(el2.nextSibling);
        };
        DomHandler.focus(findNextFocusableElement(mutation.nextSibling));
      }
    });
  });
  el.$_pfocustrap_mutationobserver.disconnect();
  el.$_pfocustrap_mutationobserver.observe(el, {
    childList: true
  });
  el.$_pfocustrap_focusinlistener = (event2) => onFocusIn && onFocusIn(event2);
  el.$_pfocustrap_focusoutlistener = (event2) => onFocusOut && onFocusOut(event2);
  el.addEventListener("focusin", el.$_pfocustrap_focusinlistener);
  el.addEventListener("focusout", el.$_pfocustrap_focusoutlistener);
}
function unbind(el) {
  el.$_pfocustrap_mutationobserver && el.$_pfocustrap_mutationobserver.disconnect();
  el.$_pfocustrap_focusinlistener && el.removeEventListener("focusin", el.$_pfocustrap_focusinlistener) && (el.$_pfocustrap_focusinlistener = null);
  el.$_pfocustrap_focusoutlistener && el.removeEventListener("focusout", el.$_pfocustrap_focusoutlistener) && (el.$_pfocustrap_focusoutlistener = null);
}
function autoFocus(el, binding) {
  const { autoFocusSelector = "", firstFocusableSelector = "", autoFocus: autoFocus2 = false } = binding.value || {};
  let focusableElement = DomHandler.getFirstFocusableElement(el, `[autofocus]:not(.p-hidden-focusable)${autoFocusSelector}`);
  autoFocus2 && !focusableElement && (focusableElement = DomHandler.getFirstFocusableElement(el, `:not(.p-hidden-focusable)${firstFocusableSelector}`));
  DomHandler.focus(focusableElement);
}
function onFirstHiddenElementFocus(event2) {
  const { currentTarget, relatedTarget } = event2;
  const focusableElement = relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, `:not(.p-hidden-focusable)${currentTarget.$_pfocustrap_focusableselector}`) : currentTarget.$_pfocustrap_lasthiddenfocusableelement;
  DomHandler.focus(focusableElement);
}
function onLastHiddenElementFocus(event2) {
  const { currentTarget, relatedTarget } = event2;
  const focusableElement = relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement ? DomHandler.getLastFocusableElement(currentTarget.parentElement, `:not(.p-hidden-focusable)${currentTarget.$_pfocustrap_focusableselector}`) : currentTarget.$_pfocustrap_firsthiddenfocusableelement;
  DomHandler.focus(focusableElement);
}
function createHiddenFocusableElements(el, binding) {
  const { tabIndex = 0, firstFocusableSelector = "", lastFocusableSelector = "" } = binding.value || {};
  const createFocusableElement = (onFocus) => {
    const element = document.createElement("span");
    element.classList = "p-hidden-accessible p-hidden-focusable";
    element.tabIndex = tabIndex;
    element.setAttribute("aria-hidden", "true");
    element.setAttribute("role", "presentation");
    element.addEventListener("focus", onFocus);
    return element;
  };
  const firstFocusableElement = createFocusableElement(onFirstHiddenElementFocus);
  const lastFocusableElement = createFocusableElement(onLastHiddenElementFocus);
  firstFocusableElement.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement;
  firstFocusableElement.$_pfocustrap_focusableselector = firstFocusableSelector;
  lastFocusableElement.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement;
  lastFocusableElement.$_pfocustrap_focusableselector = lastFocusableSelector;
  el.prepend(firstFocusableElement);
  el.append(lastFocusableElement);
}
const FocusTrap = {
  mounted(el, binding) {
    const { disabled } = binding.value || {};
    if (!disabled) {
      createHiddenFocusableElements(el, binding);
      bind(el, binding);
      autoFocus(el, binding);
    }
  },
  updated(el, binding) {
    const { disabled } = binding.value || {};
    disabled && unbind(el);
  },
  unmounted(el) {
    unbind(el);
  }
};
var script$a = {
  name: "RowCheckbox",
  emits: ["change"],
  props: {
    value: null,
    checked: null
  },
  data() {
    return {
      focused: false
    };
  },
  methods: {
    onClick(event2) {
      if (!this.$attrs.disabled) {
        this.$emit("change", {
          originalEvent: event2,
          data: this.value
        });
        DomHandler.focus(this.$refs.input);
      }
      event2.preventDefault();
    },
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
    onKeydown(event2) {
      switch (event2.code) {
        case "Space": {
          this.onClick(event2);
          break;
        }
      }
    }
  },
  computed: {
    checkboxAriaLabel() {
      return this.$primevue.config.locale.aria ? this.checked ? this.$primevue.config.locale.aria.selectRow : this.$primevue.config.locale.aria.unselectRow : void 0;
    }
  }
};
const _hoisted_1$a = { class: "p-hidden-accessible" };
const _hoisted_2$9 = ["checked", "disabled", "tabindex", "aria-label"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["p-checkbox p-component", { "p-checkbox-focused": $data.focused }]),
    onClick: _cache[3] || (_cache[3] = (...args) => $options.onClick && $options.onClick(...args))
  }, [
    createElementVNode("div", _hoisted_1$a, [
      createElementVNode("input", {
        ref: "input",
        type: "checkbox",
        checked: $props.checked,
        disabled: _ctx.$attrs.disabled,
        tabindex: _ctx.$attrs.disabled ? null : "0",
        "aria-label": $options.checkboxAriaLabel,
        onFocus: _cache[0] || (_cache[0] = ($event) => $options.onFocus($event)),
        onBlur: _cache[1] || (_cache[1] = ($event) => $options.onBlur($event)),
        onKeydown: _cache[2] || (_cache[2] = (...args) => $options.onKeydown && $options.onKeydown(...args))
      }, null, 40, _hoisted_2$9)
    ]),
    createElementVNode("div", {
      ref: "box",
      class: normalizeClass(["p-checkbox-box p-component", { "p-highlight": $props.checked, "p-disabled": _ctx.$attrs.disabled, "p-focus": $data.focused }])
    }, [
      createElementVNode("span", {
        class: normalizeClass(["p-checkbox-icon", { "pi pi-check": $props.checked }])
      }, null, 2)
    ], 2)
  ], 2);
}
script$a.render = render$a;
var script$9 = {
  name: "RowRadioButton",
  inheritAttrs: false,
  emits: ["change"],
  props: {
    value: null,
    checked: null,
    name: null
  },
  data() {
    return {
      focused: false
    };
  },
  methods: {
    onClick(event2) {
      if (!this.disabled) {
        if (!this.checked) {
          this.$emit("change", {
            originalEvent: event2,
            data: this.value
          });
          DomHandler.focus(this.$refs.input);
        }
      }
    },
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    }
  }
};
const _hoisted_1$9 = { class: "p-hidden-accessible" };
const _hoisted_2$8 = ["checked", "disabled", "name"];
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("div", { class: "p-radiobutton-icon" }, null, -1);
const _hoisted_4$5 = [
  _hoisted_3$6
];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["p-radiobutton p-component", { "p-radiobutton-focused": $data.focused }]),
    onClick: _cache[3] || (_cache[3] = (...args) => $options.onClick && $options.onClick(...args))
  }, [
    createElementVNode("div", _hoisted_1$9, [
      createElementVNode("input", {
        ref: "input",
        type: "radio",
        checked: $props.checked,
        disabled: _ctx.$attrs.disabled,
        name: $props.name,
        tabindex: "0",
        onFocus: _cache[0] || (_cache[0] = ($event) => $options.onFocus($event)),
        onBlur: _cache[1] || (_cache[1] = ($event) => $options.onBlur($event)),
        onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers((...args) => $options.onClick && $options.onClick(...args), ["prevent"]), ["space"]))
      }, null, 40, _hoisted_2$8)
    ]),
    createElementVNode("div", {
      ref: "box",
      class: normalizeClass(["p-radiobutton-box p-component", { "p-highlight": $props.checked, "p-disabled": _ctx.$attrs.disabled, "p-focus": $data.focused }])
    }, _hoisted_4$5, 2)
  ], 2);
}
script$9.render = render$9;
var script$8 = {
  name: "BodyCell",
  emits: ["cell-edit-init", "cell-edit-complete", "cell-edit-cancel", "row-edit-init", "row-edit-save", "row-edit-cancel", "row-toggle", "radio-change", "checkbox-change", "editing-meta-change"],
  props: {
    rowData: {
      type: Object,
      default: null
    },
    column: {
      type: Object,
      default: null
    },
    frozenRow: {
      type: Boolean,
      default: false
    },
    rowIndex: {
      type: Number,
      default: null
    },
    index: {
      type: Number,
      default: null
    },
    rowTogglerIcon: {
      type: Array,
      default: null
    },
    selected: {
      type: Boolean,
      default: false
    },
    editing: {
      type: Boolean,
      default: false
    },
    editingMeta: {
      type: Object,
      default: null
    },
    editMode: {
      type: String,
      default: null
    },
    responsiveLayout: {
      type: String,
      default: "stack"
    },
    virtualScrollerContentProps: {
      type: Object,
      default: null
    },
    ariaControls: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  },
  documentEditListener: null,
  selfClick: false,
  overlayEventListener: null,
  data() {
    return {
      d_editing: this.editing,
      styleObject: {},
      isRowExpanded: false
    };
  },
  watch: {
    editing(newValue) {
      this.d_editing = newValue;
    },
    "$data.d_editing": function(newValue) {
      this.$emit("editing-meta-change", { data: this.rowData, field: this.field || `field_${this.index}`, index: this.rowIndex, editing: newValue });
    }
  },
  mounted() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  updated() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
    if (this.d_editing && (this.editMode === "cell" || this.editMode === "row" && this.columnProp("rowEditor"))) {
      const focusableEl = DomHandler.getFirstFocusableElement(this.$el);
      focusableEl && focusableEl.focus();
    }
  },
  beforeUnmount() {
    if (this.overlayEventListener) {
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
    }
  },
  methods: {
    columnProp(prop) {
      return ObjectUtils.getVNodeProp(this.column, prop);
    },
    resolveFieldData() {
      return ObjectUtils.resolveFieldData(this.rowData, this.field);
    },
    toggleRow(event2) {
      this.isRowExpanded = !this.isRowExpanded;
      this.$emit("row-toggle", {
        originalEvent: event2,
        data: this.rowData
      });
    },
    toggleRowWithRadio(event2, index) {
      this.$emit("radio-change", { originalEvent: event2.originalEvent, index, data: event2.data });
    },
    toggleRowWithCheckbox(event2, index) {
      this.$emit("checkbox-change", { originalEvent: event2.originalEvent, index, data: event2.data });
    },
    isEditable() {
      return this.column.children && this.column.children.editor != null;
    },
    bindDocumentEditListener() {
      if (!this.documentEditListener) {
        this.documentEditListener = (event2) => {
          if (!this.selfClick) {
            this.completeEdit(event2, "outside");
          }
          this.selfClick = false;
        };
        document.addEventListener("click", this.documentEditListener);
      }
    },
    unbindDocumentEditListener() {
      if (this.documentEditListener) {
        document.removeEventListener("click", this.documentEditListener);
        this.documentEditListener = null;
        this.selfClick = false;
      }
    },
    switchCellToViewMode() {
      this.d_editing = false;
      this.unbindDocumentEditListener();
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
    },
    onClick(event2) {
      if (this.editMode === "cell" && this.isEditable()) {
        this.selfClick = true;
        if (!this.d_editing) {
          this.d_editing = true;
          this.bindDocumentEditListener();
          this.$emit("cell-edit-init", { originalEvent: event2, data: this.rowData, field: this.field, index: this.rowIndex });
          this.overlayEventListener = (e) => {
            if (this.$el && this.$el.contains(e.target)) {
              this.selfClick = true;
            }
          };
          OverlayEventBus.on("overlay-click", this.overlayEventListener);
        }
      }
    },
    completeEdit(event2, type) {
      const completeEvent = {
        originalEvent: event2,
        data: this.rowData,
        newData: this.editingRowData,
        value: this.rowData[this.field],
        newValue: this.editingRowData[this.field],
        field: this.field,
        index: this.rowIndex,
        type,
        defaultPrevented: false,
        preventDefault: function() {
          this.defaultPrevented = true;
        }
      };
      this.$emit("cell-edit-complete", completeEvent);
      if (!completeEvent.defaultPrevented) {
        this.switchCellToViewMode();
      }
    },
    onKeyDown(event2) {
      if (this.editMode === "cell") {
        switch (event2.code) {
          case "Enter":
            this.completeEdit(event2, "enter");
            break;
          case "Escape":
            this.switchCellToViewMode();
            this.$emit("cell-edit-cancel", { originalEvent: event2, data: this.rowData, field: this.field, index: this.rowIndex });
            break;
          case "Tab":
            this.completeEdit(event2, "tab");
            if (event2.shiftKey)
              this.moveToPreviousCell(event2);
            else
              this.moveToNextCell(event2);
            break;
        }
      }
    },
    moveToPreviousCell(event2) {
      let currentCell = this.findCell(event2.target);
      let targetCell = this.findPreviousEditableColumn(currentCell);
      if (targetCell) {
        DomHandler.invokeElementMethod(targetCell, "click");
        event2.preventDefault();
      }
    },
    moveToNextCell(event2) {
      let currentCell = this.findCell(event2.target);
      let targetCell = this.findNextEditableColumn(currentCell);
      if (targetCell) {
        DomHandler.invokeElementMethod(targetCell, "click");
        event2.preventDefault();
      }
    },
    findCell(element) {
      if (element) {
        let cell = element;
        while (cell && !DomHandler.hasClass(cell, "p-cell-editing")) {
          cell = cell.parentElement;
        }
        return cell;
      } else {
        return null;
      }
    },
    findPreviousEditableColumn(cell) {
      let prevCell = cell.previousElementSibling;
      if (!prevCell) {
        let previousRow = cell.parentElement.previousElementSibling;
        if (previousRow) {
          prevCell = previousRow.lastElementChild;
        }
      }
      if (prevCell) {
        if (DomHandler.hasClass(prevCell, "p-editable-column"))
          return prevCell;
        else
          return this.findPreviousEditableColumn(prevCell);
      } else {
        return null;
      }
    },
    findNextEditableColumn(cell) {
      let nextCell = cell.nextElementSibling;
      if (!nextCell) {
        let nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          nextCell = nextRow.firstElementChild;
        }
      }
      if (nextCell) {
        if (DomHandler.hasClass(nextCell, "p-editable-column"))
          return nextCell;
        else
          return this.findNextEditableColumn(nextCell);
      } else {
        return null;
      }
    },
    isEditingCellValid() {
      return DomHandler.find(this.$el, ".p-invalid").length === 0;
    },
    onRowEditInit(event2) {
      this.$emit("row-edit-init", { originalEvent: event2, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
    },
    onRowEditSave(event2) {
      this.$emit("row-edit-save", { originalEvent: event2, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
    },
    onRowEditCancel(event2) {
      this.$emit("row-edit-cancel", { originalEvent: event2, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
    },
    editorInitCallback(event2) {
      this.$emit("row-edit-init", { originalEvent: event2, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
    },
    editorSaveCallback(event2) {
      if (this.editMode === "row") {
        this.$emit("row-edit-save", { originalEvent: event2, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
      } else {
        this.completeEdit(event2, "enter");
      }
    },
    editorCancelCallback(event2) {
      if (this.editMode === "row") {
        this.$emit("row-edit-cancel", { originalEvent: event2, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
      } else {
        this.switchCellToViewMode();
        this.$emit("cell-edit-cancel", { originalEvent: event2, data: this.rowData, field: this.field, index: this.rowIndex });
      }
    },
    updateStickyPosition() {
      if (this.columnProp("frozen")) {
        let align = this.columnProp("alignFrozen");
        if (align === "right") {
          let right = 0;
          let next = this.$el.nextElementSibling;
          if (next) {
            right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
          }
          this.styleObject.right = right + "px";
        } else {
          let left = 0;
          let prev = this.$el.previousElementSibling;
          if (prev) {
            left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
          }
          this.styleObject.left = left + "px";
        }
      }
    },
    getVirtualScrollerProp(option) {
      return this.virtualScrollerContentProps ? this.virtualScrollerContentProps[option] : null;
    }
  },
  computed: {
    editingRowData() {
      return this.editingMeta[this.rowIndex] ? this.editingMeta[this.rowIndex].data : this.rowData;
    },
    field() {
      return this.columnProp("field");
    },
    containerClass() {
      return [
        this.columnProp("bodyClass"),
        this.columnProp("class"),
        {
          "p-selection-column": this.columnProp("selectionMode") != null,
          "p-editable-column": this.isEditable(),
          "p-cell-editing": this.d_editing,
          "p-frozen-column": this.columnProp("frozen")
        }
      ];
    },
    containerStyle() {
      let bodyStyle = this.columnProp("bodyStyle");
      let columnStyle = this.columnProp("style");
      return this.columnProp("frozen") ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
    },
    loading() {
      return this.getVirtualScrollerProp("loading");
    },
    loadingOptions() {
      const getLoaderOptions = this.getVirtualScrollerProp("getLoaderOptions");
      return getLoaderOptions && getLoaderOptions(this.rowIndex, {
        cellIndex: this.index,
        cellFirst: this.index === 0,
        cellLast: this.index === this.getVirtualScrollerProp("columns").length - 1,
        cellEven: this.index % 2 === 0,
        cellOdd: this.index % 2 !== 0,
        column: this.column,
        field: this.field
      });
    },
    expandButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.isRowExpanded ? this.$primevue.config.locale.aria.expandRow : this.$primevue.config.locale.aria.collapseRow : void 0;
    },
    initButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.editRow : void 0;
    },
    saveButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.saveEdit : void 0;
    },
    cancelButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.cancelEdit : void 0;
    }
  },
  components: {
    DTRadioButton: script$9,
    DTCheckbox: script$a
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$8 = {
  key: 0,
  class: "p-column-title"
};
const _hoisted_2$7 = ["aria-expanded", "aria-controls", "aria-label"];
const _hoisted_3$5 = ["aria-label"];
const _hoisted_4$4 = /* @__PURE__ */ createElementVNode("span", { class: "p-row-editor-init-icon pi pi-fw pi-pencil" }, null, -1);
const _hoisted_5$3 = [
  _hoisted_4$4
];
const _hoisted_6$3 = ["aria-label"];
const _hoisted_7$2 = /* @__PURE__ */ createElementVNode("span", { class: "p-row-editor-save-icon pi pi-fw pi-check" }, null, -1);
const _hoisted_8$1 = [
  _hoisted_7$2
];
const _hoisted_9$1 = ["aria-label"];
const _hoisted_10$1 = /* @__PURE__ */ createElementVNode("span", { class: "p-row-editor-cancel-icon pi pi-fw pi-times" }, null, -1);
const _hoisted_11$1 = [
  _hoisted_10$1
];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTRadioButton = resolveComponent("DTRadioButton");
  const _component_DTCheckbox = resolveComponent("DTCheckbox");
  const _directive_ripple = resolveDirective("ripple");
  return $options.loading ? (openBlock(), createElementBlock("td", {
    key: 0,
    style: normalizeStyle($options.containerStyle),
    class: normalizeClass($options.containerClass)
  }, [
    (openBlock(), createBlock(resolveDynamicComponent($props.column.children.loading), {
      data: $props.rowData,
      column: $props.column,
      field: $options.field,
      index: $props.rowIndex,
      frozenRow: $props.frozenRow,
      loadingOptions: $options.loadingOptions
    }, null, 8, ["data", "column", "field", "index", "frozenRow", "loadingOptions"]))
  ], 6)) : (openBlock(), createElementBlock("td", {
    key: 1,
    style: normalizeStyle($options.containerStyle),
    class: normalizeClass($options.containerClass),
    onClick: _cache[6] || (_cache[6] = (...args) => $options.onClick && $options.onClick(...args)),
    onKeydown: _cache[7] || (_cache[7] = (...args) => $options.onKeyDown && $options.onKeyDown(...args)),
    role: "cell"
  }, [
    $props.responsiveLayout === "stack" ? (openBlock(), createElementBlock("span", _hoisted_1$8, toDisplayString($options.columnProp("header")), 1)) : createCommentVNode("", true),
    $props.column.children && $props.column.children.body && !$data.d_editing ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.body), {
      key: 1,
      data: $props.rowData,
      column: $props.column,
      field: $options.field,
      index: $props.rowIndex,
      frozenRow: $props.frozenRow,
      editorInitCallback: $options.editorInitCallback
    }, null, 8, ["data", "column", "field", "index", "frozenRow", "editorInitCallback"])) : $props.column.children && $props.column.children.editor && $data.d_editing ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.editor), {
      key: 2,
      data: $options.editingRowData,
      column: $props.column,
      field: $options.field,
      index: $props.rowIndex,
      frozenRow: $props.frozenRow,
      editorSaveCallback: $options.editorSaveCallback,
      editorCancelCallback: $options.editorCancelCallback
    }, null, 8, ["data", "column", "field", "index", "frozenRow", "editorSaveCallback", "editorCancelCallback"])) : $props.column.children && $props.column.children.body && !$props.column.children.editor && $data.d_editing ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.body), {
      key: 3,
      data: $options.editingRowData,
      column: $props.column,
      field: $options.field,
      index: $props.rowIndex,
      frozenRow: $props.frozenRow
    }, null, 8, ["data", "column", "field", "index", "frozenRow"])) : $options.columnProp("selectionMode") ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
      $options.columnProp("selectionMode") === "single" ? (openBlock(), createBlock(_component_DTRadioButton, {
        key: 0,
        value: $props.rowData,
        name: $props.name,
        checked: $props.selected,
        onChange: _cache[0] || (_cache[0] = ($event) => $options.toggleRowWithRadio($event, $props.rowIndex))
      }, null, 8, ["value", "name", "checked"])) : $options.columnProp("selectionMode") === "multiple" ? (openBlock(), createBlock(_component_DTCheckbox, {
        key: 1,
        value: $props.rowData,
        checked: $props.selected,
        "aria-selected": $props.selected ? true : void 0,
        onChange: _cache[1] || (_cache[1] = ($event) => $options.toggleRowWithCheckbox($event, $props.rowIndex))
      }, null, 8, ["value", "checked", "aria-selected"])) : createCommentVNode("", true)
    ], 64)) : $options.columnProp("rowReorder") ? (openBlock(), createElementBlock("i", {
      key: 5,
      class: normalizeClass(["p-datatable-reorderablerow-handle", $options.columnProp("rowReorderIcon") || "pi pi-bars"])
    }, null, 2)) : $options.columnProp("expander") ? withDirectives((openBlock(), createElementBlock("button", {
      key: 6,
      class: "p-row-toggler p-link",
      type: "button",
      "aria-expanded": $data.isRowExpanded,
      "aria-controls": $props.ariaControls,
      "aria-label": $options.expandButtonAriaLabel,
      onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleRow && $options.toggleRow(...args))
    }, [
      createElementVNode("span", {
        class: normalizeClass($props.rowTogglerIcon)
      }, null, 2)
    ], 8, _hoisted_2$7)), [
      [_directive_ripple]
    ]) : $props.editMode === "row" && $options.columnProp("rowEditor") ? (openBlock(), createElementBlock(Fragment, { key: 7 }, [
      !$data.d_editing ? withDirectives((openBlock(), createElementBlock("button", {
        key: 0,
        class: "p-row-editor-init p-link",
        type: "button",
        "aria-label": $options.initButtonAriaLabel,
        onClick: _cache[3] || (_cache[3] = (...args) => $options.onRowEditInit && $options.onRowEditInit(...args))
      }, _hoisted_5$3, 8, _hoisted_3$5)), [
        [_directive_ripple]
      ]) : createCommentVNode("", true),
      $data.d_editing ? withDirectives((openBlock(), createElementBlock("button", {
        key: 1,
        class: "p-row-editor-save p-link",
        type: "button",
        "aria-label": $options.saveButtonAriaLabel,
        onClick: _cache[4] || (_cache[4] = (...args) => $options.onRowEditSave && $options.onRowEditSave(...args))
      }, _hoisted_8$1, 8, _hoisted_6$3)), [
        [_directive_ripple]
      ]) : createCommentVNode("", true),
      $data.d_editing ? withDirectives((openBlock(), createElementBlock("button", {
        key: 2,
        class: "p-row-editor-cancel p-link",
        type: "button",
        "aria-label": $options.cancelButtonAriaLabel,
        onClick: _cache[5] || (_cache[5] = (...args) => $options.onRowEditCancel && $options.onRowEditCancel(...args))
      }, _hoisted_11$1, 8, _hoisted_9$1)), [
        [_directive_ripple]
      ]) : createCommentVNode("", true)
    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 8 }, [
      createTextVNode(toDisplayString($options.resolveFieldData()), 1)
    ], 64))
  ], 38));
}
script$8.render = render$8;
var script$7 = {
  name: "TableBody",
  emits: [
    "rowgroup-toggle",
    "row-click",
    "row-dblclick",
    "row-rightclick",
    "row-touchend",
    "row-keydown",
    "row-mousedown",
    "row-dragstart",
    "row-dragover",
    "row-dragleave",
    "row-dragend",
    "row-drop",
    "row-toggle",
    "radio-change",
    "checkbox-change",
    "cell-edit-init",
    "cell-edit-complete",
    "cell-edit-cancel",
    "row-edit-init",
    "row-edit-save",
    "row-edit-cancel",
    "editing-meta-change"
  ],
  props: {
    value: {
      type: Array,
      default: null
    },
    columns: {
      type: null,
      default: null
    },
    frozenRow: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    },
    rowGroupMode: {
      type: String,
      default: null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      default: null
    },
    expandableRowGroups: {
      type: Boolean,
      default: false
    },
    expandedRowGroups: {
      type: Array,
      default: null
    },
    dataKey: {
      type: String,
      default: null
    },
    expandedRowIcon: {
      type: String,
      default: null
    },
    collapsedRowIcon: {
      type: String,
      default: null
    },
    expandedRows: {
      type: Array,
      default: null
    },
    expandedRowKeys: {
      type: null,
      default: null
    },
    selection: {
      type: [Array, Object],
      default: null
    },
    selectionKeys: {
      type: null,
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    contextMenu: {
      type: Boolean,
      default: false
    },
    contextMenuSelection: {
      type: Object,
      default: null
    },
    rowClass: {
      type: null,
      default: null
    },
    rowStyle: {
      type: null,
      default: null
    },
    editMode: {
      type: String,
      default: null
    },
    compareSelectionBy: {
      type: String,
      default: "deepEquals"
    },
    editingRows: {
      type: Array,
      default: null
    },
    editingRowKeys: {
      type: null,
      default: null
    },
    editingMeta: {
      type: Object,
      default: null
    },
    templates: {
      type: null,
      default: null
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    responsiveLayout: {
      type: String,
      default: "stack"
    },
    virtualScrollerContentProps: {
      type: Object,
      default: null
    },
    isVirtualScrollerDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rowGroupHeaderStyleObject: {},
      tabindexArray: [],
      isARowSelected: false
    };
  },
  watch: {
    virtualScrollerContentProps(newValue, oldValue) {
      if (!this.isVirtualScrollerDisabled && this.getVirtualScrollerProp("vertical") && this.getVirtualScrollerProp("itemSize", oldValue) !== this.getVirtualScrollerProp("itemSize", newValue)) {
        this.updateVirtualScrollerPosition();
      }
    }
  },
  mounted() {
    if (this.frozenRow) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.scrollable && this.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
    if (!this.isVirtualScrollerDisabled && this.getVirtualScrollerProp("vertical")) {
      this.updateVirtualScrollerPosition();
    }
  },
  updated() {
    if (this.frozenRow) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.scrollable && this.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  },
  methods: {
    columnProp(col, prop) {
      return ObjectUtils.getVNodeProp(col, prop);
    },
    shouldRenderRowGroupHeader(value, rowData, i) {
      let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
      let prevRowData = value[i - 1];
      if (prevRowData) {
        let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.groupRowsBy);
        return currentRowFieldData !== previousRowFieldData;
      } else {
        return true;
      }
    },
    getRowKey(rowData, index) {
      return this.dataKey ? ObjectUtils.resolveFieldData(rowData, this.dataKey) : index;
    },
    getRowIndex(index) {
      const getItemOptions = this.getVirtualScrollerProp("getItemOptions");
      return getItemOptions ? getItemOptions(index).index : index;
    },
    getRowClass(rowData) {
      let rowStyleClass = [];
      if (this.selectionMode) {
        rowStyleClass.push("p-selectable-row");
      }
      if (this.selection) {
        rowStyleClass.push({
          "p-highlight": this.isSelected(rowData)
        });
      }
      if (this.contextMenuSelection) {
        rowStyleClass.push({
          "p-highlight-contextmenu": this.isSelectedWithContextMenu(rowData)
        });
      }
      if (this.rowClass) {
        let rowClassValue = this.rowClass(rowData);
        if (rowClassValue) {
          rowStyleClass.push(rowClassValue);
        }
      }
      return rowStyleClass;
    },
    shouldRenderRowGroupFooter(value, rowData, i) {
      if (this.expandableRowGroups && !this.isRowGroupExpanded(rowData)) {
        return false;
      } else {
        let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
        let nextRowData = value[i + 1];
        if (nextRowData) {
          let nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.groupRowsBy);
          return currentRowFieldData !== nextRowFieldData;
        } else {
          return true;
        }
      }
    },
    shouldRenderBodyCell(value, column, i) {
      if (this.rowGroupMode) {
        if (this.rowGroupMode === "subheader") {
          return this.groupRowsBy !== this.columnProp(column, "field");
        } else if (this.rowGroupMode === "rowspan") {
          if (this.isGrouped(column)) {
            let prevRowData = value[i - 1];
            if (prevRowData) {
              let currentRowFieldData = ObjectUtils.resolveFieldData(value[i], this.columnProp(column, "field"));
              let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.columnProp(column, "field"));
              return currentRowFieldData !== previousRowFieldData;
            } else {
              return true;
            }
          } else {
            return true;
          }
        }
      } else {
        return !this.columnProp(column, "hidden");
      }
    },
    calculateRowGroupSize(value, column, index) {
      if (this.isGrouped(column)) {
        let currentRowFieldData = ObjectUtils.resolveFieldData(value[index], this.columnProp(column, "field"));
        let nextRowFieldData = currentRowFieldData;
        let groupRowSpan = 0;
        while (currentRowFieldData === nextRowFieldData) {
          groupRowSpan++;
          let nextRowData = value[++index];
          if (nextRowData) {
            nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.columnProp(column, "field"));
          } else {
            break;
          }
        }
        return groupRowSpan === 1 ? null : groupRowSpan;
      } else {
        return null;
      }
    },
    rowTogglerIcon(rowData) {
      const icon = this.isRowExpanded(rowData) ? this.expandedRowIcon : this.collapsedRowIcon;
      return ["p-row-toggler-icon pi", icon];
    },
    rowGroupTogglerIcon(rowData) {
      const icon = this.isRowGroupExpanded(rowData) ? this.expandedRowIcon : this.collapsedRowIcon;
      return ["p-row-toggler-icon pi", icon];
    },
    isGrouped(column) {
      if (this.groupRowsBy && this.columnProp(column, "field")) {
        if (Array.isArray(this.groupRowsBy))
          return this.groupRowsBy.indexOf(column.props.field) > -1;
        else
          return this.groupRowsBy === column.props.field;
      } else {
        return false;
      }
    },
    isRowEditing(rowData) {
      if (rowData && this.editingRows) {
        if (this.dataKey)
          return this.editingRowKeys ? this.editingRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== void 0 : false;
        else
          return this.findIndex(rowData, this.editingRows) > -1;
      }
      return false;
    },
    isRowExpanded(rowData) {
      if (rowData && this.expandedRows) {
        if (this.dataKey)
          return this.expandedRowKeys ? this.expandedRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== void 0 : false;
        else
          return this.findIndex(rowData, this.expandedRows) > -1;
      }
      return false;
    },
    isRowGroupExpanded(rowData) {
      if (this.expandableRowGroups && this.expandedRowGroups) {
        let groupFieldValue = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
        return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
      }
      return false;
    },
    isSelected(rowData) {
      if (rowData && this.selection) {
        if (this.dataKey) {
          return this.selectionKeys ? this.selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== void 0 : false;
        } else {
          if (this.selection instanceof Array)
            return this.findIndexInSelection(rowData) > -1;
          else
            return this.equals(rowData, this.selection);
        }
      }
      return false;
    },
    isSelectedWithContextMenu(rowData) {
      if (rowData && this.contextMenuSelection) {
        return this.equals(rowData, this.contextMenuSelection, this.dataKey);
      }
      return false;
    },
    findIndexInSelection(rowData) {
      return this.findIndex(rowData, this.selection);
    },
    findIndex(rowData, collection) {
      let index = -1;
      if (collection && collection.length) {
        for (let i = 0; i < collection.length; i++) {
          if (this.equals(rowData, collection[i])) {
            index = i;
            break;
          }
        }
      }
      return index;
    },
    equals(data1, data2) {
      return this.compareSelectionBy === "equals" ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
    },
    onRowGroupToggle(event2, data) {
      this.$emit("rowgroup-toggle", { originalEvent: event2, data });
    },
    onRowClick(event2, rowData, rowIndex) {
      this.$emit("row-click", { originalEvent: event2, data: rowData, index: rowIndex });
    },
    onRowDblClick(event2, rowData, rowIndex) {
      this.$emit("row-dblclick", { originalEvent: event2, data: rowData, index: rowIndex });
    },
    onRowRightClick(event2, rowData, rowIndex) {
      this.$emit("row-rightclick", { originalEvent: event2, data: rowData, index: rowIndex });
    },
    onRowTouchEnd(event2) {
      this.$emit("row-touchend", event2);
    },
    onRowKeyDown(event2, rowData, rowIndex) {
      this.$emit("row-keydown", { originalEvent: event2, data: rowData, index: rowIndex });
    },
    onRowMouseDown(event2) {
      this.$emit("row-mousedown", event2);
    },
    onRowDragStart(event2, rowIndex) {
      this.$emit("row-dragstart", { originalEvent: event2, index: rowIndex });
    },
    onRowDragOver(event2, rowIndex) {
      this.$emit("row-dragover", { originalEvent: event2, index: rowIndex });
    },
    onRowDragLeave(event2) {
      this.$emit("row-dragleave", event2);
    },
    onRowDragEnd(event2) {
      this.$emit("row-dragend", event2);
    },
    onRowDrop(event2) {
      this.$emit("row-drop", event2);
    },
    onRowToggle(event2) {
      this.$emit("row-toggle", event2);
    },
    onRadioChange(event2) {
      this.$emit("radio-change", event2);
    },
    onCheckboxChange(event2) {
      this.$emit("checkbox-change", event2);
    },
    onCellEditInit(event2) {
      this.$emit("cell-edit-init", event2);
    },
    onCellEditComplete(event2) {
      this.$emit("cell-edit-complete", event2);
    },
    onCellEditCancel(event2) {
      this.$emit("cell-edit-cancel", event2);
    },
    onRowEditInit(event2) {
      this.$emit("row-edit-init", event2);
    },
    onRowEditSave(event2) {
      this.$emit("row-edit-save", event2);
    },
    onRowEditCancel(event2) {
      this.$emit("row-edit-cancel", event2);
    },
    onEditingMetaChange(event2) {
      this.$emit("editing-meta-change", event2);
    },
    updateFrozenRowStickyPosition() {
      this.$el.style.top = DomHandler.getOuterHeight(this.$el.previousElementSibling) + "px";
    },
    updateFrozenRowGroupHeaderStickyPosition() {
      let tableHeaderHeight = DomHandler.getOuterHeight(this.$el.previousElementSibling);
      this.rowGroupHeaderStyleObject.top = tableHeaderHeight + "px";
    },
    updateVirtualScrollerPosition() {
      const tableHeaderHeight = DomHandler.getOuterHeight(this.$el.previousElementSibling);
      this.$el.style.top = (this.$el.style.top || 0) + tableHeaderHeight + "px";
    },
    getVirtualScrollerProp(option, options) {
      options = options || this.virtualScrollerContentProps;
      return options ? options[option] : null;
    },
    bodyRef(el) {
      const contentRef = this.getVirtualScrollerProp("contentRef");
      contentRef && contentRef(el);
    },
    setRowTabindex(index) {
      if (this.selection === null && (this.selectionMode === "single" || this.selectionMode === "multiple")) {
        return index === 0 ? 0 : -1;
      }
      return -1;
    }
  },
  computed: {
    columnsLength() {
      let hiddenColLength = 0;
      this.columns.forEach((column) => {
        if (this.columnProp(column, "hidden"))
          hiddenColLength++;
      });
      return this.columns ? this.columns.length - hiddenColLength : 0;
    },
    rowGroupHeaderStyle() {
      if (this.scrollable) {
        return { top: this.rowGroupHeaderStyleObject.top };
      }
      return null;
    },
    bodyStyle() {
      return this.getVirtualScrollerProp("contentStyle");
    },
    expandedRowId() {
      return UniqueComponentId();
    },
    nameAttributeSelector() {
      return UniqueComponentId();
    }
  },
  components: {
    DTBodyCell: script$8
  }
};
const _hoisted_1$7 = ["colspan"];
const _hoisted_2$6 = ["onClick"];
const _hoisted_3$4 = ["tabindex", "aria-selected", "onClick", "onDblclick", "onContextmenu", "onKeydown", "onDragstart", "onDragover"];
const _hoisted_4$3 = ["id"];
const _hoisted_5$2 = ["colspan"];
const _hoisted_6$2 = {
  key: 1,
  class: "p-datatable-emptymessage",
  role: "row"
};
const _hoisted_7$1 = ["colspan"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTBodyCell = resolveComponent("DTBodyCell");
  return openBlock(), createElementBlock("tbody", {
    ref: $options.bodyRef,
    class: "p-datatable-tbody",
    role: "rowgroup",
    style: normalizeStyle($options.bodyStyle)
  }, [
    !$props.empty ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($props.value, (rowData, index) => {
      return openBlock(), createElementBlock(Fragment, {
        key: $options.getRowKey(rowData, $options.getRowIndex(index)) + "_subheader"
      }, [
        $props.templates["groupheader"] && $props.rowGroupMode === "subheader" && $options.shouldRenderRowGroupHeader($props.value, rowData, $options.getRowIndex(index)) ? (openBlock(), createElementBlock("tr", {
          key: 0,
          class: "p-rowgroup-header",
          style: normalizeStyle($options.rowGroupHeaderStyle),
          role: "row"
        }, [
          createElementVNode("td", {
            colspan: $options.columnsLength - 1
          }, [
            $props.expandableRowGroups ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "p-row-toggler p-link",
              onClick: ($event) => $options.onRowGroupToggle($event, rowData),
              type: "button"
            }, [
              createElementVNode("span", {
                class: normalizeClass($options.rowGroupTogglerIcon(rowData))
              }, null, 2)
            ], 8, _hoisted_2$6)) : createCommentVNode("", true),
            (openBlock(), createBlock(resolveDynamicComponent($props.templates["groupheader"]), {
              data: rowData,
              index: $options.getRowIndex(index)
            }, null, 8, ["data", "index"]))
          ], 8, _hoisted_1$7)
        ], 4)) : createCommentVNode("", true),
        ($props.expandableRowGroups ? $options.isRowGroupExpanded(rowData) : true) ? (openBlock(), createElementBlock("tr", {
          key: $options.getRowKey(rowData, $options.getRowIndex(index)),
          class: normalizeClass($options.getRowClass(rowData)),
          style: normalizeStyle($props.rowStyle),
          tabindex: $options.setRowTabindex(index),
          role: "row",
          "aria-selected": $props.selectionMode ? $options.isSelected(rowData) : null,
          onClick: ($event) => $options.onRowClick($event, rowData, $options.getRowIndex(index)),
          onDblclick: ($event) => $options.onRowDblClick($event, rowData, $options.getRowIndex(index)),
          onContextmenu: ($event) => $options.onRowRightClick($event, rowData, $options.getRowIndex(index)),
          onTouchend: _cache[9] || (_cache[9] = ($event) => $options.onRowTouchEnd($event)),
          onKeydown: ($event) => $options.onRowKeyDown($event, rowData, $options.getRowIndex(index)),
          onMousedown: _cache[10] || (_cache[10] = ($event) => $options.onRowMouseDown($event)),
          onDragstart: ($event) => $options.onRowDragStart($event, $options.getRowIndex(index)),
          onDragover: ($event) => $options.onRowDragOver($event, $options.getRowIndex(index)),
          onDragleave: _cache[11] || (_cache[11] = ($event) => $options.onRowDragLeave($event)),
          onDragend: _cache[12] || (_cache[12] = ($event) => $options.onRowDragEnd($event)),
          onDrop: _cache[13] || (_cache[13] = ($event) => $options.onRowDrop($event))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, (col, i) => {
            return openBlock(), createElementBlock(Fragment, {
              key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
            }, [
              $options.shouldRenderBodyCell($props.value, col, $options.getRowIndex(index)) ? (openBlock(), createBlock(_component_DTBodyCell, {
                key: 0,
                rowData,
                column: col,
                rowIndex: $options.getRowIndex(index),
                index: i,
                selected: $options.isSelected(rowData),
                rowTogglerIcon: $options.columnProp(col, "expander") ? $options.rowTogglerIcon(rowData) : null,
                frozenRow: $props.frozenRow,
                rowspan: $props.rowGroupMode === "rowspan" ? $options.calculateRowGroupSize($props.value, col, $options.getRowIndex(index)) : null,
                editMode: $props.editMode,
                editing: $props.editMode === "row" && $options.isRowEditing(rowData),
                editingMeta: $props.editingMeta,
                responsiveLayout: $props.responsiveLayout,
                virtualScrollerContentProps: $props.virtualScrollerContentProps,
                ariaControls: $options.expandedRowId + "_" + index + "_expansion",
                name: $options.nameAttributeSelector,
                onRadioChange: _cache[0] || (_cache[0] = ($event) => $options.onRadioChange($event)),
                onCheckboxChange: _cache[1] || (_cache[1] = ($event) => $options.onCheckboxChange($event)),
                onRowToggle: _cache[2] || (_cache[2] = ($event) => $options.onRowToggle($event)),
                onCellEditInit: _cache[3] || (_cache[3] = ($event) => $options.onCellEditInit($event)),
                onCellEditComplete: _cache[4] || (_cache[4] = ($event) => $options.onCellEditComplete($event)),
                onCellEditCancel: _cache[5] || (_cache[5] = ($event) => $options.onCellEditCancel($event)),
                onRowEditInit: _cache[6] || (_cache[6] = ($event) => $options.onRowEditInit($event)),
                onRowEditSave: _cache[7] || (_cache[7] = ($event) => $options.onRowEditSave($event)),
                onRowEditCancel: _cache[8] || (_cache[8] = ($event) => $options.onRowEditCancel($event)),
                onEditingMetaChange: $options.onEditingMetaChange
              }, null, 8, ["rowData", "column", "rowIndex", "index", "selected", "rowTogglerIcon", "frozenRow", "rowspan", "editMode", "editing", "editingMeta", "responsiveLayout", "virtualScrollerContentProps", "ariaControls", "name", "onEditingMetaChange"])) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ], 46, _hoisted_3$4)) : createCommentVNode("", true),
        $props.templates["expansion"] && $props.expandedRows && $options.isRowExpanded(rowData) ? (openBlock(), createElementBlock("tr", {
          key: $options.getRowKey(rowData, $options.getRowIndex(index)) + "_expansion",
          id: $options.expandedRowId + "_" + index + "_expansion",
          class: "p-datatable-row-expansion",
          role: "row"
        }, [
          createElementVNode("td", { colspan: $options.columnsLength }, [
            (openBlock(), createBlock(resolveDynamicComponent($props.templates["expansion"]), {
              data: rowData,
              index: $options.getRowIndex(index)
            }, null, 8, ["data", "index"]))
          ], 8, _hoisted_5$2)
        ], 8, _hoisted_4$3)) : createCommentVNode("", true),
        $props.templates["groupfooter"] && $props.rowGroupMode === "subheader" && $options.shouldRenderRowGroupFooter($props.value, rowData, $options.getRowIndex(index)) ? (openBlock(), createElementBlock("tr", {
          key: $options.getRowKey(rowData, $options.getRowIndex(index)) + "_subfooter",
          class: "p-rowgroup-footer",
          role: "row"
        }, [
          (openBlock(), createBlock(resolveDynamicComponent($props.templates["groupfooter"]), {
            data: rowData,
            index: $options.getRowIndex(index)
          }, null, 8, ["data", "index"]))
        ])) : createCommentVNode("", true)
      ], 64);
    }), 128)) : (openBlock(), createElementBlock("tr", _hoisted_6$2, [
      createElementVNode("td", { colspan: $options.columnsLength }, [
        $props.templates.empty ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.empty), { key: 0 })) : createCommentVNode("", true)
      ], 8, _hoisted_7$1)
    ]))
  ], 4);
}
script$7.render = render$7;
var script$6 = {
  name: "FooterCell",
  props: {
    column: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      styleObject: {}
    };
  },
  mounted() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  updated() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  methods: {
    columnProp(prop) {
      return ObjectUtils.getVNodeProp(this.column, prop);
    },
    updateStickyPosition() {
      if (this.columnProp("frozen")) {
        let align = this.columnProp("alignFrozen");
        if (align === "right") {
          let right = 0;
          let next = this.$el.nextElementSibling;
          if (next) {
            right = DomHandler.getOuterWidth(next) + parseFloat(next.style.left);
          }
          this.styleObject.right = right + "px";
        } else {
          let left = 0;
          let prev = this.$el.previousElementSibling;
          if (prev) {
            left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left);
          }
          this.styleObject.left = left + "px";
        }
      }
    }
  },
  computed: {
    containerClass() {
      return [
        this.columnProp("footerClass"),
        this.columnProp("class"),
        {
          "p-frozen-column": this.columnProp("frozen")
        }
      ];
    },
    containerStyle() {
      let bodyStyle = this.columnProp("footerStyle");
      let columnStyle = this.columnProp("style");
      return this.columnProp("frozen") ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
    }
  }
};
const _hoisted_1$6 = ["colspan", "rowspan"];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("td", {
    style: normalizeStyle($options.containerStyle),
    class: normalizeClass($options.containerClass),
    role: "cell",
    colspan: $options.columnProp("colspan"),
    rowspan: $options.columnProp("rowspan")
  }, [
    $props.column.children && $props.column.children.footer ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.footer), {
      key: 0,
      column: $props.column
    }, null, 8, ["column"])) : createCommentVNode("", true),
    createTextVNode(" " + toDisplayString($options.columnProp("footer")), 1)
  ], 14, _hoisted_1$6);
}
script$6.render = render$6;
var script$5 = {
  name: "TableFooter",
  props: {
    columnGroup: {
      type: null,
      default: null
    },
    columns: {
      type: null,
      default: null
    }
  },
  methods: {
    columnProp(col, prop) {
      return ObjectUtils.getVNodeProp(col, prop);
    },
    getFooterRows() {
      let rows = [];
      let columnGroup = this.columnGroup;
      if (columnGroup.children && columnGroup.children.default) {
        for (let child of columnGroup.children.default()) {
          if (child.type.name === "Row") {
            rows.push(child);
          } else if (child.children && child.children instanceof Array) {
            rows = child.children;
          }
        }
        return rows;
      }
    },
    getFooterColumns(row) {
      let cols = [];
      if (row.children && row.children.default) {
        row.children.default().forEach((child) => {
          if (child.children && child.children instanceof Array)
            cols = [...cols, ...child.children];
          else if (child.type.name === "Column")
            cols.push(child);
        });
        return cols;
      }
    }
  },
  computed: {
    hasFooter() {
      let hasFooter = false;
      if (this.columnGroup) {
        hasFooter = true;
      } else if (this.columns) {
        for (let col of this.columns) {
          if (this.columnProp(col, "footer") || col.children && col.children.footer) {
            hasFooter = true;
            break;
          }
        }
      }
      return hasFooter;
    }
  },
  components: {
    DTFooterCell: script$6
  }
};
const _hoisted_1$5 = {
  key: 0,
  class: "p-datatable-tfoot",
  role: "rowgroup"
};
const _hoisted_2$5 = {
  key: 0,
  role: "row"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTFooterCell = resolveComponent("DTFooterCell");
  return $options.hasFooter ? (openBlock(), createElementBlock("tfoot", _hoisted_1$5, [
    !$props.columnGroup ? (openBlock(), createElementBlock("tr", _hoisted_2$5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, (col, i) => {
        return openBlock(), createElementBlock(Fragment, {
          key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
        }, [
          !$options.columnProp(col, "hidden") ? (openBlock(), createBlock(_component_DTFooterCell, {
            key: 0,
            column: col
          }, null, 8, ["column"])) : createCommentVNode("", true)
        ], 64);
      }), 128))
    ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($options.getFooterRows(), (row, i) => {
      return openBlock(), createElementBlock("tr", {
        key: i,
        role: "row"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.getFooterColumns(row), (col, j) => {
          return openBlock(), createElementBlock(Fragment, {
            key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || j
          }, [
            !$options.columnProp(col, "hidden") ? (openBlock(), createBlock(_component_DTFooterCell, {
              key: 0,
              column: col
            }, null, 8, ["column"])) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ]);
    }), 128))
  ])) : createCommentVNode("", true);
}
script$5.render = render$5;
var script$4 = {
  name: "ColumnFilter",
  emits: ["filter-change", "filter-apply", "operator-change", "matchmode-change", "constraint-add", "constraint-remove", "filter-clear", "apply-click"],
  props: {
    field: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    display: {
      type: String,
      default: null
    },
    showMenu: {
      type: Boolean,
      default: true
    },
    matchMode: {
      type: String,
      default: null
    },
    showOperator: {
      type: Boolean,
      default: true
    },
    showClearButton: {
      type: Boolean,
      default: true
    },
    showApplyButton: {
      type: Boolean,
      default: true
    },
    showMatchModes: {
      type: Boolean,
      default: true
    },
    showAddButton: {
      type: Boolean,
      default: true
    },
    matchModeOptions: {
      type: Array,
      default: null
    },
    maxConstraints: {
      type: Number,
      default: 2
    },
    filterElement: null,
    filterHeaderTemplate: null,
    filterFooterTemplate: null,
    filterClearTemplate: null,
    filterApplyTemplate: null,
    filters: {
      type: Object,
      default: null
    },
    filtersStore: {
      type: Object,
      default: null
    },
    filterMenuClass: {
      type: String,
      default: null
    },
    filterMenuStyle: {
      type: null,
      default: null
    },
    filterInputProps: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      overlayVisible: false,
      defaultMatchMode: null,
      defaultOperator: null
    };
  },
  overlay: null,
  selfClick: false,
  overlayEventListener: null,
  beforeUnmount() {
    if (this.overlayEventListener) {
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
    }
    if (this.overlay) {
      ZIndexUtils.clear(this.overlay);
      this.onOverlayHide();
    }
  },
  mounted() {
    if (this.filters && this.filters[this.field]) {
      let fieldFilters = this.filters[this.field];
      if (fieldFilters.operator) {
        this.defaultMatchMode = fieldFilters.constraints[0].matchMode;
        this.defaultOperator = fieldFilters.operator;
      } else {
        this.defaultMatchMode = this.filters[this.field].matchMode;
      }
    }
  },
  methods: {
    clearFilter() {
      let _filters = { ...this.filters };
      if (_filters[this.field].operator) {
        _filters[this.field].constraints.splice(1);
        _filters[this.field].operator = this.defaultOperator;
        _filters[this.field].constraints[0] = { value: null, matchMode: this.defaultMatchMode };
      } else {
        _filters[this.field].value = null;
        _filters[this.field].matchMode = this.defaultMatchMode;
      }
      this.$emit("filter-clear");
      this.$emit("filter-change", _filters);
      this.$emit("filter-apply");
      this.hide();
    },
    applyFilter() {
      this.$emit("apply-click", { field: this.field, constraints: this.filters[this.field] });
      this.$emit("filter-apply");
      this.hide();
    },
    hasFilter() {
      if (this.filtersStore) {
        let fieldFilter = this.filtersStore[this.field];
        if (fieldFilter) {
          if (fieldFilter.operator)
            return !this.isFilterBlank(fieldFilter.constraints[0].value);
          else
            return !this.isFilterBlank(fieldFilter.value);
        }
      }
      return false;
    },
    hasRowFilter() {
      return this.filters[this.field] && !this.isFilterBlank(this.filters[this.field].value);
    },
    isFilterBlank(filter) {
      if (filter !== null && filter !== void 0) {
        if (typeof filter === "string" && filter.trim().length == 0 || filter instanceof Array && filter.length == 0)
          return true;
        else
          return false;
      }
      return true;
    },
    toggleMenu() {
      this.overlayVisible = !this.overlayVisible;
    },
    onToggleButtonKeyDown(event2) {
      switch (event2.code) {
        case "Enter":
        case "Space":
          this.toggleMenu();
          event2.preventDefault();
          break;
        case "Escape":
          this.overlayVisible = false;
          break;
      }
    },
    onRowMatchModeChange(matchMode) {
      let _filters = { ...this.filters };
      _filters[this.field].matchMode = matchMode;
      this.$emit("matchmode-change", { field: this.field, matchMode });
      this.$emit("filter-change", _filters);
      this.$emit("filter-apply");
      this.hide();
    },
    onRowMatchModeKeyDown(event2) {
      let item = event2.target;
      switch (event2.code) {
        case "ArrowDown":
          var nextItem = this.findNextItem(item);
          if (nextItem) {
            item.removeAttribute("tabindex");
            nextItem.tabIndex = "0";
            nextItem.focus();
          }
          event2.preventDefault();
          break;
        case "ArrowUp":
          var prevItem = this.findPrevItem(item);
          if (prevItem) {
            item.removeAttribute("tabindex");
            prevItem.tabIndex = "0";
            prevItem.focus();
          }
          event2.preventDefault();
          break;
      }
    },
    isRowMatchModeSelected(matchMode) {
      return this.filters[this.field].matchMode === matchMode;
    },
    onOperatorChange(value) {
      let _filters = { ...this.filters };
      _filters[this.field].operator = value;
      this.$emit("filter-change", _filters);
      this.$emit("operator-change", { field: this.field, operator: value });
      if (!this.showApplyButton) {
        this.$emit("filter-apply");
      }
    },
    onMenuMatchModeChange(value, index) {
      let _filters = { ...this.filters };
      _filters[this.field].constraints[index].matchMode = value;
      this.$emit("matchmode-change", { field: this.field, matchMode: value, index });
      if (!this.showApplyButton) {
        this.$emit("filter-apply");
      }
    },
    addConstraint() {
      let _filters = { ...this.filters };
      let newConstraint = { value: null, matchMode: this.defaultMatchMode };
      _filters[this.field].constraints.push(newConstraint);
      this.$emit("constraint-add", { field: this.field, constraing: newConstraint });
      this.$emit("filter-change", _filters);
      if (!this.showApplyButton) {
        this.$emit("filter-apply");
      }
    },
    removeConstraint(index) {
      let _filters = { ...this.filters };
      let removedConstraint = _filters[this.field].constraints.splice(index, 1);
      this.$emit("constraint-remove", { field: this.field, constraing: removedConstraint });
      this.$emit("filter-change", _filters);
      if (!this.showApplyButton) {
        this.$emit("filter-apply");
      }
    },
    filterCallback() {
      this.$emit("filter-apply");
    },
    findNextItem(item) {
      let nextItem = item.nextElementSibling;
      if (nextItem)
        return DomHandler.hasClass(nextItem, "p-column-filter-separator") ? this.findNextItem(nextItem) : nextItem;
      else
        return item.parentElement.firstElementChild;
    },
    findPrevItem(item) {
      let prevItem = item.previousElementSibling;
      if (prevItem)
        return DomHandler.hasClass(prevItem, "p-column-filter-separator") ? this.findPrevItem(prevItem) : prevItem;
      else
        return item.parentElement.lastElementChild;
    },
    hide() {
      this.overlayVisible = false;
      DomHandler.focus(this.$refs.icon);
    },
    onContentClick(event2) {
      this.selfClick = true;
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event2,
        target: this.overlay
      });
    },
    onContentMouseDown() {
      this.selfClick = true;
    },
    onOverlayEnter(el) {
      if (this.filterMenuStyle) {
        DomHandler.applyStyle(this.overlay, this.filterMenuStyle);
      }
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
      DomHandler.absolutePosition(this.overlay, this.$refs.icon);
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.overlayEventListener = (e) => {
        if (!this.isOutsideClicked(e.target)) {
          this.selfClick = true;
        }
      };
      OverlayEventBus.on("overlay-click", this.overlayEventListener);
    },
    onOverlayLeave() {
      this.onOverlayHide();
    },
    onOverlayAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    onOverlayHide() {
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
      this.unbindScrollListener();
      this.overlay = null;
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
    },
    overlayRef(el) {
      this.overlay = el;
    },
    isOutsideClicked(target) {
      return !this.isTargetClicked(target) && this.overlay && !(this.overlay.isSameNode(target) || this.overlay.contains(target));
    },
    isTargetClicked(target) {
      return this.$refs.icon && (this.$refs.icon.isSameNode(target) || this.$refs.icon.contains(target));
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = (event2) => {
          if (this.overlayVisible && !this.selfClick && this.isOutsideClicked(event2.target)) {
            this.overlayVisible = false;
          }
          this.selfClick = false;
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
        this.selfClick = false;
      }
    },
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.icon, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = () => {
          if (this.overlayVisible && !DomHandler.isTouchDevice()) {
            this.hide();
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    }
  },
  computed: {
    containerClass() {
      return [
        "p-column-filter p-fluid",
        {
          "p-column-filter-row": this.display === "row",
          "p-column-filter-menu": this.display === "menu"
        }
      ];
    },
    overlayClass() {
      return [
        this.filterMenuClass,
        {
          "p-column-filter-overlay p-component p-fluid": true,
          "p-column-filter-overlay-menu": this.display === "menu",
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false
        }
      ];
    },
    showMenuButton() {
      return this.showMenu && (this.display === "row" ? this.type !== "boolean" : true);
    },
    overlayId() {
      return UniqueComponentId();
    },
    matchModes() {
      return this.matchModeOptions || this.$primevue.config.filterMatchModeOptions[this.type].map((key) => {
        return { label: this.$primevue.config.locale[key], value: key };
      });
    },
    isShowMatchModes() {
      return this.type !== "boolean" && this.showMatchModes && this.matchModes;
    },
    operatorOptions() {
      return [
        { label: this.$primevue.config.locale.matchAll, value: FilterOperator.AND },
        { label: this.$primevue.config.locale.matchAny, value: FilterOperator.OR }
      ];
    },
    noFilterLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.noFilter : void 0;
    },
    isShowOperator() {
      return this.showOperator && this.filters[this.field].operator;
    },
    operator() {
      return this.filters[this.field].operator;
    },
    fieldConstraints() {
      return this.filters[this.field].constraints || [this.filters[this.field]];
    },
    showRemoveIcon() {
      return this.fieldConstraints.length > 1;
    },
    removeRuleButtonLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.removeRule : void 0;
    },
    addRuleButtonLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.addRule : void 0;
    },
    isShowAddConstraint() {
      return this.showAddButton && this.filters[this.field].operator && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
    },
    clearButtonLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.clear : void 0;
    },
    applyButtonLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.apply : void 0;
    },
    filterMenuButtonAriaLabel() {
      return this.$primevue.config.locale ? this.overlayVisible ? this.$primevue.config.locale.showFilterMenu : this.$primevue.config.locale.hideFilterMenu : void 0;
    },
    filterOperatorAriaLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.filterOperator : void 0;
    },
    filterConstraintAriaLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.filterConstraint : void 0;
    }
  },
  components: {
    CFDropdown: script$g,
    CFButton: script$f,
    Portal: script$i
  },
  directives: {
    focustrap: FocusTrap
  }
};
const _hoisted_1$4 = ["aria-label", "aria-expanded", "aria-controls"];
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("span", { class: "pi pi-filter-icon pi-filter" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$4
];
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("span", { class: "pi pi-filter-slash" }, null, -1);
const _hoisted_5$1 = [
  _hoisted_4$2
];
const _hoisted_6$1 = ["id", "aria-modal"];
const _hoisted_7 = {
  key: 0,
  class: "p-column-filter-row-items"
};
const _hoisted_8 = ["onClick", "onKeydown", "tabindex"];
const _hoisted_9 = /* @__PURE__ */ createElementVNode("li", { class: "p-column-filter-separator" }, null, -1);
const _hoisted_10 = {
  key: 0,
  class: "p-column-filter-operator"
};
const _hoisted_11 = { class: "p-column-filter-constraints" };
const _hoisted_12 = {
  key: 1,
  class: "p-column-filter-add-rule"
};
const _hoisted_13 = { class: "p-column-filter-buttonbar" };
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CFDropdown = resolveComponent("CFDropdown");
  const _component_CFButton = resolveComponent("CFButton");
  const _component_Portal = resolveComponent("Portal");
  const _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass)
  }, [
    $props.display === "row" ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      class: "p-fluid p-column-filter-element"
    }, $props.filterInputProps), [
      (openBlock(), createBlock(resolveDynamicComponent($props.filterElement), {
        field: $props.field,
        filterModel: $props.filters[$props.field],
        filterCallback: $options.filterCallback
      }, null, 8, ["field", "filterModel", "filterCallback"]))
    ], 16)) : createCommentVNode("", true),
    $options.showMenuButton ? (openBlock(), createElementBlock("button", {
      key: 1,
      ref: "icon",
      type: "button",
      class: normalizeClass(["p-column-filter-menu-button p-link", { "p-column-filter-menu-button-open": $data.overlayVisible, "p-column-filter-menu-button-active": $options.hasFilter() }]),
      "aria-label": $options.filterMenuButtonAriaLabel,
      "aria-haspopup": "true",
      "aria-expanded": $data.overlayVisible,
      "aria-controls": $options.overlayId,
      onClick: _cache[0] || (_cache[0] = ($event) => $options.toggleMenu()),
      onKeydown: _cache[1] || (_cache[1] = ($event) => $options.onToggleButtonKeyDown($event))
    }, _hoisted_3$3, 42, _hoisted_1$4)) : createCommentVNode("", true),
    $props.showClearButton && $props.display === "row" ? (openBlock(), createElementBlock("button", {
      key: 2,
      class: normalizeClass([{ "p-hidden-space": !$options.hasRowFilter() }, "p-column-filter-clear-button p-link"]),
      type: "button",
      onClick: _cache[2] || (_cache[2] = ($event) => $options.clearFilter())
    }, _hoisted_5$1, 2)) : createCommentVNode("", true),
    createVNode(_component_Portal, null, {
      default: withCtx(() => [
        createVNode(Transition, {
          name: "p-connected-overlay",
          onEnter: $options.onOverlayEnter,
          onLeave: $options.onOverlayLeave,
          onAfterLeave: $options.onOverlayAfterLeave
        }, {
          default: withCtx(() => [
            $data.overlayVisible ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              ref: $options.overlayRef,
              id: $options.overlayId,
              "aria-modal": $data.overlayVisible,
              role: "dialog",
              class: normalizeClass($options.overlayClass),
              onKeydown: _cache[10] || (_cache[10] = withKeys((...args) => $options.hide && $options.hide(...args), ["escape"])),
              onClick: _cache[11] || (_cache[11] = (...args) => $options.onContentClick && $options.onContentClick(...args)),
              onMousedown: _cache[12] || (_cache[12] = (...args) => $options.onContentMouseDown && $options.onContentMouseDown(...args))
            }, [
              (openBlock(), createBlock(resolveDynamicComponent($props.filterHeaderTemplate), {
                field: $props.field,
                filterModel: $props.filters[$props.field],
                filterCallback: $options.filterCallback
              }, null, 8, ["field", "filterModel", "filterCallback"])),
              $props.display === "row" ? (openBlock(), createElementBlock("ul", _hoisted_7, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.matchModes, (matchMode, i) => {
                  return openBlock(), createElementBlock("li", {
                    key: matchMode.label,
                    class: normalizeClass(["p-column-filter-row-item", { "p-highlight": $options.isRowMatchModeSelected(matchMode.value) }]),
                    onClick: ($event) => $options.onRowMatchModeChange(matchMode.value),
                    onKeydown: [
                      _cache[3] || (_cache[3] = ($event) => $options.onRowMatchModeKeyDown($event)),
                      withKeys(withModifiers(($event) => $options.onRowMatchModeChange(matchMode.value), ["prevent"]), ["enter"])
                    ],
                    tabindex: i === 0 ? "0" : null
                  }, toDisplayString(matchMode.label), 43, _hoisted_8);
                }), 128)),
                _hoisted_9,
                createElementVNode("li", {
                  class: "p-column-filter-row-item",
                  onClick: _cache[4] || (_cache[4] = ($event) => $options.clearFilter()),
                  onKeydown: [
                    _cache[5] || (_cache[5] = ($event) => $options.onRowMatchModeKeyDown($event)),
                    _cache[6] || (_cache[6] = withKeys(($event) => _ctx.onRowClearItemClick(), ["enter"]))
                  ]
                }, toDisplayString($options.noFilterLabel), 33)
              ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                $options.isShowOperator ? (openBlock(), createElementBlock("div", _hoisted_10, [
                  createVNode(_component_CFDropdown, {
                    options: $options.operatorOptions,
                    modelValue: $options.operator,
                    "aria-label": $options.filterOperatorAriaLabel,
                    class: "p-column-filter-operator-dropdown",
                    optionLabel: "label",
                    optionValue: "value",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $options.onOperatorChange($event))
                  }, null, 8, ["options", "modelValue", "aria-label"])
                ])) : createCommentVNode("", true),
                createElementVNode("div", _hoisted_11, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($options.fieldConstraints, (fieldConstraint, i) => {
                    return openBlock(), createElementBlock("div", {
                      key: i,
                      class: "p-column-filter-constraint"
                    }, [
                      $options.isShowMatchModes ? (openBlock(), createBlock(_component_CFDropdown, {
                        key: 0,
                        options: $options.matchModes,
                        modelValue: fieldConstraint.matchMode,
                        class: "p-column-filter-matchmode-dropdown",
                        optionLabel: "label",
                        optionValue: "value",
                        "aria-label": $options.filterConstraintAriaLabel,
                        "onUpdate:modelValue": ($event) => $options.onMenuMatchModeChange($event, i)
                      }, null, 8, ["options", "modelValue", "aria-label", "onUpdate:modelValue"])) : createCommentVNode("", true),
                      $props.display === "menu" ? (openBlock(), createBlock(resolveDynamicComponent($props.filterElement), {
                        key: 1,
                        field: $props.field,
                        filterModel: fieldConstraint,
                        filterCallback: $options.filterCallback
                      }, null, 8, ["field", "filterModel", "filterCallback"])) : createCommentVNode("", true),
                      createElementVNode("div", null, [
                        $options.showRemoveIcon ? (openBlock(), createBlock(_component_CFButton, {
                          key: 0,
                          type: "button",
                          icon: "pi pi-trash",
                          class: "p-column-filter-remove-button p-button-text p-button-danger p-button-sm",
                          onClick: ($event) => $options.removeConstraint(i),
                          label: $options.removeRuleButtonLabel
                        }, null, 8, ["onClick", "label"])) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ]),
                $options.isShowAddConstraint ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  createVNode(_component_CFButton, {
                    type: "button",
                    label: $options.addRuleButtonLabel,
                    icon: "pi pi-plus",
                    class: "p-column-filter-add-button p-button-text p-button-sm",
                    onClick: _cache[8] || (_cache[8] = ($event) => $options.addConstraint())
                  }, null, 8, ["label"])
                ])) : createCommentVNode("", true),
                createElementVNode("div", _hoisted_13, [
                  !$props.filterClearTemplate && $props.showClearButton ? (openBlock(), createBlock(_component_CFButton, {
                    key: 0,
                    type: "button",
                    class: "p-button-outlined p-button-sm",
                    label: $options.clearButtonLabel,
                    onClick: $options.clearFilter
                  }, null, 8, ["label", "onClick"])) : (openBlock(), createBlock(resolveDynamicComponent($props.filterClearTemplate), {
                    key: 1,
                    field: $props.field,
                    filterModel: $props.filters[$props.field],
                    filterCallback: $options.clearFilter
                  }, null, 8, ["field", "filterModel", "filterCallback"])),
                  $props.showApplyButton ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                    !$props.filterApplyTemplate ? (openBlock(), createBlock(_component_CFButton, {
                      key: 0,
                      type: "button",
                      class: "p-button-sm",
                      label: $options.applyButtonLabel,
                      onClick: _cache[9] || (_cache[9] = ($event) => $options.applyFilter())
                    }, null, 8, ["label"])) : (openBlock(), createBlock(resolveDynamicComponent($props.filterApplyTemplate), {
                      key: 1,
                      field: $props.field,
                      filterModel: $props.filters[$props.field],
                      filterCallback: $options.applyFilter
                    }, null, 8, ["field", "filterModel", "filterCallback"]))
                  ], 64)) : createCommentVNode("", true)
                ])
              ], 64)),
              (openBlock(), createBlock(resolveDynamicComponent($props.filterFooterTemplate), {
                field: $props.field,
                filterModel: $props.filters[$props.field],
                filterCallback: $options.filterCallback
              }, null, 8, ["field", "filterModel", "filterCallback"]))
            ], 42, _hoisted_6$1)), [
              [_directive_focustrap, { autoFocus: true }]
            ]) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["onEnter", "onLeave", "onAfterLeave"])
      ]),
      _: 1
    })
  ], 2);
}
script$4.render = render$4;
var script$3 = {
  name: "HeaderCheckbox",
  emits: ["change"],
  props: {
    checked: null,
    disabled: null
  },
  data() {
    return {
      focused: false
    };
  },
  methods: {
    onClick(event2) {
      if (!this.disabled) {
        this.$emit("change", {
          originalEvent: event2,
          checked: !this.checked
        });
        DomHandler.focus(this.$refs.input);
      }
    },
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    }
  },
  computed: {
    headerCheckboxAriaLabel() {
      return this.$primevue.config.locale.aria ? this.checked ? this.$primevue.config.locale.aria.selectAll : this.$primevue.config.locale.aria.unselectAll : void 0;
    }
  }
};
const _hoisted_1$3 = { class: "p-hidden-accessible" };
const _hoisted_2$3 = ["checked", "disabled", "tabindex", "aria-label"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["p-checkbox p-component", { "p-checkbox-focused": $data.focused, "p-disabled": $props.disabled }]),
    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClick && $options.onClick(...args)),
    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers((...args) => $options.onClick && $options.onClick(...args), ["prevent"]), ["space"]))
  }, [
    createElementVNode("div", _hoisted_1$3, [
      createElementVNode("input", {
        ref: "input",
        type: "checkbox",
        checked: $props.checked,
        disabled: $props.disabled,
        tabindex: $props.disabled ? null : "0",
        "aria-label": $options.headerCheckboxAriaLabel,
        onFocus: _cache[0] || (_cache[0] = ($event) => $options.onFocus($event)),
        onBlur: _cache[1] || (_cache[1] = ($event) => $options.onBlur($event))
      }, null, 40, _hoisted_2$3)
    ]),
    createElementVNode("div", {
      ref: "box",
      class: normalizeClass(["p-checkbox-box p-component", { "p-highlight": $props.checked, "p-disabled": $props.disabled, "p-focus": $data.focused }])
    }, [
      createElementVNode("span", {
        class: normalizeClass(["p-checkbox-icon", { "pi pi-check": $props.checked }])
      }, null, 2)
    ], 2)
  ], 34);
}
script$3.render = render$3;
var script$2 = {
  name: "HeaderCell",
  emits: [
    "column-click",
    "column-mousedown",
    "column-dragstart",
    "column-dragover",
    "column-dragleave",
    "column-drop",
    "column-resizestart",
    "checkbox-change",
    "filter-change",
    "filter-apply",
    "operator-change",
    "matchmode-change",
    "constraint-add",
    "constraint-remove",
    "filter-clear",
    "apply-click"
  ],
  props: {
    column: {
      type: Object,
      default: null
    },
    resizableColumns: {
      type: Boolean,
      default: false
    },
    groupRowsBy: {
      type: [Array, String, Function],
      default: null
    },
    sortMode: {
      type: String,
      default: "single"
    },
    groupRowSortField: {
      type: [String, Function],
      default: null
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    multiSortMeta: {
      type: Array,
      default: null
    },
    allRowsSelected: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    },
    filterDisplay: {
      type: String,
      default: null
    },
    filters: {
      type: Object,
      default: null
    },
    filtersStore: {
      type: Object,
      default: null
    },
    filterColumn: {
      type: Boolean,
      default: false
    },
    reorderableColumns: {
      type: Boolean,
      default: false
    },
    filterInputProps: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      styleObject: {}
    };
  },
  mounted() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  updated() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  methods: {
    columnProp(prop) {
      return ObjectUtils.getVNodeProp(this.column, prop);
    },
    onClick(event2) {
      this.$emit("column-click", { originalEvent: event2, column: this.column });
    },
    onKeyDown(event2) {
      if ((event2.code === "Enter" || event2.code === "Space") && event2.currentTarget.nodeName === "TH" && DomHandler.hasClass(event2.currentTarget, "p-sortable-column")) {
        this.$emit("column-click", { originalEvent: event2, column: this.column });
        event2.preventDefault();
      }
    },
    onMouseDown(event2) {
      this.$emit("column-mousedown", { originalEvent: event2, column: this.column });
    },
    onDragStart(event2) {
      this.$emit("column-dragstart", event2);
    },
    onDragOver(event2) {
      this.$emit("column-dragover", event2);
    },
    onDragLeave(event2) {
      this.$emit("column-dragleave", event2);
    },
    onDrop(event2) {
      this.$emit("column-drop", event2);
    },
    onResizeStart(event2) {
      this.$emit("column-resizestart", event2);
    },
    getMultiSortMetaIndex() {
      return this.multiSortMeta.findIndex((meta) => meta.field === this.columnProp("field") || meta.field === this.columnProp("sortField"));
    },
    getBadgeValue() {
      let index = this.getMultiSortMetaIndex();
      return this.groupRowsBy && this.groupRowsBy === this.groupRowSortField && index > -1 ? index : index + 1;
    },
    isMultiSorted() {
      return this.sortMode === "multiple" && this.columnProp("sortable") && this.getMultiSortMetaIndex() > -1;
    },
    isColumnSorted() {
      return this.sortMode === "single" ? this.sortField && (this.sortField === this.columnProp("field") || this.sortField === this.columnProp("sortField")) : this.isMultiSorted();
    },
    updateStickyPosition() {
      if (this.columnProp("frozen")) {
        let align = this.columnProp("alignFrozen");
        if (align === "right") {
          let right = 0;
          let next = this.$el.nextElementSibling;
          if (next) {
            right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
          }
          this.styleObject.right = right + "px";
        } else {
          let left = 0;
          let prev = this.$el.previousElementSibling;
          if (prev) {
            left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
          }
          this.styleObject.left = left + "px";
        }
        let filterRow = this.$el.parentElement.nextElementSibling;
        if (filterRow) {
          let index = DomHandler.index(this.$el);
          filterRow.children[index].style.left = this.styleObject.left;
          filterRow.children[index].style.right = this.styleObject.right;
        }
      }
    },
    onHeaderCheckboxChange(event2) {
      this.$emit("checkbox-change", event2);
    }
  },
  computed: {
    containerClass() {
      return [
        this.filterColumn ? this.columnProp("filterHeaderClass") : this.columnProp("headerClass"),
        this.columnProp("class"),
        {
          "p-sortable-column": this.columnProp("sortable"),
          "p-resizable-column": this.resizableColumns,
          "p-highlight": this.isColumnSorted(),
          "p-filter-column": this.filterColumn,
          "p-frozen-column": this.columnProp("frozen"),
          "p-reorderable-column": this.reorderableColumns
        }
      ];
    },
    containerStyle() {
      let headerStyle = this.filterColumn ? this.columnProp("filterHeaderStyle") : this.columnProp("headerStyle");
      let columnStyle = this.columnProp("style");
      return this.columnProp("frozen") ? [columnStyle, headerStyle, this.styleObject] : [columnStyle, headerStyle];
    },
    sortableColumnIcon() {
      let sorted = false;
      let sortOrder = null;
      if (this.sortMode === "single") {
        sorted = this.sortField && (this.sortField === this.columnProp("field") || this.sortField === this.columnProp("sortField"));
        sortOrder = sorted ? this.sortOrder : 0;
      } else if (this.sortMode === "multiple") {
        let metaIndex = this.getMultiSortMetaIndex();
        if (metaIndex > -1) {
          sorted = true;
          sortOrder = this.multiSortMeta[metaIndex].order;
        }
      }
      return [
        "p-sortable-column-icon pi pi-fw",
        {
          "pi-sort-alt": !sorted,
          "pi-sort-amount-up-alt": sorted && sortOrder > 0,
          "pi-sort-amount-down": sorted && sortOrder < 0
        }
      ];
    },
    ariaSort() {
      if (this.columnProp("sortable")) {
        const sortIcon = this.sortableColumnIcon;
        if (sortIcon[1]["pi-sort-amount-down"])
          return "descending";
        else if (sortIcon[1]["pi-sort-amount-up-alt"])
          return "ascending";
        else
          return "none";
      } else {
        return null;
      }
    }
  },
  components: {
    DTHeaderCheckbox: script$3,
    DTColumnFilter: script$4
  }
};
const _hoisted_1$2 = ["tabindex", "colspan", "rowspan", "aria-sort"];
const _hoisted_2$2 = { class: "p-column-header-content" };
const _hoisted_3$2 = {
  key: 1,
  class: "p-column-title"
};
const _hoisted_4$1 = {
  key: 3,
  class: "p-sortable-column-badge"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTHeaderCheckbox = resolveComponent("DTHeaderCheckbox");
  const _component_DTColumnFilter = resolveComponent("DTColumnFilter");
  return openBlock(), createElementBlock("th", {
    style: normalizeStyle($options.containerStyle),
    class: normalizeClass($options.containerClass),
    tabindex: $options.columnProp("sortable") ? "0" : null,
    role: "columnheader",
    colspan: $options.columnProp("colspan"),
    rowspan: $options.columnProp("rowspan"),
    "aria-sort": $options.ariaSort,
    onClick: _cache[8] || (_cache[8] = (...args) => $options.onClick && $options.onClick(...args)),
    onKeydown: _cache[9] || (_cache[9] = (...args) => $options.onKeyDown && $options.onKeyDown(...args)),
    onMousedown: _cache[10] || (_cache[10] = (...args) => $options.onMouseDown && $options.onMouseDown(...args)),
    onDragstart: _cache[11] || (_cache[11] = (...args) => $options.onDragStart && $options.onDragStart(...args)),
    onDragover: _cache[12] || (_cache[12] = (...args) => $options.onDragOver && $options.onDragOver(...args)),
    onDragleave: _cache[13] || (_cache[13] = (...args) => $options.onDragLeave && $options.onDragLeave(...args)),
    onDrop: _cache[14] || (_cache[14] = (...args) => $options.onDrop && $options.onDrop(...args))
  }, [
    $props.resizableColumns && !$options.columnProp("frozen") ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: "p-column-resizer",
      onMousedown: _cache[0] || (_cache[0] = (...args) => $options.onResizeStart && $options.onResizeStart(...args))
    }, null, 32)) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_2$2, [
      $props.column.children && $props.column.children.header ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.header), {
        key: 0,
        column: $props.column
      }, null, 8, ["column"])) : createCommentVNode("", true),
      $options.columnProp("header") ? (openBlock(), createElementBlock("span", _hoisted_3$2, toDisplayString($options.columnProp("header")), 1)) : createCommentVNode("", true),
      $options.columnProp("sortable") ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass($options.sortableColumnIcon)
      }, null, 2)) : createCommentVNode("", true),
      $options.isMultiSorted() ? (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString($options.getBadgeValue()), 1)) : createCommentVNode("", true),
      $options.columnProp("selectionMode") === "multiple" && $props.filterDisplay !== "row" ? (openBlock(), createBlock(_component_DTHeaderCheckbox, {
        key: 4,
        checked: $props.allRowsSelected,
        onChange: $options.onHeaderCheckboxChange,
        disabled: $props.empty
      }, null, 8, ["checked", "onChange", "disabled"])) : createCommentVNode("", true),
      $props.filterDisplay === "menu" && $props.column.children && $props.column.children.filter ? (openBlock(), createBlock(_component_DTColumnFilter, {
        key: 5,
        field: $options.columnProp("filterField") || $options.columnProp("field"),
        type: $options.columnProp("dataType"),
        display: "menu",
        showMenu: $options.columnProp("showFilterMenu"),
        filterElement: $props.column.children && $props.column.children.filter,
        filterHeaderTemplate: $props.column.children && $props.column.children.filterheader,
        filterFooterTemplate: $props.column.children && $props.column.children.filterfooter,
        filterClearTemplate: $props.column.children && $props.column.children.filterclear,
        filterApplyTemplate: $props.column.children && $props.column.children.filterapply,
        filters: $props.filters,
        filtersStore: $props.filtersStore,
        filterInputProps: $props.filterInputProps,
        onFilterChange: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("filter-change", $event)),
        onFilterApply: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("filter-apply")),
        filterMenuStyle: $options.columnProp("filterMenuStyle"),
        filterMenuClass: $options.columnProp("filterMenuClass"),
        showOperator: $options.columnProp("showFilterOperator"),
        showClearButton: $options.columnProp("showClearButton"),
        showApplyButton: $options.columnProp("showApplyButton"),
        showMatchModes: $options.columnProp("showFilterMatchModes"),
        showAddButton: $options.columnProp("showAddButton"),
        matchModeOptions: $options.columnProp("filterMatchModeOptions"),
        maxConstraints: $options.columnProp("maxConstraints"),
        onOperatorChange: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("operator-change", $event)),
        onMatchmodeChange: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("matchmode-change", $event)),
        onConstraintAdd: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("constraint-add", $event)),
        onConstraintRemove: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("constraint-remove", $event)),
        onApplyClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("apply-click", $event))
      }, null, 8, ["field", "type", "showMenu", "filterElement", "filterHeaderTemplate", "filterFooterTemplate", "filterClearTemplate", "filterApplyTemplate", "filters", "filtersStore", "filterInputProps", "filterMenuStyle", "filterMenuClass", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "matchModeOptions", "maxConstraints"])) : createCommentVNode("", true)
    ])
  ], 46, _hoisted_1$2);
}
script$2.render = render$2;
var script$1$1 = {
  name: "TableHeader",
  emits: [
    "column-click",
    "column-mousedown",
    "column-dragstart",
    "column-dragover",
    "column-dragleave",
    "column-drop",
    "column-resizestart",
    "checkbox-change",
    "filter-change",
    "filter-apply",
    "operator-change",
    "matchmode-change",
    "constraint-add",
    "constraint-remove",
    "filter-clear",
    "apply-click"
  ],
  props: {
    columnGroup: {
      type: null,
      default: null
    },
    columns: {
      type: null,
      default: null
    },
    rowGroupMode: {
      type: String,
      default: null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      default: null
    },
    resizableColumns: {
      type: Boolean,
      default: false
    },
    allRowsSelected: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    },
    sortMode: {
      type: String,
      default: "single"
    },
    groupRowSortField: {
      type: [String, Function],
      default: null
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    multiSortMeta: {
      type: Array,
      default: null
    },
    filterDisplay: {
      type: String,
      default: null
    },
    filters: {
      type: Object,
      default: null
    },
    filtersStore: {
      type: Object,
      default: null
    },
    reorderableColumns: {
      type: Boolean,
      default: false
    },
    filterInputProps: {
      type: null,
      default: null
    }
  },
  methods: {
    columnProp(col, prop) {
      return ObjectUtils.getVNodeProp(col, prop);
    },
    getFilterColumnHeaderClass(column) {
      return [
        "p-filter-column",
        this.columnProp(column, "filterHeaderClass"),
        this.columnProp(column, "class"),
        {
          "p-frozen-column": this.columnProp(column, "frozen")
        }
      ];
    },
    getFilterColumnHeaderStyle(column) {
      return [this.columnProp(column, "filterHeaderStyle"), this.columnProp(column, "style")];
    },
    getHeaderRows() {
      let rows = [];
      let columnGroup = this.columnGroup;
      if (columnGroup.children && columnGroup.children.default) {
        for (let child of columnGroup.children.default()) {
          if (child.type.name === "Row") {
            rows.push(child);
          } else if (child.children && child.children instanceof Array) {
            rows = child.children;
          }
        }
        return rows;
      }
    },
    getHeaderColumns(row) {
      let cols = [];
      if (row.children && row.children.default) {
        row.children.default().forEach((child) => {
          if (child.children && child.children instanceof Array)
            cols = [...cols, ...child.children];
          else if (child.type.name === "Column")
            cols.push(child);
        });
        return cols;
      }
    }
  },
  components: {
    DTHeaderCell: script$2,
    DTHeaderCheckbox: script$3,
    DTColumnFilter: script$4
  }
};
const _hoisted_1$1 = {
  class: "p-datatable-thead",
  role: "rowgroup"
};
const _hoisted_2$1 = { role: "row" };
const _hoisted_3$1 = {
  key: 0,
  role: "row"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTHeaderCell = resolveComponent("DTHeaderCell");
  const _component_DTHeaderCheckbox = resolveComponent("DTHeaderCheckbox");
  const _component_DTColumnFilter = resolveComponent("DTColumnFilter");
  return openBlock(), createElementBlock("thead", _hoisted_1$1, [
    !$props.columnGroup ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createElementVNode("tr", _hoisted_2$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, (col, i) => {
          return openBlock(), createElementBlock(Fragment, {
            key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
          }, [
            !$options.columnProp(col, "hidden") && ($props.rowGroupMode !== "subheader" || $props.groupRowsBy !== $options.columnProp(col, "field")) ? (openBlock(), createBlock(_component_DTHeaderCell, {
              key: 0,
              column: col,
              onColumnClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("column-click", $event)),
              onColumnMousedown: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("column-mousedown", $event)),
              onColumnDragstart: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("column-dragstart", $event)),
              onColumnDragover: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("column-dragover", $event)),
              onColumnDragleave: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("column-dragleave", $event)),
              onColumnDrop: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("column-drop", $event)),
              groupRowsBy: $props.groupRowsBy,
              groupRowSortField: $props.groupRowSortField,
              reorderableColumns: $props.reorderableColumns,
              resizableColumns: $props.resizableColumns,
              onColumnResizestart: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("column-resizestart", $event)),
              sortMode: $props.sortMode,
              sortField: $props.sortField,
              sortOrder: $props.sortOrder,
              multiSortMeta: $props.multiSortMeta,
              allRowsSelected: $props.allRowsSelected,
              empty: $props.empty,
              onCheckboxChange: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("checkbox-change", $event)),
              filters: $props.filters,
              filterDisplay: $props.filterDisplay,
              filtersStore: $props.filtersStore,
              filterInputProps: $props.filterInputProps,
              onFilterChange: _cache[8] || (_cache[8] = ($event) => _ctx.$emit("filter-change", $event)),
              onFilterApply: _cache[9] || (_cache[9] = ($event) => _ctx.$emit("filter-apply")),
              onOperatorChange: _cache[10] || (_cache[10] = ($event) => _ctx.$emit("operator-change", $event)),
              onMatchmodeChange: _cache[11] || (_cache[11] = ($event) => _ctx.$emit("matchmode-change", $event)),
              onConstraintAdd: _cache[12] || (_cache[12] = ($event) => _ctx.$emit("constraint-add", $event)),
              onConstraintRemove: _cache[13] || (_cache[13] = ($event) => _ctx.$emit("constraint-remove", $event)),
              onApplyClick: _cache[14] || (_cache[14] = ($event) => _ctx.$emit("apply-click", $event))
            }, null, 8, ["column", "groupRowsBy", "groupRowSortField", "reorderableColumns", "resizableColumns", "sortMode", "sortField", "sortOrder", "multiSortMeta", "allRowsSelected", "empty", "filters", "filterDisplay", "filtersStore", "filterInputProps"])) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ]),
      $props.filterDisplay === "row" ? (openBlock(), createElementBlock("tr", _hoisted_3$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, (col, i) => {
          return openBlock(), createElementBlock(Fragment, {
            key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
          }, [
            !$options.columnProp(col, "hidden") && ($props.rowGroupMode !== "subheader" || $props.groupRowsBy !== $options.columnProp(col, "field")) ? (openBlock(), createElementBlock("th", {
              key: 0,
              style: normalizeStyle($options.getFilterColumnHeaderStyle(col)),
              class: normalizeClass($options.getFilterColumnHeaderClass(col))
            }, [
              $options.columnProp(col, "selectionMode") === "multiple" ? (openBlock(), createBlock(_component_DTHeaderCheckbox, {
                key: 0,
                checked: $props.allRowsSelected,
                disabled: $props.empty,
                onChange: _cache[15] || (_cache[15] = ($event) => _ctx.$emit("checkbox-change", $event))
              }, null, 8, ["checked", "disabled"])) : createCommentVNode("", true),
              col.children && col.children.filter ? (openBlock(), createBlock(_component_DTColumnFilter, {
                key: 1,
                field: $options.columnProp(col, "filterField") || $options.columnProp(col, "field"),
                type: $options.columnProp(col, "dataType"),
                display: "row",
                showMenu: $options.columnProp(col, "showFilterMenu"),
                filterElement: col.children && col.children.filter,
                filterHeaderTemplate: col.children && col.children.filterheader,
                filterFooterTemplate: col.children && col.children.filterfooter,
                filterClearTemplate: col.children && col.children.filterclear,
                filterApplyTemplate: col.children && col.children.filterapply,
                filters: $props.filters,
                filtersStore: $props.filtersStore,
                filterInputProps: $props.filterInputProps,
                onFilterChange: _cache[16] || (_cache[16] = ($event) => _ctx.$emit("filter-change", $event)),
                onFilterApply: _cache[17] || (_cache[17] = ($event) => _ctx.$emit("filter-apply")),
                filterMenuStyle: $options.columnProp(col, "filterMenuStyle"),
                filterMenuClass: $options.columnProp(col, "filterMenuClass"),
                showOperator: $options.columnProp(col, "showFilterOperator"),
                showClearButton: $options.columnProp(col, "showClearButton"),
                showApplyButton: $options.columnProp(col, "showApplyButton"),
                showMatchModes: $options.columnProp(col, "showFilterMatchModes"),
                showAddButton: $options.columnProp(col, "showAddButton"),
                matchModeOptions: $options.columnProp(col, "filterMatchModeOptions"),
                maxConstraints: $options.columnProp(col, "maxConstraints"),
                onOperatorChange: _cache[18] || (_cache[18] = ($event) => _ctx.$emit("operator-change", $event)),
                onMatchmodeChange: _cache[19] || (_cache[19] = ($event) => _ctx.$emit("matchmode-change", $event)),
                onConstraintAdd: _cache[20] || (_cache[20] = ($event) => _ctx.$emit("constraint-add", $event)),
                onConstraintRemove: _cache[21] || (_cache[21] = ($event) => _ctx.$emit("constraint-remove", $event)),
                onApplyClick: _cache[22] || (_cache[22] = ($event) => _ctx.$emit("apply-click", $event))
              }, null, 8, ["field", "type", "showMenu", "filterElement", "filterHeaderTemplate", "filterFooterTemplate", "filterClearTemplate", "filterApplyTemplate", "filters", "filtersStore", "filterInputProps", "filterMenuStyle", "filterMenuClass", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "matchModeOptions", "maxConstraints"])) : createCommentVNode("", true)
            ], 6)) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true)
    ], 64)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($options.getHeaderRows(), (row, i) => {
      return openBlock(), createElementBlock("tr", {
        key: i,
        role: "row"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.getHeaderColumns(row), (col, j) => {
          return openBlock(), createElementBlock(Fragment, {
            key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || j
          }, [
            !$options.columnProp(col, "hidden") && ($props.rowGroupMode !== "subheader" || $props.groupRowsBy !== $options.columnProp(col, "field")) && typeof col.children !== "string" ? (openBlock(), createBlock(_component_DTHeaderCell, {
              key: 0,
              column: col,
              onColumnClick: _cache[23] || (_cache[23] = ($event) => _ctx.$emit("column-click", $event)),
              onColumnMousedown: _cache[24] || (_cache[24] = ($event) => _ctx.$emit("column-mousedown", $event)),
              groupRowsBy: $props.groupRowsBy,
              groupRowSortField: $props.groupRowSortField,
              sortMode: $props.sortMode,
              sortField: $props.sortField,
              sortOrder: $props.sortOrder,
              multiSortMeta: $props.multiSortMeta,
              allRowsSelected: $props.allRowsSelected,
              empty: $props.empty,
              onCheckboxChange: _cache[25] || (_cache[25] = ($event) => _ctx.$emit("checkbox-change", $event)),
              filters: $props.filters,
              filterDisplay: $props.filterDisplay,
              filtersStore: $props.filtersStore,
              onFilterChange: _cache[26] || (_cache[26] = ($event) => _ctx.$emit("filter-change", $event)),
              onFilterApply: _cache[27] || (_cache[27] = ($event) => _ctx.$emit("filter-apply")),
              onOperatorChange: _cache[28] || (_cache[28] = ($event) => _ctx.$emit("operator-change", $event)),
              onMatchmodeChange: _cache[29] || (_cache[29] = ($event) => _ctx.$emit("matchmode-change", $event)),
              onConstraintAdd: _cache[30] || (_cache[30] = ($event) => _ctx.$emit("constraint-add", $event)),
              onConstraintRemove: _cache[31] || (_cache[31] = ($event) => _ctx.$emit("constraint-remove", $event)),
              onApplyClick: _cache[32] || (_cache[32] = ($event) => _ctx.$emit("apply-click", $event))
            }, null, 8, ["column", "groupRowsBy", "groupRowSortField", "sortMode", "sortField", "sortOrder", "multiSortMeta", "allRowsSelected", "empty", "filters", "filterDisplay", "filtersStore"])) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ]);
    }), 128))
  ]);
}
script$1$1.render = render$1;
var script$b = {
  name: "DataTable",
  emits: [
    "value-change",
    "update:first",
    "update:rows",
    "page",
    "update:sortField",
    "update:sortOrder",
    "update:multiSortMeta",
    "sort",
    "filter",
    "row-click",
    "row-dblclick",
    "update:selection",
    "row-select",
    "row-unselect",
    "update:contextMenuSelection",
    "row-contextmenu",
    "row-unselect-all",
    "row-select-all",
    "select-all-change",
    "column-resize-end",
    "column-reorder",
    "row-reorder",
    "update:expandedRows",
    "row-collapse",
    "row-expand",
    "update:expandedRowGroups",
    "rowgroup-collapse",
    "rowgroup-expand",
    "update:filters",
    "state-restore",
    "state-save",
    "cell-edit-init",
    "cell-edit-complete",
    "cell-edit-cancel",
    "update:editingRows",
    "row-edit-init",
    "row-edit-save",
    "row-edit-cancel"
  ],
  props: {
    value: {
      type: Array,
      default: null
    },
    dataKey: {
      type: [String, Function],
      default: null
    },
    rows: {
      type: Number,
      default: 0
    },
    first: {
      type: Number,
      default: 0
    },
    totalRecords: {
      type: Number,
      default: 0
    },
    paginator: {
      type: Boolean,
      default: false
    },
    paginatorPosition: {
      type: String,
      default: "bottom"
    },
    alwaysShowPaginator: {
      type: Boolean,
      default: true
    },
    paginatorTemplate: {
      type: [Object, String],
      default: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    },
    pageLinkSize: {
      type: Number,
      default: 5
    },
    rowsPerPageOptions: {
      type: Array,
      default: null
    },
    currentPageReportTemplate: {
      type: String,
      default: "({currentPage} of {totalPages})"
    },
    lazy: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: "pi pi-spinner"
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    defaultSortOrder: {
      type: Number,
      default: 1
    },
    multiSortMeta: {
      type: Array,
      default: null
    },
    sortMode: {
      type: String,
      default: "single"
    },
    removableSort: {
      type: Boolean,
      default: false
    },
    filters: {
      type: Object,
      default: null
    },
    filterDisplay: {
      type: String,
      default: null
    },
    globalFilterFields: {
      type: Array,
      default: null
    },
    filterLocale: {
      type: String,
      default: void 0
    },
    selection: {
      type: [Array, Object],
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    compareSelectionBy: {
      type: String,
      default: "deepEquals"
    },
    metaKeySelection: {
      type: Boolean,
      default: true
    },
    contextMenu: {
      type: Boolean,
      default: false
    },
    contextMenuSelection: {
      type: Object,
      default: null
    },
    selectAll: {
      type: Boolean,
      default: null
    },
    rowHover: {
      type: Boolean,
      default: false
    },
    csvSeparator: {
      type: String,
      default: ","
    },
    exportFilename: {
      type: String,
      default: "download"
    },
    exportFunction: {
      type: Function,
      default: null
    },
    autoLayout: {
      type: Boolean,
      default: false
    },
    resizableColumns: {
      type: Boolean,
      default: false
    },
    columnResizeMode: {
      type: String,
      default: "fit"
    },
    reorderableColumns: {
      type: Boolean,
      default: false
    },
    expandedRows: {
      type: Array,
      default: null
    },
    expandedRowIcon: {
      type: String,
      default: "pi-chevron-down"
    },
    collapsedRowIcon: {
      type: String,
      default: "pi-chevron-right"
    },
    rowGroupMode: {
      type: String,
      default: null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      default: null
    },
    expandableRowGroups: {
      type: Boolean,
      default: false
    },
    expandedRowGroups: {
      type: Array,
      default: null
    },
    stateStorage: {
      type: String,
      default: "session"
    },
    stateKey: {
      type: String,
      default: null
    },
    editMode: {
      type: String,
      default: null
    },
    editingRows: {
      type: Array,
      default: null
    },
    rowClass: {
      type: null,
      default: null
    },
    rowStyle: {
      type: null,
      default: null
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    scrollDirection: {
      type: String,
      default: "vertical"
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    scrollHeight: {
      type: String,
      default: null
    },
    frozenValue: {
      type: Array,
      default: null
    },
    responsiveLayout: {
      type: String,
      default: "stack"
    },
    breakpoint: {
      type: String,
      default: "960px"
    },
    showGridlines: {
      type: Boolean,
      default: false
    },
    stripedRows: {
      type: Boolean,
      default: false
    },
    tableStyle: {
      type: null,
      default: null
    },
    tableClass: {
      type: String,
      default: null
    },
    tableProps: {
      type: null,
      default: null
    },
    filterInputProps: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      d_first: this.first,
      d_rows: this.rows,
      d_sortField: this.sortField,
      d_sortOrder: this.sortOrder,
      d_multiSortMeta: this.multiSortMeta ? [...this.multiSortMeta] : [],
      d_groupRowsSortMeta: null,
      d_selectionKeys: null,
      d_expandedRowKeys: null,
      d_columnOrder: null,
      d_editingRowKeys: null,
      d_editingMeta: {},
      d_filters: this.cloneFilters(this.filters)
    };
  },
  rowTouched: false,
  anchorRowIndex: null,
  rangeRowIndex: null,
  documentColumnResizeListener: null,
  documentColumnResizeEndListener: null,
  lastResizeHelperX: null,
  resizeColumnElement: null,
  columnResizing: false,
  colReorderIconWidth: null,
  colReorderIconHeight: null,
  draggedColumn: null,
  draggedRowIndex: null,
  droppedRowIndex: null,
  rowDragging: null,
  columnWidthsState: null,
  tableWidthState: null,
  columnWidthsRestored: false,
  watch: {
    first(newValue) {
      this.d_first = newValue;
    },
    rows(newValue) {
      this.d_rows = newValue;
    },
    sortField(newValue) {
      this.d_sortField = newValue;
    },
    sortOrder(newValue) {
      this.d_sortOrder = newValue;
    },
    multiSortMeta(newValue) {
      this.d_multiSortMeta = newValue;
    },
    selection: {
      immediate: true,
      handler(newValue) {
        if (this.dataKey) {
          this.updateSelectionKeys(newValue);
        }
      }
    },
    expandedRows(newValue) {
      if (this.dataKey) {
        this.updateExpandedRowKeys(newValue);
      }
    },
    editingRows(newValue) {
      if (this.dataKey) {
        this.updateEditingRowKeys(newValue);
      }
    },
    filters: {
      deep: true,
      handler: function(newValue) {
        this.d_filters = this.cloneFilters(newValue);
      }
    }
  },
  beforeMount() {
    if (this.isStateful()) {
      this.restoreState();
    }
  },
  mounted() {
    this.$el.setAttribute(this.attributeSelector, "");
    if (this.responsiveLayout === "stack" && !this.scrollable) {
      this.createResponsiveStyle();
    }
    if (this.isStateful() && this.resizableColumns) {
      this.restoreColumnWidths();
    }
    if (this.editMode === "row" && this.dataKey && !this.d_editingRowKeys) {
      this.updateEditingRowKeys(this.editingRows);
    }
  },
  beforeUnmount() {
    this.unbindColumnResizeEvents();
    this.destroyStyleElement();
    this.destroyResponsiveStyle();
  },
  updated() {
    if (this.isStateful()) {
      this.saveState();
    }
    if (this.editMode === "row" && this.dataKey && !this.d_editingRowKeys) {
      this.updateEditingRowKeys(this.editingRows);
    }
  },
  methods: {
    columnProp(col, prop) {
      return ObjectUtils.getVNodeProp(col, prop);
    },
    onPage(event2) {
      this.clearEditingMetaData();
      this.d_first = event2.first;
      this.d_rows = event2.rows;
      let pageEvent = this.createLazyLoadEvent(event2);
      pageEvent.pageCount = event2.pageCount;
      pageEvent.page = event2.page;
      this.$emit("update:first", this.d_first);
      this.$emit("update:rows", this.d_rows);
      this.$emit("page", pageEvent);
      this.$emit("value-change", this.processedData);
    },
    onColumnHeaderClick(e) {
      const event2 = e.originalEvent;
      const column = e.column;
      if (this.columnProp(column, "sortable")) {
        const targetNode = event2.target;
        const columnField = this.columnProp(column, "sortField") || this.columnProp(column, "field");
        if (DomHandler.hasClass(targetNode, "p-sortable-column") || DomHandler.hasClass(targetNode, "p-column-title") || DomHandler.hasClass(targetNode, "p-column-header-content") || DomHandler.hasClass(targetNode, "p-sortable-column-icon") || DomHandler.hasClass(targetNode.parentElement, "p-sortable-column-icon")) {
          DomHandler.clearSelection();
          if (this.sortMode === "single") {
            if (this.d_sortField === columnField) {
              if (this.removableSort && this.d_sortOrder * -1 === this.defaultSortOrder) {
                this.d_sortOrder = null;
                this.d_sortField = null;
              } else {
                this.d_sortOrder = this.d_sortOrder * -1;
              }
            } else {
              this.d_sortOrder = this.defaultSortOrder;
              this.d_sortField = columnField;
            }
            this.$emit("update:sortField", this.d_sortField);
            this.$emit("update:sortOrder", this.d_sortOrder);
            this.resetPage();
          } else if (this.sortMode === "multiple") {
            let metaKey = event2.metaKey || event2.ctrlKey;
            if (!metaKey) {
              this.d_multiSortMeta = this.d_multiSortMeta.filter((meta) => meta.field === columnField);
            }
            this.addMultiSortField(columnField);
            this.$emit("update:multiSortMeta", this.d_multiSortMeta);
          }
          this.$emit("sort", this.createLazyLoadEvent(event2));
          this.$emit("value-change", this.processedData);
        }
      }
    },
    sortSingle(value) {
      this.clearEditingMetaData();
      if (this.groupRowsBy && this.groupRowsBy === this.sortField) {
        this.d_multiSortMeta = [
          { field: this.sortField, order: this.sortOrder || this.defaultSortOrder },
          { field: this.d_sortField, order: this.d_sortOrder }
        ];
        return this.sortMultiple(value);
      }
      let data = [...value];
      data.sort((data1, data2) => {
        let value1 = ObjectUtils.resolveFieldData(data1, this.d_sortField);
        let value2 = ObjectUtils.resolveFieldData(data2, this.d_sortField);
        let result = null;
        if (value1 == null && value2 != null)
          result = -1;
        else if (value1 != null && value2 == null)
          result = 1;
        else if (value1 == null && value2 == null)
          result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string")
          result = value1.localeCompare(value2, void 0, { numeric: true });
        else
          result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return this.d_sortOrder * result;
      });
      return data;
    },
    sortMultiple(value) {
      this.clearEditingMetaData();
      if (this.groupRowsBy && (this.d_groupRowsSortMeta || this.d_multiSortMeta.length && this.groupRowsBy === this.d_multiSortMeta[0].field)) {
        const firstSortMeta = this.d_multiSortMeta[0];
        !this.d_groupRowsSortMeta && (this.d_groupRowsSortMeta = firstSortMeta);
        if (firstSortMeta.field !== this.d_groupRowsSortMeta.field) {
          this.d_multiSortMeta = [this.d_groupRowsSortMeta, ...this.d_multiSortMeta];
        }
      }
      let data = [...value];
      data.sort((data1, data2) => {
        return this.multisortField(data1, data2, 0);
      });
      return data;
    },
    multisortField(data1, data2, index) {
      const value1 = ObjectUtils.resolveFieldData(data1, this.d_multiSortMeta[index].field);
      const value2 = ObjectUtils.resolveFieldData(data2, this.d_multiSortMeta[index].field);
      let result = null;
      if (typeof value1 === "string" || value1 instanceof String) {
        if (value1.localeCompare && value1 !== value2) {
          return this.d_multiSortMeta[index].order * value1.localeCompare(value2, void 0, { numeric: true });
        }
      } else {
        result = value1 < value2 ? -1 : 1;
      }
      if (value1 === value2) {
        return this.d_multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, index + 1) : 0;
      }
      return this.d_multiSortMeta[index].order * result;
    },
    addMultiSortField(field) {
      let index = this.d_multiSortMeta.findIndex((meta) => meta.field === field);
      if (index >= 0) {
        if (this.removableSort && this.d_multiSortMeta[index].order * -1 === this.defaultSortOrder)
          this.d_multiSortMeta.splice(index, 1);
        else
          this.d_multiSortMeta[index] = { field, order: this.d_multiSortMeta[index].order * -1 };
      } else {
        this.d_multiSortMeta.push({ field, order: this.defaultSortOrder });
      }
      this.d_multiSortMeta = [...this.d_multiSortMeta];
    },
    filter(data) {
      if (!data) {
        return;
      }
      this.clearEditingMetaData();
      let globalFilterFieldsArray;
      if (this.filters["global"]) {
        globalFilterFieldsArray = this.globalFilterFields || this.columns.map((col) => this.columnProp(col, "filterField") || this.columnProp(col, "field"));
      }
      let filteredValue = [];
      for (let i = 0; i < data.length; i++) {
        let localMatch = true;
        let globalMatch = false;
        let localFiltered = false;
        for (let prop in this.filters) {
          if (Object.prototype.hasOwnProperty.call(this.filters, prop) && prop !== "global") {
            localFiltered = true;
            let filterField = prop;
            let filterMeta = this.filters[filterField];
            if (filterMeta.operator) {
              for (let filterConstraint of filterMeta.constraints) {
                localMatch = this.executeLocalFilter(filterField, data[i], filterConstraint);
                if (filterMeta.operator === FilterOperator.OR && localMatch || filterMeta.operator === FilterOperator.AND && !localMatch) {
                  break;
                }
              }
            } else {
              localMatch = this.executeLocalFilter(filterField, data[i], filterMeta);
            }
            if (!localMatch) {
              break;
            }
          }
        }
        if (this.filters["global"] && !globalMatch && globalFilterFieldsArray) {
          for (let j = 0; j < globalFilterFieldsArray.length; j++) {
            let globalFilterField = globalFilterFieldsArray[j];
            globalMatch = FilterService.filters[this.filters["global"].matchMode || FilterMatchMode.CONTAINS](ObjectUtils.resolveFieldData(data[i], globalFilterField), this.filters["global"].value, this.filterLocale);
            if (globalMatch) {
              break;
            }
          }
        }
        let matches;
        if (this.filters["global"]) {
          matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
        } else {
          matches = localFiltered && localMatch;
        }
        if (matches) {
          filteredValue.push(data[i]);
        }
      }
      if (filteredValue.length === this.value.length) {
        filteredValue = data;
      }
      let filterEvent = this.createLazyLoadEvent();
      filterEvent.filteredValue = filteredValue;
      this.$emit("filter", filterEvent);
      this.$emit("value-change", filteredValue);
      return filteredValue;
    },
    executeLocalFilter(field, rowData, filterMeta) {
      let filterValue = filterMeta.value;
      let filterMatchMode = filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
      let dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
      let filterConstraint = FilterService.filters[filterMatchMode];
      return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
    },
    onRowClick(e) {
      const event2 = e.originalEvent;
      const index = e.index;
      const body = this.$refs.bodyRef && this.$refs.bodyRef.$el;
      const focusedItem = DomHandler.findSingle(body, 'tr.p-selectable-row[tabindex="0"]');
      if (DomHandler.isClickable(event2.target)) {
        return;
      }
      this.$emit("row-click", e);
      if (this.selectionMode) {
        const rowData = e.data;
        const rowIndex = this.d_first + e.index;
        if (this.isMultipleSelectionMode() && event2.shiftKey && this.anchorRowIndex != null) {
          DomHandler.clearSelection();
          this.rangeRowIndex = rowIndex;
          this.selectRange(event2);
        } else {
          const selected = this.isSelected(rowData);
          const metaSelection = this.rowTouched ? false : this.metaKeySelection;
          this.anchorRowIndex = rowIndex;
          this.rangeRowIndex = rowIndex;
          if (metaSelection) {
            let metaKey = event2.metaKey || event2.ctrlKey;
            if (selected && metaKey) {
              if (this.isSingleSelectionMode()) {
                this.$emit("update:selection", null);
              } else {
                const selectionIndex = this.findIndexInSelection(rowData);
                const _selection = this.selection.filter((val, i) => i != selectionIndex);
                this.$emit("update:selection", _selection);
              }
              this.$emit("row-unselect", { originalEvent: event2, data: rowData, index: rowIndex, type: "row" });
            } else {
              if (this.isSingleSelectionMode()) {
                this.$emit("update:selection", rowData);
              } else if (this.isMultipleSelectionMode()) {
                let _selection = metaKey ? this.selection || [] : [];
                _selection = [..._selection, rowData];
                this.$emit("update:selection", _selection);
              }
              this.$emit("row-select", { originalEvent: event2, data: rowData, index: rowIndex, type: "row" });
            }
          } else {
            if (this.selectionMode === "single") {
              if (selected) {
                this.$emit("update:selection", null);
                this.$emit("row-unselect", { originalEvent: event2, data: rowData, index: rowIndex, type: "row" });
              } else {
                this.$emit("update:selection", rowData);
                this.$emit("row-select", { originalEvent: event2, data: rowData, index: rowIndex, type: "row" });
              }
            } else if (this.selectionMode === "multiple") {
              if (selected) {
                const selectionIndex = this.findIndexInSelection(rowData);
                const _selection = this.selection.filter((val, i) => i != selectionIndex);
                this.$emit("update:selection", _selection);
                this.$emit("row-unselect", { originalEvent: event2, data: rowData, index: rowIndex, type: "row" });
              } else {
                const _selection = this.selection ? [...this.selection, rowData] : [rowData];
                this.$emit("update:selection", _selection);
                this.$emit("row-select", { originalEvent: event2, data: rowData, index: rowIndex, type: "row" });
              }
            }
          }
        }
      }
      this.rowTouched = false;
      if (focusedItem) {
        focusedItem.tabIndex = "-1";
        DomHandler.find(body, "tr.p-selectable-row")[index].tabIndex = "0";
      }
    },
    onRowDblClick(e) {
      const event2 = e.originalEvent;
      if (DomHandler.isClickable(event2.target)) {
        return;
      }
      this.$emit("row-dblclick", e);
    },
    onRowRightClick(event2) {
      DomHandler.clearSelection();
      event2.originalEvent.target.focus();
      this.$emit("update:contextMenuSelection", event2.data);
      this.$emit("row-contextmenu", event2);
    },
    onRowTouchEnd() {
      this.rowTouched = true;
    },
    onRowKeyDown(e, slotProps) {
      const event2 = e.originalEvent;
      const rowData = e.data;
      const rowIndex = e.index;
      const metaKey = event2.metaKey || event2.ctrlKey;
      if (this.selectionMode) {
        const row = event2.target;
        switch (event2.code) {
          case "ArrowDown":
            this.onArrowDownKey(event2, row, rowIndex, slotProps);
            break;
          case "ArrowUp":
            this.onArrowUpKey(event2, row, rowIndex, slotProps);
            break;
          case "Home":
            this.onHomeKey(event2, row, rowIndex, slotProps);
            break;
          case "End":
            this.onEndKey(event2, row, rowIndex, slotProps);
            break;
          case "Enter":
            this.onEnterKey(event2, rowData, rowIndex);
            break;
          case "Space":
            this.onSpaceKey(event2, rowData, rowIndex, slotProps);
            break;
          case "Tab":
            this.onTabKey(event2, rowIndex);
            break;
          default:
            if (event2.code === "KeyA" && metaKey) {
              const data = this.dataToRender(slotProps.rows);
              this.$emit("update:selection", data);
            }
            break;
        }
      }
    },
    onArrowDownKey(event2, row, rowIndex, slotProps) {
      const nextRow = this.findNextSelectableRow(row);
      nextRow && this.focusRowChange(row, nextRow);
      if (event2.shiftKey) {
        const data = this.dataToRender(slotProps.rows);
        const nextRowIndex = rowIndex + 1 >= data.length ? data.length - 1 : rowIndex + 1;
        this.onRowClick({ originalEvent: event2, data: data[nextRowIndex], index: nextRowIndex });
      }
      event2.preventDefault();
    },
    onArrowUpKey(event2, row, rowIndex, slotProps) {
      const prevRow = this.findPrevSelectableRow(row);
      prevRow && this.focusRowChange(row, prevRow);
      if (event2.shiftKey) {
        const data = this.dataToRender(slotProps.rows);
        const prevRowIndex = rowIndex - 1 <= 0 ? 0 : rowIndex - 1;
        this.onRowClick({ originalEvent: event2, data: data[prevRowIndex], index: prevRowIndex });
      }
      event2.preventDefault();
    },
    onHomeKey(event2, row, rowIndex, slotProps) {
      const firstRow = this.findFirstSelectableRow();
      firstRow && this.focusRowChange(row, firstRow);
      if (event2.ctrlKey && event2.shiftKey) {
        const data = this.dataToRender(slotProps.rows);
        this.$emit("update:selection", data.slice(0, rowIndex + 1));
      }
      event2.preventDefault();
    },
    onEndKey(event2, row, rowIndex, slotProps) {
      const lastRow = this.findLastSelectableRow();
      lastRow && this.focusRowChange(row, lastRow);
      if (event2.ctrlKey && event2.shiftKey) {
        const data = this.dataToRender(slotProps.rows);
        this.$emit("update:selection", data.slice(rowIndex, data.length));
      }
      event2.preventDefault();
    },
    onEnterKey(event2, rowData, rowIndex) {
      this.onRowClick({ originalEvent: event2, data: rowData, index: rowIndex });
      event2.preventDefault();
    },
    onSpaceKey(event2, rowData, rowIndex, slotProps) {
      this.onEnterKey(event2, rowData, rowIndex);
      if (event2.shiftKey && this.selection !== null) {
        const data = this.dataToRender(slotProps.rows);
        let index;
        if (this.selection.length > 0) {
          let firstSelectedRowIndex, lastSelectedRowIndex;
          firstSelectedRowIndex = ObjectUtils.findIndexInList(this.selection[0], data);
          lastSelectedRowIndex = ObjectUtils.findIndexInList(this.selection[this.selection.length - 1], data);
          index = rowIndex <= firstSelectedRowIndex ? lastSelectedRowIndex : firstSelectedRowIndex;
        } else {
          index = ObjectUtils.findIndexInList(this.selection, data);
        }
        const _selection = index !== rowIndex ? data.slice(Math.min(index, rowIndex), Math.max(index, rowIndex) + 1) : rowData;
        this.$emit("update:selection", _selection);
      }
    },
    onTabKey(event2, rowIndex) {
      const body = this.$refs.bodyRef && this.$refs.bodyRef.$el;
      const rows = DomHandler.find(body, "tr.p-selectable-row");
      if (event2.code === "Tab" && rows && rows.length > 0) {
        const firstSelectedRow = DomHandler.findSingle(body, "tr.p-highlight");
        const focusedItem = DomHandler.findSingle(body, 'tr.p-selectable-row[tabindex="0"]');
        if (firstSelectedRow) {
          firstSelectedRow.tabIndex = "0";
          focusedItem !== firstSelectedRow && (focusedItem.tabIndex = "-1");
        } else {
          rows[0].tabIndex = "0";
          focusedItem !== rows[0] && (rows[rowIndex].tabIndex = "-1");
        }
      }
    },
    findNextSelectableRow(row) {
      let nextRow = row.nextElementSibling;
      if (nextRow) {
        if (DomHandler.hasClass(nextRow, "p-selectable-row"))
          return nextRow;
        else
          return this.findNextSelectableRow(nextRow);
      } else {
        return null;
      }
    },
    findPrevSelectableRow(row) {
      let prevRow = row.previousElementSibling;
      if (prevRow) {
        if (DomHandler.hasClass(prevRow, "p-selectable-row"))
          return prevRow;
        else
          return this.findPrevSelectableRow(prevRow);
      } else {
        return null;
      }
    },
    findFirstSelectableRow() {
      const firstRow = DomHandler.findSingle(this.$refs.table, ".p-selectable-row");
      return firstRow;
    },
    findLastSelectableRow() {
      const rows = DomHandler.find(this.$refs.table, ".p-selectable-row");
      return rows ? rows[rows.length - 1] : null;
    },
    focusRowChange(firstFocusableRow, currentFocusedRow) {
      firstFocusableRow.tabIndex = "-1";
      currentFocusedRow.tabIndex = "0";
      DomHandler.focus(currentFocusedRow);
    },
    toggleRowWithRadio(event2) {
      const rowData = event2.data;
      if (this.isSelected(rowData)) {
        this.$emit("update:selection", null);
        this.$emit("row-unselect", { originalEvent: event2.originalEvent, data: rowData, index: event2.index, type: "radiobutton" });
      } else {
        this.$emit("update:selection", rowData);
        this.$emit("row-select", { originalEvent: event2.originalEvent, data: rowData, index: event2.index, type: "radiobutton" });
      }
    },
    toggleRowWithCheckbox(event2) {
      const rowData = event2.data;
      if (this.isSelected(rowData)) {
        const selectionIndex = this.findIndexInSelection(rowData);
        const _selection = this.selection.filter((val, i) => i != selectionIndex);
        this.$emit("update:selection", _selection);
        this.$emit("row-unselect", { originalEvent: event2.originalEvent, data: rowData, index: event2.index, type: "checkbox" });
      } else {
        let _selection = this.selection ? [...this.selection] : [];
        _selection = [..._selection, rowData];
        this.$emit("update:selection", _selection);
        this.$emit("row-select", { originalEvent: event2.originalEvent, data: rowData, index: event2.index, type: "checkbox" });
      }
    },
    toggleRowsWithCheckbox(event2) {
      if (this.selectAll !== null) {
        this.$emit("select-all-change", event2);
      } else {
        const { originalEvent, checked } = event2;
        let _selection = [];
        if (checked) {
          _selection = this.frozenValue ? [...this.frozenValue, ...this.processedData] : this.processedData;
          this.$emit("row-select-all", { originalEvent, data: _selection });
        } else {
          this.$emit("row-unselect-all", { originalEvent });
        }
        this.$emit("update:selection", _selection);
      }
    },
    isSingleSelectionMode() {
      return this.selectionMode === "single";
    },
    isMultipleSelectionMode() {
      return this.selectionMode === "multiple";
    },
    isSelected(rowData) {
      if (rowData && this.selection) {
        if (this.dataKey) {
          return this.d_selectionKeys ? this.d_selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== void 0 : false;
        } else {
          if (this.selection instanceof Array)
            return this.findIndexInSelection(rowData) > -1;
          else
            return this.equals(rowData, this.selection);
        }
      }
      return false;
    },
    findIndexInSelection(rowData) {
      return this.findIndex(rowData, this.selection);
    },
    findIndex(rowData, collection) {
      let index = -1;
      if (collection && collection.length) {
        for (let i = 0; i < collection.length; i++) {
          if (this.equals(rowData, collection[i])) {
            index = i;
            break;
          }
        }
      }
      return index;
    },
    updateSelectionKeys(selection) {
      this.d_selectionKeys = {};
      if (Array.isArray(selection)) {
        for (let data of selection) {
          this.d_selectionKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
        }
      } else {
        this.d_selectionKeys[String(ObjectUtils.resolveFieldData(selection, this.dataKey))] = 1;
      }
    },
    updateExpandedRowKeys(expandedRows) {
      if (expandedRows && expandedRows.length) {
        this.d_expandedRowKeys = {};
        for (let data of expandedRows) {
          this.d_expandedRowKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
        }
      } else {
        this.d_expandedRowKeys = null;
      }
    },
    updateEditingRowKeys(editingRows) {
      if (editingRows && editingRows.length) {
        this.d_editingRowKeys = {};
        for (let data of editingRows) {
          this.d_editingRowKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
        }
      } else {
        this.d_editingRowKeys = null;
      }
    },
    equals(data1, data2) {
      return this.compareSelectionBy === "equals" ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
    },
    selectRange(event2) {
      let rangeStart, rangeEnd;
      if (this.rangeRowIndex > this.anchorRowIndex) {
        rangeStart = this.anchorRowIndex;
        rangeEnd = this.rangeRowIndex;
      } else if (this.rangeRowIndex < this.anchorRowIndex) {
        rangeStart = this.rangeRowIndex;
        rangeEnd = this.anchorRowIndex;
      } else {
        rangeStart = this.rangeRowIndex;
        rangeEnd = this.rangeRowIndex;
      }
      if (this.lazy && this.paginator) {
        rangeStart -= this.first;
        rangeEnd -= this.first;
      }
      const value = this.processedData;
      let _selection = [];
      for (let i = rangeStart; i <= rangeEnd; i++) {
        let rangeRowData = value[i];
        _selection.push(rangeRowData);
        this.$emit("row-select", { originalEvent: event2, data: rangeRowData, type: "row" });
      }
      this.$emit("update:selection", _selection);
    },
    exportCSV(options, data) {
      let csv = "\uFEFF";
      if (!data) {
        data = this.processedData;
        if (options && options.selectionOnly)
          data = this.selection || [];
        else if (this.frozenValue)
          data = data ? [...this.frozenValue, ...data] : this.frozenValue;
      }
      let headerInitiated = false;
      for (let i = 0; i < this.columns.length; i++) {
        let column = this.columns[i];
        if (this.columnProp(column, "exportable") !== false && this.columnProp(column, "field")) {
          if (headerInitiated)
            csv += this.csvSeparator;
          else
            headerInitiated = true;
          csv += '"' + (this.columnProp(column, "exportHeader") || this.columnProp(column, "header") || this.columnProp(column, "field")) + '"';
        }
      }
      if (data) {
        data.forEach((record) => {
          csv += "\n";
          let rowInitiated = false;
          for (let i = 0; i < this.columns.length; i++) {
            let column = this.columns[i];
            if (this.columnProp(column, "exportable") !== false && this.columnProp(column, "field")) {
              if (rowInitiated)
                csv += this.csvSeparator;
              else
                rowInitiated = true;
              let cellData = ObjectUtils.resolveFieldData(record, this.columnProp(column, "field"));
              if (cellData != null) {
                if (this.exportFunction) {
                  cellData = this.exportFunction({
                    data: cellData,
                    field: this.columnProp(column, "field")
                  });
                } else
                  cellData = String(cellData).replace(/"/g, '""');
              } else
                cellData = "";
              csv += '"' + cellData + '"';
            }
          }
        });
      }
      let footerInitiated = false;
      for (let i = 0; i < this.columns.length; i++) {
        let column = this.columns[i];
        if (i === 0)
          csv += "\n";
        if (this.columnProp(column, "exportable") !== false && this.columnProp(column, "field")) {
          if (footerInitiated)
            csv += this.csvSeparator;
          else
            footerInitiated = true;
          csv += '"' + (this.columnProp(column, "exportFooter") || this.columnProp(column, "footer") || this.columnProp(column, "field")) + '"';
        }
      }
      DomHandler.exportCSV(csv, this.exportFilename);
    },
    resetPage() {
      this.d_first = 0;
      this.$emit("update:first", this.d_first);
    },
    onColumnResizeStart(event2) {
      let containerLeft = DomHandler.getOffset(this.$el).left;
      this.resizeColumnElement = event2.target.parentElement;
      this.columnResizing = true;
      this.lastResizeHelperX = event2.pageX - containerLeft + this.$el.scrollLeft;
      this.bindColumnResizeEvents();
    },
    onColumnResize(event2) {
      let containerLeft = DomHandler.getOffset(this.$el).left;
      DomHandler.addClass(this.$el, "p-unselectable-text");
      this.$refs.resizeHelper.style.height = this.$el.offsetHeight + "px";
      this.$refs.resizeHelper.style.top = 0 + "px";
      this.$refs.resizeHelper.style.left = event2.pageX - containerLeft + this.$el.scrollLeft + "px";
      this.$refs.resizeHelper.style.display = "block";
    },
    onColumnResizeEnd() {
      let delta = this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX;
      let columnWidth = this.resizeColumnElement.offsetWidth;
      let newColumnWidth = columnWidth + delta;
      let minWidth = this.resizeColumnElement.style.minWidth || 15;
      if (columnWidth + delta > parseInt(minWidth, 10)) {
        if (this.columnResizeMode === "fit") {
          let nextColumn = this.resizeColumnElement.nextElementSibling;
          let nextColumnWidth = nextColumn.offsetWidth - delta;
          if (newColumnWidth > 15 && nextColumnWidth > 15) {
            this.resizeTableCells(newColumnWidth, nextColumnWidth);
          }
        } else if (this.columnResizeMode === "expand") {
          const tableWidth = this.$refs.table.offsetWidth + delta + "px";
          const updateTableWidth = (el) => {
            !!el && (el.style.width = el.style.minWidth = tableWidth);
          };
          updateTableWidth(this.$refs.table);
          if (!this.virtualScrollerDisabled) {
            const body = this.$refs.bodyRef && this.$refs.bodyRef.$el;
            const frozenBody = this.$refs.frozenBodyRef && this.$refs.frozenBodyRef.$el;
            updateTableWidth(body);
            updateTableWidth(frozenBody);
          }
          this.resizeTableCells(newColumnWidth);
        }
        this.$emit("column-resize-end", {
          element: this.resizeColumnElement,
          delta
        });
      }
      this.$refs.resizeHelper.style.display = "none";
      this.resizeColumn = null;
      DomHandler.removeClass(this.$el, "p-unselectable-text");
      this.unbindColumnResizeEvents();
      if (this.isStateful()) {
        this.saveState();
      }
    },
    resizeTableCells(newColumnWidth, nextColumnWidth) {
      let colIndex = DomHandler.index(this.resizeColumnElement);
      let widths = [];
      let headers = DomHandler.find(this.$refs.table, ".p-datatable-thead > tr > th");
      headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
      this.destroyStyleElement();
      this.createStyleElement();
      let innerHTML = "";
      widths.forEach((width, index) => {
        let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
        let style = this.scrollable ? `flex: 1 1 ${colWidth}px !important` : `width: ${colWidth}px !important`;
        innerHTML += `
                    .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th:nth-child(${index + 1}),
                    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                    .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                        ${style}
                    }
                `;
      });
      this.styleElement.innerHTML = innerHTML;
    },
    bindColumnResizeEvents() {
      if (!this.documentColumnResizeListener) {
        this.documentColumnResizeListener = document.addEventListener("mousemove", () => {
          if (this.columnResizing) {
            this.onColumnResize(event);
          }
        });
      }
      if (!this.documentColumnResizeEndListener) {
        this.documentColumnResizeEndListener = document.addEventListener("mouseup", () => {
          if (this.columnResizing) {
            this.columnResizing = false;
            this.onColumnResizeEnd();
          }
        });
      }
    },
    unbindColumnResizeEvents() {
      if (this.documentColumnResizeListener) {
        document.removeEventListener("document", this.documentColumnResizeListener);
        this.documentColumnResizeListener = null;
      }
      if (this.documentColumnResizeEndListener) {
        document.removeEventListener("document", this.documentColumnResizeEndListener);
        this.documentColumnResizeEndListener = null;
      }
    },
    onColumnHeaderMouseDown(e) {
      const event2 = e.originalEvent;
      const column = e.column;
      if (this.reorderableColumns && this.columnProp(column, "reorderableColumn") !== false) {
        if (event2.target.nodeName === "INPUT" || event2.target.nodeName === "TEXTAREA" || DomHandler.hasClass(event2.target, "p-column-resizer"))
          event2.currentTarget.draggable = false;
        else
          event2.currentTarget.draggable = true;
      }
    },
    onColumnHeaderDragStart(event2) {
      if (this.columnResizing) {
        event2.preventDefault();
        return;
      }
      this.colReorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.$refs.reorderIndicatorUp);
      this.colReorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.$refs.reorderIndicatorUp);
      this.draggedColumn = this.findParentHeader(event2.target);
      event2.dataTransfer.setData("text", "b");
    },
    onColumnHeaderDragOver(event2) {
      let dropHeader = this.findParentHeader(event2.target);
      if (this.reorderableColumns && this.draggedColumn && dropHeader) {
        event2.preventDefault();
        let containerOffset = DomHandler.getOffset(this.$el);
        let dropHeaderOffset = DomHandler.getOffset(dropHeader);
        if (this.draggedColumn !== dropHeader) {
          let targetLeft = dropHeaderOffset.left - containerOffset.left;
          let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
          this.$refs.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.colReorderIconHeight - 1) + "px";
          this.$refs.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + "px";
          if (event2.pageX > columnCenter) {
            this.$refs.reorderIndicatorUp.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + "px";
            this.$refs.reorderIndicatorDown.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + "px";
            this.dropPosition = 1;
          } else {
            this.$refs.reorderIndicatorUp.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + "px";
            this.$refs.reorderIndicatorDown.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + "px";
            this.dropPosition = -1;
          }
          this.$refs.reorderIndicatorUp.style.display = "block";
          this.$refs.reorderIndicatorDown.style.display = "block";
        }
      }
    },
    onColumnHeaderDragLeave(event2) {
      if (this.reorderableColumns && this.draggedColumn) {
        event2.preventDefault();
        this.$refs.reorderIndicatorUp.style.display = "none";
        this.$refs.reorderIndicatorDown.style.display = "none";
      }
    },
    onColumnHeaderDrop(event2) {
      event2.preventDefault();
      if (this.draggedColumn) {
        let dragIndex = DomHandler.index(this.draggedColumn);
        let dropIndex = DomHandler.index(this.findParentHeader(event2.target));
        let allowDrop = dragIndex !== dropIndex;
        if (allowDrop && (dropIndex - dragIndex === 1 && this.dropPosition === -1 || dropIndex - dragIndex === -1 && this.dropPosition === 1)) {
          allowDrop = false;
        }
        if (allowDrop) {
          ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
          this.updateReorderableColumns();
          this.$emit("column-reorder", {
            originalEvent: event2,
            dragIndex,
            dropIndex
          });
        }
        this.$refs.reorderIndicatorUp.style.display = "none";
        this.$refs.reorderIndicatorDown.style.display = "none";
        this.draggedColumn.draggable = false;
        this.draggedColumn = null;
        this.dropPosition = null;
      }
    },
    findParentHeader(element) {
      if (element.nodeName === "TH") {
        return element;
      } else {
        let parent = element.parentElement;
        while (parent.nodeName !== "TH") {
          parent = parent.parentElement;
          if (!parent)
            break;
        }
        return parent;
      }
    },
    findColumnByKey(columns, key) {
      if (columns && columns.length) {
        for (let i = 0; i < columns.length; i++) {
          let column = columns[i];
          if (this.columnProp(column, "columnKey") === key || this.columnProp(column, "field") === key) {
            return column;
          }
        }
      }
      return null;
    },
    onRowMouseDown(event2) {
      if (DomHandler.hasClass(event2.target, "p-datatable-reorderablerow-handle"))
        event2.currentTarget.draggable = true;
      else
        event2.currentTarget.draggable = false;
    },
    onRowDragStart(e) {
      const event2 = e.originalEvent;
      const index = e.index;
      this.rowDragging = true;
      this.draggedRowIndex = index;
      event2.dataTransfer.setData("text", "b");
    },
    onRowDragOver(e) {
      const event2 = e.originalEvent;
      const index = e.index;
      if (this.rowDragging && this.draggedRowIndex !== index) {
        let rowElement = event2.currentTarget;
        let rowY = DomHandler.getOffset(rowElement).top + DomHandler.getWindowScrollTop();
        let pageY = event2.pageY;
        let rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
        let prevRowElement = rowElement.previousElementSibling;
        if (pageY < rowMidY) {
          DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
          this.droppedRowIndex = index;
          if (prevRowElement)
            DomHandler.addClass(prevRowElement, "p-datatable-dragpoint-bottom");
          else
            DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
        } else {
          if (prevRowElement)
            DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
          else
            DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
          this.droppedRowIndex = index + 1;
          DomHandler.addClass(rowElement, "p-datatable-dragpoint-bottom");
        }
        event2.preventDefault();
      }
    },
    onRowDragLeave(event2) {
      let rowElement = event2.currentTarget;
      let prevRowElement = rowElement.previousElementSibling;
      if (prevRowElement) {
        DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
      }
      DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
      DomHandler.removeClass(rowElement, "p-datatable-dragpoint-top");
    },
    onRowDragEnd(event2) {
      this.rowDragging = false;
      this.draggedRowIndex = null;
      this.droppedRowIndex = null;
      event2.currentTarget.draggable = false;
    },
    onRowDrop(event2) {
      if (this.droppedRowIndex != null) {
        let dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
        let processedData = [...this.processedData];
        ObjectUtils.reorderArray(processedData, this.draggedRowIndex, dropIndex);
        this.$emit("row-reorder", {
          originalEvent: event2,
          dragIndex: this.draggedRowIndex,
          dropIndex,
          value: processedData
        });
      }
      this.onRowDragLeave(event2);
      this.onRowDragEnd(event2);
      event2.preventDefault();
    },
    toggleRow(event2) {
      let rowData = event2.data;
      let expanded;
      let expandedRowIndex;
      let _expandedRows = this.expandedRows ? [...this.expandedRows] : [];
      if (this.dataKey) {
        expanded = this.d_expandedRowKeys ? this.d_expandedRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== void 0 : false;
      } else {
        expandedRowIndex = this.findIndex(rowData, this.expandedRows);
        expanded = expandedRowIndex > -1;
      }
      if (expanded) {
        if (expandedRowIndex == null) {
          expandedRowIndex = this.findIndex(rowData, this.expandedRows);
        }
        _expandedRows.splice(expandedRowIndex, 1);
        this.$emit("update:expandedRows", _expandedRows);
        this.$emit("row-collapse", event2);
      } else {
        _expandedRows.push(rowData);
        this.$emit("update:expandedRows", _expandedRows);
        this.$emit("row-expand", event2);
      }
    },
    toggleRowGroup(e) {
      const event2 = e.originalEvent;
      const data = e.data;
      const groupFieldValue = ObjectUtils.resolveFieldData(data, this.groupRowsBy);
      let _expandedRowGroups = this.expandedRowGroups ? [...this.expandedRowGroups] : [];
      if (this.isRowGroupExpanded(data)) {
        _expandedRowGroups = _expandedRowGroups.filter((group) => group !== groupFieldValue);
        this.$emit("update:expandedRowGroups", _expandedRowGroups);
        this.$emit("rowgroup-collapse", { originalEvent: event2, data: groupFieldValue });
      } else {
        _expandedRowGroups.push(groupFieldValue);
        this.$emit("update:expandedRowGroups", _expandedRowGroups);
        this.$emit("rowgroup-expand", { originalEvent: event2, data: groupFieldValue });
      }
    },
    isRowGroupExpanded(rowData) {
      if (this.expandableRowGroups && this.expandedRowGroups) {
        let groupFieldValue = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
        return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
      }
      return false;
    },
    isStateful() {
      return this.stateKey != null;
    },
    getStorage() {
      switch (this.stateStorage) {
        case "local":
          return window.localStorage;
        case "session":
          return window.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    },
    saveState() {
      const storage = this.getStorage();
      let state = {};
      if (this.paginator) {
        state.first = this.d_first;
        state.rows = this.d_rows;
      }
      if (this.d_sortField) {
        state.sortField = this.d_sortField;
        state.sortOrder = this.d_sortOrder;
      }
      if (this.d_multiSortMeta) {
        state.multiSortMeta = this.d_multiSortMeta;
      }
      if (this.hasFilters) {
        state.filters = this.filters;
      }
      if (this.resizableColumns) {
        this.saveColumnWidths(state);
      }
      if (this.reorderableColumns) {
        state.columnOrder = this.d_columnOrder;
      }
      if (this.expandedRows) {
        state.expandedRows = this.expandedRows;
        state.expandedRowKeys = this.d_expandedRowKeys;
      }
      if (this.expandedRowGroups) {
        state.expandedRowGroups = this.expandedRowGroups;
      }
      if (this.selection) {
        state.selection = this.selection;
        state.selectionKeys = this.d_selectionKeys;
      }
      if (Object.keys(state).length) {
        storage.setItem(this.stateKey, JSON.stringify(state));
      }
      this.$emit("state-save", state);
    },
    restoreState() {
      const storage = this.getStorage();
      const stateString = storage.getItem(this.stateKey);
      const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
      const reviver = function(key, value) {
        if (typeof value === "string" && dateFormat.test(value)) {
          return new Date(value);
        }
        return value;
      };
      if (stateString) {
        let restoredState = JSON.parse(stateString, reviver);
        if (this.paginator) {
          this.d_first = restoredState.first;
          this.d_rows = restoredState.rows;
        }
        if (restoredState.sortField) {
          this.d_sortField = restoredState.sortField;
          this.d_sortOrder = restoredState.sortOrder;
        }
        if (restoredState.multiSortMeta) {
          this.d_multiSortMeta = restoredState.multiSortMeta;
        }
        if (restoredState.filters) {
          this.$emit("update:filters", restoredState.filters);
        }
        if (this.resizableColumns) {
          this.columnWidthsState = restoredState.columnWidths;
          this.tableWidthState = restoredState.tableWidth;
        }
        if (this.reorderableColumns) {
          this.d_columnOrder = restoredState.columnOrder;
        }
        if (restoredState.expandedRows) {
          this.d_expandedRowKeys = restoredState.expandedRowKeys;
          this.$emit("update:expandedRows", restoredState.expandedRows);
        }
        if (restoredState.expandedRowGroups) {
          this.$emit("update:expandedRowGroups", restoredState.expandedRowGroups);
        }
        if (restoredState.selection) {
          this.d_selectionKeys = restoredState.d_selectionKeys;
          this.$emit("update:selection", restoredState.selection);
        }
        this.$emit("state-restore", restoredState);
      }
    },
    saveColumnWidths(state) {
      let widths = [];
      let headers = DomHandler.find(this.$el, ".p-datatable-thead > tr > th");
      headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
      state.columnWidths = widths.join(",");
      if (this.columnResizeMode === "expand") {
        state.tableWidth = DomHandler.getOuterWidth(this.$refs.table) + "px";
      }
    },
    restoreColumnWidths() {
      if (this.columnWidthsState) {
        let widths = this.columnWidthsState.split(",");
        if (this.columnResizeMode === "expand" && this.tableWidthState) {
          this.$refs.table.style.width = this.tableWidthState;
          this.$refs.table.style.minWidth = this.tableWidthState;
          this.$el.style.width = this.tableWidthState;
        }
        if (ObjectUtils.isNotEmpty(widths)) {
          this.createStyleElement();
          let innerHTML = "";
          widths.forEach((width, index) => {
            let style = this.scrollable ? `flex: 1 1 ${width}px !important` : `width: ${width}px !important`;
            innerHTML += `
                            .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th:nth-child(${index + 1}),
                            .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                            .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                                ${style}
                            }
                        `;
          });
          this.styleElement.innerHTML = innerHTML;
        }
      }
    },
    onCellEditInit(event2) {
      this.$emit("cell-edit-init", event2);
    },
    onCellEditComplete(event2) {
      this.$emit("cell-edit-complete", event2);
    },
    onCellEditCancel(event2) {
      this.$emit("cell-edit-cancel", event2);
    },
    onRowEditInit(event2) {
      let _editingRows = this.editingRows ? [...this.editingRows] : [];
      _editingRows.push(event2.data);
      this.$emit("update:editingRows", _editingRows);
      this.$emit("row-edit-init", event2);
    },
    onRowEditSave(event2) {
      let _editingRows = [...this.editingRows];
      _editingRows.splice(this.findIndex(event2.data, _editingRows), 1);
      this.$emit("update:editingRows", _editingRows);
      this.$emit("row-edit-save", event2);
    },
    onRowEditCancel(event2) {
      let _editingRows = [...this.editingRows];
      _editingRows.splice(this.findIndex(event2.data, _editingRows), 1);
      this.$emit("update:editingRows", _editingRows);
      this.$emit("row-edit-cancel", event2);
    },
    onEditingMetaChange(event2) {
      let { data, field, index, editing } = event2;
      let editingMeta = { ...this.d_editingMeta };
      let meta = editingMeta[index];
      if (editing) {
        !meta && (meta = editingMeta[index] = { data: { ...data }, fields: [] });
        meta["fields"].push(field);
      } else if (meta) {
        const fields = meta["fields"].filter((f) => f !== field);
        !fields.length ? delete editingMeta[index] : meta["fields"] = fields;
      }
      this.d_editingMeta = editingMeta;
    },
    clearEditingMetaData() {
      if (this.editMode) {
        this.d_editingMeta = {};
      }
    },
    createLazyLoadEvent(event2) {
      return {
        originalEvent: event2,
        first: this.d_first,
        rows: this.d_rows,
        sortField: this.d_sortField,
        sortOrder: this.d_sortOrder,
        multiSortMeta: this.d_multiSortMeta,
        filters: this.d_filters
      };
    },
    hasGlobalFilter() {
      return this.filters && Object.prototype.hasOwnProperty.call(this.filters, "global");
    },
    getChildren() {
      return this.$slots.default ? this.$slots.default() : null;
    },
    onFilterChange(filters) {
      this.d_filters = filters;
    },
    onFilterApply() {
      this.d_first = 0;
      this.$emit("update:first", this.d_first);
      this.$emit("update:filters", this.d_filters);
      if (this.lazy) {
        this.$emit("filter", this.createLazyLoadEvent());
      }
    },
    cloneFilters() {
      let cloned = {};
      if (this.filters) {
        Object.entries(this.filters).forEach(([prop, value]) => {
          cloned[prop] = value.operator ? {
            operator: value.operator,
            constraints: value.constraints.map((constraint) => {
              return { ...constraint };
            })
          } : { ...value };
        });
      }
      return cloned;
    },
    updateReorderableColumns() {
      let columnOrder = [];
      this.columns.forEach((col) => columnOrder.push(this.columnProp(col, "columnKey") || this.columnProp(col, "field")));
      this.d_columnOrder = columnOrder;
    },
    createStyleElement() {
      this.styleElement = document.createElement("style");
      this.styleElement.type = "text/css";
      document.head.appendChild(this.styleElement);
    },
    createResponsiveStyle() {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = document.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        document.head.appendChild(this.responsiveStyleElement);
        let innerHTML = `
@media screen and (max-width: ${this.breakpoint}) {
    .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th,
    .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td {
        display: flex;
        width: 100% !important;
        align-items: center;
        justify-content: space-between;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:not(:last-child) {
        border: 0 none;
    }

    .p-datatable[${this.attributeSelector}].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-top: 0;
        border-right: 0;
        border-left: 0;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td > .p-column-title {
        display: block;
    }
}
`;
        this.responsiveStyleElement.innerHTML = innerHTML;
      }
    },
    destroyResponsiveStyle() {
      if (this.responsiveStyleElement) {
        document.head.removeChild(this.responsiveStyleElement);
        this.responsiveStyleElement = null;
      }
    },
    destroyStyleElement() {
      if (this.styleElement) {
        document.head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    },
    recursiveGetChildren(children, results) {
      if (!results) {
        results = [];
      }
      if (children && children.length) {
        children.forEach((child) => {
          if (child.children instanceof Array) {
            results.concat(this.recursiveGetChildren(child.children, results));
          } else if (child.type.name == "Column") {
            results.push(child);
          }
        });
      }
      return results;
    },
    dataToRender(data) {
      const _data = data || this.processedData;
      if (_data && this.paginator) {
        const first = this.lazy ? 0 : this.d_first;
        return _data.slice(first, first + this.d_rows);
      }
      return _data;
    },
    getVirtualScrollerRef() {
      return this.$refs.virtualScroller;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-datatable p-component",
        {
          "p-datatable-hoverable-rows": this.rowHover || this.selectionMode,
          "p-datatable-auto-layout": this.autoLayout,
          "p-datatable-resizable": this.resizableColumns,
          "p-datatable-resizable-fit": this.resizableColumns && this.columnResizeMode === "fit",
          "p-datatable-scrollable": this.scrollable,
          "p-datatable-scrollable-vertical": this.scrollable && this.scrollDirection === "vertical",
          "p-datatable-scrollable-horizontal": this.scrollable && this.scrollDirection === "horizontal",
          "p-datatable-scrollable-both": this.scrollable && this.scrollDirection === "both",
          "p-datatable-flex-scrollable": this.scrollable && this.scrollHeight === "flex",
          "p-datatable-responsive-stack": this.responsiveLayout === "stack",
          "p-datatable-responsive-scroll": this.responsiveLayout === "scroll",
          "p-datatable-striped": this.stripedRows,
          "p-datatable-gridlines": this.showGridlines,
          "p-datatable-grouped-header": this.headerColumnGroup != null,
          "p-datatable-grouped-footer": this.footerColumnGroup != null
        }
      ];
    },
    columns() {
      let children = this.getChildren();
      if (!children) {
        return;
      }
      const cols = this.recursiveGetChildren(children, []);
      if (this.reorderableColumns && this.d_columnOrder) {
        let orderedColumns = [];
        for (let columnKey of this.d_columnOrder) {
          let column = this.findColumnByKey(cols, columnKey);
          if (column && !this.columnProp(column, "hidden")) {
            orderedColumns.push(column);
          }
        }
        return [...orderedColumns, ...cols.filter((item) => orderedColumns.indexOf(item) < 0)];
      }
      return cols;
    },
    headerColumnGroup() {
      const children = this.getChildren();
      if (children) {
        for (let child of children) {
          if (child.type.name === "ColumnGroup" && this.columnProp(child, "type") === "header") {
            return child;
          }
        }
      }
      return null;
    },
    footerColumnGroup() {
      const children = this.getChildren();
      if (children) {
        for (let child of children) {
          if (child.type.name === "ColumnGroup" && this.columnProp(child, "type") === "footer") {
            return child;
          }
        }
      }
      return null;
    },
    hasFilters() {
      return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
    },
    processedData() {
      let data = this.value || [];
      if (!this.lazy) {
        if (data && data.length) {
          if (this.hasFilters) {
            data = this.filter(data);
          }
          if (this.sorted) {
            if (this.sortMode === "single")
              data = this.sortSingle(data);
            else if (this.sortMode === "multiple")
              data = this.sortMultiple(data);
          }
        }
      }
      return data;
    },
    totalRecordsLength() {
      if (this.lazy) {
        return this.totalRecords;
      } else {
        const data = this.processedData;
        return data ? data.length : 0;
      }
    },
    empty() {
      const data = this.processedData;
      return !data || data.length === 0;
    },
    paginatorTop() {
      return this.paginator && (this.paginatorPosition !== "bottom" || this.paginatorPosition === "both");
    },
    paginatorBottom() {
      return this.paginator && (this.paginatorPosition !== "top" || this.paginatorPosition === "both");
    },
    sorted() {
      return this.d_sortField || this.d_multiSortMeta && this.d_multiSortMeta.length > 0;
    },
    loadingIconClass() {
      return ["p-datatable-loading-icon pi-spin", this.loadingIcon];
    },
    allRowsSelected() {
      if (this.selectAll !== null) {
        return this.selectAll;
      } else {
        const val = this.frozenValue ? [...this.frozenValue, ...this.processedData] : this.processedData;
        return ObjectUtils.isNotEmpty(val) && this.selection && Array.isArray(this.selection) && val.every((v) => this.selection.some((s) => this.equals(s, v)));
      }
    },
    attributeSelector() {
      return UniqueComponentId();
    },
    groupRowSortField() {
      return this.sortMode === "single" ? this.sortField : this.d_groupRowsSortMeta ? this.d_groupRowsSortMeta.field : null;
    },
    virtualScrollerDisabled() {
      return ObjectUtils.isEmpty(this.virtualScrollerOptions) || !this.scrollable;
    }
  },
  components: {
    DTPaginator: script$c,
    DTTableHeader: script$1$1,
    DTTableBody: script$7,
    DTTableFooter: script$5,
    DTVirtualScroller: script$h
  }
};
const _hoisted_1$b = {
  key: 0,
  class: "p-datatable-loading-overlay p-component-overlay"
};
const _hoisted_2$a = {
  key: 1,
  class: "p-datatable-header"
};
const _hoisted_3 = {
  key: 4,
  class: "p-datatable-footer"
};
const _hoisted_4 = {
  ref: "resizeHelper",
  class: "p-column-resizer-helper",
  style: { "display": "none" }
};
const _hoisted_5 = {
  key: 5,
  ref: "reorderIndicatorUp",
  class: "pi pi-arrow-down p-datatable-reorder-indicator-up",
  style: { "position": "absolute", "display": "none" }
};
const _hoisted_6 = {
  key: 6,
  ref: "reorderIndicatorDown",
  class: "pi pi-arrow-up p-datatable-reorder-indicator-down",
  style: { "position": "absolute", "display": "none" }
};
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTPaginator = resolveComponent("DTPaginator");
  const _component_DTTableHeader = resolveComponent("DTTableHeader");
  const _component_DTTableBody = resolveComponent("DTTableBody");
  const _component_DTTableFooter = resolveComponent("DTTableFooter");
  const _component_DTVirtualScroller = resolveComponent("DTVirtualScroller");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass),
    "data-scrollselectors": ".p-datatable-wrapper"
  }, [
    renderSlot(_ctx.$slots, "default"),
    $props.loading ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
      _ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createElementBlock("i", {
        key: 1,
        class: normalizeClass($options.loadingIconClass)
      }, null, 2))
    ])) : createCommentVNode("", true),
    _ctx.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_2$a, [
      renderSlot(_ctx.$slots, "header")
    ])) : createCommentVNode("", true),
    $options.paginatorTop ? (openBlock(), createBlock(_component_DTPaginator, {
      key: 2,
      rows: $data.d_rows,
      first: $data.d_first,
      totalRecords: $options.totalRecordsLength,
      pageLinkSize: $props.pageLinkSize,
      template: $props.paginatorTemplate,
      rowsPerPageOptions: $props.rowsPerPageOptions,
      currentPageReportTemplate: $props.currentPageReportTemplate,
      class: "p-paginator-top",
      onPage: _cache[0] || (_cache[0] = ($event) => $options.onPage($event)),
      alwaysShow: $props.alwaysShowPaginator
    }, createSlots({ _: 2 }, [
      _ctx.$slots.paginatorstart ? {
        name: "start",
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, "paginatorstart")
        ]),
        key: "0"
      } : void 0,
      _ctx.$slots.paginatorend ? {
        name: "end",
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, "paginatorend")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "alwaysShow"])) : createCommentVNode("", true),
    createElementVNode("div", {
      class: "p-datatable-wrapper",
      style: normalizeStyle({ maxHeight: $options.virtualScrollerDisabled ? $props.scrollHeight : "" })
    }, [
      createVNode(_component_DTVirtualScroller, mergeProps({ ref: "virtualScroller" }, $props.virtualScrollerOptions, {
        items: $options.processedData,
        columns: $options.columns,
        style: { height: $props.scrollHeight },
        disabled: $options.virtualScrollerDisabled,
        loaderDisabled: "",
        showSpacer: false
      }), {
        content: withCtx((slotProps) => [
          createElementVNode("table", mergeProps({
            ref: "table",
            role: "table",
            class: [$props.tableClass, "p-datatable-table"],
            style: [$props.tableStyle, slotProps.spacerStyle]
          }, $props.tableProps), [
            createVNode(_component_DTTableHeader, {
              columnGroup: $options.headerColumnGroup,
              columns: slotProps.columns,
              rowGroupMode: $props.rowGroupMode,
              groupRowsBy: $props.groupRowsBy,
              groupRowSortField: $options.groupRowSortField,
              reorderableColumns: $props.reorderableColumns,
              resizableColumns: $props.resizableColumns,
              allRowsSelected: $options.allRowsSelected,
              empty: $options.empty,
              sortMode: $props.sortMode,
              sortField: $data.d_sortField,
              sortOrder: $data.d_sortOrder,
              multiSortMeta: $data.d_multiSortMeta,
              filters: $data.d_filters,
              filtersStore: $props.filters,
              filterDisplay: $props.filterDisplay,
              filterInputProps: $props.filterInputProps,
              onColumnClick: _cache[1] || (_cache[1] = ($event) => $options.onColumnHeaderClick($event)),
              onColumnMousedown: _cache[2] || (_cache[2] = ($event) => $options.onColumnHeaderMouseDown($event)),
              onFilterChange: $options.onFilterChange,
              onFilterApply: $options.onFilterApply,
              onColumnDragstart: _cache[3] || (_cache[3] = ($event) => $options.onColumnHeaderDragStart($event)),
              onColumnDragover: _cache[4] || (_cache[4] = ($event) => $options.onColumnHeaderDragOver($event)),
              onColumnDragleave: _cache[5] || (_cache[5] = ($event) => $options.onColumnHeaderDragLeave($event)),
              onColumnDrop: _cache[6] || (_cache[6] = ($event) => $options.onColumnHeaderDrop($event)),
              onColumnResizestart: _cache[7] || (_cache[7] = ($event) => $options.onColumnResizeStart($event)),
              onCheckboxChange: _cache[8] || (_cache[8] = ($event) => $options.toggleRowsWithCheckbox($event))
            }, null, 8, ["columnGroup", "columns", "rowGroupMode", "groupRowsBy", "groupRowSortField", "reorderableColumns", "resizableColumns", "allRowsSelected", "empty", "sortMode", "sortField", "sortOrder", "multiSortMeta", "filters", "filtersStore", "filterDisplay", "filterInputProps", "onFilterChange", "onFilterApply"]),
            $props.frozenValue ? (openBlock(), createBlock(_component_DTTableBody, {
              key: 0,
              ref: "frozenBodyRef",
              value: $props.frozenValue,
              frozenRow: true,
              class: "p-datatable-frozen-tbody",
              columns: slotProps.columns,
              dataKey: $props.dataKey,
              selection: $props.selection,
              selectionKeys: $data.d_selectionKeys,
              selectionMode: $props.selectionMode,
              contextMenu: $props.contextMenu,
              contextMenuSelection: $props.contextMenuSelection,
              rowGroupMode: $props.rowGroupMode,
              groupRowsBy: $props.groupRowsBy,
              expandableRowGroups: $props.expandableRowGroups,
              rowClass: $props.rowClass,
              rowStyle: $props.rowStyle,
              editMode: $props.editMode,
              compareSelectionBy: $props.compareSelectionBy,
              scrollable: $props.scrollable,
              expandedRowIcon: $props.expandedRowIcon,
              collapsedRowIcon: $props.collapsedRowIcon,
              expandedRows: $props.expandedRows,
              expandedRowKeys: $data.d_expandedRowKeys,
              expandedRowGroups: $props.expandedRowGroups,
              editingRows: $props.editingRows,
              editingRowKeys: $data.d_editingRowKeys,
              templates: _ctx.$slots,
              responsiveLayout: $props.responsiveLayout,
              isVirtualScrollerDisabled: true,
              onRowgroupToggle: $options.toggleRowGroup,
              onRowClick: _cache[9] || (_cache[9] = ($event) => $options.onRowClick($event)),
              onRowDblclick: _cache[10] || (_cache[10] = ($event) => $options.onRowDblClick($event)),
              onRowRightclick: _cache[11] || (_cache[11] = ($event) => $options.onRowRightClick($event)),
              onRowTouchend: $options.onRowTouchEnd,
              onRowKeydown: $options.onRowKeyDown,
              onRowMousedown: $options.onRowMouseDown,
              onRowDragstart: _cache[12] || (_cache[12] = ($event) => $options.onRowDragStart($event)),
              onRowDragover: _cache[13] || (_cache[13] = ($event) => $options.onRowDragOver($event)),
              onRowDragleave: _cache[14] || (_cache[14] = ($event) => $options.onRowDragLeave($event)),
              onRowDragend: _cache[15] || (_cache[15] = ($event) => $options.onRowDragEnd($event)),
              onRowDrop: _cache[16] || (_cache[16] = ($event) => $options.onRowDrop($event)),
              onRowToggle: _cache[17] || (_cache[17] = ($event) => $options.toggleRow($event)),
              onRadioChange: _cache[18] || (_cache[18] = ($event) => $options.toggleRowWithRadio($event)),
              onCheckboxChange: _cache[19] || (_cache[19] = ($event) => $options.toggleRowWithCheckbox($event)),
              onCellEditInit: _cache[20] || (_cache[20] = ($event) => $options.onCellEditInit($event)),
              onCellEditComplete: _cache[21] || (_cache[21] = ($event) => $options.onCellEditComplete($event)),
              onCellEditCancel: _cache[22] || (_cache[22] = ($event) => $options.onCellEditCancel($event)),
              onRowEditInit: _cache[23] || (_cache[23] = ($event) => $options.onRowEditInit($event)),
              onRowEditSave: _cache[24] || (_cache[24] = ($event) => $options.onRowEditSave($event)),
              onRowEditCancel: _cache[25] || (_cache[25] = ($event) => $options.onRowEditCancel($event)),
              editingMeta: $data.d_editingMeta,
              onEditingMetaChange: $options.onEditingMetaChange
            }, null, 8, ["value", "columns", "dataKey", "selection", "selectionKeys", "selectionMode", "contextMenu", "contextMenuSelection", "rowGroupMode", "groupRowsBy", "expandableRowGroups", "rowClass", "rowStyle", "editMode", "compareSelectionBy", "scrollable", "expandedRowIcon", "collapsedRowIcon", "expandedRows", "expandedRowKeys", "expandedRowGroups", "editingRows", "editingRowKeys", "templates", "responsiveLayout", "onRowgroupToggle", "onRowTouchend", "onRowKeydown", "onRowMousedown", "editingMeta", "onEditingMetaChange"])) : createCommentVNode("", true),
            createVNode(_component_DTTableBody, {
              ref: "bodyRef",
              value: $options.dataToRender(slotProps.rows),
              class: normalizeClass(slotProps.styleClass),
              columns: slotProps.columns,
              empty: $options.empty,
              dataKey: $props.dataKey,
              selection: $props.selection,
              selectionKeys: $data.d_selectionKeys,
              selectionMode: $props.selectionMode,
              contextMenu: $props.contextMenu,
              contextMenuSelection: $props.contextMenuSelection,
              rowGroupMode: $props.rowGroupMode,
              groupRowsBy: $props.groupRowsBy,
              expandableRowGroups: $props.expandableRowGroups,
              rowClass: $props.rowClass,
              rowStyle: $props.rowStyle,
              editMode: $props.editMode,
              compareSelectionBy: $props.compareSelectionBy,
              scrollable: $props.scrollable,
              expandedRowIcon: $props.expandedRowIcon,
              collapsedRowIcon: $props.collapsedRowIcon,
              expandedRows: $props.expandedRows,
              expandedRowKeys: $data.d_expandedRowKeys,
              expandedRowGroups: $props.expandedRowGroups,
              editingRows: $props.editingRows,
              editingRowKeys: $data.d_editingRowKeys,
              templates: _ctx.$slots,
              responsiveLayout: $props.responsiveLayout,
              virtualScrollerContentProps: slotProps,
              isVirtualScrollerDisabled: $options.virtualScrollerDisabled,
              onRowgroupToggle: $options.toggleRowGroup,
              onRowClick: _cache[26] || (_cache[26] = ($event) => $options.onRowClick($event)),
              onRowDblclick: _cache[27] || (_cache[27] = ($event) => $options.onRowDblClick($event)),
              onRowRightclick: _cache[28] || (_cache[28] = ($event) => $options.onRowRightClick($event)),
              onRowTouchend: $options.onRowTouchEnd,
              onRowKeydown: ($event) => $options.onRowKeyDown($event, slotProps),
              onRowMousedown: $options.onRowMouseDown,
              onRowDragstart: _cache[29] || (_cache[29] = ($event) => $options.onRowDragStart($event)),
              onRowDragover: _cache[30] || (_cache[30] = ($event) => $options.onRowDragOver($event)),
              onRowDragleave: _cache[31] || (_cache[31] = ($event) => $options.onRowDragLeave($event)),
              onRowDragend: _cache[32] || (_cache[32] = ($event) => $options.onRowDragEnd($event)),
              onRowDrop: _cache[33] || (_cache[33] = ($event) => $options.onRowDrop($event)),
              onRowToggle: _cache[34] || (_cache[34] = ($event) => $options.toggleRow($event)),
              onRadioChange: _cache[35] || (_cache[35] = ($event) => $options.toggleRowWithRadio($event)),
              onCheckboxChange: _cache[36] || (_cache[36] = ($event) => $options.toggleRowWithCheckbox($event)),
              onCellEditInit: _cache[37] || (_cache[37] = ($event) => $options.onCellEditInit($event)),
              onCellEditComplete: _cache[38] || (_cache[38] = ($event) => $options.onCellEditComplete($event)),
              onCellEditCancel: _cache[39] || (_cache[39] = ($event) => $options.onCellEditCancel($event)),
              onRowEditInit: _cache[40] || (_cache[40] = ($event) => $options.onRowEditInit($event)),
              onRowEditSave: _cache[41] || (_cache[41] = ($event) => $options.onRowEditSave($event)),
              onRowEditCancel: _cache[42] || (_cache[42] = ($event) => $options.onRowEditCancel($event)),
              editingMeta: $data.d_editingMeta,
              onEditingMetaChange: $options.onEditingMetaChange
            }, null, 8, ["value", "class", "columns", "empty", "dataKey", "selection", "selectionKeys", "selectionMode", "contextMenu", "contextMenuSelection", "rowGroupMode", "groupRowsBy", "expandableRowGroups", "rowClass", "rowStyle", "editMode", "compareSelectionBy", "scrollable", "expandedRowIcon", "collapsedRowIcon", "expandedRows", "expandedRowKeys", "expandedRowGroups", "editingRows", "editingRowKeys", "templates", "responsiveLayout", "virtualScrollerContentProps", "isVirtualScrollerDisabled", "onRowgroupToggle", "onRowTouchend", "onRowKeydown", "onRowMousedown", "editingMeta", "onEditingMetaChange"]),
            createVNode(_component_DTTableFooter, {
              columnGroup: $options.footerColumnGroup,
              columns: slotProps.columns
            }, null, 8, ["columnGroup", "columns"])
          ], 16)
        ]),
        _: 1
      }, 16, ["items", "columns", "style", "disabled"])
    ], 4),
    $options.paginatorBottom ? (openBlock(), createBlock(_component_DTPaginator, {
      key: 3,
      rows: $data.d_rows,
      first: $data.d_first,
      totalRecords: $options.totalRecordsLength,
      pageLinkSize: $props.pageLinkSize,
      template: $props.paginatorTemplate,
      rowsPerPageOptions: $props.rowsPerPageOptions,
      currentPageReportTemplate: $props.currentPageReportTemplate,
      class: "p-paginator-bottom",
      onPage: _cache[43] || (_cache[43] = ($event) => $options.onPage($event)),
      alwaysShow: $props.alwaysShowPaginator
    }, createSlots({ _: 2 }, [
      _ctx.$slots.paginatorstart ? {
        name: "start",
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, "paginatorstart")
        ]),
        key: "0"
      } : void 0,
      _ctx.$slots.paginatorend ? {
        name: "end",
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, "paginatorend")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "alwaysShow"])) : createCommentVNode("", true),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_3, [
      renderSlot(_ctx.$slots, "footer")
    ])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_4, null, 512),
    $props.reorderableColumns ? (openBlock(), createElementBlock("span", _hoisted_5, null, 512)) : createCommentVNode("", true),
    $props.reorderableColumns ? (openBlock(), createElementBlock("span", _hoisted_6, null, 512)) : createCommentVNode("", true)
  ], 2);
}
function styleInject$1(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$1 = "\n.p-datatable {\n    position: relative;\n}\n.p-datatable table {\n    border-collapse: collapse;\n    min-width: 100%;\n    table-layout: fixed;\n}\n.p-datatable .p-sortable-column {\n    cursor: pointer;\n    user-select: none;\n}\n.p-datatable .p-sortable-column .p-column-title,\n.p-datatable .p-sortable-column .p-sortable-column-icon,\n.p-datatable .p-sortable-column .p-sortable-column-badge {\n    vertical-align: middle;\n}\n.p-datatable .p-sortable-column .p-sortable-column-badge {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n}\n.p-datatable-responsive-scroll > .p-datatable-wrapper {\n    overflow-x: auto;\n}\n.p-datatable-responsive-scroll > .p-datatable-wrapper > table,\n.p-datatable-auto-layout > .p-datatable-wrapper > table {\n    table-layout: auto;\n}\n.p-datatable-hoverable-rows .p-selectable-row {\n    cursor: pointer;\n}\n\n/* Scrollable */\n.p-datatable-scrollable .p-datatable-wrapper {\n    position: relative;\n    overflow: auto;\n}\n.p-datatable-scrollable .p-datatable-thead,\n.p-datatable-scrollable .p-datatable-tbody,\n.p-datatable-scrollable .p-datatable-tfoot {\n    display: block;\n}\n.p-datatable-scrollable .p-datatable-thead > tr,\n.p-datatable-scrollable .p-datatable-tbody > tr,\n.p-datatable-scrollable .p-datatable-tfoot > tr {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n}\n.p-datatable-scrollable .p-datatable-thead > tr > th,\n.p-datatable-scrollable .p-datatable-tbody > tr > td,\n.p-datatable-scrollable .p-datatable-tfoot > tr > td {\n    display: flex;\n    flex: 1 1 0;\n    align-items: center;\n}\n.p-datatable-scrollable .p-datatable-thead {\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n.p-datatable-scrollable .p-datatable-frozen-tbody {\n    position: sticky;\n    z-index: 1;\n}\n.p-datatable-scrollable .p-datatable-tfoot {\n    position: sticky;\n    bottom: 0;\n    z-index: 1;\n}\n.p-datatable-scrollable .p-frozen-column {\n    position: sticky;\n    background: inherit;\n}\n.p-datatable-scrollable th.p-frozen-column {\n    z-index: 1;\n}\n.p-datatable-scrollable-both .p-datatable-thead > tr > th,\n.p-datatable-scrollable-both .p-datatable-tbody > tr > td,\n.p-datatable-scrollable-both .p-datatable-tfoot > tr > td,\n.p-datatable-scrollable-horizontal .p-datatable-thead > tr > th .p-datatable-scrollable-horizontal .p-datatable-tbody > tr > td,\n.p-datatable-scrollable-horizontal .p-datatable-tfoot > tr > td {\n    flex: 1 0 auto;\n}\n.p-datatable-flex-scrollable {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.p-datatable-flex-scrollable .p-datatable-wrapper {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    height: 100%;\n}\n.p-datatable-scrollable .p-rowgroup-header {\n    position: sticky;\n    z-index: 1;\n}\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead,\n.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot {\n    display: table;\n    border-collapse: collapse;\n    width: 100%;\n    table-layout: fixed;\n}\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr,\n.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot > tr {\n    display: table-row;\n}\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr > th,\n.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot > tr > td {\n    display: table-cell;\n}\n.p-datatable-scrollable .p-virtualscroller > .p-datatable-table {\n    display: inline-block; /* For Safari */\n}\n\n/* Resizable */\n.p-datatable-resizable > .p-datatable-wrapper {\n    overflow-x: auto;\n}\n.p-datatable-resizable .p-datatable-thead > tr > th,\n.p-datatable-resizable .p-datatable-tfoot > tr > td,\n.p-datatable-resizable .p-datatable-tbody > tr > td {\n    overflow: hidden;\n    white-space: nowrap;\n}\n.p-datatable-resizable .p-resizable-column:not(.p-frozen-column) {\n    background-clip: padding-box;\n    position: relative;\n}\n.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer {\n    display: none;\n}\n.p-datatable .p-column-resizer {\n    display: block;\n    position: absolute !important;\n    top: 0;\n    right: 0;\n    margin: 0;\n    width: 0.5rem;\n    height: 100%;\n    padding: 0px;\n    cursor: col-resize;\n    border: 1px solid transparent;\n}\n.p-datatable .p-column-header-content {\n    display: flex;\n    align-items: center;\n}\n.p-datatable .p-column-resizer-helper {\n    width: 1px;\n    position: absolute;\n    z-index: 10;\n    display: none;\n}\n.p-datatable .p-row-editor-init,\n.p-datatable .p-row-editor-save,\n.p-datatable .p-row-editor-cancel {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Expand */\n.p-datatable .p-row-toggler {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Reorder */\n.p-datatable-reorder-indicator-up,\n.p-datatable-reorder-indicator-down {\n    position: absolute;\n    display: none;\n}\n.p-reorderable-column,\n.p-datatable-reorderablerow-handle {\n    cursor: move;\n}\n\n/* Loader */\n.p-datatable .p-datatable-loading-overlay {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 2;\n}\n\n/* Filter */\n.p-column-filter-row {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n.p-column-filter-menu {\n    display: inline-flex;\n    margin-left: auto;\n}\n.p-column-filter-row .p-column-filter-element {\n    flex: 1 1 auto;\n    width: 1%;\n}\n.p-column-filter-menu-button,\n.p-column-filter-clear-button {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n.p-column-filter-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-column-filter-row-items {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.p-column-filter-row-item {\n    cursor: pointer;\n}\n.p-column-filter-add-button,\n.p-column-filter-remove-button {\n    justify-content: center;\n}\n.p-column-filter-add-button .p-button-label,\n.p-column-filter-remove-button .p-button-label {\n    flex-grow: 0;\n}\n.p-column-filter-buttonbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {\n    width: auto;\n}\n\n/* Responsive */\n.p-datatable .p-datatable-tbody > tr > td > .p-column-title {\n    display: none;\n}\n\n/* VirtualScroller */\n.p-datatable .p-virtualscroller-loading {\n    transform: none !important;\n    min-height: 0;\n    position: sticky;\n    top: 0;\n    left: 0;\n}\n";
styleInject$1(css_248z$1);
script$b.render = render$b;
var script$1 = {
  name: "Column",
  props: {
    columnKey: {
      type: null,
      default: null
    },
    field: {
      type: [String, Function],
      default: null
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    filterField: {
      type: [String, Function],
      default: null
    },
    dataType: {
      type: String,
      default: "text"
    },
    sortable: {
      type: Boolean,
      default: false
    },
    header: {
      type: null,
      default: null
    },
    footer: {
      type: null,
      default: null
    },
    style: {
      type: null,
      default: null
    },
    class: {
      type: String,
      default: null
    },
    headerStyle: {
      type: null,
      default: null
    },
    headerClass: {
      type: String,
      default: null
    },
    bodyStyle: {
      type: null,
      default: null
    },
    bodyClass: {
      type: String,
      default: null
    },
    footerStyle: {
      type: null,
      default: null
    },
    footerClass: {
      type: String,
      default: null
    },
    showFilterMenu: {
      type: Boolean,
      default: true
    },
    showFilterOperator: {
      type: Boolean,
      default: true
    },
    showClearButton: {
      type: Boolean,
      default: true
    },
    showApplyButton: {
      type: Boolean,
      default: true
    },
    showFilterMatchModes: {
      type: Boolean,
      default: true
    },
    showAddButton: {
      type: Boolean,
      default: true
    },
    filterMatchModeOptions: {
      type: Array,
      default: null
    },
    maxConstraints: {
      type: Number,
      default: 2
    },
    excludeGlobalFilter: {
      type: Boolean,
      default: false
    },
    filterHeaderClass: {
      type: String,
      default: null
    },
    filterHeaderStyle: {
      type: null,
      default: null
    },
    filterMenuClass: {
      type: String,
      default: null
    },
    filterMenuStyle: {
      type: null,
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    expander: {
      type: Boolean,
      default: false
    },
    colspan: {
      type: Number,
      default: null
    },
    rowspan: {
      type: Number,
      default: null
    },
    rowReorder: {
      type: Boolean,
      default: false
    },
    rowReorderIcon: {
      type: String,
      default: "pi pi-bars"
    },
    reorderableColumn: {
      type: Boolean,
      default: true
    },
    rowEditor: {
      type: Boolean,
      default: false
    },
    frozen: {
      type: Boolean,
      default: false
    },
    alignFrozen: {
      type: String,
      default: "left"
    },
    exportable: {
      type: Boolean,
      default: true
    },
    exportHeader: {
      type: String,
      default: null
    },
    exportFooter: {
      type: String,
      default: null
    },
    filterMatchMode: {
      type: String,
      default: null
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  render() {
    return null;
  }
};
var script = {
  name: "Chart",
  emits: ["select", "loaded"],
  props: {
    type: String,
    data: null,
    options: null,
    plugins: null,
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 150
    },
    canvasProps: {
      type: null,
      default: null
    }
  },
  chart: null,
  watch: {
    data: {
      handler() {
        this.reinit();
      },
      deep: true
    },
    type() {
      this.reinit();
    },
    options() {
      this.reinit();
    }
  },
  mounted() {
    this.initChart();
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  },
  methods: {
    initChart() {
      import('file:///Users/edward/projects/digitmint/demo/demo/node_modules/.pnpm/chart.js@4.2.0/node_modules/chart.js/auto/auto.js').then((module) => {
        if (this.chart) {
          this.chart.destroy();
          this.chart = null;
        }
        if (module && module.default) {
          this.chart = new module.default(this.$refs.canvas, {
            type: this.type,
            data: this.data,
            options: this.options,
            plugins: this.plugins
          });
        }
        this.$emit("loaded", this.chart);
      });
    },
    getCanvas() {
      return this.$canvas;
    },
    getChart() {
      return this.chart;
    },
    getBase64Image() {
      return this.chart.toBase64Image();
    },
    refresh() {
      if (this.chart) {
        this.chart.update();
      }
    },
    reinit() {
      this.initChart();
    },
    onCanvasClick(event2) {
      if (this.chart) {
        const element = this.chart.getElementsAtEventForMode(event2, "nearest", { intersect: true }, false);
        const dataset = this.chart.getElementsAtEventForMode(event2, "dataset", { intersect: true }, false);
        if (element && element[0] && dataset) {
          this.$emit("select", { originalEvent: event2, element: element[0], dataset });
        }
      }
    },
    generateLegend() {
      if (this.chart) {
        return this.chart.generateLegend();
      }
    }
  }
};
const _hoisted_1 = { class: "p-chart" };
const _hoisted_2 = ["width", "height"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("canvas", mergeProps({
      ref: "canvas",
      width: $props.width,
      height: $props.height,
      onClick: _cache[0] || (_cache[0] = ($event) => $options.onCanvasClick($event))
    }, $props.canvasProps), null, 16, _hoisted_2)
  ]);
}
function styleInject(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = "\n.p-chart {\n    position: relative;\n}\n";
styleInject(css_248z);
script.render = render;
const plugins_primevue_ts_7rYYRZQLyx = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Column", script$1);
  nuxtApp.vueApp.component("DataTable", script$b);
  nuxtApp.vueApp.component("InputText", script$e);
  nuxtApp.vueApp.component("Dropdown", script$g);
  nuxtApp.vueApp.component("Button", script$f);
  nuxtApp.vueApp.component("Chart", script);
});
const _plugins = [
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules__pnpm_nuxt_643_0_0_node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_sF5fM3LTTq,
  node_modules__pnpm_nuxt_643_0_0_node_modules_nuxt_dist_app_plugins_router_mjs_hFNJ39OY2j,
  plugins_primevue_ts_7rYYRZQLyx
];
const _sfc_main$1 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref([
      { type: "plane", carbon_footprint_km: 255 },
      { type: "bus", carbon_footprint_km: 105 },
      { type: "car", carbon_footprint_km: 96 },
      { type: "motorbike", carbon_footprint_km: 80 },
      { type: "train", carbon_footprint_km: 41 },
      { type: "bike", carbon_footprint_km: 22 },
      { type: "walking", carbon_footprint_km: 19 }
    ]);
    const colors = [
      "#FF0000",
      "#EEAA00",
      "#DD0000",
      "#CC0000",
      "#BB44EE",
      "#AA00AA",
      "#0000FF"
    ];
    const stackedOptions = ref(
      {
        plugins: {
          tooltip: {
            mode: "index",
            intersect: false
          },
          legend: {
            labels: {
              color: "#495057"
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: "#495057"
            },
            grid: {
              color: "#ebedef"
            }
          },
          y: {
            stacked: true,
            ticks: {
              color: "#495057"
            },
            grid: {
              color: "#ebedef"
            }
          }
        }
      }
    );
    ref({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        type: "bar",
        label: "Dataset 1",
        backgroundColor: "#42A5F5",
        data: [50, 25, 12, 48, 90, 76, 42]
      }, {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "#66BB6A",
        data: [21, 84, 24, 75, 37, 65, 34]
      }, {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "#FFA726",
        data: [41, 52, 24, 74, 23, 21, 32]
      }]
    });
    const _data = computed(() => {
      const labels = Array.from(new Set(records.value.map((r) => r.name)));
      const datasets = data.value.map((d, index) => {
        return {
          type: "bar",
          label: d.type,
          backgroundColor: colors.at(index),
          data: Array(labels.length).fill(0)
        };
      });
      const x = datasets.map((d) => d.data);
      console.log(x);
      records.value.forEach((record) => {
        const personName = labels.find((label) => label === record.name);
        const personIndex = labels.indexOf(personName);
        const match = datasets.find((d) => d.label === record.type);
        match.data[personIndex] += record.amount;
        console.log(`${personName}(${personIndex}) - ${match.label} = ${record.amount}`, match.data[personIndex]);
      });
      return {
        labels,
        datasets
      };
    });
    const inputName = ref("");
    const inputKm = ref(10);
    const selectedType = ref(data.value[0]);
    const records = ref([]);
    function insert() {
      const record = {
        name: inputName.value,
        type: selectedType.value.type,
        amount: inputKm.value * selectedType.value.carbon_footprint_km
      };
      records.value.push(record);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_Button = resolveComponent("Button");
      const _component_Chart = resolveComponent("Chart");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid p-fluid" }, _attrs))}><div class="col-12 md:col-12">`);
      _push(ssrRenderComponent(_component_InputText, {
        modelValue: unref(inputName),
        "onUpdate:modelValue": ($event) => isRef(inputName) ? inputName.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_Dropdown, {
        modelValue: unref(selectedType),
        "onUpdate:modelValue": ($event) => isRef(selectedType) ? selectedType.value = $event : null,
        options: unref(data),
        optionLabel: "type"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputText, {
        disabled: "",
        value: unref(selectedType).carbon_footprint_km + "g CO2/km"
      }, null, _parent));
      _push(`</div><div><div class="p-inputgroup">`);
      _push(ssrRenderComponent(_component_InputText, {
        placeholder: "0",
        modelValue: unref(inputKm),
        "onUpdate:modelValue": ($event) => isRef(inputKm) ? inputKm.value = $event : null
      }, null, _parent));
      _push(`<span class="p-inputgroup-addon">km</span></div>`);
      _push(ssrRenderComponent(_component_Button, { onClick: insert }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`POST`);
          } else {
            return [
              createTextVNode("POST")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card" style="${ssrRenderStyle({ "min-height": "400px" })}">`);
      _push(ssrRenderComponent(_component_Chart, {
        type: "bar",
        data: unref(_data),
        options: unref(stackedOptions)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component.ff9b82cd.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.0.0/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { __nuxt_component_0 as _, entry$1 as default, useNuxtApp as u };
//# sourceMappingURL=server.mjs.map
