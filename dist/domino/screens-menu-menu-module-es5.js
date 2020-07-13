function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-menu-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/menu/menu.screen.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/menu/menu.screen.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensMenuMenuScreenHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='menu-screen'>\n  <div class='menu'>\n    <h1>Domino Night</h1>\n    <div class='items'>\n      <div class='item' (click)=\"soloPlay()\">Solo Play</div>\n      <div class='item' (click)=\"multiplayer()\">Multiplayer</div>\n      <div class='item' (click)=\"joinModal.show()\">Join Game</div>\n    </div>\n  </div>\n</div>\n<jn-modal #setupModal>\n  <h1>Game Setup</h1>\n  <select [(ngModel)]=\"type\">\n    <option value=\"\">Select Game Type</option>\n    <option value=\"push\">Push</option>\n    <option value=\"jail\">Jail</option>\n  </select>\n  <select [(ngModel)]=\"playTo\" *ngIf=\"type=='jail'\">\n    <option value=\"\">Games For Jail</option>\n    <option>1</option>\n    <option>2</option>\n    <option>3</option>\n    <option>4</option>\n    <option>5</option>\n    <option>6</option>\n  </select>\n  <div class='button-panel'>\n    <jn-button (click)=\"setupGame()\" label=\"Start Game\"></jn-button>\n    <jn-button (click)=\"setupModal.hide()\" label=\"Cancel\"></jn-button>\n  </div>\n</jn-modal>\n<jn-modal #joinModal>\n  <h1>Enter Game Code</h1>\n  <input [(ngModel)]=\"code\" type='text' />\n  <div class='button-panel'>\n    <jn-button (click)=\"joinGame()\" label=\"Join\"></jn-button>\n    <jn-button (click)=\"joinModal.hide()\" label=\"Cancel\"></jn-button>\n  </div>\n</jn-modal>\n<jn-modal #errorModal>\n  <h1>Game Not Found!</h1>\n  <div class='button-panel'>\n    <jn-button (click)=\"errorModal.hide()\" label=\"OK\"></jn-button>\n  </div>\n</jn-modal>\n";
    /***/
  },

  /***/
  "./src/app/screens/menu/menu-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/screens/menu/menu-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MenuScreenRoutingModule */

  /***/
  function srcAppScreensMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuScreenRoutingModule", function () {
      return MenuScreenRoutingModule;
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


    var _menu_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu.screen */
    "./src/app/screens/menu/menu.screen.ts");

    var routes = [{
      path: "",
      component: _menu_screen__WEBPACK_IMPORTED_MODULE_3__["MenuScreen"]
    }];

    var MenuScreenRoutingModule = function MenuScreenRoutingModule() {
      _classCallCheck(this, MenuScreenRoutingModule);
    };

    MenuScreenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuScreenRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/menu/menu.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/screens/menu/menu.module.ts ***!
    \*********************************************/

  /*! exports provided: MenuScreenModule */

  /***/
  function srcAppScreensMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuScreenModule", function () {
      return MenuScreenModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _menu_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./menu-routing.module */
    "./src/app/screens/menu/menu-routing.module.ts");
    /* harmony import */


    var _menu_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu.screen */
    "./src/app/screens/menu/menu.screen.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var MenuScreenModule = function MenuScreenModule() {
      _classCallCheck(this, MenuScreenModule);
    };

    MenuScreenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_menu_routing_module__WEBPACK_IMPORTED_MODULE_4__["MenuScreenRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      declarations: [_menu_screen__WEBPACK_IMPORTED_MODULE_5__["MenuScreen"]],
      providers: []
    })], MenuScreenModule);
    /***/
  },

  /***/
  "./src/app/screens/menu/menu.screen.scss":
  /*!***********************************************!*\
    !*** ./src/app/screens/menu/menu.screen.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensMenuMenuScreenScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#menu-screen {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n#menu-screen .menu {\n  text-align: center;\n  width: 100%;\n  max-width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#menu-screen .menu h1 {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 3em;\n  margin-bottom: 50px;\n}\n#menu-screen .menu .item {\n  border: solid 3px #6A6A6A;\n  width: 250px;\n  border-top-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  color: #FFFFFF;\n  background-color: #161616;\n  text-align: center;\n  padding: 20px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 25px;\n  cursor: pointer;\n}\n.button-panel {\n  margin-top: 15px;\n  display: flex;\n}\n.button-panel jn-button {\n  margin-right: 10px;\n}\ninput,\nselect {\n  text-align: center;\n  padding: 10px;\n  font-size: 1.25em;\n  margin: 10px 0px;\n  width: 90%;\n  background-color: #FFFFFF;\n  border: solid 1px #6A6A6A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9yeWFjL1NhbmRib3gvZG9taW5vL3NyYy9hcHAvc2NyZWVucy9tZW51L21lbnUuc2NyZWVuLnNjc3MiLCJzcmMvYXBwL3NjcmVlbnMvbWVudS9tZW51LnNjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0FOO0FES0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNGRjtBRElFO0VBQ0Usa0JBQUE7QUNGSjtBRE1BOztFQUVFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9tZW51L21lbnUuc2NyZWVuLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudS1zY3JlZW57XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDoxMDB2aDtcblxuICAubWVudXtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1heC13aWR0aDozMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGgxe1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTozZW07XG4gICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XG4gICAgfVxuXG4gICAgLml0ZW17XG4gICAgICBib3JkZXI6c29saWQgM3B4ICM2QTZBNkE7XG4gICAgICB3aWR0aDoyNTBweDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6NDBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjQwcHg7XG4gICAgICBjb2xvcjojRkZGRkZGO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMTYxNjE2O1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgIG1hcmdpbi1ib3R0b206MjVweDtcbiAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uYnV0dG9uLXBhbmVse1xuICBtYXJnaW4tdG9wOjE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgam4tYnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICB9XG59XG5cbmlucHV0LFxuc2VsZWN0e1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgcGFkZGluZzoxMHB4O1xuICBmb250LXNpemU6MS4yNWVtO1xuICBtYXJnaW46MTBweCAwcHg7XG4gIHdpZHRoOjkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xuICBib3JkZXI6c29saWQgMXB4ICM2QTZBNkE7XG59XG4iLCIjbWVudS1zY3JlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiNtZW51LXNjcmVlbiAubWVudSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jbWVudS1zY3JlZW4gLm1lbnUgaDEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuI21lbnUtc2NyZWVuIC5tZW51IC5pdGVtIHtcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzZBNkE2QTtcbiAgd2lkdGg6IDI1MHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbi1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYnV0dG9uLXBhbmVsIGpuLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IHNvbGlkIDFweCAjNkE2QTZBO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/screens/menu/menu.screen.ts":
  /*!*********************************************!*\
    !*** ./src/app/screens/menu/menu.screen.ts ***!
    \*********************************************/

  /*! exports provided: MenuScreen */

  /***/
  function srcAppScreensMenuMenuScreenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuScreen", function () {
      return MenuScreen;
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


    var _services_fullscreen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/fullscreen.service */
    "./src/app/services/fullscreen.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/game.service */
    "./src/app/services/game.service.ts");

    var MenuScreen = /*#__PURE__*/function () {
      function MenuScreen(_router, _gameService, _fullScreenService) {
        _classCallCheck(this, MenuScreen);

        this._router = _router;
        this._gameService = _gameService;
        this._fullScreenService = _fullScreenService;
        this.code = "";
        this.type = "";
        this.playTo = "";
        this._mode = "";
      }

      _createClass(MenuScreen, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "soloPlay",
        value: function soloPlay() {
          this._mode = "solo";
          this.setupModal.show();
        }
      }, {
        key: "multiplayer",
        value: function multiplayer() {
          this._mode = "multiplayer";
          this.setupModal.show();
        }
      }, {
        key: "setupGame",
        value: function setupGame() {
          var _this = this;

          if (!this.type || this.type == "jail" && !this.playTo) {
            return;
          }

          if (this._mode == "solo") {
            if (this._gameService.startSolo(this.type, parseInt(this.playTo))) {
              this._fullScreenService.openFullScreen();

              this._router.navigate(["/game"]);
            }
          } else if (this._mode == "multiplayer") {
            this._gameService.startMultiplayer(this.type, parseInt(this.playTo)).then(function (result) {
              if (result) {
                _this._fullScreenService.openFullScreen();

                _this._router.navigate(["/game"]);
              }
            });
          }
        }
      }, {
        key: "joinGame",
        value: function joinGame() {
          var _this2 = this;

          if (!this.code) {
            return true;
          }

          this.joinModal.hide();

          this._gameService.loadGame(this.code).then(function (game) {
            if (game) {
              _this2._fullScreenService.openFullScreen();

              _this2._router.navigate(["/game"]);
            } else {
              _this2.errorModal.show();
            }
          });
        }
      }]);

      return MenuScreen;
    }();

    MenuScreen.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]
      }, {
        type: _services_fullscreen_service__WEBPACK_IMPORTED_MODULE_3__["FullScreenService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("setupModal", {
      "static": true
    })], MenuScreen.prototype, "setupModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("joinModal", {
      "static": true
    })], MenuScreen.prototype, "joinModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("errorModal", {
      "static": true
    })], MenuScreen.prototype, "errorModal", void 0);
    MenuScreen = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.screen.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/menu/menu.screen.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.screen.scss */
      "./src/app/screens/menu/menu.screen.scss"))["default"]]
    })], MenuScreen);
    /***/
  }
}]);
//# sourceMappingURL=screens-menu-menu-module-es5.js.map