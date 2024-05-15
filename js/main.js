console.log(`Main collegato`);

const { createApp } = Vue;

createApp({
	data() {
		return {
			listaMail: [],
			inputValue: "",
		};
	},
	methods: {
		getData() {
			for (let i = 1; i <= this.inputValue; i++) {
				axios
					.get(
						"https://flynn.boolean.careers/exercises/api/random/mail"
					)
					.then((result) => {
						let data = result.data;
						this.listaMail.push(data.response);
					});
			}
		},
		clear() {
			this.listaMail = [];
			this.inputValue = "";
		},
	},
	mounted() {
		console.log("Applicazione montata");
	},
}).mount("#app");
