(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-game-game-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/game/game.screen.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/game/game.screen.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='game-screen'>\n  <div class='close' (click)=\"exit()\"><img src='assets/close.png' alt='close' /></div>\n  <jn-player [player]='game.players[(viewPoint + 2) % 4]' [ngClass]=\"{active:game.getActivePlayer() == game.players[(viewPoint + 2) % 4]}\" position=\"top\"></jn-player>\n  <jn-player [player]='game.players[(viewPoint+3) % 4]' [ngClass]=\"{active:game.getActivePlayer() == game.players[(viewPoint + 3) % 4]}\" position=\"left\"></jn-player>\n  <jn-board [board]=\"game.board\"></jn-board>\n  <jn-player [player]='game.players[(viewPoint+1) % 4]' [ngClass]=\"{active:game.getActivePlayer() == game.players[(viewPoint + 1) % 4]}\" position=\"right\"></jn-player>\n  <div *ngIf=\"myTurn()\" class='playClock'>{{game.playClock}}</div>\n  <div *ngIf=\"!game.isWatching()\" class='status-dial'>\n    <div *ngIf=\"!myTurn()\" class='status'>\n      <span>Waiting for {{game.getActivePlayer()?.name}}</span>\n    </div>\n    <div *ngIf=\"myTurn() && game.canEndTurn()\" class='status active'>\n      <img src='assets/knock.png' />\n    </div>\n    <div *ngIf=\"myTurn() && !game.canEndTurn()\" class='status active'>\n      <div *ngIf=\"!activeDomino\" class='instruction'>Select Domino</div>\n      <div *ngIf=\"activeDomino && !canPlayRight() && !canPlayLeft()\" class='play noplay'><img src='assets/no-play.png' /></div>\n      <div *ngIf=\"canPlayRight()\" class='play' (click)=\"playRight()\"><img src='assets/play-up.png' /></div>\n      <div class='border' *ngIf=\"game.board.center && canPlayLeft() && canPlayRight()\"></div>\n      <div *ngIf=\"canPlayLeft() && game.board.center\" class='play' (click)=\"playLeft()\"><img src='assets/play-down.png' /></div>\n    </div>\n  </div>\n  <div class='active-player'>\n    <div class='hand'>\n      <jn-domino *ngFor=\"let domino of game.players[viewPoint]?.hand\" [domino]=\"domino\" (click)=\"selectDomino(domino)\" [ngClass]=\"{'active':domino == activeDomino}\"></jn-domino>\n    </div>\n    <jn-player [player]='game.players[viewPoint]' [ngClass]=\"{active:game.getActivePlayer() == game.players[viewPoint]}\" position=\"bottom\"></jn-player>\n  </div>\n</div>\n<jn-modal #joinModal [hidden]=\"game.seatsAvailable() == 0\">\n  <h1>Enter Your Name</h1>\n  <input [(ngModel)]=\"player.name\" type='text' />\n  <div class='button-panel'>\n    <jn-button (click)=\"join()\" label=\"Join\"></jn-button>\n  </div>\n</jn-modal>\n<jn-modal #statusModal>\n  <h1 *ngIf=\"game.status == 'Pending' && !game.isMultiplayer()\">Game Ready</h1>\n  <h1 *ngIf=\"game.status == 'Pending' && game.isMultiplayer()\">Waiting for Players</h1>\n  <h1 *ngIf=\"game.status == 'Intermission' || game.status == 'Completed'\">{{game.isShut()?\"Game Shut - \":\"\"}}{{game.getActivePlayer().name}} Wins!</h1>\n  <h1 *ngIf=\"game.status == 'Drawn'\">Game Push</h1>\n  <div *ngIf=\"game.status == 'Pending' && game.isMultiplayer()\" class=\"game-code\">Game Code: {{game.code}}</div>\n  <div *ngIf=\"(game.status == 'Drawn' || game.status == 'Intermission') && game.isMultiplayer()\">Game will resume in {{timer}}</div>\n  <div class='button-panel'>\n    <jn-button *ngIf=\"game.status == 'Pending' && (!game.isMultiplayer() || (viewPoint == 0 && game.seatsAvailable() < 3))\" (click)=\"game.start()\" label=\"Start Now\"></jn-button>\n    <jn-button *ngIf=\"(game.status == 'Drawn' || game.status == 'Intermission') && !game.isMultiplayer()\" (click)=\"game.start()\" label=\"Continue\"></jn-button>\n    <jn-button *ngIf=\"game.status == 'Completed' || game.status == 'Victory'\" (click)=\"mainMenu()\" label=\"Main Menu\"></jn-button>\n  </div>\n</jn-modal>\n<jn-summary [game]=\"game\"></jn-summary>\n");

