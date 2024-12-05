-- Вывести 3 людей с наибольшей зарплатой;
-- Вывести отделы с пользователями с наибольшей зарплатой в порядке убывания;
-- Подсчитать общие расходы на заработную плату по каждому отделу;
-- Получить среднюю зарплату каждого отдела, но включать только те отделы, где средняя зарплата превышает 50 000 долларов США.

-- DEPARTMENTS TABLE
CREATE OR REPLACE TABLE departments
(
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(255)
) ENGINE=InnoDB;

-- SALARIES TABLE
CREATE OR REPLACE TABLE salaries
(
  id INTEGER NOT NULL PRIMARY KEY,
  user_id INTEGER,
  salary INTEGER
) ENGINE=InnoDB;

-- USERS TABLE
CREATE OR REPLACE TABLE users
(
  id INTEGER NOT NULL PRIMARY KEY,
  name_full VARCHAR(255),
  department_id INTEGER NOT NULL,
  salary_id INTEGER NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments (id),
  FOREIGN KEY (salary_id) REFERENCES salaries (id)
) ENGINE=InnoDB;

-- Inserting values into DEPARTMENTS table
INSERT IGNORE INTO departments (id, name) VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'Marketing'),
(4, 'Engineering');

-- Inserting values into USERS table
INSERT IGNORE INTO users (id, name_full, department_id, salary_id) VALUES
(1, 'John Doe', 1, 1),
(2, 'Jane Smith', 2, 2),
(3, 'Michael Johnson', 3, 3),
(4, 'Emily Brown', 1, 4),
(5, 'Alex Wilson', 4, 5),
(6, 'Sarah Lee', 3, 6),
(7, 'David Miller', 2, 7),
(8, 'Jessica Taylor', 1, 8);

-- Inserting values into SALARIES table
INSERT IGNORE INTO salaries (id, user_id, salary) VALUES
(1, 1, 50000),
(2, 2, 60000),
(3, 3, 70000),
(4, 4, 55000),
(5, 5, 75000),
(6, 6, 65000),
(7, 7, 62000),
(8, 8, 58000);

