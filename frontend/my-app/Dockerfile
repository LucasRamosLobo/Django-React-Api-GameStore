# Escolha a imagem base do node
FROM node:14-alpine

# Configure o diretório de trabalho
WORKDIR /app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instale as dependências do seu projeto
RUN npm install

# Copie o código-fonte do seu projeto para o diretório de trabalho
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Defina o comando para iniciar o serviço
CMD ["npm", "start"]