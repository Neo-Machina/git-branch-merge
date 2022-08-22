var app = new Vue(
    {
        el: '#root',
        data: {
            cars: []
        },
        methods: {
            getCarsFromAPI() {
                axios.get('http://localhost:8888/git-branch-merge/server.php')
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