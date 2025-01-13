import { create } from 'zustand';

const useDataStore = create((set) => ({
    mainProduct: {},
    mainSlider: [],
    ourProductionsBlog : {},
    certificatesAndAgree: [],
    allProducts: [],
    partners: [],
    fetchMainProducts: async () => {
        try {
            let data = await fetch('https://apibestspirits.ru/wp-json/wp/v2/main_products').then(res => res.json());
            
            set({
                mainProduct: {
                    az: data[0].acf.az,
                    ru: data[0].acf.ru,
                    en: data[0].acf.en,
                    productImg: data[0].acf.product_img
                }
            });
            set({
                mainSlider: data[0].acf.slider_item
            })
        } catch (error) {
            console.error('Error fetching main products:', error);
        }
    },
    fetchOurProductionBlog: async ()=> {
        try {
            let data = await fetch('https://apibestspirits.ru/wp-json/wp/v2/our_production').then(res => res.json());

            set({
                ourProductionsBlog: {
                    azSubtitle: data[0].acf.az_subtitle,
                    ruSubtitle: data[0].acf.ru_subtitle,
                    enSubtitle: data[0].acf.en_subtitle,
                    productionBlogs: data[0].acf.production_blogs
                }
            })
            
        } catch (error) {
            console.error('Error fetching main products:', error);
        }
    },
    fetchCertificateAndAgree: async () => {
        let data = await fetch('https://apibestspirits.ru/wp-json/wp/v2/cerificate_agree').then(res => res.json());
        
        set({
            certificatesAndAgree: data[0].acf.items
        })
        
    },
    fetchAllProducts: async () => {
        let data = await fetch('https://apibestspirits.ru/wp-json/wp/v2/all_products').then(res => res.json());
        set({
            allProducts : data[0].acf.all_products
        })
    },
    fetchPartners: async () => {
        let data = await fetch('https://apibestspirits.ru/wp-json/wp/v2/partners').then(res => res.json());
        set({
            partners : data[0].acf.partners
        })
    }
}));


export default useDataStore;