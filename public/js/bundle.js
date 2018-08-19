!function(r){var n={};function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=r,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}({"./src/js/app/animate/colorTransition.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _color = __webpack_require__(/*! ../utils/color */ \"./src/js/app/utils/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ColorTransition = function () {\n    function ColorTransition(fps, duration) {\n        _classCallCheck(this, ColorTransition);\n\n        this.fps = fps || 30;\n        this.duration = duration || 1;\n    }\n\n    // Calculates the distance between the RGB values.\n    // We need to know the distance between two colors\n    // so that we can calculate the increment values for R, G, and B.\n\n\n    _createClass(ColorTransition, [{\n        key: 'calculateDistance',\n        value: function calculateDistance(colorArray1, colorArray2) {\n            var distance = [];\n            for (var i = 0; i < colorArray1.length; i++) {\n                distance.push(Math.abs(colorArray1[i] - colorArray2[i]));\n            }\n            return distance;\n        }\n\n        // Calculates the increment values for R, G, and B using distance, fps, and duration.\n        // This calculation can be made in many different ways.\n\n    }, {\n        key: 'calculateIncrement',\n        value: function calculateIncrement(distanceArray, fps, duration) {\n            var fps = fps;\n            var duration = duration;\n            var increment = [];\n            for (var i = 0; i < distanceArray.length; i++) {\n                var incr = Math.abs(Math.floor(distanceArray[i] / (fps * duration)));\n                if (incr == 0) {\n                    incr = 1;\n                }\n                increment.push(incr);\n            }\n            return increment;\n        }\n    }, {\n        key: 'startTransition',\n        value: function startTransition() {\n            clearInterval(this.transition);\n\n            this.currentColor = this.currentColor || _color2.default.generateRGB();\n            this.targetColor = _color2.default.generateRGB();\n            this.distance = this.calculateDistance(this.currentColor, this.targetColor);\n            this.increment = this.calculateIncrement(this.distance, this.fps, this.duration);\n\n            setInterval(this.transition.bind(this), 1000 / this.fps);\n        }\n    }, {\n        key: 'transition',\n        value: function transition() {\n            // checking R\n            if (this.currentColor[0] > this.targetColor[0]) {\n                this.currentColor[0] -= this.increment[0];\n                if (this.currentColor[0] <= this.targetColor[0]) {\n                    this.increment[0] = 0;\n                }\n            } else {\n                this.currentColor[0] += this.increment[0];\n                if (this.currentColor[0] >= this.targetColor[0]) {\n                    this.increment[0] = 0;\n                }\n            }\n\n            // checking G\n            if (this.currentColor[1] > this.targetColor[1]) {\n                this.currentColor[1] -= this.increment[1];\n                if (this.currentColor[1] <= this.targetColor[1]) {\n                    this.increment[1] = 0;\n                }\n            } else {\n                this.currentColor[1] += this.increment[1];\n                if (this.currentColor[1] >= this.targetColor[1]) {\n                    this.increment[1] = 0;\n                }\n            }\n\n            // checking B\n            if (this.currentColor[2] > this.targetColor[2]) {\n                this.currentColor[2] -= this.increment[2];\n                if (this.currentColor[2] <= this.targetColor[2]) {\n                    this.increment[2] = 0;\n                }\n            } else {\n                this.currentColor[2] += this.increment[2];\n                if (this.currentColor[2] >= this.targetColor[2]) {\n                    this.increment[2] = 0;\n                }\n            }\n\n            // applying the new modified color\n            this.globalColor = _color2.default.rgb2hex(this.currentColor);\n\n            // transition ended. start a new one\n            if (this.increment[0] == 0 && this.increment[1] == 0 && this.increment[2] == 0) {\n                this.startTransition();\n            }\n        }\n    }]);\n\n    return ColorTransition;\n}();\n\nexports.default = ColorTransition;\n\n//# sourceURL=webpack:///./src/js/app/animate/colorTransition.js?")},"./src/js/app/core/game.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Game = function () {\n    function Game() {\n        _classCallCheck(this, Game);\n    }\n\n    _createClass(Game, [{\n        key: "start",\n        value: function start() {\n            this.clear();\n            this.update();\n            this.render();\n            this.queue();\n        }\n    }, {\n        key: "clear",\n        value: function clear() {\n            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        }\n    }, {\n        key: "update",\n        value: function update() {}\n    }, {\n        key: "render",\n        value: function render() {}\n    }, {\n        key: "queue",\n        value: function queue() {\n            window.requestAnimationFrame(this.start.bind(this));\n        }\n    }]);\n\n    return Game;\n}();\n\nexports.default = Game;\n\n//# sourceURL=webpack:///./src/js/app/core/game.js?')},"./src/js/app/draw/shape.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Shape = function () {\n    function Shape() {\n        _classCallCheck(this, Shape);\n    }\n\n    _createClass(Shape, null, [{\n        key: "circle",\n        value: function circle(ctx, pos, radius, color) {\n            ctx.fillStyle = color;\n            ctx.beginPath();\n            ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);\n            ctx.closePath();\n            ctx.fill();\n        }\n    }]);\n\n    return Shape;\n}();\n\nexports.default = Shape;\n\n//# sourceURL=webpack:///./src/js/app/draw/shape.js?')},"./src/js/app/fx/emitter.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _type = __webpack_require__(/*! ../utils/type */ \"./src/js/app/utils/type.js\");\n\nvar _type2 = _interopRequireDefault(_type);\n\nvar _vector = __webpack_require__(/*! ../math/vector */ \"./src/js/app/math/vector.js\");\n\nvar _vector2 = _interopRequireDefault(_vector);\n\nvar _particle = __webpack_require__(/*! ../fx/particle */ \"./src/js/app/fx/particle.js\");\n\nvar _particle2 = _interopRequireDefault(_particle);\n\nvar _colorTransition = __webpack_require__(/*! ../animate/colorTransition */ \"./src/js/app/animate/colorTransition.js\");\n\nvar _colorTransition2 = _interopRequireDefault(_colorTransition);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Emitter = function () {\n    function Emitter(type, pos, vel, spread, max, rate, damp, mass, size, color) {\n        _classCallCheck(this, Emitter);\n\n        this.particles = [];\n        this.fields = [];\n        this.type = type;\n        this.pos = pos;\n        this.vel = vel;\n        this.spread = spread || Math.PI / 32;\n        this.max = max || 10000;\n        this.rate = rate || 10;\n        this.damp = damp || 0.98;\n        this.mass = mass || 100;\n        this.size = size || 1;\n        this.color = color || '#000ffc';\n        this.drawSize = 3;\n        this.drawColor = type == 'point' ? '#999' : 'area' ? 'transparent' : undefined;\n        this.drawFields = false;\n        this.transition = null;\n    }\n\n    _createClass(Emitter, [{\n        key: 'addField',\n        value: function addField(field) {\n            this.fields.push(field);\n        }\n    }, {\n        key: 'animateColor',\n        value: function animateColor(fps, duration) {\n            this.transition = new _colorTransition2.default(fps, duration);\n            this.transition.startTransition();\n        }\n    }, {\n        key: 'addParticles',\n        value: function addParticles() {\n            if (this.particles.length > this.max) return;\n            for (var i = 0; i < this.rate; i++) {\n                this.particles.push(this.getParticle());\n            }\n        }\n    }, {\n        key: 'getParticle',\n        value: function getParticle() {\n            var angle = this.vel.getAngle() + this.spread - Math.random() * this.spread * 2;\n            var magnitude = this.vel.getMagnitude();\n            var pos = this.type == 'point' ? new _vector2.default(this.pos.x, this.pos.y) : 'area' ? new _vector2.default(Math.random() * this.pos.x, Math.random() * this.pos.y) : undefined;\n            var vel = _vector2.default.fromAngle(angle, magnitude);\n            return new _particle2.default(pos, vel, null, this.damp, this.mass, this.size, this.color);\n        }\n    }, {\n        key: 'update',\n        value: function update(bx, by, mx, my, mass) {\n            this.mx = mx || null;\n            this.my = my || null;\n\n            var currentParticles = [];\n\n            for (var i = 0; i < this.particles.length; i++) {\n                var particle = this.particles[i];\n                var pos = particle.pos;\n\n                if (pos.x < 0 || pos.x > bx || pos.y < 0 || pos.y > by) continue;\n\n                particle.update();\n\n                if (this.mx && this.my) particle.addForce(new _vector2.default(this.mx, this.my), mass);\n\n                for (var j = 0; j < this.fields.length; j++) {\n                    var field = this.fields[j];\n                    particle.addForce(field.pos, field.mass);\n                }\n\n                currentParticles.push(particle);\n            }\n            this.particles = currentParticles;\n        }\n    }, {\n        key: 'render',\n        value: function render(ctx) {\n            for (var i = 0; i < this.particles.length; i++) {\n                var particle = this.particles[i];\n                if (this.transition) particle.render(ctx, this.transition.globalColor);else particle.render(ctx);\n            }\n\n            if (this.drawFields) {\n                for (var j = 0; j < this.fields.length; j++) {\n                    var field = this.fields[j];\n                    Shape.circle(this.ctx, field.pos, field.drawSize, field.drawColor);\n                }\n            }\n        }\n    }], [{\n        key: 'TYPE',\n        get: function get() {\n            return _type2.default;\n        }\n    }]);\n\n    return Emitter;\n}();\n\nexports.default = Emitter;\n\n//# sourceURL=webpack:///./src/js/app/fx/emitter.js?")},"./src/js/app/fx/field.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Field = function () {\n    function Field(pos, mass) {\n        _classCallCheck(this, Field);\n\n        this.pos = pos || new vector();\n        this.setMass(mass);\n        this.drawSize = 3;\n    }\n\n    _createClass(Field, [{\n        key: 'setMass',\n        value: function setMass(mass) {\n            this.mass = mass || 100;\n            this.drawColor = mass < 0 ? '#f00' : '#0f0';\n        }\n    }]);\n\n    return Field;\n}();\n\nexports.default = Field;\n\n//# sourceURL=webpack:///./src/js/app/fx/field.js?")},"./src/js/app/fx/particle.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _color = __webpack_require__(/*! ../utils/color */ "./src/js/app/utils/color.js");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _vector = __webpack_require__(/*! ../math/vector */ "./src/js/app/math/vector.js");\n\nvar _vector2 = _interopRequireDefault(_vector);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Particle = function () {\n    function Particle(pos, vel, acc, damp, mass, size, color) {\n        _classCallCheck(this, Particle);\n\n        this.pos = pos || new _vector2.default();\n        this.vel = vel || new _vector2.default();\n        this.acc = acc || new _vector2.default();\n        this.damp = damp || 0.98;\n        this.mass = mass || 100;\n        this.size = size || 1;\n        this.color = color || _color2.default.RANDOM;\n    }\n\n    _createClass(Particle, [{\n        key: \'update\',\n        value: function update() {\n            this.vel.add(this.acc);\n            this.vel.multiply(this.damp);\n            this.acc.divide(this.mass);\n            this.pos.add(this.vel);\n        }\n    }, {\n        key: \'render\',\n        value: function render(ctx, color) {\n            ctx.fillStyle = color || this.color;\n            ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);\n        }\n    }, {\n        key: \'addForce\',\n        value: function addForce(force, mass) {\n            var tForce = this.calculateForce(force, mass);\n            this.acc.add(tForce);\n        }\n    }, {\n        key: \'calculateForce\',\n        value: function calculateForce(force, mass) {\n            var fx = 0;\n            var fy = 0;\n\n            var vx = force.x - this.pos.x;\n            var vy = force.y - this.pos.y;\n\n            var tForce = mass / Math.pow(vx * vx + vy * vy, 1.5);\n\n            fx += vx * tForce;\n            fy += vy * tForce;\n\n            return new _vector2.default(fx, fy);\n        }\n    }]);\n\n    return Particle;\n}();\n\nexports.default = Particle;\n\n//# sourceURL=webpack:///./src/js/app/fx/particle.js?')},"./src/js/app/fx/particleSystem.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _shape = __webpack_require__(/*! ../draw/shape */ \"./src/js/app/draw/shape.js\");\n\nvar _shape2 = _interopRequireDefault(_shape);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ParticleSystem = function () {\n    function ParticleSystem() {\n        _classCallCheck(this, ParticleSystem);\n\n        this.canvas = document.querySelector('canvas');\n        this.ctx = this.canvas.getContext('2d');\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight;\n        this.emitters = [];\n        this.mx = 0;\n        this.my = 0;\n        this.drawEmitters = false;\n        this.interaction = false;\n        this.interactionMass = 100;\n    }\n\n    _createClass(ParticleSystem, [{\n        key: 'mouseMoveHandler',\n        value: function mouseMoveHandler(e) {\n            this.mx = e.clientX;\n            this.my = e.clientY;\n        }\n    }, {\n        key: 'addEmitter',\n        value: function addEmitter(emitter) {\n            this.emitters.push(emitter);\n        }\n    }, {\n        key: 'getEmitter',\n        value: function getEmitter(index) {\n            return this.emitters[index];\n        }\n    }, {\n        key: 'update',\n        value: function update() {\n            for (var i = 0; i < this.emitters.length; i++) {\n                var emitter = this.emitters[i];\n                emitter.addParticles();\n                if (this.interaction) emitter.update(this.canvas.width, this.canvas.height, this.mx, this.my, this.interactionMass);else emitter.update(this.canvas.width, this.canvas.height);\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            for (var i = 0; i < this.emitters.length; i++) {\n                var emitter = this.emitters[i];\n                emitter.render(this.ctx);\n                if (this.drawEmitters) _shape2.default.circle(this.ctx, emitter.pos, emitter.drawSize, emitter.drawColor);\n            }\n        }\n    }, {\n        key: 'allowInteraction',\n        set: function set(value) {\n            this.interaction = value;\n            if (this.interaction) document.onmousemove = this.mouseMoveHandler.bind(this);\n        }\n    }]);\n\n    return ParticleSystem;\n}();\n\nexports.default = ParticleSystem;\n\n//# sourceURL=webpack:///./src/js/app/fx/particleSystem.js?")},"./src/js/app/index.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _game = __webpack_require__(/*! ./core/game */ "./src/js/app/core/game.js");\n\nvar _game2 = _interopRequireDefault(_game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar game = new _game2.default();\ngame.start();\n\n//# sourceURL=webpack:///./src/js/app/index.js?')},"./src/js/app/math/math2.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Math2 = function () {\n    function Math2() {\n        _classCallCheck(this, Math2);\n    }\n\n    _createClass(Math2, null, [{\n        key: "random",\n        value: function random() {\n            if (arguments.length > 2) {\n                return 0;\n            }\n            switch (arguments.length) {\n                case 0:\n                    return Math.random();\n                case 1:\n                    return Math.round(Math.random() * arguments[0]);\n                case 2:\n                    var min = arguments[0];\n                    var max = arguments[1];\n                    return Math.round(Math.random() * (max - min) + min);\n            }\n        }\n    }]);\n\n    return Math2;\n}();\n\nexports.default = Math2;\n\n//# sourceURL=webpack:///./src/js/app/math/math2.js?')},"./src/js/app/math/vector.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Vector = function () {\n    function Vector(x, y) {\n        _classCallCheck(this, Vector);\n\n        this.x = x || 0;\n        this.y = y || 0;\n    }\n\n    _createClass(Vector, [{\n        key: "add",\n        value: function add(vector) {\n            this.x += vector.x;\n            this.y += vector.y;\n        }\n    }, {\n        key: "multiply",\n        value: function multiply(value) {\n            return new Vector(this.x *= value, this.y *= value);\n        }\n    }, {\n        key: "divide",\n        value: function divide(value) {\n            return new Vector(this.x /= value, this.y /= value);\n        }\n    }, {\n        key: "getMagnitude",\n        value: function getMagnitude() {\n            return Math.sqrt(this.x * this.x + this.y * this.y);\n        }\n    }, {\n        key: "getAngle",\n        value: function getAngle() {\n            return Math.atan2(this.y, this.x);\n        }\n    }], [{\n        key: "fromAngle",\n        value: function fromAngle(angle, magnitude) {\n            return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));\n        }\n    }]);\n\n    return Vector;\n}();\n\nexports.default = Vector;\n\n//# sourceURL=webpack:///./src/js/app/math/vector.js?')},"./src/js/app/utils/color.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _type = __webpack_require__(/*! ../utils/type */ "./src/js/app/utils/type.js");\n\nvar _type2 = _interopRequireDefault(_type);\n\nvar _math = __webpack_require__(/*! ../math/math2 */ "./src/js/app/math/math2.js");\n\nvar _math2 = _interopRequireDefault(_math);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Color = function () {\n    function Color() {\n        _classCallCheck(this, Color);\n    }\n\n    _createClass(Color, null, [{\n        key: \'generateRGB\',\n        value: function generateRGB(min, max) {\n            var min = min || 0;\n            var max = min || 255;\n            var color = [];\n            for (var i = 0; i < 3; i++) {\n                var num = _math2.default.random(min, max);\n                color.push(num);\n            }\n            return color;\n        }\n    }, {\n        key: \'rgb2hex\',\n        value: function rgb2hex(colorArray) {\n            var color = [];\n            for (var i = 0; i < colorArray.length; i++) {\n                var hex = colorArray[i].toString(16);\n                if (hex.length < 2) {\n                    hex = "0" + hex;\n                }\n                color.push(hex);\n            }\n            return "#" + color.join("");\n        }\n    }, {\n        key: \'TYPE\',\n        get: function get() {\n            return _type2.default;\n        }\n    }, {\n        key: \'RANDOM\',\n        get: function get() {\n            var letters = \'0123456789ABCDEF\';\n            var color = \'#\';\n            for (var i = 0; i < 6; i++) {\n                color += letters[Math.floor(Math.random() * 16)];\n            }\n            return color;\n        }\n    }]);\n\n    return Color;\n}();\n\nexports.default = Color;\n\n//# sourceURL=webpack:///./src/js/app/utils/color.js?')},"./src/js/app/utils/type.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Type = function () {\n    function Type() {\n        _classCallCheck(this, Type);\n    }\n\n    _createClass(Type, null, [{\n        key: 'POINT',\n        get: function get() {\n            return 'point';\n        }\n    }, {\n        key: 'AREA',\n        get: function get() {\n            return 'area';\n        }\n    }, {\n        key: 'RANDOM',\n        get: function get() {\n            return 'random';\n        }\n    }]);\n\n    return Type;\n}();\n\nexports.default = Type;\n\n//# sourceURL=webpack:///./src/js/app/utils/type.js?")},0:function(module,exports,__webpack_require__){eval('__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/index.js */"./src/js/app/index.js");\n__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/animate/colorTransition.js */"./src/js/app/animate/colorTransition.js");\n__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/core/game.js */"./src/js/app/core/game.js");\n__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/draw/shape.js */"./src/js/app/draw/shape.js");\n__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/fx/emitter.js */"./src/js/app/fx/emitter.js");\n__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/fx/field.js */"./src/js/app/fx/field.js");\n__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/fx/particle.js */"./src/js/app/fx/particle.js");\n__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/fx/particleSystem.js */"./src/js/app/fx/particleSystem.js");\n__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/math/math2.js */"./src/js/app/math/math2.js");\n__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/math/vector.js */"./src/js/app/math/vector.js");\n__webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/utils/color.js */"./src/js/app/utils/color.js");\nmodule.exports = __webpack_require__(/*! /Users/stuarthaas/Sites/game/src/js/app/utils/type.js */"./src/js/app/utils/type.js");\n\n\n//# sourceURL=webpack:///multi_./src/js/app/index.js_./src/js/app/animate/colorTransition.js_./src/js/app/core/game.js_./src/js/app/draw/shape.js_./src/js/app/fx/emitter.js_./src/js/app/fx/field.js_./src/js/app/fx/particle.js_./src/js/app/fx/particleSystem.js_./src/js/app/math/math2.js_./src/js/app/math/vector.js_./src/js/app/utils/color.js_./src/js/app/utils/type.js?')}});
//# sourceMappingURL=maps/bundle.js.map
