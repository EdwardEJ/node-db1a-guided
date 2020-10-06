Migrations record changes to the database structure over similar to git commits record changes to code

Configure knex connections:
-knex init

Commonly used migrations commands:

- npx knex migrate:make [name] <-- creates a new migration file
- npx knex migrate:latest <-- run pending migration to update the database

Track Food AKA menu items

menu_items table

- id: primary key, unsigned(non negative numbers) integer.
- name: string, required(NOT NULL) unique, make searching by name fast!
- price: floating, not required
- available: boolean, default to false

clients table

- id: primary key, uuid, string
- email: string, unique
- name: string, index
