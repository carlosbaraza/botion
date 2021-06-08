# Botion

## Development

```sh
# Start Postgres Database
mkdir dbvolume
docker compose up

# Start server
npm run start:dev
```

## Part 2 - Data model

- Install docker
- Add docker-compose.yml
  - postgres official image: https://hub.docker.com/_/postgres
  - minimal admin ui: https://www.adminer.org/
- Prisma setup: https://www.prisma.io/

Install prisma:

```sh
npm install prisma -D
npx prisma init
```

Now change the `.env` file:

```
DATABASE_URL="postgresql://botion:botion@localhost:8081/botion?schema=public"
```

Add data model to `prisma/schema.prisma`:

```
model Script {
  id             Int      @id @default(autoincrement())
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
  authorId       Int
  author         User     @relation(fields: [authorId], references: [id])
  enabled        Boolean  @default(false)
  title          String   @db.VarChar(255)
  source         String
  cron           String
  database       String
  previousResult Json?
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  scripts Script[]
}
```

Generate migration:

```
prisma migrate dev --name init
```

Install node client:

```
npm install @prisma/client
```
