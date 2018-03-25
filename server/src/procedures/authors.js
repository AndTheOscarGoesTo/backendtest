import { row, rows, empty } from '../config/db';


function all() {
    return rows('spGetAllAuthors')
}

function create(firstname, lastname) {
    return rows('spAddAnAuthor', [firstname, lastname])
}

function read(id) {
    return row('spGetAnAuthor', [id])
}

function update(id, firstname, lastname) {
    return empty('spUpdateAnAuthor', [id, firstname, lastname])
}

function destroy(id) {
    return empty('spDeleteAnAuthor', [id])
}



export default {
    all,
    create,
    read,
    update,
    destroy
};