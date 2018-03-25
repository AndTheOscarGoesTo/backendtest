import { row, rows, empty } from '../config/db';

function all() {
    return rows('spGetAllBooks')
}

function create(authorid, name, cover) {
    return rows('spAddABook', [authorid, name, cover])
}

function read(id) {
    return row('spGetABook', [id])
}

function update(id, name, cover) {
    return empty('spUpdateABook', [id, name, cover])
}

function destroy(id) {
    return empty('spDeleteABook', [id])
}

export default {
    all,
    create,
    read,
    update,
    destroy
};