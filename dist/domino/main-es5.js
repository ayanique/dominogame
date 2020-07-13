function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./screens/game/game.module": ["./src/app/screens/game/game.module.ts", "default~screens-game-game-module~screens-menu-menu-module", "screens-game-game-module"],
      "./screens/menu/menu.module": ["./src/app/screens/menu/menu.module.ts", "default~screens-game-game-module~screens-menu-menu-module", "screens-menu-menu-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='game-area'>\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guards_game_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/game.guard */
    "./src/app/guards/game.guard.ts");

    var routes = [{
      path: "",
      children: [{
        path: '',
        loadChildren: "./screens/menu/menu.module#MenuScreenModule"
      }, {
        path: 'game',
        loadChildren: "./screens/game/game.module#GameScreenModule",
        canActivate: [_guards_game_guard__WEBPACK_IMPORTED_MODULE_3__["GameGuard"]]
      }, {
        path: "",
        pathMatch: "full",
        redirectTo: ""
      }, {
        path: "**",
        redirectTo: ""
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#game-area {\n  width: 100%;\n  height: 100vh;\n  margin: 0 auto;\n  background-image: url('board-bg.jpeg');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9yeWFjL1NhbmRib3gvZG9taW5vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ2FtZS1hcmVhe1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwdmg7XG4gIG1hcmdpbjowIGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2JvYXJkLWJnLmpwZWcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiIsIiNnYW1lLWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9ib2FyZC1iZy5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/game.service */
    "./src/app/services/game.service.ts");
    /* harmony import */


    var _services_fullscreen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/fullscreen.service */
    "./src/app/services/fullscreen.service.ts");
    /* harmony import */


    var _guards_game_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./guards/game.guard */
    "./src/app/guards/game.guard.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
      providers: [_guards_game_guard__WEBPACK_IMPORTED_MODULE_6__["GameGuard"], _services_fullscreen_service__WEBPACK_IMPORTED_MODULE_5__["FullScreenService"], _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guards/game.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/game.guard.ts ***!
    \**************************************/

  /*! exports provided: GameGuard */

  /***/
  function srcAppGuardsGameGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameGuard", function () {
      return GameGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/game.service */
    "./src/app/services/game.service.ts");

    var GameGuard = /*#__PURE__*/function () {
      function GameGuard(_router, _gameService) {
        _classCallCheck(this, GameGuard);

        this._router = _router;
        this._gameService = _gameService;
      }

      _createClass(GameGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this = this;

          return new Promise(function (resolve, reject) {
            if (_this._gameService.hasCurrentGame()) {
              resolve(true);
            } else {
              _this._router.navigate(["/menu"]);

              resolve(false);
            }
          });
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild() {
          return this.canActivate();
        }
      }]);

      return GameGuard;
    }();

    GameGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
      }];
    };

    GameGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], GameGuard);
    /***/
  },

  /***/
  "./src/app/model/board.model.ts":
  /*!**************************************!*\
    !*** ./src/app/model/board.model.ts ***!
    \**************************************/

  /*! exports provided: Board */

  /***/
  function srcAppModelBoardModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Board", function () {
      return Board;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Board = /*#__PURE__*/function () {
      function Board() {
        _classCallCheck(this, Board);

        this.center = null;
      }

      _createClass(Board, [{
        key: "playLeft",
        value: function playLeft(domino) {
          if (!this.center) {
            this.center = domino;
            return true;
          }

          if (this.canPlayLeft(domino)) {
            var leftEnd = this._getLeftEnd();

            leftEnd.previous = domino;
            domino.next = leftEnd;

            if (domino.value[0] == (leftEnd.inverted ? leftEnd.value[1] : leftEnd.value[0])) {
              domino.inverted = true;
            }

            return true;
          }

          return false;
        }
      }, {
        key: "playRight",
        value: function playRight(domino) {
          if (!this.center) {
            this.center = domino;
            return true;
          }

          if (this.canPlayRight(domino)) {
            var rightEnd = this._getRightEnd();

            rightEnd.next = domino;
            domino.previous = rightEnd;

            if (domino.value[1] == (rightEnd.inverted ? rightEnd.value[0] : rightEnd.value[1])) {
              domino.inverted = true;
            }

            return true;
          }

          return false;
        }
      }, {
        key: "canPlayLeft",
        value: function canPlayLeft(domino) {
          if (!this.center) {
            return true;
          }

          var leftEnd = this._getLeftEnd();

          return leftEnd ? leftEnd.matchPrevious(domino) : true;
        }
      }, {
        key: "canPlayRight",
        value: function canPlayRight(domino) {
          if (!this.center) {
            return true;
          }

          var rightEnd = this._getRightEnd();

          return rightEnd ? rightEnd.matchNext(domino) : true;
        }
      }, {
        key: "_getLeftEnd",
        value: function _getLeftEnd() {
          var leftEnd = this.center;

          while (leftEnd && leftEnd.previous) {
            leftEnd = leftEnd.previous;
          }

          return leftEnd;
        }
      }, {
        key: "_getRightEnd",
        value: function _getRightEnd() {
          var rightEnd = this.center;

          while (rightEnd && rightEnd.next) {
            rightEnd = rightEnd.next;
          }

          return rightEnd;
        }
      }]);

      return Board;
    }();
    /***/

  },

  /***/
  "./src/app/model/domino.model.ts":
  /*!***************************************!*\
    !*** ./src/app/model/domino.model.ts ***!
    \***************************************/

  /*! exports provided: Domino */

  /***/
  function srcAppModelDominoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Domino", function () {
      return Domino;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Domino = /*#__PURE__*/function () {
      function Domino(first, second) {
        _classCallCheck(this, Domino);

        this.value = [first, second];
        this.reset();
      }

      _createClass(Domino, [{
        key: "reset",
        value: function reset() {
          this.previous = null;
          this.next = null;
          this.inverted = false;
        }
      }, {
        key: "matchPrevious",
        value: function matchPrevious(otherDomino) {
          if (!this.previous && otherDomino.value.indexOf(this.inverted ? this.value[1] : this.value[0]) >= 0) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "matchNext",
        value: function matchNext(otherDomino) {
          if (!this.next && otherDomino.value.indexOf(this.inverted ? this.value[0] : this.value[1]) >= 0) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "isDouble",
        value: function isDouble() {
          return this.value[0] == this.value[1];
        }
      }, {
        key: "isInverted",
        value: function isInverted() {
          return this.inverted;
        }
      }, {
        key: "total",
        get: function get() {
          return this.value[0] + this.value[1];
        }
      }]);

      return Domino;
    }();
    /***/

  },

  /***/
  "./src/app/model/game.model.ts":
  /*!*************************************!*\
    !*** ./src/app/model/game.model.ts ***!
    \*************************************/

  /*! exports provided: Game */

  /***/
  function srcAppModelGameModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Game", function () {
      return Game;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _board_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./board.model */
    "./src/app/model/board.model.ts");
    /* harmony import */


    var _player_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./player.model */
    "./src/app/model/player.model.ts");
    /* harmony import */


    var _domino_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./domino.model */
    "./src/app/model/domino.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var Game = /*#__PURE__*/function () {
      function Game(gameData, _gameService) {
        _classCallCheck(this, Game);

        this._gameService = _gameService; //Initialise Public Variables

        this.self = "";
        this.code = "000000";
        this.status = "Pending";
        this.type = "Push";
        this.players = [];
        this.deck = "";
        this.playTo = 6;
        this.playClock = 0;
        this.turn = 1; //Initialise active player

        var shield = gameData.shield;
        delete gameData.shield; //Load Public Variable from arguments

        var deck = gameData.deck;
        delete gameData.players;
        delete gameData.deck;
        Object.assign(this, gameData); //Load Active Player

        this._activePlayer = shield; //Load deck

        this.deck = deck; //Load Private Variables

        this._firstGame = true;
        this._auto = true;
        this._multiplayer = false;
        this.board = new _board_model__WEBPACK_IMPORTED_MODULE_1__["Board"]();
        this._statusChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._playMade = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._activePlayed = false;
        this._timeout = 20; //Initialise deck

        if (this.deck.length == 0) {
          for (var i = 0; i < 7; i++) {
            for (var j = i; j < 7; j++) {
              this.deck.push(new _domino_model__WEBPACK_IMPORTED_MODULE_3__["Domino"](i, j));
            }
          }
        } //Initialise 4 AI Players


        var ais = ["T-1000", "Wall-E", "C-3PO", "R2-D2", "Rosie", "Optimus", "Megatron", "HAL", "Bender", "Watson", "ASIMO", "Robocop", "Fembot", "Ultron", "Vision", "Megazord", "Cyrax", "Data", "Calculon", "KITT", "J.A.R.V.I.S", "F.R.I.D.A.Y", "R.O.B"];
        var seed = 0;

        var _iterator = _createForOfIteratorHelper(this.code),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var letter = _step.value;
            seed += letter.charCodeAt(0);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        seed = seed % ais.length;

        for (var _i = 0; _i < 4; _i++) {
          this.players.push(new _player_model__WEBPACK_IMPORTED_MODULE_2__["Player"]({
            name: "".concat(ais.splice((seed + 4 * _i) % ais.length, 1)[0]),
            role: this.type == 'Push' ? "Player" : "Jailman"
          }));
        }
      }

      _createClass(Game, [{
        key: "setPlayer",
        value: function setPlayer(player, index) {
          if (this.players[index].human) {
            return false;
          } else {
            var hand = this.players[index].hand;
            Object.assign(this.players[index], player);
            this.players[index].hand = hand;
            this.players[index].human = true;

            if (this.seatsAvailable() == 0) {
              this.start();
            }

            return true;
          }
        }
      }, {
        key: "removePlayer",
        value: function removePlayer(index) {
          if (this.players[index].human) {
            this.players[index].human = false;
            this.players[index].name = "AI ".concat(index + 1);
          } else {
            return false;
          }
        }
      }, {
        key: "seatsAvailable",
        value: function seatsAvailable() {
          var seatsAvailable = 0;

          for (var i = 0; i < this.players.length; i++) {
            if (!this.players[i].human) {
              seatsAvailable++;
            }
          }

          return seatsAvailable;
        }
      }, {
        key: "start",
        value: function start() {
          if (this.status == "Playing") {
            return false;
          }

          this._activePlayed = false;
          this.board.center = null;
          this.turn = 1;

          if (!this._multiplayer) {
            this._shuffle(5);
          }

          this.deal(); //Let Double Six Pose for First Game

          if (this._firstGame) {
            for (var i = 0; i < this.players.length; i++) {
              var _iterator2 = _createForOfIteratorHelper(this.players[i].hand),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var domino = _step2.value;

                  if (domino.value[0] == 6 && domino.value[1] == 6) {
                    this._activePlayer = i;
                    break;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }

          this.status = "Playing";

          this._statusChange.next(this.status);

          this.waitForPlay();
        }
      }, {
        key: "playLeft",
        value: function playLeft(domino) {
          var notify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (!this.canPlayLeft(domino)) {
            return false;
          }

          var dominoIndex = this.players[this._activePlayer].hand.indexOf(domino);

          var validPlay = dominoIndex >= 0 && this.board.playLeft(domino);

          if (validPlay) {
            if (notify) {
              this._playMade.next({
                domino: domino,
                position: "left"
              });
            }

            this.players[this._activePlayer].hand.splice(dominoIndex, 1);

            this._activePlayed = true;

            this._endTurn();
          }

          return validPlay;
        }
      }, {
        key: "playRight",
        value: function playRight(domino) {
          var notify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (!this.canPlayRight(domino)) {
            return false;
          }

          var dominoIndex = this.players[this._activePlayer].hand.indexOf(domino);

          var validPlay = dominoIndex >= 0 && this.board.playRight(domino);

          if (validPlay) {
            if (notify) {
              this._playMade.next({
                domino: domino,
                position: "right"
              });
            }

            this.players[this._activePlayer].hand.splice(dominoIndex, 1);

            this._activePlayed = true;

            this._endTurn();
          }

          return validPlay;
        }
      }, {
        key: "pass",
        value: function pass() {
          var notify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (this.canEndTurn()) {
            if (notify) {
              this._playMade.next({
                domino: null,
                position: "pass"
              });
            }

            this._endTurn();

            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "canPlayLeft",
        value: function canPlayLeft(domino) {
          if (!domino) {
            return false;
          }

          if (this._firstGame && this.turn == 1) {
            return domino.value[0] == 6 && domino.value[1] == 6;
          } else {
            return !this._activePlayed && this.board.canPlayLeft(domino);
          }
        }
      }, {
        key: "canPlayRight",
        value: function canPlayRight(domino) {
          if (!domino) {
            return false;
          }

          if (this._firstGame && this.turn == 1) {
            return domino.value[0] == 6 && domino.value[1] == 6;
          } else {
            return !this._activePlayed && this.board.canPlayRight(domino);
          }
        }
      }, {
        key: "canEndTurn",
        value: function canEndTurn() {
          return this._activePlayed || this._getValidPlays(this.players[this._activePlayer]) == 0;
        }
      }, {
        key: "getActivePlayer",
        value: function getActivePlayer() {
          return this.players[this._activePlayer];
        }
      }, {
        key: "statusChanged",
        value: function statusChanged() {
          return this._statusChange;
        }
      }, {
        key: "playMade",
        value: function playMade() {
          return this._playMade;
        }
      }, {
        key: "isShut",
        value: function isShut() {
          var isShut = true;

          var _iterator3 = _createForOfIteratorHelper(this.players),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var player = _step3.value;
              isShut = isShut && this._getValidPlays(player) == 0;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return this.getActivePlayer().hand.length > 0 && isShut;
        }
      }, {
        key: "isWatching",
        value: function isWatching() {
          var isWatching = true;

          for (var i = 0; i < this.players.length; i++) {
            isWatching = isWatching && this.players[i].remote;
          }

          return isWatching;
        }
      }, {
        key: "isMultiplayer",
        value: function isMultiplayer() {
          return this._multiplayer;
        }
      }, {
        key: "waitForPlay",
        value: function waitForPlay() {
          var _this2 = this;

          if (!this._auto) {
            return false;
          }

          console.log(this.players);

          if (this.canEndTurn()) {
            setTimeout(function () {
              _this2.pass();
            }, 2000);
          } else if (!this.getActivePlayer().human) {
            var turn = this.turn;
            setTimeout(function () {
              _this2._aiTurn(turn);
            }, 2000);
          } else if (this.getActivePlayer().remote) {
            this._runPlayClock(this.turn, this.activePlayer, this._timeout + 5);
          } else {
            this._runPlayClock(this.turn, this.activePlayer, this._timeout);
          }
        }
      }, {
        key: "_endTurn",
        value: function _endTurn() {
          if (this.canEndTurn()) {
            //Check if game is finished
            if (this.getActivePlayer().hand.length == 0) {
              this._endRound();
            } else if (this.isShut()) {
              var counts = [];

              var _iterator4 = _createForOfIteratorHelper(this.players),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var player = _step4.value;
                  counts.push(player.count);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              var minCount = Math.min.apply(Math, counts);
              var playerCount = counts.filter(function (item) {
                return item == minCount;
              }).length;

              if (playerCount == 1) {
                this._activePlayer = counts.indexOf(minCount);
              } else {
                this.status = "Drawn";
              }

              this._endRound();
            } else {
              this._activePlayer = (this._activePlayer + 1) % this.players.length;
              this._activePlayed = false;
              this.turn += 1;
              this.waitForPlay();
            }
          }
        }
      }, {
        key: "_endRound",
        value: function _endRound() {
          if (this.type == "push") {
            this.status = "Completed";
          } else if (this.status !== "Drawn") {
            this.getActivePlayer().role = "Witness";
            this.getActivePlayer().score += 1;
            this._firstGame = false;
            this.status = "Intermission"; //Check if everyone has come out of jail

            var squash = true;

            for (var i = 0; i < this.players.length; i++) {
              squash = squash && this.players[i].score > 0;
            }

            if (squash) {
              this.status = "Squashed"; //Check if the active player has jailed someone
            } else if (this.getActivePlayer().score == this.playTo) {
              this.status = "Victory";
              this.getActivePlayer().role = "Officer";
              var pusher = this.players[(this._activePlayer + 3) % 4];

              if (pusher.score == 0) {
                pusher.role = "Antiman";
              }
            }
          }

          this._statusChange.next(this.status);
        }
      }, {
        key: "_getValidPlays",
        value: function _getValidPlays(player) {
          var validPlays = 0;

          var _iterator5 = _createForOfIteratorHelper(player.hand),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var domino = _step5.value;

              if (this.board.canPlayLeft(domino) || this.board.canPlayRight(domino)) {
                validPlays += 1;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return validPlays;
        }
      }, {
        key: "_shuffle",
        value: function _shuffle() {
          var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

          for (var time = 0; time < times; time++) {
            var i = 0;
            var j = 0;
            var candidate = null;

            for (i = this.deck.length - 1; i > 0; i--) {
              j = Math.floor(Math.random() * (i + 1));
              candidate = this.deck[i]; //Reset Domino

              candidate.reset();
              this.deck[i] = this.deck[j];
              this.deck[j] = candidate;
            }
          }
        }
      }, {
        key: "deal",
        value: function deal() {
          //Empty player's hands
          var _iterator6 = _createForOfIteratorHelper(this.players),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var player = _step6.value;
              player.hand.length = 0;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          var cardsPerPlayer = Math.ceil(this.deck.length / this.players.length);

          for (var i = 0; i < cardsPerPlayer; i++) {
            for (var j = 0; j < this.players.length; j++) {
              this.players[j].deal(this.deck[i * this.players.length + j]);
            }
          }
        }
      }, {
        key: "_aiTurn",
        value: function _aiTurn(turn) {
          if (turn !== this.turn) {
            return false;
          }

          var played = false;

          var _iterator7 = _createForOfIteratorHelper(this.getActivePlayer().hand),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var domino = _step7.value;

              if (this.playLeft(domino) || this.playRight(domino)) {
                played = true;
                break;
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      }, {
        key: "_runPlayClock",
        value: function _runPlayClock(turn, activePlayer, timeLeft) {
          var _this3 = this;

          if (this.activePlayer !== activePlayer) {
            return;
          } else if (timeLeft == 0) {
            this._aiTurn(turn);
          } else {
            this.playClock = timeLeft;
            setTimeout(function () {
              _this3._runPlayClock(turn, activePlayer, timeLeft - 1);
            }, 1000);
          }
        }
      }, {
        key: "deck",
        get: function get() {
          return this._deck;
        },
        set: function set(deckString) {
          var deck = [];

          var _iterator8 = _createForOfIteratorHelper(deckString.split(";")),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var domino = _step8.value;
              var values = domino.split(",");
              deck.push(new _domino_model__WEBPACK_IMPORTED_MODULE_3__["Domino"](parseInt(values[0]), parseInt(values[1])));
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          this._deck = deck;
        }
      }, {
        key: "multiplayer",
        set: function set(multiplayer) {
          this._multiplayer = multiplayer;
        }
      }, {
        key: "activePlayer",
        get: function get() {
          return this._activePlayer;
        }
      }, {
        key: "auto",
        set: function set(auto) {
          this._auto = auto;
        }
      }, {
        key: "firstGame",
        set: function set(firstGame) {
          this._firstGame = firstGame;
        }
      }]);

      return Game;
    }();
    /***/

  },

  /***/
  "./src/app/model/player.model.ts":
  /*!***************************************!*\
    !*** ./src/app/model/player.model.ts ***!
    \***************************************/

  /*! exports provided: Player */

  /***/
  function srcAppModelPlayerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Player", function () {
      return Player;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Player = /*#__PURE__*/function () {
      function Player(playerData) {
        _classCallCheck(this, Player);

        this.self = "";
        this.name = "";
        this.role = "";
        this.score = 0;
        this.avatar = "avatar.png";
        this.human = false;
        this.remote = false;
        this.hand = [];
        Object.assign(this, playerData);
      }

      _createClass(Player, [{
        key: "deal",
        value: function deal(domino) {
          this.hand.push(domino);
        }
      }, {
        key: "count",
        get: function get() {
          var count = 0;

          var _iterator9 = _createForOfIteratorHelper(this.hand),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var domino = _step9.value;
              count += domino.total;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          return count;
        }
      }]);

      return Player;
    }();
    /***/

  },

  /***/
  "./src/app/services/fullscreen.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/fullscreen.service.ts ***!
    \************************************************/

  /*! exports provided: FullScreenService */

  /***/
  function srcAppServicesFullscreenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullScreenService", function () {
      return FullScreenService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var docOpen = document.documentElement;
    var docClose = document;

    var FullScreenService = /*#__PURE__*/function () {
      function FullScreenService() {
        _classCallCheck(this, FullScreenService);
      }

      _createClass(FullScreenService, [{
        key: "openFullScreen",
        value: function openFullScreen() {
          var requestFullScreen = docOpen.requestFullscreen || docOpen.mozRequestFullScreen || docOpen.webkitRequestFullScreen || docOpen.msRequestFullscreen;
          requestFullScreen.call(docOpen);
        }
      }, {
        key: "closeFullScreen",
        value: function closeFullScreen() {
          var cancelFullScreen = docClose.exitFullscreen || docClose.mozCancelFullScreen || docClose.webkitExitFullscreen || docClose.msExitFullscreen;
          cancelFullScreen.call(docClose);
        }
      }]);

      return FullScreenService;
    }();

    FullScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FullScreenService);
    /***/
  },

  /***/
  "./src/app/services/game.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/game.service.ts ***!
    \******************************************/

  /*! exports provided: GameService */

  /***/
  function srcAppServicesGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _model_game_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/game.model */
    "./src/app/model/game.model.ts");
    /* harmony import */


    var _model_player_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../model/player.model */
    "./src/app/model/player.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GameService = /*#__PURE__*/function () {
      function GameService(_httpClient) {
        _classCallCheck(this, GameService);

        this._httpClient = _httpClient;
        this._root = "https://dev.kycsar.com/domino/api";
        this._currentGame = null;
        this._activePlayers = {};
        this._plays = {};
      }

      _createClass(GameService, [{
        key: "startSolo",
        value: function startSolo(type, playTo) {
          //Initialise Deck
          var deck = [];

          for (var i = 0; i < 7; i++) {
            for (var j = i; j < 7; j++) {
              deck.push("".concat(i, ",").concat(j));
            }
          }

          this._currentGame = new _model_game_model__WEBPACK_IMPORTED_MODULE_3__["Game"]({
            type: type,
            playTo: playTo,
            status: "Pending",
            multiplayer: false,
            deck: deck.join(";")
          }, this);
          return true;
        }
      }, {
        key: "startMultiplayer",
        value: function startMultiplayer(type, playTo) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            _this4._httpClient.post(_this4._root + "/games", {
              type: type,
              playTo: playTo
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              reject(false);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]());
            })).subscribe(function (game) {
              if (game) {
                _this4._createGame(game);

                _this4._currentGame.multiplayer = true;
                resolve(true);
              } else {
                resolve(false);
              }
            });
          });
        }
      }, {
        key: "loadGame",
        value: function loadGame(code) {
          var _this5 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("code", code.toUpperCase());
          return new Promise(function (resolve, reject) {
            _this5._httpClient.get(_this5._root + "/games", {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              reject(null);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]());
            })).subscribe(function (games) {
              if (games.total > 0 && games.entries[0].status != "Completed") {
                _this5._createGame(games.entries[0]);

                _this5._currentGame.multiplayer = true;
                resolve(_this5._currentGame);
              } else {
                resolve(null);
              }
            });
          });
        }
      }, {
        key: "getCurrentGame",
        value: function getCurrentGame() {
          return this._currentGame;
        }
      }, {
        key: "hasCurrentGame",
        value: function hasCurrentGame() {
          return this._currentGame !== null;
        }
      }, {
        key: "join",
        value: function join(player) {
          var _this6 = this;

          return new Promise(function (resolve, reject) {
            var seat = -1; //Check if player is already in game and connect this session if so

            for (var i = 0; i < _this6._currentGame.players.length; i++) {
              if (_this6._currentGame.players[i].name == player.name) {
                seat = i;
                break;
              }
            }

            if (seat >= 0) {
              _this6._currentGame.players[seat].human = true;
              _this6._currentGame.players[seat].remote = false;

              _this6._heartbeat(_this6._currentGame.players[seat]);

              if (_this6._currentGame.status == "Pending") {
                _this6._waitForStart();
              }

              resolve(seat);
            } else if (_this6._currentGame.isMultiplayer()) {
              var payload = {
                name: player.name,
                role: _this6._currentGame.type == 'Push' ? "Player" : "Jailman",
                score: player.score
              };

              _this6._httpClient.post(_this6._root + _this6._currentGame.self + "/players", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                reject(seat);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]());
              })).subscribe(function (player) {
                _this6._currentGame.setPlayer(player, player.position);

                _this6._activePlayers[player.id] = player;

                _this6._heartbeat(player);

                if (_this6._currentGame.status == "Pending") {
                  _this6._waitForStart();
                }

                resolve(player.position);
              });
            } else {
              seat = 0;

              _this6._currentGame.setPlayer(player, seat);

              resolve(seat);
            }
          });
        }
      }, {
        key: "_createGame",
        value: function _createGame(game) {
          var _this7 = this;

          game.deck = game.deck;
          this._currentGame = new _model_game_model__WEBPACK_IMPORTED_MODULE_3__["Game"](game, this); //Listen for Status Changes

          this._currentGame.statusChanged().subscribe(function (status) {
            if (status == "Playing") {
              _this7._plays = {};
            }

            _this7._saveGame().then(function (game) {
              if (status == "Intermission") {
                _this7._currentGame.deck = game.deck;
              }
            });
          }); //Listen for plays


          this._currentGame.playMade().subscribe(function (play) {
            if (play.position == "pass") {
              _this7._addPlay(_this7._currentGame.turn, "0,0,pass");
            } else {
              _this7._addPlay(_this7._currentGame.turn, "".concat(play.domino.value[0], ",").concat(play.domino.value[1], ",").concat(play.position));
            }
          }); //Initialise Game


          this._httpClient.get(this._root + this._currentGame.self + "/players").subscribe(function (response) {
            //Add Existing players
            var totalScore = 0;

            var _iterator10 = _createForOfIteratorHelper(response.entries),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var player = _step10.value;
                var newPlayer = new _model_player_model__WEBPACK_IMPORTED_MODULE_4__["Player"](player);
                newPlayer.remote = true;

                _this7._currentGame.setPlayer(newPlayer, player.position);

                _this7._activePlayers[player.id] = player;
                totalScore += player.score;
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            if (totalScore > 0) {
              _this7._currentGame.firstGame = false;
            } //Listen for Player Updates


            _this7._updatePlayers(); //Listen for Play Updates


            _this7._updatePlays(); //If the game has started, load the plays so far


            if (game.status == "Playing") {
              _this7._currentGame.deal();

              _this7._httpClient.get(_this7._root + _this7._currentGame.self + "/plays").subscribe(function (response) {
                _this7._currentGame.auto = false;

                for (var _i2 = 0, _Object$keys = Object.keys(response.entries); _i2 < _Object$keys.length; _i2++) {
                  var turn = _Object$keys[_i2];
                  var play = response.entries[turn].play;

                  if (!_this7._plays[turn]) {
                    _this7._plays[turn] = play;
                    var position = play[2];
                    var activeDomino = null; //Get Domino to play

                    var _iterator11 = _createForOfIteratorHelper(_this7._currentGame.getActivePlayer().hand),
                        _step11;

                    try {
                      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                        var domino = _step11.value;

                        if (domino.value[0] == parseInt(play[0]) && domino.value[1] == parseInt(play[1])) {
                          activeDomino = domino;
                        }
                      }
                    } catch (err) {
                      _iterator11.e(err);
                    } finally {
                      _iterator11.f();
                    }

                    if (position == "pass") {
                      _this7._currentGame.pass(false);
                    } else if (position == "left") {
                      _this7._currentGame.playLeft(activeDomino, false);
                    } else if (position == "right") {
                      _this7._currentGame.playRight(activeDomino, false);
                    }
                  }
                }

                _this7._currentGame.auto = true;

                _this7._currentGame.waitForPlay();
              });
            }
          });
        }
      }, {
        key: "_updatePlayers",
        value: function _updatePlayers() {
          var _this8 = this;

          var playerUpdate = this._httpClient.get(this._root + this._currentGame.self + "/players");

          var updatePlayers = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (_) {
            return playerUpdate;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            return response;
          }));
          updatePlayers.subscribe(function (result) {
            var activeIds = []; //Check for added players

            var _iterator12 = _createForOfIteratorHelper(result.entries),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var player = _step12.value;
                activeIds.push(player.id);

                if (Object.keys(_this8._activePlayers).indexOf(player.id) < 0) {
                  var newPlayer = new _model_player_model__WEBPACK_IMPORTED_MODULE_4__["Player"](player);
                  newPlayer.remote = true;

                  _this8._currentGame.setPlayer(newPlayer, player.position);

                  _this8._activePlayers[player.id] = player;
                }
              } //Check for removed players

            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            var savedPlayers = Object.keys(_this8._activePlayers);

            for (var i = 0; i < savedPlayers.length; i++) {
              if (activeIds.indexOf(savedPlayers[i]) < 0) {
                _this8._currentGame.removePlayer(_this8._activePlayers[savedPlayers[i]].position);

                delete _this8._activePlayers[savedPlayers[i]];
              }
            }
          });
        }
      }, {
        key: "_heartbeat",
        value: function _heartbeat(player) {
          var playerUpdate = this._httpClient.put(this._root + player.self, player);

          var heartbeat = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(10000, 10000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (_) {
            return playerUpdate;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            return response;
          }));
          heartbeat.subscribe(function (response) {});
        }
      }, {
        key: "_updatePlays",
        value: function _updatePlays() {
          var _this9 = this;

          var poll = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 2500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (_) {
            return _this9._httpClient.get(_this9._root + _this9._currentGame.self + "/plays", {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("turn", _this9._getNextTurn().toString())
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            return response;
          }));
          poll.subscribe(function (response) {
            if (!_this9._plays[response.turn]) {
              var turn = response.turn;
              var play = response.play;

              if (turn > 0 && !_this9._plays[turn]) {
                var position = play[2];
                var activeDomino = null; //Get Domino to play

                var _iterator13 = _createForOfIteratorHelper(_this9._currentGame.getActivePlayer().hand),
                    _step13;

                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                    var domino = _step13.value;

                    if (domino.value[0] == parseInt(play[0]) && domino.value[1] == parseInt(play[1])) {
                      activeDomino = domino;
                    }
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }

                var success = true;

                if (position == "pass") {
                  success = success && _this9._currentGame.pass(false);
                } else if (position == "left") {
                  success = success && _this9._currentGame.playLeft(activeDomino, false);
                } else if (position == "right") {
                  success = success && _this9._currentGame.playRight(activeDomino, false);
                }

                if (success) {
                  _this9._addPlay(turn, play.join(","));
                }
              }
            }
          });
        }
      }, {
        key: "_waitForStart",
        value: function _waitForStart() {
          var _this10 = this;

          var gameUpdate = this._httpClient.get(this._root + this._currentGame.self);

          var updateGate = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (_) {
            return gameUpdate;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            return response;
          }));
          updateGate.subscribe(function (game) {
            if (game.status == "Playing") {
              _this10._currentGame.start();
            }
          });
        }
      }, {
        key: "_saveGame",
        value: function _saveGame() {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            var status = _this11._currentGame.status;

            if (status == "Victory" || status == "Squashed") {
              status = "Completed";
            } else if (status == "Drawn") {
              status = "Intermission";
            }

            _this11._httpClient.put(_this11._root + _this11._currentGame.self, {
              status: status,
              shield: _this11._currentGame.activePlayer
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]());
            })).subscribe(function (response) {
              resolve(response);
            });
          });
        }
      }, {
        key: "_addPlay",
        value: function _addPlay(turn, play) {
          if (!this._plays[turn]) {
            this._plays[turn] = play;

            this._httpClient.post(this._root + this._currentGame.self + "/plays", {
              play: "".concat(turn, ",").concat(play)
            }).subscribe(function (result) {});
          }
        }
      }, {
        key: "_getNextTurn",
        value: function _getNextTurn() {
          var turns = [];

          for (var _i3 = 0, _Object$keys2 = Object.keys(this._plays); _i3 < _Object$keys2.length; _i3++) {
            var turn = _Object$keys2[_i3];
            turns.push(parseInt(turn));
          }

          return turns.length > 0 ? Math.max.apply(Math, turns) + 1 : 1;
        }
      }]);

      return GameService;
    }();

    GameService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], GameService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/amoryac/Sandbox/domino/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map