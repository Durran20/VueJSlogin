<template>
    <form
         @submit.prevent="login"
        class="q-pt-none">
        <h4 class="center">Login</h4>
        <q-input 
            ref="name"
            :rules="[val => !!val || 'Field is required']"
            v-model="userData.username"
            filled 
             
            label="User Name" />
        <q-space></q-space>
         <q-input
            ref="pwd" 
            :rules="[val => !!val || 'Field is required']"
            label="Password" v-model="userData.password" filled :type="isPwd ? 'password' : 'text'" >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    <div class="center">
        <q-btn 
        label="Login" 
        color="primary" 
        type="submit" />
    </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            password: '',
            isPwd: true,
            adminLink: "/admin",
            userLink: "/user",
            userData: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions("data", ["loginMain"]),
        login () {
            this.$refs.name.validate()
            if (!(this.$refs.pwd.hasError && this.$refs.name.hasError)) {
                this.submit()
            }
        },
        submit() {
            this.loginMain(this.userData)
        }
    }
}
</script>

<style>
    .center{
        text-align: center;
    }
</style>