// Access to the Vue object granted due to CDN
// createApp() requires an object arg
// We use the data() function in conjuction with {{declarative rendering}}

/**
 * We can use declarative rendering inside our HTML by moving the template field out of the object
 * used to create the vue js app
 *
 * const app = Vue.createApp({
 *     template: '<h1>Hello, {{firstname}} {{lastname}}</h1>',
 *     data() {
 *         return {
 *             firstname: 'John',
 *             lastname: 'Smith'
 *         }
 *     }
 * });
 */

// We define methods to be used when events trigger in our HTML where we mount our app, in the 'methods' field
// This will be an object with methods defined
// Our methods can access the object returned by data() using the this keyword
const app = Vue.createApp({
    data() {
        return {
            firstname: 'Mary',
            lastname: 'Sue',
            portrait: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3QYy7PTo-DNQYYQqoVQmzGLuT7-uhkuP5A&usqp=CAU',
            gender: 'female',
        }
    },
    methods: {
        getRandomUser() {
            console.log(this.firstname)
        },
    }
});


// To mount this app to the div defined in our HTML
app.mount("#app");