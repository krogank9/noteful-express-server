INSERT INTO folders (name, id)
VALUES
  ('Important', 1),
  ('Super', 2),
  ('Spangley', 3);

INSERT INTO notes (id, name, content, folder_id)
VALUES
  (1, 'Dogs',
  'This is a note about dogs',
  1),
  (2, 'Cats',
  'Meow meow, read my notes about cats',
  1),
  (3, 'Pigs',
  'Rollin'' around in the mud and pink',
  2),
  (4, 'Bears',
  'Maybe I''ll go pick some berries in the woods',
  3),
  (5, 'Cows',
  'Moo moo',
  3),
  (6, 'Donuts',
  'As sweet and delicious as it gets',
  3);