var PersonasApp=function(a){function b(){return babelHelpers.classCallCheck(this,b),babelHelpers.possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return babelHelpers.inherits(b,a),babelHelpers.createClass(b,null,[{key:"is",get:function(){return"personas-app"}},{key:"properties",get:function(){return{personas:{type:Array,value:[{nombres:"Arturo Sanchez",email:"arturo@bbva.com",telefono:"88988889"},{nombres:"Luis Flores",email:"luis@bbva.com",telefono:"88988889"}]}}}}]),b}(Polymer.Element);window.customElements.define(PersonasApp.is,PersonasApp);