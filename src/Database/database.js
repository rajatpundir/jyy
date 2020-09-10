import Dexie from 'dexie';

const db = new Dexie('JyyDB');

// API: https://dexie.org/docs/API-Reference
// NOTE: Don’t declare all columns like in SQL.
// You only declare properties you want to index,
// that is properties you want to use in a where(…) query.

db.version(1).stores({
	types: '&typeName',
	variables: '&[typeName+variableName],typeName',
});

export default db;
