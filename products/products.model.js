const products = [
    {
        id: 'redshoe',
        description: "Red Shoe",
        price: 42.12,
        reviews: [],
    },
    {
        id: "bluejean",
        description: "Blue Jeans",
        price: 55.55,
        reviews: [],
    },
];

function getAllProducts() {
    return products;
};

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    })
};

function getProductById(Id) {
    return products.find((product) => {
        return product.id === Id;
    })
};

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    };

    products.push(newProduct);
    return newProduct;
};

function addNewReview(id, rating, comment) {

    const newReview = {
        rating,
        comment,
    }
    products.find((product) => {
        if (product.id === id) {
            product.reviews.push(newReview);

        }})

        return newReview;

}


module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewReview,
}