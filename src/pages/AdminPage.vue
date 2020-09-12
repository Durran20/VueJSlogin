<template>
<div class="reg">
    <h4>Admin Page</h4>
    <form @submit.prevent="register" class="q-pt-none">
        <div>
        <q-input 
            ref="username"
            :rules="[val => !!val || 'Field is required']"
            v-model="dataToBeSubmitted.username"
            filled 
            label="User Name">
                <template v-slot:append>
                    <q-icon
                        v-if="dataToBeSubmitted.username" 
                        @click="dataToBeSubmitted.username=''"
                        name="close" 
                        class="cursor-pointer" />
                </template> 
            </q-input>
        <q-input
            ref="pwd" 
            :rules="[val => !!val || 'Field is required']"
            label="Password" v-model="dataToBeSubmitted.password" filled :type="isPwd ? 'password' : 'text'" >
            <template v-slot:append>
                 <q-icon
                        v-if="dataToBeSubmitted.password" 
                        @click="dataToBeSubmitted.password=''"
                        name="close" 
                        class="cursor-pointer" />
                <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                />
            </template>
        </q-input>    
        <q-input 
            ref="designation"
            :rules="[val => !!val || 'Field is required']"
            v-model="dataToBeSubmitted.designation"
            filled 
            label="Designation">
                <template v-slot:append>
                    <q-icon
                        v-if="dataToBeSubmitted.designation" 
                        @click="dataToBeSubmitted.designation=''"
                        name="close" 
                        class="cursor-pointer" />
                </template> 
        </q-input>
        <q-input 
            ref="name"
            :rules="[val => !!val || 'Field is required']"
            v-model="dataToBeSubmitted.fullname"
            filled 
            label="Full Name">
            <template v-slot:append>
                <q-icon
                    v-if="dataToBeSubmitted.fullname" 
                    @click="dataToBeSubmitted.fullname=''"
                    name="close" 
                    class="cursor-pointer" />
            </template>
        </q-input>
        </div>
        <div class="button">
        <q-btn 
        label="Register" 
        color="primary" 
        type="submit" />
        </div>
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            password: '',
            isPwd: true,
            dataToBeSubmitted: {
                username: "",
                password: "",
                designation: "",
                fullname: "",
            }
        }
    },
    methods: {
        ...mapActions("data", ["registerUser"]),
        register() {
            this.$refs.username.validate()
            this.$refs.pwd.validate()
            this.$refs.designation.validate()
            this.$refs.name.validate()
            if (!this.$refs.pwd.hasError) {
                this.submitUserData()
            }
        },
        submitUserData() {
            this.registerUser(this.dataToBeSubmitted)
        }
    }
}
</script>

<style>
    .reg {
        padding: 2% 20% 10% 20%;
    }
    .button{
        text-align: center;
    }
</style>