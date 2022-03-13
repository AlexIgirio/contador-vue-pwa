const app = Vue.createApp({
    data() {
        return {
            user: {
                title: "Vue",
                name: "Alex",
                age: 23,
                languages: [
                    "Python",
                    "Js",
                    "Java",
                    "C#"
                ],
                url: "https://www.udemy.com/",
                picture: "https://www.manejandodatos.es/wp-content/uploads/2018/02/vueJS.png",
                classValue: "good"
            },
            count: 0
        };
    },
    methods: {
        decCount() {
            this.count -= 1;
        },
        addCount() {
            this.count += 1;
        },
        modCount(instruction = "add", limit = 1) {
            if(instruction === "dec") {
                this.count -= limit;
            }else{
                this.count += limit;
            }
        }
    }
});
