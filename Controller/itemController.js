const products = require('../Schema/itemSchema')



//add project 

exports.addproduct = async (req, res) => {

  // automatically generates id 
    let items = await products.find({});
    let id;
    if (items.length > 0) {
        let last_item_array = items.slice(-1);
        let last_item = last_item_array[0];
        id = last_item.id + 1;

    }
    else {
        id = 1;
    }

    const newProduct = new products({
        id: id,
        name: req.body.name,
        desc:req.body.desc,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    await newProduct.save()
    console.log("New Product Added");
    res.json({ success: true, name: req.body.name })

}
//remove product
exports.removeproduct = async (req, res) => {
    await products.findOneAndDelete({ id: req.body.id });
    console.log("Product Removed");
    res.status(200).json("Removed")
}
//get all products
exports.getallproduct = async (req, res) => {
    let items = await products.find({})
    console.log("All products fetched")
    res.send(items);

}

