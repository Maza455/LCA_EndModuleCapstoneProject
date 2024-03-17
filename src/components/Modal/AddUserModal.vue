<template>
    <div class="modal">
        <div class="modal-content">
            <h2>Add New User</h2>
            <label for="firstName">First Name:</label>
            <input v-model="newUser.firstName" type="text" id="firstName" placeholder="Enter First Name">

            <label for="lastName">Last Name:</label>
            <input v-model="newUser.lastName" type="text" id="lastName" placeholder="Enter Last Name">

            <label for="age">Age:</label>
            <input v-model="newUser.userAge" type="number" id="age" placeholder="Enter Age">

            <label for="gender">Gender:</label>
            <select v-model="newUser.gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <label for="email">Email:</label>
            <input v-model="newUser.emailAdd" type="email" id="email" placeholder="Enter Email">

            <label for="password">Password:</label>
            <input v-model="newUser.userPwd" type="password" id="password" placeholder="Enter Password">

            <!-- Add more input fields as needed -->

            <button @click="addNewUser">Add User</button>
        </div>
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
                gender: 'male',
                emailAdd: '',
                userPwd: ''
                // Add more fields as needed
            }
        };
    },
    methods: {
        addNewUser() {
            this.$emit('save', this.newUser);
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