import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    users: {
        'ID1': {
            username: "Tom",
            password: "1234",
            designation: "admin",
            fullName: "Thomas"
        },
        'ID2': {
            username: "hello",
            password: "1234",
            designation: "user",
            fullName: "Thomas"
        },
        'ID3': {
            username: "bye",
            password: "1234",
            designation: "user",
            fullName: "Thomas"
        }
    }
}

const mutations = {
    registerUser(state, payload) {
        Vue.set(state.users, payload.id, payload.userInfo)
    }
}

const actions = {
    loginMain({ commit }, userData) {
        let dest = ""
        for (let i in state.users) {
            if (userData.password === state.users[i].password && userData.username === state.users[i].username) {
                dest = state.users[i].designation
            } else {
                // window.location.href = '/#/error'
                this.$router.push({path : '/error'})
            }
        }
        if(dest === "admin") {
            //window.location.href = '/#/admin'
            this.$router.push({path : '/admin'})
        } else if(dest === "user") {
            //window.location.href = '/#/user'
            this.$router.push({path : '/user'})
        }
    },
    registerUser({ commit }, userData) {
        let userId = uid()
        let payload = {
            id: userId,
            userInfo: userData
        }
        commit("registerUser", payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}