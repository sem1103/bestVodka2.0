import { create } from 'zustand';

 const useDataStore = create((set) => ({
    mainProducts : [],

    fetchMainProducts : async state => {
        let data = await fetch('bestspirits6.wordpress.com/wp-json/wp/v2/main_products').then(res => res.json());
        console.log(data);
        
    }
}))

export default useDataStore;