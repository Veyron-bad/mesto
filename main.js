(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._form.querySelector(this._config.submitButtonSelector)}var n,r;return n=t,(r=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),n.classList.add(this._config.errorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disabledButton():(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_disabledButton",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._config.inactiveButtonClass)}},{key:"_resetErrorMessage",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},o=document.querySelector(".profile"),i=o.querySelector(".profile__button-edit"),u=document.querySelector(".popup_type_editProfile"),a=u.querySelector(".popup__input_type_name"),c=u.querySelector(".popup__input_type_profession"),l=document.querySelector(".popup__input_type_url"),s=document.forms.profileFormEditing,f=document.forms.addCards,p=document.forms.changeAvatar,y=o.querySelector(".profile__avatar-overlay"),h=document.querySelector(".profile__avatar");function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function b(t,e,n){return(e=m(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var _=function(){function t(e,n){var r=this,o=e.data,i=e.cardTemplateSelector,u=e.handleCardClick,a=e.handleDeleteCard,c=e.handelLikeClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"deleteCard",(function(){r._cardElement.remove(),r._cardElement=null})),b(this,"_toogleLike",(function(){r._buttonLike.classList.toggle("element__like_active")})),this._link=o.link,this._name=o.name,this._imageAlt=o.name,this._userId=n,this._cardId=o._id,this._likes=o.likes,this._owner=o.owner,this._handleCardClick=u,this._handleDeleteCard=a,this._handelLikeClick=c,this._cardTemplateSelector=document.querySelector(i).content.querySelector(".element")}var e,n;return e=t,(n=[{key:"generatCard",value:function(){return this._cardElement=this._cardTemplateSelector.cloneNode(!0),this._image=this._cardElement.querySelector(".element__image"),this._title=this._cardElement.querySelector(".element__title"),this._buttonDeleteCard=this._cardElement.querySelector(".element__delete"),this._buttonLike=this._cardElement.querySelector(".element__like"),this._countLike=this._cardElement.querySelector(".element__like-counter"),this._setEventListeners(),this._hideDeleteButton(),this._checkMyLike(),this._image.src=this._link,this._image.alt=this._imageAlt,this._title.textContent=this._name,this._countLike.textContent=this._likes.length,this._cardElement}},{key:"_setEventListeners",value:function(){var t=this;this._buttonDeleteCard.addEventListener("click",(function(){t._handleDeleteCard()})),this._buttonLike.addEventListener("click",(function(){t._handelLikeClick(t)})),this._image.addEventListener("click",(function(){t._handleCardClick()}))}},{key:"getCardId",value:function(){return this._cardId}},{key:"_hideDeleteButton",value:function(){this._owner._id!==this._userId&&this._buttonDeleteCard.remove()}},{key:"_checkMyLike",value:function(){this.findMyLike()&&this._buttonLike.classList.add("element__like_active")}},{key:"findMyLike",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"updateLike",value:function(t){this._toogleLike(),this._likes=t.likes,this._countLike.textContent=this._likes.length}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var k=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"setItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){var n=e._renderer(t);e.setItem(n)}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,O(r.key),r)}}function O(t){var e=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(e)?e:String(e)}var j=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=O(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._submitButton=this._popup.querySelector(".popup__button-save")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setButtonText",value:function(t){this._submitButton.textContent=t}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__button-close").addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&t.close()}))}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=T(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function T(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function q(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return q(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupCardImage=e._popup.querySelector(".popup__image"),e._popupCardTitle=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t){this._popupCardImage.src=t.link,this._popupCardImage.alt=t.name,this._popupCardTitle.textContent=t.name,L(B(u.prototype),"open",this).call(this)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=D(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function D(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}function V(t,e){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},V(t,e)}function F(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(r);if(o){var n=M(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return F(this,t)});function u(t){var e,n=t.popupSelector,r=t.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._form=e._popup.querySelector(".popup__form"),e._inputList=e._form.querySelectorAll(".popup__input"),e._submitForm=r,e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setEventListeners",value:function(){var t=this;U(M(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._getInputValues())}))}},{key:"close",value:function(){U(M(u.prototype),"close",this).call(this),this._form.reset()}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}var z=function(){function t(e){var n=e.userNameSelector,r=e.userInfoSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._userAvater=document.querySelector(o)}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userInfo.textContent}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userInfo.textContent=t.about}},{key:"setUserAvatar",value:function(t){this._userAvater.src=t.avatar}}],n&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}var K=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_isOk",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status,"!"))}},{key:"getInitialCards",value:function(){var t=this;return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return t._isOk(e)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch(this._baseUrl+"/cards/".concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._isOk(t)}))}},{key:"addCard",value:function(t){var e=this;return fetch(this._baseUrl+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:t.inputTitle,link:t.inputUrl})}).then((function(t){return e._isOk(t)}))}},{key:"addLike",value:function(t){var e=this;return fetch(this._baseUrl+"/cards/".concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._isOk(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch(this._baseUrl+"/cards/".concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._isOk(t)}))}},{key:"getUserInfo",value:function(){var t=this;return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return t._isOk(e)}))}},{key:"editProfileInfo",value:function(t){return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify(t)})}},{key:"editProfileAvatar",value:function(t){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(t)})}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Q(o)?o:String(o)),r)}var o}function X(){return X="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=Y(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},X.apply(this,arguments)}function Y(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=et(t)););return t}function Z(t,e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Z(t,e)}function tt(t,e){if(e&&("object"===Q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function et(t){return et=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},et(t)}var nt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Z(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=et(r);if(o){var n=et(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return tt(this,t)});function u(t){var e,n=t.popupSelector,r=t.submit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._form=e._popup.querySelector(".popup__form"),e._submitForm=r,e}return e=u,(n=[{key:"setHandlerSubmit",value:function(t){this._submitForm=t}},{key:"setEventListeners",value:function(){var t=this;X(et(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm()}))}}])&&W(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var ot,it=new K({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"410c2647-5135-422a-842e-d6b96469b875","Content-Type":"application/json"}});Promise.all([it.getUserInfo(),it.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return rt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rt(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ot=o._id,at.setUserInfo(o),ft.renderItems(i),h.src=o.avatar})).catch((function(t){console.log("Ошибка: ".concat(t))}));var ut=new n(r,f);ut.enableValidation(),new n(r,s).enableValidation(),new n(r,p).enableValidation();var at=new z({userNameSelector:".profile__name",userInfoSelector:".profile__profession",userAvatarSelector:".profile__avatar"}),ct=new x(".popup_type_zoom");ct.setEventListeners();var lt=new nt({popupSelector:".popup_type_del-confirm"});lt.setEventListeners();var st=function(t){var e=new _({data:t,cardTemplateSelector:"#template-card",handleCardClick:function(){ct.open(t)},handleDeleteCard:function(){lt.open(),lt.setHandlerSubmit((function(){lt.setButtonText("Удаление..."),it.deleteCard(t._id).then((function(){e.deleteCard(),lt.close()})).catch((function(t){console.log("Возникла ошибка при удалении карточки ".concat(t))})).finally((function(){lt.setButtonText("Удаленo")}))})),lt.open()},handelLikeClick:function(t){var e=t.findMyLike(),n=t.getCardId();e?it.deleteLike(n).then((function(e){t.updateLike(e)})).catch((function(t){console.log("Возникла ошибка с Like: ".concat(t))})):it.addLike(n).then((function(e){t.updateLike(e)})).catch((function(t){console.log("Возникла ошибка с Like: ".concat(t))}))}},ot);return e.generatCard()},ft=new k({renderer:st},".elements"),pt=new N({popupSelector:".popup_type_editProfile",submitForm:function(t){setTimeout(pt.setButtonText("Сохранение..."),1500),it.editProfileInfo(t).then((function(){at.setUserInfo(t),pt.close()})).catch((function(t){console.log("Ошибка редактирования профиля ".concat(t))})).finally((function(){pt.setButtonText("Сохранить")}))}});pt.setEventListeners(),i.addEventListener("click",(function(){pt.open();var t=at.getUserInfo();a.value=t.name,c.value=t.about}));var yt=new N({popupSelector:".popup_type_change-avatar",submitForm:function(t){setTimeout(yt.setButtonText("Загрузка..."),1e3),it.editProfileAvatar(t).then((function(){at.setUserAvatar(t),yt.close()})).catch((function(t){console.log("Ошибка загрузки аватарки ".concat(t))})).finally((function(){yt.setButtonText("Сохранить")}))}});yt.setEventListeners(),y.addEventListener("click",(function(){console.log("press"),yt.open();var t=at.getUserInfo();l.value=t.avatar}));var ht=o.querySelector(".profile__button-add"),dt=new N({popupSelector:".popup_type_addCards",submitForm:function(t){setTimeout(dt.setButtonText("Загрузка..."),1500),it.addCard(t).then((function(t){ft.setItem(st(t))})).catch((function(t){console.log("Ошибка добавления карточки ".concat(t))})).finally((function(){dt.setButtonText("Загрузка")})),dt.close()}});dt.setEventListeners(),ht.addEventListener("click",(function(){dt.open(),ut.enableValidation()}))})();