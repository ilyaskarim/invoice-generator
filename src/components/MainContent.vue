<template>
	<div class="main-content" >
		<table>
			<thead >
				<tr>
					<th>#</th>
					<th>Description</th>
					<th>Quantity</th>
					<th>Unit Price</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>#</td>
					<td>Description</td>
					<td>Quantity</td>
					<td>Unit Price</td>
					<td>Amount</td>
					<td>
						<i class="mdi mdi-plus" ></i>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "MainContent",
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
</style>