// const redis = require('redis');
// const client = redis.createClient({
//     host: '127.0.0.1',
//     port: 6379});

// client.connect().catch((err)=>{ console.log("erorr", err) })
// // Subscribe to the same Redis channel
// client.subscribe('my_channel');

// // Listen for incoming messages
// client.on('message', (channel, message) => {
//   console.log(`Received message "${message}" from channel "${channel}"`);
// });

// // Publish a message to the channel
// client.publish('my_channel', 'Hello from client2!');
const redis = require('redis');
const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});

client.connect().catch((err) => {
  console.log("error", err);
});

// client.on('message', function(channel, message) {
//   console.log(`Received message "${message}" from channel "${channel}"`);
// });

// client.subscribe('my_channel');
client.publish('my_channel', 'Hello from client2!');

// Subscribe to the Redis channel
// client.subscribe('my_channel');

// // Listen for incoming messages
// client.on('message', (channel, message) => {
//   console.log(`Received message "${message}" from channel "${channel}"`);
// });

// // Cancel the subscription and publish a message to the channel
// client.unsubscribe('my_channel', () => {
//   client.publish('my_channel', 'Hello from client2!', () => {
//     // Re-subscribe to the channel
//     client.subscribe('my_channel');
//   });
// });