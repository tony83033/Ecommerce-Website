"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getproduct";
exports.ids = ["pages/api/getproduct"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./middleware/mongoose.js":
/*!********************************!*\
  !*** ./middleware/mongoose.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDb = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            return handler(req, res);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL);\n        return handler(req, res);\n    }\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL21vbmdvb3NlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxTQUFTLEdBQUdDLENBQUFBLE9BQU8sR0FBSSxPQUFPQyxHQUFHLEVBQUNDLEdBQUcsR0FBRztRQUMxQyxJQUFHSiwyRUFBa0MsRUFBQztZQUNsQyxPQUFPRSxPQUFPLENBQUNDLEdBQUcsRUFBQ0MsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFDRCxNQUFNSix1REFBZ0IsQ0FBQ1EsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQztRQUM3QyxPQUFPUixPQUFPLENBQUNDLEdBQUcsRUFBQ0MsR0FBRyxDQUFDLENBQUM7S0FDM0I7QUFBQTtBQUVELGlFQUFlSCxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9taWRkbGV3YXJlL21vbmdvb3NlLmpzP2E3OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXHJcblxyXG5jb25zdCBjb25uZWN0RGIgPSBoYW5kbGVyID0+IGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSl7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIocmVxLHJlcyk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTClcclxuICAgIHJldHVybiBoYW5kbGVyKHJlcSxyZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./middleware/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/product.js":
/*!***************************!*\
  !*** ./models/product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst Schema = mongoose.Schema;\n// const model = mongoose.model;\nconst ProductSchema = new Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    desc: {\n        type: String,\n        required: true\n    },\n    img: {\n        type: String,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    size: {\n        type: String\n    },\n    color: {\n        type: String\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    availableQty: {\n        type: Number,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O01BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBVSxDQUFDO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRSxNQUFNO0FBQzlCLGdDQUFnQztBQUNoQyxNQUFNQyxhQUFhLEdBQUcsSUFBSUQsTUFBTSxDQUFDO0lBQzdCRSxLQUFLLEVBQUU7UUFBQ0MsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUM7SUFDckNDLElBQUksRUFBRTtRQUFDSCxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7UUFBRUUsTUFBTSxFQUFFLElBQUk7S0FBQztJQUNsREMsSUFBSSxFQUFFO1FBQUNMLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFDO0lBQ3BDSSxHQUFHLEVBQUU7UUFBQ04sSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUM7SUFDbkNLLFFBQVEsRUFBRTtRQUFDUCxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBQztJQUN4Q00sSUFBSSxFQUFFO1FBQUNSLElBQUksRUFBRUMsTUFBTTtLQUFDO0lBQ3BCUSxLQUFLLEVBQUU7UUFBQ1QsSUFBSSxFQUFFQyxNQUFNO0tBQUM7SUFDckJTLEtBQUssRUFBRTtRQUFDVixJQUFJLEVBQUVXLE1BQU07UUFBRVQsUUFBUSxFQUFFLElBQUk7S0FBQztJQUNyQ1UsWUFBWSxFQUFFO1FBQUNaLElBQUksRUFBRVcsTUFBTTtRQUFFVCxRQUFRLEVBQUUsSUFBSTtLQUFDO0NBRS9DLEVBQUM7SUFBQ1csVUFBVSxFQUFFLElBQUk7Q0FBQyxDQUFDO0FBQ3JCbEIsUUFBUSxDQUFDbUIsTUFBTSxHQUFDLEVBQUUsQ0FBQztBQUVuQixpRUFBZW5CLFFBQVEsQ0FBQ29CLEtBQUssQ0FBQyxTQUFTLEVBQUNqQixhQUFhLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL21vZGVscy9wcm9kdWN0LmpzPzA3M2MiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbi8vIGNvbnN0IG1vZGVsID0gbW9uZ29vc2UubW9kZWw7XHJcbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBzbHVnOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlfSxcclxuICAgIGRlc2M6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIGltZzoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgY2F0ZWdvcnk6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIHNpemU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgY29sb3I6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgcHJpY2U6IHt0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIGF2YWlsYWJsZVF0eToge3R5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWV9XHJcbiAgICBcclxufSx7dGltZXN0YW1wczogdHJ1ZX0pO1xyXG5tb25nb29zZS5tb2RlbHM9e307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcInByb2R1Y3RcIixQcm9kdWN0U2NoZW1hKTsgIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNjaGVtYSIsIlByb2R1Y3RTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInNsdWciLCJ1bmlxdWUiLCJkZXNjIiwiaW1nIiwiY2F0ZWdvcnkiLCJzaXplIiwiY29sb3IiLCJwcmljZSIsIk51bWJlciIsImF2YWlsYWJsZVF0eSIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/product.js\n");

/***/ }),

/***/ "(api)/./pages/api/getproduct.js":
/*!*********************************!*\
  !*** ./pages/api/getproduct.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/product */ \"(api)/./models/product.js\");\n/* harmony import */ var _middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/mongoose */ \"(api)/./middleware/mongoose.js\");\n\n\nconst handler = async (req, res)=>{\n    let product = await _models_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json({\n        product\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0cHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFDTztBQUVqRCxNQUFNRSxPQUFPLEdBQUcsT0FBTUMsR0FBRyxFQUFDQyxHQUFHLEdBQUc7SUFDNUIsSUFBSUMsT0FBTyxHQUFHLE1BQU1MLDREQUFZLEVBQUU7SUFDbENJLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBQ0gsT0FBTztLQUFDLENBQUM7Q0FDbEM7QUFFRCxpRUFBZUosZ0VBQVMsQ0FBQ0MsT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9hcGkvZ2V0cHJvZHVjdC5qcz8xMDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0J1xyXG5pbXBvcnQgQ29ubmVjdERiIGZyb20gJy4uLy4uL21pZGRsZXdhcmUvbW9uZ29vc2UnXHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGxldCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kKClcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtwcm9kdWN0fSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdERiKGhhbmRsZXIpOyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwiQ29ubmVjdERiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInByb2R1Y3QiLCJmaW5kIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getproduct.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getproduct.js"));
module.exports = __webpack_exports__;

})();