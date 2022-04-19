export const helloWorld = (req, res) => {
    res.send({"name": "Neo"});
}

export const getMap = (req, res) => {
    res.send({"page": "Map"});
}