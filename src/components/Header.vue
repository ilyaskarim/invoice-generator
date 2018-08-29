<template>
	<div>
		<div class="main-header" >
			<div class="row">
				<div class="col-lg-12" >
					<h2 class="editable" edit-key="invoiceHeader" contenteditable="true" accept-edited-content="true" >{{mapContent(invoiceHeader)}}</h2>
				</div>
			</div>
		</div>
		<div class="main-client-employee" >
			<div class="row">
				<div class="col-lg-6" >
					<div class="client-info" >
						<h4 class="editable" edit-key="clientName" contenteditable="true" accept-edited-content="true" >{{mapContent(clientName)}}</h4>
						<div class="date-invoice-no" >
							<p>
								Date Issued:
								<b class="editable" edit-key="dateIssued" contenteditable="true" accept-edited-content="true" >{{mapContent(dateIssued)}}</b>
							</p>
							<p class="invoice-number" >
								Invoice Number:
								<b class="editable" edit-key="invoiceNumber" contenteditable="true" accept-edited-content="true" >{{mapContent(invoiceNumber)}}</b>
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6" >
					<div class="your-information" >
						<p edit-key="yourName" class="editable" contenteditable="true" accept-edited-content="true" >{{mapContent(yourName)}}</p>
						<p edit-key="address" class="editable" contenteditable="true" accept-edited-content="true" >{{mapContent(address)}}</p>
						<p edit-key="townCity" class="editable" contenteditable="true" accept-edited-content="true" >{{mapContent(townCity)}}</p>
						<p edit-key="postalCode" class="editable" contenteditable="true" accept-edited-content="true" >{{mapContent(postalCode)}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {
		mapState
	} from "vuex";
	export default {
		name: "Header",
		methods: {
			mapContent(a) {
				return (a) ? a : 'No Content'
			}
		},
		computed: {
			...mapState({
				invoiceHeader: (state) =>  state.invoiceHeader,
				clientName: (state) => state.clientName,
				dateIssued: (state) => state.dateIssued,
				invoiceNumber: (state) => state.invoiceNumber,
				yourName: (state) => state.yourName,
				address: (state) => state.address,
				townCity: (state) => state.townCity,
				postalCode: (state) => state.postalCode,
			})
		}
	};
</script>
<style type="text/css">
	
</style>