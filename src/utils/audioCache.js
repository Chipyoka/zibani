import { openDB } from "idb";

const DB_NAME = "zimbosauti-db";
const STORE_NAME = "audio-files";

export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
}

export async function saveAudioFile(key, blob) {
  const db = await initDB();
  return db.put(STORE_NAME, blob, key);
}

export async function getAudioFile(key) {
  const db = await initDB();
  return db.get(STORE_NAME, key);
}

export async function hasAudioFile(key) {
  const db = await initDB();
  return (await db.get(STORE_NAME, key)) !== undefined;
}
