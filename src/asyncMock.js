const products = [
    {
        id: '1',
        name:'Sunscreen 90 FPS',
        price: 4,
        category: 'bodycare',
        img: require('./components/ItemListContainer/img/body1.png'),
        stock: 25,
        description: '12 Hours Sunscreen Protection',
    },
    {
        id: '2',
        name:'Peach Moisturizing Body Cream',
        price: 12,
        category: 'bodycare',
        img: require('./components/ItemListContainer/img/body2.png'),
        stock: 20,
        description: 'Refresh and Moisture your Skin with Peach Extract',
    },
    {
        id: '3',
        name:'Oil-Absorbing Sheets for Skincare',
        price: 6,
        category: 'skincare',
        img: require('./components/ItemListContainer/img/face1.png'),
        stock: 10,
        description: 'Moisturize Your Skin by Applying these Oil Sheets',
    },
    {
        id: '4',
        name:'Gentle Exfoliating Toning Acid',
        price: 10,
        category: 'skincare',
        img: require('./components/ItemListContainer/img/face2.png'),
        stock: 10,
        description: 'Exfoliate your skin for a toned complexion',
    },
    {
        id: '5',
        name:'Olaplex Haircare Pack',
        price: 32,
        category: 'haircare',
        img: require('./components/ItemListContainer/img/hair1.png'),
        stock: 8,
        description: 'Exfoliate your skin for a toned complexion',
    },
    {
        id: '6',
        name:'Giangtai Spray',
        price: 5,
        category: 'haircare',
        img: require('./components/ItemListContainer/img/hair2.png'),
        stock: 30,
        description: 'Enhance shine and reduce frizz with our Hair Shine & Frizz Control Spray.',
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    }
    )
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}