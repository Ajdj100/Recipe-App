<template>
    <div id="parent" class="flex flex-row bg-green-light h-screen">
        <!-- image -->

        <img src="../assets/loginPage.png"
            class="absolute max-w-[50%] h-screen object-cover ease-in-out duration-300 drop-shadow-lg"
            :class="{ 'transition transform translate-x-full': signup }">
        <!-- sign up page -->
        <div class="flex flex-col justify-center mx-auto w-[375px]">
            <h1 class="text-[40px] font-semibold text-main-font mb-10">Sign Up</h1>
            <!-- signup box -->
            <form class="flex flex-col" @submit.prevent="signupMethod">
                <label for="" class="mb-1 text-xl text-main-font">Username</label>
                <input type="text" v-model="SignUpUsername" placeholder="Enter your username"
                    class="border border-grey-near rounded-md focus:outline-none py-1 px-2 mb-5">
                <label for="" class="mb-1 text-xl text-main-font">Password</label>
                <input type="password" v-model="SignUpPassword" placeholder="Enter your password"
                    class="border border-grey-near rounded-md focus:outline-none py-1 px-2 mb-14">
                    <input type="submit" value="Sign Up"
                    class="bg-green-dark rounded-md h-12 text-2xl font-bold text-green-extra-dark hover:cursor-pointer">
            </form>
            <p class="text-center text-main-font mt-7 hover:underline hover:cursor-pointer" @click="signup = false">Back to
                Login</p>
        </div>
        <!-- login page -->
        <div class="flex flex-col justify-center mx-auto w-[375px]">
            <h1 class="text-[40px] font-semibold text-main-font mb-10">Login</h1>
            <!-- login box -->
            <form class="flex flex-col" @submit.prevent="login">
                <label for="" class="mb-1 text-xl text-main-font">Username</label>
                <input type="text" v-model="LogInUsername" placeholder="Enter your username"
                    class="border border-grey-near rounded-md focus:outline-none py-1 px-2 mb-5">
                <label for="" class="mb-1 text-xl text-main-font">Password</label>
                <input type="password" v-model="LogInPassword" placeholder="Enter your password"
                    class="border border-grey-near rounded-md focus:outline-none py-1 px-2">
                <p class="text-right hover:cursor-pointer hover:underline mb-9">Forgot password?</p>
                <input type="submit" value="Log in"
                    class="bg-green-dark rounded-md h-12 text-2xl font-bold text-green-extra-dark hover:cursor-pointer">
            </form>
            <p class="text-center text-main-font mt-7 hover:underline hover:cursor-pointer" @click="signup = true">No
                account? Sign up</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            signup: false,
            SignUpUsername: '',
            SignUpPassword: '', 
            LogInUsername: '',
            LogInPassword: '',
        }
    },
    methods: {
        signupMethod() {
            const request = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Username: this.SignUpUsername, Password: this.SignUpPassword })
            };
            fetch('http://localhost:8080/register', request)
                .then(response => {
                    if (response.status === 200) {
                        response.json().then((data) => {
                            localStorage.setItem("user", data.user);
                        });
                        this.$router.push('/')
                    } else {
                        this.invalid = true;
                        console.log("bad");
                    }
                    //else show invalid login message
                })
        },
        login() {
            //todo: make API call
            const request = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Username: this.LogInUsername, Password: this.LogInPassword })
            };
            fetch('http://localhost:8080/login', request)
                .then(response => {
                    if (response.status === 200) {
                        response.json().then((data) => {
                            localStorage.setItem("user", data.user);
                        });
                        this.$router.push('/')
                    } else {
                        this.invalid = true;
                        console.log("bad");
                    }
                    //else show invalid login message
                })
        }

    }
}
</script>