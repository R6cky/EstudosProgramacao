# Criação de estrutura de diretórios
mkdir -p src/{controllers,database,interfaces,middlewares,routers,schemas,services}
touch src/{app,error,server}.ts
touch .{env{.example,},gitignore}
npx tsc --init
