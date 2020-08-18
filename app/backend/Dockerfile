# Builder
FROM node:12.16.1 as builder
ARG project
RUN mkdir /base
WORKDIR /base
COPY . .

# Install and build packages
RUN yarn --from-build-source \
    && yarn bootstrap \
    && yarn build

# Build api image
FROM node:12.16.1
ARG project
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

# Copy API files
COPY --from=builder /base/app/backend/dist/ .
COPY --from=builder /base/app/backend/static/ .
COPY --from=builder /base/app/backend/package.json .

RUN sed -i "/\"@$project\/domain\"/d" package.json

# Install dependencies
RUN yarn --from-build-source

#Import Root module
## Copy module dependencies
COPY --from=builder /base/node_modules "node_modules/"

# Import Domain module
COPY --from=builder /base/app/domain/dist/ "node_modules/@$project/domain/dist"
COPY --from=builder /base/app/domain/package.json "node_modules/@$project/domain"
## Copy module dependencies
COPY --from=builder /base/app/domain/node_modules "node_modules/"

# Run the API
RUN npm install pm2 -g
CMD ["pm2-runtime", "main.js", "--no-daemon"]
EXPOSE 8080:8080
