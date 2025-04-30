CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    assignment1 NUMERIC,
    assignment2 NUMERIC,
    assignment3 NUMERIC
);

INSERT INTO grades (first_name, last_name, assignment1, assignment2, assignment3) VALUES
('Alice', 'Smith', 88, 92, 85),
('Bob', 'Jones', 75, 80, 78),
('Carol', 'Lee', 90, 87, 93),
('David', 'Kim', 65, 70, 68),
('Eva', 'Brown', 95, 96, 94);