/***/ }),

/***/ "./src/app/screens/game/game-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/screens/game/game-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GameScreenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScreenRoutingModule", function() { return GameScreenRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _game_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.screen */ "./src/app/screens/game/game.screen.ts");




const routes = [
    {
        path: "",
        component: _game_screen__WEBPACK_IMPORTED_MODULE_3__["GameScreen"]
    }
];
let GameScreenRoutingModule = class GameScreenRoutingModule {
};
GameScreenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GameScreenRoutingModule);



/***/ }),

/***/ "./src/app/screens/game/game.module.ts":
/*!*********************************************!*\
  !*** ./src/app/screens/game/game.module.ts ***!
  \*********************************************/
/*! exports provided: GameScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScreenModule", function() { return GameScreenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-routing.module */ "./src/app/screens/game/game-routing.module.ts");
/* harmony import */ var _game_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.screen */ "./src/app/screens/game/game.screen.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");







let GameScreenModule = class GameScreenModule {
};
GameScreenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _game_routing_module__WEBPACK_IMPORTED_MODULE_4__["GameScreenRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        declarations: [
            _game_screen__WEBPACK_IMPORTED_MODULE_5__["GameScreen"],
        ],
        providers: []
    })
], GameScreenModule);



/***/ }),

/***/ "./src/app/screens/game/game.screen.scss":
/*!***********************************************!*\
  !*** ./src/app/screens/game/game.screen.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#game-screen {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n#game-screen .close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}\n#game-screen jn-player {\n  position: absolute;\n  opacity: 0.7;\n  z-index: 100;\n}\n#game-screen jn-player.top {\n  top: 2px;\n  margin-left: -25px;\n}\n#game-screen jn-player.left {\n  top: calc(50vh - 37.5px);\n  left: -82.5px;\n  margin-top: 30px;\n}\n#game-screen jn-player.right {\n  top: calc(50vh - 37.5px);\n  right: -82.5px;\n  margin-top: -30px;\n}\n#game-screen .playClock {\n  width: 105px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.3em;\n  position: absolute;\n  bottom: 50px;\n  left: 70px;\n}\n#game-screen .active-player {\n  position: absolute;\n  bottom: 5px;\n  right: 10px;\n}\n#game-screen .active-player jn-player {\n  position: static;\n}\n#game-screen .active-player .hand {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  margin-bottom: 5px;\n}\n#game-screen .active-player .hand jn-domino {\n  transform: rotate(90deg);\n  margin: 0px 10px;\n}\n#game-screen .active-player .hand jn-domino.active {\n  margin-top: -50px;\n}\n#game-screen jn-player.active {\n  opacity: 1;\n}\n#game-screen .status-dial {\n  position: absolute;\n  bottom: 5px;\n  left: 5px;\n  height: 105px;\n  width: 105px;\n  border-radius: 52.5px;\n  border: solid 1px #161616;\n  background-color: #949494;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#game-screen .status-dial .status {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 90px;\n  width: 90px;\n  border-radius: 45px;\n  background-color: #161616;\n  opacity: 0.8;\n}\n#game-screen .status-dial .status span {\n  text-align: center;\n  width: 90px;\n  color: #D5DAD7;\n  font-style: italic;\n  margin-top: 5px;\n  color: #FFFFFF;\n}\n#game-screen .status-dial .status .border {\n  background-color: #949494;\n  height: 2px;\n  width: 100%;\n}\n#game-screen .status-dial .status .play {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: calc(50% - 1px);\n}\n#game-screen .status-dial .status .play img {\n  height: 30px;\n  width: 30px;\n}\n#game-screen .status-dial .status .noplay img {\n  height: 40px;\n  width: 40px;\n}\n#game-screen .status-dial .status .instruction {\n  text-align: center;\n}\n#game-screen .status-dial .status div.active {\n  opacity: 1;\n}\n#game-screen .status-dial .status.active {\n  color: #FFFFFF;\n  opacity: 1;\n}\n.game-code {\n  margin-bottom: 15px;\n}\n.button-panel {\n  display: flex;\n}\n.button-panel jn-button {\n  margin-right: 10px;\n}\ninput {\n  text-align: center;\n  padding: 10px;\n  font-size: 1.25em;\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9yeWFjL1NhbmRib3gvZG9taW5vL3NyYy9hcHAvc2NyZWVucy9nYW1lL2dhbWUuc2NyZWVuLnNjc3MiLCJzcmMvYXBwL3NjcmVlbnMvZ2FtZS9nYW1lLnNjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0FDREo7QURJRTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRko7QURLRTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSko7QURPRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNMSjtBRE9JO0VBQ0UsZ0JBQUE7QUNMTjtBRFFJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRFFNO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtBQ05SO0FEU007RUFDRSxpQkFBQTtBQ1BSO0FEWUU7RUFDRSxVQUFBO0FDVko7QURhRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDWEo7QURhSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1hOO0FEYU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1hSO0FEY007RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDWlI7QURlTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDYlI7QURlUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDYlY7QURrQlE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ2hCVjtBRG9CTTtFQUNFLGtCQUFBO0FDbEJSO0FEcUJNO0VBQ0UsVUFBQTtBQ25CUjtBRHVCSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDckJOO0FEMEJBO0VBQ0UsbUJBQUE7QUN2QkY7QUQwQkE7RUFDRSxhQUFBO0FDdkJGO0FEeUJFO0VBQ0Usa0JBQUE7QUN2Qko7QUQyQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDeEJGIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9nYW1lL2dhbWUuc2NyZWVuLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ2FtZS1zY3JlZW57XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuXG4gIC5jbG9zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjEwcHg7XG4gICAgcmlnaHQ6MTBweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuXG4gIGpuLXBsYXllcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTowLjc7XG4gICAgei1pbmRleDoxMDA7XG4gIH1cblxuICBqbi1wbGF5ZXIudG9we1xuICAgIHRvcDoycHg7XG4gICAgbWFyZ2luLWxlZnQ6LTI1cHg7XG4gIH1cblxuICBqbi1wbGF5ZXIubGVmdHtcbiAgICB0b3A6Y2FsYyg1MHZoIC0gMzcuNXB4KTtcbiAgICBsZWZ0Oi04Mi41cHg7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xuICB9XG5cbiAgam4tcGxheWVyLnJpZ2h0e1xuICAgIHRvcDpjYWxjKDUwdmggLSAzNy41cHgpO1xuICAgIHJpZ2h0Oi04Mi41cHg7XG4gICAgbWFyZ2luLXRvcDotMzBweDtcbiAgfVxuXG4gIC5wbGF5Q2xvY2t7XG4gICAgd2lkdGg6MTA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBsZWZ0OiA3MHB4O1xuICB9XG5cbiAgLmFjdGl2ZS1wbGF5ZXJ7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgYm90dG9tOjVweDtcbiAgICByaWdodDoxMHB4O1xuXG4gICAgam4tcGxheWVye1xuICAgICAgcG9zaXRpb246c3RhdGljO1xuICAgIH1cblxuICAgIC5oYW5ke1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XG5cbiAgICAgIGpuLWRvbWlub3tcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIG1hcmdpbjowcHggLTEwcHg7XG4gICAgICB9XG5cbiAgICAgIGpuLWRvbWluby5hY3RpdmV7XG4gICAgICAgIG1hcmdpbi10b3A6LTUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgam4tcGxheWVyLmFjdGl2ZXtcbiAgICBvcGFjaXR5OjE7XG4gIH1cblxuICAuc3RhdHVzLWRpYWx7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgYm90dG9tOjVweDtcbiAgICBsZWZ0OjVweDtcbiAgICBoZWlnaHQ6MTA1cHg7XG4gICAgd2lkdGg6MTA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czo1Mi41cHg7XG4gICAgYm9yZGVyOnNvbGlkIDFweCAjMTYxNjE2O1xuICAgIGJhY2tncm91bmQtY29sb3I6Izk0OTQ5NDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5zdGF0dXN7XG4gICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6OTBweDtcbiAgICAgIHdpZHRoOjkwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOjQ1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNjE2MTY7XG4gICAgICBvcGFjaXR5OjAuODtcblxuICAgICAgc3BhbntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDo5MHB4O1xuICAgICAgICBjb2xvcjojRDVEQUQ3O1xuICAgICAgICBmb250LXN0eWxlOml0YWxpYztcbiAgICAgICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgICB9XG5cbiAgICAgIC5ib3JkZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6Izk0OTQ5NDtcbiAgICAgICAgaGVpZ2h0OjJweDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIH1cblxuICAgICAgLnBsYXl7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICB3aWR0aDpjYWxjKDUwJSAtIDFweCk7XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgIHdpZHRoOjMwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm5vcGxheXtcbiAgICAgICAgaW1ne1xuICAgICAgICAgIGhlaWdodDo0MHB4O1xuICAgICAgICAgIHdpZHRoOjQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmluc3RydWN0aW9ue1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGRpdi5hY3RpdmV7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RhdHVzLmFjdGl2ZXtcbiAgICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgICBvcGFjaXR5OjE7XG4gICAgfVxuICB9XG59XG5cbi5nYW1lLWNvZGV7XG4gIG1hcmdpbi1ib3R0b206MTVweDtcbn1cblxuLmJ1dHRvbi1wYW5lbHtcbiAgZGlzcGxheTogZmxleDtcblxuICBqbi1idXR0b257XG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIH1cbn1cblxuaW5wdXR7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBwYWRkaW5nOjEwcHg7XG4gIGZvbnQtc2l6ZToxLjI1ZW07XG4gIG1hcmdpbjoxMHB4IDBweDtcbn1cbiIsIiNnYW1lLXNjcmVlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNnYW1lLXNjcmVlbiAuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNnYW1lLXNjcmVlbiBqbi1wbGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDAuNztcbiAgei1pbmRleDogMTAwO1xufVxuI2dhbWUtc2NyZWVuIGpuLXBsYXllci50b3Age1xuICB0b3A6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xufVxuI2dhbWUtc2NyZWVuIGpuLXBsYXllci5sZWZ0IHtcbiAgdG9wOiBjYWxjKDUwdmggLSAzNy41cHgpO1xuICBsZWZ0OiAtODIuNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuI2dhbWUtc2NyZWVuIGpuLXBsYXllci5yaWdodCB7XG4gIHRvcDogY2FsYyg1MHZoIC0gMzcuNXB4KTtcbiAgcmlnaHQ6IC04Mi41cHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuI2dhbWUtc2NyZWVuIC5wbGF5Q2xvY2sge1xuICB3aWR0aDogMTA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiA3MHB4O1xufVxuI2dhbWUtc2NyZWVuIC5hY3RpdmUtcGxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG4jZ2FtZS1zY3JlZW4gLmFjdGl2ZS1wbGF5ZXIgam4tcGxheWVyIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cbiNnYW1lLXNjcmVlbiAuYWN0aXZlLXBsYXllciAuaGFuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiNnYW1lLXNjcmVlbiAuYWN0aXZlLXBsYXllciAuaGFuZCBqbi1kb21pbm8ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIG1hcmdpbjogMHB4IC0xMHB4O1xufVxuI2dhbWUtc2NyZWVuIC5hY3RpdmUtcGxheWVyIC5oYW5kIGpuLWRvbWluby5hY3RpdmUge1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbiNnYW1lLXNjcmVlbiBqbi1wbGF5ZXIuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cbiNnYW1lLXNjcmVlbiAuc3RhdHVzLWRpYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIGhlaWdodDogMTA1cHg7XG4gIHdpZHRoOiAxMDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTIuNXB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjMTYxNjE2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5NDk0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNnYW1lLXNjcmVlbiAuc3RhdHVzLWRpYWwgLnN0YXR1cyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XG4gIG9wYWNpdHk6IDAuODtcbn1cbiNnYW1lLXNjcmVlbiAuc3RhdHVzLWRpYWwgLnN0YXR1cyBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTBweDtcbiAgY29sb3I6ICNENURBRDc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbiNnYW1lLXNjcmVlbiAuc3RhdHVzLWRpYWwgLnN0YXR1cyAuYm9yZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0OTQ5NDtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2dhbWUtc2NyZWVuIC5zdGF0dXMtZGlhbCAuc3RhdHVzIC5wbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMXB4KTtcbn1cbiNnYW1lLXNjcmVlbiAuc3RhdHVzLWRpYWwgLnN0YXR1cyAucGxheSBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuI2dhbWUtc2NyZWVuIC5zdGF0dXMtZGlhbCAuc3RhdHVzIC5ub3BsYXkgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cbiNnYW1lLXNjcmVlbiAuc3RhdHVzLWRpYWwgLnN0YXR1cyAuaW5zdHJ1Y3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jZ2FtZS1zY3JlZW4gLnN0YXR1cy1kaWFsIC5zdGF0dXMgZGl2LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4jZ2FtZS1zY3JlZW4gLnN0YXR1cy1kaWFsIC5zdGF0dXMuYWN0aXZlIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5nYW1lLWNvZGUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYnV0dG9uLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idXR0b24tcGFuZWwgam4tYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIG1hcmdpbjogMTBweCAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/screens/game/game.screen.ts":
/*!*********************************************!*\
  !*** ./src/app/screens/game/game.screen.ts ***!
  \*********************************************/
