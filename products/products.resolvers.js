const productsModel=require('./products.model');

module.exports={
    Query:{
        products: ()=>{
            return productsModel.getAllProducts();
        },

        productsByPrice: (__, args)=>{
            return productsModel.getProductsByPrice(args.min, args.max);
        },

        productById: (__,args)=>{
            return productsModel.getProductById(args.id);
        }
    },

    Mutation: {
        addNewProduct: (_,args)=>{

           return productsModel.addNewProduct(args.id, args.description, args.price);

        },
        
        addNewReview: (_,args)=>{
            return productsModel.addNewReview(args.id, args.rating, args.comment);
        }
    }
}