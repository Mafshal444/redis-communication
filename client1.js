const redis = require('redis');
const client = redis.createClient();
// client.connect().catch((err) => {
//     console.log("error", err);
//   });
function handleMessage(channel, message) {
    if (channel === 'my_channel') {
        console.log(`Received message "${message}" from channel "${channel}"`);
    }
    console.log(`Received message "${message}" from channel "${channel}"`);
}

client.on('message', handleMessage);

// Handle any errors that occur
// client.on('error', (err) => {
//   console.error('Error receiving message:', err);
// });

// Subscribe to a Redis channel
// client.subscribe('my_channel');
client.subscribe('my_channel', (message) => {
    if (message) {
      console.log('Error subscribing to channel:', message);
    } else {
      console.log('Subscribed to channel:', reply);
    }
});
client.connect().catch((err) => {
    console.log("error", err);
  });
// client.subscribe('my_channel');

// Listen for incoming messages

// Listen for incoming messages
// client.on('message', handleMessage);
// client.on('error', (err) => {
//     console.error('Error receiving message:', err);
//   });
// Publish a message to the channel
// client.publish('my_channel', 'Hello from client1!');
