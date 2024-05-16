const { createApp } = Vue;
createApp({
	data() {
		return {
			inputValue: "",
			apiName: "https://flynn.boolean.careers/exercises/api/random/name",
			apiPhone:
				"https://flynn.boolean.careers/exercises/api/random/phone",
			apiMail: "https://flynn.boolean.careers/exercises/api/random/mail",
			checkListe: false,
			cliccato: false,
			listaUser: [],
			dataNome: "",
			dataPhone: "",
			dataMail: "",
			user: "",
			n: "",
		};
	},
	methods: {
		clear() {
			this.listaUser = [];
			this.inputValue = "";
			this.checkListe = false;
			this.cliccato = false;
		},
		getData() {
			this.n = this.inputValue;
			for (let i = 0; i < this.n; i++) {
				this.listaUser[i] = {};
				axios.get(this.apiName).then((result) => {
					this.listaUser[i].nome = result.data.response;
				});
				axios.get(this.apiPhone).then((result) => {
					this.listaUser[i].telefono = result.data.response;
				});
				axios.get(this.apiMail).then((result) => {
					this.listaUser[i].email = result.data.response;
				});
				this.checkListe = true;
				this.cliccato = true;
				this.inputValue = "";
			}
		},
	},
	mounted() {},
}).mount("#app");
