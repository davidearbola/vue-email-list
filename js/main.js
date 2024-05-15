console.log(`Main collegato`);

const { createApp } = Vue;

createApp({
	data() {
		return {
			listaMail: [],
		};
	},
	methods: {
		getData() {
			for (let i = 1; i <= 10; i++) {
				axios
					.get(
						"https://flynn.boolean.careers/exercises/api/random/mail"
					)
					.then((result) => {
						let data = result.data;
						this.listaMail.push(data.response);
						console.log(this.listaMail);
					});
			}
		},
	},
	mounted() {
		console.log("Applicazione montata");
		this.getData();
	},
}).mount("#app");
