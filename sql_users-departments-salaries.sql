-- Вывести 3 людей с наибольшей зарплатой;
-- Вывести отделы с пользователями с наибольшей зарплатой в порядке убывания;
-- Получить среднюю зарплату каждого отдела, но включать только те отделы, где средняя зарплата превышает 50 000 долларов США.

-- DEPARTMENTS TABLE
CREATE TABLE departments
(
  id INTEGER PRIMARY KEY,
  name VARCHAR(255)
);

-- USERS TABLE
CREATE TABLE users
(
  id INTEGER PRIMARY KEY,
  name_full VARCHAR(255),
  department_id INTEGER REFERENCES departments(id),
  salary_id INTEGER REFERENCES salaries(id)
);

-- SALARIES TABLE
CREATE TABLE salaries
(
  id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  salary INTEGER
);

-- Inserting values into DEPARTMENTS table
INSERT INTO departments (id, name) VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'Marketing');

-- Inserting values into USERS table
INSERT INTO users (id, name_full, department_id, salary_id) VALUES
(1, 'John Doe', 1, 1),
(2, 'Jane Smith', 2, 2),
(3, 'Michael Johnson', 3, 3);

-- Inserting values into SALARIES table
INSERT INTO salaries (id, user_id, salary) VALUES
(1, 1, 50000),
(2, 2, 60000),
(3, 3, 70000);
