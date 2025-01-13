import Partners from "./Partners";

export function generateMetadata({ params }) {

    const metadata = {
        ru: {
            authors: { name: 'Best Spirits' },
            title: 'BEST — Производство качественной водки',
            description: 'Производство премиальной водки от компании Best. Водка из натуральных ингредиентов: классическая, ароматная и крепкая водка высшего качества. Традиции и высокие стандарты.',
            openGraph: {
                title: 'BEST — Производство качественной водки',
                url: 'https://best-spirits.com/ru/partneri',
                siteName: 'Best Spirits',
                images: [
                    {
                        url: '/assets/img/logo.svg',
                        alt: 'Логотип Best'
                    }
                ],
                locale: 'ru',
                type: 'website',
                description: 'Компания Best производит водку премиум-класса из натуральных ингредиентов. Ассортимент включает классическую и ароматную водку высокого качества.',
            },
            alternates: {
                canonical: '/ru/partneri',
                languages: {
                    'az-AZ': '/az',
                    'ru-RU': '/ru',
                    'en-EN': '/en',
                },
            },
        },
        az: {
            authors: { name: 'Best Spirits' },
            title: 'BEST — Keyfiyyətli arağ istehsalı',
            description: 'Premium arağ istehsalçısı Best şirkəti. Klassik və meyvəli arağlarımız yalnız təbii maddələrlə hazırlanır. Keyfiyyət və ənənələrə üstünlük veririk.',
            openGraph: {
                title: 'BEST — Keyfiyyətli arağ istehsalı',
                url: 'https://best-spirits.com//az/tərəfdaşlarımız',
                siteName: 'Best Spirits',
                images: [
                    {
                        url: '/assets/img/logo.svg',
                        alt: 'BEST loqosu'
                    }
                ],
                locale: 'az',
                type: 'website',
                description: 'Best şirkəti yüksək keyfiyyətli premium arağ istehsal edir. Klassik və meyvəli arağlarımız keyfiyyətə zəmanət verir.',
            },
            alternates: {
                canonical: '/az/tərəfdaşlarımız',
                languages: {
                    'az-AZ': '/az',
                    'ru-RU': '/ru',
                    'en-EN': '/en',
                },
            },
        },
        en: {
            authors: { name: 'Best Spirits' },
            title: 'BEST — Premium Vodka Production',
            description: 'Premium vodka production by Best. High-quality vodka crafted from natural ingredients: classic, flavored, and strong vodka for connoisseurs of excellence and tradition.',
            openGraph: {
                title: 'BEST — Premium Vodka Production',
                url: 'https://best-spirits.com/en/partners',
                siteName: 'Best Spirits',
                images: [
                    {
                        url: '/assets/img/logo.svg',
                        alt: 'BEST Logo'
                    }
                ],
                locale: 'en',
                type: 'website',
                description: 'Discover premium vodka by Best. Crafted from natural ingredients, our classic and flavored vodkas deliver unmatched quality and tradition.',
            },
            alternates: {
                canonical: '/en/partners',
                languages: {
                    'az-AZ': '/az',
                    'ru-RU': '/ru',
                    'en-EN': '/en',
                },
            },
        },
    };


    return metadata[params.locale];
}

export default function Page() {
    return <Partners />
}