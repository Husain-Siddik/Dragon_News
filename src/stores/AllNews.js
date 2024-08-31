import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
export const useAllNewsStore = defineStore('news', {
    state: () => (
        {
            name: 'Eduardo',
            newsCatagoryId: ref(''),
            news: ref('')
        }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        // all news loading
        async loadNews(category = 5) {
            // console.log('news loded');
            // console.log(category);
            try {
                const response = await axios.get(`/data/news.json`);
                
                if(category > 0){
                    this.news = response.data
                    const filteredItems = this.news.filter(news => news.category_id == category)
                    this.news = filteredItems
                    console.log(this.news);
                    return
                }else{
                    this.news = response.data
                    console.log(this.news);
                    
                }
                
            } catch (error) {
                console.log(error);
            }

        }

    },
})