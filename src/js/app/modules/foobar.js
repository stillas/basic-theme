const Vue = require('../../node_modules/vue/dist/vue.common.js');

const App = new Vue({
	delimiters: ['${', '}'],

	el: '#app',

	data:  {
		message: 'world!'
	}
});
