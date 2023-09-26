/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n    constructor(data) {\n      this.data = data,\n      this.left = null;\n      this.right = null;\n    }\n  }\n\n//# sourceURL=webpack://webpack-demo/./src/Node.js?");

/***/ }),

/***/ "./src/Tree.js":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ \"./src/Node.js\");\n\n\nclass Tree {\n  constructor(array) {\n    this.root = this.buildTree(array);\n  }\n\n  buildTree(array, start = 0, end = array.length - 1) {\n    if (start > end) {\n      return null;\n    }\n    const mid = parseInt((start + end) / 2, 10);\n    const node = new _Node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](array[mid]);\n\n    node.left = this.buildTree(array, start, mid - 1);\n    node.right = this.buildTree(array, mid + 1, end);\n\n    return node;\n  }\n\n  prettyPrint = (node, prefix = '', isLeft = true) => {\n    if (node === null) {\n      return;\n    }\n    if (node.right !== null) {\n      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);\n    }\n    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);\n    if (node.left !== null) {\n      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);\n    }\n  };\n\n  insert(value, root = this.root) {\n    if (root === null) {\n      root = new _Node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n      return root;\n    }\n    if (value < root.data)\n      {root.left = this.insert(value, root.left)}\n    else if (value > root.data)\n      {root.right = this.insert(value, root.right)};\n\n    return root;\n  }\n\n  delete(value, root = this.root) {\n    if (root == null) {\n      return root;\n    }\n    if (value < root.data) { root.left = this.delete(value, root.left);\n    } else if (value > root.data) {\n    root.right = this.delete(value, root.right);\n    } else {\n      if (root.left == null) {\n    return root.right;\n      } if (root.right == null) {\n    return root.left;\n      }\n      root.data = minValue(root.right);\n      root.right = delete (root.data, root.right);\n    }\n    return root;\n  }\n\n  minValue(root) {\n    let minV = root.data;\n    while (root.left != null) {\n      minV = root.left.data;\n      root = root.left;\n    }\n    return minV;\n  }\n\n  find(value, root = this.root) {\n      if(root === null) {\n        return false\n      } if (value === root.data) return root\n\n      if (value < root.data) {  return this.find(value, root.left)\n      } if (value > root.data) { return this.find(value, root.right)\n        \n    }\n    return root\n  }\n\n  levelOrder(arr = [], queue = [], root = this.root) {\n    if (root === null) return;\n   \n    arr.push(root.data);\n\n    queue.push(root.left);\n    queue.push(root.right);\n\n    while (queue.length) {\n      const level = queue[0];\n      queue.shift();\n      this.levelOrder(arr, queue, level);\n    }\n\n    return arr;\n  }\n\n  inOrder(arr = [], root = this.root) {\n    if (root === null) return;\n\n    if (root.left) this.inOrder(arr, root.left);\n\n    arr.push(root.data);\n\n    if (root.right) this.inOrder(arr, root.right);\n\n    return arr;\n  }\n\n  preOrder(arr = [], root = this.root) {\n    if (root === null) return;\n\n    arr.push(root.data);\n    \n    if (root.left) this.preOrder(arr, root.left);\n\n    if (root.right) this.preOrder(arr, root.right);\n\n    return arr;\n  }\n\n  postOrder(arr = [], root = this.root) {\n    if (root === null) return;\n\n    if (root.right) this.postOrder(arr, root.right);\n  \n    else if (root.left) this.postOrder(arr, root.left);\n\n    arr.push(root.data);\n\n    return arr;\n  }\n\n  height(node = this.root) {\n    if (node === null) return 0;\n\n    const leftHeight = this.height(node.left);\n    const rightHeight = this.height(node.right);\n\n    return Math.max(leftHeight, rightHeight) + 1;\n  }\n\n  depth(value, root = this.root, depth = 0) {\n    \n    if (root === null) return 0;\n    \n    if (value === root.data)  \n    return depth\n    \n    if (value < root.data) { return this.depth(value, root.left, depth +=1)\n    }  return this.depth(value, root.right, depth +=1);    \n  }\n\n  isBalanced(root = this.root) {\n    if(root == null) return false\n\n    const leftHeight = this.isBalanced(root.left);\n    const rightHeight = this.isBalanced(root.right);\n\n    if (leftHeight - rightHeight >= 2 || rightHeight - leftHeight >=2) return false\n    return 'Tree is balanced'\n  }\n\n  rebalance(root = this.root) {\n    const arr = this.levelOrder([], [], root);\n    arr.sort((a, b) => a - b);\n    return this.root = this.buildTree(arr);\n  }\n\n  \n\n}\n\nconst array = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345];\nconst tree = new Tree([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);\ntree.prettyPrint(tree.root);\nconsole.log(array);\ntree.insert(21);\ntree.prettyPrint(tree.root);\ntree.delete(9);\ntree.prettyPrint(tree.root);\nconsole.log(tree.find(67));\nconsole.log(tree.levelOrder());\nconsole.log(tree.inOrder());\nconsole.log(tree.preOrder());\nconsole.log(tree.postOrder());\nconsole.log(tree.height());\nconsole.log(tree.depth(6345));\nconsole.log(tree.isBalanced());\nconsole.log(tree.rebalance());\n\n\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/Tree.js?");

/***/ }),

/***/ "./src/driver.js":
/*!***********************!*\
  !*** ./src/driver.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomArray\": () => (/* binding */ randomArray)\n/* harmony export */ });\n/* harmony import */ var _Tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree.js */ \"./src/Tree.js\");\n\n\nconst randomArray = (size) => {\n    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));\n  }\n  \n\nconst newTree = new _Tree_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](randomArray(30));\nconsole.log(newTree.isBalanced());\nconsole.log(newTree.levelOrder());\nconsole.log(newTree.inOrder());\nconsole.log(newTree.preOrder());\nconsole.log(newTree.postOrder());\nnewTree.insert(300);\nnewTree.insert(400);\nnewTree.insert(500);\n\nconsole.log(newTree.isBalanced());\nnewTree.rebalance();\nconsole.log(newTree.isBalanced());\n\nconsole.log(newTree.levelOrder());\nconsole.log(newTree.inorder());\nconsole.log(newTree.preorder());\nconsole.log(newTree.postorder());\nnewTree.prettyPrint();\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/driver.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree.js */ \"./src/Tree.js\");\n/* harmony import */ var _driver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver.js */ \"./src/driver.js\");\n/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Node.js */ \"./src/Node.js\");\n\n\n\n\n(0,_Tree_js__WEBPACK_IMPORTED_MODULE_0__.Tree)();\n(0,_Node_js__WEBPACK_IMPORTED_MODULE_2__.Node)()\n;(0,_driver_js__WEBPACK_IMPORTED_MODULE_1__.randomArray)();\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;