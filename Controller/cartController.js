const users = require('../Schema/userSchema')

exports.addtocart = async (req, res) => {
    console.log("Add Cart", req.body.itemId);
    let userData = await users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Added")
}

exports.removefromcart = async (req, res) => {
    console.log("Remove Cart", req.body.itemId);
    let userData = await users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] != 0) {
        userData.cartData[req.body.itemId] -= 1;
    }
    await users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Removed");
}

exports.getcart = async (req, res) => {
    console.log("Get Cart");
    let userData = await users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
}

