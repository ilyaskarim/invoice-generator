import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	header: {
  		clientName: "",
  		dateIssued: "",
  		invoiceNumber: "",
  	},
  	headerEmployee: {
  		yourName: "",
  		address: "",
  		townCity: "",
  		postalCode: "",
  	},
  	table: {
  		columns: {
  			description: "",
  			quantity: "",
  			unitPrice: "",
  		},
  		rows: [
  			{description: "", quantity: "", unitPrice: ""}
  		]
  	}
  },
  mutations: {

  },
  actions: {

  }
})
