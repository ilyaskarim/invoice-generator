import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		invoiceHeader: "",
		clientName: "",
		dateIssued: "",
		invoiceNumber: "",
		yourName: "",
		address: "",
		townCity: "",
		postalCode: "",
		table: {
			emptyRow: {description: "", quantity: "", unitPrice: ""},
			columns: {
				description: "",
				quantity: null,
				unitPrice: "",
			},
			rows: [
				{description: "", quantity: "", unitPrice: ""}
			]
		},
	},
	getters: {
		rows(_state) {
			return _state.table.rows;
		},
		getJsonString(_state) {
			return JSON.stringify(_state);
		}
	},
	mutations: {
		setTableRowAttrValue(_state, payload) {
			_state.table.rows[payload.index][payload.attribute] = payload.content;
		},
		setContent(_state, payload) {
			_state[payload.name] = payload.content;
		},
		addTableRow(_state) {
			_state.table.rows.push(_state.table.emptyRow);
		}
	},
})
