const { createApp } = Vue;

Vue.createApp({
    data() {
        return {
            mode_sombre: true,
            exemple: 'Texte exemple depuis Vue JS'
        };
    }
}).mount('body');