-- Вывести 3 людей с наибольшей зарплатой
-- Вывести отделы с пользователями с наибольшей зарплатой в порядке убывания

-- USERS TABLE
table users
(
  id integer,
  name_full varchar,
  department_id integer references departments,
  salary_id integer references salaries
)

-- DEPARTMENTS TABLE
table departments
(
  id integer,
  name varchar
)

-- SALARIES TABLE
table salaries
(
  id integer,
  user_id integer references users,
  salary integer
)
