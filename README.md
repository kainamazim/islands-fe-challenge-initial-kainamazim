# Frontend Challenge

## Setup

### Requirements

- Node.js v18.20.6 - Run `nvm use` if you have nvm installed.
- Yarn v1.22.19

### Usage

#### Install dependencies

```sh
yarn install
```

#### Run dev server

```sh
yarn dev
```

## About

- The app shows you a list of documents where each document has a status. All documents initially start at _draft_ status. A document can be published or be retried in case of publish failure.
- The challenge is to integrate a deployed backend API based on the specs listed below. The HTTP (`axios`) and WebSocket (`socket.io-client`) clients are already created for you which can be found in `src/clients.ts`.
- In case you're familiar with `react-query`, it's already installed and setup so you can use it to help you with your development.

## Specs

### Document list retrieval

Retrieve the data from `GET /docs`.

### Document update actions

The actions are async and doesn't return any result. Results are sent via WebSocket.

- **Publish:** `POST /docs/{id}/publish`
- **Retry:** `POST /docs/{id}/retry`

### Real-time updates

The UI should update in real-time based on the WebSocket events sent by the server.

- Document is being published
  - Event: `docPublishing`
  - Data: `{ "id": "1", "status": "publishing" }`
- Document has been published
  - Event: `docPublished`
  - Data: `{ "id": "1", "status": "published" }`
- Failed to publish the document
  - Event: `docPublishFailed`
  - Data: `{ "id": "1", "status": "failed" }`

### Bonus

The **_Reset Data_** button currently reloads the page to see the data get updated. There's a WebSocket event named `reset` that can be listened to so the data update can be seen in real-time and without reloading the page.
