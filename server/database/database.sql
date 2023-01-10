CREATE DATABASE todolist_jmg;

CREATE TABLE todos(
    todo_id SERIAL PRIMARY KEY UNIQUE,
    todo VARCHAR(250)
);

INSERT INTO todos (todo) VALUES
    ('learn typescript');