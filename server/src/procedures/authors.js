import { row, rows, empty } from '../db';
import Table from '../table';

function authRouter() {


    function getAll(rows) {
        return callProcedure(spGetAllAuthors)
        .then((authors) => {
            res.json(authors[0]);
        })
    }
    
    function create(firstname, lastname) {
    
    }
    
    function read(id) {
    
    }
    
    function update(id) {
    
    }
    
    function destroy(id) {
    
    }
    
}


export default authRouter;