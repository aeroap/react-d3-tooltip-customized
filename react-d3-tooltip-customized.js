var ReactD3Tooltip = function (modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0)
}([function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _line = __webpack_require__(1);
    Object.defineProperty(exports, "LineTooltip", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_line)["default"]
        }
    });
    var _area_stack = __webpack_require__(71);
    Object.defineProperty(exports, "AreaStackTooltip", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_area_stack)["default"]
        }
    });
    var _scatter = __webpack_require__(73);
    Object.defineProperty(exports, "ScatterTooltip", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_scatter)["default"]
        }
    });
    var _bar = __webpack_require__(75);
    Object.defineProperty(exports, "BarTooltip", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_bar)["default"]
        }
    });
    var _bar_stack = __webpack_require__(78);
    Object.defineProperty(exports, "BarStackTooltip", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_bar_stack)["default"]
        }
    });
    var _bar_group = __webpack_require__(80);
    Object.defineProperty(exports, "BarGroupTooltip", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_bar_group)["default"]
        }
    });
    var _pie = __webpack_require__(82);
    Object.defineProperty(exports, "PieTooltip", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_pie)["default"]
        }
    });
    var _tooltip = __webpack_require__(62);
    Object.defineProperty(exports, "Tooltip", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_tooltip)["default"]
        }
    });
    var _voronoi = __webpack_require__(66);
    Object.defineProperty(exports, "Voronoi", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_voronoi)["default"]
        }
    });
    var _index = __webpack_require__(83);
    Object.defineProperty(exports, "SimpleTooltip", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_index)["default"]
        }
    });
    var _index2 = __webpack_require__(63);
    Object.defineProperty(exports, "TableTooltip", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_index2)["default"]
        }
    })
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _tooltip = __webpack_require__(62),
        _tooltip2 = _interopRequireDefault(_tooltip),
        _focus = __webpack_require__(64),
        _focus2 = _interopRequireDefault(_focus),
        _line = __webpack_require__(65),
        _line2 = _interopRequireDefault(_line),
        _voronoiEvt = __webpack_require__(70),
        _voronoiEvt2 = _interopRequireDefault(_voronoiEvt),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        LineTooltip = function (_VoronoiEvt) {
            function LineTooltip(props) {
                return _classCallCheck(this, LineTooltip), _possibleConstructorReturn(this, Object.getPrototypeOf(LineTooltip).call(this, props))
            }
            return _inherits(LineTooltip, _VoronoiEvt), _createClass(LineTooltip, [{
                key: "render",
                value: function () {
                    var focusDom, _props = this.props,
                        focus = (_props.width, _props.height, _props.focus);
                    return focus && (focusDom = _react2["default"].createElement(_focus2["default"], _extends({}, this.props, this.state))), _react2["default"].createElement("div", null, _react2["default"].createElement(_tooltip2["default"], _extends({}, this.props, this.state), this.props.children), _react2["default"].createElement(_reactD3Core.Legend, this.props), _react2["default"].createElement(_reactD3Shape.Chart, _extends({}, this.props, this.state), _react2["default"].createElement(_line2["default"], _extends({}, this.props, this.state, {
                        onMouseOver: this.voronoiMouseOver.bind(this),
                        onMouseOut: this.voronoiMouseOut.bind(this)
                    })), focusDom))
                }
            }]), LineTooltip
        }(_voronoiEvt2["default"]);
    LineTooltip.defaultProps = _commonProps2["default"], exports["default"] = LineTooltip, module.exports = exports["default"]
}, function (module, exports) {
    module.exports = React
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _svg = __webpack_require__(4);
    Object.defineProperty(exports, "Svg", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_svg)["default"]
        }
    });
    var _title = __webpack_require__(15);
    Object.defineProperty(exports, "Title", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_title)["default"]
        }
    });
    var _chartContainer = __webpack_require__(16);
    Object.defineProperty(exports, "Chart", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_chartContainer)["default"]
        }
    });
    var _axis = __webpack_require__(33);
    Object.defineProperty(exports, "Axis", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_axis)["default"]
        }
    });
    var _xaxis = __webpack_require__(35);
    Object.defineProperty(exports, "Xaxis", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_xaxis)["default"]
        }
    });
    var _yaxis = __webpack_require__(37);
    Object.defineProperty(exports, "Yaxis", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_yaxis)["default"]
        }
    });
    var _label = __webpack_require__(36);
    Object.defineProperty(exports, "Label", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_label)["default"]
        }
    });
    var _legend = __webpack_require__(17);
    Object.defineProperty(exports, "Legend", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_legend)["default"]
        }
    });
    var _grid = __webpack_require__(38);
    Object.defineProperty(exports, "Grid", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_grid)["default"]
        }
    });
    var _xgrid = __webpack_require__(39);
    Object.defineProperty(exports, "Xgrid", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_xgrid)["default"]
        }
    });
    var _ygrid = __webpack_require__(40);
    Object.defineProperty(exports, "Ygrid", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_ygrid)["default"]
        }
    });
    var _scale = __webpack_require__(6);
    Object.defineProperty(exports, "scale", {
        enumerable: !0,
        get: function () {
            return _scale.scale
        }
    });
    var _xDomain = __webpack_require__(41);
    Object.defineProperty(exports, "xDomainCount", {
        enumerable: !0,
        get: function () {
            return _xDomain.xDomain
        }
    });
    var _yDomain = __webpack_require__(42);
    Object.defineProperty(exports, "yDomainCount", {
        enumerable: !0,
        get: function () {
            return _yDomain.yDomain
        }
    })
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _commonProps = __webpack_require__(5),
        _commonProps2 = _interopRequireDefault(_commonProps),
        ChartSvg = (__webpack_require__(6), function (_Component) {
            function ChartSvg(props) {
                return _classCallCheck(this, ChartSvg), _possibleConstructorReturn(this, Object.getPrototypeOf(ChartSvg).call(this, props))
            }
            return _inherits(ChartSvg, _Component), _createClass(ChartSvg, [{
                key: "render",
                value: function () {
                    var _props = this.props,
                        height = _props.height,
                        width = _props.width,
                        margins = _props.margins,
                        svgClassName = _props.svgClassName,
                        id = _props.id,
                        children = _props.children,
                        t = "translate(" + margins.left + ", " + margins.top + ")";
                    return _react2["default"].createElement("svg", {
                        height: height,
                        width: width,
                        className: svgClassName,
                        id: id,
                        ref: "svgContainer"
                    }, _react2["default"].createElement("g", {
                        transform: t
                    }, children))
                }
            }]), ChartSvg
        }(_react.Component));
    ChartSvg.defaultProps = _extends({
        svgClassName: "react-d3-core__container_svg",
        onZoom: function () {},
        scaleExtent: [1, 10]
    }, _commonProps2["default"]), ChartSvg.propTypes = {
        id: _react.PropTypes.string,
        width: _react.PropTypes.number.isRequired,
        height: _react.PropTypes.number.isRequired,
        margins: _react.PropTypes.object.isRequired,
        svgClassName: _react.PropTypes.string.isRequired
    }, exports["default"] = ChartSvg
}, function (module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports["default"] = {
        width: 960,
        height: 500,
        margins: {
            top: 80,
            right: 100,
            bottom: 80,
            left: 100
        }
    }
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function scale(props) {
        var func, scale = (props.type, props.scale);
        return "linear" === scale ? func = _d3Scale2["default"].scaleLinear() : "identity" === scale ? func = _d3Scale2["default"].scaleIdentity() : "sqrt" === scale ? func = _d3Scale2["default"].scaleSqrt() : "pow" === scale ? func = _d3Scale2["default"].scalePow() : "log" === scale ? func = _d3Scale2["default"].scaleLog() : "quantize" === scale ? func = _d3Scale2["default"].scaleQuantize() : "quantile" === scale ? func = _d3Scale2["default"].scaleQuantile() : "ordinal" === scale ? func = _d3Scale2["default"].scaleOrdinal() : "band" === scale ? func = _d3Scale2["default"].scaleBand() : "time" === scale ? func = _d3Scale2["default"].scaleTime() : new Error('Please check your axis scale setting. "' + scale + '" scale is invalid. '), func = _mkScaleSettings(props, func)
    }

    function _mkScaleSettings(props, func) {
        var range = (props.type, props.range),
            domain = props.domain,
            scale = props.scale,
            bandPaddingInner = props.bandPaddingInner,
            bandPaddingOuter = props.bandPaddingOuter;
        return range && func.range(range), domain && func.domain(domain), "band" === scale && (func.round(!0), bandPaddingInner ? func.paddingInner(bandPaddingInner) : func.paddingInner(.1), bandPaddingOuter ? func.paddingOuter(bandPaddingOuter) : func.paddingOuter(.1)), func
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.scale = scale;
    var _d3Scale = __webpack_require__(7),
        _d3Scale2 = _interopRequireDefault(_d3Scale)
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports, __webpack_require__(8), __webpack_require__(9), __webpack_require__(10), __webpack_require__(12), __webpack_require__(13), __webpack_require__(14), __webpack_require__(11))
    }(this, function (exports, d3Array, d3Collection, d3Interpolate, d3Format, d3Time, d3TimeFormat, d3Color) {
        "use strict";

        function ordinal() {
            function scale(d) {
                var key = d + "",
                    i = index.get(key);
                if (!i) {
                    if (unknown !== implicit) return unknown;
                    index.set(key, i = domain.push(d))
                }
                return range[(i - 1) % range.length]
            }
            var index = d3Collection.map(),
                domain = [],
                range = [],
                unknown = implicit;
            return scale.domain = function (_) {
                if (!arguments.length) return domain.slice();
                domain = [], index = d3Collection.map();
                for (var d, key, i = -1, n = _.length; ++i < n;) index.has(key = (d = _[i]) + "") || index.set(key, domain.push(d));
                return scale
            }, scale.range = function (_) {
                return arguments.length ? (range = slice.call(_), scale) : range.slice()
            }, scale.unknown = function (_) {
                return arguments.length ? (unknown = _, scale) : unknown
            }, scale.copy = function () {
                return ordinal().domain(domain).range(range).unknown(unknown)
            }, scale
        }

        function band() {
            function rescale() {
                var n = domain().length,
                    reverse = range[1] < range[0],
                    start = range[reverse - 0],
                    stop = range[1 - reverse];
                step = (stop - start) / Math.max(1, n - paddingInner + 2 * paddingOuter), round && (step = Math.floor(step)), start += (stop - start - step * (n - paddingInner)) * align, bandwidth = step * (1 - paddingInner), round && (start = Math.round(start), bandwidth = Math.round(bandwidth));
                var values = d3Array.range(n).map(function (i) {
                    return start + step * i
                });
                return ordinalRange(reverse ? values.reverse() : values)
            }
            var step, bandwidth, scale = ordinal().unknown(void 0),
                domain = scale.domain,
                ordinalRange = scale.range,
                range = [0, 1],
                round = !1,
                paddingInner = 0,
                paddingOuter = 0,
                align = .5;
            return delete scale.unknown, scale.domain = function (_) {
                return arguments.length ? (domain(_), rescale()) : domain()
            }, scale.range = function (_) {
                return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice()
            }, scale.rangeRound = function (_) {
                return range = [+_[0], +_[1]], round = !0, rescale()
            }, scale.bandwidth = function () {
                return bandwidth
            }, scale.step = function () {
                return step
            }, scale.round = function (_) {
                return arguments.length ? (round = !!_, rescale()) : round
            }, scale.padding = function (_) {
                return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner
            }, scale.paddingInner = function (_) {
                return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner
            }, scale.paddingOuter = function (_) {
                return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter
            }, scale.align = function (_) {
                return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align
            }, scale.copy = function () {
                return band().domain(domain()).range(range).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align)
            }, rescale()
        }

        function pointish(scale) {
            var copy = scale.copy;
            return scale.padding = scale.paddingOuter, delete scale.paddingInner, delete scale.paddingOuter, scale.copy = function () {
                return pointish(copy())
            }, scale
        }

        function point() {
            return pointish(band().paddingInner(1))
        }

        function constant(x) {
            return function () {
                return x
            }
        }

        function number(x) {
            return +x
        }

        function deinterpolate(a, b) {
            return (b -= a = +a) ? function (x) {
                return (x - a) / b
            } : constant(b)
        }

        function deinterpolateClamp(deinterpolate) {
            return function (a, b) {
                var d = deinterpolate(a = +a, b = +b);
                return function (x) {
                    return a >= x ? 0 : x >= b ? 1 : d(x)
                }
            }
        }

        function reinterpolateClamp(reinterpolate) {
            return function (a, b) {
                var r = reinterpolate(a = +a, b = +b);
                return function (t) {
                    return 0 >= t ? a : t >= 1 ? b : r(t)
                }
            }
        }

        function bimap(domain, range, deinterpolate, reinterpolate) {
            var d0 = domain[0],
                d1 = domain[1],
                r0 = range[0],
                r1 = range[1];
            return d0 > d1 ? (d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0)) : (d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1)),
                function (x) {
                    return r0(d0(x))
                }
        }

        function polymap(domain, range, deinterpolate, reinterpolate) {
            var j = Math.min(domain.length, range.length) - 1,
                d = new Array(j),
                r = new Array(j),
                i = -1;
            for (domain[j] < domain[0] && (domain = domain.slice().reverse(), range = range.slice().reverse()); ++i < j;) d[i] = deinterpolate(domain[i], domain[i + 1]), r[i] = reinterpolate(range[i], range[i + 1]);
            return function (x) {
                var i = d3Array.bisect(domain, x, 1, j) - 1;
                return r[i](d[i](x))
            }
        }

        function copy(source, target) {
            return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp())
        }

        function continuous(deinterpolate$$, reinterpolate) {
            function rescale() {
                var map = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
                return output = map(domain, range, clamp ? deinterpolateClamp(deinterpolate$$) : deinterpolate$$, interpolate), input = map(range, domain, deinterpolate, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate), scale
            }

            function scale(x) {
                return output(+x)
            }
            var output, input, domain = unit,
                range = unit,
                interpolate = d3Interpolate.interpolate,
                clamp = !1;
            return scale.invert = function (y) {
                return input(+y)
            }, scale.domain = function (_) {
                return arguments.length ? (domain = map$1.call(_, number), rescale()) : domain.slice()
            }, scale.range = function (_) {
                return arguments.length ? (range = slice.call(_), rescale()) : range.slice()
            }, scale.rangeRound = function (_) {
                return range = slice.call(_), interpolate = d3Interpolate.interpolateRound, rescale()
            }, scale.clamp = function (_) {
                return arguments.length ? (clamp = !!_, rescale()) : clamp
            }, scale.interpolate = function (_) {
                return arguments.length ? (interpolate = _, rescale()) : interpolate
            }, rescale()
        }

        function tickFormat(domain, count, specifier) {
            var precision, start = domain[0],
                stop = domain[domain.length - 1],
                step = d3Array.tickStep(start, stop, null == count ? 10 : count);
            switch (specifier = d3Format.formatSpecifier(null == specifier ? ",f" : specifier), specifier.type) {
                case "s":
                    var value = Math.max(Math.abs(start), Math.abs(stop));
                    return null != specifier.precision || isNaN(precision = d3Format.precisionPrefix(step, value)) || (specifier.precision = precision), d3Format.formatPrefix(specifier, value);
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                    null != specifier.precision || isNaN(precision = d3Format.precisionRound(step, Math.max(Math.abs(start), Math.abs(stop)))) || (specifier.precision = precision - ("e" === specifier.type));
                    break;
                case "f":
                case "%":
                    null != specifier.precision || isNaN(precision = d3Format.precisionFixed(step)) || (specifier.precision = precision - 2 * ("%" === specifier.type))
            }
            return d3Format.format(specifier)
        }

        function linearish(scale) {
            var domain = scale.domain;
            return scale.ticks = function (count) {
                var d = domain();
                return d3Array.ticks(d[0], d[d.length - 1], null == count ? 10 : count)
            }, scale.tickFormat = function (count, specifier) {
                return tickFormat(domain(), count, specifier)
            }, scale.nice = function (count) {
                var d = domain(),
                    i = d.length - 1,
                    n = null == count ? 10 : count,
                    start = d[0],
                    stop = d[i],
                    step = d3Array.tickStep(start, stop, n);
                return step && (step = d3Array.tickStep(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n), d[0] = Math.floor(start / step) * step, d[i] = Math.ceil(stop / step) * step, domain(d)), scale
            }, scale
        }

        function linear() {
            var scale = continuous(deinterpolate, d3Interpolate.interpolateNumber);
            return scale.copy = function () {
                return copy(scale, linear())
            }, linearish(scale)
        }

        function identity() {
            function scale(x) {
                return +x
            }
            var domain = [0, 1];
            return scale.invert = scale, scale.domain = scale.range = function (_) {
                return arguments.length ? (domain = map$1.call(_, number), scale) : domain.slice()
            }, scale.copy = function () {
                return identity().domain(domain)
            }, linearish(scale)
        }

        function nice(domain, interval) {
            domain = domain.slice();
            var t, i0 = 0,
                i1 = domain.length - 1,
                x0 = domain[i0],
                x1 = domain[i1];
            return x0 > x1 && (t = i0, i0 = i1, i1 = t, t = x0, x0 = x1, x1 = t), domain[i0] = interval.floor(x0), domain[i1] = interval.ceil(x1), domain
        }

        function deinterpolate$1(a, b) {
            return (b = Math.log(b / a)) ? function (x) {
                return Math.log(x / a) / b
            } : constant(b)
        }

        function reinterpolate(a, b) {
            return 0 > a ? function (t) {
                return -Math.pow(-b, t) * Math.pow(-a, 1 - t)
            } : function (t) {
                return Math.pow(b, t) * Math.pow(a, 1 - t)
            }
        }

        function pow10(x) {
            return isFinite(x) ? +("1e" + x) : 0 > x ? 0 : x
        }

        function powp(base) {
            return 10 === base ? pow10 : base === Math.E ? Math.exp : function (x) {
                return Math.pow(base, x)
            }
        }

        function logp(base) {
            return base === Math.E ? Math.log : 10 === base && Math.log10 || 2 === base && Math.log2 || (base = Math.log(base), function (x) {
                return Math.log(x) / base
            })
        }

        function reflect(f) {
            return function (x) {
                return -f(-x)
            }
        }

        function log() {
            function rescale() {
                return logs = logp(base), pows = powp(base), domain()[0] < 0 && (logs = reflect(logs), pows = reflect(pows)), scale
            }
            var scale = continuous(deinterpolate$1, reinterpolate).domain([1, 10]),
                domain = scale.domain,
                base = 10,
                logs = logp(10),
                pows = powp(10);
            return scale.base = function (_) {
                return arguments.length ? (base = +_, rescale()) : base
            }, scale.domain = function (_) {
                return arguments.length ? (domain(_), rescale()) : domain()
            }, scale.ticks = function (count) {
                var r, d = domain(),
                    u = d[0],
                    v = d[d.length - 1];
                (r = u > v) && (i = u, u = v, v = i);
                var p, k, t, i = logs(u),
                    j = logs(v),
                    n = null == count ? 10 : +count,
                    z = [];
                if (!(base % 1) && n > j - i) {
                    if (i = Math.round(i) - 1, j = Math.round(j) + 1, u > 0) {
                        for (; j > i; ++i)
                            for (k = 1, p = pows(i); base > k; ++k)
                                if (t = p * k, !(u > t)) {
                                    if (t > v) break;
                                    z.push(t)
                                }
                    } else
                        for (; j > i; ++i)
                            for (k = base - 1, p = pows(i); k >= 1; --k)
                                if (t = p * k, !(u > t)) {
                                    if (t > v) break;
                                    z.push(t)
                                }
                    r && z.reverse()
                } else z = d3Array.ticks(i, j, Math.min(j - i, n)).map(pows);
                return z
            }, scale.tickFormat = function (count, specifier) {
                if (null == specifier && (specifier = 10 === base ? ".0e" : ","), "function" != typeof specifier && (specifier = d3Format.format(specifier)), count === 1 / 0) return specifier;
                null == count && (count = 10);
                var k = Math.max(1, base * count / scale.ticks().length);
                return function (d) {
                    var i = d / pows(Math.round(logs(d)));
                    return base - .5 > i * base && (i *= base), k >= i ? specifier(d) : ""
                }
            }, scale.nice = function () {
                return domain(nice(domain(), {
                    floor: function (x) {
                        return pows(Math.floor(logs(x)))
                    },
                    ceil: function (x) {
                        return pows(Math.ceil(logs(x)))
                    }
                }))
            }, scale.copy = function () {
                return copy(scale, log().base(base))
            }, scale
        }

        function raise(x, exponent) {
            return 0 > x ? -Math.pow(-x, exponent) : Math.pow(x, exponent)
        }

        function pow() {
            function deinterpolate(a, b) {
                return (b = raise(b, exponent) - (a = raise(a, exponent))) ? function (x) {
                    return (raise(x, exponent) - a) / b
                } : constant(b)
            }

            function reinterpolate(a, b) {
                return b = raise(b, exponent) - (a = raise(a, exponent)),
                    function (t) {
                        return raise(a + b * t, 1 / exponent)
                    }
            }
            var exponent = 1,
                scale = continuous(deinterpolate, reinterpolate),
                domain = scale.domain;
            return scale.exponent = function (_) {
                return arguments.length ? (exponent = +_, domain(domain())) : exponent
            }, scale.copy = function () {
                return copy(scale, pow().exponent(exponent))
            }, linearish(scale)
        }

        function sqrt() {
            return pow().exponent(.5)
        }

        function quantile$1() {
            function rescale() {
                var i = 0,
                    n = Math.max(1, range.length);
                for (thresholds = new Array(n - 1); ++i < n;) thresholds[i - 1] = d3Array.quantile(domain, i / n);
                return scale
            }

            function scale(x) {
                return isNaN(x = +x) ? void 0 : range[d3Array.bisect(thresholds, x)]
            }
            var domain = [],
                range = [],
                thresholds = [];
            return scale.invertExtent = function (y) {
                var i = range.indexOf(y);
                return 0 > i ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]]
            }, scale.domain = function (_) {
                if (!arguments.length) return domain.slice();
                domain = [];
                for (var d, i = 0, n = _.length; n > i; ++i) d = _[i], null == d || isNaN(d = +d) || domain.push(d);
                return domain.sort(d3Array.ascending), rescale()
            }, scale.range = function (_) {
                return arguments.length ? (range = slice.call(_), rescale()) : range.slice()
            }, scale.quantiles = function () {
                return thresholds.slice()
            }, scale.copy = function () {
                return quantile$1().domain(domain).range(range)
            }, scale
        }

        function quantize() {
            function scale(x) {
                return x >= x ? range[d3Array.bisect(domain, x, 0, n)] : void 0
            }

            function rescale() {
                var i = -1;
                for (domain = new Array(n); ++i < n;) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
                return scale
            }
            var x0 = 0,
                x1 = 1,
                n = 1,
                domain = [.5],
                range = [0, 1];
            return scale.domain = function (_) {
                return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1]
            }, scale.range = function (_) {
                return arguments.length ? (n = (range = slice.call(_)).length - 1, rescale()) : range.slice()
            }, scale.invertExtent = function (y) {
                var i = range.indexOf(y);
                return 0 > i ? [NaN, NaN] : 1 > i ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]]
            }, scale.copy = function () {
                return quantize().domain([x0, x1]).range(range)
            }, linearish(scale)
        }

        function threshold() {
            function scale(x) {
                return x >= x ? range[d3Array.bisect(domain, x, 0, n)] : void 0
            }
            var domain = [.5],
                range = [0, 1],
                n = 1;
            return scale.domain = function (_) {
                return arguments.length ? (domain = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice()
            }, scale.range = function (_) {
                return arguments.length ? (range = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice()
            }, scale.invertExtent = function (y) {
                var i = range.indexOf(y);
                return [domain[i - 1], domain[i]]
            }, scale.copy = function () {
                return threshold().domain(domain).range(range)
            }, scale
        }

        function newDate(t) {
            return new Date(t)
        }

        function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
            function tickFormat(date) {
                return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date)
            }

            function tickInterval(interval, start, stop, step) {
                if (null == interval && (interval = 10), "number" == typeof interval) {
                    var target = Math.abs(stop - start) / interval,
                        i = d3Array.bisector(function (i) {
                            return i[2]
                        }).right(tickIntervals, target);
                    i === tickIntervals.length ? (step = d3Array.tickStep(start / durationYear, stop / durationYear, interval), interval = year) : i ? (i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i], step = i[1], interval = i[0]) : (step = d3Array.tickStep(start, stop, interval), interval = millisecond)
                }
                return null == step ? interval : interval.every(step)
            }
            var scale = continuous(deinterpolate, d3Interpolate.interpolateNumber),
                invert = scale.invert,
                domain = scale.domain,
                formatMillisecond = format(".%L"),
                formatSecond = format(":%S"),
                formatMinute = format("%I:%M"),
                formatHour = format("%I %p"),
                formatDay = format("%a %d"),
                formatWeek = format("%b %d"),
                formatMonth = format("%B"),
                formatYear = format("%Y"),
                tickIntervals = [
                    [second, 1, durationSecond],
                    [second, 5, 5 * durationSecond],
                    [second, 15, 15 * durationSecond],
                    [second, 30, 30 * durationSecond],
                    [minute, 1, durationMinute],
                    [minute, 5, 5 * durationMinute],
                    [minute, 15, 15 * durationMinute],
                    [minute, 30, 30 * durationMinute],
                    [hour, 1, durationHour],
                    [hour, 3, 3 * durationHour],
                    [hour, 6, 6 * durationHour],
                    [hour, 12, 12 * durationHour],
                    [day, 1, durationDay],
                    [day, 2, 2 * durationDay],
                    [week, 1, durationWeek],
                    [month, 1, durationMonth],
                    [month, 3, 3 * durationMonth],
                    [year, 1, durationYear]
                ];
            return scale.invert = function (y) {
                return new Date(invert(y))
            }, scale.domain = function (_) {
                return arguments.length ? domain(_) : domain().map(newDate)
            }, scale.ticks = function (interval, step) {
                var t, d = domain(),
                    t0 = d[0],
                    t1 = d[d.length - 1],
                    r = t0 > t1;
                return r && (t = t0, t0 = t1, t1 = t), t = tickInterval(interval, t0, t1, step), t = t ? t.range(t0, t1 + 1) : [], r ? t.reverse() : t
            }, scale.tickFormat = function (specifier) {
                return null == specifier ? tickFormat : format(specifier)
            }, scale.nice = function (interval, step) {
                var d = domain();
                return (interval = tickInterval(interval, d[0], d[d.length - 1], step)) ? domain(nice(d, interval)) : scale
            }, scale.copy = function () {
                return copy(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format))
            }, scale
        }

        function time() {
            return calendar(d3Time.timeYear, d3Time.timeMonth, d3Time.timeWeek, d3Time.timeDay, d3Time.timeHour, d3Time.timeMinute, d3Time.timeSecond, d3Time.timeMillisecond, d3TimeFormat.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
        }

        function utcTime() {
            return calendar(d3Time.utcYear, d3Time.utcMonth, d3Time.utcWeek, d3Time.utcDay, d3Time.utcHour, d3Time.utcMinute, d3Time.utcSecond, d3Time.utcMillisecond, d3TimeFormat.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
        }

        function colors(s) {
            return s.match(/.{6}/g).map(function (x) {
                return "#" + x
            })
        }

        function category10() {
            return ordinal().range(colors10)
        }

        function category20b() {
            return ordinal().range(colors20b)
        }

        function category20c() {
            return ordinal().range(colors20c)
        }

        function category20() {
            return ordinal().range(colors20)
        }

        function cubehelix$1() {
            return linear().interpolate(d3Interpolate.interpolateCubehelixLong).range([d3Color.cubehelix(300, .5, 0), d3Color.cubehelix(-240, .5, 1)])
        }

        function sequential(interpolate) {
            function scale(x) {
                var t = (x - x0) / (x1 - x0);
                return interpolate(clamp ? Math.max(0, Math.min(1, t)) : t)
            }
            var x0 = 0,
                x1 = 1,
                clamp = !1;
            return scale.domain = function (_) {
                return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1]
            }, scale.clamp = function (_) {
                return arguments.length ? (clamp = !!_, scale) : clamp
            }, scale.copy = function () {
                return sequential(interpolate).domain([x0, x1]).clamp(clamp)
            }, linearish(scale)
        }

        function warm() {
            return sequential(d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(-100, .75, .35), d3Color.cubehelix(80, 1.5, .8)))
        }

        function cool() {
            return sequential(d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(260, .75, .35), d3Color.cubehelix(80, 1.5, .8)))
        }

        function rainbow() {
            var rainbow = d3Color.cubehelix();
            return sequential(function (t) {
                (0 > t || t > 1) && (t -= Math.floor(t));
                var ts = Math.abs(t - .5);
                return rainbow.h = 360 * t - 100, rainbow.s = 1.5 - 1.5 * ts, rainbow.l = .8 - .9 * ts, rainbow + ""
            })
        }

        function ramp(range) {
            var s = sequential(function (t) {
                return range[Math.round(t * range.length - t)]
            }).clamp(!0);
            return delete s.clamp, s
        }

        function viridis() {
            return ramp(rangeViridis)
        }

        function magma() {
            return ramp(rangeMagma)
        }

        function inferno() {
            return ramp(rangeInferno)
        }

        function plasma() {
            return ramp(rangePlasma)
        }
        var array = Array.prototype,
            map$1 = array.map,
            slice = array.slice,
            implicit = {
                name: "implicit"
            },
            unit = [0, 1],
            durationSecond = 1e3,
            durationMinute = 60 * durationSecond,
            durationHour = 60 * durationMinute,
            durationDay = 24 * durationHour,
            durationWeek = 7 * durationDay,
            durationMonth = 30 * durationDay,
            durationYear = 365 * durationDay,
            colors10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
            colors20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
            colors20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
            colors20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
            rangeViridis = colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"),
            rangeMagma = colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"),
            rangeInferno = colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"),
            rangePlasma = colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"),
            version = "0.6.4";
        exports.version = version, exports.scaleBand = band, exports.scalePoint = point, exports.scaleIdentity = identity, exports.scaleLinear = linear, exports.scaleLog = log, exports.scaleOrdinal = ordinal, exports.scaleImplicit = implicit, exports.scalePow = pow, exports.scaleSqrt = sqrt, exports.scaleQuantile = quantile$1, exports.scaleQuantize = quantize, exports.scaleThreshold = threshold, exports.scaleTime = time, exports.scaleUtc = utcTime, exports.scaleCategory10 = category10, exports.scaleCategory20b = category20b, exports.scaleCategory20c = category20c, exports.scaleCategory20 = category20, exports.scaleCubehelix = cubehelix$1, exports.scaleRainbow = rainbow, exports.scaleWarm = warm, exports.scaleCool = cool, exports.scaleViridis = viridis, exports.scaleMagma = magma, exports.scaleInferno = inferno, exports.scalePlasma = plasma
    })
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports)
    }(this, function (exports) {
        "use strict";

        function ascending(a, b) {
            return b > a ? -1 : a > b ? 1 : a >= b ? 0 : NaN
        }

        function bisector(compare) {
            return 1 === compare.length && (compare = ascendingComparator(compare)), {
                left: function (a, x, lo, hi) {
                    for (null == lo && (lo = 0), null == hi && (hi = a.length); hi > lo;) {
                        var mid = lo + hi >>> 1;
                        compare(a[mid], x) < 0 ? lo = mid + 1 : hi = mid
                    }
                    return lo
                },
                right: function (a, x, lo, hi) {
                    for (null == lo && (lo = 0), null == hi && (hi = a.length); hi > lo;) {
                        var mid = lo + hi >>> 1;
                        compare(a[mid], x) > 0 ? hi = mid : lo = mid + 1
                    }
                    return lo
                }
            }
        }

        function ascendingComparator(f) {
            return function (d, x) {
                return ascending(f(d), x)
            }
        }

        function descending(a, b) {
            return a > b ? -1 : b > a ? 1 : b >= a ? 0 : NaN
        }

        function number$1(x) {
            return null === x ? NaN : +x
        }

        function variance(array, f) {
            var a, d, n = array.length,
                m = 0,
                s = 0,
                i = -1,
                j = 0;
            if (null == f)
                for (; ++i < n;) isNaN(a = number$1(array[i])) || (d = a - m, m += d / ++j, s += d * (a - m));
            else
                for (; ++i < n;) isNaN(a = number$1(f(array[i], i, array))) || (d = a - m, m += d / ++j, s += d * (a - m));
            return j > 1 ? s / (j - 1) : void 0
        }

        function deviation(array, f) {
            var v = variance(array, f);
            return v ? Math.sqrt(v) : v
        }

        function extent(array, f) {
            var a, b, c, i = -1,
                n = array.length;
            if (null == f) {
                for (; ++i < n;)
                    if (null != (b = array[i]) && b >= b) {
                        a = c = b;
                        break
                    }
                for (; ++i < n;) null != (b = array[i]) && (a > b && (a = b), b > c && (c = b))
            } else {
                for (; ++i < n;)
                    if (null != (b = f(array[i], i, array)) && b >= b) {
                        a = c = b;
                        break
                    }
                for (; ++i < n;) null != (b = f(array[i], i, array)) && (a > b && (a = b), b > c && (c = b))
            }
            return [a, c]
        }

        function constant(x) {
            return function () {
                return x
            }
        }

        function identity(x) {
            return x
        }

        function range(start, stop, step) {
            start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : 3 > n ? 1 : +step;
            for (var i = -1, n = 0 | Math.max(0, Math.ceil((stop - start) / step)), range = new Array(n); ++i < n;) range[i] = start + i * step;
            return range
        }

        function ticks(start, stop, count) {
            var step = tickStep(start, stop, count);
            return range(Math.ceil(start / step) * step, Math.floor(stop / step) * step + step / 2, step)
        }

        function tickStep(start, stop, count) {
            var step0 = Math.abs(stop - start) / Math.max(0, count),
                step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
                error = step0 / step1;
            return error >= e10 ? step1 *= 10 : error >= e5 ? step1 *= 5 : error >= e2 && (step1 *= 2), start > stop ? -step1 : step1
        }

        function sturges(values) {
            return Math.ceil(Math.log(values.length) / Math.LN2) + 1
        }

        function number(x) {
            return +x
        }

        function histogram() {
            function histogram(data) {
                var i, x, n = data.length,
                    values = new Array(n);
                for (i = 0; n > i; ++i) values[i] = +value(data[i], i, data);
                var xz = domain(values),
                    x0 = +xz[0],
                    x1 = +xz[1],
                    tz = threshold(values, x0, x1);
                Array.isArray(tz) || (tz = ticks(x0, x1, +tz));
                var m = tz.length;
                for (i = 0; m > i; ++i) tz[i] = +tz[i];
                for (; tz[0] <= x0;) tz.shift(), --m;
                for (; tz[m - 1] >= x1;) tz.pop(), --m;
                var bin, bins = new Array(m + 1);
                for (i = 0; m >= i; ++i) bin = bins[i] = [], bin.x0 = i > 0 ? tz[i - 1] : x0, bin.x1 = m > i ? tz[i] : x1;
                for (i = 0; n > i; ++i) x = values[i], x >= x0 && x1 >= x && bins[bisectRight(tz, x, 0, m)].push(data[i]);
                return bins
            }
            var value = identity,
                domain = extent,
                threshold = sturges;
            return histogram.value = function (_) {
                return arguments.length ? (value = "function" == typeof _ ? _ : constant(+_), histogram) : value
            }, histogram.domain = function (_) {
                return arguments.length ? (domain = "function" == typeof _ ? _ : constant([+_[0], +_[1]]), histogram) : domain
            }, histogram.thresholds = function (_) {
                return arguments.length ? (threshold = "function" == typeof _ ? _ : constant(Array.isArray(_) ? Array.prototype.map.call(_, number) : +_), histogram) : threshold
            }, histogram
        }

        function quantile(array, p, f) {
            if (null == f && (f = number$1), n = array.length) {
                if ((p = +p) <= 0 || 2 > n) return +f(array[0], 0, array);
                if (p >= 1) return +f(array[n - 1], n - 1, array);
                var n, h = (n - 1) * p,
                    i = Math.floor(h),
                    a = +f(array[i], i, array),
                    b = +f(array[i + 1], i + 1, array);
                return a + (b - a) * (h - i)
            }
        }

        function freedmanDiaconis(values, min, max) {
            return values.sort(ascending), Math.ceil((max - min) / (2 * (quantile(values, .75) - quantile(values, .25)) * Math.pow(values.length, -1 / 3)))
        }

        function scott(values, min, max) {
            return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)))
        }

        function max(array, f) {
            var a, b, i = -1,
                n = array.length;
            if (null == f) {
                for (; ++i < n;)
                    if (null != (b = array[i]) && b >= b) {
                        a = b;
                        break
                    }
                for (; ++i < n;) null != (b = array[i]) && b > a && (a = b)
            } else {
                for (; ++i < n;)
                    if (null != (b = f(array[i], i, array)) && b >= b) {
                        a = b;
                        break
                    }
                for (; ++i < n;) null != (b = f(array[i], i, array)) && b > a && (a = b)
            }
            return a
        }

        function mean(array, f) {
            var a, s = 0,
                n = array.length,
                i = -1,
                j = n;
            if (null == f)
                for (; ++i < n;) isNaN(a = number$1(array[i])) ? --j : s += a;
            else
                for (; ++i < n;) isNaN(a = number$1(f(array[i], i, array))) ? --j : s += a;
            return j ? s / j : void 0
        }

        function median(array, f) {
            var a, numbers = [],
                n = array.length,
                i = -1;
            if (null == f)
                for (; ++i < n;) isNaN(a = number$1(array[i])) || numbers.push(a);
            else
                for (; ++i < n;) isNaN(a = number$1(f(array[i], i, array))) || numbers.push(a);
            return quantile(numbers.sort(ascending), .5)
        }

        function merge(arrays) {
            for (var m, merged, array, n = arrays.length, i = -1, j = 0; ++i < n;) j += arrays[i].length;
            for (merged = new Array(j); --n >= 0;)
                for (array = arrays[n], m = array.length; --m >= 0;) merged[--j] = array[m];
            return merged
        }

        function min(array, f) {
            var a, b, i = -1,
                n = array.length;
            if (null == f) {
                for (; ++i < n;)
                    if (null != (b = array[i]) && b >= b) {
                        a = b;
                        break
                    }
                for (; ++i < n;) null != (b = array[i]) && a > b && (a = b)
            } else {
                for (; ++i < n;)
                    if (null != (b = f(array[i], i, array)) && b >= b) {
                        a = b;
                        break
                    }
                for (; ++i < n;) null != (b = f(array[i], i, array)) && a > b && (a = b)
            }
            return a
        }

        function pairs(array) {
            for (var i = 0, n = array.length - 1, p = array[0], pairs = new Array(0 > n ? 0 : n); n > i;) pairs[i] = [p, p = array[++i]];
            return pairs
        }

        function permute(array, indexes) {
            for (var i = indexes.length, permutes = new Array(i); i--;) permutes[i] = array[indexes[i]];
            return permutes
        }

        function scan(array, compare) {
            if (n = array.length) {
                var n, xi, i = 0,
                    j = 0,
                    xj = array[j];
                for (compare || (compare = ascending); ++i < n;)(compare(xi = array[i], xj) < 0 || 0 !== compare(xj, xj)) && (xj = xi, j = i);
                return 0 === compare(xj, xj) ? j : void 0
            }
        }

        function shuffle(array, i0, i1) {
            for (var t, i, m = (null == i1 ? array.length : i1) - (i0 = null == i0 ? 0 : +i0); m;) i = Math.random() * m-- | 0, t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
            return array
        }

        function sum(array, f) {
            var a, s = 0,
                n = array.length,
                i = -1;
            if (null == f)
                for (; ++i < n;)(a = +array[i]) && (s += a);
            else
                for (; ++i < n;)(a = +f(array[i], i, array)) && (s += a);
            return s
        }

        function transpose(matrix) {
            if (!(n = matrix.length)) return [];
            for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;)
                for (var n, j = -1, row = transpose[i] = new Array(n); ++j < n;) row[j] = matrix[j][i];
            return transpose
        }

        function length(d) {
            return d.length
        }

        function zip() {
            return transpose(arguments)
        }
        var ascendingBisect = bisector(ascending),
            bisectRight = ascendingBisect.right,
            bisectLeft = ascendingBisect.left,
            e10 = Math.sqrt(50),
            e5 = Math.sqrt(10),
            e2 = Math.sqrt(2),
            version = "0.7.1";
        exports.version = version, exports.bisect = bisectRight, exports.bisectRight = bisectRight, exports.bisectLeft = bisectLeft, exports.ascending = ascending, exports.bisector = bisector, exports.descending = descending, exports.deviation = deviation, exports.extent = extent, exports.histogram = histogram, exports.thresholdFreedmanDiaconis = freedmanDiaconis, exports.thresholdScott = scott, exports.thresholdSturges = sturges, exports.max = max, exports.mean = mean, exports.median = median, exports.merge = merge, exports.min = min, exports.pairs = pairs, exports.permute = permute, exports.quantile = quantile, exports.range = range, exports.scan = scan, exports.shuffle = shuffle, exports.sum = sum, exports.ticks = ticks, exports.tickStep = tickStep, exports.transpose = transpose, exports.variance = variance, exports.zip = zip
    })
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports)
    }(this, function (exports) {
        "use strict";

        function Map() {}

        function map(object, f) {
            var map = new Map;
            if (object instanceof Map) object.each(function (value, key) {
                map.set(key, value)
            });
            else if (Array.isArray(object)) {
                var o, i = -1,
                    n = object.length;
                if (null == f)
                    for (; ++i < n;) map.set(i, object[i]);
                else
                    for (; ++i < n;) map.set(f(o = object[i], i, object), o)
            } else if (object)
                for (var key in object) map.set(key, object[key]);
            return map
        }

        function nest() {
            function apply(array, depth, createResult, setResult) {
                if (depth >= keys.length) return rollup ? rollup(array) : sortValues ? array.sort(sortValues) : array;
                for (var keyValue, value, values, i = -1, n = array.length, key = keys[depth++], valuesByKey = map(), result = createResult(); ++i < n;)(values = valuesByKey.get(keyValue = key(value = array[i]) + "")) ? values.push(value) : valuesByKey.set(keyValue, [value]);
                return valuesByKey.each(function (values, key) {
                    setResult(result, key, apply(values, depth, createResult, setResult))
                }), result
            }

            function entries(map, depth) {
                if (depth >= keys.length) return map;
                var array = [],
                    sortKey = sortKeys[depth++];
                return map.each(function (value, key) {
                    array.push({
                        key: key,
                        values: entries(value, depth)
                    })
                }), sortKey ? array.sort(function (a, b) {
                    return sortKey(a.key, b.key)
                }) : array
            }
            var sortValues, rollup, nest, keys = [],
                sortKeys = [];
            return nest = {
                object: function (array) {
                    return apply(array, 0, createObject, setObject)
                },
                map: function (array) {
                    return apply(array, 0, createMap, setMap)
                },
                entries: function (array) {
                    return entries(apply(array, 0, createMap, setMap), 0)
                },
                key: function (d) {
                    return keys.push(d), nest
                },
                sortKeys: function (order) {
                    return sortKeys[keys.length - 1] = order, nest
                },
                sortValues: function (order) {
                    return sortValues = order, nest
                },
                rollup: function (f) {
                    return rollup = f, nest
                }
            }
        }

        function createObject() {
            return {}
        }

        function setObject(object, key, value) {
            object[key] = value
        }

        function createMap() {
            return map()
        }

        function setMap(map, key, value) {
            map.set(key, value)
        }

        function Set() {}

        function set(object, f) {
            var set = new Set;
            if (object instanceof Set) object.each(function (value) {
                set.add(value)
            });
            else if (object) {
                var i = -1,
                    n = object.length;
                if (null == f)
                    for (; ++i < n;) set.add(object[i]);
                else
                    for (; ++i < n;) set.add(f(object[i], i, object))
            }
            return set
        }

        function keys(map) {
            var keys = [];
            for (var key in map) keys.push(key);
            return keys
        }

        function values(map) {
            var values = [];
            for (var key in map) values.push(map[key]);
            return values
        }

        function entries(map) {
            var entries = [];
            for (var key in map) entries.push({
                key: key,
                value: map[key]
            });
            return entries
        }
        var prefix = "$";
        Map.prototype = map.prototype = {
            constructor: Map,
            has: function (key) {
                return prefix + key in this
            },
            get: function (key) {
                return this[prefix + key]
            },
            set: function (key, value) {
                return this[prefix + key] = value, this
            },
            remove: function (key) {
                var property = prefix + key;
                return property in this && delete this[property]
            },
            clear: function () {
                for (var property in this) property[0] === prefix && delete this[property]
            },
            keys: function () {
                var keys = [];
                for (var property in this) property[0] === prefix && keys.push(property.slice(1));
                return keys
            },
            values: function () {
                var values = [];
                for (var property in this) property[0] === prefix && values.push(this[property]);
                return values
            },
            entries: function () {
                var entries = [];
                for (var property in this) property[0] === prefix && entries.push({
                    key: property.slice(1),
                    value: this[property]
                });
                return entries
            },
            size: function () {
                var size = 0;
                for (var property in this) property[0] === prefix && ++size;
                return size
            },
            empty: function () {
                for (var property in this)
                    if (property[0] === prefix) return !1;
                return !0
            },
            each: function (f) {
                for (var property in this) property[0] === prefix && f(this[property], property.slice(1), this)
            }
        };
        var proto = map.prototype;
        Set.prototype = set.prototype = {
            constructor: Set,
            has: proto.has,
            add: function (value) {
                return value += "", this[prefix + value] = value, this
            },
            remove: proto.remove,
            clear: proto.clear,
            values: proto.keys,
            size: proto.size,
            empty: proto.empty,
            each: proto.each
        };
        var version = "0.1.2";
        exports.version = version, exports.nest = nest, exports.set = set, exports.map = map, exports.keys = keys, exports.values = values, exports.entries = entries
    })
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports, __webpack_require__(11))
    }(this, function (exports, d3Color) {
        "use strict";

        function constant(x) {
            return function () {
                return x
            }
        }

        function linear(a, d) {
            return function (t) {
                return a + t * d
            }
        }

        function exponential(a, b, y) {
            return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y,
                function (t) {
                    return Math.pow(a + t * b, y)
                }
        }

        function interpolateHue(a, b) {
            var d = b - a;
            return d ? linear(a, d > 180 || -180 > d ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a)
        }

        function gamma(y) {
            return 1 === (y = +y) ? nogamma : function (a, b) {
                return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a)
            }
        }

        function nogamma(a, b) {
            var d = b - a;
            return d ? linear(a, d) : constant(isNaN(a) ? b : a)
        }

        function array(a, b) {
            var i, x = [],
                c = [],
                na = a ? a.length : 0,
                nb = b ? b.length : 0,
                n0 = Math.min(na, nb);
            for (i = 0; n0 > i; ++i) x.push(value(a[i], b[i]));
            for (; na > i; ++i) c[i] = a[i];
            for (; nb > i; ++i) c[i] = b[i];
            return function (t) {
                for (i = 0; n0 > i; ++i) c[i] = x[i](t);
                return c
            }
        }

        function number(a, b) {
            return a = +a, b -= a,
                function (t) {
                    return a + b * t
                }
        }

        function object(a, b) {
            var k, i = {},
                c = {};
            null !== a && "object" == typeof a || (a = {}), null !== b && "object" == typeof b || (b = {});
            for (k in a) k in b ? i[k] = value(a[k], b[k]) : c[k] = a[k];
            for (k in b) k in a || (c[k] = b[k]);
            return function (t) {
                for (k in i) c[k] = i[k](t);
                return c
            }
        }

        function zero(b) {
            return function () {
                return b
            }
        }

        function one(b) {
            return function (t) {
                return b(t) + ""
            }
        }

        function string(a, b) {
            var am, bm, bs, bi = reA.lastIndex = reB.lastIndex = 0,
                i = -1,
                s = [],
                q = [];
            for (a += "", b += "";
                (am = reA.exec(a)) && (bm = reB.exec(b));)(bs = bm.index) > bi && (bs = b.slice(bi, bs), s[i] ? s[i] += bs : s[++i] = bs), (am = am[0]) === (bm = bm[0]) ? s[i] ? s[i] += bm : s[++i] = bm : (s[++i] = null, q.push({
                i: i,
                x: number(am, bm)
            })), bi = reB.lastIndex;
            return bi < b.length && (bs = b.slice(bi), s[i] ? s[i] += bs : s[++i] = bs), s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
                for (var o, i = 0; b > i; ++i) s[(o = q[i]).i] = o.x(t);
                return s.join("")
            })
        }

        function value(a, b) {
            var c, t = typeof b;
            return null == b || "boolean" === t ? constant(b) : ("number" === t ? number : "string" === t ? (c = d3Color.color(b)) ? (b = c, rgb$1) : string : b instanceof d3Color.color ? rgb$1 : Array.isArray(b) ? array : object)(a, b)
        }

        function round(a, b) {
            return a = +a, b -= a,
                function (t) {
                    return Math.round(a + b * t)
                }
        }

        function decompose(a, b, c, d, e, f) {
            if (a * d === b * c) return null;
            var scaleX = Math.sqrt(a * a + b * b);
            a /= scaleX, b /= scaleX;
            var skewX = a * c + b * d;
            c -= a * skewX, d -= b * skewX;
            var scaleY = Math.sqrt(c * c + d * d);
            return c /= scaleY, d /= scaleY, skewX /= scaleY, b * c > a * d && (a = -a, b = -b, skewX = -skewX, scaleX = -scaleX), {
                translateX: e,
                translateY: f,
                rotate: Math.atan2(b, a) * rad2deg,
                skewX: Math.atan(skewX) * rad2deg,
                scaleX: scaleX,
                scaleY: scaleY
            }
        }

        function parseCss(value) {
            if ("none" === value) return identity;
            cssNode || (cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView), cssNode.style.transform = value, value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform"), cssRoot.removeChild(cssNode);
            var m = value.slice(7, -1).split(",");
            return decompose(+m[0], +m[1], +m[2], +m[3], +m[4], +m[5])
        }

        function parseSvg(value) {
            svgNode || (svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g")), svgNode.setAttribute("transform", null == value ? "" : value);
            var m = svgNode.transform.baseVal.consolidate().matrix;
            return decompose(m.a, m.b, m.c, m.d, m.e, m.f)
        }

        function interpolateTransform(parse, pxComma, pxParen, degParen) {
            function pop(s) {
                return s.length ? s.pop() + " " : ""
            }

            function translate(xa, ya, xb, yb, s, q) {
                if (xa !== xb || ya !== yb) {
                    var i = s.push("translate(", null, pxComma, null, pxParen);
                    q.push({
                        i: i - 4,
                        x: number(xa, xb)
                    }, {
                        i: i - 2,
                        x: number(ya, yb)
                    })
                } else(xb || yb) && s.push("translate(" + xb + pxComma + yb + pxParen)
            }

            function rotate(a, b, s, q) {
                a !== b ? (a - b > 180 ? b += 360 : b - a > 180 && (a += 360), q.push({
                    i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                    x: number(a, b)
                })) : b && s.push(pop(s) + "rotate(" + b + degParen)
            }

            function skewX(a, b, s, q) {
                a !== b ? q.push({
                    i: s.push(pop(s) + "skewX(", null, degParen) - 2,
                    x: number(a, b)
                }) : b && s.push(pop(s) + "skewX(" + b + degParen)
            }

            function scale(xa, ya, xb, yb, s, q) {
                if (xa !== xb || ya !== yb) {
                    var i = s.push(pop(s) + "scale(", null, ",", null, ")");
                    q.push({
                        i: i - 4,
                        x: number(xa, xb)
                    }, {
                        i: i - 2,
                        x: number(ya, yb)
                    })
                } else 1 === xb && 1 === yb || s.push(pop(s) + "scale(" + xb + "," + yb + ")")
            }
            return function (a, b) {
                var s = [],
                    q = [];
                return a = parse(a), b = parse(b), translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q), rotate(a.rotate, b.rotate, s, q), skewX(a.skewX, b.skewX, s, q), scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q), a = b = null,
                    function (t) {
                        for (var o, i = -1, n = q.length; ++i < n;) s[(o = q[i]).i] = o.x(t);
                        return s.join("")
                    }
            }
        }

        function cosh(x) {
            return ((x = Math.exp(x)) + 1 / x) / 2
        }

        function sinh(x) {
            return ((x = Math.exp(x)) - 1 / x) / 2
        }

        function tanh(x) {
            return ((x = Math.exp(2 * x)) - 1) / (x + 1)
        }

        function zoom(p0, p1) {
            var i, S, ux0 = p0[0],
                uy0 = p0[1],
                w0 = p0[2],
                ux1 = p1[0],
                uy1 = p1[1],
                w1 = p1[2],
                dx = ux1 - ux0,
                dy = uy1 - uy0,
                d2 = dx * dx + dy * dy;
            if (epsilon2 > d2) S = Math.log(w1 / w0) / rho, i = function (t) {
                return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)]
            };
            else {
                var d1 = Math.sqrt(d2),
                    b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
                    b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
                    r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
                    r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
                S = (r1 - r0) / rho, i = function (t) {
                    var s = t * S,
                        coshr0 = cosh(r0),
                        u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                    return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)]
                }
            }
            return i.duration = 1e3 * S, i
        }

        function interpolateHsl(start, end) {
            var h = interpolateHue((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h),
                s = nogamma(start.s, end.s),
                l = nogamma(start.l, end.l),
                opacity = nogamma(start.opacity, end.opacity);
            return function (t) {
                return start.h = h(t), start.s = s(t), start.l = l(t), start.opacity = opacity(t), start + ""
            }
        }

        function interpolateHslLong(start, end) {
            var h = nogamma((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h),
                s = nogamma(start.s, end.s),
                l = nogamma(start.l, end.l),
                opacity = nogamma(start.opacity, end.opacity);
            return function (t) {
                return start.h = h(t), start.s = s(t), start.l = l(t), start.opacity = opacity(t), start + ""
            }
        }

        function interpolateLab(start, end) {
            var l = nogamma((start = d3Color.lab(start)).l, (end = d3Color.lab(end)).l),
                a = nogamma(start.a, end.a),
                b = nogamma(start.b, end.b),
                opacity = nogamma(start.opacity, end.opacity);
            return function (t) {
                return start.l = l(t), start.a = a(t), start.b = b(t), start.opacity = opacity(t), start + ""
            }
        }

        function interpolateHcl(start, end) {
            var h = interpolateHue((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h),
                c = nogamma(start.c, end.c),
                l = nogamma(start.l, end.l),
                opacity = nogamma(start.opacity, end.opacity);
            return function (t) {
                return start.h = h(t), start.c = c(t), start.l = l(t), start.opacity = opacity(t), start + ""
            }
        }

        function interpolateHclLong(start, end) {
            var h = nogamma((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h),
                c = nogamma(start.c, end.c),
                l = nogamma(start.l, end.l),
                opacity = nogamma(start.opacity, end.opacity);
            return function (t) {
                return start.h = h(t), start.c = c(t), start.l = l(t), start.opacity = opacity(t), start + ""
            }
        }
        var cssNode, cssRoot, cssView, svgNode, rgb$1 = function gamma$$(y) {
                function interpolateRgb(start, end) {
                    var r = interpolateColor((start = d3Color.rgb(start)).r, (end = d3Color.rgb(end)).r),
                        g = interpolateColor(start.g, end.g),
                        b = interpolateColor(start.b, end.b),
                        opacity = interpolateColor(start.opacity, end.opacity);
                    return function (t) {
                        return start.r = r(t), start.g = g(t), start.b = b(t), start.opacity = opacity(t), start + ""
                    }
                }
                var interpolateColor = gamma(y);
                return interpolateRgb.gamma = gamma$$, interpolateRgb
            }(1),
            reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            reB = new RegExp(reA.source, "g"),
            rad2deg = 180 / Math.PI,
            identity = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            },
            interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)"),
            interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")"),
            rho = Math.SQRT2,
            rho2 = 2,
            rho4 = 4,
            epsilon2 = 1e-12,
            cubehelix$1 = function gamma(y) {
                function interpolateCubehelix(start, end) {
                    var h = interpolateHue((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h),
                        s = nogamma(start.s, end.s),
                        l = nogamma(start.l, end.l),
                        opacity = nogamma(start.opacity, end.opacity);
                    return function (t) {
                        return start.h = h(t), start.s = s(t), start.l = l(Math.pow(t, y)), start.opacity = opacity(t), start + ""
                    }
                }
                return y = +y, interpolateCubehelix.gamma = gamma, interpolateCubehelix
            }(1),
            cubehelixLong = function gamma(y) {
                function interpolateCubehelixLong(start, end) {
                    var h = nogamma((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h),
                        s = nogamma(start.s, end.s),
                        l = nogamma(start.l, end.l),
                        opacity = nogamma(start.opacity, end.opacity);
                    return function (t) {
                        return start.h = h(t), start.s = s(t), start.l = l(Math.pow(t, y)), start.opacity = opacity(t), start + ""
                    }
                }
                return y = +y, interpolateCubehelixLong.gamma = gamma, interpolateCubehelixLong
            }(1),
            version = "0.7.0";
        exports.version = version, exports.interpolate = value, exports.interpolateArray = array, exports.interpolateNumber = number, exports.interpolateObject = object, exports.interpolateRound = round, exports.interpolateString = string, exports.interpolateTransformCss = interpolateTransformCss, exports.interpolateTransformSvg = interpolateTransformSvg, exports.interpolateZoom = zoom, exports.interpolateRgb = rgb$1, exports.interpolateHsl = interpolateHsl, exports.interpolateHslLong = interpolateHslLong, exports.interpolateLab = interpolateLab, exports.interpolateHcl = interpolateHcl, exports.interpolateHclLong = interpolateHclLong, exports.interpolateCubehelix = cubehelix$1, exports.interpolateCubehelixLong = cubehelixLong
    })
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports)
    }(this, function (exports) {
        "use strict";

        function define(constructor, factory, prototype) {
            constructor.prototype = factory.prototype = prototype, prototype.constructor = constructor
        }

        function extend(parent, definition) {
            var prototype = Object.create(parent.prototype);
            for (var key in definition) prototype[key] = definition[key];
            return prototype
        }

        function Color() {}

        function color(format) {
            var m;
            return format = (format + "").trim().toLowerCase(), (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | 240 & m, (15 & m) << 4 | 15 & m, 1)) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(255 * m[1] / 100, 255 * m[2] / 100, 255 * m[3] / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(255 * m[1] / 100, 255 * m[2] / 100, 255 * m[3] / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : "transparent" === format ? new Rgb(NaN, NaN, NaN, 0) : null
        }

        function rgbn(n) {
            return new Rgb(n >> 16 & 255, n >> 8 & 255, 255 & n, 1)
        }

        function rgba(r, g, b, a) {
            return 0 >= a && (r = g = b = NaN), new Rgb(r, g, b, a)
        }

        function rgbConvert(o) {
            return o instanceof Color || (o = color(o)), o ? (o = o.rgb(), new Rgb(o.r, o.g, o.b, o.opacity)) : new Rgb
        }

        function rgb(r, g, b, opacity) {
            return 1 === arguments.length ? rgbConvert(r) : new Rgb(r, g, b, null == opacity ? 1 : opacity)
        }

        function Rgb(r, g, b, opacity) {
            this.r = +r, this.g = +g, this.b = +b, this.opacity = +opacity
        }

        function hsla(h, s, l, a) {
            return 0 >= a ? h = s = l = NaN : 0 >= l || l >= 1 ? h = s = NaN : 0 >= s && (h = NaN), new Hsl(h, s, l, a)
        }

        function hslConvert(o) {
            if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
            if (o instanceof Color || (o = color(o)), !o) return new Hsl;
            if (o instanceof Hsl) return o;
            o = o.rgb();
            var r = o.r / 255,
                g = o.g / 255,
                b = o.b / 255,
                min = Math.min(r, g, b),
                max = Math.max(r, g, b),
                h = NaN,
                s = max - min,
                l = (max + min) / 2;
            return s ? (h = r === max ? (g - b) / s + 6 * (b > g) : g === max ? (b - r) / s + 2 : (r - g) / s + 4, s /= .5 > l ? max + min : 2 - max - min, h *= 60) : s = l > 0 && 1 > l ? 0 : h, new Hsl(h, s, l, o.opacity)
        }

        function hsl(h, s, l, opacity) {
            return 1 === arguments.length ? hslConvert(h) : new Hsl(h, s, l, null == opacity ? 1 : opacity)
        }

        function Hsl(h, s, l, opacity) {
            this.h = +h, this.s = +s, this.l = +l, this.opacity = +opacity
        }

        function hsl2rgb(h, m1, m2) {
            return 255 * (60 > h ? m1 + (m2 - m1) * h / 60 : 180 > h ? m2 : 240 > h ? m1 + (m2 - m1) * (240 - h) / 60 : m1)
        }

        function labConvert(o) {
            if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
            if (o instanceof Hcl) {
                var h = o.h * deg2rad;
                return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity)
            }
            o instanceof Rgb || (o = rgbConvert(o));
            var b = rgb2xyz(o.r),
                a = rgb2xyz(o.g),
                l = rgb2xyz(o.b),
                x = xyz2lab((.4124564 * b + .3575761 * a + .1804375 * l) / Xn),
                y = xyz2lab((.2126729 * b + .7151522 * a + .072175 * l) / Yn),
                z = xyz2lab((.0193339 * b + .119192 * a + .9503041 * l) / Zn);
            return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity)
        }

        function lab(l, a, b, opacity) {
            return 1 === arguments.length ? labConvert(l) : new Lab(l, a, b, null == opacity ? 1 : opacity)
        }

        function Lab(l, a, b, opacity) {
            this.l = +l, this.a = +a, this.b = +b, this.opacity = +opacity
        }

        function xyz2lab(t) {
            return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0
        }

        function lab2xyz(t) {
            return t > t1 ? t * t * t : t2 * (t - t0)
        }

        function xyz2rgb(x) {
            return 255 * (.0031308 >= x ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - .055)
        }

        function rgb2xyz(x) {
            return (x /= 255) <= .04045 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4)
        }

        function hclConvert(o) {
            if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
            o instanceof Lab || (o = labConvert(o));
            var h = Math.atan2(o.b, o.a) * rad2deg;
            return new Hcl(0 > h ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity)
        }

        function hcl(h, c, l, opacity) {
            return 1 === arguments.length ? hclConvert(h) : new Hcl(h, c, l, null == opacity ? 1 : opacity)
        }

        function Hcl(h, c, l, opacity) {
            this.h = +h, this.c = +c, this.l = +l, this.opacity = +opacity
        }

        function cubehelixConvert(o) {
            if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
            o instanceof Rgb || (o = rgbConvert(o));
            var r = o.r / 255,
                g = o.g / 255,
                b = o.b / 255,
                l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
                bl = b - l,
                k = (E * (g - l) - C * bl) / D,
                s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
                h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
            return new Cubehelix(0 > h ? h + 360 : h, s, l, o.opacity)
        }

        function cubehelix(h, s, l, opacity) {
            return 1 === arguments.length ? cubehelixConvert(h) : new Cubehelix(h, s, l, null == opacity ? 1 : opacity)
        }

        function Cubehelix(h, s, l, opacity) {
            this.h = +h, this.s = +s, this.l = +l, this.opacity = +opacity
        }
        var darker = .7,
            brighter = 1 / darker,
            reHex3 = /^#([0-9a-f]{3})$/,
            reHex6 = /^#([0-9a-f]{6})$/,
            reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,
            reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,
            reRgbaInteger = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,
            reRgbaPercent = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,
            reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,
            reHslaPercent = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,
            named = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };
        define(Color, color, {
            displayable: function () {
                return this.rgb().displayable()
            },
            toString: function () {
                return this.rgb() + ""
            }
        }), define(Rgb, rgb, extend(Color, {
            brighter: function (k) {
                return k = null == k ? brighter : Math.pow(brighter, k), new Rgb(this.r * k, this.g * k, this.b * k, this.opacity)
            },
            darker: function (k) {
                return k = null == k ? darker : Math.pow(darker, k), new Rgb(this.r * k, this.g * k, this.b * k, this.opacity)
            },
            rgb: function () {
                return this
            },
            displayable: function () {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            toString: function () {
                var a = this.opacity;
                return a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a)), (1 === a ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === a ? ")" : ", " + a + ")")
            }
        })), define(Hsl, hsl, extend(Color, {
            brighter: function (k) {
                return k = null == k ? brighter : Math.pow(brighter, k), new Hsl(this.h, this.s, this.l * k, this.opacity)
            },
            darker: function (k) {
                return k = null == k ? darker : Math.pow(darker, k), new Hsl(this.h, this.s, this.l * k, this.opacity)
            },
            rgb: function () {
                var h = this.h % 360 + 360 * (this.h < 0),
                    s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
                    l = this.l,
                    m2 = l + (.5 > l ? l : 1 - l) * s,
                    m1 = 2 * l - m2;
                return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(120 > h ? h + 240 : h - 120, m1, m2), this.opacity)
            },
            displayable: function () {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var deg2rad = Math.PI / 180,
            rad2deg = 180 / Math.PI,
            Kn = 18,
            Xn = .95047,
            Yn = 1,
            Zn = 1.08883,
            t0 = 4 / 29,
            t1 = 6 / 29,
            t2 = 3 * t1 * t1,
            t3 = t1 * t1 * t1;
        define(Lab, lab, extend(Color, {
            brighter: function (k) {
                return new Lab(this.l + Kn * (null == k ? 1 : k), this.a, this.b, this.opacity)
            },
            darker: function (k) {
                return new Lab(this.l - Kn * (null == k ? 1 : k), this.a, this.b, this.opacity)
            },
            rgb: function () {
                var y = (this.l + 16) / 116,
                    x = isNaN(this.a) ? y : y + this.a / 500,
                    z = isNaN(this.b) ? y : y - this.b / 200;
                return y = Yn * lab2xyz(y), x = Xn * lab2xyz(x), z = Zn * lab2xyz(z), new Rgb(xyz2rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), xyz2rgb(-.969266 * x + 1.8760108 * y + .041556 * z), xyz2rgb(.0556434 * x - .2040259 * y + 1.0572252 * z), this.opacity)
            }
        })), define(Hcl, hcl, extend(Color, {
            brighter: function (k) {
                return new Hcl(this.h, this.c, this.l + Kn * (null == k ? 1 : k), this.opacity)
            },
            darker: function (k) {
                return new Hcl(this.h, this.c, this.l - Kn * (null == k ? 1 : k), this.opacity)
            },
            rgb: function () {
                return labConvert(this).rgb()
            }
        }));
        var A = -.14861,
            B = 1.78277,
            C = -.29227,
            D = -.90649,
            E = 1.97294,
            ED = E * D,
            EB = E * B,
            BC_DA = B * C - D * A;
        define(Cubehelix, cubehelix, extend(Color, {
            brighter: function (k) {
                return k = null == k ? brighter : Math.pow(brighter, k), new Cubehelix(this.h, this.s, this.l * k, this.opacity)
            },
            darker: function (k) {
                return k = null == k ? darker : Math.pow(darker, k), new Cubehelix(this.h, this.s, this.l * k, this.opacity)
            },
            rgb: function () {
                var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
                    l = +this.l,
                    a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
                    cosh = Math.cos(h),
                    sinh = Math.sin(h);
                return new Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity)
            }
        }));
        var version = "0.4.2";
        exports.version = version, exports.color = color, exports.rgb = rgb, exports.hsl = hsl, exports.lab = lab, exports.hcl = hcl, exports.cubehelix = cubehelix
    })
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports)
    }(this, function (exports) {
        "use strict";

        function formatDecimal(x, p) {
            if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null;
            var i, coefficient = x.slice(0, i);
            return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)]
        }

        function exponent(x) {
            return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN
        }

        function formatGroup(grouping, thousands) {
            return function (value, width) {
                for (var i = value.length, t = [], j = 0, g = grouping[0], length = 0; i > 0 && g > 0 && (length + g + 1 > width && (g = Math.max(1, width - length)), t.push(value.substring(i -= g, i + g)), !((length += g + 1) > width));) g = grouping[j = (j + 1) % grouping.length];
                return t.reverse().join(thousands)
            }
        }

        function formatDefault(x, p) {
            x = x.toPrecision(p);
            out: for (var i1, n = x.length, i = 1, i0 = -1; n > i; ++i) switch (x[i]) {
                case ".":
                    i0 = i1 = i;
                    break;
                case "0":
                    0 === i0 && (i0 = i), i1 = i;
                    break;
                case "e":
                    break out;
                default:
                    i0 > 0 && (i0 = 0)
            }
            return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x
        }

        function formatPrefixAuto(x, p) {
            var d = formatDecimal(x, p);
            if (!d) return x + "";
            var coefficient = d[0],
                exponent = d[1],
                i = exponent - (prefixExponent = 3 * Math.max(-8, Math.min(8, Math.floor(exponent / 3)))) + 1,
                n = coefficient.length;
            return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]
        }

        function formatRounded(x, p) {
            var d = formatDecimal(x, p);
            if (!d) return x + "";
            var coefficient = d[0],
                exponent = d[1];
            return 0 > exponent ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0")
        }

        function formatSpecifier(specifier) {
            return new FormatSpecifier(specifier)
        }

        function FormatSpecifier(specifier) {
            if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
            var match, fill = match[1] || " ",
                align = match[2] || ">",
                sign = match[3] || "-",
                symbol = match[4] || "",
                zero = !!match[5],
                width = match[6] && +match[6],
                comma = !!match[7],
                precision = match[8] && +match[8].slice(1),
                type = match[9] || "";
            "n" === type ? (comma = !0, type = "g") : formatTypes[type] || (type = ""), (zero || "0" === fill && "=" === align) && (zero = !0, fill = "0", align = "="), this.fill = fill, this.align = align, this.sign = sign, this.symbol = symbol, this.zero = zero, this.width = width, this.comma = comma, this.precision = precision, this.type = type
        }

        function identity(x) {
            return x
        }

        function locale(locale) {
            function newFormat(specifier) {
                function format(value) {
                    var i, n, c, valuePrefix = prefix,
                        valueSuffix = suffix;
                    if ("c" === type) valueSuffix = formatType(value) + valueSuffix, value = "";
                    else {
                        value = +value;
                        var valueNegative = (0 > value || 0 > 1 / value) && (value *= -1, !0);
                        if (value = formatType(value, precision), valueNegative)
                            for (i = -1, n = value.length, valueNegative = !1; ++i < n;)
                                if (c = value.charCodeAt(i), c > 48 && 58 > c || "x" === type && c > 96 && 103 > c || "X" === type && c > 64 && 71 > c) {
                                    valueNegative = !0;
                                    break
                                }
                        if (valuePrefix = (valueNegative ? "(" === sign ? sign : "-" : "-" === sign || "(" === sign ? "" : sign) + valuePrefix, valueSuffix = valueSuffix + ("s" === type ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && "(" === sign ? ")" : ""), maybeSuffix)
                            for (i = -1, n = value.length; ++i < n;)
                                if (c = value.charCodeAt(i), 48 > c || c > 57) {
                                    valueSuffix = (46 === c ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix, value = value.slice(0, i);
                                    break
                                }
                    }
                    comma && !zero && (value = group(value, 1 / 0));
                    var length = valuePrefix.length + value.length + valueSuffix.length,
                        padding = width > length ? new Array(width - length + 1).join(fill) : "";
                    switch (comma && zero && (value = group(padding + value, padding.length ? width - valueSuffix.length : 1 / 0), padding = ""), align) {
                        case "<":
                            return valuePrefix + value + valueSuffix + padding;
                        case "=":
                            return valuePrefix + padding + value + valueSuffix;
                        case "^":
                            return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length)
                    }
                    return padding + valuePrefix + value + valueSuffix
                }
                specifier = formatSpecifier(specifier);
                var fill = specifier.fill,
                    align = specifier.align,
                    sign = specifier.sign,
                    symbol = specifier.symbol,
                    zero = specifier.zero,
                    width = specifier.width,
                    comma = specifier.comma,
                    precision = specifier.precision,
                    type = specifier.type,
                    prefix = "$" === symbol ? currency[0] : "#" === symbol && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
                    suffix = "$" === symbol ? currency[1] : /[%p]/.test(type) ? "%" : "",
                    formatType = formatTypes[type],
                    maybeSuffix = !type || /[defgprs%]/.test(type);
                return precision = null == precision ? type ? 6 : 12 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision)), format.toString = function () {
                    return specifier + ""
                }, format
            }

            function formatPrefix(specifier, value) {
                var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
                    e = 3 * Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))),
                    k = Math.pow(10, -e),
                    prefix = prefixes[8 + e / 3];
                return function (value) {
                    return f(k * value) + prefix
                }
            }
            var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity,
                currency = locale.currency,
                decimal = locale.decimal;
            return {
                format: newFormat,
                formatPrefix: formatPrefix
            }
        }

        function precisionFixed(step) {
            return Math.max(0, -exponent(Math.abs(step)))
        }

        function precisionPrefix(step, value) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) - exponent(Math.abs(step)))
        }

        function precisionRound(step, max) {
            return step = Math.abs(step), max = Math.abs(max) - step, Math.max(0, exponent(max) - exponent(step)) + 1
        }
        var prefixExponent, formatTypes = {
                "": formatDefault,
                "%": function (x, p) {
                    return (100 * x).toFixed(p)
                },
                b: function (x) {
                    return Math.round(x).toString(2)
                },
                c: function (x) {
                    return x + ""
                },
                d: function (x) {
                    return Math.round(x).toString(10)
                },
                e: function (x, p) {
                    return x.toExponential(p)
                },
                f: function (x, p) {
                    return x.toFixed(p)
                },
                g: function (x, p) {
                    return x.toPrecision(p)
                },
                o: function (x) {
                    return Math.round(x).toString(8)
                },
                p: function (x, p) {
                    return formatRounded(100 * x, p)
                },
                r: formatRounded,
                s: formatPrefixAuto,
                X: function (x) {
                    return Math.round(x).toString(16).toUpperCase()
                },
                x: function (x) {
                    return Math.round(x).toString(16)
                }
            },
            re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
        FormatSpecifier.prototype.toString = function () {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
        };
        var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
            defaultLocale = locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""]
            }),
            caES = locale({
                decimal: ",",
                thousands: ".",
                grouping: [3],
                currency: ["", " €"]
            }),
            csCZ = locale({
                decimal: ",",
                thousands: " ",
                grouping: [3],
                currency: ["", " Kč"]
            }),
            deCH = locale({
                decimal: ",",
                thousands: "'",
                grouping: [3],
                currency: ["", " CHF"]
            }),
            deDE = locale({
                decimal: ",",
                thousands: ".",
                grouping: [3],
                currency: ["", " €"]
            }),
            enCA = locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""]
            }),
            enGB = locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["£", ""]
            }),
            esES = locale({
                decimal: ",",
                thousands: ".",
                grouping: [3],
                currency: ["", " €"]
            }),
            fiFI = locale({
                decimal: ",",
                thousands: " ",
                grouping: [3],
                currency: ["", " €"]
            }),
            frCA = locale({
                decimal: ",",
                thousands: " ",
                grouping: [3],
                currency: ["", "$"]
            }),
            frFR = locale({
                decimal: ",",
                thousands: ".",
                grouping: [3],
                currency: ["", " €"]
            }),
            heIL = locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["₪", ""]
            }),
            huHU = locale({
                decimal: ",",
                thousands: " ",
                grouping: [3],
                currency: ["", " Ft"]
            }),
            itIT = locale({
                decimal: ",",
                thousands: ".",
                grouping: [3],
                currency: ["€", ""]
            }),
            jaJP = locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["", "円"]
            }),
            koKR = locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["₩", ""]
            }),
            mkMK = locale({
                decimal: ",",
                thousands: ".",
                grouping: [3],
                currency: ["", " ден."]
            }),
            nlNL = locale({
                decimal: ",",
                thousands: ".",
                grouping: [3],
                currency: ["€ ", ""]
            }),
            plPL = locale({
                decimal: ",",
                thousands: ".",
                grouping: [3],
                currency: ["", "zł"]
            }),
            ptBR = locale({
                decimal: ",",
                thousands: ".",
                grouping: [3],
                currency: ["R$", ""]
            }),
            ruRU = locale({
                decimal: ",",
                thousands: " ",
                grouping: [3],
                currency: ["", " руб."]
            }),
            svSE = locale({
                decimal: ",",
                thousands: " ",
                grouping: [3],
                currency: ["", "SEK"]
            }),
            zhCN = locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["¥", ""]
            }),
            format = defaultLocale.format,
            formatPrefix = defaultLocale.formatPrefix,
            version = "0.5.1";
        exports.version = version, exports.format = format, exports.formatPrefix = formatPrefix, exports.formatLocale = locale, exports.formatCaEs = caES, exports.formatCsCz = csCZ, exports.formatDeCh = deCH, exports.formatDeDe = deDE, exports.formatEnCa = enCA, exports.formatEnGb = enGB, exports.formatEnUs = defaultLocale, exports.formatEsEs = esES, exports.formatFiFi = fiFI, exports.formatFrCa = frCA, exports.formatFrFr = frFR, exports.formatHeIl = heIL, exports.formatHuHu = huHU, exports.formatItIt = itIT, exports.formatJaJp = jaJP, exports.formatKoKr = koKR, exports.formatMkMk = mkMK, exports.formatNlNl = nlNL, exports.formatPlPl = plPL, exports.formatPtBr = ptBR, exports.formatRuRu = ruRU, exports.formatSvSe = svSE, exports.formatZhCn = zhCN, exports.formatSpecifier = formatSpecifier, exports.precisionFixed = precisionFixed, exports.precisionPrefix = precisionPrefix, exports.precisionRound = precisionRound
    })
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports)
    }(this, function (exports) {
        "use strict";

        function newInterval(floori, offseti, count, field) {
            function interval(date) {
                return floori(date = new Date(+date)), date
            }
            return interval.floor = interval, interval.ceil = function (date) {
                return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date
            }, interval.round = function (date) {
                var d0 = interval(date),
                    d1 = interval.ceil(date);
                return d1 - date > date - d0 ? d0 : d1
            }, interval.offset = function (date, step) {
                return offseti(date = new Date(+date), null == step ? 1 : Math.floor(step)), date
            }, interval.range = function (start, stop, step) {
                var range = [];
                if (start = interval.ceil(start), step = null == step ? 1 : Math.floor(step), !(stop > start && step > 0)) return range;
                do range.push(new Date(+start)); while (offseti(start, step), floori(start), stop > start);
                return range
            }, interval.filter = function (test) {
                return newInterval(function (date) {
                    for (; floori(date), !test(date);) date.setTime(date - 1)
                }, function (date, step) {
                    for (; --step >= 0;)
                        for (; offseti(date, 1), !test(date););
                })
            }, count && (interval.count = function (start, end) {
                return t0.setTime(+start), t1.setTime(+end), floori(t0), floori(t1), Math.floor(count(t0, t1))
            }, interval.every = function (step) {
                return step = Math.floor(step), isFinite(step) && step > 0 ? step > 1 ? interval.filter(field ? function (d) {
                    return field(d) % step === 0
                } : function (d) {
                    return interval.count(0, d) % step === 0
                }) : interval : null
            }), interval
        }

        function weekday(i) {
            return newInterval(function (date) {
                date.setHours(0, 0, 0, 0), date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7)
            }, function (date, step) {
                date.setDate(date.getDate() + 7 * step)
            }, function (start, end) {
                return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * minute) / week
            })
        }

        function utcWeekday(i) {
            return newInterval(function (date) {
                date.setUTCHours(0, 0, 0, 0), date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7)
            }, function (date, step) {
                date.setUTCDate(date.getUTCDate() + 7 * step)
            }, function (start, end) {
                return (end - start) / week
            })
        }
        var t0 = new Date,
            t1 = new Date,
            millisecond = newInterval(function () {}, function (date, step) {
                date.setTime(+date + step)
            }, function (start, end) {
                return end - start
            });
        millisecond.every = function (k) {
            return k = Math.floor(k), isFinite(k) && k > 0 ? k > 1 ? newInterval(function (date) {
                date.setTime(Math.floor(date / k) * k)
            }, function (date, step) {
                date.setTime(+date + step * k)
            }, function (start, end) {
                return (end - start) / k
            }) : millisecond : null
        };
        var second$1 = 1e3,
            minute = 6e4,
            hour = 36e5,
            day = 864e5,
            week = 6048e5,
            second = newInterval(function (date) {
                date.setTime(Math.floor(date / second$1) * second$1)
            }, function (date, step) {
                date.setTime(+date + step * second$1)
            }, function (start, end) {
                return (end - start) / second$1
            }, function (date) {
                return date.getUTCSeconds()
            }),
            minute$1 = newInterval(function (date) {
                date.setTime(Math.floor(date / minute) * minute)
            }, function (date, step) {
                date.setTime(+date + step * minute)
            }, function (start, end) {
                return (end - start) / minute
            }, function (date) {
                return date.getMinutes()
            }),
            hour$1 = newInterval(function (date) {
                var offset = date.getTimezoneOffset() * minute % hour;
                0 > offset && (offset += hour), date.setTime(Math.floor((+date - offset) / hour) * hour + offset)
            }, function (date, step) {
                date.setTime(+date + step * hour)
            }, function (start, end) {
                return (end - start) / hour
            }, function (date) {
                return date.getHours()
            }),
            day$1 = newInterval(function (date) {
                date.setHours(0, 0, 0, 0)
            }, function (date, step) {
                date.setDate(date.getDate() + step)
            }, function (start, end) {
                return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * minute) / day
            }, function (date) {
                return date.getDate() - 1
            }),
            sunday = weekday(0),
            monday = weekday(1),
            tuesday = weekday(2),
            wednesday = weekday(3),
            thursday = weekday(4),
            friday = weekday(5),
            saturday = weekday(6),
            month = newInterval(function (date) {
                date.setHours(0, 0, 0, 0), date.setDate(1)
            }, function (date, step) {
                date.setMonth(date.getMonth() + step)
            }, function (start, end) {
                return end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear())
            }, function (date) {
                return date.getMonth()
            }),
            year = newInterval(function (date) {
                date.setHours(0, 0, 0, 0), date.setMonth(0, 1)
            }, function (date, step) {
                date.setFullYear(date.getFullYear() + step)
            }, function (start, end) {
                return end.getFullYear() - start.getFullYear()
            }, function (date) {
                return date.getFullYear()
            }),
            utcMinute = newInterval(function (date) {
                date.setUTCSeconds(0, 0)
            }, function (date, step) {
                date.setTime(+date + step * minute)
            }, function (start, end) {
                return (end - start) / minute
            }, function (date) {
                return date.getUTCMinutes()
            }),
            utcHour = newInterval(function (date) {
                date.setUTCMinutes(0, 0, 0)
            }, function (date, step) {
                date.setTime(+date + step * hour)
            }, function (start, end) {
                return (end - start) / hour
            }, function (date) {
                return date.getUTCHours()
            }),
            utcDay = newInterval(function (date) {
                date.setUTCHours(0, 0, 0, 0)
            }, function (date, step) {
                date.setUTCDate(date.getUTCDate() + step)
            }, function (start, end) {
                return (end - start) / day
            }, function (date) {
                return date.getUTCDate() - 1
            }),
            utcSunday = utcWeekday(0),
            utcMonday = utcWeekday(1),
            utcTuesday = utcWeekday(2),
            utcWednesday = utcWeekday(3),
            utcThursday = utcWeekday(4),
            utcFriday = utcWeekday(5),
            utcSaturday = utcWeekday(6),
            utcMonth = newInterval(function (date) {
                date.setUTCHours(0, 0, 0, 0), date.setUTCDate(1)
            }, function (date, step) {
                date.setUTCMonth(date.getUTCMonth() + step)
            }, function (start, end) {
                return end.getUTCMonth() - start.getUTCMonth() + 12 * (end.getUTCFullYear() - start.getUTCFullYear())
            }, function (date) {
                return date.getUTCMonth()
            }),
            utcYear = newInterval(function (date) {
                date.setUTCHours(0, 0, 0, 0), date.setUTCMonth(0, 1)
            }, function (date, step) {
                date.setUTCFullYear(date.getUTCFullYear() + step)
            }, function (start, end) {
                return end.getUTCFullYear() - start.getUTCFullYear()
            }, function (date) {
                return date.getUTCFullYear()
            }),
            timeMilliseconds = millisecond.range,
            timeSeconds = second.range,
            timeMinutes = minute$1.range,
            timeHours = hour$1.range,
            timeDays = day$1.range,
            timeSundays = sunday.range,
            timeMondays = monday.range,
            timeTuesdays = tuesday.range,
            timeWednesdays = wednesday.range,
            timeThursdays = thursday.range,
            timeFridays = friday.range,
            timeSaturdays = saturday.range,
            timeWeeks = sunday.range,
            timeMonths = month.range,
            timeYears = year.range,
            utcMillisecond = millisecond,
            utcMilliseconds = timeMilliseconds,
            utcSecond = second,
            utcSeconds = timeSeconds,
            utcMinutes = utcMinute.range,
            utcHours = utcHour.range,
            utcDays = utcDay.range,
            utcSundays = utcSunday.range,
            utcMondays = utcMonday.range,
            utcTuesdays = utcTuesday.range,
            utcWednesdays = utcWednesday.range,
            utcThursdays = utcThursday.range,
            utcFridays = utcFriday.range,
            utcSaturdays = utcSaturday.range,
            utcWeeks = utcSunday.range,
            utcMonths = utcMonth.range,
            utcYears = utcYear.range,
            version = "0.2.5";
        exports.version = version, exports.timeMilliseconds = timeMilliseconds, exports.timeSeconds = timeSeconds, exports.timeMinutes = timeMinutes, exports.timeHours = timeHours, exports.timeDays = timeDays, exports.timeSundays = timeSundays, exports.timeMondays = timeMondays, exports.timeTuesdays = timeTuesdays, exports.timeWednesdays = timeWednesdays, exports.timeThursdays = timeThursdays, exports.timeFridays = timeFridays, exports.timeSaturdays = timeSaturdays, exports.timeWeeks = timeWeeks, exports.timeMonths = timeMonths, exports.timeYears = timeYears, exports.utcMillisecond = utcMillisecond, exports.utcMilliseconds = utcMilliseconds, exports.utcSecond = utcSecond, exports.utcSeconds = utcSeconds, exports.utcMinutes = utcMinutes, exports.utcHours = utcHours, exports.utcDays = utcDays, exports.utcSundays = utcSundays, exports.utcMondays = utcMondays, exports.utcTuesdays = utcTuesdays, exports.utcWednesdays = utcWednesdays, exports.utcThursdays = utcThursdays, exports.utcFridays = utcFridays, exports.utcSaturdays = utcSaturdays, exports.utcWeeks = utcWeeks, exports.utcMonths = utcMonths, exports.utcYears = utcYears, exports.timeMillisecond = millisecond, exports.timeSecond = second, exports.timeMinute = minute$1, exports.timeHour = hour$1, exports.timeDay = day$1, exports.timeSunday = sunday, exports.timeMonday = monday, exports.timeTuesday = tuesday, exports.timeWednesday = wednesday, exports.timeThursday = thursday, exports.timeFriday = friday, exports.timeSaturday = saturday, exports.timeWeek = sunday, exports.timeMonth = month, exports.timeYear = year, exports.utcMinute = utcMinute, exports.utcHour = utcHour, exports.utcDay = utcDay, exports.utcSunday = utcSunday, exports.utcMonday = utcMonday, exports.utcTuesday = utcTuesday, exports.utcWednesday = utcWednesday, exports.utcThursday = utcThursday, exports.utcFriday = utcFriday, exports.utcSaturday = utcSaturday, exports.utcWeek = utcSunday, exports.utcMonth = utcMonth, exports.utcYear = utcYear, exports.timeInterval = newInterval
    })
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports, __webpack_require__(13))
    }(this, function (exports, d3Time) {
        "use strict";

        function localDate(d) {
            if (0 <= d.y && d.y < 100) {
                var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
                return date.setFullYear(d.y), date
            }
            return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L)
        }

        function utcDate(d) {
            if (0 <= d.y && d.y < 100) {
                var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
                return date.setUTCFullYear(d.y), date
            }
            return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L))
        }

        function newYear(y) {
            return {
                y: y,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
        }

        function locale$1(locale) {
            function newFormat(specifier, formats) {
                return function (date) {
                    var c, pad, format, string = [],
                        i = -1,
                        j = 0,
                        n = specifier.length;
                    for (date instanceof Date || (date = new Date(+date)); ++i < n;) 37 === specifier.charCodeAt(i) && (string.push(specifier.slice(j, i)), null != (pad = pads[c = specifier.charAt(++i)]) ? c = specifier.charAt(++i) : pad = "e" === c ? " " : "0", (format = formats[c]) && (c = format(date, pad)), string.push(c), j = i + 1);
                    return string.push(specifier.slice(j, i)), string.join("")
                }
            }

            function newParse(specifier, newDate) {
                return function (string) {
                    var d = newYear(1900),
                        i = parseSpecifier(d, specifier, string += "", 0);
                    if (i != string.length) return null;
                    if ("p" in d && (d.H = d.H % 12 + 12 * d.p), "W" in d || "U" in d) {
                        "w" in d || (d.w = "W" in d ? 1 : 0);
                        var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
                        d.m = 0, d.d = "W" in d ? (d.w + 6) % 7 + 7 * d.W - (day + 5) % 7 : d.w + 7 * d.U - (day + 6) % 7
                    }
                    return "Z" in d ? (d.H += d.Z / 100 | 0, d.M += d.Z % 100, utcDate(d)) : newDate(d)
                }
            }

            function parseSpecifier(d, specifier, string, j) {
                for (var c, parse, i = 0, n = specifier.length, m = string.length; n > i;) {
                    if (j >= m) return -1;
                    if (c = specifier.charCodeAt(i++), 37 === c) {
                        if (c = specifier.charAt(i++), parse = parses[c in pads ? specifier.charAt(i++) : c], !parse || (j = parse(d, string, j)) < 0) return -1
                    } else if (c != string.charCodeAt(j++)) return -1
                }
                return j
            }

            function parsePeriod(d, string, i) {
                var n = periodRe.exec(string.slice(i));
                return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1
            }

            function parseShortWeekday(d, string, i) {
                var n = shortWeekdayRe.exec(string.slice(i));
                return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1
            }

            function parseWeekday(d, string, i) {
                var n = weekdayRe.exec(string.slice(i));
                return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1
            }

            function parseShortMonth(d, string, i) {
                var n = shortMonthRe.exec(string.slice(i));
                return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1
            }

            function parseMonth(d, string, i) {
                var n = monthRe.exec(string.slice(i));
                return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1
            }

            function parseLocaleDateTime(d, string, i) {
                return parseSpecifier(d, locale_dateTime, string, i)
            }

            function parseLocaleDate(d, string, i) {
                return parseSpecifier(d, locale_date, string, i)
            }

            function parseLocaleTime(d, string, i) {
                return parseSpecifier(d, locale_time, string, i)
            }

            function formatShortWeekday(d) {
                return locale_shortWeekdays[d.getDay()]
            }

            function formatWeekday(d) {
                return locale_weekdays[d.getDay()]
            }

            function formatShortMonth(d) {
                return locale_shortMonths[d.getMonth()]
            }

            function formatMonth(d) {
                return locale_months[d.getMonth()]
            }

            function formatPeriod(d) {
                return locale_periods[+(d.getHours() >= 12)]
            }

            function formatUTCShortWeekday(d) {
                return locale_shortWeekdays[d.getUTCDay()]
            }

            function formatUTCWeekday(d) {
                return locale_weekdays[d.getUTCDay()]
            }

            function formatUTCShortMonth(d) {
                return locale_shortMonths[d.getUTCMonth()]
            }

            function formatUTCMonth(d) {
                return locale_months[d.getUTCMonth()]
            }

            function formatUTCPeriod(d) {
                return locale_periods[+(d.getUTCHours() >= 12)]
            }
            var locale_dateTime = locale.dateTime,
                locale_date = locale.date,
                locale_time = locale.time,
                locale_periods = locale.periods,
                locale_weekdays = locale.days,
                locale_shortWeekdays = locale.shortDays,
                locale_months = locale.months,
                locale_shortMonths = locale.shortMonths,
                periodRe = formatRe(locale_periods),
                periodLookup = formatLookup(locale_periods),
                weekdayRe = formatRe(locale_weekdays),
                weekdayLookup = formatLookup(locale_weekdays),
                shortWeekdayRe = formatRe(locale_shortWeekdays),
                shortWeekdayLookup = formatLookup(locale_shortWeekdays),
                monthRe = formatRe(locale_months),
                monthLookup = formatLookup(locale_months),
                shortMonthRe = formatRe(locale_shortMonths),
                shortMonthLookup = formatLookup(locale_shortMonths),
                formats = {
                    a: formatShortWeekday,
                    A: formatWeekday,
                    b: formatShortMonth,
                    B: formatMonth,
                    c: null,
                    d: formatDayOfMonth,
                    e: formatDayOfMonth,
                    H: formatHour24,
                    I: formatHour12,
                    j: formatDayOfYear,
                    L: formatMilliseconds,
                    m: formatMonthNumber,
                    M: formatMinutes,
                    p: formatPeriod,
                    S: formatSeconds,
                    U: formatWeekNumberSunday,
                    w: formatWeekdayNumber,
                    W: formatWeekNumberMonday,
                    x: null,
                    X: null,
                    y: formatYear,
                    Y: formatFullYear,
                    Z: formatZone,
                    "%": formatLiteralPercent
                },
                utcFormats = {
                    a: formatUTCShortWeekday,
                    A: formatUTCWeekday,
                    b: formatUTCShortMonth,
                    B: formatUTCMonth,
                    c: null,
                    d: formatUTCDayOfMonth,
                    e: formatUTCDayOfMonth,
                    H: formatUTCHour24,
                    I: formatUTCHour12,
                    j: formatUTCDayOfYear,
                    L: formatUTCMilliseconds,
                    m: formatUTCMonthNumber,
                    M: formatUTCMinutes,
                    p: formatUTCPeriod,
                    S: formatUTCSeconds,
                    U: formatUTCWeekNumberSunday,
                    w: formatUTCWeekdayNumber,
                    W: formatUTCWeekNumberMonday,
                    x: null,
                    X: null,
                    y: formatUTCYear,
                    Y: formatUTCFullYear,
                    Z: formatUTCZone,
                    "%": formatLiteralPercent
                },
                parses = {
                    a: parseShortWeekday,
                    A: parseWeekday,
                    b: parseShortMonth,
                    B: parseMonth,
                    c: parseLocaleDateTime,
                    d: parseDayOfMonth,
                    e: parseDayOfMonth,
                    H: parseHour24,
                    I: parseHour24,
                    j: parseDayOfYear,
                    L: parseMilliseconds,
                    m: parseMonthNumber,
                    M: parseMinutes,
                    p: parsePeriod,
                    S: parseSeconds,
                    U: parseWeekNumberSunday,
                    w: parseWeekdayNumber,
                    W: parseWeekNumberMonday,
                    x: parseLocaleDate,
                    X: parseLocaleTime,
                    y: parseYear,
                    Y: parseFullYear,
                    Z: parseZone,
                    "%": parseLiteralPercent
                };
            return formats.x = newFormat(locale_date, formats), formats.X = newFormat(locale_time, formats), formats.c = newFormat(locale_dateTime, formats), utcFormats.x = newFormat(locale_date, utcFormats), utcFormats.X = newFormat(locale_time, utcFormats), utcFormats.c = newFormat(locale_dateTime, utcFormats), {
                format: function (specifier) {
                    var f = newFormat(specifier += "", formats);
                    return f.toString = function () {
                        return specifier
                    }, f
                },
                parse: function (specifier) {
                    var p = newParse(specifier += "", localDate);
                    return p.toString = function () {
                        return specifier
                    }, p
                },
                utcFormat: function (specifier) {
                    var f = newFormat(specifier += "", utcFormats);
                    return f.toString = function () {
                        return specifier
                    }, f
                },
                utcParse: function (specifier) {
                    var p = newParse(specifier, utcDate);
                    return p.toString = function () {
                        return specifier
                    }, p
                }
            }
        }

        function pad(value, fill, width) {
            var sign = 0 > value ? "-" : "",
                string = (sign ? -value : value) + "",
                length = string.length;
            return sign + (width > length ? new Array(width - length + 1).join(fill) + string : string)
        }

        function requote(s) {
            return s.replace(requoteRe, "\\$&")
        }

        function formatRe(names) {
            return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i")
        }

        function formatLookup(names) {
            for (var map = {}, i = -1, n = names.length; ++i < n;) map[names[i].toLowerCase()] = i;
            return map
        }

        function parseWeekdayNumber(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 1));
            return n ? (d.w = +n[0], i + n[0].length) : -1
        }

        function parseWeekNumberSunday(d, string, i) {
            var n = numberRe.exec(string.slice(i));
            return n ? (d.U = +n[0], i + n[0].length) : -1
        }

        function parseWeekNumberMonday(d, string, i) {
            var n = numberRe.exec(string.slice(i));
            return n ? (d.W = +n[0], i + n[0].length) : -1
        }

        function parseFullYear(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 4));
            return n ? (d.y = +n[0], i + n[0].length) : -1
        }

        function parseYear(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1
        }

        function parseZone(d, string, i) {
            var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
            return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1
        }

        function parseMonthNumber(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.m = n[0] - 1, i + n[0].length) : -1
        }

        function parseDayOfMonth(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.d = +n[0], i + n[0].length) : -1
        }

        function parseDayOfYear(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 3));
            return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1
        }

        function parseHour24(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.H = +n[0], i + n[0].length) : -1
        }

        function parseMinutes(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.M = +n[0], i + n[0].length) : -1
        }

        function parseSeconds(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.S = +n[0], i + n[0].length) : -1
        }

        function parseMilliseconds(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 3));
            return n ? (d.L = +n[0], i + n[0].length) : -1
        }

        function parseLiteralPercent(d, string, i) {
            var n = percentRe.exec(string.slice(i, i + 1));
            return n ? i + n[0].length : -1
        }

        function formatDayOfMonth(d, p) {
            return pad(d.getDate(), p, 2)
        }

        function formatHour24(d, p) {
            return pad(d.getHours(), p, 2)
        }

        function formatHour12(d, p) {
            return pad(d.getHours() % 12 || 12, p, 2)
        }

        function formatDayOfYear(d, p) {
            return pad(1 + d3Time.timeDay.count(d3Time.timeYear(d), d), p, 3)
        }

        function formatMilliseconds(d, p) {
            return pad(d.getMilliseconds(), p, 3)
        }

        function formatMonthNumber(d, p) {
            return pad(d.getMonth() + 1, p, 2)
        }

        function formatMinutes(d, p) {
            return pad(d.getMinutes(), p, 2)
        }

        function formatSeconds(d, p) {
            return pad(d.getSeconds(), p, 2)
        }

        function formatWeekNumberSunday(d, p) {
            return pad(d3Time.timeSunday.count(d3Time.timeYear(d), d), p, 2)
        }

        function formatWeekdayNumber(d) {
            return d.getDay()
        }

        function formatWeekNumberMonday(d, p) {
            return pad(d3Time.timeMonday.count(d3Time.timeYear(d), d), p, 2)
        }

        function formatYear(d, p) {
            return pad(d.getFullYear() % 100, p, 2)
        }

        function formatFullYear(d, p) {
            return pad(d.getFullYear() % 1e4, p, 4)
        }

        function formatZone(d) {
            var z = d.getTimezoneOffset();
            return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2)
        }

        function formatUTCDayOfMonth(d, p) {
            return pad(d.getUTCDate(), p, 2)
        }

        function formatUTCHour24(d, p) {
            return pad(d.getUTCHours(), p, 2)
        }

        function formatUTCHour12(d, p) {
            return pad(d.getUTCHours() % 12 || 12, p, 2)
        }

        function formatUTCDayOfYear(d, p) {
            return pad(1 + d3Time.utcDay.count(d3Time.utcYear(d), d), p, 3)
        }

        function formatUTCMilliseconds(d, p) {
            return pad(d.getUTCMilliseconds(), p, 3)
        }

        function formatUTCMonthNumber(d, p) {
            return pad(d.getUTCMonth() + 1, p, 2)
        }

        function formatUTCMinutes(d, p) {
            return pad(d.getUTCMinutes(), p, 2)
        }

        function formatUTCSeconds(d, p) {
            return pad(d.getUTCSeconds(), p, 2)
        }

        function formatUTCWeekNumberSunday(d, p) {
            return pad(d3Time.utcSunday.count(d3Time.utcYear(d), d), p, 2)
        }

        function formatUTCWeekdayNumber(d) {
            return d.getUTCDay()
        }

        function formatUTCWeekNumberMonday(d, p) {
            return pad(d3Time.utcMonday.count(d3Time.utcYear(d), d), p, 2)
        }

        function formatUTCYear(d, p) {
            return pad(d.getUTCFullYear() % 100, p, 2)
        }

        function formatUTCFullYear(d, p) {
            return pad(d.getUTCFullYear() % 1e4, p, 4)
        }

        function formatUTCZone() {
            return "+0000"
        }

        function formatLiteralPercent() {
            return "%"
        }

        function formatIsoNative(date) {
            return date.toISOString()
        }

        function parseIsoNative(string) {
            var date = new Date(string);
            return isNaN(date) ? null : date
        }
        var pads = {
                "-": "",
                _: " ",
                0: "0"
            },
            numberRe = /^\s*\d+/,
            percentRe = /^%/,
            requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
            locale = locale$1({
                dateTime: "%a %b %e %X %Y",
                date: "%m/%d/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }),
            caES = locale$1({
                dateTime: "%A, %e de %B de %Y, %X",
                date: "%d/%m/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
                shortDays: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
                months: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
                shortMonths: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."]
            }),
            deCH = locale$1({
                dateTime: "%A, der %e. %B %Y, %X",
                date: "%d.%m.%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
            }),
            deDE = locale$1({
                dateTime: "%A, der %e. %B %Y, %X",
                date: "%d.%m.%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
            }),
            enCA = locale$1({
                dateTime: "%a %b %e %X %Y",
                date: "%Y-%m-%d",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }),
            enGB = locale$1({
                dateTime: "%a %e %b %X %Y",
                date: "%d/%m/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }),
            esES = locale$1({
                dateTime: "%A, %e de %B de %Y, %X",
                date: "%d/%m/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
                shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
                months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
                shortMonths: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
            }),
            fiFI = locale$1({
                dateTime: "%A, %-d. %Bta %Y klo %X",
                date: "%-d.%-m.%Y",
                time: "%H:%M:%S",
                periods: ["a.m.", "p.m."],
                days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
                shortDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
                shortMonths: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"]
            }),
            frCA = locale$1({
                dateTime: "%a %e %b %Y %X",
                date: "%Y-%m-%d",
                time: "%H:%M:%S",
                periods: ["", ""],
                days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
                shortDays: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
                months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
                shortMonths: ["jan", "fév", "mar", "avr", "mai", "jui", "jul", "aoû", "sep", "oct", "nov", "déc"]
            }),
            frFR = locale$1({
                dateTime: "%A, le %e %B %Y, %X",
                date: "%d/%m/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
                shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
                shortMonths: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
            }),
            heIL = locale$1({
                dateTime: "%A, %e ב%B %Y %X",
                date: "%d.%m.%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
                shortDays: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
                months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
                shortMonths: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"]
            }),
            huHU = locale$1({
                dateTime: "%Y. %B %-e., %A %X",
                date: "%Y. %m. %d.",
                time: "%H:%M:%S",
                periods: ["de.", "du."],
                days: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
                shortDays: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
                months: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
                shortMonths: ["jan.", "feb.", "már.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."]
            }),
            itIT = locale$1({
                dateTime: "%A %e %B %Y, %X",
                date: "%d/%m/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
                shortDays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                shortMonths: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
            }),
            jaJP = locale$1({
                dateTime: "%Y %b %e %a %X",
                date: "%Y/%m/%d",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
                shortDays: ["日", "月", "火", "水", "木", "金", "土"],
                months: ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"],
                shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            }),
            koKR = locale$1({
                dateTime: "%Y/%m/%d %a %X",
                date: "%Y/%m/%d",
                time: "%H:%M:%S",
                periods: ["오전", "오후"],
                days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
                shortDays: ["일", "월", "화", "수", "목", "금", "토"],
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                shortMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
            }),
            mkMK = locale$1({
                dateTime: "%A, %e %B %Y г. %X",
                date: "%d.%m.%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
                shortDays: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
                months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
                shortMonths: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"]
            }),
            nlNL = locale$1({
                dateTime: "%a %e %B %Y %T",
                date: "%d-%m-%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
                shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
            }),
            plPL = locale$1({
                dateTime: "%A, %e %B %Y, %X",
                date: "%d/%m/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
                shortDays: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
                months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                shortMonths: ["Stycz.", "Luty", "Marz.", "Kwie.", "Maj", "Czerw.", "Lipc.", "Sierp.", "Wrz.", "Paźdz.", "Listop.", "Grudz."]
            }),
            ptBR = locale$1({
                dateTime: "%A, %e de %B de %Y. %X",
                date: "%d/%m/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
            }),
            ruRU = locale$1({
                dateTime: "%A, %e %B %Y г. %X",
                date: "%d.%m.%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
                shortDays: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
                shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
            }),
            svSE = locale$1({
                dateTime: "%A den %d %B %Y %X",
                date: "%Y-%m-%d",
                time: "%H:%M:%S",
                periods: ["fm", "em"],
                days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
                shortDays: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
            }),
            zhCN = locale$1({
                dateTime: "%a %b %e %X %Y",
                date: "%Y/%-m/%-d",
                time: "%H:%M:%S",
                periods: ["上午", "下午"],
                days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
            }),
            isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ",
            formatIso = Date.prototype.toISOString ? formatIsoNative : locale.utcFormat(isoSpecifier),
            parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : locale.utcParse(isoSpecifier),
            timeFormat = locale.format,
            timeParse = locale.parse,
            utcFormat = locale.utcFormat,
            utcParse = locale.utcParse,
            version = "0.3.1";
        exports.version = version, exports.timeFormat = timeFormat, exports.timeParse = timeParse, exports.utcFormat = utcFormat, exports.utcParse = utcParse, exports.timeFormatLocale = locale$1, exports.timeFormatCaEs = caES, exports.timeFormatDeCh = deCH, exports.timeFormatDeDe = deDE, exports.timeFormatEnCa = enCA, exports.timeFormatEnGb = enGB, exports.timeFormatEnUs = locale, exports.timeFormatEsEs = esES, exports.timeFormatFiFi = fiFI, exports.timeFormatFrCa = frCA, exports.timeFormatFrFr = frFR, exports.timeFormatHeIl = heIL, exports.timeFormatHuHu = huHU, exports.timeFormatItIt = itIT, exports.timeFormatJaJp = jaJP, exports.timeFormatKoKr = koKR, exports.timeFormatMkMk = mkMK, exports.timeFormatNlNl = nlNL, exports.timeFormatPlPl = plPL, exports.timeFormatPtBr = ptBR, exports.timeFormatRuRu = ruRU, exports.timeFormatSvSe = svSE, exports.timeFormatZhCn = zhCN, exports.isoFormat = formatIso, exports.isoParse = parseIso
    })
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _commonProps = __webpack_require__(5),
        _commonProps2 = _interopRequireDefault(_commonProps),
        ChartTitle = function (_Component) {
            function ChartTitle(props) {
                return _classCallCheck(this, ChartTitle), _possibleConstructorReturn(this, Object.getPrototypeOf(ChartTitle).call(this, props))
            }
            return _inherits(ChartTitle, _Component), _createClass(ChartTitle, [{
                key: "render",
                value: function () {
                    var _props = this.props,
                        titleClassName = _props.titleClassName,
                        title = _props.title,
                        width = _props.width,
                        titleStyle = {
                            width: width,
                            textAlign: "center",
                            fontSize: "2em",
                            paddingBottom: "1.3em"
                        };
                    return _react2["default"].createElement("div", {
                        style: titleStyle,
                        className: titleClassName
                    }, title)
                }
            }]), ChartTitle
        }(_react.Component);
    ChartTitle.defaultProps = _extends({
        titleClassName: "react-d3-core__container_title",
        title: ""
    }, _commonProps2["default"]), ChartTitle.propTypes = {
        width: _react.PropTypes.number.isRequired,
        title: _react.PropTypes.string,
        titleClassName: _react.PropTypes.string
    }, exports["default"] = ChartTitle
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _svg = __webpack_require__(4),
        _svg2 = _interopRequireDefault(_svg),
        _legend = __webpack_require__(17),
        _legend2 = _interopRequireDefault(_legend),
        _commonProps = __webpack_require__(5),
        _commonProps2 = _interopRequireDefault(_commonProps),
        ChartContainer = function (_Component) {
            function ChartContainer(props) {
                return _classCallCheck(this, ChartContainer), _possibleConstructorReturn(this, Object.getPrototypeOf(ChartContainer).call(this, props))
            }
            return _inherits(ChartContainer, _Component), _createClass(ChartContainer, [{
                key: "render",
                value: function () {
                    var legend, _props = this.props,
                        width = _props.width,
                        chartSeries = _props.chartSeries,
                        divStyle = {
                            width: width
                        };
                    return chartSeries && (legend = _react2["default"].createElement(_legend2["default"], _extends({}, this.props, {
                        chartSeries: chartSeries
                    }))), _react2["default"].createElement("div", {
                        style: divStyle
                    }, legend, _react2["default"].createElement(_svg2["default"], this.props))
                }
            }]), ChartContainer
        }(_react.Component);
    ChartContainer.defaultProps = _commonProps2["default"], exports["default"] = ChartContainer
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _d3Selection = (_interopRequireDefault(_react), __webpack_require__(18)),
        _d3Selection2 = _interopRequireDefault(_d3Selection),
        _d3Scale = __webpack_require__(7),
        _d3Scale2 = _interopRequireDefault(_d3Scale),
        _reactFauxDom = __webpack_require__(19),
        _reactFauxDom2 = _interopRequireDefault(_reactFauxDom),
        _commonProps = __webpack_require__(5),
        _commonProps2 = _interopRequireDefault(_commonProps),
        Legend = function (_Component) {
            function Legend(props) {
                return _classCallCheck(this, Legend), _possibleConstructorReturn(this, Object.getPrototypeOf(Legend).call(this, props))
            }
            return _inherits(Legend, _Component), _createClass(Legend, [{
                key: "_radius",
                value: function (swatchShape) {
                    return "circle" === swatchShape ? 18 : 0
                }
            }, {
                key: "_series",
                value: function (props) {
                    var chartSeries = props.chartSeries,
                        categoricalColors = props.categoricalColors,
                        colors = categoricalColors || _d3Scale2["default"].scaleCategory10();
                    return chartSeries.map(function (_ref, i) {
                        var name = _ref.name,
                            color = _ref.color,
                            field = _ref.field;
                        return {
                            color: color || colors(i),
                            name: name || field,
                            field: field
                        }
                    })
                }
            }, {
                key: "_mkLegend",
                value: function (dom) {
                    var _props = this.props,
                        legendClassName = _props.legendClassName,
                        backgroundColor = _props.backgroundColor,
                        legendPosition = _props.legendPosition,
                        swatchShape = (_props.legendOffset, _props.swatchShape),
                        legendArea = (_props.chartSeries, _props.margins, _props.width, _d3Selection2["default"].select(dom)),
                        series = this._series(this.props),
                        radius = this._radius(swatchShape),
                        legend = legendArea.selectAll("div").data(series).enter().append("div").attr("class", legendClassName + " legend").style("height", 20).style("padding", 5).style("background-color", backgroundColor).style("display", "inline-block");
                    legend.append("div").style("width", 18).style("height", 18).style("border-radius", radius).style("background-color", function (d) {
                        return d.color
                    }).style("float", legendPosition), legend.append("div").style("padding-left", 5).style("padding-right", 5).text(function (d) {
                        return d.name
                    }).style("float", legendPosition);
                    return legendArea
                }
            }, {
                key: "render",
                value: function () {
                    var _props2 = this.props,
                        legendClassName = _props2.legendClassName,
                        width = _props2.width,
                        legendGroup = (_props2.height, _reactFauxDom2["default"].createElement("div")),
                        legendClasses = legendClassName + " legend";
                    return legendGroup.setAttribute("class", legendClasses), legendGroup.style.width = width, legendGroup.style.textAlign = "center", this._mkLegend(legendGroup).node().toReact()
                }
            }]), Legend
        }(_react.Component);
    Legend.defaultProps = _extends({
        backgroundColor: "#FFF",
        legendHeight: 50,
        legendPosition: "left",
        legendOffset: 90,
        legendClassName: "react-d3-core__legend",
        swatchShape: "square"
    }, _commonProps2["default"]), Legend.propTypes = {
        backgroundColor: _react.PropTypes.string,
        width: _react.PropTypes.number.isRequired,
        margins: _react.PropTypes.object.isRequired,
        chartSeries: _react.PropTypes.array.isRequired,
        legendOffset: _react.PropTypes.number.isRequired,
        legendClassName: _react.PropTypes.string.isRequired,
        legendPosition: _react.PropTypes.oneOf(["left", "right"]).isRequired,
        swatchShape: _react.PropTypes.oneOf(["circle", "square"])
    }, exports["default"] = Legend
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports)
    }(this, function (exports) {
        "use strict";

        function namespace(name) {
            var prefix = name += "",
                i = prefix.indexOf(":");
            return i >= 0 && "xmlns" !== (prefix = name.slice(0, i)) && (name = name.slice(i + 1)), namespaces.hasOwnProperty(prefix) ? {
                space: namespaces[prefix],
                local: name
            } : name
        }

        function creatorInherit(name) {
            return function () {
                var document = this.ownerDocument,
                    uri = this.namespaceURI;
                return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name)
            }
        }

        function creatorFixed(fullname) {
            return function () {
                return this.ownerDocument.createElementNS(fullname.space, fullname.local)
            }
        }

        function creator(name) {
            var fullname = namespace(name);
            return (fullname.local ? creatorFixed : creatorInherit)(fullname)
        }

        function filterContextListener(listener, index, group) {
            return listener = contextListener(listener, index, group),
                function (event) {
                    var related = event.relatedTarget;
                    related && (related === this || 8 & related.compareDocumentPosition(this)) || listener.call(this, event)
                }
        }

        function contextListener(listener, index, group) {
            return function (event1) {
                var event0 = exports.event;
                exports.event = event1;
                try {
                    listener.call(this, this.__data__, index, group)
                } finally {
                    exports.event = event0
                }
            }
        }

        function parseTypenames(typenames) {
            return typenames.trim().split(/^|\s+/).map(function (t) {
                var name = "",
                    i = t.indexOf(".");
                return i >= 0 && (name = t.slice(i + 1), t = t.slice(0, i)), {
                    type: t,
                    name: name
                }
            })
        }

        function onRemove(typename) {
            return function () {
                var on = this.__on;
                if (on) {
                    for (var o, j = 0, i = -1, m = on.length; m > j; ++j) o = on[j], typename.type && o.type !== typename.type || o.name !== typename.name ? on[++i] = o : this.removeEventListener(o.type, o.listener, o.capture);
                    ++i ? on.length = i : delete this.__on
                }
            }
        }

        function onAdd(typename, value, capture) {
            var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
            return function (d, i, group) {
                var o, on = this.__on,
                    listener = wrap(value, i, group);
                if (on)
                    for (var j = 0, m = on.length; m > j; ++j)
                        if ((o = on[j]).type === typename.type && o.name === typename.name) return this.removeEventListener(o.type, o.listener, o.capture), this.addEventListener(o.type, o.listener = listener, o.capture = capture), void(o.value = value);
                this.addEventListener(typename.type, listener, capture), o = {
                    type: typename.type,
                    name: typename.name,
                    value: value,
                    listener: listener,
                    capture: capture
                }, on ? on.push(o) : this.__on = [o]
            }
        }

        function selection_on(typename, value, capture) {
            var i, t, typenames = parseTypenames(typename + ""),
                n = typenames.length; {
                if (!(arguments.length < 2)) {
                    for (on = value ? onAdd : onRemove, null == capture && (capture = !1), i = 0; n > i; ++i) this.each(on(typenames[i], value, capture));
                    return this
                }
                var on = this.node().__on;
                if (on)
                    for (var o, j = 0, m = on.length; m > j; ++j)
                        for (i = 0, o = on[j]; n > i; ++i)
                            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value
            }
        }

        function sourceEvent() {
            for (var source, current = exports.event; source = current.sourceEvent;) current = source;
            return current
        }

        function defaultView(node) {
            return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView
        }

        function selector(selector) {
            return function () {
                return this.querySelector(selector)
            }
        }

        function selection_select(select) {
            "function" != typeof select && (select = selector(select));
            for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; m > j; ++j)
                for (var node, subnode, group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), i = 0; n > i; ++i)(node = group[i]) && (subnode = select.call(node, node.__data__, i, group)) && ("__data__" in node && (subnode.__data__ = node.__data__), subgroup[i] = subnode);
            return new Selection(subgroups, this._parents)
        }

        function selectorAll(selector) {
            return function () {
                return this.querySelectorAll(selector)
            }
        }

        function selection_selectAll(select) {
            "function" != typeof select && (select = selectorAll(select));
            for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; m > j; ++j)
                for (var node, group = groups[j], n = group.length, i = 0; n > i; ++i)(node = group[i]) && (subgroups.push(select.call(node, node.__data__, i, group)), parents.push(node));
            return new Selection(subgroups, parents)
        }

        function selection_filter(match) {
            "function" != typeof match && (match = matcher$1(match));
            for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; m > j; ++j)
                for (var node, group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), i = 0; n > i; ++i)(node = group[i]) && match.call(node, node.__data__, i, group) && (subgroup[i] = node);
            return new Selection(subgroups, this._parents)
        }

        function constant(x) {
            return function () {
                return x
            }
        }

        function bindIndex(parent, group, enter, update, exit, data) {
            for (var node, i = 0, groupLength = group.length, dataLength = data.length; dataLength > i; ++i)(node = group[i]) ? (node.__data__ = data[i], update[i] = node) : enter[i] = new EnterNode(parent, data[i]);
            for (; groupLength > i; ++i)(node = group[i]) && (exit[i] = node)
        }

        function bindKey(parent, group, enter, update, exit, data, key) {
            var i, node, keyValue, nodeByKeyValue = {},
                groupLength = group.length,
                dataLength = data.length,
                keyValues = new Array(groupLength);
            for (i = 0; groupLength > i; ++i)(node = group[i]) && (keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group), nodeByKeyValue[keyValue] || (nodeByKeyValue[keyValue] = node));
            for (i = 0; dataLength > i; ++i) keyValue = keyPrefix + key.call(parent, data[i], i, data), (node = nodeByKeyValue[keyValue]) ? node !== !0 && (update[i] = node, node.__data__ = data[i]) : enter[i] = new EnterNode(parent, data[i]), nodeByKeyValue[keyValue] = !0;
            for (i = 0; groupLength > i; ++i)(node = group[i]) && nodeByKeyValue[keyValues[i]] !== !0 && (exit[i] = node)
        }

        function selection_data(value, key) {
            if (!value) return data = new Array(this.size()), j = -1, this.each(function (d) {
                data[++j] = d
            }), data;
            var bind = key ? bindKey : bindIndex,
                parents = this._parents,
                groups = this._groups;
            "function" != typeof value && (value = constant(value));
            for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; m > j; ++j) {
                var parent = parents[j],
                    group = groups[j],
                    groupLength = group.length,
                    data = value.call(parent, parent && parent.__data__, j, parents),
                    dataLength = data.length,
                    enterGroup = enter[j] = new Array(dataLength),
                    updateGroup = update[j] = new Array(dataLength),
                    exitGroup = exit[j] = new Array(groupLength);
                bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
                for (var previous, next, i0 = 0, i1 = 0; dataLength > i0; ++i0)
                    if (previous = enterGroup[i0]) {
                        for (i0 >= i1 && (i1 = i0 + 1); !(next = updateGroup[i1]) && ++i1 < dataLength;);
                        previous._next = next || null
                    }
            }
            return update = new Selection(update, parents), update._enter = enter, update._exit = exit, update
        }

        function EnterNode(parent, datum) {
            this.ownerDocument = parent.ownerDocument, this.namespaceURI = parent.namespaceURI, this._next = null, this._parent = parent, this.__data__ = datum
        }

        function sparse(update) {
            return new Array(update.length)
        }

        function selection_enter() {
            return new Selection(this._enter || this._groups.map(sparse), this._parents)
        }

        function selection_exit() {
            return new Selection(this._exit || this._groups.map(sparse), this._parents)
        }

        function selection_merge(selection) {
            for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; m > j; ++j)
                for (var node, group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), i = 0; n > i; ++i)(node = group0[i] || group1[i]) && (merge[i] = node);
            for (; m0 > j; ++j) merges[j] = groups0[j];
            return new Selection(merges, this._parents)
        }

        function selection_order() {
            for (var groups = this._groups, j = -1, m = groups.length; ++j < m;)
                for (var node, group = groups[j], i = group.length - 1, next = group[i]; --i >= 0;)(node = group[i]) && (next && next !== node.nextSibling && next.parentNode.insertBefore(node, next), next = node);
            return this
        }

        function selection_sort(compare) {
            function compareNode(a, b) {
                return a && b ? compare(a.__data__, b.__data__) : !a - !b
            }
            compare || (compare = ascending);
            for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; m > j; ++j) {
                for (var node, group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), i = 0; n > i; ++i)(node = group[i]) && (sortgroup[i] = node);
                sortgroup.sort(compareNode)
            }
            return new Selection(sortgroups, this._parents).order()
        }

        function ascending(a, b) {
            return b > a ? -1 : a > b ? 1 : a >= b ? 0 : NaN
        }

        function selection_call() {
            var callback = arguments[0];
            return arguments[0] = this, callback.apply(null, arguments), this
        }

        function selection_nodes() {
            var nodes = new Array(this.size()),
                i = -1;
            return this.each(function () {
                nodes[++i] = this
            }), nodes
        }

        function selection_node() {
            for (var groups = this._groups, j = 0, m = groups.length; m > j; ++j)
                for (var group = groups[j], i = 0, n = group.length; n > i; ++i) {
                    var node = group[i];
                    if (node) return node
                }
            return null
        }

        function selection_size() {
            var size = 0;
            return this.each(function () {
                ++size
            }), size
        }

        function selection_empty() {
            return !this.node()
        }

        function selection_each(callback) {
            for (var groups = this._groups, j = 0, m = groups.length; m > j; ++j)
                for (var node, group = groups[j], i = 0, n = group.length; n > i; ++i)(node = group[i]) && callback.call(node, node.__data__, i, group);
            return this
        }

        function attrRemove(name) {
            return function () {
                this.removeAttribute(name)
            }
        }

        function attrRemoveNS(fullname) {
            return function () {
                this.removeAttributeNS(fullname.space, fullname.local)
            }
        }

        function attrConstant(name, value) {
            return function () {
                this.setAttribute(name, value)
            }
        }

        function attrConstantNS(fullname, value) {
            return function () {
                this.setAttributeNS(fullname.space, fullname.local, value)
            }
        }

        function attrFunction(name, value) {
            return function () {
                var v = value.apply(this, arguments);
                null == v ? this.removeAttribute(name) : this.setAttribute(name, v)
            }
        }

        function attrFunctionNS(fullname, value) {
            return function () {
                var v = value.apply(this, arguments);
                null == v ? this.removeAttributeNS(fullname.space, fullname.local) : this.setAttributeNS(fullname.space, fullname.local, v)
            }
        }

        function selection_attr(name, value) {
            var fullname = namespace(name);
            if (arguments.length < 2) {
                var node = this.node();
                return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname)
            }
            return this.each((null == value ? fullname.local ? attrRemoveNS : attrRemove : "function" == typeof value ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value))
        }

        function styleRemove(name) {
            return function () {
                this.style.removeProperty(name)
            }
        }

        function styleConstant(name, value, priority) {
            return function () {
                this.style.setProperty(name, value, priority)
            }
        }

        function styleFunction(name, value, priority) {
            return function () {
                var v = value.apply(this, arguments);
                null == v ? this.style.removeProperty(name) : this.style.setProperty(name, v, priority)
            }
        }

        function selection_style(name, value, priority) {
            var node;
            return arguments.length > 1 ? this.each((null == value ? styleRemove : "function" == typeof value ? styleFunction : styleConstant)(name, value, null == priority ? "" : priority)) : defaultView(node = this.node()).getComputedStyle(node, null).getPropertyValue(name)
        }

        function propertyRemove(name) {
            return function () {
                delete this[name]
            }
        }

        function propertyConstant(name, value) {
            return function () {
                this[name] = value
            }
        }

        function propertyFunction(name, value) {
            return function () {
                var v = value.apply(this, arguments);
                null == v ? delete this[name] : this[name] = v
            }
        }

        function selection_property(name, value) {
            return arguments.length > 1 ? this.each((null == value ? propertyRemove : "function" == typeof value ? propertyFunction : propertyConstant)(name, value)) : this.node()[name]
        }

        function classArray(string) {
            return string.trim().split(/^|\s+/)
        }

        function classList(node) {
            return node.classList || new ClassList(node)
        }

        function ClassList(node) {
            this._node = node, this._names = classArray(node.getAttribute("class") || "")
        }

        function classedAdd(node, names) {
            for (var list = classList(node), i = -1, n = names.length; ++i < n;) list.add(names[i])
        }

        function classedRemove(node, names) {
            for (var list = classList(node), i = -1, n = names.length; ++i < n;) list.remove(names[i])
        }

        function classedTrue(names) {
            return function () {
                classedAdd(this, names)
            }
        }

        function classedFalse(names) {
            return function () {
                classedRemove(this, names)
            }
        }

        function classedFunction(names, value) {
            return function () {
                (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names)
            }
        }

        function selection_classed(name, value) {
            var names = classArray(name + "");
            if (arguments.length < 2) {
                for (var list = classList(this.node()), i = -1, n = names.length; ++i < n;)
                    if (!list.contains(names[i])) return !1;
                return !0
            }
            return this.each(("function" == typeof value ? classedFunction : value ? classedTrue : classedFalse)(names, value))
        }

        function textRemove() {
            this.textContent = ""
        }

        function textConstant(value) {
            return function () {
                this.textContent = value
            }
        }

        function textFunction(value) {
            return function () {
                var v = value.apply(this, arguments);
                this.textContent = null == v ? "" : v
            }
        }

        function selection_text(value) {
            return arguments.length ? this.each(null == value ? textRemove : ("function" == typeof value ? textFunction : textConstant)(value)) : this.node().textContent
        }

        function htmlRemove() {
            this.innerHTML = ""
        }

        function htmlConstant(value) {
            return function () {
                this.innerHTML = value
            }
        }

        function htmlFunction(value) {
            return function () {
                var v = value.apply(this, arguments);
                this.innerHTML = null == v ? "" : v
            }
        }

        function selection_html(value) {
            return arguments.length ? this.each(null == value ? htmlRemove : ("function" == typeof value ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML
        }

        function raise() {
            this.parentNode.appendChild(this)
        }

        function selection_raise() {
            return this.each(raise)
        }

        function lower() {
            this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        function selection_lower() {
            return this.each(lower)
        }

        function append(create) {
            return function () {
                return this.appendChild(create.apply(this, arguments))
            }
        }

        function insert(create, select) {
            return function () {
                return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null)
            }
        }

        function constantNull() {
            return null
        }

        function selection_append(name, before) {
            var create = "function" == typeof name ? name : creator(name);
            return this.select(arguments.length < 2 ? append(create) : insert(create, null == before ? constantNull : "function" == typeof before ? before : selector(before)))
        }

        function remove() {
            var parent = this.parentNode;
            parent && parent.removeChild(this)
        }

        function selection_remove() {
            return this.each(remove)
        }

        function selection_datum(value) {
            return arguments.length ? this.property("__data__", value) : this.node().__data__
        }

        function dispatchEvent(node, type, params) {
            var window = defaultView(node),
                event = window.CustomEvent;
            event ? event = new event(type, params) : (event = window.document.createEvent("Event"), params ? (event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail) : event.initEvent(type, !1, !1)), node.dispatchEvent(event)
        }

        function dispatchConstant(type, params) {
            return function () {
                return dispatchEvent(this, type, params)
            }
        }

        function dispatchFunction(type, params) {
            return function () {
                return dispatchEvent(this, type, params.apply(this, arguments))
            }
        }

        function selection_dispatch(type, params) {
            return this.each(("function" == typeof params ? dispatchFunction : dispatchConstant)(type, params))
        }

        function Selection(groups, parents) {
            this._groups = groups, this._parents = parents
        }

        function selection() {
            return new Selection([
                [document.documentElement]
            ], root)
        }

        function select(selector) {
            return "string" == typeof selector ? new Selection([
                [document.querySelector(selector)]
            ], [document.documentElement]) : new Selection([
                [selector]
            ], root)
        }

        function point(node, event) {
            var svg = node.ownerSVGElement || node;
            if (svg.createSVGPoint) {
                var point = svg.createSVGPoint();
                if (0 > bug44083) {
                    var window = defaultView(node);
                    if (window.scrollX || window.scrollY) {
                        svg = select(window.document.body).append("svg").style({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            margin: 0,
                            padding: 0,
                            border: "none"
                        }, "important");
                        var ctm = svg.node().getScreenCTM();
                        bug44083 = !(ctm.f || ctm.e), svg.remove()
                    }
                }
                return bug44083 ? (point.x = event.pageX, point.y = event.pageY) : (point.x = event.clientX, point.y = event.clientY), point = point.matrixTransform(node.getScreenCTM().inverse()), [point.x, point.y]
            }
            var rect = node.getBoundingClientRect();
            return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop]
        }

        function mouse(node, event) {
            return null == event && (event = sourceEvent()), event.changedTouches && (event = event.changedTouches[0]), point(node, event)
        }

        function selectAll(selector) {
            return "string" == typeof selector ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([selector], root)
        }

        function touch(node, touches, identifier) {
            arguments.length < 3 && (identifier = touches, touches = sourceEvent().changedTouches);
            for (var touch, i = 0, n = touches ? touches.length : 0; n > i; ++i)
                if ((touch = touches[i]).identifier === identifier) return point(node, touch);
            return null
        }

        function touches(node, touches) {
            null == touches && (touches = sourceEvent().touches);
            for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); n > i; ++i) points[i] = point(node, touches[i]);
            return points;
        }
        var xhtml = "http://www.w3.org/1999/xhtml",
            namespaces = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: xhtml,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            },
            matcher = function (selector) {
                return function () {
                    return this.matches(selector)
                }
            };
        if ("undefined" != typeof document) {
            var element = document.documentElement;
            if (!element.matches) {
                var vendorMatches = element.webkitMatchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector;
                matcher = function (selector) {
                    return function () {
                        return vendorMatches.call(this, selector)
                    }
                }
            }
        }
        var matcher$1 = matcher,
            filterEvents = {};
        if (exports.event = null, "undefined" != typeof document) {
            var element$1 = document.documentElement;
            "onmouseenter" in element$1 || (filterEvents = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            })
        }
        var keyPrefix = "$";
        EnterNode.prototype = {
            constructor: EnterNode,
            appendChild: function (child) {
                return this._parent.insertBefore(child, this._next)
            },
            insertBefore: function (child, next) {
                return this._parent.insertBefore(child, next)
            },
            querySelector: function (selector) {
                return this._parent.querySelector(selector)
            },
            querySelectorAll: function (selector) {
                return this._parent.querySelectorAll(selector)
            }
        }, ClassList.prototype = {
            add: function (name) {
                var i = this._names.indexOf(name);
                0 > i && (this._names.push(name), this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function (name) {
                var i = this._names.indexOf(name);
                i >= 0 && (this._names.splice(i, 1), this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function (name) {
                return this._names.indexOf(name) >= 0
            }
        };
        var root = [null];
        Selection.prototype = selection.prototype = {
            constructor: Selection,
            select: selection_select,
            selectAll: selection_selectAll,
            filter: selection_filter,
            data: selection_data,
            enter: selection_enter,
            exit: selection_exit,
            merge: selection_merge,
            order: selection_order,
            sort: selection_sort,
            call: selection_call,
            nodes: selection_nodes,
            node: selection_node,
            size: selection_size,
            empty: selection_empty,
            each: selection_each,
            attr: selection_attr,
            style: selection_style,
            property: selection_property,
            classed: selection_classed,
            text: selection_text,
            html: selection_html,
            raise: selection_raise,
            lower: selection_lower,
            append: selection_append,
            remove: selection_remove,
            datum: selection_datum,
            on: selection_on,
            dispatch: selection_dispatch
        };
        var bug44083 = "undefined" != typeof navigator && /WebKit/.test(navigator.userAgent) ? -1 : 0,
            version = "0.7.0";
        exports.version = version, exports.creator = creator, exports.matcher = matcher$1, exports.mouse = mouse, exports.namespace = namespace, exports.namespaces = namespaces, exports.select = select, exports.selectAll = selectAll, exports.selection = selection, exports.selector = selector, exports.selectorAll = selectorAll, exports.touch = touch, exports.touches = touches, exports.window = defaultView
    })
}, function (module, exports, __webpack_require__) {
    var Element = __webpack_require__(20),
        Window = __webpack_require__(32),
        ReactFauxDOM = {
            Element: Element,
            defaultView: Window,
            createElement: function (nodeName) {
                return new Element(nodeName)
            },
            createElementNS: function (namespace, nodeName) {
                return this.createElement(nodeName)
            },
            compareDocumentPosition: function () {
                return 8
            }
        };
    Element.prototype.ownerDocument = ReactFauxDOM, module.exports = ReactFauxDOM
}, function (module, exports, __webpack_require__) {
    function Element(nodeName, parentNode) {
        this.nodeName = nodeName, this.parentNode = parentNode, this.childNodes = [], this.eventListeners = {}, this.text = "";
        var props = this.props = {
            style: {
                setProperty: function (name, value) {
                    props.style[styleCamelCase(name)] = value
                },
                getProperty: function (name) {
                    return props.style[styleCamelCase(name)]
                },
                removeProperty: function (name) {
                    delete props.style[styleCamelCase(name)]
                }
            }
        };
        this.style = props.style
    }
    var React = __webpack_require__(2),
        styleAttr = __webpack_require__(21),
        querySelectorAll = __webpack_require__(22),
        camelCase = __webpack_require__(26),
        isString = __webpack_require__(27),
        isUndefined = __webpack_require__(28),
        assign = __webpack_require__(29),
        mapValues = __webpack_require__(30),
        styleCamelCase = __webpack_require__(31);
    Element.prototype.nodeType = 1, Element.prototype.eventNameMappings = {
        blur: "onBlur",
        change: "onChange",
        click: "onClick",
        contextmenu: "onContextMenu",
        copy: "onCopy",
        cut: "onCut",
        doubleclick: "onDoubleClick",
        drag: "onDrag",
        dragend: "onDragEnd",
        dragenter: "onDragEnter",
        dragexit: "onDragExit",
        dragleave: "onDragLeave",
        dragover: "onDragOver",
        dragstart: "onDragStart",
        drop: "onDrop",
        error: "onError",
        focus: "onFocus",
        input: "onInput",
        keydown: "onKeyDown",
        keypress: "onKeyPress",
        keyup: "onKeyUp",
        load: "onLoad",
        mousedown: "onMouseDown",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave",
        mousemove: "onMouseMove",
        mouseout: "onMouseOut",
        mouseover: "onMouseOver",
        mouseup: "onMouseUp",
        paste: "onPaste",
        scroll: "onScroll",
        submit: "onSubmit",
        touchcancel: "onTouchCancel",
        touchend: "onTouchEnd",
        touchmove: "onTouchMove",
        touchstart: "onTouchStart",
        wheel: "onWheel"
    }, Element.prototype.skipNameTransformationExpressions = [/^data-/, /^aria-/], Element.prototype.attributeNameMappings = {
        "class": "className"
    }, Element.prototype.attributeToPropName = function (name) {
        var skipTransformMatches = this.skipNameTransformationExpressions.map(function (expr) {
            return expr.test(name)
        });
        return skipTransformMatches.some(Boolean) ? name : this.attributeNameMappings[name] || camelCase(name)
    }, Element.prototype.setAttribute = function (name, value) {
        if ("style" === name && isString(value)) {
            var styles = styleAttr.parse(value);
            for (var key in styles) this.style.setProperty(key, styles[key])
        } else this.props[this.attributeToPropName(name)] = value
    }, Element.prototype.getAttribute = function (name) {
        return this.props[this.attributeToPropName(name)]
    }, Element.prototype.getAttributeNode = function (name) {
        var value = this.getAttribute(name);
        return isUndefined(value) ? void 0 : {
            value: value,
            specified: !0
        }
    }, Element.prototype.removeAttribute = function (name) {
        delete this.props[this.attributeToPropName(name)]
    }, Element.prototype.eventToPropName = function (name) {
        return this.eventNameMappings[name] || name
    }, Element.prototype.addEventListener = function (name, fn) {
        var prop = this.eventToPropName(name);
        this.eventListeners[prop] = this.eventListeners[prop] || [], this.eventListeners[prop].push(fn)
    }, Element.prototype.removeEventListener = function (name, fn) {
        var listeners = this.eventListeners[this.eventToPropName(name)];
        if (listeners) {
            var match = listeners.indexOf(fn); - 1 !== match && listeners.splice(match, 1)
        }
    }, Element.prototype.appendChild = function (el) {
        return el.parentNode = this, this.childNodes.push(el), el
    }, Element.prototype.insertBefore = function (el, before) {
        var index = this.childNodes.indexOf(before);
        return el.parentNode = this, -1 !== index ? this.childNodes.splice(index, 0, el) : this.childNodes.push(el), el
    }, Element.prototype.removeChild = function (child) {
        var target = this.childNodes.indexOf(child);
        this.childNodes.splice(target, 1)
    }, Element.prototype.querySelector = function () {
        return this.querySelectorAll.apply(this, arguments)[0] || null
    }, Element.prototype.querySelectorAll = function (selector) {
        if (!selector) throw new Error("Not enough arguments");
        return querySelectorAll(selector, this)
    }, Element.prototype.getElementsByTagName = function (nodeName) {
        var children = this.children;
        if (0 === children.length) return [];
        var matches;
        matches = "*" !== nodeName ? children.filter(function (el) {
            return el.nodeName === nodeName
        }) : children;
        var childMatches = children.map(function (el) {
            return el.getElementsByTagName(nodeName)
        });
        return matches.concat.apply(matches, childMatches)
    }, Element.prototype.getElementById = function (id) {
        var children = this.children;
        if (0 === children.length) return null;
        var match = children.filter(function (el) {
            return el.getAttribute("id") === id
        })[0];
        if (match) return match;
        var childMatches = children.map(function (el) {
            return el.getElementById(id)
        });
        return childMatches.filter(function (match) {
            return null !== match
        })[0] || null
    }, Element.prototype.toReact = function (index) {
        function uniqueKey() {
            return "faux-dom-" + index
        }
        index = index || 0;
        var props = assign({}, this.props);
        props.style = assign({}, props.style);
        var originalElement = this;
        return isUndefined(props.key) && (props.key = uniqueKey()), delete props.style.setProperty, delete props.style.getProperty, delete props.style.removeProperty, assign(props, mapValues(this.eventListeners, function (listeners) {
            return function (syntheticEvent) {
                var event;
                syntheticEvent && (event = syntheticEvent.nativeEvent, event.syntheticEvent = syntheticEvent), mapValues(listeners, function (listener) {
                    listener.call(originalElement, event)
                })
            }
        })), React.createElement(this.nodeName, props, this.text || this.children.map(function (el, i) {
            return el instanceof Element ? el.toReact(i) : el
        }))
    }, Object.defineProperties(Element.prototype, {
        nextSibling: {
            get: function () {
                var siblings = this.parentNode.children,
                    me = siblings.indexOf(this);
                return siblings[me + 1]
            }
        },
        previousSibling: {
            get: function () {
                var siblings = this.parentNode.children,
                    me = siblings.indexOf(this);
                return siblings[me - 1]
            }
        },
        innerHTML: {
            get: function () {
                return this.text
            },
            set: function (text) {
                this.text = text
            }
        },
        textContent: {
            get: function () {
                return this.text
            },
            set: function (text) {
                this.text = text
            }
        },
        children: {
            get: function () {
                return this.childNodes.filter(function (el) {
                    return el.nodeType ? 1 === el.nodeType : !0
                })
            }
        }
    });
    var namespaceMethods = ["setAttribute", "getAttribute", "getAttributeNode", "removeAttribute", "getElementsByTagName", "getElementById"];
    namespaceMethods.forEach(function (name) {
        var fn = Element.prototype[name];
        Element.prototype[name + "NS"] = function () {
            return fn.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }), module.exports = Element
}, function (module, exports) {
    function parse(raw) {
        var trim = function (s) {
                return s.trim()
            },
            obj = {};
        return getKeyValueChunks(raw).map(trim).filter(Boolean).forEach(function (item) {
            var pos = item.indexOf(":"),
                key = item.substr(0, pos).trim(),
                val = item.substr(pos + 1).trim();
            obj[key] = val
        }), obj
    }

    function getKeyValueChunks(raw) {
        for (var nextSplit, chunks = [], offset = 0, sep = ";", hasUnclosedUrl = /url\([^\)]+$/, chunk = ""; offset < raw.length;) nextSplit = raw.indexOf(sep, offset), -1 === nextSplit && (nextSplit = raw.length), chunk += raw.substring(offset, nextSplit), hasUnclosedUrl.test(chunk) ? (chunk += ";", offset = nextSplit + 1) : (chunks.push(chunk), chunk = "", offset = nextSplit + 1);
        return chunks
    }

    function stringify(obj) {
        return Object.keys(obj).map(function (key) {
            return key + ":" + obj[key]
        }).join(";")
    }

    function normalize(str) {
        return stringify(parse(str))
    }
    module.exports.parse = parse, module.exports.stringify = stringify, module.exports.normalize = normalize
}, function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(23)
}, function (module, exports, __webpack_require__) {
    function unEscape(str) {
        return str.replace(unescape, unescapeFn)
    }

    function resetStatus() {
        subMatchesCache = {}
    }

    function dir(el, direction) {
        do el = el[direction]; while (el && 1 !== el.nodeType);
        return el
    }

    function getAb(param) {
        var match, a = 0,
            b = 0;
        return "number" == typeof param ? b = param : "odd" === param ? (a = 2, b = 1) : "even" === param ? (a = 2, b = 0) : (match = param.replace(/\s/g, "").match(aNPlusB)) && (match[1] ? (a = parseInt(match[2], 10), isNaN(a) && (a = "-" === match[2] ? -1 : 1)) : a = 0, b = parseInt(match[3], 10) || 0), {
            a: a,
            b: b
        }
    }

    function matchIndexByAb(index, a, b, eq) {
        if (0 === a) {
            if (index === b) return eq
        } else if ((index - b) / a >= 0 && (index - b) % a === 0 && eq) return 1
    }

    function isXML(elem) {
        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
        return documentElement ? "html" !== documentElement.nodeName.toLowerCase() : !1
    }

    function matches(str, seeds) {
        return select(str, null, seeds)
    }

    function singleMatch(el, match) {
        if (!match) return !0;
        if (!el) return !1;
        if (9 === el.nodeType) return !1;
        var matchSuffixLen, matchSuffixIndex, matched = 1,
            matchSuffix = match.suffix;
        if ("tag" === match.t && (matched &= matchExpr.tag(el, match.value)), matched && matchSuffix)
            for (matchSuffixLen = matchSuffix.length, matchSuffixIndex = 0; matched && matchSuffixLen > matchSuffixIndex; matchSuffixIndex++) {
                var singleMatchSuffix = matchSuffix[matchSuffixIndex],
                    singleMatchSuffixType = singleMatchSuffix.t;
                matchExpr[singleMatchSuffixType] && (matched &= matchExpr[singleMatchSuffixType](el, singleMatchSuffix.value))
            }
        return matched
    }

    function matchImmediate(el, match) {
        var relativeOp, matched = 1,
            startEl = el,
            startMatch = match;
        do {
            if (matched &= singleMatch(el, match), !matched) return relativeOp = relativeExpr[match.nextCombinator], relativeOp.immediate ? {
                el: dir(startEl, relativeExpr[startMatch.nextCombinator].dir),
                match: startMatch
            } : {
                el: el && dir(el, relativeOp.dir),
                match: match
            };
            if (match = match && match.prev, !match) return !0;
            if (relativeOp = relativeExpr[match.nextCombinator], el = dir(el, relativeOp.dir), !relativeOp.immediate) return {
                el: el,
                match: match
            }
        } while (el);
        return {
            el: dir(startEl, relativeExpr[startMatch.nextCombinator].dir),
            match: startMatch
        }
    }

    function findFixedMatchFromHead(el, head) {
        var relativeOp, cur = head;
        do {
            if (!singleMatch(el, cur)) return null;
            if (cur = cur.prev, !cur) return !0;
            relativeOp = relativeExpr[cur.nextCombinator], el = dir(el, relativeOp.dir)
        } while (el && relativeOp.immediate);
        return el ? {
            el: el,
            match: cur
        } : null
    }

    function genId(el) {
        var selectorId;
        return isContextXML ? (selectorId = el.getAttribute(EXPANDO_SELECTOR_KEY)) || el.setAttribute(EXPANDO_SELECTOR_KEY, selectorId = +new Date + "_" + ++uuid) : (selectorId = el[EXPANDO_SELECTOR_KEY]) || (selectorId = el[EXPANDO_SELECTOR_KEY] = +new Date + "_" + ++uuid), selectorId
    }

    function matchSub(el, match) {
        var matchKey, selectorId = genId(el);
        return matchKey = selectorId + "_" + (match.order || 0), matchKey in subMatchesCache ? subMatchesCache[matchKey] : (subMatchesCache[matchKey] = matchSubInternal(el, match), subMatchesCache[matchKey])
    }

    function matchSubInternal(el, match) {
        var matchImmediateRet = matchImmediate(el, match);
        if (matchImmediateRet === !0) return !0;
        for (el = matchImmediateRet.el, match = matchImmediateRet.match; el;) {
            if (matchSub(el, match)) return !0;
            el = dir(el, relativeExpr[match.nextCombinator].dir)
        }
        return !1
    }

    function select(str, context, seeds) {
        caches[str] || (caches[str] = parser.parse(str));
        var contextDocument, group, selector = caches[str],
            groupIndex = 0,
            groupLen = selector.length,
            ret = [];
        for (seeds && (context = context || seeds[0].ownerDocument), contextDocument = context && context.ownerDocument || "undefined" != typeof document && document, context && 9 === context.nodeType && !contextDocument && (contextDocument = context), context = context || contextDocument, isContextXML = isXML(context); groupLen > groupIndex; groupIndex++) {
            resetStatus(), group = selector[groupIndex];
            var suffixIndex, suffixLen, seedsIndex, seedsLen, suffix = group.suffix,
                mySeeds = seeds,
                id = null;
            if (!mySeeds) {
                if (suffix && !isContextXML)
                    for (suffixIndex = 0, suffixLen = suffix.length; suffixLen > suffixIndex; suffixIndex++) {
                        var singleSuffix = suffix[suffixIndex];
                        if ("id" === singleSuffix.t) {
                            id = singleSuffix.value;
                            break
                        }
                    }
                if (id) {
                    var doesNotHasById = !context.getElementById,
                        contextInDom = util.contains(contextDocument, context),
                        tmp = doesNotHasById ? contextInDom ? contextDocument.getElementById(id) : null : context.getElementById(id);
                    if (!tmp && doesNotHasById || tmp && getAttr(tmp, "id") !== id) {
                        for (var tmps = util.getElementsByTagName("*", context), tmpLen = tmps.length, tmpI = 0; tmpLen > tmpI; tmpI++)
                            if (tmp = tmps[tmpI], getAttr(tmp, "id") === id) {
                                mySeeds = [tmp];
                                break
                            }
                        tmpI === tmpLen && (mySeeds = [])
                    } else contextInDom && tmp && context !== contextDocument && (tmp = util.contains(context, tmp) ? tmp : null), mySeeds = tmp ? [tmp] : []
                } else mySeeds = util.getElementsByTagName(group.value || "*", context)
            }
            if (seedsIndex = 0, seedsLen = mySeeds.length)
                for (; seedsLen > seedsIndex; seedsIndex++) {
                    var seed = mySeeds[seedsIndex],
                        matchHead = findFixedMatchFromHead(seed, group);
                    matchHead === !0 ? ret.push(seed) : matchHead && matchSub(matchHead.el, matchHead.match) && ret.push(seed)
                }
        }
        return groupLen > 1 && (ret = util.unique(ret)), ret
    }
    var isContextXML, matchExpr, util = __webpack_require__(24),
        parser = __webpack_require__(25),
        EXPANDO_SELECTOR_KEY = "_ks_data_selector_id_",
        caches = {},
        uuid = 0,
        subMatchesCache = {},
        getAttr = function (el, name) {
            return isContextXML ? util.getSimpleAttr(el, name) : util.attr(el, name)
        },
        hasSingleClass = util.hasSingleClass,
        isTag = util.isTag,
        aNPlusB = /^(([+-]?(?:\d+)?)?n)?([+-]?\d+)?$/,
        unescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        unescapeFn = function (_, escaped) {
            var high = "0x" + escaped - 65536;
            return isNaN(high) ? escaped : 0 > high ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320)
        },
        pseudoFnExpr = {
            "nth-child": function (el, param) {
                var ab = getAb(param),
                    a = ab.a,
                    b = ab.b;
                if (0 === a && 0 === b) return 0;
                var index = 0,
                    parent = el.parentNode;
                if (parent)
                    for (var child, ret, childNodes = parent.childNodes, count = 0, len = childNodes.length; len > count; count++)
                        if (child = childNodes[count], 1 === child.nodeType && (index++, ret = matchIndexByAb(index, a, b, child === el), void 0 !== ret)) return ret;
                return 0
            },
            "nth-last-child": function (el, param) {
                var ab = getAb(param),
                    a = ab.a,
                    b = ab.b;
                if (0 === a && 0 === b) return 0;
                var index = 0,
                    parent = el.parentNode;
                if (parent)
                    for (var child, ret, childNodes = parent.childNodes, len = childNodes.length, count = len - 1; count >= 0; count--)
                        if (child = childNodes[count], 1 === child.nodeType && (index++, ret = matchIndexByAb(index, a, b, child === el), void 0 !== ret)) return ret;
                return 0
            },
            "nth-of-type": function (el, param) {
                var ab = getAb(param),
                    a = ab.a,
                    b = ab.b;
                if (0 === a && 0 === b) return 0;
                var index = 0,
                    parent = el.parentNode;
                if (parent)
                    for (var child, ret, childNodes = parent.childNodes, elType = el.tagName, count = 0, len = childNodes.length; len > count; count++)
                        if (child = childNodes[count], child.tagName === elType && (index++, ret = matchIndexByAb(index, a, b, child === el), void 0 !== ret)) return ret;
                return 0
            },
            "nth-last-of-type": function (el, param) {
                var ab = getAb(param),
                    a = ab.a,
                    b = ab.b;
                if (0 === a && 0 === b) return 0;
                var index = 0,
                    parent = el.parentNode;
                if (parent)
                    for (var child, ret, childNodes = parent.childNodes, len = childNodes.length, elType = el.tagName, count = len - 1; count >= 0; count--)
                        if (child = childNodes[count], child.tagName === elType && (index++, ret = matchIndexByAb(index, a, b, child === el), void 0 !== ret)) return ret;
                return 0
            },
            lang: function (el, lang) {
                var elLang;
                lang = unEscape(lang.toLowerCase());
                do
                    if (elLang = isContextXML ? el.getAttribute("xml:lang") || el.getAttribute("lang") : el.lang) return elLang = elLang.toLowerCase(), elLang === lang || 0 === elLang.indexOf(lang + "-"); while ((el = el.parentNode) && 1 === el.nodeType);
                return !1
            },
            not: function (el, negationArg) {
                return !matchExpr[negationArg.t](el, negationArg.value)
            }
        },
        pseudoIdentExpr = {
            empty: function (el) {
                for (var child, nodeType, childNodes = el.childNodes, index = 0, len = childNodes.length - 1; len > index; index++)
                    if (child = childNodes[index], nodeType = child.nodeType, 1 === nodeType || 3 === nodeType || 4 === nodeType || 5 === nodeType) return 0;
                return 1
            },
            root: function (el) {
                return 9 === el.nodeType ? !0 : el.ownerDocument && el === el.ownerDocument.documentElement
            },
            "first-child": function (el) {
                return pseudoFnExpr["nth-child"](el, 1)
            },
            "last-child": function (el) {
                return pseudoFnExpr["nth-last-child"](el, 1)
            },
            "first-of-type": function (el) {
                return pseudoFnExpr["nth-of-type"](el, 1)
            },
            "last-of-type": function (el) {
                return pseudoFnExpr["nth-last-of-type"](el, 1)
            },
            "only-child": function (el) {
                return pseudoIdentExpr["first-child"](el) && pseudoIdentExpr["last-child"](el)
            },
            "only-of-type": function (el) {
                return pseudoIdentExpr["first-of-type"](el) && pseudoIdentExpr["last-of-type"](el)
            },
            focus: function (el) {
                var doc = el.ownerDocument;
                return doc && el === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(el.type || el.href || el.tabIndex >= 0)
            },
            target: function (el) {
                var hash = location.hash;
                return hash && hash.slice(1) === getAttr(el, "id")
            },
            enabled: function (el) {
                return !el.disabled
            },
            disabled: function (el) {
                return el.disabled
            },
            checked: function (el) {
                var nodeName = el.nodeName.toLowerCase();
                return "input" === nodeName && el.checked || "option" === nodeName && el.selected
            }
        },
        attributeExpr = {
            "~=": function (elValue, value) {
                return !value || value.indexOf(" ") > -1 ? 0 : -1 !== (" " + elValue + " ").indexOf(" " + value + " ")
            },
            "|=": function (elValue, value) {
                return -1 !== (" " + elValue).indexOf(" " + value + "-")
            },
            "^=": function (elValue, value) {
                return value && util.startsWith(elValue, value)
            },
            "$=": function (elValue, value) {
                return value && util.endsWith(elValue, value)
            },
            "*=": function (elValue, value) {
                return value && -1 !== elValue.indexOf(value)
            },
            "=": function (elValue, value) {
                return elValue === value
            }
        },
        relativeExpr = {
            ">": {
                dir: "parentNode",
                immediate: 1
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                immediate: 1
            },
            "~": {
                dir: "previousSibling"
            }
        };
    matchExpr = {
        tag: isTag,
        cls: hasSingleClass,
        id: function (el, value) {
            return getAttr(el, "id") === value
        },
        attrib: function (el, value) {
            var name = value.ident;
            isContextXML || (name = name.toLowerCase());
            var elValue = getAttr(el, name),
                match = value.match;
            if (!match && void 0 !== elValue) return 1;
            if (match) {
                if (void 0 === elValue) return 0;
                var matchFn = attributeExpr[match];
                if (matchFn) return matchFn(elValue + "", value.value + "")
            }
            return 0
        },
        pseudo: function (el, value) {
            var fn, fnStr, ident;
            if (fnStr = value.fn) {
                if (!(fn = pseudoFnExpr[fnStr])) throw new SyntaxError("Syntax error: not support pseudo: " + fnStr);
                return fn(el, value.param)
            }
            if (ident = value.ident) {
                if (!pseudoIdentExpr[ident]) throw new SyntaxError("Syntax error: not support pseudo: " + ident);
                return pseudoIdentExpr[ident](el)
            }
            return 0
        }
    }, parser.lexer.yy = {
        trim: util.trim,
        unEscape: unEscape,
        unEscapeStr: function (str) {
            return this.unEscape(str.slice(1, -1))
        }
    }, module.exports = select, select.parse = function (str) {
        return parser.parse(str)
    }, select.matches = matches, select.util = util, select.version = "@VERSION@"
}, function (module, exports) {
    function numberify(s) {
        var c = 0;
        return parseFloat(s.replace(/\./g, function () {
            return 0 === c++ ? "." : ""
        }))
    }

    function ieVersion() {
        var m, v;
        return (m = ua.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (v = m[1] || m[2]) ? doc.documentMode || numberify(v) : void 0
    }

    function mix(s, t) {
        for (var p in t) s[p] = t[p]
    }

    function each(arr, fn) {
        for (var i = 0, l = arr.length; l > i && fn(arr[i], i) !== !1; i++);
    }
    var propFix, R_BOOLEAN = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        R_FOCUSABLE = /^(?:button|input|object|select|textarea)$/i,
        R_CLICKABLE = /^a(?:rea)?$/i,
        R_INVALID_CHAR = /:|^on/,
        attrFix = {},
        attrHooks = {
            tabindex: {
                get: function (el) {
                    var attributeNode = el.getAttributeNode("tabindex");
                    return attributeNode && attributeNode.specified ? parseInt(attributeNode.value, 10) : R_FOCUSABLE.test(el.nodeName) || R_CLICKABLE.test(el.nodeName) && el.href ? 0 : void 0
                }
            }
        },
        boolHook = {
            get: function (elem, name) {
                return elem[propFix[name] || name] ? name.toLowerCase() : void 0
            }
        },
        attrNodeHook = {};
    attrHooks.style = {
        get: function (el) {
            return el.style.cssText
        }
    }, propFix = {
        hidefocus: "hideFocus",
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    };
    var ua = "undefined" != typeof navigator ? navigator.userAgent : "",
        doc = "undefined" != typeof document ? document : {},
        ie = ieVersion();
    if (ie && 8 > ie && (attrHooks.style.set = function (el, val) {
            el.style.cssText = val
        }, mix(attrNodeHook, {
            get: function (elem, name) {
                var ret = elem.getAttributeNode(name);
                return ret && (ret.specified || ret.nodeValue) ? ret.nodeValue : void 0
            }
        }), mix(attrFix, propFix), attrHooks.tabIndex = attrHooks.tabindex, each(["href", "src", "width", "height", "colSpan", "rowSpan"], function (name) {
            attrHooks[name] = {
                get: function (elem) {
                    var ret = elem.getAttribute(name, 2);
                    return null === ret ? void 0 : ret
                }
            }
        }), attrHooks.placeholder = {
            get: function (elem, name) {
                return elem[name] || attrNodeHook.get(elem, name)
            }
        }), ie) {
        var hrefFix = attrHooks.href = attrHooks.href || {};
        hrefFix.set = function (el, val, name) {
            var b, childNodes = el.childNodes,
                len = childNodes.length,
                allText = len > 0;
            for (len -= 1; len >= 0; len--) 3 !== childNodes[len].nodeType && (allText = 0);
            allText && (b = el.ownerDocument.createElement("b"), b.style.display = "none", el.appendChild(b)), el.setAttribute(name, "" + val), b && el.removeChild(b)
        }
    }
    var getElementsByTagName, RE_TRIM = /^[\s\xa0]+|[\s\xa0]+$/g,
        trim = String.prototype.trim,
        SPACE = " ";
    if (getElementsByTagName = function (name, context) {
            return context.getElementsByTagName(name)
        }, doc.createElement) {
        var div = doc.createElement("div");
        div.appendChild(document.createComment("")), div.getElementsByTagName("*").length && (getElementsByTagName = function (name, context) {
            var nodes = context.getElementsByTagName(name),
                needsFilter = "*" === name;
            if (needsFilter || "number" != typeof nodes.length) {
                for (var el, ret = [], i = 0; el = nodes[i++];) needsFilter && 1 !== el.nodeType || ret.push(el);
                return ret
            }
            return nodes
        })
    }
    var compareNodeOrder = "sourceIndex" in (doc && doc.documentElement || {}) ? function (a, b) {
            return a.sourceIndex - b.sourceIndex
        } : function (a, b) {
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            var bit = 4 & a.compareDocumentPosition(b);
            return bit ? -1 : 1
        },
        util = module.exports = {
            ie: ie,
            unique: function () {
                function sortOrder(a, b) {
                    return a === b ? (hasDuplicate = !0, 0) : compareNodeOrder(a, b)
                }
                var hasDuplicate, baseHasDuplicate = !0;
                return [0, 0].sort(function () {
                        return baseHasDuplicate = !1, 0
                    }),
                    function (elements) {
                        if (hasDuplicate = baseHasDuplicate, elements.sort(sortOrder), hasDuplicate)
                            for (var i = 1, len = elements.length; len > i;) elements[i] === elements[i - 1] ? (elements.splice(i, 1), --len) : i++;
                        return elements
                    }
            }(),
            getElementsByTagName: getElementsByTagName,
            getSimpleAttr: function (el, name) {
                var ret = el && el.getAttributeNode(name);
                return ret && ret.specified ? "value" in ret ? ret.value : ret.nodeValue : void 0
            },
            contains: ie ? function (a, b) {
                return 9 === a.nodeType && (a = a.documentElement), b = b.parentNode, a === b ? !0 : b && 1 === b.nodeType ? a.contains && a.contains(b) : !1
            } : function (a, b) {
                return !!(16 & a.compareDocumentPosition(b))
            },
            isTag: function (el, value) {
                return "*" === value || el.nodeName.toLowerCase() === value.toLowerCase()
            },
            hasSingleClass: function (el, cls) {
                var className = el && util.getSimpleAttr(el, "class");
                return className && (className = className.replace(/[\r\t\n]/g, SPACE)) && (SPACE + className + SPACE).indexOf(SPACE + cls + SPACE) > -1
            },
            startsWith: function (str, prefix) {
                return 0 === str.lastIndexOf(prefix, 0)
            },
            endsWith: function (str, suffix) {
                var ind = str.length - suffix.length;
                return ind >= 0 && str.indexOf(suffix, ind) === ind
            },
            trim: trim ? function (str) {
                return null == str ? "" : trim.call(str)
            } : function (str) {
                return null == str ? "" : (str + "").replace(RE_TRIM, "")
            },
            attr: function (el, name) {
                var attrNormalizer, ret;
                if (name = name.toLowerCase(), name = attrFix[name] || name, attrNormalizer = R_BOOLEAN.test(name) ? boolHook : R_INVALID_CHAR.test(name) ? attrNodeHook : attrHooks[name], el && 1 === el.nodeType) {
                    if ("form" === el.nodeName.toLowerCase() && (attrNormalizer = attrNodeHook), attrNormalizer && attrNormalizer.get) return attrNormalizer.get(el, name);
                    if (ret = el.getAttribute(name), "" === ret) {
                        var attrNode = el.getAttributeNode(name);
                        if (!attrNode || !attrNode.specified) return
                    }
                    return null === ret ? void 0 : ret
                }
            }
        }
}, function (module, exports, __webpack_require__) {
    var parser = function (undefined) {
        function mix(to, from) {
            for (var f in from) to[f] = from[f]
        }

        function isArray(obj) {
            return "[object Array]" === Object.prototype.toString.call(obj)
        }

        function each(object, fn, context) {
            if (object) {
                var key, val, length, i = 0;
                if (context = context || null, isArray(object))
                    for (length = object.length, val = object[0]; length > i && fn.call(context, val, i, object) !== !1; val = object[++i]);
                else
                    for (key in object)
                        if (fn.call(context, object[key], key, object) === !1) break
            }
        }

        function inArray(item, arr) {
            for (var i = 0, l = arr.length; l > i; i++)
                if (arr[i] === item) return !0;
            return !1
        }
        var parser = {},
            GrammarConst = {
                SHIFT_TYPE: 1,
                REDUCE_TYPE: 2,
                ACCEPT_TYPE: 0,
                TYPE_INDEX: 0,
                PRODUCTION_INDEX: 1,
                TO_INDEX: 2
            },
            Lexer = function (cfg) {
                var self = this;
                self.rules = [], mix(self, cfg), self.resetInput(self.input)
            };
        Lexer.prototype = {
            resetInput: function (input) {
                mix(this, {
                    input: input,
                    matched: "",
                    stateStack: [Lexer.STATIC.INITIAL],
                    match: "",
                    text: "",
                    firstLine: 1,
                    lineNumber: 1,
                    lastLine: 1,
                    firstColumn: 1,
                    lastColumn: 1
                })
            },
            getCurrentRules: function () {
                var self = this,
                    currentState = self.stateStack[self.stateStack.length - 1],
                    rules = [];
                return self.mapState && (currentState = self.mapState(currentState)), each(self.rules, function (r) {
                    var state = r.state || r[3];
                    state ? inArray(currentState, state) && rules.push(r) : currentState === Lexer.STATIC.INITIAL && rules.push(r)
                }), rules
            },
            pushState: function (state) {
                this.stateStack.push(state)
            },
            popState: function (num) {
                num = num || 1;
                for (var ret; num--;) ret = this.stateStack.pop();
                return ret
            },
            showDebugInfo: function () {
                var self = this,
                    DEBUG_CONTEXT_LIMIT = Lexer.STATIC.DEBUG_CONTEXT_LIMIT,
                    matched = self.matched,
                    match = self.match,
                    input = self.input;
                matched = matched.slice(0, matched.length - match.length);
                var past = (matched.length > DEBUG_CONTEXT_LIMIT ? "..." : "") + matched.slice(0 - DEBUG_CONTEXT_LIMIT).replace(/\n/, " "),
                    next = match + input;
                return next = next.slice(0, DEBUG_CONTEXT_LIMIT) + (next.length > DEBUG_CONTEXT_LIMIT ? "..." : ""), past + next + "\n" + new Array(past.length + 1).join("-") + "^"
            },
            mapSymbol: function (t) {
                return this.symbolMap[t]
            },
            mapReverseSymbol: function (rs) {
                var i, self = this,
                    symbolMap = self.symbolMap,
                    reverseSymbolMap = self.reverseSymbolMap;
                if (!reverseSymbolMap && symbolMap) {
                    reverseSymbolMap = self.reverseSymbolMap = {};
                    for (i in symbolMap) reverseSymbolMap[symbolMap[i]] = i
                }
                return reverseSymbolMap ? reverseSymbolMap[rs] : rs
            },
            lex: function () {
                var i, rule, m, ret, lines, self = this,
                    input = self.input,
                    rules = self.getCurrentRules();
                if (self.match = self.text = "", !input) return self.mapSymbol(Lexer.STATIC.END_TAG);
                for (i = 0; i < rules.length; i++) {
                    rule = rules[i];
                    var regexp = rule.regexp || rule[1],
                        token = rule.token || rule[0],
                        action = rule.action || rule[2] || undefined;
                    if (m = input.match(regexp)) {
                        lines = m[0].match(/\n.*/g), lines && (self.lineNumber += lines.length), mix(self, {
                            firstLine: self.lastLine,
                            lastLine: self.lineNumber + 1,
                            firstColumn: self.lastColumn,
                            lastColumn: lines ? lines[lines.length - 1].length - 1 : self.lastColumn + m[0].length
                        });
                        var match;
                        return match = self.match = m[0], self.matches = m, self.text = match, self.matched += match, ret = action && action.call(self), ret = ret === undefined ? token : self.mapSymbol(ret), input = input.slice(match.length), self.input = input, ret ? ret : self.lex()
                    }
                }
            }
        }, Lexer.STATIC = {
            INITIAL: "I",
            DEBUG_CONTEXT_LIMIT: 20,
            END_TAG: "$EOF"
        };
        var lexer = new Lexer({
            rules: [
                ["b", /^\[(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["c", /^(?:[\t\r\n\f\x20]*)\]/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["d", /^(?:[\t\r\n\f\x20]*)~=(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["e", /^(?:[\t\r\n\f\x20]*)\|=(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["f", /^(?:[\t\r\n\f\x20]*)\^=(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["g", /^(?:[\t\r\n\f\x20]*)\$=(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["h", /^(?:[\t\r\n\f\x20]*)\*=(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["i", /^(?:[\t\r\n\f\x20]*)\=(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["j", /^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)\(/, function () {
                    this.text = this.yy.trim(this.text).slice(0, -1), this.pushState("fn")
                }],
                ["k", /^[^\)]*/, function () {
                        this.popState()
                    },
                    ["fn"]
                ],
                ["l", /^(?:[\t\r\n\f\x20]*)\)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["m", /^:not\((?:[\t\r\n\f\x20]*)/i, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["n", /^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/, function () {
                    this.text = this.yy.unEscape(this.text)
                }],
                ["o", /^"(\\"|[^"])*"/, function () {
                    this.text = this.yy.unEscapeStr(this.text)
                }],
                ["o", /^'(\\'|[^'])*'/, function () {
                    this.text = this.yy.unEscapeStr(this.text)
                }],
                ["p", /^#(?:(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))+)/, function () {
                    this.text = this.yy.unEscape(this.text.slice(1))
                }],
                ["q", /^\.(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/, function () {
                    this.text = this.yy.unEscape(this.text.slice(1))
                }],
                ["r", /^(?:[\t\r\n\f\x20]*),(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["s", /^::?/, 0],
                ["t", /^(?:[\t\r\n\f\x20]*)\+(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["u", /^(?:[\t\r\n\f\x20]*)>(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["v", /^(?:[\t\r\n\f\x20]*)~(?:[\t\r\n\f\x20]*)/, function () {
                    this.text = this.yy.trim(this.text)
                }],
                ["w", /^\*/, 0],
                ["x", /^(?:[\t\r\n\f\x20]+)/, 0],
                ["y", /^./, 0]
            ]
        });
        return parser.lexer = lexer, lexer.symbolMap = {
            $EOF: "a",
            LEFT_BRACKET: "b",
            RIGHT_BRACKET: "c",
            INCLUDES: "d",
            DASH_MATCH: "e",
            PREFIX_MATCH: "f",
            SUFFIX_MATCH: "g",
            SUBSTRING_MATCH: "h",
            ALL_MATCH: "i",
            FUNCTION: "j",
            PARAMETER: "k",
            RIGHT_PARENTHESES: "l",
            NOT: "m",
            IDENT: "n",
            STRING: "o",
            HASH: "p",
            CLASS: "q",
            COMMA: "r",
            COLON: "s",
            PLUS: "t",
            GREATER: "u",
            TILDE: "v",
            UNIVERSAL: "w",
            S: "x",
            INVALID: "y",
            $START: "z",
            selectors_group: "aa",
            selector: "ab",
            simple_selector_sequence: "ac",
            combinator: "ad",
            type_selector: "ae",
            id_selector: "af",
            class_selector: "ag",
            attrib_match: "ah",
            attrib: "ai",
            attrib_val: "aj",
            pseudo: "ak",
            negation: "al",
            negation_arg: "am",
            suffix_selector: "an",
            suffix_selectors: "ao"
        }, parser.productions = [
            ["z", ["aa"]],
            ["aa", ["ab"], function () {
                return [this.$1]
            }],
            ["aa", ["aa", "r", "ab"], function () {
                this.$1.push(this.$3)
            }],
            ["ab", ["ac"]],
            ["ab", ["ab", "ad", "ac"], function () {
                this.$1.nextCombinator = this.$3.prevCombinator = this.$2;
                var order;
                return order = this.$1.order = this.$1.order || 0, this.$3.order = order + 1, this.$3.prev = this.$1, this.$1.next = this.$3, this.$3;
            }],
            ["ad", ["t"]],
            ["ad", ["u"]],
            ["ad", ["v"]],
            ["ad", ["x"], function () {
                return " "
            }],
            ["ae", ["n"], function () {
                return {
                    t: "tag",
                    value: this.$1
                }
            }],
            ["ae", ["w"], function () {
                return {
                    t: "tag",
                    value: this.$1
                }
            }],
            ["af", ["p"], function () {
                return {
                    t: "id",
                    value: this.$1
                }
            }],
            ["ag", ["q"], function () {
                return {
                    t: "cls",
                    value: this.$1
                }
            }],
            ["ah", ["f"]],
            ["ah", ["g"]],
            ["ah", ["h"]],
            ["ah", ["i"]],
            ["ah", ["d"]],
            ["ah", ["e"]],
            ["ai", ["b", "n", "c"], function () {
                return {
                    t: "attrib",
                    value: {
                        ident: this.$2
                    }
                }
            }],
            ["aj", ["n"]],
            ["aj", ["o"]],
            ["ai", ["b", "n", "ah", "aj", "c"], function () {
                return {
                    t: "attrib",
                    value: {
                        ident: this.$2,
                        match: this.$3,
                        value: this.$4
                    }
                }
            }],
            ["ak", ["s", "j", "k", "l"], function () {
                return {
                    t: "pseudo",
                    value: {
                        fn: this.$2.toLowerCase(),
                        param: this.$3
                    }
                }
            }],
            ["ak", ["s", "n"], function () {
                return {
                    t: "pseudo",
                    value: {
                        ident: this.$2.toLowerCase()
                    }
                }
            }],
            ["al", ["m", "am", "l"], function () {
                return {
                    t: "pseudo",
                    value: {
                        fn: "not",
                        param: this.$2
                    }
                }
            }],
            ["am", ["ae"]],
            ["am", ["af"]],
            ["am", ["ag"]],
            ["am", ["ai"]],
            ["am", ["ak"]],
            ["an", ["af"]],
            ["an", ["ag"]],
            ["an", ["ai"]],
            ["an", ["ak"]],
            ["an", ["al"]],
            ["ao", ["an"], function () {
                return [this.$1]
            }],
            ["ao", ["ao", "an"], function () {
                this.$1.push(this.$2)
            }],
            ["ac", ["ae"]],
            ["ac", ["ao"], function () {
                return {
                    suffix: this.$1
                }
            }],
            ["ac", ["ae", "ao"], function () {
                return {
                    t: "tag",
                    value: this.$1.value,
                    suffix: this.$2
                }
            }]
        ], parser.table = {
            gotos: {
                0: {
                    aa: 8,
                    ab: 9,
                    ae: 10,
                    af: 11,
                    ag: 12,
                    ai: 13,
                    ak: 14,
                    al: 15,
                    an: 16,
                    ao: 17,
                    ac: 18
                },
                2: {
                    ae: 20,
                    af: 21,
                    ag: 22,
                    ai: 23,
                    ak: 24,
                    am: 25
                },
                9: {
                    ad: 33
                },
                10: {
                    af: 11,
                    ag: 12,
                    ai: 13,
                    ak: 14,
                    al: 15,
                    an: 16,
                    ao: 34
                },
                17: {
                    af: 11,
                    ag: 12,
                    ai: 13,
                    ak: 14,
                    al: 15,
                    an: 35
                },
                19: {
                    ah: 43
                },
                28: {
                    ab: 46,
                    ae: 10,
                    af: 11,
                    ag: 12,
                    ai: 13,
                    ak: 14,
                    al: 15,
                    an: 16,
                    ao: 17,
                    ac: 18
                },
                33: {
                    ae: 10,
                    af: 11,
                    ag: 12,
                    ai: 13,
                    ak: 14,
                    al: 15,
                    an: 16,
                    ao: 17,
                    ac: 47
                },
                34: {
                    af: 11,
                    ag: 12,
                    ai: 13,
                    ak: 14,
                    al: 15,
                    an: 35
                },
                43: {
                    aj: 50
                },
                46: {
                    ad: 33
                }
            },
            action: {
                0: {
                    b: [1, undefined, 1],
                    m: [1, undefined, 2],
                    n: [1, undefined, 3],
                    p: [1, undefined, 4],
                    q: [1, undefined, 5],
                    s: [1, undefined, 6],
                    w: [1, undefined, 7]
                },
                1: {
                    n: [1, undefined, 19]
                },
                2: {
                    b: [1, undefined, 1],
                    n: [1, undefined, 3],
                    p: [1, undefined, 4],
                    q: [1, undefined, 5],
                    s: [1, undefined, 6],
                    w: [1, undefined, 7]
                },
                3: {
                    a: [2, 9],
                    r: [2, 9],
                    t: [2, 9],
                    u: [2, 9],
                    v: [2, 9],
                    x: [2, 9],
                    p: [2, 9],
                    q: [2, 9],
                    b: [2, 9],
                    s: [2, 9],
                    m: [2, 9],
                    l: [2, 9]
                },
                4: {
                    a: [2, 11],
                    r: [2, 11],
                    t: [2, 11],
                    u: [2, 11],
                    v: [2, 11],
                    x: [2, 11],
                    p: [2, 11],
                    q: [2, 11],
                    b: [2, 11],
                    s: [2, 11],
                    m: [2, 11],
                    l: [2, 11]
                },
                5: {
                    a: [2, 12],
                    r: [2, 12],
                    t: [2, 12],
                    u: [2, 12],
                    v: [2, 12],
                    x: [2, 12],
                    p: [2, 12],
                    q: [2, 12],
                    b: [2, 12],
                    s: [2, 12],
                    m: [2, 12],
                    l: [2, 12]
                },
                6: {
                    j: [1, undefined, 26],
                    n: [1, undefined, 27]
                },
                7: {
                    a: [2, 10],
                    r: [2, 10],
                    t: [2, 10],
                    u: [2, 10],
                    v: [2, 10],
                    x: [2, 10],
                    p: [2, 10],
                    q: [2, 10],
                    b: [2, 10],
                    s: [2, 10],
                    m: [2, 10],
                    l: [2, 10]
                },
                8: {
                    a: [0],
                    r: [1, undefined, 28]
                },
                9: {
                    a: [2, 1],
                    r: [2, 1],
                    t: [1, undefined, 29],
                    u: [1, undefined, 30],
                    v: [1, undefined, 31],
                    x: [1, undefined, 32]
                },
                10: {
                    a: [2, 38],
                    r: [2, 38],
                    t: [2, 38],
                    u: [2, 38],
                    v: [2, 38],
                    x: [2, 38],
                    b: [1, undefined, 1],
                    m: [1, undefined, 2],
                    p: [1, undefined, 4],
                    q: [1, undefined, 5],
                    s: [1, undefined, 6]
                },
                11: {
                    a: [2, 31],
                    r: [2, 31],
                    t: [2, 31],
                    u: [2, 31],
                    v: [2, 31],
                    x: [2, 31],
                    p: [2, 31],
                    q: [2, 31],
                    b: [2, 31],
                    s: [2, 31],
                    m: [2, 31]
                },
                12: {
                    a: [2, 32],
                    r: [2, 32],
                    t: [2, 32],
                    u: [2, 32],
                    v: [2, 32],
                    x: [2, 32],
                    p: [2, 32],
                    q: [2, 32],
                    b: [2, 32],
                    s: [2, 32],
                    m: [2, 32]
                },
                13: {
                    a: [2, 33],
                    r: [2, 33],
                    t: [2, 33],
                    u: [2, 33],
                    v: [2, 33],
                    x: [2, 33],
                    p: [2, 33],
                    q: [2, 33],
                    b: [2, 33],
                    s: [2, 33],
                    m: [2, 33]
                },
                14: {
                    a: [2, 34],
                    r: [2, 34],
                    t: [2, 34],
                    u: [2, 34],
                    v: [2, 34],
                    x: [2, 34],
                    p: [2, 34],
                    q: [2, 34],
                    b: [2, 34],
                    s: [2, 34],
                    m: [2, 34]
                },
                15: {
                    a: [2, 35],
                    r: [2, 35],
                    t: [2, 35],
                    u: [2, 35],
                    v: [2, 35],
                    x: [2, 35],
                    p: [2, 35],
                    q: [2, 35],
                    b: [2, 35],
                    s: [2, 35],
                    m: [2, 35]
                },
                16: {
                    a: [2, 36],
                    r: [2, 36],
                    t: [2, 36],
                    u: [2, 36],
                    v: [2, 36],
                    x: [2, 36],
                    p: [2, 36],
                    q: [2, 36],
                    b: [2, 36],
                    s: [2, 36],
                    m: [2, 36]
                },
                17: {
                    a: [2, 39],
                    r: [2, 39],
                    t: [2, 39],
                    u: [2, 39],
                    v: [2, 39],
                    x: [2, 39],
                    b: [1, undefined, 1],
                    m: [1, undefined, 2],
                    p: [1, undefined, 4],
                    q: [1, undefined, 5],
                    s: [1, undefined, 6]
                },
                18: {
                    a: [2, 3],
                    r: [2, 3],
                    t: [2, 3],
                    u: [2, 3],
                    v: [2, 3],
                    x: [2, 3]
                },
                19: {
                    c: [1, undefined, 36],
                    d: [1, undefined, 37],
                    e: [1, undefined, 38],
                    f: [1, undefined, 39],
                    g: [1, undefined, 40],
                    h: [1, undefined, 41],
                    i: [1, undefined, 42]
                },
                20: {
                    l: [2, 26]
                },
                21: {
                    l: [2, 27]
                },
                22: {
                    l: [2, 28]
                },
                23: {
                    l: [2, 29]
                },
                24: {
                    l: [2, 30]
                },
                25: {
                    l: [1, undefined, 44]
                },
                26: {
                    k: [1, undefined, 45]
                },
                27: {
                    a: [2, 24],
                    r: [2, 24],
                    t: [2, 24],
                    u: [2, 24],
                    v: [2, 24],
                    x: [2, 24],
                    p: [2, 24],
                    q: [2, 24],
                    b: [2, 24],
                    s: [2, 24],
                    m: [2, 24],
                    l: [2, 24]
                },
                28: {
                    b: [1, undefined, 1],
                    m: [1, undefined, 2],
                    n: [1, undefined, 3],
                    p: [1, undefined, 4],
                    q: [1, undefined, 5],
                    s: [1, undefined, 6],
                    w: [1, undefined, 7]
                },
                29: {
                    n: [2, 5],
                    w: [2, 5],
                    p: [2, 5],
                    q: [2, 5],
                    b: [2, 5],
                    s: [2, 5],
                    m: [2, 5]
                },
                30: {
                    n: [2, 6],
                    w: [2, 6],
                    p: [2, 6],
                    q: [2, 6],
                    b: [2, 6],
                    s: [2, 6],
                    m: [2, 6]
                },
                31: {
                    n: [2, 7],
                    w: [2, 7],
                    p: [2, 7],
                    q: [2, 7],
                    b: [2, 7],
                    s: [2, 7],
                    m: [2, 7]
                },
                32: {
                    n: [2, 8],
                    w: [2, 8],
                    p: [2, 8],
                    q: [2, 8],
                    b: [2, 8],
                    s: [2, 8],
                    m: [2, 8]
                },
                33: {
                    b: [1, undefined, 1],
                    m: [1, undefined, 2],
                    n: [1, undefined, 3],
                    p: [1, undefined, 4],
                    q: [1, undefined, 5],
                    s: [1, undefined, 6],
                    w: [1, undefined, 7]
                },
                34: {
                    a: [2, 40],
                    r: [2, 40],
                    t: [2, 40],
                    u: [2, 40],
                    v: [2, 40],
                    x: [2, 40],
                    b: [1, undefined, 1],
                    m: [1, undefined, 2],
                    p: [1, undefined, 4],
                    q: [1, undefined, 5],
                    s: [1, undefined, 6]
                },
                35: {
                    a: [2, 37],
                    r: [2, 37],
                    t: [2, 37],
                    u: [2, 37],
                    v: [2, 37],
                    x: [2, 37],
                    p: [2, 37],
                    q: [2, 37],
                    b: [2, 37],
                    s: [2, 37],
                    m: [2, 37]
                },
                36: {
                    a: [2, 19],
                    r: [2, 19],
                    t: [2, 19],
                    u: [2, 19],
                    v: [2, 19],
                    x: [2, 19],
                    p: [2, 19],
                    q: [2, 19],
                    b: [2, 19],
                    s: [2, 19],
                    m: [2, 19],
                    l: [2, 19]
                },
                37: {
                    n: [2, 17],
                    o: [2, 17]
                },
                38: {
                    n: [2, 18],
                    o: [2, 18]
                },
                39: {
                    n: [2, 13],
                    o: [2, 13]
                },
                40: {
                    n: [2, 14],
                    o: [2, 14]
                },
                41: {
                    n: [2, 15],
                    o: [2, 15]
                },
                42: {
                    n: [2, 16],
                    o: [2, 16]
                },
                43: {
                    n: [1, undefined, 48],
                    o: [1, undefined, 49]
                },
                44: {
                    a: [2, 25],
                    r: [2, 25],
                    t: [2, 25],
                    u: [2, 25],
                    v: [2, 25],
                    x: [2, 25],
                    p: [2, 25],
                    q: [2, 25],
                    b: [2, 25],
                    s: [2, 25],
                    m: [2, 25]
                },
                45: {
                    l: [1, undefined, 51]
                },
                46: {
                    a: [2, 2],
                    r: [2, 2],
                    t: [1, undefined, 29],
                    u: [1, undefined, 30],
                    v: [1, undefined, 31],
                    x: [1, undefined, 32]
                },
                47: {
                    a: [2, 4],
                    r: [2, 4],
                    t: [2, 4],
                    u: [2, 4],
                    v: [2, 4],
                    x: [2, 4]
                },
                48: {
                    c: [2, 20]
                },
                49: {
                    c: [2, 21]
                },
                50: {
                    c: [1, undefined, 52]
                },
                51: {
                    a: [2, 23],
                    r: [2, 23],
                    t: [2, 23],
                    u: [2, 23],
                    v: [2, 23],
                    x: [2, 23],
                    p: [2, 23],
                    q: [2, 23],
                    b: [2, 23],
                    s: [2, 23],
                    m: [2, 23],
                    l: [2, 23]
                },
                52: {
                    a: [2, 22],
                    r: [2, 22],
                    t: [2, 22],
                    u: [2, 22],
                    v: [2, 22],
                    x: [2, 22],
                    p: [2, 22],
                    q: [2, 22],
                    b: [2, 22],
                    s: [2, 22],
                    m: [2, 22],
                    l: [2, 22]
                }
            }
        }, parser.parse = function (input, filename) {
            var state, symbol, action, self = this,
                lexer = self.lexer,
                table = self.table,
                gotos = table.gotos,
                tableAction = table.action,
                productions = self.productions,
                valueStack = [null],
                prefix = filename ? "in file: " + filename + " " : "",
                stack = [0];
            for (lexer.resetInput(input);;) {
                if (state = stack[stack.length - 1], symbol || (symbol = lexer.lex()), action = symbol ? tableAction[state] && tableAction[state][symbol] : null, !action) {
                    var error, expected = [];
                    if (tableAction[state])
                        for (var symbolForState in tableAction[state]) expected.push(self.lexer.mapReverseSymbol(symbolForState));
                    throw error = prefix + "syntax error at line " + lexer.lineNumber + ":\n" + lexer.showDebugInfo() + "\nexpect " + expected.join(", "), new Error(error)
                }
                switch (action[GrammarConst.TYPE_INDEX]) {
                    case GrammarConst.SHIFT_TYPE:
                        stack.push(symbol), valueStack.push(lexer.text), stack.push(action[GrammarConst.TO_INDEX]), symbol = null;
                        break;
                    case GrammarConst.REDUCE_TYPE:
                        var ret, production = productions[action[GrammarConst.PRODUCTION_INDEX]],
                            reducedSymbol = production.symbol || production[0],
                            reducedAction = production.action || production[2],
                            reducedRhs = production.rhs || production[1],
                            len = reducedRhs.length,
                            i = 0,
                            $$ = valueStack[valueStack.length - len];
                        for (ret = undefined, self.$$ = $$; len > i; i++) self["$" + (len - i)] = valueStack[valueStack.length - 1 - i];
                        reducedAction && (ret = reducedAction.call(self)), $$ = ret !== undefined ? ret : self.$$, stack = stack.slice(0, -1 * len * 2), valueStack = valueStack.slice(0, -1 * len), stack.push(reducedSymbol), valueStack.push($$);
                        var newState = gotos[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case GrammarConst.ACCEPT_TYPE:
                        return $$
                }
            }
        }, parser
    }();
    module.exports = parser
}, function (module, exports) {
    function upperCaseFirstMatch(match, c, offset) {
        return 0 !== offset ? c.toUpperCase() : c
    }

    function camelCase(str) {
        var camelCased = str.replace(hyphenExpression, upperCaseFirstMatch);
        return hyphenExpression.lastIndex = 0, camelCased
    }
    var hyphenExpression = /\-+([a-z])/gi;
    module.exports = camelCase
}, function (module, exports) {
    function isString(value) {
        return "string" == typeof value
    }
    module.exports = isString
}, function (module, exports) {
    function isUndefined(value) {
        return "undefined" == typeof value
    }
    module.exports = isUndefined
}, function (module, exports) {
    function assign(dest) {
        for (var source, args = arguments, i = 1; i < args.length; i++) {
            source = args[i];
            for (var key in source) dest[key] = source[key]
        }
        return dest
    }
    module.exports = assign
}, function (module, exports) {
    function mapValues(source, fn) {
        var destination = {};
        for (var key in source) source.hasOwnProperty(key) && (destination[key] = fn(source[key]));
        return destination
    }
    module.exports = mapValues
}, function (module, exports, __webpack_require__) {
    function styleCamelCase(name) {
        var camel = camelCase(name);
        return camel.charAt(0).toUpperCase() === name.charAt(0) ? name.charAt(0) + camel.slice(1) : "-" === name.charAt(0) ? 0 === camel.indexOf("ms") ? camel : camel.charAt(0).toUpperCase() + camel.slice(1) : camel
    }
    var camelCase = __webpack_require__(26);
    module.exports = styleCamelCase
}, function (module, exports) {
    var Window = {
        getComputedStyle: function (node) {
            return {
                getPropertyValue: node.style.getProperty
            }
        }
    };
    module.exports = Window
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _d3Axis = (_interopRequireDefault(_react), __webpack_require__(34)),
        _d3Axis2 = _interopRequireDefault(_d3Axis),
        _d3Selection = __webpack_require__(18),
        _d3Selection2 = _interopRequireDefault(_d3Selection),
        _reactFauxDom = __webpack_require__(19),
        _reactFauxDom2 = _interopRequireDefault(_reactFauxDom),
        _scale = __webpack_require__(6),
        Axis = function (_Component) {
            function Axis(props) {
                return _classCallCheck(this, Axis), _possibleConstructorReturn(this, Object.getPrototypeOf(Axis).call(this, props))
            }
            return _inherits(Axis, _Component), _createClass(Axis, [{
                key: "_mkTickAxis",
                value: function () {
                    var _props = this.props,
                        tickOrient = (_props.type, _props.tickOrient),
                        tickFormat = _props.tickFormat,
                        tickPadding = _props.tickPadding,
                        tickSizeInner = _props.tickSizeInner,
                        tickSizeOuter = _props.tickSizeOuter,
                        ticks = _props.ticks,
                        func = _d3Axis2["default"];
                    return "left" === tickOrient ? func = func.axisLeft(this._mkScale(this.props)) : "right" === tickOrient ? func = func.axisRight(this._mkScale(this.props)) : "top" === tickOrient ? func = func.axisTop(this._mkScale(this.props)) : "bottom" === tickOrient && (func = func.axisBottom(this._mkScale(this.props))), tickFormat && func.tickFormat(tickFormat), tickPadding && func.tickPadding(tickPadding), tickSizeOuter && func.tickSizeOuter(tickSizeOuter), tickSizeInner && func.tickSizeInner(tickSizeInner), ticks && func.ticks.apply(null, ticks), func
                }
            }, {
                key: "_mkScale",
                value: function () {
                    var newScale;
                    newScale = "ordinal" === this.props.scale ? "band" : this.props.scale;
                    var func = (0, _scale.scale)(Object.assign({}, this.props, {
                        scale: newScale
                    }));
                    return func
                }
            }, {
                key: "render",
                value: function () {
                    var _props2 = this.props,
                        showAxis = _props2.showAxis,
                        gridAxisClassName = _props2.gridAxisClassName,
                        axisClassName = _props2.axisClassName,
                        type = _props2.type,
                        style = _props2.style,
                        axisGroup = _reactFauxDom2["default"].createElement("g");
                    if ("x" === type) var axisClasses = axisClassName + " axis x";
                    else if ("y" === type) var axisClasses = axisClassName + " axis y";
                    else if ("gridx" === type || "gridy" === type) var axisClasses = gridAxisClassName + " grid-axis";
                    axisGroup.setAttribute("class", axisClasses);
                    var axisDom = _d3Selection2["default"].select(axisGroup);
                    axisDom.call(this._mkTickAxis()), showAxis || (axisDom.selectAll(".grid-axis .tick text").style("opacity", "0"), "gridx" !== type && "gridy" !== type || axisDom.selectAll(".grid-axis .domain").style("opacity", "0")), axisDom.selectAll(".axis path").style("fill", "none").style("stroke", "#000").style("shape-rendering", "crispEdges"), axisDom.selectAll(".axis line").style("fill", "none").style("stroke", "#000").style("shape-rendering", "crispEdges"), axisDom.selectAll(".grid-axis line").style("opacity", .2).style("fill", "none").style("stroke", "#000").style("stroke-width", "1.5px"), axisDom.selectAll(".axis path").style("display", "none");
                    var axisText = axisDom.selectAll(".axis text");
                    if (style)
                        for (var key in style) axisText.style(key, style[key]);
                    return axisDom.node().toReact()
                }
            }]), Axis
        }(_react.Component);
    Axis.defaultProps = {
        range: null,
        rangeRoundBands: null,
        domain: null,
        tickFormat: null,
        tickOrient: null
    }, Axis.PropTypes = {
        showAxis: _react.PropTypes.bool,
        type: _react.PropTypes.string,
        orient: _react.PropTypes.oneOf(["top", "bottom", "left", "right"]),
        tickOrient: _react.PropTypes.oneOf(["top", "bottom", "left", "right"])
    }, exports["default"] = Axis
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports)
    }(this, function (exports) {
        "use strict";

        function identity(x) {
            return x
        }

        function translateX(scale0, scale1, d) {
            var x = scale0(d);
            return "translate(" + (isFinite(x) ? x : scale1(d)) + ",0)"
        }

        function translateY(scale0, scale1, d) {
            var y = scale0(d);
            return "translate(0," + (isFinite(y) ? y : scale1(d)) + ")"
        }

        function center(scale) {
            var width = scale.bandwidth() / 2;
            return function (d) {
                return scale(d) + width
            }
        }

        function axis(orient, scale) {
            function axis(context) {
                var values = null == tickValues ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues,
                    format = null == tickFormat ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity : tickFormat,
                    spacing = Math.max(tickSizeInner, 0) + tickPadding,
                    transform = orient === top || orient === bottom ? translateX : translateY,
                    range = scale.range(),
                    range0 = range[0],
                    range1 = range[range.length - 1],
                    position = (scale.bandwidth ? center : identity)(scale.copy()),
                    selection = context.selection ? context.selection() : context,
                    path = selection.selectAll(".domain").data([null]),
                    tick = selection.selectAll(".tick").data(values, scale).order(),
                    tickExit = tick.exit(),
                    tickEnter = tick.enter().append("g", ".domain").attr("class", "tick"),
                    line = tick.select("line"),
                    text = tick.select("text");
                switch (path = path.merge(path.enter().append("path").attr("class", "domain")), tick = tick.merge(tickEnter), line = line.merge(tickEnter.append("line")), text = text.merge(tickEnter.append("text")), context !== selection && (path = path.transition(context), tick = tick.transition(context), tickExit = tickExit.transition(context).style("opacity", epsilon).attr("transform", function (d) {
                    return transform(position, this.parentNode.__axis || position, d)
                }), tickEnter.style("opacity", epsilon).attr("transform", function (d) {
                    return transform(this.parentNode.__axis || position, position, d)
                }), line = line.transition(context), text = text.transition(context)), tick.style("opacity", 1).attr("transform", function (d) {
                    return transform(position, position, d)
                }), tickExit.remove(), text.text(format), orient) {
                    case top:
                        path.attr("d", "M" + range0 + "," + -tickSizeOuter + "V0H" + range1 + "V" + -tickSizeOuter), line.attr("x2", 0).attr("y2", -tickSizeInner), text.attr("x", 0).attr("y", -spacing).attr("dy", "0em").style("text-anchor", "middle");
                        break;
                    case right:
                        path.attr("d", "M" + tickSizeOuter + "," + range0 + "H0V" + range1 + "H" + tickSizeOuter), line.attr("y2", 0).attr("x2", tickSizeInner), text.attr("y", 0).attr("x", spacing).attr("dy", ".32em").style("text-anchor", "start");
                        break;
                    case bottom:
                        path.attr("d", "M" + range0 + "," + tickSizeOuter + "V0H" + range1 + "V" + tickSizeOuter), line.attr("x2", 0).attr("y2", tickSizeInner), text.attr("x", 0).attr("y", spacing).attr("dy", ".71em").style("text-anchor", "middle");
                        break;
                    case left:
                        path.attr("d", "M" + -tickSizeOuter + "," + range0 + "H0V" + range1 + "H" + -tickSizeOuter), line.attr("y2", 0).attr("x2", -tickSizeInner), text.attr("y", 0).attr("x", -spacing).attr("dy", ".32em").style("text-anchor", "end")
                }
                selection.each(function () {
                    this.__axis = position
                })
            }
            var tickArguments = [],
                tickValues = null,
                tickFormat = null,
                tickSizeInner = 6,
                tickSizeOuter = 6,
                tickPadding = 3;
            return axis.scale = function (_) {
                return arguments.length ? (scale = _, axis) : scale
            }, axis.ticks = function () {
                return tickArguments = slice.call(arguments), axis
            }, axis.tickArguments = function (_) {
                return arguments.length ? (tickArguments = null == _ ? [] : slice.call(_), axis) : tickArguments.slice()
            }, axis.tickValues = function (_) {
                return arguments.length ? (tickValues = null == _ ? null : slice.call(_), axis) : tickValues && tickValues.slice()
            }, axis.tickFormat = function (_) {
                return arguments.length ? (tickFormat = _, axis) : tickFormat
            }, axis.tickSize = function (_) {
                return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner
            }, axis.tickSizeInner = function (_) {
                return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner
            }, axis.tickSizeOuter = function (_) {
                return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter
            }, axis.tickPadding = function (_) {
                return arguments.length ? (tickPadding = +_, axis) : tickPadding
            }, axis
        }

        function axisTop(scale) {
            return axis(top, scale)
        }

        function axisRight(scale) {
            return axis(right, scale)
        }

        function axisBottom(scale) {
            return axis(bottom, scale)
        }

        function axisLeft(scale) {
            return axis(left, scale)
        }
        var slice = Array.prototype.slice,
            top = 1,
            right = 2,
            bottom = 3,
            left = 4,
            epsilon = 1e-6,
            version = "0.3.0";
        exports.version = version, exports.axisTop = axisTop, exports.axisRight = axisRight, exports.axisBottom = axisBottom, exports.axisLeft = axisLeft
    })
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _axis = __webpack_require__(33),
        _axis2 = _interopRequireDefault(_axis),
        _label = __webpack_require__(36),
        _label2 = _interopRequireDefault(_label),
        _commonProps = __webpack_require__(5),
        _commonProps2 = _interopRequireDefault(_commonProps),
        Xaxis = function (_Component) {
            function Xaxis(props) {
                return _classCallCheck(this, Xaxis), _possibleConstructorReturn(this, Object.getPrototypeOf(Xaxis).call(this, props))
            }
            return _inherits(Xaxis, _Component), _createClass(Xaxis, [{
                key: "render",
                value: function () {
                    var t, axisLabel, _props = this.props,
                        height = _props.height,
                        width = _props.width,
                        margins = _props.margins,
                        showXAxis = _props.showXAxis,
                        x = _props.x,
                        xAxisClassName = _props.xAxisClassName,
                        xDomain = _props.xDomain,
                        xRange = _props.xRange,
                        xBandPaddingInner = _props.xBandPaddingInner,
                        xBandPaddingOuter = _props.xBandPaddingOuter,
                        xScale = _props.xScale,
                        xOrient = _props.xOrient,
                        xTickOrient = _props.xTickOrient,
                        xTickPadding = _props.xTickPadding,
                        xTickSizeOuter = _props.xTickSizeOuter,
                        xTickSizeInner = _props.xTickSizeInner,
                        xTickFormat = _props.xTickFormat,
                        xTicks = _props.xTicks,
                        xLabel = _props.xLabel,
                        xLabelPosition = _props.xLabelPosition,
                        labelOffset = _props.labelOffset,
                        style = _props.style;
                    return xRange || (xRange = [0, width - margins.left - margins.right]), "bottom" === xOrient ? t = "translate(0, " + (height - margins.bottom - margins.top) + ")" : "top" === xOrient && (t = "translate(0, 0)"), xLabel && (axisLabel = _react2["default"].createElement(_label2["default"], {
                        height: height,
                        width: width,
                        margins: margins,
                        labelTitle: xLabel,
                        labelPosition: xLabelPosition,
                        labelOffset: labelOffset,
                        bandPaddingInner: xBandPaddingInner,
                        bandPaddingOuter: xBandPaddingOuter
                    })), _react2["default"].createElement("g", {
                        transform: t
                    }, _react2["default"].createElement(_axis2["default"], {
                        height: height,
                        width: width,
                        margins: margins,
                        showAxis: showXAxis,
                        axisClassName: xAxisClassName,
                        bandPaddingInner: xBandPaddingInner,
                        bandPaddingOuter: xBandPaddingOuter,
                        type: "x",
                        proxy: x,
                        domain: xDomain,
                        range: xRange,
                        scale: xScale,
                        orient: xOrient,
                        tickOrient: xTickOrient,
                        tickFormat: xTickFormat,
                        tickPadding: xTickPadding,
                        tickSizeInner: xTickSizeInner,
                        tickSizeOuter: xTickSizeOuter,
                        ticks: xTicks,
                        style: style
                    }), axisLabel)
                }
            }]), Xaxis
        }(_react.Component);
    Xaxis.defaultProps = _extends({
        showXAxis: !0,
        xAxisClassName: "react-d3-core__axis__xAxis",
        xScale: "linear",
        xOrient: "bottom",
        xTickOrient: "bottom",
        xLabelPosition: "bottom",
        xTickPadding: 3,
        xInnerTickSize: 6,
        xOuterTickSize: 6
    }, _commonProps2["default"]), Xaxis.propTypes = {
        height: _react.PropTypes.number.isRequired,
        width: _react.PropTypes.number.isRequired,
        margins: _react.PropTypes.object.isRequired,
        showXAxis: _react.PropTypes.bool,
        x: _react.PropTypes.func,
        xDomain: _react.PropTypes.array,
        xRange: _react.PropTypes.array,
        xScale: _react.PropTypes.string.isRequired,
        xOrient: _react.PropTypes.oneOf(["top", "bottom"]),
        xTickOrient: _react.PropTypes.oneOf(["top", "bottom"]),
        xAxisClassName: _react.PropTypes.string,
        xTickSizeInner: _react.PropTypes.number,
        xTickSizeOuter: _react.PropTypes.number,
        xBandPaddingInner: _react.PropTypes.number,
        xBandPaddingOuter: _react.PropTypes.number,
        xTickPadding: _react.PropTypes.number,
        xTickFormat: _react.PropTypes.func,
        xTicks: _react.PropTypes.array,
        style: _react.PropTypes.object
    }, exports["default"] = Xaxis
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _d3Selection = (_interopRequireDefault(_react), __webpack_require__(18)),
        _d3Selection2 = _interopRequireDefault(_d3Selection),
        _reactFauxDom = __webpack_require__(19),
        _reactFauxDom2 = _interopRequireDefault(_reactFauxDom),
        _commonProps = __webpack_require__(5),
        _commonProps2 = _interopRequireDefault(_commonProps),
        Label = function (_Component) {
            function Label(props) {
                return _classCallCheck(this, Label), _possibleConstructorReturn(this, Object.getPrototypeOf(Label).call(this, props))
            }
            return _inherits(Label, _Component), _createClass(Label, [{
                key: "_mkLabel",
                value: function (dom) {
                    var _props = this.props,
                        height = _props.height,
                        width = _props.width,
                        margins = _props.margins,
                        labelOffset = _props.labelOffset,
                        labelTitle = _props.labelTitle,
                        labelPosition = _props.labelPosition,
                        vTransform = _props.vTransform,
                        hTransform = _props.hTransform,
                        textAnchor = _props.textAnchor,
                        labelDom = _d3Selection2["default"].select(dom),
                        fixWidth = width - margins.left - margins.right,
                        fixHeight = height - margins.top - margins.bottom;
                    return "top" === labelPosition ? labelDom.attr("transform", hTransform).attr("y", -labelOffset).attr("x", fixWidth / 2).style("text-anchor", textAnchor).text(labelTitle) : "bottom" === labelPosition ? labelDom.attr("transform", hTransform).attr("y", +labelOffset).attr("x", fixWidth / 2).style("text-anchor", textAnchor).text(labelTitle) : "left" === labelPosition ? labelDom.attr("transform", vTransform).attr("y", -labelOffset).attr("x", -fixHeight / 2).style("text-anchor", textAnchor).text(labelTitle) : "right" === labelPosition && labelDom.attr("transform", vTransform).attr("y", +labelOffset).attr("x", -fixHeight / 2).style("text-anchor", textAnchor).text(labelTitle), labelDom
                }
            }, {
                key: "render",
                value: function () {
                    var labelClassName = this.props.labelClassName,
                        labelText = _reactFauxDom2["default"].createElement("text"),
                        labelClasses = labelClassName + " label";
                    labelText.setAttribute("class", labelClasses);
                    var labelDom = this._mkLabel(labelText);
                    return labelDom.node().toReact()
                }
            }]), Label
        }(_react.Component);
    Label.defaultProps = _extends({
        hTransform: "rotate(0)",
        vTransform: "rotate(270)",
        labelTitle: "label title",
        labelPosition: "bottom",
        labelOffset: 40,
        textAnchor: "middle",
        labelClassName: "react-d3-core__label"
    }, _commonProps2["default"]), Label.propTypes = {
        height: _react.PropTypes.number.isRequired,
        width: _react.PropTypes.number.isRequired,
        margins: _react.PropTypes.object.isRequired,
        hTransform: _react.PropTypes.string,
        vTransform: _react.PropTypes.string,
        labelTitle: _react.PropTypes.string,
        labelPosition: _react.PropTypes.oneOf(["top", "bottom", "left", "right"]),
        labelOffset: _react.PropTypes.number,
        textAnchor: _react.PropTypes.string,
        labelClassName: _react.PropTypes.string
    }, exports["default"] = Label
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _axis = __webpack_require__(33),
        _axis2 = _interopRequireDefault(_axis),
        _label = __webpack_require__(36),
        _label2 = _interopRequireDefault(_label),
        _commonProps = __webpack_require__(5),
        _commonProps2 = _interopRequireDefault(_commonProps),
        Yaxis = function (_Component) {
            function Yaxis(props) {
                return _classCallCheck(this, Yaxis), _possibleConstructorReturn(this, Object.getPrototypeOf(Yaxis).call(this, props))
            }
            return _inherits(Yaxis, _Component), _createClass(Yaxis, [{
                key: "render",
                value: function () {
                    var t, axisLabel, _props = this.props,
                        width = _props.width,
                        height = _props.height,
                        margins = _props.margins,
                        y = _props.y,
                        yDomain = (_props.yAxisClassName, _props.yDomain),
                        yRange = _props.yRange,
                        yBandPaddingInner = _props.yBandPaddingInner,
                        yBandPaddingOuter = _props.yBandPaddingOuter,
                        yScale = _props.yScale,
                        yOrient = _props.yOrient,
                        yTickOrient = _props.yTickOrient,
                        yTickFormat = _props.yTickFormat,
                        yTickPadding = _props.yTickPadding,
                        yTickSizeOuter = _props.yTickSizeOuter,
                        yTickSizeInner = _props.yTickSizeInner,
                        yTicks = _props.yTicks,
                        yLabel = _props.yLabel,
                        yLabelPosition = _props.yLabelPosition,
                        labelOffset = _props.labelOffset,
                        showYAxis = _props.showYAxis,
                        style = _props.style;
                    return yRange || (yRange = [height - margins.top - margins.bottom, 0]), "right" === yOrient ? t = "translate(" + (width - margins.right - margins.left) + ", 0)" : "left" === yOrient && (t = "translate(0, 0)"), yLabel && (axisLabel = _react2["default"].createElement(_label2["default"], {
                        height: height,
                        width: width,
                        margins: margins,
                        labelTitle: yLabel,
                        labelPosition: yLabelPosition,
                        labelOffset: labelOffset,
                        bandPaddingInner: yBandPaddingInner,
                        bandPaddingOuter: yBandPaddingOuter
                    })), _react2["default"].createElement("g", {
                        transform: t
                    }, _react2["default"].createElement(_axis2["default"], {
                        height: height,
                        width: width,
                        margins: margins,
                        showAxis: showYAxis,
                        bandPaddingInner: yBandPaddingInner,
                        bandPaddingOuter: yBandPaddingOuter,
                        type: "y",
                        proxy: y,
                        domain: yDomain,
                        range: yRange,
                        scale: yScale,
                        orient: yOrient,
                        tickOrient: yTickOrient,
                        tickFormat: yTickFormat,
                        tickPadding: yTickPadding,
                        tickSizeInner: yTickSizeInner,
                        tickSizeOuter: yTickSizeOuter,
                        ticks: yTicks,
                        style: style
                    }), axisLabel)
                }
            }]), Yaxis
        }(_react.Component);
    Yaxis.defaultProps = _extends({
        showYAxis: !0,
        yAxisClassName: "react-d3-core__axis__yAxis",
        yScale: "linear",
        yOrient: "left",
        yTickOrient: "left",
        yLabelPosition: "left",
        yTickPadding: 3,
        yInnerTickSize: 6,
        yOuterTickSize: 6
    }, _commonProps2["default"]), Yaxis.propTypes = {
        height: _react.PropTypes.number.isRequired,
        width: _react.PropTypes.number.isRequired,
        margins: _react.PropTypes.object.isRequired,
        showYAxis: _react.PropTypes.bool,
        y: _react.PropTypes.func,
        yDomain: _react.PropTypes.array,
        yRange: _react.PropTypes.array,
        yScale: _react.PropTypes.string.isRequired,
        yOrient: _react.PropTypes.oneOf(["left", "right"]),
        yTickOrient: _react.PropTypes.oneOf(["left", "right"]),
        yAxisClassName: _react.PropTypes.string,
        yTickSizeInner: _react.PropTypes.number,
        yTickSizeOuter: _react.PropTypes.number,
        yBandPaddingInner: _react.PropTypes.number,
        yBandPaddingOuter: _react.PropTypes.number,
        yTickPadding: _react.PropTypes.number,
        yTickFormat: _react.PropTypes.func,
        yTicks: _react.PropTypes.array,
        style: _react.PropTypes.object
    }, exports["default"] = Yaxis
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _axis = __webpack_require__(33),
        _axis2 = _interopRequireDefault(_axis),
        _commonProps = __webpack_require__(5),
        _commonProps2 = _interopRequireDefault(_commonProps),
        Grid = function (_Component) {
            function Grid(props) {
                return _classCallCheck(this, Grid), _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).call(this, props))
            }
            return _inherits(Grid, _Component), _createClass(Grid, [{
                key: "render",
                value: function () {
                    var gridAxis, t, _props = this.props,
                        height = _props.height,
                        width = _props.width,
                        margins = _props.margins,
                        type = _props.type,
                        gridAxisClassName = _props.gridAxisClassName,
                        xBandPaddingInner = _props.xBandPaddingInner,
                        xBandPaddingOuter = _props.xBandPaddingOuter,
                        x = _props.x,
                        xDomain = _props.xDomain,
                        xRange = _props.xRange,
                        xScale = _props.xScale,
                        yBandPaddingInner = _props.yBandPaddingInner,
                        yBandPaddingOuter = _props.yBandPaddingOuter,
                        y = _props.y,
                        yDomain = _props.yDomain,
                        yRange = _props.yRange,
                        yScale = _props.yScale;
                    if (yRange || (yRange = [height - margins.top - margins.bottom, 0]), xRange || (xRange = [0, width - margins.left - margins.right]), "x" === type) {
                        t = "translate(0, " + (height - margins.bottom - margins.top) + ")";
                        var tickSize = height - margins.top - margins.bottom;
                        gridAxis = _react2["default"].createElement(_axis2["default"], {
                            height: height,
                            width: width,
                            margins: margins,
                            type: "gridx",
                            showAxis: !1,
                            gridAxisClassName: gridAxisClassName,
                            bandPaddingInner: xBandPaddingInner,
                            bandPaddingOuter: xBandPaddingOuter,
                            tickOrient: "bottom",
                            orient: "bottom",
                            tickSizeOuter: 0,
                            tickPadding: 10,
                            tickFormat: null,
                            tickSizeInner: -tickSize,
                            proxy: x,
                            domain: xDomain,
                            range: xRange,
                            scale: xScale
                        })
                    } else if ("y" === type) {
                        t = "translate(0, 0)";
                        var tickSize = width - margins.left - margins.right;
                        gridAxis = _react2["default"].createElement(_axis2["default"], {
                            height: height,
                            width: width,
                            margins: margins,
                            type: "gridy",
                            showAxis: !1,
                            gridAxisClassName: gridAxisClassName,
                            bandPaddingInner: yBandPaddingInner,
                            bandPaddingOuter: yBandPaddingOuter,
                            tickOrient: "left",
                            orient: "left",
                            tickSizeOuter: 0,
                            tickPadding: 10,
                            tickSizeInner: -tickSize,
                            tickFormat: null,
                            proxy: y,
                            scale: yScale,
                            domain: yDomain,
                            range: yRange
                        })
                    }
                    return _react2["default"].createElement("g", {
                        transform: t
                    }, gridAxis)
                }
            }]), Grid
        }(_react.Component);
    Grid.defaultProps = _extends({
        type: "x",
        gridAxisClassName: "react-d3-core__grid_axis"
    }, _commonProps2["default"]), Grid.propTypes = {
        height: _react.PropTypes.number.isRequired,
        width: _react.PropTypes.number.isRequired,
        margins: _react.PropTypes.object.isRequired,
        type: _react.PropTypes.oneOf(["x", "y"]).isRequired,
        gridAxisClassName: _react.PropTypes.string,
        x: _react.PropTypes.func,
        xDomain: _react.PropTypes.array,
        xRange: _react.PropTypes.array,
        xScale: _react.PropTypes.oneOf(["linear", "identity", "sqrt", "pow", "log", "quantize", "quantile", "ordinal", "time"]).isRequired,
        xBandPaddingInner: _react.PropTypes.number,
        xBandPaddingOuter: _react.PropTypes.number,
        y: _react.PropTypes.func,
        yDomain: _react.PropTypes.array,
        yRange: _react.PropTypes.array,
        yScale: _react.PropTypes.oneOf(["linear", "identity", "sqrt", "pow", "log", "quantize", "quantile", "ordinal", "time"]).isRequired,
        yBandPaddingInner: _react.PropTypes.number,
        yBandPaddingOuter: _react.PropTypes.number
    }, exports["default"] = Grid
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _grid = __webpack_require__(38),
        _grid2 = _interopRequireDefault(_grid),
        XGrid = function (_Component) {
            function XGrid(props) {
                return _classCallCheck(this, XGrid), _possibleConstructorReturn(this, Object.getPrototypeOf(XGrid).call(this, props))
            }
            return _inherits(XGrid, _Component), _createClass(XGrid, [{
                key: "render",
                value: function () {
                    return _react2["default"].createElement(_grid2["default"], _extends({}, this.props, {
                        type: "x"
                    }))
                }
            }]), XGrid
        }(_react.Component);
    exports["default"] = XGrid
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _grid = __webpack_require__(38),
        _grid2 = _interopRequireDefault(_grid),
        YGrid = function (_Component) {
            function YGrid(props) {
                return _classCallCheck(this, YGrid), _possibleConstructorReturn(this, Object.getPrototypeOf(YGrid).call(this, props))
            }
            return _inherits(YGrid, _Component), _createClass(YGrid, [{
                key: "render",
                value: function () {
                    return _react2["default"].createElement(_grid2["default"], _extends({}, this.props, {
                        type: "y"
                    }))
                }
            }]), YGrid
        }(_react.Component);
    exports["default"] = YGrid
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function xDomain(props, stack, horizonal) {
        var data = props.data,
            chartSeries = props.chartSeries,
            x = props.x,
            xScale = props.xScale,
            xDomain = props.xDomain;
        if (xDomain) return xDomain;
        if (horizonal) {
            if (stack) {
                var max = 0,
                    min = 0;
                return data.forEach(function (d) {
                    var totalTop = 0,
                        totalBottom = 0;
                    chartSeries.forEach(function (sd) {
                        var field = sd.field;
                        d[field] > 0 ? totalTop += x(d[field]) : d[field] < 0 && (totalBottom += x(d[field]))
                    }), totalTop > max && (max = totalTop), min > totalBottom && (min = totalBottom)
                }), [min, max]
            }
            var domainArr = chartSeries.map(function (d) {
                var field = d.field,
                    extent = _d3Array2["default"].extent(data, function (dt) {
                        return x(dt[field])
                    });
                return extent
            });
            return _d3Array2["default"].extent([].concat.apply([], domainArr))
        }
        return "ordinal" === xScale ? data.map(function (d) {
            return x(d)
        }) : _d3Array2["default"].extent(data, function (d) {
            return x(d)
        })
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.xDomain = xDomain;
    var _d3Array = __webpack_require__(8),
        _d3Array2 = _interopRequireDefault(_d3Array)
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function yDomain(props, stack, horizonal) {
        var data = props.data,
            chartSeries = props.chartSeries,
            y = props.y,
            yDomain = props.yDomain,
            yScale = props.yScale;
        if (yDomain) return yDomain;
        if (horizonal) return "ordinal" === yScale ? data.map(function (d) {
            return y(d)
        }) : _d3Array2["default"].extent(data, function (d) {
            return y(d)
        });
        if (stack) {
            var max = 0,
                min = 0;
            return data.forEach(function (d) {
                var totalTop = 0,
                    totalBottom = 0;
                chartSeries.forEach(function (sd) {
                    var field = sd.field;
                    d[field] > 0 ? totalTop += y(d[field]) : d[field] < 0 && (totalBottom += y(d[field]))
                }), totalTop > max && (max = totalTop), min > totalBottom && (min = totalBottom)
            }), [min, max]
        }
        var domainArr = chartSeries.map(function (d) {
                var field = d.field,
                    extent = _d3Array2["default"].extent(data, function (dt) {
                        return y(dt[field])
                    });
                return extent
            }),
            extentArr = _d3Array2["default"].extent([].concat.apply([], domainArr));
        return extentArr[0] * extentArr[1] >= 0 ? [0, extentArr[1]] : extentArr
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.yDomain = yDomain;
    var _d3Array = __webpack_require__(8),
        _d3Array2 = _interopRequireDefault(_d3Array)
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _series = __webpack_require__(44);
    Object.defineProperty(exports, "series", {
        enumerable: !0,
        get: function () {
            return _series.series
        }
    });
    var _chart = __webpack_require__(46);
    Object.defineProperty(exports, "Chart", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_chart)["default"]
        }
    });
    var _chartpie = __webpack_require__(48);
    Object.defineProperty(exports, "ChartPie", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_chartpie)["default"]
        }
    });
    var _line = __webpack_require__(49);
    Object.defineProperty(exports, "Line", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_line)["default"]
        }
    });
    var _area = __webpack_require__(52);
    Object.defineProperty(exports, "Area", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_area)["default"]
        }
    });
    var _area_stack = __webpack_require__(53);
    Object.defineProperty(exports, "AreaStack", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_area_stack)["default"]
        }
    });
    var _bar = __webpack_require__(54);
    Object.defineProperty(exports, "Bar", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_bar)["default"]
        }
    });
    var _bar_horizontal = __webpack_require__(55);
    Object.defineProperty(exports, "BarHorizontal", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_bar_horizontal)["default"]
        }
    });
    var _bar_group = __webpack_require__(56);
    Object.defineProperty(exports, "BarGroup", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_bar_group)["default"]
        }
    });
    var _bar_group_horizontal = __webpack_require__(57);
    Object.defineProperty(exports, "BarGroupHorizontal", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_bar_group_horizontal)["default"]
        }
    });
    var _bar_stack = __webpack_require__(58);
    Object.defineProperty(exports, "BarStack", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_bar_stack)["default"]
        }
    });
    var _bar_stack_horizontal = __webpack_require__(59);
    Object.defineProperty(exports, "BarStackHorizontal", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_bar_stack_horizontal)["default"]
        }
    });
    var _pie = __webpack_require__(60);
    Object.defineProperty(exports, "Pie", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_pie)["default"]
        }
    });
    var _scatter = __webpack_require__(61);
    Object.defineProperty(exports, "Scatter", {
        enumerable: !0,
        get: function () {
            return _interopRequireDefault(_scatter)["default"]
        }
    })
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function series(props, horizontal) {
        var data = props.data,
            chartSeries = props.chartSeries,
            x = props.x,
            y = props.y,
            categoricalColors = props.categoricalColors;
        categoricalColors = categoricalColors || _d2["default"].scale.category10();
        var chartSeriesData = chartSeries.map(function (f, i) {
            f.color = f.color || categoricalColors(i), f.name = f.name || f.field;
            var mapping = data.map(function (d) {
                return d._style || (d._style = {}), horizontal ? {
                    y: y(d),
                    x: x(d[f.field]),
                    color: f.color,
                    name: f.name,
                    field: f.field,
                    _style: d._style
                } : {
                    x: x(d),
                    y: y(d[f.field]),
                    color: f.color,
                    name: f.name,
                    field: f.field,
                    _style: d._style
                }
            });
            return Object.assign(f, {
                data: mapping
            })
        });
        return chartSeriesData
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.series = series;
    var _d = __webpack_require__(45),
        _d2 = _interopRequireDefault(_d)
}, function (module, exports) {
    module.exports = d3
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _commonProps = __webpack_require__(47),
        _commonProps2 = _interopRequireDefault(_commonProps),
        ChartSvg = function (_Component) {
            function ChartSvg(props) {
                return _classCallCheck(this, ChartSvg), _possibleConstructorReturn(this, Object.getPrototypeOf(ChartSvg).call(this, props))
            }
            return _inherits(ChartSvg, _Component), _createClass(ChartSvg, [{
                key: "render",
                value: function () {
                    var _props = this.props,
                        horizontal = _props.horizontal,
                        height = _props.height,
                        width = _props.width,
                        margins = _props.margins,
                        xScale = _props.xScale,
                        yScale = _props.yScale,
                        xRange = _props.xRange,
                        yRange = _props.yRange,
                        xDomain = _props.xDomain,
                        yDomain = _props.yDomain,
                        xTicks = _props.xTicks,
                        yTicks = _props.yTicks,
                        xTickFormat = _props.xTickFormat,
                        yTickFormat = _props.yTickFormat,
                        xBandPaddingInner = _props.xBandPaddingInner,
                        xBandPaddingOuter = _props.xBandPaddingOuter,
                        yBandPaddingInner = _props.yBandPaddingInner,
                        yBandPaddingOuter = _props.yBandPaddingOuter,
                        xLabel = _props.xLabel,
                        yLabel = _props.yLabel,
                        stack = _props.stack,
                        data = _props.data,
                        svgClassName = _props.svgClassName,
                        id = _props.id,
                        x = _props.x,
                        y = _props.y,
                        xRange = xRange || [0, width - margins.left - margins.right],
                        yRange = yRange || [height - margins.top - margins.bottom, 0],
                        xDomain = xDomain || (0, _reactD3Core.xDomainCount)(this.props, stack, horizontal),
                        yDomain = yDomain || (0, _reactD3Core.yDomainCount)(this.props, stack, horizontal);
                    "ordinal" === xScale && (xScale = "band"), "ordinal" === yScale && (yScale = "band");
                    var newXScale = {
                            scale: xScale,
                            range: xRange,
                            domain: xDomain,
                            bandPaddingInner: xBandPaddingInner,
                            bandPaddingOuter: xBandPaddingOuter
                        },
                        xScaleSet = (0, _reactD3Core.scale)(newXScale),
                        newYScale = {
                            scale: yScale,
                            range: yRange,
                            domain: yDomain,
                            bandPaddingInner: yBandPaddingInner,
                            bandPaddingOuter: yBandPaddingOuter
                        },
                        yScaleSet = (0, _reactD3Core.scale)(newYScale),
                        children = _react2["default"].Children.map(this.props.children, function (el) {
                            return el ? _react2["default"].cloneElement(el, {
                                height: height,
                                width: width,
                                margins: margins,
                                xScaleSet: xScaleSet,
                                yScaleSet: yScaleSet,
                                xDomain: xDomain,
                                yDomain: yDomain,
                                xRange: xRange,
                                yRange: yRange,
                                xBandPaddingInner: xBandPaddingInner,
                                xBandPaddingOuter: xBandPaddingOuter,
                                yBandPaddingInner: yBandPaddingInner,
                                yBandPaddingOuter: yBandPaddingOuter,
                                xScale: xScale,
                                yScale: yScale,
                                xTickFormat: xTickFormat,
                                yTickFormat: yTickFormat,
                                xTicks: xTicks,
                                yTicks: yTicks,
                                xLabel: xLabel,
                                yLabel: yLabel,
                                data: data,
                                x: x,
                                y: y
                            }) : null
                        }),
                        t = "translate(" + margins.left + ", " + margins.top + ")";
                    return _react2["default"].createElement("svg", {
                        height: height,
                        width: width,
                        className: svgClassName,
                        id: id,
                        ref: "svgContainer"
                    }, _react2["default"].createElement("g", {
                        transform: t
                    }, children))
                }
            }]), ChartSvg
        }(_react.Component);
    ChartSvg.defaultProps = _extends({
        svgClassName: "react-d3-core__container_svg"
    }, _commonProps2["default"]), ChartSvg.propTypes = {
        id: _react.PropTypes.string,
        width: _react.PropTypes.number.isRequired,
        height: _react.PropTypes.number.isRequired,
        margins: _react.PropTypes.object.isRequired,
        svgClassName: _react.PropTypes.string.isRequired
    }, exports["default"] = ChartSvg
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.pieProps = void 0;
    var _d3Scale = __webpack_require__(7),
        _d3Scale2 = _interopRequireDefault(_d3Scale),
        width = 960,
        height = 500,
        margins = {
            top: 80,
            right: 100,
            bottom: 80,
            left: 100
        };
    exports["default"] = {
        width: width,
        height: height,
        margins: margins,
        y: function (d) {
            return +d
        },
        xScale: "linear",
        yScale: "linear",
        showXGrid: !0,
        showYGrid: !0
    };
    exports.pieProps = {
        width: width,
        height: height,
        margins: margins,
        innerRadius: 0,
        categoricalColors: _d3Scale2["default"].scaleCategory10(),
        pieSort: function () {},
        pieTextShow: !0
    }
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _commonProps = (__webpack_require__(3), __webpack_require__(47)),
        _commonProps2 = _interopRequireDefault(_commonProps),
        ChartSvg = function (_Component) {
            function ChartSvg(props) {
                return _classCallCheck(this, ChartSvg), _possibleConstructorReturn(this, Object.getPrototypeOf(ChartSvg).call(this, props))
            }
            return _inherits(ChartSvg, _Component), _createClass(ChartSvg, [{
                key: "render",
                value: function () {
                    var _this2 = this,
                        _props = this.props,
                        height = _props.height,
                        width = _props.width,
                        margins = _props.margins,
                        svgClassName = (_props.data, _props.svgClassName),
                        id = _props.id,
                        children = (_props.name, _props.value, _react2["default"].Children.map(this.props.children, function (el) {
                            return el ? _react2["default"].cloneElement(el, _this2.props) : null
                        })),
                        t = "translate(" + margins.left + ", " + margins.top + ")";
                    return _react2["default"].createElement("svg", {
                        height: height,
                        width: width,
                        className: svgClassName,
                        id: id,
                        ref: "svgContainer"
                    }, _react2["default"].createElement("g", {
                        transform: t
                    }, children))
                }
            }]), ChartSvg
        }(_react.Component);
    ChartSvg.defaultProps = _extends({
        svgClassName: "react-d3-core__container_svg"
    }, _commonProps2["default"]), ChartSvg.propTypes = {
        id: _react.PropTypes.string,
        width: _react.PropTypes.number.isRequired,
        height: _react.PropTypes.number.isRequired,
        margins: _react.PropTypes.object.isRequired,
        svgClassName: _react.PropTypes.string.isRequired
    }, exports["default"] = ChartSvg
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _d3Shape = __webpack_require__(50),
        _d3Shape2 = _interopRequireDefault(_d3Shape),
        _commonProps = __webpack_require__(47),
        _commonProps2 = _interopRequireDefault(_commonProps),
        _series = __webpack_require__(44),
        Line = function (_Component) {
            function Line(props) {
                return _classCallCheck(this, Line), _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, props))
            }
            return _inherits(Line, _Component), _createClass(Line, [{
                key: "_mkLine",
                value: function (dom) {
                    var lineClassName = this.props.lineClassName,
                        dataset = (0, _series.series)(this.props),
                        that = this;
                    return _react2["default"].createElement("g", null, dataset.map(function (line, i) {
                        return _react2["default"].createElement("path", {
                            stroke: line.color,
                            fill: "none",
                            className: lineClassName + " line",
                            d: that._setAxes(line.data),
                            style: line.style,
                            key: i
                        })
                    }))
                }
            }, {
                key: "_setAxes",
                value: function (data) {
                    var _props = this.props,
                        xScaleSet = _props.xScaleSet,
                        yScaleSet = _props.yScaleSet,
                        line = _d3Shape2["default"].line().x(function (d) {
                            return xScaleSet(d.x)
                        }).y(function (d) {
                            return yScaleSet(d.y)
                        });
                    return line.call(this, data)
                }
            }, {
                key: "render",
                value: function () {
                    var line = this._mkLine();
                    return _react2["default"].createElement("g", null, line)
                }
            }]), Line
        }(_react.Component);
    Line.defaultProps = _extends({
        interpolate: null,
        lineClassName: "react-d3-basic__line"
    }, _commonProps2["default"]), exports["default"] = Line
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports, __webpack_require__(51))
    }(this, function (exports, d3Path) {
        "use strict";

        function constant(x) {
            return function () {
                return x
            }
        }

        function arcInnerRadius(d) {
            return d.innerRadius
        }

        function arcOuterRadius(d) {
            return d.outerRadius
        }

        function arcStartAngle(d) {
            return d.startAngle
        }

        function arcEndAngle(d) {
            return d.endAngle
        }

        function arcPadAngle(d) {
            return d && d.padAngle
        }

        function asin(x) {
            return x >= 1 ? halfPi : -1 >= x ? -halfPi : Math.asin(x)
        }

        function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
            var x10 = x1 - x0,
                y10 = y1 - y0,
                x32 = x3 - x2,
                y32 = y3 - y2,
                t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
            return [x0 + t * x10, y0 + t * y10]
        }

        function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
            var x01 = x0 - x1,
                y01 = y0 - y1,
                lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
                ox = lo * y01,
                oy = -lo * x01,
                x11 = x0 + ox,
                y11 = y0 + oy,
                x10 = x1 + ox,
                y10 = y1 + oy,
                x00 = (x11 + x10) / 2,
                y00 = (y11 + y10) / 2,
                dx = x10 - x11,
                dy = y10 - y11,
                d2 = dx * dx + dy * dy,
                r = r1 - rc,
                D = x11 * y10 - x10 * y11,
                d = (0 > dy ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
                cx0 = (D * dy - dx * d) / d2,
                cy0 = (-D * dx - dy * d) / d2,
                cx1 = (D * dy + dx * d) / d2,
                cy1 = (-D * dx + dy * d) / d2,
                dx0 = cx0 - x00,
                dy0 = cy0 - y00,
                dx1 = cx1 - x00,
                dy1 = cy1 - y00;
            return dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1 && (cx0 = cx1, cy0 = cy1), {
                cx: cx0,
                cy: cy0,
                x01: -ox,
                y01: -oy,
                x11: cx0 * (r1 / r - 1),
                y11: cy0 * (r1 / r - 1)
            }
        }

        function arc() {
            function arc() {
                var buffer, r, r0 = +innerRadius.apply(this, arguments),
                    r1 = +outerRadius.apply(this, arguments),
                    a0 = startAngle.apply(this, arguments) - halfPi,
                    a1 = endAngle.apply(this, arguments) - halfPi,
                    da = Math.abs(a1 - a0),
                    cw = a1 > a0;
                if (context || (context = buffer = d3Path.path()), r0 > r1 && (r = r1, r1 = r0, r0 = r), r1 > epsilon)
                    if (da > tau - epsilon) context.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0)), context.arc(0, 0, r1, a0, a1, !cw), r0 > epsilon && (context.moveTo(r0 * Math.cos(a1), r0 * Math.sin(a1)), context.arc(0, 0, r0, a1, a0, cw));
                    else {
                        var t0, t1, a01 = a0,
                            a11 = a1,
                            a00 = a0,
                            a10 = a1,
                            da0 = da,
                            da1 = da,
                            ap = padAngle.apply(this, arguments) / 2,
                            rp = ap > epsilon && (padRadius ? +padRadius.apply(this, arguments) : Math.sqrt(r0 * r0 + r1 * r1)),
                            rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
                            rc0 = rc,
                            rc1 = rc;
                        if (rp > epsilon) {
                            var p0 = asin(rp / r0 * Math.sin(ap)),
                                p1 = asin(rp / r1 * Math.sin(ap));
                            (da0 -= 2 * p0) > epsilon ? (p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0) : (da0 = 0, a00 = a10 = (a0 + a1) / 2), (da1 -= 2 * p1) > epsilon ? (p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1) : (da1 = 0, a01 = a11 = (a0 + a1) / 2)
                        }
                        var x01 = r1 * Math.cos(a01),
                            y01 = r1 * Math.sin(a01),
                            x10 = r0 * Math.cos(a10),
                            y10 = r0 * Math.sin(a10);
                        if (rc > epsilon) {
                            var x11 = r1 * Math.cos(a11),
                                y11 = r1 * Math.sin(a11),
                                x00 = r0 * Math.cos(a00),
                                y00 = r0 * Math.sin(a00);
                            if (pi > da) {
                                var oc = da0 > epsilon ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
                                    ax = x01 - oc[0],
                                    ay = y01 - oc[1],
                                    bx = x11 - oc[0],
                                    by = y11 - oc[1],
                                    kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
                                    lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
                                rc0 = Math.min(rc, (r0 - lc) / (kc - 1)), rc1 = Math.min(rc, (r1 - lc) / (kc + 1))
                            }
                        }
                        da1 > epsilon ? rc1 > epsilon ? (t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw), t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw), context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01), rc > rc1 ? context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw) : (context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw), context.arc(0, 0, r1, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw), context.arc(t1.cx, t1.cy, rc1, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw))) : (context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw)) : context.moveTo(x01, y01), r0 > epsilon && da0 > epsilon ? rc0 > epsilon ? (t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw), t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw), context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01), rc > rc0 ? context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw) : (context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw), context.arc(0, 0, r0, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw), context.arc(t1.cx, t1.cy, rc0, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw))) : context.arc(0, 0, r0, a10, a00, cw) : context.lineTo(x10, y10)
                    }
                else context.moveTo(0, 0);
                return context.closePath(), buffer ? (context = null, buffer + "" || null) : void 0
            }
            var innerRadius = arcInnerRadius,
                outerRadius = arcOuterRadius,
                cornerRadius = constant(0),
                padRadius = null,
                startAngle = arcStartAngle,
                endAngle = arcEndAngle,
                padAngle = arcPadAngle,
                context = null;
            return arc.centroid = function () {
                var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
                    a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
                return [Math.cos(a) * r, Math.sin(a) * r]
            }, arc.innerRadius = function (_) {
                return arguments.length ? (innerRadius = "function" == typeof _ ? _ : constant(+_), arc) : innerRadius
            }, arc.outerRadius = function (_) {
                return arguments.length ? (outerRadius = "function" == typeof _ ? _ : constant(+_), arc) : outerRadius
            }, arc.cornerRadius = function (_) {
                return arguments.length ? (cornerRadius = "function" == typeof _ ? _ : constant(+_), arc) : cornerRadius
            }, arc.padRadius = function (_) {
                return arguments.length ? (padRadius = null == _ ? null : "function" == typeof _ ? _ : constant(+_), arc) : padRadius
            }, arc.startAngle = function (_) {
                return arguments.length ? (startAngle = "function" == typeof _ ? _ : constant(+_), arc) : startAngle
            }, arc.endAngle = function (_) {
                return arguments.length ? (endAngle = "function" == typeof _ ? _ : constant(+_), arc) : endAngle
            }, arc.padAngle = function (_) {
                return arguments.length ? (padAngle = "function" == typeof _ ? _ : constant(+_), arc) : padAngle
            }, arc.context = function (_) {
                return arguments.length ? (context = null == _ ? null : _, arc) : context
            }, arc
        }

        function bind(curve, args) {
            return args.length < 2 ? curve : (args = slice.call(args), args[0] = null, function (context) {
                return args[0] = context, curve.apply(null, args)
            })
        }

        function Linear(context) {
            this._context = context
        }

        function curveLinear(context) {
            return new Linear(context)
        }

        function x(p) {
            return p[0]
        }

        function y(p) {
            return p[1]
        }

        function area() {
            function area(data) {
                var i, j, k, d, buffer, n = data.length,
                    defined0 = !1,
                    x0z = new Array(n),
                    y0z = new Array(n);
                for (context || (output = curve(buffer = d3Path.path())), i = 0; n >= i; ++i) {
                    if (!(n > i && defined(d = data[i], i, data)) === defined0)
                        if (defined0 = !defined0) j = i, output.areaStart(), output.lineStart();
                        else {
                            for (output.lineEnd(), output.lineStart(), k = i - 1; k >= j; --k) output.point(x0z[k], y0z[k]);
                            output.lineEnd(), output.areaEnd()
                        }
                    defined0 && (x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data), output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]))
                }
                return buffer ? (output = null, buffer + "" || null) : void 0
            }
            var x0 = x,
                x1 = null,
                y0 = constant(0),
                y1 = y,
                defined = constant(!0),
                context = null,
                curve = curveLinear,
                output = null;
            return area.x = function (_) {
                return arguments.length ? (x0 = "function" == typeof _ ? _ : constant(+_), x1 = null, area) : x0
            }, area.x0 = function (_) {
                return arguments.length ? (x0 = "function" == typeof _ ? _ : constant(+_), area) : x0
            }, area.x1 = function (_) {
                return arguments.length ? (x1 = null == _ ? null : "function" == typeof _ ? _ : constant(+_), area) : x1
            }, area.y = function (_) {
                return arguments.length ? (y0 = "function" == typeof _ ? _ : constant(+_), y1 = null, area) : y0
            }, area.y0 = function (_) {
                return arguments.length ? (y0 = "function" == typeof _ ? _ : constant(+_), area) : y0
            }, area.y1 = function (_) {
                return arguments.length ? (y1 = null == _ ? null : "function" == typeof _ ? _ : constant(+_), area) : y1
            }, area.defined = function (_) {
                return arguments.length ? (defined = "function" == typeof _ ? _ : constant(!!_), area) : defined
            }, area.curve = function (_) {
                return arguments.length ? (curve = bind(_, arguments), null != context && (output = curve(context)), area) : curve
            }, area.context = function (_) {
                return arguments.length ? (null == _ ? context = output = null : output = curve(context = _), area) : context
            }, area
        }

        function line() {
            function line(data) {
                var i, d, buffer, n = data.length,
                    defined0 = !1;
                for (context || (output = curve(buffer = d3Path.path())), i = 0; n >= i; ++i) !(n > i && defined(d = data[i], i, data)) === defined0 && ((defined0 = !defined0) ? output.lineStart() : output.lineEnd()), defined0 && output.point(+x$$(d, i, data), +y$$(d, i, data));
                return buffer ? (output = null, buffer + "" || null) : void 0
            }
            var x$$ = x,
                y$$ = y,
                defined = constant(!0),
                context = null,
                curve = curveLinear,
                output = null;
            return line.x = function (_) {
                return arguments.length ? (x$$ = "function" == typeof _ ? _ : constant(+_), line) : x$$
            }, line.y = function (_) {
                return arguments.length ? (y$$ = "function" == typeof _ ? _ : constant(+_), line) : y$$
            }, line.defined = function (_) {
                return arguments.length ? (defined = "function" == typeof _ ? _ : constant(!!_), line) : defined
            }, line.curve = function (_) {
                return arguments.length ? (curve = bind(_, arguments), null != context && (output = curve(context)), line) : curve
            }, line.context = function (_) {
                return arguments.length ? (null == _ ? context = output = null : output = curve(context = _), line) : context
            }, line
        }

        function descending$1(a, b) {
            return a > b ? -1 : b > a ? 1 : b >= a ? 0 : NaN
        }

        function identity(d) {
            return d
        }

        function pie() {
            function pie(data) {
                var i, j, k, a1, v, n = data.length,
                    sum = 0,
                    index = new Array(n),
                    arcs = new Array(n),
                    a0 = +startAngle.apply(this, arguments),
                    da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)),
                    p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
                    pa = p * (0 > da ? -1 : 1);
                for (i = 0; n > i; ++i)(v = arcs[index[i] = i] = +value(data[i], i, data)) > 0 && (sum += v);
                for (null != sortValues ? index.sort(function (i, j) {
                        return sortValues(arcs[i], arcs[j])
                    }) : null !== sort && index.sort(function (i, j) {
                        return sort(data[i], data[j])
                    }), i = 0, k = sum ? (da - n * pa) / sum : 0; n > i; ++i, a0 = a1) j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
                    data: data[j],
                    index: i,
                    value: v,
                    startAngle: a0,
                    endAngle: a1,
                    padAngle: p
                };
                return arcs
            }
            var value = identity,
                sortValues = descending$1,
                sort = null,
                startAngle = constant(0),
                endAngle = constant(tau),
                padAngle = constant(0);
            return pie.value = function (_) {
                return arguments.length ? (value = "function" == typeof _ ? _ : constant(+_), pie) : value
            }, pie.sortValues = function (_) {
                return arguments.length ? (sortValues = _, sort = null, pie) : sortValues
            }, pie.sort = function (_) {
                return arguments.length ? (sort = _, sortValues = null, pie) : sort
            }, pie.startAngle = function (_) {
                return arguments.length ? (startAngle = "function" == typeof _ ? _ : constant(+_), pie) : startAngle
            }, pie.endAngle = function (_) {
                return arguments.length ? (endAngle = "function" == typeof _ ? _ : constant(+_), pie) : endAngle
            }, pie.padAngle = function (_) {
                return arguments.length ? (padAngle = "function" == typeof _ ? _ : constant(+_), pie) : padAngle
            }, pie
        }

        function Radial(curve) {
            this._curve = curve
        }

        function curveRadial(curve, args) {
            function radial(context) {
                return new Radial(curve(context))
            }
            return curve = bind(curve, args), radial._curve = curve, radial
        }

        function radialArea() {
            var a = area(),
                c = a.curve;
            return a.angle = a.x, delete a.x, a.startAngle = a.x0, delete a.x0, a.endAngle = a.x1, delete a.x1, a.radius = a.y, delete a.y, a.innerRadius = a.y0, delete a.y0, a.outerRadius = a.y1, delete a.y1, a.curve = function (_) {
                return arguments.length ? c(curveRadial(_, arguments)) : c()._curve
            }, a.curve(curveLinear)
        }

        function radialLine() {
            var l = line(),
                c = l.curve;
            return l.angle = l.x, delete l.x, l.radius = l.y, delete l.y, l.curve = function (_) {
                return arguments.length ? c(curveRadial(_, arguments)) : c()._curve
            }, l.curve(curveLinear)
        }

        function symbol() {
            function symbol() {
                var buffer;
                return context || (context = buffer = d3Path.path()), type.apply(this, arguments).draw(context, +size.apply(this, arguments)), buffer ? (context = null, buffer + "" || null) : void 0
            }
            var type = constant(circle),
                size = constant(64),
                context = null;
            return symbol.type = function (_) {
                return arguments.length ? (type = "function" == typeof _ ? _ : constant(_), symbol) : type
            }, symbol.size = function (_) {
                return arguments.length ? (size = "function" == typeof _ ? _ : constant(+_), symbol) : size
            }, symbol.context = function (_) {
                return arguments.length ? (context = null == _ ? null : _, symbol) : context
            }, symbol
        }

        function noop() {}

        function point(that, x, y) {
            that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6)
        }

        function Basis(context) {
            this._context = context
        }

        function basis(context) {
            return new Basis(context)
        }

        function BasisClosed(context) {
            this._context = context
        }

        function basisClosed(context) {
            return new BasisClosed(context)
        }

        function BasisOpen(context) {
            this._context = context
        }

        function basisOpen(context) {
            return new BasisOpen(context)
        }

        function Bundle(context, beta) {
            this._basis = basis(context), this._beta = beta
        }

        function bundle(context, beta) {
            return null == beta ? new Bundle(context, .85) : 1 === (beta = +beta) ? basis(context) : new Bundle(context, beta)
        }

        function point$1(that, x, y) {
            that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2)
        }

        function Cardinal(context, k) {
            this._context = context, this._k = k
        }

        function cardinal(context, tension) {
            return new Cardinal(context, (null == tension ? 1 : 1 - tension) / 6)
        }

        function CardinalClosed(context, k) {
            this._context = context, this._k = k
        }

        function cardinalClosed(context, tension) {
            return new CardinalClosed(context, (null == tension ? 1 : 1 - tension) / 6)
        }

        function CardinalOpen(context, k) {
            this._context = context, this._k = k
        }

        function cardinalOpen(context, tension) {
            return new CardinalOpen(context, (null == tension ? 1 : 1 - tension) / 6)
        }

        function point$2(that, x, y) {
            var x1 = that._x1,
                y1 = that._y1,
                x2 = that._x2,
                y2 = that._y2;
            if (that._l01_a > epsilon) {
                var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
                    n = 3 * that._l01_a * (that._l01_a + that._l12_a);
                x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n, y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n
            }
            if (that._l23_a > epsilon) {
                var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
                    m = 3 * that._l23_a * (that._l23_a + that._l12_a);
                x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m, y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m
            }
            that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2)
        }

        function CatmullRom(context, alpha) {
            this._context = context, this._alpha = alpha
        }

        function catmullRom(context, alpha) {
            return (alpha = null == alpha ? .5 : +alpha) ? new CatmullRom(context, alpha) : cardinal(context, 0)
        }

        function CatmullRomClosed(context, alpha) {
            this._context = context, this._alpha = alpha
        }

        function catmullRomClosed(context, alpha) {
            return (alpha = null == alpha ? .5 : +alpha) ? new CatmullRomClosed(context, alpha) : cardinalClosed(context, 0)
        }

        function CatmullRomOpen(context, alpha) {
            this._context = context, this._alpha = alpha
        }

        function catmullRomOpen(context, alpha) {
            return (alpha = null == alpha ? .5 : +alpha) ? new CatmullRomOpen(context, alpha) : cardinalOpen(context, 0)
        }

        function LinearClosed(context) {
            this._context = context
        }

        function linearClosed(context) {
            return new LinearClosed(context)
        }

        function sign(x) {
            return 0 > x ? -1 : 1
        }

        function slope3(that, x2, y2) {
            var h0 = that._x1 - that._x0,
                h1 = x2 - that._x1,
                s0 = (that._y1 - that._y0) / (h0 || 0 > h1 && -0),
                s1 = (y2 - that._y1) / (h1 || 0 > h0 && -0),
                p = (s0 * h1 + s1 * h0) / (h0 + h1);
            return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), .5 * Math.abs(p)) || 0
        }

        function slope2(that, t) {
            var h = that._x1 - that._x0;
            return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t
        }

        function point$3(that, t0, t1) {
            var x0 = that._x0,
                y0 = that._y0,
                x1 = that._x1,
                y1 = that._y1,
                dx = (x1 - x0) / 3;
            that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1)
        }

        function MonotoneX(context) {
            this._context = context
        }

        function MonotoneY(context) {
            this._context = new ReflectContext(context)
        }

        function ReflectContext(context) {
            this._context = context
        }

        function monotoneX(context) {
            return new MonotoneX(context)
        }

        function monotoneY(context) {
            return new MonotoneY(context)
        }

        function Natural(context) {
            this._context = context
        }

        function controlPoints(x) {
            var i, m, n = x.length - 1,
                a = new Array(n),
                b = new Array(n),
                r = new Array(n);
            for (a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1], i = 1; n - 1 > i; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
            for (a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n], i = 1; n > i; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
            for (a[n - 1] = r[n - 1] / b[n - 1], i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
            for (b[n - 1] = (x[n] + a[n - 1]) / 2, i = 0; n - 1 > i; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
            return [a, b]
        }

        function natural(context) {
            return new Natural(context)
        }

        function Step(context, t) {
            this._context = context, this._t = t
        }

        function step(context) {
            return new Step(context, .5)
        }

        function stepBefore(context) {
            return new Step(context, 0)
        }

        function stepAfter(context) {
            return new Step(context, 1)
        }

        function none(series, order) {
            if ((n = series.length) > 1)
                for (var s0, n, i = 1, s1 = series[order[0]], m = s1.length; n > i; ++i) {
                    s0 = s1, s1 = series[order[i]];
                    for (var j = 0; m > j; ++j) s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1]
                }
        }

        function none$1(series) {
            for (var n = series.length, o = new Array(n); --n >= 0;) o[n] = n;
            return o
        }

        function stackValue(d, key) {
            return d[key]
        }

        function stack() {
            function stack(data) {
                var i, oz, kz = keys.apply(this, arguments),
                    m = data.length,
                    n = kz.length,
                    sz = new Array(n);
                for (i = 0; n > i; ++i) {
                    for (var sij, ki = kz[i], si = sz[i] = new Array(m), j = 0; m > j; ++j) si[j] = sij = [0, +value(data[j], ki, j, data)], sij.data = data[j];
                    si.key = ki
                }
                for (i = 0, oz = order(sz); n > i; ++i) sz[oz[i]].index = i;
                return offset(sz, oz), sz
            }
            var keys = constant([]),
                order = none$1,
                offset = none,
                value = stackValue;
            return stack.keys = function (_) {
                return arguments.length ? (keys = "function" == typeof _ ? _ : constant(slice$1.call(_)), stack) : keys
            }, stack.value = function (_) {
                return arguments.length ? (value = "function" == typeof _ ? _ : constant(+_), stack) : value
            }, stack.order = function (_) {
                return arguments.length ? (order = null == _ ? none$1 : "function" == typeof _ ? _ : constant(slice$1.call(_)), stack) : order
            }, stack.offset = function (_) {
                return arguments.length ? (offset = null == _ ? none : _, stack) : offset
            }, stack
        }

        function expand(series, order) {
            if ((n = series.length) > 0) {
                for (var i, n, y, j = 0, m = series[0].length; m > j; ++j) {
                    for (y = i = 0; n > i; ++i) y += series[i][j][1] || 0;
                    if (y)
                        for (i = 0; n > i; ++i) series[i][j][1] /= y
                }
                none(series, order)
            }
        }

        function silhouette(series, order) {
            if ((n = series.length) > 0) {
                for (var n, j = 0, s0 = series[order[0]], m = s0.length; m > j; ++j) {
                    for (var i = 0, y = 0; n > i; ++i) y += series[i][j][1] || 0;
                    s0[j][1] += s0[j][0] = -y / 2
                }
                none(series, order)
            }
        }

        function wiggle(series, order) {
            if ((n = series.length) > 0 && (m = (s0 = series[order[0]]).length) > 0) {
                for (var s0, m, n, y = 0, j = 1; m > j; ++j) {
                    for (var i = 0, s1 = 0, s2 = 0; n > i; ++i) {
                        for (var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2, k = 0; i > k; ++k) {
                            var sk = series[order[k]],
                                skj0 = sk[j][1] || 0,
                                skj1 = sk[j - 1][1] || 0;
                            s3 += skj0 - skj1
                        }
                        s1 += sij0, s2 += s3 * sij0
                    }
                    s0[j - 1][1] += s0[j - 1][0] = y, s1 && (y -= s2 / s1)
                }
                s0[j - 1][1] += s0[j - 1][0] = y, none(series, order)
            }
        }

        function ascending(series) {
            var sums = series.map(sum);
            return none$1(series).sort(function (a, b) {
                return sums[a] - sums[b]
            })
        }

        function sum(series) {
            for (var v, s = 0, i = -1, n = series.length; ++i < n;)(v = +series[i][1]) && (s += v);
            return s
        }

        function descending(series) {
            return ascending(series).reverse()
        }

        function insideOut(series) {
            var i, j, n = series.length,
                sums = series.map(sum),
                order = none$1(series).sort(function (a, b) {
                    return sums[b] - sums[a]
                }),
                top = 0,
                bottom = 0,
                tops = [],
                bottoms = [];
            for (i = 0; n > i; ++i) j = order[i], bottom > top ? (top += sums[j], tops.push(j)) : (bottom += sums[j], bottoms.push(j));
            return bottoms.reverse().concat(tops)
        }

        function reverse(series) {
            return none$1(series).reverse()
        }
        var epsilon = 1e-12,
            pi = Math.PI,
            halfPi = pi / 2,
            tau = 2 * pi,
            slice = Array.prototype.slice;
        Linear.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._point = 0
            },
            lineEnd: function () {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function (x, y) {
                switch (x = +x, y = +y, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(x, y)
                }
            }
        }, Radial.prototype = {
            areaStart: function () {
                this._curve.areaStart()
            },
            areaEnd: function () {
                this._curve.areaEnd()
            },
            lineStart: function () {
                this._curve.lineStart()
            },
            lineEnd: function () {
                this._curve.lineEnd()
            },
            point: function (a, r) {
                a -= halfPi, this._curve.point(r * Math.cos(a), r * Math.sin(a))
            }
        };
        var circle = {
                draw: function (context, size) {
                    var r = Math.sqrt(size / pi);
                    context.moveTo(r, 0), context.arc(0, 0, r, 0, tau)
                }
            },
            cross = {
                draw: function (context, size) {
                    var r = Math.sqrt(size / 5) / 2;
                    context.moveTo(-3 * r, -r), context.lineTo(-r, -r), context.lineTo(-r, -3 * r), context.lineTo(r, -3 * r), context.lineTo(r, -r), context.lineTo(3 * r, -r), context.lineTo(3 * r, r), context.lineTo(r, r), context.lineTo(r, 3 * r), context.lineTo(-r, 3 * r), context.lineTo(-r, r), context.lineTo(-3 * r, r), context.closePath()
                }
            },
            tan30 = Math.sqrt(1 / 3),
            tan30_2 = 2 * tan30,
            diamond = {
                draw: function (context, size) {
                    var y = Math.sqrt(size / tan30_2),
                        x = y * tan30;
                    context.moveTo(0, -y), context.lineTo(x, 0), context.lineTo(0, y), context.lineTo(-x, 0), context.closePath()
                }
            },
            ka = .8908130915292852,
            kr = Math.sin(pi / 10) / Math.sin(7 * pi / 10),
            kx = Math.sin(tau / 10) * kr,
            ky = -Math.cos(tau / 10) * kr,
            star = {
                draw: function (context, size) {
                    var r = Math.sqrt(size * ka),
                        x = kx * r,
                        y = ky * r;
                    context.moveTo(0, -r), context.lineTo(x, y);
                    for (var i = 1; 5 > i; ++i) {
                        var a = tau * i / 5,
                            c = Math.cos(a),
                            s = Math.sin(a);
                        context.lineTo(s * r, -c * r), context.lineTo(c * x - s * y, s * x + c * y)
                    }
                    context.closePath()
                }
            },
            square = {
                draw: function (context, size) {
                    var w = Math.sqrt(size),
                        x = -w / 2;
                    context.rect(x, x, w, w)
                }
            },
            sqrt3 = Math.sqrt(3),
            triangle = {
                draw: function (context, size) {
                    var y = -Math.sqrt(size / (3 * sqrt3));
                    context.moveTo(0, 2 * y), context.lineTo(-sqrt3 * y, -y), context.lineTo(sqrt3 * y, -y), context.closePath()
                }
            },
            c = -.5,
            s = Math.sqrt(3) / 2,
            k = 1 / Math.sqrt(12),
            a = 3 * (k / 2 + 1),
            wye = {
                draw: function (context, size) {
                    var r = Math.sqrt(size / a),
                        x0 = r / 2,
                        y0 = r * k,
                        x1 = x0,
                        y1 = r * k + r,
                        x2 = -x1,
                        y2 = y1;
                    context.moveTo(x0, y0), context.lineTo(x1, y1), context.lineTo(x2, y2), context.lineTo(c * x0 - s * y0, s * x0 + c * y0), context.lineTo(c * x1 - s * y1, s * x1 + c * y1), context.lineTo(c * x2 - s * y2, s * x2 + c * y2), context.lineTo(c * x0 + s * y0, c * y0 - s * x0), context.lineTo(c * x1 + s * y1, c * y1 - s * x1), context.lineTo(c * x2 + s * y2, c * y2 - s * x2), context.closePath()
                }
            },
            symbols = [circle, cross, diamond, square, star, triangle, wye];
        Basis.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            },
            lineEnd: function () {
                switch (this._point) {
                    case 3:
                        point(this, this._x1, this._y1);
                    case 2:
                        this._context.lineTo(this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function (x, y) {
                switch (x = +x, y = +y, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                    default:
                        point(this, x, y)
                }
                this._x0 = this._x1, this._x1 = x, this._y0 = this._y1, this._y1 = y
            }
        }, BasisClosed.prototype = {
            areaStart: noop,
            areaEnd: noop,
            lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
            },
            lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                    case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                }
            },
            point: function (x, y) {
                switch (x = +x, y = +y, this._point) {
                    case 0:
                        this._point = 1, this._x2 = x, this._y2 = y;
                        break;
                    case 1:
                        this._point = 2, this._x3 = x, this._y3 = y;
                        break;
                    case 2:
                        this._point = 3, this._x4 = x, this._y4 = y, this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
                        break;
                    default:
                        point(this, x, y)
                }
                this._x0 = this._x1, this._x1 = x, this._y0 = this._y1, this._y1 = y
            }
        }, BasisOpen.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            },
            lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function (x, y) {
                switch (x = +x, y = +y, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                        var x0 = (this._x0 + 4 * this._x1 + x) / 6,
                            y0 = (this._y0 + 4 * this._y1 + y) / 6;
                        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        point(this, x, y)
                }
                this._x0 = this._x1, this._x1 = x, this._y0 = this._y1, this._y1 = y
            }
        }, Bundle.prototype = {
            lineStart: function () {
                this._x = [], this._y = [], this._basis.lineStart()
            },
            lineEnd: function () {
                var x = this._x,
                    y = this._y,
                    j = x.length - 1;
                if (j > 0)
                    for (var t, x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i = -1; ++i <= j;) t = i / j, this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
                this._x = this._y = null, this._basis.lineEnd()
            },
            point: function (x, y) {
                this._x.push(+x), this._y.push(+y)
            }
        }, Cardinal.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            },
            lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        point$1(this, this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function (x, y) {
                switch (x = +x, y = +y, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                        break;
                    case 1:
                        this._point = 2, this._x1 = x, this._y1 = y;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        point$1(this, x, y)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, this._y0 = this._y1, this._y1 = this._y2, this._y2 = y
            }
        }, CardinalClosed.prototype = {
            areaStart: noop,
            areaEnd: noop,
            lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
            },
            lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function (x, y) {
                switch (x = +x, y = +y, this._point) {
                    case 0:
                        this._point = 1, this._x3 = x, this._y3 = y;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = x, this._y4 = y);
                        break;
                    case 2:
                        this._point = 3, this._x5 = x, this._y5 = y;
                        break;
                    default:
                        point$1(this, x, y)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, this._y0 = this._y1, this._y1 = this._y2, this._y2 = y
            }
        }, CardinalOpen.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            },
            lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function (x, y) {
                switch (x = +x, y = +y, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        point$1(this, x, y)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, this._y0 = this._y1, this._y1 = this._y2, this._y2 = y
            }
        }, CatmullRom.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        this.point(this, this._x2, this._y2)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function (x, y) {
                if (x = +x, y = +y, this._point) {
                    var x23 = this._x2 - x,
                        y23 = this._y2 - y;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        point$2(this, x, y)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, this._y0 = this._y1, this._y1 = this._y2, this._y2 = y
            }
        }, CatmullRomClosed.prototype = {
            areaStart: noop,
            areaEnd: noop,
            lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function (x, y) {
                if (x = +x, y = +y, this._point) {
                    var x23 = this._x2 - x,
                        y23 = this._y2 - y;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._x3 = x, this._y3 = y;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = x, this._y4 = y);
                        break;
                    case 2:
                        this._point = 3, this._x5 = x, this._y5 = y;
                        break;
                    default:
                        point$2(this, x, y)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, this._y0 = this._y1, this._y1 = this._y2, this._y2 = y
            }
        }, CatmullRomOpen.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function (x, y) {
                if (x = +x, y = +y, this._point) {
                    var x23 = this._x2 - x,
                        y23 = this._y2 - y;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        point$2(this, x, y)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, this._y0 = this._y1, this._y1 = this._y2, this._y2 = y
            }
        }, LinearClosed.prototype = {
            areaStart: noop,
            areaEnd: noop,
            lineStart: function () {
                this._point = 0
            },
            lineEnd: function () {
                this._point && this._context.closePath()
            },
            point: function (x, y) {
                x = +x, y = +y, this._point ? this._context.lineTo(x, y) : (this._point = 1, this._context.moveTo(x, y))
            }
        }, MonotoneX.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
            },
            lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                    case 3:
                        point$3(this, this._t0, slope2(this, this._t0))
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function (x, y) {
                var t1 = NaN;
                if (x = +x, y = +y, x !== this._x1 || y !== this._y1) {
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, point$3(this, slope2(this, t1 = slope3(this, x, y)), t1);
                            break;
                        default:
                            point$3(this, this._t0, t1 = slope3(this, x, y))
                    }
                    this._x0 = this._x1, this._x1 = x, this._y0 = this._y1, this._y1 = y, this._t0 = t1
                }
            }
        }, (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function (x, y) {
            MonotoneX.prototype.point.call(this, y, x)
        }, ReflectContext.prototype = {
            moveTo: function (x, y) {
                this._context.moveTo(y, x)
            },
            closePath: function () {
                this._context.closePath()
            },
            lineTo: function (x, y) {
                this._context.lineTo(y, x)
            },
            bezierCurveTo: function (x1, y1, x2, y2, x, y) {
                this._context.bezierCurveTo(y1, x1, y2, x2, y, x)
            }
        }, Natural.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._x = [], this._y = []
            },
            lineEnd: function () {
                var x = this._x,
                    y = this._y,
                    n = x.length;
                if (n)
                    if (this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]), 2 === n) this._context.lineTo(x[1], y[1]);
                    else
                        for (var px = controlPoints(x), py = controlPoints(y), i0 = 0, i1 = 1; n > i1; ++i0, ++i1) this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
                (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
            },
            point: function (x, y) {
                this._x.push(+x), this._y.push(+y)
            }
        }, Step.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._x = this._y = NaN, this._point = 0
            },
            lineEnd: function () {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function (x, y) {
                switch (x = +x, y = +y, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        var t = x > this._x ? this._t : 1 - this._t;
                        if (0 >= t) this._context.lineTo(this._x, y), this._context.lineTo(x, y);
                        else if (t >= 1) this._context.lineTo(x, this._y), this._context.lineTo(x, y);
                        else {
                            var x1 = (this._x + x) * t;
                            this._context.lineTo(x1, this._y), this._context.lineTo(x1, y)
                        }
                }
                this._x = x, this._y = y
            }
        };
        var slice$1 = Array.prototype.slice,
            version = "0.5.1";
        exports.version = version, exports.arc = arc, exports.area = area, exports.line = line, exports.pie = pie, exports.radialArea = radialArea, exports.radialLine = radialLine, exports.symbol = symbol, exports.symbols = symbols, exports.symbolCircle = circle, exports.symbolCross = cross, exports.symbolDiamond = diamond, exports.symbolSquare = square, exports.symbolStar = star, exports.symbolTriangle = triangle, exports.symbolWye = wye, exports.curveBasisClosed = basisClosed, exports.curveBasisOpen = basisOpen, exports.curveBasis = basis, exports.curveBundle = bundle, exports.curveCardinalClosed = cardinalClosed, exports.curveCardinalOpen = cardinalOpen, exports.curveCardinal = cardinal, exports.curveCatmullRomClosed = catmullRomClosed, exports.curveCatmullRomOpen = catmullRomOpen, exports.curveCatmullRom = catmullRom, exports.curveLinearClosed = linearClosed, exports.curveLinear = curveLinear, exports.curveMonotoneX = monotoneX, exports.curveMonotoneY = monotoneY, exports.curveNatural = natural, exports.curveStep = step, exports.curveStepAfter = stepAfter, exports.curveStepBefore = stepBefore, exports.stack = stack, exports.stackOffsetExpand = expand, exports.stackOffsetNone = none, exports.stackOffsetSilhouette = silhouette, exports.stackOffsetWiggle = wiggle, exports.stackOrderAscending = ascending, exports.stackOrderDescending = descending, exports.stackOrderInsideOut = insideOut, exports.stackOrderNone = none$1, exports.stackOrderReverse = reverse
    })
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports)
    }(this, function (exports) {
        "use strict";

        function Path() {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = []
        }

        function path() {
            return new Path
        }
        var pi = Math.PI,
            tau = 2 * pi,
            epsilon = 1e-6,
            tauEpsilon = tau - epsilon;
        Path.prototype = path.prototype = {
            constructor: Path,
            moveTo: function (x, y) {
                this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y)
            },
            closePath: function () {
                null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._.push("Z"))
            },
            lineTo: function (x, y) {
                this._.push("L", this._x1 = +x, ",", this._y1 = +y)
            },
            quadraticCurveTo: function (x1, y1, x, y) {
                this._.push("Q", +x1, ",", +y1, ",", this._x1 = +x, ",", this._y1 = +y)
            },
            bezierCurveTo: function (x1, y1, x2, y2, x, y) {
                this._.push("C", +x1, ",", +y1, ",", +x2, ",", +y2, ",", this._x1 = +x, ",", this._y1 = +y)
            },
            arcTo: function (x1, y1, x2, y2, r) {
                x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
                var x0 = this._x1,
                    y0 = this._y1,
                    x21 = x2 - x1,
                    y21 = y2 - y1,
                    x01 = x0 - x1,
                    y01 = y0 - y1,
                    l01_2 = x01 * x01 + y01 * y01;
                if (0 > r) throw new Error("negative radius: " + r);
                if (null === this._x1) this._.push("M", this._x1 = x1, ",", this._y1 = y1);
                else if (l01_2 > epsilon)
                    if (Math.abs(y01 * x21 - y21 * x01) > epsilon && r) {
                        var x20 = x2 - x0,
                            y20 = y2 - y0,
                            l21_2 = x21 * x21 + y21 * y21,
                            l20_2 = x20 * x20 + y20 * y20,
                            l21 = Math.sqrt(l21_2),
                            l01 = Math.sqrt(l01_2),
                            l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
                            t01 = l / l01,
                            t21 = l / l21;
                        Math.abs(t01 - 1) > epsilon && this._.push("L", x1 + t01 * x01, ",", y1 + t01 * y01), this._.push("A", r, ",", r, ",0,0,", +(y01 * x20 > x01 * y20), ",", this._x1 = x1 + t21 * x21, ",", this._y1 = y1 + t21 * y21)
                    } else this._.push("L", this._x1 = x1, ",", this._y1 = y1);
                else;
            },
            arc: function (x, y, r, a0, a1, ccw) {
                x = +x, y = +y, r = +r;
                var dx = r * Math.cos(a0),
                    dy = r * Math.sin(a0),
                    x0 = x + dx,
                    y0 = y + dy,
                    cw = 1 ^ ccw,
                    da = ccw ? a0 - a1 : a1 - a0;
                if (0 > r) throw new Error("negative radius: " + r);
                null === this._x1 ? this._.push("M", x0, ",", y0) : (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) && this._.push("L", x0, ",", y0), r && (da > tauEpsilon ? this._.push("A", r, ",", r, ",0,1,", cw, ",", x - dx, ",", y - dy, "A", r, ",", r, ",0,1,", cw, ",", this._x1 = x0, ",", this._y1 = y0) : (0 > da && (da = da % tau + tau), this._.push("A", r, ",", r, ",0,", +(da >= pi), ",", cw, ",", this._x1 = x + r * Math.cos(a1), ",", this._y1 = y + r * Math.sin(a1))))
            },
            rect: function (x, y, w, h) {
                this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y, "h", +w, "v", +h, "h", -w, "Z")
            },
            toString: function () {
                return this._.join("")
            }
        };
        var version = "0.1.5";
        exports.version = version, exports.path = path
    })
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _d3Shape = __webpack_require__(50),
        _d3Shape2 = _interopRequireDefault(_d3Shape),
        _commonProps = __webpack_require__(47),
        _commonProps2 = _interopRequireDefault(_commonProps),
        _series = __webpack_require__(44),
        Area = function (_Component) {
            function Area(props) {
                return _classCallCheck(this, Area), _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, props))
            }
            return _inherits(Area, _Component), _createClass(Area, [{
                key: "_mkArea",
                value: function () {
                    var _props = this.props,
                        areaClassName = _props.areaClassName,
                        dataset = (_props.areaOpacity, (0, _series.series)(this.props)),
                        that = this;
                    return _react2["default"].createElement("g", null, dataset.map(function (area) {
                        return _react2["default"].createElement("path", {
                            className: areaClassName + " area",
                            fill: area.color,
                            d: that._setAxes(area.data),
                            style: area.style
                        })
                    }))
                }
            }, {
                key: "_setAxes",
                value: function (data) {
                    var _props2 = this.props,
                        xScaleSet = (_props2.height,
                            _props2.margins, _props2.xScaleSet),
                        yScaleSet = _props2.yScaleSet,
                        area = _d3Shape2["default"].area().x(function (d) {
                            return xScaleSet(d.x)
                        }).y0(function (d) {
                            var domain = yScaleSet.domain();
                            return domain[0] * domain[1] < 0 ? yScaleSet(0) : domain[0] * domain[1] >= 0 && domain[0] >= 0 ? yScaleSet.range()[0] : domain[0] * domain[1] >= 0 && domain[0] < 0 ? yScaleSet.range()[1] : void 0
                        }).y1(function (d) {
                            return yScaleSet(d.y)
                        });
                    return area.call(this, data)
                }
            }, {
                key: "render",
                value: function () {
                    var area = this._mkArea();
                    return _react2["default"].createElement("g", null, area)
                }
            }]), Area
        }(_react.Component);
    Area.defaultProps = _extends({
        areaClassName: "react-d3-basic__area"
    }, _commonProps2["default"]), exports["default"] = Area
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _d3Shape = __webpack_require__(50),
        _d3Shape2 = _interopRequireDefault(_d3Shape),
        _commonProps = __webpack_require__(47),
        _commonProps2 = _interopRequireDefault(_commonProps),
        _series = __webpack_require__(44),
        AreaStack = function (_Component) {
            function AreaStack(props) {
                return _classCallCheck(this, AreaStack), _possibleConstructorReturn(this, Object.getPrototypeOf(AreaStack).call(this, props))
            }
            return _inherits(AreaStack, _Component), _createClass(AreaStack, [{
                key: "_mkStack",
                value: function () {
                    var areaClassName = this.props.areaClassName,
                        dataset = (0, _series.series)(this.props),
                        _setStack = this._setStack(),
                        _setAxes = this._setAxes();
                    return _react2["default"].createElement("g", null, _setStack(dataset).map(function (area) {
                        return _react2["default"].createElement("path", {
                            className: areaClassName + " area",
                            fill: area.color,
                            d: _setAxes(area.data),
                            style: area.style
                        })
                    }))
                }
            }, {
                key: "_setStack",
                value: function () {
                    var chartSeries = this.props.chartSeries,
                        buildOut = function (len) {
                            var currentXOffsets = [],
                                currentXIndex = 0;
                            return function (d, y0, y) {
                                currentXIndex++ % len === 0 && (currentXOffsets = [0, 0]), y >= 0 ? (d.y0 = currentXOffsets[1], d.y = y, currentXOffsets[1] += y) : (d.y0 = currentXOffsets[0] + y, d.y = -y, currentXOffsets[0] += y)
                            }
                        };
                    return d3.layout.stack().values(function (d) {
                        return d.data
                    }).out(buildOut(chartSeries.length))
                }
            }, {
                key: "_setAxes",
                value: function () {
                    var _props = this.props,
                        xScaleSet = _props.xScaleSet,
                        yScaleSet = _props.yScaleSet;
                    return _d3Shape2["default"].area().x(function (d) {
                        return xScaleSet(d.x)
                    }).y0(function (d) {
                        return yScaleSet(d.y0)
                    }).y1(function (d) {
                        return yScaleSet(d.y0 + d.y)
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var area = this._mkStack();
                    return _react2["default"].createElement("g", null, area)
                }
            }]), AreaStack
        }(_react.Component);
    AreaStack.defaultProps = _extends({
        areaClass: "react-d3-basics__area_stack",
        areaClassName: "react-d3-basic__area_stack"
    }, _commonProps2["default"]), exports["default"] = AreaStack
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _series = __webpack_require__(44),
        Bar = function (_Component) {
            function Bar(props) {
                return _classCallCheck(this, Bar), _possibleConstructorReturn(this, Object.getPrototypeOf(Bar).call(this, props))
            }
            return _inherits(Bar, _Component), _createClass(Bar, [{
                key: "triggerOver",
                value: function (data, e) {
                    this.props.onMouseOver(e, data)
                }
            }, {
                key: "triggerOut",
                value: function (data, e) {
                    this.props.onMouseOut(e, data)
                }
            }, {
                key: "_mkBar",
                value: function () {
                    var zeroBase, _this2 = this,
                        _props = this.props,
                        barClassName = (_props.height, _props.width, _props.margins, _props.barClassName),
                        xScaleSet = _props.xScaleSet,
                        yScaleSet = _props.yScaleSet,
                        that = this,
                        dataset = (0, _series.series)(this.props)[0],
                        domain = yScaleSet.domain();
                    return domain[0] * domain[1] < 0 ? zeroBase = yScaleSet(0) : domain[0] * domain[1] >= 0 && domain[0] >= 0 ? zeroBase = yScaleSet.range()[0] : domain[0] * domain[1] >= 0 && domain[0] < 0 && (zeroBase = yScaleSet.range()[1]), _react2["default"].createElement("g", null, dataset.data.map(function (bar) {
                        return _react2["default"].createElement("rect", {
                            className: barClassName + " bar",
                            x: xScaleSet(bar.x) || 0 === xScaleSet(bar.x) ? xScaleSet(bar.x) : -1e4,
                            y: bar.y < 0 ? zeroBase : yScaleSet(bar.y),
                            width: xScaleSet.bandwidth(),
                            height: bar.y < domain[0] ? 0 : Math.abs(zeroBase - yScaleSet(bar.y)),
                            fill: bar._style.color ? bar._style.color : dataset.color,
                            style: Object.assign({}, dataset.style, bar._style),
                            onMouseOut: that.triggerOut.bind(_this2, bar),
                            onMouseOver: that.triggerOver.bind(_this2, bar)
                        })
                    }))
                }
            }, {
                key: "render",
                value: function () {
                    var bar = this._mkBar();
                    return _react2["default"].createElement("g", null, bar)
                }
            }]), Bar
        }(_react.Component);
    Bar.defaultProps = {
        onMouseOver: function (d) {},
        onMouseOut: function (d) {},
        barClassName: "react-d3-basic__bar"
    }, exports["default"] = Bar
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _series = __webpack_require__(44),
        BarHorizontal = function (_Component) {
            function BarHorizontal(props) {
                return _classCallCheck(this, BarHorizontal), _possibleConstructorReturn(this, Object.getPrototypeOf(BarHorizontal).call(this, props))
            }
            return _inherits(BarHorizontal, _Component), _createClass(BarHorizontal, [{
                key: "triggerOver",
                value: function (data, e) {
                    this.props.onMouseOver(e, data)
                }
            }, {
                key: "triggerOut",
                value: function (data, e) {
                    this.props.onMouseOut(e, data)
                }
            }, {
                key: "_mkBar",
                value: function (dom) {
                    var zeroBase, _this2 = this,
                        _props = this.props,
                        barClassName = (_props.height, _props.margins, _props.barClassName),
                        xScaleSet = _props.xScaleSet,
                        yScaleSet = _props.yScaleSet,
                        that = this,
                        dataset = (0, _series.series)(this.props, !0)[0],
                        domain = xScaleSet.domain();
                    return domain[0] * domain[1] < 0 ? zeroBase = xScaleSet(0) : domain[0] * domain[1] >= 0 && domain[0] >= 0 ? zeroBase = xScaleSet.range()[0] : domain[0] * domain[1] >= 0 && domain[0] < 0 && (zeroBase = xScaleSet.range()[1]), _react2["default"].createElement("g", null, dataset.data.map(function (bar) {
                        return _react2["default"].createElement("rect", {
                            className: barClassName + " bar",
                            y: yScaleSet(bar.y) || 0 === yScaleSet(bar.y) ? yScaleSet(bar.y) : -1e4,
                            x: bar.x > 0 ? zeroBase : zeroBase - Math.abs(zeroBase - xScaleSet(bar.x)),
                            height: yScaleSet.bandwidth(),
                            width: bar.x < domain[0] ? 0 : Math.abs(zeroBase - xScaleSet(bar.x)),
                            fill: bar._style.color ? bar._style.color : dataset.color,
                            style: Object.assign({}, dataset.style, bar._style),
                            onMouseOut: that.triggerOut.bind(_this2, bar),
                            onMouseOver: that.triggerOver.bind(_this2, bar)
                        })
                    }))
                }
            }, {
                key: "render",
                value: function () {
                    var bar = this._mkBar();
                    return _react2["default"].createElement("g", null, bar)
                }
            }]), BarHorizontal
        }(_react.Component);
    BarHorizontal.defaultProps = {
        onMouseOver: function (d) {},
        onMouseOut: function (d) {},
        barClassName: "react-d3-basic__bar_horizontal"
    }, exports["default"] = BarHorizontal
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _d3Scale = __webpack_require__(7),
        _d3Scale2 = _interopRequireDefault(_d3Scale),
        _series = __webpack_require__(44),
        BarGroup = function (_Component) {
            function BarGroup(props) {
                return _classCallCheck(this, BarGroup), _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroup).call(this, props))
            }
            return _inherits(BarGroup, _Component), _createClass(BarGroup, [{
                key: "triggerOver",
                value: function (data, e) {
                    this.props.onMouseOver(e, data)
                }
            }, {
                key: "triggerOut",
                value: function (data, e) {
                    this.props.onMouseOut(e, data)
                }
            }, {
                key: "_mkBarGroup",
                value: function (dom) {
                    var _this2 = this,
                        _props = this.props,
                        barClassName = (_props.height, _props.margins, _props.barClassName),
                        xScaleSet = _props.xScaleSet,
                        yScaleSet = _props.yScaleSet,
                        that = this,
                        dataset = (0, _series.series)(this.props),
                        x1 = _d3Scale2["default"].scaleBand();
                    x1.domain(dataset.map(function (d) {
                        return d.field
                    })).range([0, xScaleSet.bandwidth()]).padding(.1).round(!0);
                    var zeroBase, domain = yScaleSet.domain();
                    return domain[0] * domain[1] < 0 ? zeroBase = yScaleSet(0) : domain[0] * domain[1] >= 0 && domain[0] >= 0 ? zeroBase = yScaleSet.range()[0] : domain[0] * domain[1] >= 0 && domain[0] < 0 && (zeroBase = yScaleSet.range()[1]), dataset.map(function (barGroup, i) {
                        return _react2["default"].createElement("g", {
                            className: "bargroup"
                        }, barGroup.data.map(function (bar) {
                            return _react2["default"].createElement("rect", {
                                className: barClassName + " bar",
                                width: x1.bandwidth(),
                                x: xScaleSet(bar.x) || 0 === xScaleSet(bar.x) ? xScaleSet(bar.x) + x1.bandwidth() * i : -1e4,
                                y: bar.y < 0 ? zeroBase : yScaleSet(bar.y),
                                height: bar.y < domain[0] ? 0 : Math.abs(zeroBase - yScaleSet(bar.y)),
                                fill: barGroup.color,
                                onMouseOut: that.triggerOut.bind(_this2, bar),
                                onMouseOver: that.triggerOver.bind(_this2, bar),
                                style: barGroup.style
                            })
                        }))
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var bar = this._mkBarGroup();
                    return _react2["default"].createElement("g", null, bar)
                }
            }]), BarGroup
        }(_react.Component);
    BarGroup.defaultProps = {
        onMouseOver: function (d) {},
        onMouseOut: function (d) {},
        barClassName: "react-d3-basic__bar_group"
    }, exports["default"] = BarGroup
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _d3Scale = __webpack_require__(7),
        _d3Scale2 = _interopRequireDefault(_d3Scale),
        _series = __webpack_require__(44),
        BarGroupHorizontal = function (_Component) {
            function BarGroupHorizontal(props) {
                return _classCallCheck(this, BarGroupHorizontal), _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroupHorizontal).call(this, props))
            }
            return _inherits(BarGroupHorizontal, _Component), _createClass(BarGroupHorizontal, [{
                key: "triggerOver",
                value: function (data, e) {
                    this.props.onMouseOver(e, data)
                }
            }, {
                key: "triggerOut",
                value: function (data, e) {
                    this.props.onMouseOut(e, data)
                }
            }, {
                key: "_mkBarGroup",
                value: function () {
                    var _this2 = this,
                        _props = this.props,
                        barClassName = (_props.height, _props.margins, _props.barClassName),
                        xScaleSet = _props.xScaleSet,
                        yScaleSet = _props.yScaleSet,
                        that = (_props.onMouseOut, _props.onMouseOver, this),
                        dataset = (0, _series.series)(this.props, !0),
                        y1 = _d3Scale2["default"].scaleBand();
                    y1.domain(dataset.map(function (d) {
                        return d.field
                    })).range([0, yScaleSet.bandwidth()]).padding(.1).round(!0);
                    var zeroBase, domain = xScaleSet.domain();
                    return domain[0] * domain[1] < 0 ? zeroBase = xScaleSet(0) : domain[0] * domain[1] >= 0 && domain[0] >= 0 ? zeroBase = xScaleSet.range()[0] : domain[0] * domain[1] >= 0 && domain[0] < 0 && (zeroBase = xScaleSet.range()[1]), _react2["default"].createElement("g", null, dataset.map(function (barGroup, i) {
                        return _react2["default"].createElement("g", {
                            className: "bargroup"
                        }, barGroup.data.map(function (bar) {
                            return _react2["default"].createElement("rect", {
                                className: barClassName + " bar",
                                height: y1.bandwidth(),
                                y: yScaleSet(bar.y) || 0 === yScaleSet(bar.y) ? yScaleSet(bar.y) + y1.bandwidth() * i : -1e4,
                                x: bar.x > 0 ? zeroBase : zeroBase - Math.abs(zeroBase - xScaleSet(bar.x)),
                                width: bar.x < domain[0] ? 0 : Math.abs(zeroBase - xScaleSet(bar.x)),
                                fill: barGroup.color,
                                onMouseOut: that.triggerOut.bind(_this2, bar),
                                onMouseOver: that.triggerOver.bind(_this2, bar),
                                style: barGroup.style
                            })
                        }))
                    }))
                }
            }, {
                key: "render",
                value: function () {
                    var bar = this._mkBarGroup();
                    return _react2["default"].createElement("g", null, bar)
                }
            }]), BarGroupHorizontal
        }(_react.Component);
    BarGroupHorizontal.defaultProps = {
        onMouseOver: function (d) {},
        onMouseOut: function (d) {},
        barClassName: "react-d3-basic__bar_group_horizontal"
    }, exports["default"] = BarGroupHorizontal
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _d = __webpack_require__(45),
        _d2 = _interopRequireDefault(_d),
        _series = __webpack_require__(44),
        BarStack = function (_Component) {
            function BarStack(props) {
                return _classCallCheck(this, BarStack), _possibleConstructorReturn(this, Object.getPrototypeOf(BarStack).call(this, props))
            }
            return _inherits(BarStack, _Component), _createClass(BarStack, [{
                key: "triggerOver",
                value: function (data, e) {
                    this.props.onMouseOver(e, data)
                }
            }, {
                key: "triggerOut",
                value: function (data, e) {
                    this.props.onMouseOut(e, data)
                }
            }, {
                key: "_mkBarStack",
                value: function () {
                    var zeroBase, _this2 = this,
                        _props = this.props,
                        barClassName = (_props.height, _props.margins, _props.barClassName),
                        xScaleSet = _props.xScaleSet,
                        yScaleSet = _props.yScaleSet,
                        that = this,
                        dataset = (0, _series.series)(this.props),
                        _setStack = this._setStack(),
                        domain = yScaleSet.domain();
                    return domain[0] * domain[1] < 0 ? zeroBase = yScaleSet(0) : domain[0] * domain[1] >= 0 && domain[0] >= 0 ? zeroBase = yScaleSet.range()[0] : domain[0] * domain[1] >= 0 && domain[0] < 0 && (zeroBase = yScaleSet.range()[1]), _react2["default"].createElement("g", null, _setStack(dataset).map(function (barGroup) {
                        return _react2["default"].createElement("g", {
                            className: "barGroup",
                            fill: barGroup.color,
                            style: barGroup.style
                        }, barGroup.data.map(function (bar) {
                            return _react2["default"].createElement("rect", {
                                className: barClassName + " bar",
                                width: xScaleSet.bandwidth(),
                                x: xScaleSet(bar.x) || 0 === xScaleSet(bar.x) ? xScaleSet(bar.x) : -1e4,
                                y: yScaleSet(bar.y0 + bar.y),
                                height: Math.abs(yScaleSet(bar.y) - yScaleSet(0)),
                                onMouseOut: that.triggerOut.bind(_this2, bar),
                                onMouseOver: that.triggerOver.bind(_this2, bar)
                            })
                        }))
                    }))
                }
            }, {
                key: "_setStack",
                value: function () {
                    var chartSeries = this.props.chartSeries,
                        buildOut = function (len) {
                            var currentXOffsets = [],
                                currentXIndex = 0;
                            return function (d, y0, y) {
                                currentXIndex++ % len === 0 && (currentXOffsets = [0, 0]), y >= 0 ? (d.y0 = currentXOffsets[1], d.y = y, currentXOffsets[1] += y) : (d.y0 = currentXOffsets[0] + y, d.y = -y, currentXOffsets[0] += y)
                            }
                        };
                    return _d2["default"].layout.stack().values(function (d) {
                        return d.data
                    }).out(buildOut(chartSeries.length))
                }
            }, {
                key: "render",
                value: function () {
                    var bar = this._mkBarStack();
                    return _react2["default"].createElement("g", null, bar)
                }
            }]), BarStack
        }(_react.Component);
    BarStack.defaultProps = {
        onMouseOver: function (d) {},
        onMouseOut: function (d) {},
        barClassName: "react-d3-basic__bar_stack"
    }, exports["default"] = BarStack
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _d = __webpack_require__(45),
        _d2 = _interopRequireDefault(_d),
        _series = __webpack_require__(44),
        BarStackHorizontal = function (_Component) {
            function BarStackHorizontal(props) {
                return _classCallCheck(this, BarStackHorizontal), _possibleConstructorReturn(this, Object.getPrototypeOf(BarStackHorizontal).call(this, props))
            }
            return _inherits(BarStackHorizontal, _Component), _createClass(BarStackHorizontal, [{
                key: "triggerOver",
                value: function (data, e) {
                    this.props.onMouseOver(e, data)
                }
            }, {
                key: "triggerOut",
                value: function (data, e) {
                    this.props.onMouseOut(e, data)
                }
            }, {
                key: "_mkBarStack",
                value: function (dom) {
                    var zeroBase, _this2 = this,
                        _props = this.props,
                        barClassName = (_props.height, _props.margins, _props.barClassName),
                        xScaleSet = _props.xScaleSet,
                        yScaleSet = _props.yScaleSet,
                        that = this,
                        dataset = (0, _series.series)(this.props, !0),
                        _setStack = this._setStack(),
                        domain = (_d2["default"].select(dom).attr("class", "g"), xScaleSet.domain());
                    return domain[0] * domain[1] < 0 ? zeroBase = xScaleSet(0) : domain[0] * domain[1] >= 0 && domain[0] >= 0 ? zeroBase = xScaleSet.range()[0] : domain[0] * domain[1] >= 0 && domain[0] < 0 && (zeroBase = xScaleSet.range()[1]), _react2["default"].createElement("g", null, _setStack(dataset).map(function (barGroup) {
                        return _react2["default"].createElement("g", {
                            className: "barGroup",
                            fill: barGroup.color,
                            style: barGroup.style
                        }, barGroup.data.map(function (bar) {
                            return _react2["default"].createElement("rect", {
                                className: barClassName + " bar",
                                height: yScaleSet.bandwidth(),
                                y: yScaleSet(bar.y) || 0 === yScaleSet(bar.y) ? yScaleSet(bar.y) : -1e4,
                                x: xScaleSet(bar.x0),
                                width: Math.abs(xScaleSet(bar.x) - xScaleSet(0)),
                                onMouseOut: that.triggerOut.bind(_this2, bar),
                                onMouseOver: that.triggerOver.bind(_this2, bar)
                            })
                        }))
                    }))
                }
            }, {
                key: "_setStack",
                value: function () {
                    var chartSeries = this.props.chartSeries,
                        buildOut = function (len) {
                            var currentXOffsets = [],
                                currentXIndex = 0;
                            return function (d, x0, x) {
                                currentXIndex++ % len === 0 && (currentXOffsets = [0, 0]), x >= 0 ? (d.x0 = currentXOffsets[1], d.x = x, currentXOffsets[1] += x) : (d.x0 = currentXOffsets[0] + x, d.x = -x, currentXOffsets[0] += x)
                            }
                        };
                    return _d2["default"].layout.stack().values(function (d) {
                        return d.data
                    }).y(function (d) {
                        return d.x
                    }).out(buildOut(chartSeries.length))
                }
            }, {
                key: "render",
                value: function () {
                    var bar = this._mkBarStack();
                    return _react2["default"].createElement("g", null, bar)
                }
            }]), BarStackHorizontal
        }(_react.Component);
    BarStackHorizontal.defaultProps = {
        onMouseOver: function (d) {},
        onMouseOut: function (d) {},
        barClassName: "react-d3-basic__bar_stack_horizontal"
    }, exports["default"] = BarStackHorizontal
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _d3Shape = __webpack_require__(50),
        _d3Shape2 = _interopRequireDefault(_d3Shape),
        _commonProps = __webpack_require__(47),
        Pie = function (_Component) {
            function Pie(props) {
                return _classCallCheck(this, Pie), _possibleConstructorReturn(this, Object.getPrototypeOf(Pie).call(this, props))
            }
            return _inherits(Pie, _Component), _createClass(Pie, [{
                key: "triggerOver",
                value: function (data, e) {
                    this.props.onMouseOver(e, data)
                }
            }, {
                key: "triggerOut",
                value: function (data, e) {
                    this.props.onMouseOut(e, data)
                }
            }, {
                key: "mkSeries",
                value: function () {
                    var _props = this.props,
                        data = _props.data,
                        chartSeries = _props.chartSeries,
                        value = _props.value,
                        name = _props.name,
                        categoricalColors = _props.categoricalColors,
                        chartSeriesData = chartSeries.map(function (f, i) {
                            f.color || (f.color = categoricalColors(i)), f.name || (f.name = f.field);
                            var val;
                            return data.forEach(function (d) {
                                name(d) === f.field && (val = d)
                            }), Object.assign(f, {
                                value: value(val)
                            })
                        });
                    return chartSeriesData
                }
            }, {
                key: "_mkPie",
                value: function () {
                    var _this2 = this,
                        _props2 = this.props,
                        width = _props2.width,
                        height = _props2.height,
                        innerRadius = _props2.innerRadius,
                        outerRadius = _props2.outerRadius,
                        pieSort = _props2.pieSort,
                        radius = (_props2.value, _props2.radius),
                        pieTextShow = _props2.pieTextShow,
                        that = this,
                        radius = this.props.radius || Math.min(width - 100, height - 100) / 2,
                        outerRadius = outerRadius || radius - 10,
                        labelr = radius + 10,
                        chartSeriesData = this.mkSeries(),
                        arc = _d3Shape2["default"].arc().outerRadius(outerRadius).innerRadius(innerRadius),
                        pie = (_d3Shape2["default"].arc().outerRadius(outerRadius + 10).innerRadius(innerRadius), _d3Shape2["default"].pie().sort(function (a, b) {
                            return pieSort(a.value, b.value)
                        }).value(function (d) {
                            return d.value
                        }));
                    return _react2["default"].createElement("g", {
                        className: "arc"
                    }, pie(chartSeriesData).map(function (slice, i) {
                        var textTransform = function (d) {
                                var c = arc.centroid(d),
                                    x = c[0],
                                    y = c[1],
                                    h = Math.sqrt(x * x + y * y);
                                return "translate(" + x / h * labelr + "," + y / h * labelr + ")"
                            },
                            textAnchor = function (d) {
                                return (d.endAngle + d.startAngle) / 2 > Math.PI ? "end" : "start"
                            };
                        return _react2["default"].createElement("g", {
                            key: i
                        }, _react2["default"].createElement("path", {
                            d: arc(slice),
                            style: _extends({
                                fill: slice.data.color,
                                stroke: "#FFF"
                            }, slice.data.style),
                            onMouseOut: that.triggerOut.bind(_this2, slice),
                            onMouseOver: that.triggerOver.bind(_this2, slice)
                        }), pieTextShow ? _react2["default"].createElement("text", {
                            transform: textTransform(slice),
                            dy: ".35em",
                            textAnchor: textAnchor(slice)
                        }, slice.data.name) : null)
                    }))
                }
            }, {
                key: "render",
                value: function () {
                    var _props3 = this.props,
                        width = _props3.width,
                        height = _props3.height,
                        margins = _props3.margins,
                        t = "translate(" + (width - margins.left - margins.right) / 2 + ",  " + (height - margins.top - margins.bottom) / 2 + ")",
                        pie = this._mkPie();
                    return _react2["default"].createElement("g", {
                        transform: t
                    }, pie)
                }
            }]), Pie
        }(_react.Component);
    Pie.defaultProps = _extends({
        onMouseOver: function (d) {},
        onMouseOut: function (d) {}
    }, _commonProps.pieProps), exports["default"] = Pie
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _d3Shape = __webpack_require__(50),
        _d3Shape2 = _interopRequireDefault(_d3Shape),
        _series = __webpack_require__(44),
        Scatter = function (_Component) {
            function Scatter(props) {
                return _classCallCheck(this, Scatter), _possibleConstructorReturn(this, Object.getPrototypeOf(Scatter).call(this, props))
            }
            return _inherits(Scatter, _Component), _createClass(Scatter, [{
                key: "_mkScatter",
                value: function (dataset) {
                    var _props = this.props,
                        defaultSymbol = (_props.scatterClassName, _props.defaultSymbol),
                        defaultSymbolSize = _props.defaultSymbolSize,
                        brushSymbol = _props.brushSymbol,
                        xScaleSet = _props.xScaleSet,
                        yScaleSet = _props.yScaleSet;
                    return brushSymbol && (symbol = "circle", symbolSize = 4), _react2["default"].createElement("g", null, dataset.map(function (dot) {
                        var symbol = dot.symbol ? dot.symbol : defaultSymbol,
                            symbolSize = dot.symbolSize ? dot.symbolSize : defaultSymbolSize;
                        return dot.data.map(function (d) {
                            var symbolFunc = _d3Shape2["default"].symbol().size(symbolSize * symbolSize).type(function () {
                                return console.log(symbol), "circle" === symbol ? _d3Shape2["default"].symbolCircle : "cross" === symbol ? _d3Shape2["default"].symbolCross : "diamond" === symbol ? _d3Shape2["default"].symbolDiamond : "square" === symbol ? _d3Shape2["default"].symbolSquare : "star" === symbol ? _d3Shape2["default"].symbolStar : "triangle" === symbol ? _d3Shape2["default"].symbolTriangle : "wye" === symbol ? _d3Shape2["default"].symbolWye : void console.error("Symbol is not support " + symbol + ".")
                            });
                            return _react2["default"].createElement("path", {
                                className: "react-d3-basic__scatter__path",
                                fill: d.color,
                                transform: "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")",
                                d: symbolFunc(),
                                style: dot.style
                            })
                        })
                    }))
                }
            }, {
                key: "render",
                value: function () {
                    var d = (0, _series.series)(this.props),
                        scatter = this._mkScatter(d);
                    return _react2["default"].createElement("g", null, scatter)
                }
            }]), Scatter
        }(_react.Component);
    Scatter.defaultProps = {
        defaultSymbol: "circle",
        defaultSymbolSize: 10,
        scatterClassName: "react-d3-basic__scatter"
    }, exports["default"] = Scatter
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _table = __webpack_require__(63),
        _table2 = _interopRequireDefault(_table),
        Tooltip = function (_Component) {
            function Tooltip(props) {
                return _classCallCheck(this, Tooltip), _possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).call(this, props))
            }
            return _inherits(Tooltip, _Component), _createClass(Tooltip, [{
                key: "render",
                value: function () {
                    var _props = this.props,
                        xTooltip = _props.xTooltip,
                        yTooltip = _props.yTooltip,
                        contentTooltip = _props.contentTooltip,
                        dist = _props.dist,
                        contentTooltipTmpl = void 0,
                        style = {
                            left: xTooltip ? xTooltip + dist : -1e4,
                            top: yTooltip ? yTooltip + dist : -1e4,
                            position: "fixed"
                        };
                    return contentTooltip && (contentTooltipTmpl = this.props.children ? _react2["default"].cloneElement(this.props.children, {
                        contentTooltip: contentTooltip
                    }) : _react2["default"].createElement(_table2["default"], {
                        contentTooltip: contentTooltip
                    })), _react2["default"].createElement("div", {
                        style: style,
                        className: "react-d3-basics__tooltip_utils"
                    }, contentTooltipTmpl)
                }
            }]), Tooltip
        }(_react.Component);
    Tooltip.defaultProps = {
        gravity: "s",
        dist: 15
    }, exports["default"] = Tooltip, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        SimpleTooltipStyle = function (_Component) {
            function SimpleTooltipStyle(props) {
                return _classCallCheck(this, SimpleTooltipStyle), _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleTooltipStyle).call(this, props))
            }
            return _inherits(SimpleTooltipStyle, _Component), _createClass(SimpleTooltipStyle, [{
                key: "render",
                value: function () {
                    var contentTooltip = this.props.contentTooltip,
                        cv = Object.keys(contentTooltip).map(function (d, i) {
                            if ("color" === d) var colorStyle = {
                                backgroundColor: contentTooltip[d],
                                color: "#FFF"
                            };
                            var trStyle = {
                                    display: "table-row",
                                    backgroundImage: "linear-gradient(#FFF, #EEE)",
                                    padding: "3px",
                                    height: "30px"
                                },
                                tdStyle = {
                                    display: "table-cell",
                                    padding: "3px",
                                    verticalAlign: "middle",
                                    whiteSpace: "normal",
                                    border: "1px solid #D3D3D3"
                                },
                                tdHeadStyle = {
                                    display: "table-cell",
                                    padding: "3px",
                                    verticalAlign: "middle",
                                    whiteSpace: "normal",
                                    border: "1px solid #D3D3D3",
                                    backgroundColor: "#555",
                                    color: "#FFF",
                                    textTransform: "capitalize"
                                };
                            if (colorStyle) var tdColorStyle = Object.assign(tdStyle, colorStyle);
                            return _react2["default"].createElement("div", {
                                className: "tooltip_tr",
                                style: trStyle,
                                key: i
                            }, _react2["default"].createElement("div", {
                                className: "tooltip_td",
                                style: tdHeadStyle,
                                key: i
                            }, d), _react2["default"].createElement("div", {
                                className: "tooltip_td",
                                style: colorStyle ? tdColorStyle : tdStyle,
                                key: i.i
                            }, contentTooltip[d]))
                        });
                    return _react2["default"].createElement("div", null, cv)
                }
            }]), SimpleTooltipStyle
        }(_react.Component);
    exports["default"] = SimpleTooltipStyle, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _d = (_interopRequireDefault(_react), __webpack_require__(45)),
        _d2 = _interopRequireDefault(_d),
        _reactFauxDom = __webpack_require__(19),
        _reactFauxDom2 = _interopRequireDefault(_reactFauxDom),
        Focus = function (_Component) {
            function Focus(props) {
                return _classCallCheck(this, Focus), _possibleConstructorReturn(this, Object.getPrototypeOf(Focus).call(this, props))
            }
            return _inherits(Focus, _Component), _createClass(Focus, [{
                key: "_mkFocus",
                value: function (dom) {
                    var _props = this.props,
                        height = _props.height,
                        focusX = _props.focusX,
                        focusY = _props.focusY,
                        contentTooltip = _props.contentTooltip,
                        focusDom = _d2["default"].select(dom).append("g").attr("transform", "translate(" + focusX + "," + focusY + ")").attr("class", "react-d3-basics__voronoi_utils__focus");
                    return focusDom.append("circle").attr("class", "focus__inner_circle").attr("r", 3).style("fill", function () {
                        return contentTooltip ? contentTooltip.color : "#CCC"
                    }), focusDom.append("circle").attr("class", "focus__outer_circle").attr("r", 7).style("fill", "none").style("stroke", "#CCC").style("stroke-width", 3), focusDom.append("line").attr("class", "focus__line").attr("x1", 0).attr("y1", -height).attr("x2", 0).attr("y2", height).style("stroke", "#CCC").style("stroke-width", 2).style("stroke-opacity", .5), focusDom
                }
            }, {
                key: "render",
                value: function () {
                    var focusDom = _reactFauxDom2["default"].createElement("g");
                    focusDom.setAttribute("class", "react-d3-basics__voronoi_utils__focus");
                    var focus = this._mkFocus(focusDom);
                    return focus.node().toReact()
                }
            }]), Focus
        }(_react.Component);
    exports["default"] = Focus, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _voronoi = __webpack_require__(66),
        _voronoi2 = _interopRequireDefault(_voronoi),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        _tooltipUpdate = __webpack_require__(69),
        LineVoronoi = function (_Component) {
            function LineVoronoi(props) {
                return _classCallCheck(this, LineVoronoi), _possibleConstructorReturn(this, Object.getPrototypeOf(LineVoronoi).call(this, props))
            }
            return _inherits(LineVoronoi, _Component), _createClass(LineVoronoi, [{
                key: "shouldComponentUpdate",
                value: function (nextProps, nextState) {
                    return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this)
                }
            }, {
                key: "render",
                value: function () {
                    var xgrid, ygrid, _props = this.props,
                        onMouseOver = _props.onMouseOver,
                        onMouseOut = _props.onMouseOut,
                        showXGrid = _props.showXGrid,
                        showYGrid = _props.showYGrid;
                    showXGrid && (xgrid = _react2["default"].createElement(_reactD3Core.Xgrid, this.props)), showYGrid && (ygrid = _react2["default"].createElement(_reactD3Core.Ygrid, this.props));
                    var voronoi = _react2["default"].createElement(_voronoi2["default"], _extends({}, this.props, {
                        onMouseOver: onMouseOver,
                        onMouseOut: onMouseOut
                    }));
                    return _react2["default"].createElement("g", null, xgrid, ygrid, _react2["default"].createElement(_reactD3Core.Xaxis, this.props), _react2["default"].createElement(_reactD3Core.Yaxis, this.props), _react2["default"].createElement(_reactD3Shape.Line, this.props), voronoi)
                }
            }]), LineVoronoi
        }(_react.Component);
    LineVoronoi.defaultProps = _commonProps2["default"], exports["default"] = LineVoronoi, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _d = __webpack_require__(45),
        _d2 = _interopRequireDefault(_d),
        _d3Voronoi = __webpack_require__(67),
        _d3Selection = (_interopRequireDefault(_d3Voronoi), __webpack_require__(18)),
        _d3Collection = (_interopRequireDefault(_d3Selection), __webpack_require__(9)),
        _d3Array = (_interopRequireDefault(_d3Collection), __webpack_require__(8)),
        _reactFauxDom = (_interopRequireDefault(_d3Array), __webpack_require__(19)),
        _reactD3Shape = (_interopRequireDefault(_reactFauxDom), __webpack_require__(43)),
        Voronoi = function (_Component) {
            function Voronoi(props) {
                return _classCallCheck(this, Voronoi), _possibleConstructorReturn(this, Object.getPrototypeOf(Voronoi).call(this, props))
            }
            return _inherits(Voronoi, _Component), _createClass(Voronoi, [{
                key: "triggerOut",
                value: function (d, e) {
                    this.props.onMouseOut(e, d)
                }
            }, {
                key: "triggerOver",
                value: function (d, e) {
                    var _props = this.props,
                        xScaleSet = _props.xScaleSet,
                        yScaleSet = _props.yScaleSet,
                        stack = _props.stack;
                    this.props.onMouseOver(e, d, xScaleSet, yScaleSet, stack)
                }
            }, {
                key: "_mkVoronoi",
                value: function () {
                    var _this2 = this,
                        _props2 = this.props,
                        stack = (_props2.x, _props2.y, _props2.stack),
                        mkSeries = (_props2.height, (0, _reactD3Shape.series)(this.props));
                    if (stack) var _setStack = this._setStack(),
                        dataset = _setStack(mkSeries);
                    else var dataset = mkSeries;
                    var nestData = _d2["default"].nest().key(function (d) {
                            return d.x + "," + d.y + "," + d.y0
                        }).rollup(function (v) {
                            return v[0]
                        }).entries(_d2["default"].merge(dataset.map(function (d) {
                            return d.data
                        }))).map(function (d) {
                            return d.values
                        }),
                        voronoiPolygon = this._setGeomVoronoi().call(this, nestData);
                    return _react2["default"].createElement("g", null, voronoiPolygon.map(function (area) {
                        return _react2["default"].createElement("path", {
                            d: "M" + area.join("L") + "Z",
                            onMouseOut: _this2.triggerOut.bind(_this2, area.point),
                            onMouseOver: _this2.triggerOver.bind(_this2, area.point),
                            style: {
                                fill: "none",
                                pointerEvents: "all"
                            }
                        })
                    }))
                }
            }, {
                key: "_setStack",
                value: function () {
                    var chartSeries = this.props.chartSeries,
                        buildOut = function (len) {
                            var currentXOffsets = [],
                                currentXIndex = 0;
                            return function (d, y0, y) {
                                currentXIndex++ % len === 0 && (currentXOffsets = [0, 0]), y >= 0 ? (d.y0 = currentXOffsets[1], d.y = y, currentXOffsets[1] += y) : (d.y0 = currentXOffsets[0] + y, d.y = -y, currentXOffsets[0] += y)
                            }
                        };
                    return _d2["default"].layout.stack().values(function (d) {
                        return d.data
                    }).out(buildOut(chartSeries.length))
                }
            }, {
                key: "_setGeomVoronoi",
                value: function () {
                    var _props3 = this.props,
                        width = _props3.width,
                        height = _props3.height,
                        margins = _props3.margins,
                        xScaleSet = (_props3.x, _props3.xScaleSet),
                        yScaleSet = (_props3.y, _props3.yScaleSet),
                        stack = _props3.stack,
                        voronoi = _d2["default"].geom.voronoi().x(function (d) {
                            return xScaleSet(d.x)
                        }).y(function (d) {
                            return yScaleSet(stack ? d.y + d.y0 : d.y)
                        }).clipExtent([
                            [-margins.left, -margins.top],
                            [width + margins.right, height + margins.bottom]
                        ]);
                    return voronoi
                }
            }, {
                key: "render",
                value: function () {
                    var voronoi = this._mkVoronoi();
                    return _react2["default"].createElement("g", {
                        className: "react-d3-basics__voronoi_utils"
                    }, voronoi)
                }
            }]), Voronoi
        }(_react.Component);
    Voronoi.defaultProps = {
        onMouseOver: function (d) {},
        onMouseOut: function (d) {}
    }, exports["default"] = Voronoi, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    ! function (global, factory) {
        factory(exports)
    }(this, function (exports) {
        "use strict";

        function constant(x) {
            return function () {
                return x
            }
        }

        function x(d) {
            return d[0]
        }

        function y(d) {
            return d[1]
        }

        function RedBlackTree() {
            this._ = null
        }

        function RedBlackNode(node) {
            node.U = node.C = node.L = node.R = node.P = node.N = null
        }

        function RedBlackRotateLeft(tree, node) {
            var p = node,
                q = node.R,
                parent = p.U;
            parent ? parent.L === p ? parent.L = q : parent.R = q : tree._ = q, q.U = parent, p.U = q, p.R = q.L, p.R && (p.R.U = p), q.L = p
        }

        function RedBlackRotateRight(tree, node) {
            var p = node,
                q = node.L,
                parent = p.U;
            parent ? parent.L === p ? parent.L = q : parent.R = q : tree._ = q, q.U = parent, p.U = q, p.L = q.R, p.L && (p.L.U = p), q.R = p
        }

        function RedBlackFirst(node) {
            for (; node.L;) node = node.L;
            return node
        }

        function createEdge(left, right, v0, v1) {
            var edge = [null, null],
                index = edges.push(edge) - 1;
            return edge.left = left, edge.right = right, v0 && setEdgeEnd(edge, left, right, v0), v1 && setEdgeEnd(edge, right, left, v1), cells[left.index].halfedges.push(index), cells[right.index].halfedges.push(index), edge
        }

        function createBorderEdge(left, v0, v1) {
            var edge = [v0, v1];
            return edge.left = left, edge
        }

        function setEdgeEnd(edge, left, right, vertex) {
            edge[0] || edge[1] ? edge.left === right ? edge[1] = vertex : edge[0] = vertex : (edge[0] = vertex, edge.left = left, edge.right = right)
        }

        function clippedEdge(edge, x0, y0, x1, y1) {
            var l, r, a = edge[0],
                b = edge[1],
                ax = a[0],
                ay = a[1],
                bx = b[0],
                by = b[1],
                t0 = 0,
                t1 = 1,
                dx = bx - ax,
                dy = by - ay;
            if (r = x0 - ax, dx || !(r > 0)) {
                if (r /= dx, 0 > dx) {
                    if (t0 > r) return;
                    t1 > r && (t1 = r)
                } else if (dx > 0) {
                    if (r > t1) return;
                    r > t0 && (t0 = r)
                }
                if (r = x1 - ax, dx || !(0 > r)) {
                    if (r /= dx, 0 > dx) {
                        if (r > t1) return;
                        r > t0 && (t0 = r)
                    } else if (dx > 0) {
                        if (t0 > r) return;
                        t1 > r && (t1 = r)
                    }
                    if (r = y0 - ay, dy || !(r > 0)) {
                        if (r /= dy, 0 > dy) {
                            if (t0 > r) return;
                            t1 > r && (t1 = r)
                        } else if (dy > 0) {
                            if (r > t1) return;
                            r > t0 && (t0 = r)
                        }
                        if (r = y1 - ay, dy || !(0 > r)) {
                            if (r /= dy, 0 > dy) {
                                if (r > t1) return;
                                r > t0 && (t0 = r)
                            } else if (dy > 0) {
                                if (t0 > r) return;
                                t1 > r && (t1 = r)
                            }
                            return t0 > 0 || 1 > t1 ? (l = edge.left, r = edge.right, t0 > 0 && (a = [ax + t0 * dx, ay + t0 * dy]), 1 > t1 && (b = [ax + t1 * dx, ay + t1 * dy]), edge = [a, b], edge.left = l, edge.right = r, edge) : edge
                        }
                    }
                }
            }
        }

        function connectedEdge(edge, x0, y0, x1, y1) {
            var v1 = edge[1];
            if (v1) return edge;
            var fm, fb, v0 = edge[0],
                left = edge.left,
                right = edge.right,
                lx = left[0],
                ly = left[1],
                rx = right[0],
                ry = right[1],
                fx = (lx + rx) / 2,
                fy = (ly + ry) / 2;
            if (ry === ly) {
                if (x0 > fx || fx >= x1) return;
                if (lx > rx) {
                    if (v0) {
                        if (v0[1] >= y1) return
                    } else v0 = [fx, y0];
                    v1 = [fx, y1]
                } else {
                    if (v0) {
                        if (v0[1] < y0) return
                    } else v0 = [fx, y1];
                    v1 = [fx, y0]
                }
            } else if (fm = (lx - rx) / (ry - ly), fb = fy - fm * fx, -1 > fm || fm > 1)
                if (lx > rx) {
                    if (v0) {
                        if (v0[1] >= y1) return
                    } else v0 = [(y0 - fb) / fm, y0];
                    v1 = [(y1 - fb) / fm, y1]
                } else {
                    if (v0) {
                        if (v0[1] < y0) return
                    } else v0 = [(y1 - fb) / fm, y1];
                    v1 = [(y0 - fb) / fm, y0]
                }
            else if (ry > ly) {
                if (v0) {
                    if (v0[0] >= x1) return
                } else v0 = [x0, fm * x0 + fb];
                v1 = [x1, fm * x1 + fb]
            } else {
                if (v0) {
                    if (v0[0] < x0) return
                } else v0 = [x1, fm * x1 + fb];
                v1 = [x0, fm * x0 + fb]
            }
            return edge = [v0, v1], edge.left = left, edge.right = right, edge
        }

        function clippedEdges(x0, y0, x1, y1) {
            for (var edge, i = edges.length, clippedEdges = new Array(i); i--;)(edge = connectedEdge(edges[i], x0, y0, x1, y1)) && (edge = clippedEdge(edge, x0, y0, x1, y1)) && (Math.abs(edge[0][0] - edge[1][0]) > epsilon || Math.abs(edge[0][1] - edge[1][1]) > epsilon) && (clippedEdges[i] = edge);
            return clippedEdges
        }

        function createCell(site) {
            return cells[site.index] = {
                site: site,
                halfedges: []
            }
        }

        function cellHalfedgeAngle(cell, edge) {
            var site = cell.site,
                va = edge.left,
                vb = edge.right;
            return site === vb && (vb = va, va = site), vb ? Math.atan2(vb[1] - va[1], vb[0] - va[0]) : (site === va ? (va = edge[1], vb = edge[0]) : (va = edge[0], vb = edge[1]), Math.atan2(va[0] - vb[0], vb[1] - va[1]))
        }

        function cellHalfedgeStart(cell, edge) {
            return edge[+(edge.left !== cell.site)]
        }

        function cellHalfedgeEnd(cell, edge) {
            return edge[+(edge.left === cell.site)]
        }

        function sortCellHalfedges() {
            for (var cell, halfedges, j, m, i = 0, n = cells.length; n > i; ++i)
                if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
                    var index = new Array(m),
                        array = new Array(m);
                    for (j = 0; m > j; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
                    for (index.sort(function (i, j) {
                            return array[j] - array[i]
                        }), j = 0; m > j; ++j) array[j] = halfedges[index[j]];
                    for (j = 0; m > j; ++j) halfedges[j] = array[j]
                }
        }

        function clipCells(edges, x0, y0, x1, y1) {
            for (var cell, iHalfedge, halfedges, nHalfedges, start, startX, startY, end, endX, endY, iCell = cells.length; iCell--;)
                if (cell = cells[iCell]) {
                    for (halfedges = cell.halfedges, iHalfedge = halfedges.length; iHalfedge--;) edges[halfedges[iHalfedge]] || halfedges.splice(iHalfedge, 1);
                    for (iHalfedge = 0, nHalfedges = halfedges.length; nHalfedges > iHalfedge;) end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1], start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1], (Math.abs(endX - startX) > epsilon || Math.abs(endY - startY) > epsilon) && (halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(cell.site, end, Math.abs(endX - x0) < epsilon && y1 - endY > epsilon ? [x0, Math.abs(startX - x0) < epsilon ? startY : y1] : Math.abs(endY - y1) < epsilon && x1 - endX > epsilon ? [Math.abs(startY - y1) < epsilon ? startX : x1, y1] : Math.abs(endX - x1) < epsilon && endY - y0 > epsilon ? [x1, Math.abs(startX - x1) < epsilon ? startY : y0] : Math.abs(endY - y0) < epsilon && endX - x0 > epsilon ? [Math.abs(startY - y0) < epsilon ? startX : x0, y0] : null)) - 1), ++nHalfedges)
                }
        }

        function Circle() {
            RedBlackNode(this), this.x = this.y = this.arc = this.site = this.cy = null
        }

        function attachCircle(arc) {
            var lArc = arc.P,
                rArc = arc.N;
            if (lArc && rArc) {
                var lSite = lArc.site,
                    cSite = arc.site,
                    rSite = rArc.site;
                if (lSite !== rSite) {
                    var bx = cSite[0],
                        by = cSite[1],
                        ax = lSite[0] - bx,
                        ay = lSite[1] - by,
                        cx = rSite[0] - bx,
                        cy = rSite[1] - by,
                        d = 2 * (ax * cy - ay * cx);
                    if (!(d >= -epsilon2)) {
                        var ha = ax * ax + ay * ay,
                            hc = cx * cx + cy * cy,
                            x = (cy * ha - ay * hc) / d,
                            y = (ax * hc - cx * ha) / d,
                            circle = circlePool.pop() || new Circle;
                        circle.arc = arc, circle.site = cSite, circle.x = x + bx, circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y), arc.circle = circle;
                        for (var before = null, node = circles._; node;)
                            if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
                                if (!node.L) {
                                    before = node.P;
                                    break
                                }
                                node = node.L
                            } else {
                                if (!node.R) {
                                    before = node;
                                    break
                                }
                                node = node.R
                            }
                        circles.insert(before, circle), before || (firstCircle = circle)
                    }
                }
            }
        }

        function detachCircle(arc) {
            var circle = arc.circle;
            circle && (circle.P || (firstCircle = circle.N), circles.remove(circle), circlePool.push(circle), RedBlackNode(circle), arc.circle = null)
        }

        function Beach() {
            RedBlackNode(this), this.edge = this.site = this.circle = null
        }

        function createBeach(site) {
            var beach = beachPool.pop() || new Beach;
            return beach.site = site, beach
        }

        function detachBeach(beach) {
            detachCircle(beach), beaches.remove(beach), beachPool.push(beach), RedBlackNode(beach)
        }

        function removeBeach(beach) {
            var circle = beach.circle,
                x = circle.x,
                y = circle.cy,
                vertex = [x, y],
                previous = beach.P,
                next = beach.N,
                disappearing = [beach];
            detachBeach(beach);
            for (var lArc = previous; lArc.circle && Math.abs(x - lArc.circle.x) < epsilon && Math.abs(y - lArc.circle.cy) < epsilon;) previous = lArc.P, disappearing.unshift(lArc), detachBeach(lArc), lArc = previous;
            disappearing.unshift(lArc), detachCircle(lArc);
            for (var rArc = next; rArc.circle && Math.abs(x - rArc.circle.x) < epsilon && Math.abs(y - rArc.circle.cy) < epsilon;) next = rArc.N, disappearing.push(rArc), detachBeach(rArc), rArc = next;
            disappearing.push(rArc), detachCircle(rArc);
            var iArc, nArcs = disappearing.length;
            for (iArc = 1; nArcs > iArc; ++iArc) rArc = disappearing[iArc], lArc = disappearing[iArc - 1], setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
            lArc = disappearing[0], rArc = disappearing[nArcs - 1], rArc.edge = createEdge(lArc.site, rArc.site, null, vertex), attachCircle(lArc), attachCircle(rArc)
        }

        function addBeach(site) {
            for (var lArc, rArc, dxl, dxr, x = site[0], directrix = site[1], node = beaches._; node;)
                if (dxl = leftBreakPoint(node, directrix) - x, dxl > epsilon) node = node.L;
                else {
                    if (dxr = x - rightBreakPoint(node, directrix), !(dxr > epsilon)) {
                        dxl > -epsilon ? (lArc = node.P, rArc = node) : dxr > -epsilon ? (lArc = node, rArc = node.N) : lArc = rArc = node;
                        break
                    }
                    if (!node.R) {
                        lArc = node;
                        break
                    }
                    node = node.R
                }
            createCell(site);
            var newArc = createBeach(site);
            if (beaches.insert(lArc, newArc), lArc || rArc) {
                if (lArc === rArc) return detachCircle(lArc), rArc = createBeach(lArc.site), beaches.insert(newArc, rArc), newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site), attachCircle(lArc), void attachCircle(rArc);
                if (!rArc) return void(newArc.edge = createEdge(lArc.site, newArc.site));
                detachCircle(lArc), detachCircle(rArc);
                var lSite = lArc.site,
                    ax = lSite[0],
                    ay = lSite[1],
                    bx = site[0] - ax,
                    by = site[1] - ay,
                    rSite = rArc.site,
                    cx = rSite[0] - ax,
                    cy = rSite[1] - ay,
                    d = 2 * (bx * cy - by * cx),
                    hb = bx * bx + by * by,
                    hc = cx * cx + cy * cy,
                    vertex = {
                        x: (cy * hb - by * hc) / d + ax,
                        y: (bx * hc - cx * hb) / d + ay
                    };
                setEdgeEnd(rArc.edge, lSite, rSite, vertex), newArc.edge = createEdge(lSite, site, null, vertex), rArc.edge = createEdge(site, rSite, null, vertex), attachCircle(lArc), attachCircle(rArc)
            }
        }

        function leftBreakPoint(arc, directrix) {
            var site = arc.site,
                rfocx = site[0],
                rfocy = site[1],
                pby2 = rfocy - directrix;
            if (!pby2) return rfocx;
            var lArc = arc.P;
            if (!lArc) return -(1 / 0);
            site = lArc.site;
            var lfocx = site[0],
                lfocy = site[1],
                plby2 = lfocy - directrix;
            if (!plby2) return lfocx;
            var hl = lfocx - rfocx,
                aby2 = 1 / pby2 - 1 / plby2,
                b = hl / plby2;
            return aby2 ? (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx : (rfocx + lfocx) / 2
        }

        function rightBreakPoint(arc, directrix) {
            var rArc = arc.N;
            if (rArc) return leftBreakPoint(rArc, directrix);
            var site = arc.site;
            return site[1] === directrix ? site[0] : 1 / 0
        }

        function triangleArea(a, b, c) {
            return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1])
        }

        function lexicographic(a, b) {
            return b[1] - a[1] || b[0] - a[0]
        }

        function Diagram(sites, extent) {
            var x, y, circle, site = sites.sort(lexicographic).pop();
            for (edges = [], cells = new Array(sites.length), beaches = new RedBlackTree, circles = new RedBlackTree;;)
                if (circle = firstCircle, site && (!circle || site[1] < circle.y || site[1] === circle.y && site[0] < circle.x)) site[0] === x && site[1] === y || (addBeach(site), x = site[0], y = site[1]), site = sites.pop();
                else {
                    if (!circle) break;
                    removeBeach(circle.arc)
                }
            if (sortCellHalfedges(), extent) {
                var x0 = extent[0][0],
                    y0 = extent[0][1],
                    x1 = extent[1][0],
                    y1 = extent[1][1];
                this.extent = [
                    [x0, y0],
                    [x1, y1]
                ], this.cellEdges = clippedEdges(x0, y0, x1, y1), clipCells(this.cellEdges, x0, y0, x1, y1)
            } else this.cellEdges = edges;
            this.cells = cells, this.edges = edges, beaches = circles = edges = cells = null
        }

        function voronoi() {
            function voronoi(data) {
                return new Diagram(data.map(function (d, i) {
                    var s = [Math.round(x$$(d, i, data) / epsilon) * epsilon, Math.round(y$$(d, i, data) / epsilon) * epsilon];
                    return s.index = i, s.data = d, s
                }), extent)
            }
            var x$$ = x,
                y$$ = y,
                extent = null;
            return voronoi.polygons = function (data) {
                return voronoi(data).polygons()
            }, voronoi.links = function (data) {
                return voronoi(data).links()
            }, voronoi.triangles = function (data) {
                return voronoi(data).triangles()
            }, voronoi.x = function (_) {
                return arguments.length ? (x$$ = "function" == typeof _ ? _ : constant(+_), voronoi) : x$$
            }, voronoi.y = function (_) {
                return arguments.length ? (y$$ = "function" == typeof _ ? _ : constant(+_), voronoi) : y$$
            }, voronoi.extent = function (_) {
                return arguments.length ? (extent = null == _ ? null : [
                    [+_[0][0], +_[0][1]],
                    [+_[1][0], +_[1][1]]
                ], voronoi) : extent && [
                    [extent[0][0], extent[0][1]],
                    [extent[1][0], extent[1][1]]
                ]
            }, voronoi.size = function (_) {
                return arguments.length ? (extent = null == _ ? null : [
                    [0, 0],
                    [+_[0], +_[1]]
                ], voronoi) : extent && [extent[1][0], extent[1][1]]
            }, voronoi
        }
        RedBlackTree.prototype = {
            constructor: RedBlackTree,
            insert: function (after, node) {
                var parent, grandpa, uncle;
                if (after) {
                    if (node.P = after, node.N = after.N, after.N && (after.N.P = node), after.N = node, after.R) {
                        for (after = after.R; after.L;) after = after.L;
                        after.L = node
                    } else after.R = node;
                    parent = after
                } else this._ ? (after = RedBlackFirst(this._), node.P = null, node.N = after, after.P = after.L = node, parent = after) : (node.P = node.N = null, this._ = node, parent = null);
                for (node.L = node.R = null, node.U = parent, node.C = !0, after = node; parent && parent.C;) grandpa = parent.U, parent === grandpa.L ? (uncle = grandpa.R, uncle && uncle.C ? (parent.C = uncle.C = !1, grandpa.C = !0, after = grandpa) : (after === parent.R && (RedBlackRotateLeft(this, parent), after = parent, parent = after.U), parent.C = !1, grandpa.C = !0, RedBlackRotateRight(this, grandpa))) : (uncle = grandpa.L, uncle && uncle.C ? (parent.C = uncle.C = !1, grandpa.C = !0, after = grandpa) : (after === parent.L && (RedBlackRotateRight(this, parent), after = parent, parent = after.U), parent.C = !1, grandpa.C = !0, RedBlackRotateLeft(this, grandpa))), parent = after.U;
                this._.C = !1
            },
            remove: function (node) {
                node.N && (node.N.P = node.P), node.P && (node.P.N = node.N), node.N = node.P = null;
                var sibling, next, red, parent = node.U,
                    left = node.L,
                    right = node.R;
                if (next = left ? right ? RedBlackFirst(right) : left : right, parent ? parent.L === node ? parent.L = next : parent.R = next : this._ = next, left && right ? (red = next.C, next.C = node.C, next.L = left, left.U = next, next !== right ? (parent = next.U, next.U = node.U, node = next.R, parent.L = node, next.R = right, right.U = next) : (next.U = parent, parent = next, node = next.R)) : (red = node.C, node = next), node && (node.U = parent), !red) {
                    if (node && node.C) return void(node.C = !1);
                    do {
                        if (node === this._) break;
                        if (node === parent.L) {
                            if (sibling = parent.R, sibling.C && (sibling.C = !1, parent.C = !0, RedBlackRotateLeft(this, parent), sibling = parent.R), sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                                sibling.R && sibling.R.C || (sibling.L.C = !1, sibling.C = !0, RedBlackRotateRight(this, sibling), sibling = parent.R), sibling.C = parent.C, parent.C = sibling.R.C = !1, RedBlackRotateLeft(this, parent), node = this._;
                                break
                            }
                        } else if (sibling = parent.L, sibling.C && (sibling.C = !1, parent.C = !0, RedBlackRotateRight(this, parent), sibling = parent.L), sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                            sibling.L && sibling.L.C || (sibling.R.C = !1, sibling.C = !0, RedBlackRotateLeft(this, sibling), sibling = parent.L), sibling.C = parent.C, parent.C = sibling.L.C = !1, RedBlackRotateRight(this, parent), node = this._;
                            break
                        }
                        sibling.C = !0, node = parent, parent = parent.U
                    } while (!node.C);
                    node && (node.C = !1)
                }
            }
        };
        var firstCircle, beaches, cells, circles, edges, circlePool = [],
            beachPool = [],
            epsilon = 1e-6,
            epsilon2 = 1e-12;
        Diagram.prototype = {
            constructor: Diagram,
            polygons: function () {
                var cells = this.cells,
                    edges = this.cellEdges,
                    extent = this.extent,
                    x0 = extent[0][0],
                    y0 = extent[0][1],
                    x1 = extent[1][0],
                    y1 = extent[1][1],
                    polygons = new Array(cells.length);
                return cells.forEach(function (cell, i) {
                    var polygon, site = cell.site,
                        halfedges = cell.halfedges;
                    if (halfedges.length) polygon = halfedges.map(function (index) {
                        return cellHalfedgeStart(cell, edges[index])
                    });
                    else {
                        if (!(site[0] >= x0 && site[0] <= x1 && site[1] >= y0 && site[1] <= y1)) return;
                        polygon = [
                            [x0, y1],
                            [x1, y1],
                            [x1, y0],
                            [x0, y0]
                        ]
                    }
                    polygons[i] = polygon, polygon.data = site.data
                }), polygons
            },
            triangles: function () {
                var triangles = [],
                    edges = this.edges;
                return this.cells.forEach(function (cell, i) {
                    for (var s0, site = cell.site, halfedges = cell.halfedges, j = -1, m = halfedges.length, e1 = edges[halfedges[m - 1]], s1 = e1.left === site ? e1.right : e1.left; ++j < m;) s0 = s1, e1 = edges[halfedges[j]], s1 = e1.left === site ? e1.right : e1.left, i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0 && triangles.push([site.data, s0.data, s1.data])
                }), triangles
            },
            links: function () {
                return this.edges.filter(function (edge) {
                    return edge.right
                }).map(function (edge) {
                    return {
                        source: edge.left.data,
                        target: edge.right.data
                    }
                })
            }
        };
        var version = "0.3.2";
        exports.version = version, exports.voronoi = voronoi
    })
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.pieProps = void 0;
    var _d = __webpack_require__(45),
        _d2 = _interopRequireDefault(_d),
        width = 960,
        height = 500,
        margins = {
            top: 80,
            right: 100,
            bottom: 80,
            left: 100
        };
    exports["default"] = {
        width: width,
        height: height,
        margins: margins,
        y: function (d) {
            return +d
        },
        xScale: "linear",
        yScale: "linear",
        focus: !0,
        showXGrid: !0,
        showYGrid: !0
    };
    exports.pieProps = {
        width: width,
        height: height,
        margins: margins,
        innerRadius: 0,
        categoricalColors: _d2["default"].scale.category10(),
        pieSort: _d2["default"].descending
    }
}, function (module, exports) {
    "use strict";

    function isTooltipUpdate(nextProps, nextState, that) {
        return nextProps.xTooltip !== that.props.xTooltip || nextProps.yTooltip !== that.props.yTooltip
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.isTooltipUpdate = isTooltipUpdate
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        VoronoiEvt = (_interopRequireDefault(_react), function (_Component) {
            function VoronoiEvt(props) {
                _classCallCheck(this, VoronoiEvt);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VoronoiEvt).call(this, props));
                return _this.state = {
                    focusX: -1e4,
                    focusY: -1e4,
                    xTooltip: null,
                    yTooltip: null,
                    contentTooltip: null
                }, _this
            }
            return _inherits(VoronoiEvt, _Component), _createClass(VoronoiEvt, [{
                key: "voronoiMouseOut",
                value: function (e, d) {
                    this.setState({
                        focusX: -1e4,
                        focusY: -1e4,
                        xTooltip: null,
                        yTooltip: null,
                        contentTooltip: null
                    })
                }
            }, {
                key: "voronoiMouseOver",
                value: function (e, d, xScaleSet, yScaleSet, stack) {
                    var newY = yScaleSet(stack ? d.y + d.y0 : d.y),
                        contentTooltip = {
                            title: d.x.toString(),
                            fieldTitle: d.name.toString(),
                            value: d.y.toString(),
                            color: d.color
                        };
                    this.setState({
                        focusX: xScaleSet(d.x),
                        focusY: newY,
                        xTooltip: e.clientX,
                        yTooltip: e.clientY,
                        contentTooltip: contentTooltip
                    })
                }
            }]), VoronoiEvt
        }(_react.Component));
    exports["default"] = VoronoiEvt, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _tooltip = __webpack_require__(62),
        _tooltip2 = _interopRequireDefault(_tooltip),
        _focus = __webpack_require__(64),
        _focus2 = _interopRequireDefault(_focus),
        _areaStack = __webpack_require__(72),
        _areaStack2 = _interopRequireDefault(_areaStack),
        _voronoiEvt = __webpack_require__(70),
        _voronoiEvt2 = _interopRequireDefault(_voronoiEvt),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        LineTooltip = function (_VoronoiEvt) {
            function LineTooltip(props) {
                return _classCallCheck(this, LineTooltip), _possibleConstructorReturn(this, Object.getPrototypeOf(LineTooltip).call(this, props))
            }
            return _inherits(LineTooltip, _VoronoiEvt), _createClass(LineTooltip, [{
                key: "render",
                value: function () {
                    var focusDom, _props = this.props,
                        focus = (_props.width, _props.height, _props.focus);
                    return focus && (focusDom = _react2["default"].createElement(_focus2["default"], _extends({}, this.props, this.state))), _react2["default"].createElement("div", null, _react2["default"].createElement(_tooltip2["default"], _extends({}, this.props, this.state), this.props.children), _react2["default"].createElement(_reactD3Core.Legend, this.props), _react2["default"].createElement(_reactD3Shape.Chart, _extends({}, this.props, this.state, {
                        stack: !0
                    }), _react2["default"].createElement(_areaStack2["default"], _extends({}, this.props, this.state, {
                        stack: !0,
                        onMouseOver: this.voronoiMouseOver.bind(this),
                        onMouseOut: this.voronoiMouseOut.bind(this)
                    })), focusDom))
                }
            }]), LineTooltip
        }(_voronoiEvt2["default"]);
    LineTooltip.defaultProps = _commonProps2["default"], exports["default"] = LineTooltip, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _voronoi = __webpack_require__(66),
        _voronoi2 = _interopRequireDefault(_voronoi),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        _tooltipUpdate = __webpack_require__(69),
        AreaStackVoronoi = function (_Component) {
            function AreaStackVoronoi(props) {
                return _classCallCheck(this, AreaStackVoronoi), _possibleConstructorReturn(this, Object.getPrototypeOf(AreaStackVoronoi).call(this, props))
            }
            return _inherits(AreaStackVoronoi, _Component), _createClass(AreaStackVoronoi, [{
                key: "shouldComponentUpdate",
                value: function (nextProps, nextState) {
                    return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this)
                }
            }, {
                key: "render",
                value: function () {
                    var xgrid, ygrid, _props = this.props,
                        onMouseOver = _props.onMouseOver,
                        onMouseOut = _props.onMouseOut,
                        showXGrid = _props.showXGrid,
                        showYGrid = _props.showYGrid;
                    showXGrid && (xgrid = _react2["default"].createElement(_reactD3Core.Xgrid, this.props)), showYGrid && (ygrid = _react2["default"].createElement(_reactD3Core.Ygrid, this.props));
                    var voronoi = _react2["default"].createElement(_voronoi2["default"], _extends({}, this.props, {
                        onMouseOver: onMouseOver,
                        onMouseOut: onMouseOut
                    }));
                    return _react2["default"].createElement("g", null, xgrid, ygrid, _react2["default"].createElement(_reactD3Core.Xaxis, this.props), _react2["default"].createElement(_reactD3Core.Yaxis, this.props), _react2["default"].createElement(_reactD3Shape.AreaStack, this.props), voronoi)
                }
            }]), AreaStackVoronoi
        }(_react.Component);
    AreaStackVoronoi.defaultProps = _commonProps2["default"], exports["default"] = AreaStackVoronoi, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _tooltip = __webpack_require__(62),
        _tooltip2 = _interopRequireDefault(_tooltip),
        _focus = __webpack_require__(64),
        _focus2 = _interopRequireDefault(_focus),
        _scatterPlot = __webpack_require__(74),
        _scatterPlot2 = _interopRequireDefault(_scatterPlot),
        _voronoiEvt = __webpack_require__(70),
        _voronoiEvt2 = _interopRequireDefault(_voronoiEvt),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        LineTooltip = function (_VoronoiEvt) {
            function LineTooltip(props) {
                return _classCallCheck(this, LineTooltip), _possibleConstructorReturn(this, Object.getPrototypeOf(LineTooltip).call(this, props))
            }
            return _inherits(LineTooltip, _VoronoiEvt), _createClass(LineTooltip, [{
                key: "render",
                value: function () {
                    var focusDom, _props = this.props,
                        focus = (_props.width, _props.height, _props.focus);
                    return focus && (focusDom = _react2["default"].createElement(_focus2["default"], _extends({}, this.props, this.state))), _react2["default"].createElement("div", null, _react2["default"].createElement(_tooltip2["default"], _extends({}, this.props, this.state), this.props.children), _react2["default"].createElement(_reactD3Core.Legend, this.props), _react2["default"].createElement(_reactD3Shape.Chart, _extends({}, this.props, this.state), _react2["default"].createElement(_scatterPlot2["default"], _extends({}, this.props, this.state, {
                        onMouseOver: this.voronoiMouseOver.bind(this),
                        onMouseOut: this.voronoiMouseOut.bind(this)
                    })), focusDom))
                }
            }]), LineTooltip
        }(_voronoiEvt2["default"]);
    LineTooltip.defaultProps = _commonProps2["default"], exports["default"] = LineTooltip, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _voronoi = __webpack_require__(66),
        _voronoi2 = _interopRequireDefault(_voronoi),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        _tooltipUpdate = __webpack_require__(69),
        ScatterVoronoi = function (_Component) {
            function ScatterVoronoi(props) {
                return _classCallCheck(this, ScatterVoronoi), _possibleConstructorReturn(this, Object.getPrototypeOf(ScatterVoronoi).call(this, props))
            }
            return _inherits(ScatterVoronoi, _Component), _createClass(ScatterVoronoi, [{
                key: "shouldComponentUpdate",
                value: function (nextProps, nextState) {
                    return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this)
                }
            }, {
                key: "render",
                value: function () {
                    var xgrid, ygrid, _props = this.props,
                        onMouseOver = _props.onMouseOver,
                        onMouseOut = _props.onMouseOut,
                        showXGrid = _props.showXGrid,
                        showYGrid = _props.showYGrid;
                    showXGrid && (xgrid = _react2["default"].createElement(_reactD3Core.Xgrid, this.props)), showYGrid && (ygrid = _react2["default"].createElement(_reactD3Core.Ygrid, this.props));
                    var voronoi = _react2["default"].createElement(_voronoi2["default"], _extends({}, this.props, {
                        onMouseOver: onMouseOver,
                        onMouseOut: onMouseOut
                    }));
                    return _react2["default"].createElement("g", null, xgrid, ygrid, _react2["default"].createElement(_reactD3Core.Xaxis, this.props), _react2["default"].createElement(_reactD3Core.Yaxis, this.props), _react2["default"].createElement(_reactD3Shape.Scatter, this.props), voronoi)
                }
            }]), ScatterVoronoi
        }(_react.Component);
    ScatterVoronoi.defaultProps = _commonProps2["default"], exports["default"] = ScatterVoronoi, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _bar = __webpack_require__(76),
        _bar2 = _interopRequireDefault(_bar),
        _tooltip = __webpack_require__(62),
        _tooltip2 = _interopRequireDefault(_tooltip),
        _focus = __webpack_require__(64),
        _barEvt = (_interopRequireDefault(_focus), __webpack_require__(77)),
        _barEvt2 = _interopRequireDefault(_barEvt),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        BarTooltip = function (_BarEvt) {
            function BarTooltip(props) {
                return _classCallCheck(this, BarTooltip), _possibleConstructorReturn(this, Object.getPrototypeOf(BarTooltip).call(this, props))
            }
            return _inherits(BarTooltip, _BarEvt), _createClass(BarTooltip, [{
                key: "render",
                value: function () {
                    var _props = this.props;
                    _props.width, _props.height;
                    return _react2["default"].createElement("div", null, _react2["default"].createElement(_tooltip2["default"], _extends({}, this.props, this.state), this.props.children), _react2["default"].createElement(_reactD3Core.Legend, this.props), _react2["default"].createElement(_reactD3Shape.Chart, _extends({}, this.props, this.state), _react2["default"].createElement(_bar2["default"], _extends({}, this.props, this.state, {
                        onMouseOver: this.mouseOver.bind(this),
                        onMouseOut: this.mouseOut.bind(this)
                    }))))
                }
            }]), BarTooltip
        }(_barEvt2["default"]);
    BarTooltip.defaultProps = _commonProps2["default"], exports["default"] = BarTooltip, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        _tooltipUpdate = __webpack_require__(69),
        BarContainer = function (_Component) {
            function BarContainer(props) {
                return _classCallCheck(this, BarContainer), _possibleConstructorReturn(this, Object.getPrototypeOf(BarContainer).call(this, props))
            }
            return _inherits(BarContainer, _Component), _createClass(BarContainer, [{
                key: "shouldComponentUpdate",
                value: function (nextProps, nextState) {
                    return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this)
                }
            }, {
                key: "render",
                value: function () {
                    var xgrid, ygrid, _props = this.props,
                        onMouseOver = _props.onMouseOver,
                        onMouseOut = _props.onMouseOut,
                        showXGrid = _props.showXGrid,
                        showYGrid = _props.showYGrid;
                    return showXGrid && (xgrid = _react2["default"].createElement(_reactD3Core.Xgrid, this.props)), showYGrid && (ygrid = _react2["default"].createElement(_reactD3Core.Ygrid, this.props)), _react2["default"].createElement("g", null, xgrid, ygrid, _react2["default"].createElement(_reactD3Core.Xaxis, this.props), _react2["default"].createElement(_reactD3Core.Yaxis, this.props), _react2["default"].createElement(_reactD3Shape.Bar, _extends({}, this.props, {
                        onMouseOver: onMouseOver,
                        onMouseOut: onMouseOut
                    })))
                }
            }]), BarContainer
        }(_react.Component);
    BarContainer.defaultProps = _commonProps2["default"], exports["default"] = BarContainer, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        BarEvt = (_interopRequireDefault(_react), function (_Component) {
            function BarEvt(props) {
                _classCallCheck(this, BarEvt);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BarEvt).call(this, props));
                return _this.state = {
                    xTooltip: null,
                    yTooltip: null,
                    contentTooltip: null
                }, _this
            }
            return _inherits(BarEvt, _Component), _createClass(BarEvt, [{
                key: "mouseOut",
                value: function (e, d) {
                    this.setState({
                        xTooltip: null,
                        yTooltip: null,
                        contentTooltip: null
                    })
                }
            }, {
                key: "mouseOver",
                value: function (e, d) {
                    var contentTooltip = {
                        title: d.name,
                        value: d.y,
                        fieldTitle: d.x,
                        color: d.color
                    };
                    this.setState({
                        xTooltip: e.clientX,
                        yTooltip: e.clientY,
                        contentTooltip: contentTooltip
                    })
                }
            }]), BarEvt
        }(_react.Component));
    exports["default"] = BarEvt, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps),
                    Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _barStack = __webpack_require__(79),
        _barStack2 = _interopRequireDefault(_barStack),
        _tooltip = __webpack_require__(62),
        _tooltip2 = _interopRequireDefault(_tooltip),
        _focus = __webpack_require__(64),
        _barEvt = (_interopRequireDefault(_focus), __webpack_require__(77)),
        _barEvt2 = _interopRequireDefault(_barEvt),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        BarGroupTooltip = function (_BarEvt) {
            function BarGroupTooltip(props) {
                return _classCallCheck(this, BarGroupTooltip), _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroupTooltip).call(this, props))
            }
            return _inherits(BarGroupTooltip, _BarEvt), _createClass(BarGroupTooltip, [{
                key: "render",
                value: function () {
                    var _props = this.props;
                    _props.width, _props.height;
                    return _react2["default"].createElement("div", null, _react2["default"].createElement(_tooltip2["default"], _extends({}, this.props, this.state), this.props.children), _react2["default"].createElement(_reactD3Core.Legend, this.props), _react2["default"].createElement(_reactD3Shape.Chart, _extends({}, this.props, this.state, {
                        stack: !0
                    }), _react2["default"].createElement(_barStack2["default"], _extends({}, this.props, this.state, {
                        onClick: this.props.onClick,
                        onMouseOver: this.mouseOver.bind(this),
                        onMouseOut: this.mouseOut.bind(this)
                    }))))
                }
            }]), BarGroupTooltip
        }(_barEvt2["default"]);
    BarGroupTooltip.defaultProps = _commonProps2["default"], exports["default"] = BarGroupTooltip, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        _tooltipUpdate = __webpack_require__(69),
        BarStackContainer = function (_Component) {
            function BarStackContainer(props) {
                return _classCallCheck(this, BarStackContainer), _possibleConstructorReturn(this, Object.getPrototypeOf(BarStackContainer).call(this, props))
            }
            return _inherits(BarStackContainer, _Component), _createClass(BarStackContainer, [{
                key: "shouldComponentUpdate",
                value: function (nextProps, nextState) {
                    return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this)
                }
            }, {
                key: "render",
                value: function () {
                    var xgrid, ygrid, _props = this.props,
                        onMouseOver = _props.onMouseOver,
                        onMouseOut = _props.onMouseOut,
                        onClick = _props.onClick,
                        showXGrid = _props.showXGrid,
                        showYGrid = _props.showYGrid;
                    return showXGrid && (xgrid = _react2["default"].createElement(_reactD3Core.Xgrid, this.props)), showYGrid && (ygrid = _react2["default"].createElement(_reactD3Core.Ygrid, this.props)), _react2["default"].createElement("g", null, xgrid, ygrid, _react2["default"].createElement(_reactD3Core.Xaxis, this.props), _react2["default"].createElement(_reactD3Core.Yaxis, this.props), _react2["default"].createElement(_reactD3Shape.BarStack, _extends({}, this.props, {
                        onClick: onClick,
                        onMouseOver: onMouseOver,
                        onMouseOut: onMouseOut
                    })))
                }
            }]), BarStackContainer
        }(_react.Component);
    BarStackContainer.defaultProps = _commonProps2["default"], exports["default"] = BarStackContainer, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _barGroup = __webpack_require__(81),
        _barGroup2 = _interopRequireDefault(_barGroup),
        _tooltip = __webpack_require__(62),
        _tooltip2 = _interopRequireDefault(_tooltip),
        _focus = __webpack_require__(64),
        _barEvt = (_interopRequireDefault(_focus), __webpack_require__(77)),
        _barEvt2 = _interopRequireDefault(_barEvt),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        BarGroupTooltip = function (_BarEvt) {
            function BarGroupTooltip(props) {
                return _classCallCheck(this, BarGroupTooltip), _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroupTooltip).call(this, props))
            }
            return _inherits(BarGroupTooltip, _BarEvt), _createClass(BarGroupTooltip, [{
                key: "render",
                value: function () {
                    var _props = this.props;
                    _props.width, _props.height;
                    return _react2["default"].createElement("div", null, _react2["default"].createElement(_tooltip2["default"], _extends({}, this.props, this.state), this.props.children), _react2["default"].createElement(_reactD3Core.Legend, this.props), _react2["default"].createElement(_reactD3Shape.Chart, _extends({}, this.props, this.state), _react2["default"].createElement(_barGroup2["default"], _extends({}, this.props, this.state, {
                        onMouseOver: this.mouseOver.bind(this),
                        onMouseOut: this.mouseOut.bind(this)
                    }))))
                }
            }]), BarGroupTooltip
        }(_barEvt2["default"]);
    BarGroupTooltip.defaultProps = _commonProps2["default"], exports["default"] = BarGroupTooltip, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Core = __webpack_require__(3),
        _reactD3Shape = __webpack_require__(43),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        _tooltipUpdate = __webpack_require__(69),
        BarGroupContainer = function (_Component) {
            function BarGroupContainer(props) {
                return _classCallCheck(this, BarGroupContainer), _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroupContainer).call(this, props))
            }
            return _inherits(BarGroupContainer, _Component), _createClass(BarGroupContainer, [{
                key: "shouldComponentUpdate",
                value: function (nextProps, nextState) {
                    return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this)
                }
            }, {
                key: "render",
                value: function () {
                    var xgrid, ygrid, _props = this.props,
                        onMouseOver = _props.onMouseOver,
                        onMouseOut = _props.onMouseOut,
                        showXGrid = _props.showXGrid,
                        showYGrid = _props.showYGrid;
                    return showXGrid && (xgrid = _react2["default"].createElement(_reactD3Core.Xgrid, this.props)), showYGrid && (ygrid = _react2["default"].createElement(_reactD3Core.Ygrid, this.props)), _react2["default"].createElement("g", null, xgrid, ygrid, _react2["default"].createElement(_reactD3Core.Xaxis, this.props), _react2["default"].createElement(_reactD3Core.Yaxis, this.props), _react2["default"].createElement(_reactD3Shape.BarGroup, _extends({}, this.props, {
                        onMouseOver: onMouseOver,
                        onMouseOut: onMouseOut
                    })))
                }
            }]), BarGroupContainer
        }(_react.Component);
    BarGroupContainer.defaultProps = _commonProps2["default"], exports["default"] = BarGroupContainer, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        },
        _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        _reactD3Shape = __webpack_require__(43),
        _reactD3Core = __webpack_require__(3),
        _tooltip = __webpack_require__(62),
        _tooltip2 = _interopRequireDefault(_tooltip),
        _commonProps = __webpack_require__(68),
        _commonProps2 = _interopRequireDefault(_commonProps),
        PieTooltip = function (_Component) {
            function PieTooltip(props) {
                _classCallCheck(this, PieTooltip);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PieTooltip).call(this, props));
                return _this.state = {
                    xTooltip: null,
                    yTooltip: null,
                    contentTooltip: null
                }, _this
            }
            return _inherits(PieTooltip, _Component), _createClass(PieTooltip, [{
                key: "_mouseOver",
                value: function (e, d) {
                    var contentTooltip = {
                        fieldTitle: d.data.name,
                        value: d.value,
                        color: d.color
                    };
                    this.setState({
                        xTooltip: e.clientX,
                        yTooltip: e.clientY,
                        contentTooltip: contentTooltip
                    })
                }
            }, {
                key: "_mouseOut",
                value: function (e, d) {
                    this.setState({
                        xTooltip: null,
                        yTooltip: null,
                        contentTooltip: null
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var _props = this.props,
                        width = _props.width,
                        height = _props.height,
                        radius = this.props.radius || Math.min(width - 120, height - 120) / 2,
                        outerRadius = radius - 10;
                    return _react2["default"].createElement("div", null, _react2["default"].createElement(_tooltip2["default"], _extends({}, this.props, this.state), this.props.children), _react2["default"].createElement(_reactD3Core.Legend, this.props), _react2["default"].createElement(_reactD3Shape.ChartPie, this.props, _react2["default"].createElement(_reactD3Shape.Pie, _extends({}, this.props, {
                        radius: radius,
                        outerRadius: outerRadius,
                        onMouseOver: this._mouseOver.bind(this),
                        onMouseOut: this._mouseOut.bind(this)
                    }))))
                }
            }]), PieTooltip
        }(_react.Component);
    PieTooltip.defaultProps = _commonProps2["default"], exports["default"] = PieTooltip, module.exports = exports["default"]
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== ("undefined" == typeof call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _react = __webpack_require__(2),
        _react2 = _interopRequireDefault(_react),
        SimpleTooltipStyle = function (_Component) {
            function SimpleTooltipStyle(props) {
                return _classCallCheck(this, SimpleTooltipStyle), _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleTooltipStyle).call(this, props))
            }
            return _inherits(SimpleTooltipStyle, _Component), _createClass(SimpleTooltipStyle, [{
                key: "render",
                value: function () {
                    var _props$contentTooltip = this.props.contentTooltip,
                        title = _props$contentTooltip.title,
                        fieldTitle = (_props$contentTooltip.color, _props$contentTooltip.fieldTitle),
                        value = _props$contentTooltip.value,
                        tooltip_bkg_style = {
                            backgroundColor: "rgba(50, 50, 50, 0.8)",
                            borderRadius: "4px",
                            padding: "10px",
                            border: "0"
                        },
                        tooltip_title = {
                            color: "white",
                            fontWeight: "bold",
                            marginBottom: "5px"
                        },
                        tooltip_content = {
                            color: "white"
                        };
                    return _react2["default"].createElement("div", {
                        className: "tooltip_bkg",
                        style: tooltip_bkg_style,
                        key: "tooltip"
                    }, _react2["default"].createElement("div", {
                        style: tooltip_title
                    }, title), _react2["default"].createElement("div", {
                        style: tooltip_content
                    }, fieldTitle, ": ", value))
                }
            }]), SimpleTooltipStyle
        }(_react.Component);
    SimpleTooltipStyle.propTypes = {
        title: _react2["default"].PropTypes.any,
        color: _react2["default"].PropTypes.any,
        fieldTitle: _react2["default"].PropTypes.string,
        value: _react2["default"].PropTypes.any
    }, exports["default"] = SimpleTooltipStyle, module.exports = exports["default"]
}]);