/*! exports provided: GameScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScreen", function() { return GameScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _services_fullscreen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/fullscreen.service */ "./src/app/services/fullscreen.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _model_player_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/player.model */ "./src/app/model/player.model.ts");







let GameScreen = class GameScreen {
    constructor(_router, _gameService, _fullScreenService) {
        this._router = _router;
        this._gameService = _gameService;
        this._fullScreenService = _fullScreenService;
        this.game = null;
        this.player = new _model_player_model__WEBPACK_IMPORTED_MODULE_6__["Player"]({});
        this.activeDomino = null;
        this.viewPoint = 0;
        this.timer = 10;
    }
    ngOnInit() {
        this.game = this._gameService.getCurrentGame();
        this.joinModal.show();
        this.game.statusChanged().subscribe(status => {
            switch (status) {
                case "Playing":
                    this.activeDomino = null;
                    this.board.reset();
                    this.statusModal.hide();
                    break;
                case "Intermission":
                case "Drawn":
                    this.statusModal.show();
                    if (this.game.isMultiplayer()) {
                        setTimeout(() => {
                            this._continueGame();
                        }, 1000);
                    }
                    break;
                case "Completed":
                case "Victory":
                case "Squashed":
                    if (this.game.type == "jail") {
                        this.summary.show();
                    }
                    else {
                        this.statusModal.show();
                    }
                    break;
            }
        });
    }
    selectDomino(domino) {
        if (!this.game.isWatching()) {
            this.activeDomino = domino;
        }
    }
    playLeft() {
        if (this.canPlayLeft()) {
            this.game.playLeft(this.activeDomino);
            this.activeDomino = null;
        }
    }
    playRight() {
        if (this.canPlayRight()) {
            this.game.playRight(this.activeDomino);
            this.activeDomino = null;
        }
    }
    join() {
        if (!this.player.name) {
            return;
        }
        this.player.role = (this.game.type == 'Push') ? "Player" : "Jailman";
        this._gameService.join(this.player).then(viewPoint => {
            this.viewPoint = viewPoint;
            if (this.viewPoint < 0) {
                this.viewPoint = 0;
            }
            this.joinModal.hide();
            if (this.game.status !== "Playing") {
                this.statusModal.show();
            }
        });
    }
    mainMenu() {
        this._router.navigate(["/"]);
    }
    canPlayLeft() {
        return this.myTurn() && this.activeDomino && this.game.canPlayLeft(this.activeDomino);
    }
    canPlayRight() {
        return this.myTurn() && this.activeDomino && this.game.canPlayRight(this.activeDomino);
    }
    myTurn() {
        return this.game.players[this.viewPoint] == this.game.getActivePlayer();
    }
    exit() {
        this._fullScreenService.closeFullScreen();
        this._router.navigate(["/"]);
    }
    _continueGame() {
        if (this.timer > 0) {
            this.timer--;
            setTimeout(() => {
                this._continueGame();
            }, 1000);
        }
        else {
            this.timer = 10;
            this.game.start();
        }
    }
};
GameScreen.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] },
    { type: _services_fullscreen_service__WEBPACK_IMPORTED_MODULE_4__["FullScreenService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_components_module__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"], { static: true })
], GameScreen.prototype, "board", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("joinModal", { static: true })
], GameScreen.prototype, "joinModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("statusModal", { static: true })
], GameScreen.prototype, "statusModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_components_module__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"], { static: true })
], GameScreen.prototype, "summary", void 0);
GameScreen = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.screen.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/game/game.screen.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.screen.scss */ "./src/app/screens/game/game.screen.scss")).default]
    })
], GameScreen);



/***/ })

}]);
//# sourceMappingURL=screens-game-game-module-es2015.js.map
