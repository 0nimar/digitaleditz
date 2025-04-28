FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


# Expose the frontend port
EXPOSE 3000

# Conditional start command
CMD if [ "$IS_DEV" = "true" ]; then npm run dev; else npm run build && npm run start; fi
