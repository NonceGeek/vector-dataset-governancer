"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/NavItem.tsx


function NavItem({ href , title  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "font-sans font-semibold text-lg",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            children: title
        })
    });
}

// EXTERNAL MODULE: external "@manahippo/aptos-wallet-adapter"
var aptos_wallet_adapter_ = __webpack_require__(4736);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/ModalContext.tsx

const ModalContext = /*#__PURE__*/ (0,external_react_.createContext)({
    modalState: {
        walletModal: false
    },
    setModalState: (_)=>{}
});

;// CONCATENATED MODULE: ./src/components/WalletModal.tsx





function WalletModal() {
    const { wallets , connect , account , disconnect  } = (0,aptos_wallet_adapter_.useWallet)();
    const { modalState , setModalState  } = (0,external_react_.useContext)(ModalContext);
    async function connectWallet(wallet) {
        connect(wallet.adapter.name);
        setModalState({
            ...modalState,
            walletModal: false
        });
    }
    function disconnectWallet() {
        disconnect();
        setModalState({
            ...modalState,
            walletModal: false
        });
        location.reload();
    }
    function modalBox(content) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "wallet-modal",
                className: modalState.walletModal ? "modal modal-open cursor-point" : "modal cursor-pointer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "btn btn-sm btn-circle absolute right-2 top-2",
                            onClick: ()=>setModalState({
                                    ...modalState,
                                    walletModal: false
                                }),
                            children: "✕"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-6 flex flex-col",
                            children: content
                        })
                    ]
                })
            })
        });
    }
    return account?.address ? modalBox(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                style: {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "inline"
                },
                children: [
                    "Account: ",
                    account.address.toString()
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn mt-5",
                onClick: disconnectWallet,
                children: "Disconnect"
            })
        ]
    })) : modalBox(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: wallets.map((wallet, i)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: i == wallets.length - 1 ? "btn gap-2" : "btn gap-2 mb-5",
                onClick: ()=>connectWallet(wallet),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        width: 25,
                        height: 25,
                        src: wallet.adapter.icon
                    }),
                    wallet.adapter.name
                ]
            }, i);
        })
    }));
}

;// CONCATENATED MODULE: ./src/components/AptosConnect.tsx





function AptosConnect() {
    const { account  } = (0,aptos_wallet_adapter_.useWallet)();
    const { modalState , setModalState  } = (0,external_react_.useContext)(ModalContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            account?.address ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn btn-primary w-48",
                onClick: ()=>setModalState({
                        ...modalState,
                        walletModal: true
                    }),
                style: {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "inline"
                },
                children: account.address.toString()
            }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn",
                onClick: ()=>setModalState({
                        ...modalState,
                        walletModal: true
                    }),
                children: "Connect wallet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(WalletModal, {})
        ]
    });
}

// EXTERNAL MODULE: ./src/config/constants.ts
var constants = __webpack_require__(8002);
;// CONCATENATED MODULE: ./src/components/NavBar.tsx





function NavBar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "navbar py-4 px-4 bg-base-100",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "http://movedid.build",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/logo.png",
                            width: 64,
                            height: 64,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "menu menu-horizontal p-0 ml-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                href: "/",
                                title: "Proposal Submitter"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "font-sans font-semibold text-lg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://github.com/NonceGeek/MoveDID/tree/main/did-aptos",
                                        target: "_blank",
                                        children: "Source Code"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: constants/* MODULE_URL */.kA,
                                        target: "_blank",
                                        children: "Contract on Explorer"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AptosConnect, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx








function WalletSelector({ Component , pageProps  }) {
    const { 0: modalState , 1: setModalState  } = (0,external_react_.useState)({
        walletModal: false
    });
    const wallets = (0,external_react_.useMemo)(()=>[
            new aptos_wallet_adapter_.AptosWalletAdapter(),
            new aptos_wallet_adapter_.MartianWalletAdapter(),
            new aptos_wallet_adapter_.PontemWalletAdapter(),
            new aptos_wallet_adapter_.FewchaWalletAdapter(), 
        ], []);
    const modals = (0,external_react_.useMemo)(()=>({
            modalState,
            setModalState: (modalState)=>{
                setModalState(modalState);
            }
        }), [
        modalState
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(aptos_wallet_adapter_.WalletProvider, {
        wallets: wallets,
        autoConnect: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ModalContext.Provider, {
            value: modals,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps,
                        className: "bg-base-300"
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const _app = (WalletSelector);


/***/ }),

/***/ 4736:
/***/ ((module) => {

module.exports = require("@manahippo/aptos-wallet-adapter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,2], () => (__webpack_exec__(7218)));
module.exports = __webpack_exports__;

})();