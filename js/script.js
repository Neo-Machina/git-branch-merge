var app = new Vue(
    {
        el: '#root',
        data: {
            cars: []
        },
        methods: {
            getCarsFromAPI() {
<<<<<<< HEAD
                axios.get('http://localhost:80/git-branch-merge/server.php')
=======
                axios.get('./server.php')
>>>>>>> 987ec1b9c797f92ae7160e57485b61af4427e608
                .then((response) => {
                    this.cars = response.data;
                });
            }
        },
        mounted() {
            this.getCarsFromAPI();
        }
    }
);