var GossipPeerServer = require('../../src/GossipServer.js').GossipPeerServer;
var server = new GossipPeerServer({
  port: process.argv[2], 
  debug: true, 
  firstViewSize: process.argv[3],
  maxKeepAlives: 3,
  checkForDeadPeers: 5000
});
