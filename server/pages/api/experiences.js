"use strict";
(() => {
var exports = {};
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 19:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_runMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(312);


// Initializing the cors middleware
const cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({
    methods: [
        "GET",
        "HEAD"
    ]
});
async function handler(req, res) {
    await (0,_utils_runMiddleware__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res, cors);
    if (req.method === "GET") {
        const experiences = [
            {
                name: "IT Technical Analyst at Cummins Inc.",
                description: "- CMES support (Cummins Manufacturing Execution System) and IT application support.<br />- Database analysis (Oracle SQL, SQL Server).<br />- Design and Development of the eTBWS (Team-Based Work System) Platform using Ignition software with the Python language.<br />- Analysis, reporting and data modeling with Cognos Analytics IBM.<br />- Provide technical guidance to users on IBM Maximo Platform.<br />- Development of Microsoft Business Intelligence (Data modeling, Power BI).<br />- Creation of web reports for CMES, Maximo and eTBWS users using ASP.NET with C# language.<br />- Project Organization with Waterfall Methodology.<br /><br />",
                stack: [
                    "June 2022",
                    "Present"
                ]
            }
        ];
        return res.json(experiences);
    } else {
        return res.status(400).json({
            message: "Only GET request allowed"
        });
    }
}


/***/ }),

/***/ 312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ runMiddleware)
/* harmony export */ });
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject)=>{
        fn(req, res, (result)=>{
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(19));
module.exports = __webpack_exports__;

})();