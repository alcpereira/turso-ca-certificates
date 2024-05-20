import { createClient } from "@libsql/client";

if (!process.env.TURSO_DATABASE_URL) {
  throw new Error("Missing TURSO_DATABASE_URL");
}

if (!process.env.TURSO_AUTH_TOKEN) {
  throw new Error("Missing TURSO_AUTH_TOKEN");
}

const client = createClient({
  url: "file:replica.db",
  syncUrl: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
  syncInterval: 30,
});

async function main() {
  await client.execute("INSERT INTO users (name) VALUES ('Alice')");
  const users = await client.execute("SELECT * FROM users");
  console.log(users.rows);
}

main();
