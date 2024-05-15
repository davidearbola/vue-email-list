console.log(`Main collegato`);

// const { createApp } = Vue;

// createApp({
// 	data() {
// 		return {
// 			listaMail: [],
// 			inputValue: "",
// 		};
// 	},
// 	methods: {
// 		getData() {
// 			for (let i = 1; i <= this.inputValue; i++) {
// 				axios
// 					.get(
// 						"https://flynn.boolean.careers/exercises/api/random/mail"
// 					)
// 					.then((result) => {
// 						let data = result.data;
// 						this.listaMail.push(data.response);
// 					});
// 			}
// 		},
// 		clear() {
// 			this.listaMail = [];
// 			this.inputValue = "";
// 		},
// 	},
// 	mounted() {
// 		console.log("Applicazione montata");
// 	},
// }).mount("#app");

//*********************************************************************** */
const { createApp } = Vue;
createApp({
	data() {
		return {
			listaName: [],
			listaPhone: [],
			listaMail: [],
			inputValue: "",
			apiName: "https://flynn.boolean.careers/exercises/api/random/name",
			apiPhone:
				"https://flynn.boolean.careers/exercises/api/random/phone",
			apiMail: "https://flynn.boolean.careers/exercises/api/random/mail",
			checkListe: false,
			cliccato: false,
		};
	},
	methods: {
		getData() {
			for (let i = 1; i <= this.inputValue; i++) {
				axios.get(this.apiName).then((result) => {
					let data = result.data;
					this.listaName.push(data.response);
				});
				axios.get(this.apiPhone).then((result) => {
					let data = result.data;
					this.listaPhone.push(data.response);
				});
				axios.get(this.apiMail).then((result) => {
					let data = result.data;
					this.listaMail.push(data.response);
				});
			}
			this.checkListe = true;
			this.cliccato = true;
		},
		clear() {
			this.listaName = [];
			this.listaPhone = [];
			this.listaMail = [];
			this.inputValue = "";
			this.checkListe = false;
			this.cliccato = false;
		},
	},
	mounted() {},
}).mount("#app");
