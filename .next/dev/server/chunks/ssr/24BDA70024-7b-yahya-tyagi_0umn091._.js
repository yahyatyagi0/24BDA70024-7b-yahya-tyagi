module.exports = [
"[project]/24BDA70024-7b-yahya-tyagi/store/useProductStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProductStore",
    ()=>useProductStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const initialProducts = [
    {
        id: 1,
        name: "Smartphone",
        price: 299.99,
        category: "Electronics",
        quantity: 1
    },
    {
        id: 2,
        name: "Tablet",
        price: 449.99,
        category: "Electronics",
        quantity: 2
    },
    {
        id: 3,
        name: "Smartwatch",
        price: 199.99,
        category: "Electronics",
        quantity: 1
    }
];
const useProductStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        products: initialProducts,
        hydrated: false,
        setHydrated: (value)=>set({
                hydrated: value
            }),
        addProduct: ()=>{
            const products = get().products;
            const nextId = products.length ? Math.max(...products.map((p)=>p.id)) + 1 : 1;
            const nextIndex = products.length + 1;
            set({
                products: [
                    ...products,
                    {
                        id: nextId,
                        name: `New Product ${nextIndex}`,
                        price: 0,
                        category: "General",
                        quantity: 1
                    }
                ]
            });
        },
        deleteProduct: (id)=>set((state)=>({
                    products: state.products.filter((p)=>p.id !== id)
                })),
        updateQuantity: (id, quantity)=>set((state)=>({
                    products: state.products.map((p)=>p.id === id ? {
                            ...p,
                            quantity
                        } : p)
                })),
        getTotal: ()=>{
            const state = get();
            return state.products.reduce((total, product)=>total + product.price * product.quantity, 0);
        }
    }), {
    name: "products-store",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    partialize: (state)=>({
            products: state.products
        }),
    onRehydrateStorage: ()=>(state)=>{
            state?.setHydrated(true); // flip flag once data is loaded from storage
        }
}));
}),
"[project]/24BDA70024-7b-yahya-tyagi/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/24BDA70024-7b-yahya-tyagi/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300", {
    variants: {
        variant: {
            default: "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
            destructive: "bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
            outline: "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
            secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
            ghost: "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
            link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/24BDA70024-7b-yahya-tyagi/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
Input.displayName = "Input";
;
}),
"[project]/24BDA70024-7b-yahya-tyagi/components/ProductItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/store/useProductStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/components/ui/input.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ProductItem({ product }) {
    const deleteProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductStore"])((state)=>state.deleteProduct);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductStore"])((state)=>state.updateQuantity);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(String(product.quantity));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-zinc-200 hover:bg-zinc-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-8 py-4 text-lg font-medium text-zinc-900",
                children: product.name
            }, void 0, false, {
                fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductItem.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-8 py-4 text-lg text-zinc-900",
                children: [
                    "$",
                    product.price.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductItem.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-8 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                    type: "number",
                    min: 0,
                    value: draft,
                    onChange: (e)=>setDraft(e.target.value),
                    className: "w-24 h-10 text-lg"
                }, void 0, false, {
                    fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductItem.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductItem.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-8 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "destructive",
                    size: "sm",
                    onClick: ()=>deleteProduct(product.id),
                    "aria-label": `Remove ${product.name}`,
                    children: "Remove"
                }, void 0, false, {
                    fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductItem.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductItem.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductItem.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/store/useProductStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$components$2f$ProductItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/24BDA70024-7b-yahya-tyagi/components/ProductItem.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ProductList() {
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductStore"])((state)=>state.products);
    const getTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductStore"])((state)=>state.getTotal);
    const hydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductStore"])((state)=>state.hydrated);
    if (!hydrated) return null;
    const total = getTotal();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-600 text-white px-8 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold",
                    children: "Cart"
                }, void 0, false, {
                    fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            products.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "px-8 py-10 text-center text-zinc-500",
                children: "Your cart is empty."
            }, void 0, false, {
                fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b-2 border-zinc-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-8 py-4 text-left text-xl font-bold text-zinc-900",
                                            children: "Product"
                                        }, void 0, false, {
                                            fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-8 py-4 text-left text-xl font-bold text-zinc-900",
                                            children: "Price"
                                        }, void 0, false, {
                                            fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-8 py-4 text-left text-xl font-bold text-zinc-900",
                                            children: "Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-8 py-4 text-left text-xl font-bold text-zinc-900",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$components$2f$ProductItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        product: product
                                    }, product.id, false, {
                                        fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t-2 border-zinc-200 px-8 py-6 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-lg font-semibold text-zinc-900",
                                children: [
                                    "Total: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$24BDA70024$2d$7b$2d$yahya$2d$tyagi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold",
                                        children: [
                                            "$",
                                            total.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                                        lineNumber: 45,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/24BDA70024-7b-yahya-tyagi/components/ProductList.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=24BDA70024-7b-yahya-tyagi_0umn091._.js.map