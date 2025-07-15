#!/bin/bash

# Start json-server in the background
npx json-server --watch /db.json --port 3000 --host 0.0.0.0 &

# Start nginx in foreground
nginx -g 'daemon off;' &

# Keep the container running
wait -n
