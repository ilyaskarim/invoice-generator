import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		invoiceHeader: "Invoice",
		clientName: "Client Name",
		dateIssued: "12 March 2012",
		invoiceNumber: "#1",
		yourName: "Your Name",
		address: "Your address",
		townCity: "Your Town",
		postalCode: "15100",
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
		deleteRow(_state, index) {
			console.log(index);
			_state.table.rows.splice(index,1)
		},
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
