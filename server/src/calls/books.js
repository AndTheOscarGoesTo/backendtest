import bookProcedures from '../procedures/books';

function all(req, res, next) {
    bookProcedures.all()
    .then((books) => {
        res.json(books)
    }).catch((err) => {
        console.log(err)
    })
}

function create(req, res, next) {
    let newBook = {
        authorid: req.body.authorid,
        name: req.body.name,
        cover: req.body.cover
    }

    bookProcedures.create(newBook.authorid, newBook.name, newBook.cover)
    .then((id) => {
        res.json(id)
    }).catch((err) => {
        console.log(err)
    })
}

function read(req, res, next) {
    let id = req.params.id;

    bookProcedures.read(id)
    .then((book) => {
        res.json(book)
    }).catch((err) => {
        console.log(err)
    })
}

function update(req, res, next) {
    let id = req.params.id;
    let book = {
        name: req.body.name,
        cover: req.body.cover
    }

    bookProcedures.update(id, book.name, book.cover)
    .then(() => {
        res.sendStatus(201)
    }).catch((err) => {
        console.log(err)
    })
}

function destroy(req, res, next) {
    let id = req.params.id;

    bookProcedures.destroy(id)
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