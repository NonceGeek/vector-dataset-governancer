"use strict";
(() => {
var exports = {};
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 3096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@supabase/supabase-js"
const supabase_js_namespaceObject = require("@supabase/supabase-js");
;// CONCATENATED MODULE: ./src/config/constants.ts
const NFT_STORAGE_KEY = (/* unused pure expression or super */ null && (""));
const SUPABASE_KEY = "";
const SUPABASE_URL = "";
const DAPP_NAME = (/* unused pure expression or super */ null && ("Governancer")); // changed here.
const DAPP_ADDRESS = "0xca1fe57768cad929b40d06ad66f87752e11c7f01be485d710ba36215422b2ae0"; // changed here.
const MARKET_COINT_TYPE = (/* unused pure expression or super */ null && ("0x1::aptos_coin::AptosCoin"));
const APTOS_NODE_URL = (/* unused pure expression or super */ null && ("https://fullnode.devnet.aptoslabs.com/v1/"));
const APTOS_FAUCET_URL = "https://faucet.devnet.aptoslabs.com/v1/";
const NETWORK = "devnet";
const MODULE_URL = `https://explorer.aptoslabs.com/account/${DAPP_ADDRESS}/modules?network=${NETWORK}`;
const ETH_SIGNER_URL = "https://eth-signer-react-app.vercel.app/?msg=";
const APTOS_SIGNER_URL = "https://aptos-signer.vercel.app/?msg=";

;// CONCATENATED MODULE: ./src/utils/supabase.ts


const supabase = (0,supabase_js_namespaceObject.createClient)(SUPABASE_URL, SUPABASE_KEY);

;// CONCATENATED MODULE: ./src/pages/api/offers.ts

async function handler(req, res) {
    const { data: offers , error  } = await supabase.from("offers").select("id,buyer,seller,price,status,createAt,updateAt,token:tokens(*)").eq("status", "ongoing");
    if (error) {
        return res.status(500).json(error);
    } else {
        return res.status(200).json(offers);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3096));
module.exports = __webpack_exports__;

})();