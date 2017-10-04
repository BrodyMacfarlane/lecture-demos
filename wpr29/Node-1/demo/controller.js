var users = [
  {
    name: 'Sally',
    age: 12,
    id: 1
  },
  {
    name: 'Jerry',
    age: 23,
    id: 2
  }
]

// anything that you want access to outside of this file should be in the module.exports

module.exports = {
  get: (req, res) => { 
    res.status(200).send(users);
  },
  post: (req, res) => {
    users.push(req.body);
    res.status(200).send(users);
  },
  delete:(req, res) => {
    users = users.filter(e => {
      return e.id !== +req.params.id
    })
    res.status(200).send(users);
  }
}