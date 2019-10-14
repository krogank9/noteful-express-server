function makeFoldersArray() {
  return [
    {
      id: 1,
      name: 'Important'
    },
    {
      id: 2,
      name: 'Super'
    },
    {
      id: 3,
      name: 'Spangley'
    },
  ]
}

function makeNotesArray() {
  return [
    {
      id: 1,
      name: 'Dogs',
      content: 'This is a note about dogs',
      modified: '2029-01-22T16:28:32.615Z',
      folder_id: 1
    },
    {
      id: 2,
      name: 'Cats',
      content: 'Meow meow, read my notes about cats',
      modified: '2100-05-22T16:28:32.615Z',
      folder_id: 1
    },
    {
      id: 3,
      name: 'Pigs',
      content: 'Rollin \' around in the mud and pink',
      modified: '1919-12-22T16:28:32.615Z',
      folder_id: 2
    },
    {
      id: 4,
      name: 'Bears',
      content: 'Maybe I\'ll go to the woods and pick some berries',
      modified: '1919-12-22T16:28:32.615Z',
      folder_id: 3
    },
    {
      id: 5,
      name: 'Cows',
      content: 'Moo moo',
      modified: '1919-12-22T16:28:32.615Z',
      folder_id: 3
    },
    {
      id: 6,
      name: 'Donuts',
      content: 'As sweet and delicious as it gets',
      modified: '1919-12-22T16:28:32.615Z',
      folder_id: 3
    },
  ];
}


function makeMaliciousFolder() {
  const maliciousFolder = {
    id: 911,
    name: 'Naughty naughty very naughty <script>alert("xss");</script>',
  }
  const expectedFolder = {
    ...maliciousFolder,
    name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
  }
  return {
    maliciousFolder,
    expectedFolder,
  }
}

function makeMaliciousNote() {
  const maliciousNote = {
    id: 911,
    name: 'How-to',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    modified: new Date().toISOString(),
    name: 'Naughty naughty very naughty <script>alert("xss");</script>',
    folder_id: 1
  }
  const expectedNote = {
    ...maliciousNote,
    name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousNote,
    expectedNote,
  }
}

module.exports = {
  makeFoldersArray,
  makeNotesArray,
  makeMaliciousFolder,
  makeMaliciousNote
}