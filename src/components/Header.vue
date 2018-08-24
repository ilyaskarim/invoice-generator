<template>
	<div>
		<div class="main-header" >
			<div class="row">
				<div class="col-lg-12" >
					<h2 class="editable" edit-key="invoiceHeader" contenteditable="true" accept-edited-content="true" >Invoice</h2>
				</div>
			</div>
		</div>
		<div class="main-client-employee" >
			<div class="row">
				<div class="col-lg-6" >
					<div class="client-info" >
						<h4 class="editable" edit-key="clientName" contenteditable="true" accept-edited-content="true" >Client Name</h4>
						<div class="date-invoice-no" >
							<p>
								Date Issued:
								<b class="editable" edit-key="dateIssued" contenteditable="true" accept-edited-content="true" >12 March 2012</b>
							</p>
							<p class="invoice-number" >
								Invoice Number:
								<b class="editable" edit-key="invoiceNumber" contenteditable="true" accept-edited-content="true" >201</b>
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6" >
					<div class="your-information" >
						<p edit-key="yourName" class="editable" contenteditable="true" accept-edited-content="true" >Your Name</p>
						<p edit-key="address" class="editable" contenteditable="true" accept-edited-content="true" >Adress</p>
						<p edit-key="townCity" class="editable" contenteditable="true" accept-edited-content="true" >Town/City</p>
						<p edit-key="postalCode" class="editable" contenteditable="true" accept-edited-content="true" >Postal Code</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "Header",
	};
</script>
<style type="text/css">
	
</style>