import { defineStore } from "pinia";
export const UseAuthStore = defineStore('Auth', {
    state: () => ({
        auth: 'korrim',
        regname: '',
        regPhoto: '',
        typedEmail: "",
        typedPass: '',

    }),
    actions: {

    }

})