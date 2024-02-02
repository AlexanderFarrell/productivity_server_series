-- Creates a new user account *in our database*. Change
-- 'enter_a_password_here' with your desired password.
create user productivity with password 'enter_a_password_here';

-- Creates a table to store user accounts for our productivity app
create table account(
    id serial primary key,
    username varchar(20) not null unique,
    password varchar(128) not null,
    first_name varchar(25) not null,
    last_name varchar(25) not null
);

-- Grants permissions for the 'productivity' user account in our database
-- to select (get data), insert (add data), update (change data) or delete
-- data from the account table of our server.
grant select, insert, update, delete
on account
to productivity;

-- Example of adding a new user account
insert into account (username, password, first_name, last_name)
values ('Someone1', 'SomePassword1', 'Amy', 'Smith');

-- Example of getting all of the user accounts
select id, username, password, first_name, last_name
from account
order by first_name desc;

-- Example of adding multiple user accounts.
insert into account (username, password, first_name, last_name)
values ('Another', 'SomePassword2', 'John', 'Johnson'),
('Mark', 'SomePassword3', 'Mark', 'Johnson'),
('Emily', 'SomePassword4', 'Emily', 'Johnson');

-- Example of changing a user's first name
update account
set first_name='Amy'
where id=1;

-- Example of removing a user
delete from account
where id=1;