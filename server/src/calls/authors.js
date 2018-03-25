import authProcedures from '../procedures/authors';

function all(req, res, next) {
    authProcedures.all()
    .then((authors) => {
        res.json(authors)
    }).catch((err) => {
        console.log(err)
    })
}

function create(req, res, next) {
    let newAuthor = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }

    authProcedures.create(newAuthor.firstname, newAuthor.lastname)
    .then((id) => {
        res.json(id)
    }).catch((err) => {
        console.log(err)
    })
}

function read(req, res, next) {
    let id = req.params.id;

    authProcedures.read(id)
    .then((author) => {
        res.json(author)
    }).catch((err) => {
        console.log(err)
    })
}

function update(req, res, next) {
    let id = req.params.id;
    let author = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    authProcedures.update(id, author.firstname, author.lastname)
    .then(() => {
        res.sendStatus(201)
    }).catch((err) => {
        console.log(err)
    })
}

function destroy(req, res, next) {
    let id = req.params.id;

    authProcedures.destroy(id)
    .then(() => {
        res.send('Deleted')
    }).catch((err) => {
        console.log(err)
    })
}

export default {
    all,
    create, 
    read,
    update,
    destroy
}