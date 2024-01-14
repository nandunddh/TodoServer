exports.list = (req,res) => {
    return res.json("List");
}
exports.detail = (req,res) => {
    return res.json(`ID ${req.params.id}`);
}
exports.create = (req,res) => {
    return res.json("create");
}
exports.update = (req,res) => {
    return res.json("update");
}
exports.destory = (req,res) => {
    return res.json("destroy");
}