<template>
    <div>
        <form @submit.prevent="addUser">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" v-model="newUser.firstName" required>

            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" v-model="newUser.lastName" required>

            <label for="age">Age:</label>
            <input type="number" id="age" v-model="newUser.userAge" required>

            <label for="gender">Gender:</label>
            <input type="text" id="gender" v-model="newUser.gender" required>

            <label for="email">Email:</label>
            <input type="text" id="email" v-model="newUser.emailAdd" required>

            <label for="password">Password:</label>
            <input type="text" id="password" v-model="newUser.userPwd" required>

            <label for="role">Role:</label>
            <input type="text" id="role" v-model="newUser.userRole" required>

            <button type="submit" @click="saveUser">Save</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newUser: {
                firstName: '',
                lastName: '',
                userAge: 0,
                gender: '',
                emailAdd: '',
                userPwd: '',
                userRole: '' 
            }
        };
    },
    methods: {
        saveUser() {
            this.$emit('save', this.newUser);
            this.newUser = {
                firstName: '',
                lastName: '',
                userAge: 0,
                gender: '',
                emailAdd: '',
                userPwd: '',
                userRole: ''
                
            };
        }
    }
};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
}

.modal-content {
    display: flex;
    flex-direction: column;
}

h2 {
    text-align: center;
}

label {
    margin-top: 10px;
}

input,
select {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
}

button {
    margin-top: 10px;
}
</style>