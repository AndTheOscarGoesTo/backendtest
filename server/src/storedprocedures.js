CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spAddABook`(
	in auth_id int,
    in b_name varchar(60),
    in b_cover text
)
BEGIN

	INSERT INTO Books (authorid, name, cover) 
    VALUES (auth_id, b_name, b_cover); 
    
END

CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spAddAnAuthor`(
    in a_fname varchar(48),
    in a_lname varchar(48)
)
BEGIN 

	INSERT INTO Authors (firstname, lastname) VALUES (a_fname, a_lname);

END

CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spDeleteABook`(
	b_id int
)
BEGIN

	DELETE FROM Books
    WHERE id = b_id;

END

CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spDeleteAnAuthor`(
    in a_id int
 )
 BEGIN 
 
     DELETE FROM  Authors
     WHERE id = a_id;
 
 END

 CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spGetABook`(
	in b_id int 
)
BEGIN

	SELECT * FROM Books WHERE id = b_id;
    
END

CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spGetAllAuthors`(
	
)
BEGIN 

	SELECT * FROM Authors;

END

CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spGetAllBooks`()
BEGIN

	SELECT * FROM Books;
    
END

CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spGetAllBooks`()
BEGIN

	SELECT * FROM Books;
    
END

CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spGetAnAuthor`(
	in a_id int
)
BEGIN 

	SELECT * FROM Authors WHERE id = a_id;

END

CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spGetBookAndAuthor`()
BEGIN

	SELECT * FROM Books
    
		JOIN Authors ON Books.authorid = Authors.id;

END

CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spUpdateABook`(
	b_id int,
    b_name varchar(48),
    b_cover text
)
BEGIN

	UPDATE Books
    
    SET 
    
		id = coalesce(b_id, id),
        name = coalesce(b_name, name),
        cover = coalesce(b_cover, cover)
        
	WHERE id = b_id;
    

END

CREATE DEFINER=`oscar`@`localhost` PROCEDURE `spUpdateAnAuthor`(
    in a_id int,
    in a_fname varchar(48),
    in a_lname varchar(48)
 )
 BEGIN 
 
     UPDATE Authors
     
     SET
     
         id = coalesce(a_id, id),
         firstname = coalesce(a_fname, firstname),
         lastname = coalesce(a_lname, lastname)
         
     WHERE id = a_id;
 
 END