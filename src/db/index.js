import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("locations.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) =>
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS locations (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL);",
        [],
        (_, res) => resolve(res),
        (_, err) => reject(err)
      )
    );
  });
  return promise;
};

export const insertPlace = (title, image, address, coords) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO locations (title, image, address, coords) VALUES (?, ?, ?, ?);",
        [title, image, address, JSON.stringify(coords)],
        (_, result) => {
          console.log({ result });
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const getPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM locations",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
