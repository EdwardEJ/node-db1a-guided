Migrations record changes to the database structure over similar to git commits record changes to code

Commonly used migrations commands:

- npx knex migrate:make name...

Track Food AKA menu items

menu_items table

- id: primary key, unsigned(non negative numbers) integer.
- name: string, required(NOT NULL) unique, make searching by name fast!
- price: floating, not required
- available: boolean, default to false
