var app = new Vue(
    {
        el: '#root',
        data: {
            cars: []
        },
        methods: {
            getCarsFromAPI() {
                axios.get('./server.php')
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