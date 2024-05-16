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
			for (let i = 0; i < this.inputValue; i++) {
				axios.get(this.apiName).then((result) => {
					this.dataNome = result.data.response;
					this.user = { nome: this.dataNome };
				});
				axios.get(this.apiPhone).then((result) => {
					this.dataPhone = result.data.response;
					this.user = {
						nome: this.dataNome,
						telefono: this.dataPhone,
					};
				});
				axios.get(this.apiMail).then((result) => {
					this.dataMail = result.data.response;
					this.user = {
						nome: this.dataNome,
						telefono: this.dataPhone,
						email: this.dataMail,
					};
					this.listaUser.push(this.user);
				});
				this.checkListe = true;
				this.cliccato = true;
				// this.listaUser.push({
				// 	nome: dataNome.response, // qui response non funziona
				// 	numero: dataTelefono.response,
				// 	email: dataEmail.response,
				// });
			}
		},
	},
	mounted() {},
}).mount("#app");
