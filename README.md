## To reproduce

1. Apply `create_table.sql` to the database
2. Fill `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` in the `.env` file
3. Build the image using `docker build -t 'turso-docker-test' .`
4. Start a container using `docker run -ti --rm 'turso-docker-test'`
5. You should have the error `Error: TLS error: no valid native root CA certificates found (0 invalid)`
6. Add `ca-certificates` package in the `Dockerfile` by uncommenting line 7 and commentig line 6
7. Repeat steps 3 and 4
