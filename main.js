(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=e,this._selectors=n,this._inputList=Array.from(this._formElement.querySelectorAll("".concat(this._selectors.inputSelector))),this._buttonSubmit=this._formElement.querySelector("".concat(this._selectors.submitButtonSelector))}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",this._disabledButton.bind(this)),this._disabledButton(),this._inputList.forEach((function(t){return t.addEventListener("input",(function(){e._toggleInputErrorState(t),e._toggleButtonSubmit()}))}))}},{key:"_disabledButton",value:function(){this._buttonSubmit.classList.add("".concat(this._selectors.inactiveButtonClass)),this._buttonSubmit.disabled=!0}},{key:"_toggleButtonSubmit",value:function(){this._hasInvalidInput()?(this._buttonSubmit.classList.add("".concat(this._selectors.inactiveButtonClass)),this._buttonSubmit.disabled=!0):(this._buttonSubmit.classList.remove("".concat(this._selectors.inactiveButtonClass)),this._buttonSubmit.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleInputErrorState",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("".concat(this._selectors.errorClass+e.id));n.textContent=t,n.classList.add("".concat(this._selectors.errorClassVisible)),e.classList.add("".concat(this._selectors.inputErrorClass))}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("".concat(this._selectors.errorClass+e.id));t.textContent="",t.classList.remove("".concat(this._selectors.errorClassVisible)),e.classList.remove("".concat(this._selectors.inputErrorClass))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._handleOpenPopup=o,this._card=document.querySelector(r).content.querySelector(".place").cloneNode(!0),this._cardName=t.name,this._cardInfo=t.link,this._likes=t.likes,this._owner=t.owner._id,this._cardId=t._id,this._cardImage=this._card.querySelector(".place__image"),this._cardLike=this._card.querySelector(".place__like"),this._cardLikeCounter=this._card.querySelector(".place__like-counter"),this.userId=n,this.confrimDelete=i,this.handlerLikeClick=s}var t,r;return t=e,(r=[{key:"createCard",value:function(){var e=this;return this._owner!==this.userId&&this._card.querySelector(".place__trash").classList.add("place__trash_inactive"),this._card.querySelector(".place__trash").addEventListener("click",(function(){e.confrimDelete(e)})),this._cardLike.addEventListener("click",(function(){return e.handlerLikeClick()})),this._likes&&this._likes.forEach((function(t){t._id===e.userId&&e._cardLike.classList.add("place__like_active")})),this._cardImage.addEventListener("click",(function(t){return e._handleOpenPopup(e._cardName,e._cardInfo)})),this._card.querySelector(".place__title").textContent=this._cardName,this._cardLikeCounter.textContent=this._likes.length,this._cardImage.src=this._cardInfo,this._cardImage.alt=this._cardName,this._card}},{key:"deleteCard",value:function(){this._card.remove(),this._card=null}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.getItems,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._getItems=r,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItem",value:function(){var e=this;this._getItems.then((function(t){t.forEach((function(t){e.addItem(e._renderer(t).createCard())}))}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._buttonConfirmDelete=this._popup.querySelector(".popup__button-confirm"),this.confirmedDelete=n,this.card}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_active")}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._buttonConfirmDelete&&this._buttonConfirmDelete.addEventListener("click",(function(){e.confirmedDelete(e.card),e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup")&&e.close()})),this._popup.querySelector(".popup__close").addEventListener("click",this.close.bind(this))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).mainImage=t._popup.querySelector(".popup__main-image"),t.mainImageTitle=t._popup.querySelector(".popup__image-title"),t}return t=s,(n=[{key:"open",value:function(e,t){this.mainImage.src=t,this.mainImage.alt=e,this.mainImageTitle.textContent=e,l(d(s.prototype),"open",this).call(this)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(a);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function s(e,t){var n,r=t.handleInputValues;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this,e))._handleInputValues=r,n._form=n._popup.querySelector(".form"),n._submitButton=n._form.querySelector(".form__submit"),n}return t=s,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".form__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleInputValues(e._getInputValues(),e._submitButton),e.close()})),v(C(s.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),v(C(s.prototype),"close",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(a);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.userNameSelector,o=t.userInfoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userInfo=document.querySelector(o),this._userAvatar=document.querySelector(".user__image"),this._getUserInfo=n,this.userId}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._form=document.querySelector(".form_user"),this._userNameForm=this._form.querySelector(".form__input_type_name"),this._userInfoFrom=this._form.querySelector(".form__input_type_info"),this._userNameForm.value=this._userName.textContent,this._userInfoFrom.value=this._userInfo.textContent,{name:this._userName.textContent,info:this._userInfo.textContent}}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}},{key:"setUserInfo",value:function(e){var t=this;void 0!==e?(this._userName.textContent=e.name,this._userInfo.textContent=e.info):this._getUserInfo.then((function(e){t._userName.textContent=e.name,t._userInfo.textContent=e.about,t._userAvatar.src=e.avatar,t.userId=e._id}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.info})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"setCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e._cardId),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"setCardLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e._cardId,"/likes"),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"deleteCardLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e._cardId,"/likes"),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){return console.log(e)}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),O=document.querySelector(".user__change-button"),j=document.querySelector(".user__add-button"),P=document.querySelector(".popup__close_type_card"),q=document.querySelector(".popup_type_user"),x=document.querySelector(".popup_type_card"),U="#tmpl",T={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error",errorClass:".form__error",errorClassVisible:"form__error_visible"},R=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{authorization:"dfaf14aa-f273-4bf7-9d80-4b98802a6803","Content-Type":"application/json"}}),V=new i({getItems:R.getInitialCards(),renderer:function(e){return new r(e,B.userId,U,H,z,M)}},".places");V.renderItem();var B=new E({userNameSelector:".user__name",userInfoSelector:".user__info"},R.getUserInfo());B.setUserInfo();var N=new a(".popup_type_user");N.setEventListeners();var D=new w(".popup_type_edit-avatar",{handleInputValues:function(e,t){t.textContent="Сохранение...",R.editAvatar(e).then((function(e){B.setUserAvatar(e),console.log(e)})).finally((function(){return t.textContent="Сохранить"}))}});D.setEventListeners(),document.querySelector(".user__image-overlay").addEventListener("click",(function(){return D.open()}));var A=new a(".popup_type_confirm-delete",(function(e){R.deleteCard(e).then((function(){return e.deleteCard()}))}));A.setEventListeners();var F=new _(".popup_type_open-image");F.setEventListeners();var J=new w(".popup_type_card",{handleInputValues:function(e,t){t.textContent="Сохранение...",R.setCard(e).then((function(e){var t=new r(e,B.userId,U,H,z,M);V.addItem(t.createCard())})).finally((function(){return t.textContent="Сохранить"}))}});function H(e,t){F.open(e,t)}function z(e){A.card=e,A.open()}function M(){var e=this;this._cardLike.classList.toggle("place__like_active"),this._cardLike.classList.contains("place__like_active")?R.setCardLike(this).then((function(t){e._cardLikeCounter.textContent=t.likes.length})):R.deleteCardLike(this).then((function(t){e._cardLikeCounter.textContent=t.likes.length}))}J.setEventListeners(),new w(".popup_type_user",{handleInputValues:function(e,t){t.textContent="Сохранение...",R.setUserInfo(e).then((function(e){return e})).finally((function(){return t.textContent="Сохранить"})),B.setUserInfo(e)}}).setEventListeners(),new t(q,T).enableValidation(),new t(x,T).enableValidation(),new t(document.querySelector(".popup_type_edit-avatar"),T).enableValidation(),O.addEventListener("click",(function(){B.getUserInfo(),N.open()})),P.addEventListener("click",(function(){J.close()})),j.addEventListener("click",(function(){J.open()}))})();