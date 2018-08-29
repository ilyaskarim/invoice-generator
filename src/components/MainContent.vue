<template>
	<div class="main-content" >
		<table>
			<thead >
				<tr>
					<th>#</th>
					<th>Description</th>
					<th>Quantity</th>
					<th>Unit Price</th>
					<th>Total Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row,index) in rows" >
					<td>{{index+1}}</td>
					<td contenteditable="true" accept-edited-content="true" >{{(row.description) ? row.description : 'Not Set'}}</td>
					<td contenteditable="true" accept-edited-content="true" >{{(row.quantity) ? row.quantity : 'Not Set'}}</td>
					<td contenteditable="true" accept-edited-content="true" >{{(row.unitPrice) ? row.unitPrice : 'Not Set'}}</td>
					<td>120</td>
					<td>
						<i v-if="rows.length == (index + 1)" @click="addTableRow" class="mdi add-table-row mdi-plus" ></i>
						<i @click="deleteRow(index)" v-if="rows.length > 1" class="mdi add-table-row mdi-minus" ></i>
					</td>
				</tr>
			</tbody>
		</table>
		{{ rows }}
	</div>
</template>
<script type="text/javascript">
	import {
		mapGetters,
		mapMutations
	} from "vuex";
	export default {
		name: "MainContent",
		computed: {
			...mapGetters(['rows']),
		},
		methods: {
			...mapMutations(['addTableRow','deleteRow'])
		}
	};
</script>
<style type="text/css" scoped >
	table {
		width: 100%;
		text-align: left;
	}
	table thead {
		box-shadow: 0px 1px 0px 0px #d4d4d4;
	}
	.main-content th {
		height: 30px;
	}
	.main-content td {
		height: 30px;
	}
	.add-table-row {
		cursor: pointer;
	}
</style>