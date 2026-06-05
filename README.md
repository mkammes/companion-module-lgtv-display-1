# companion-module-lgtv-display-fixed

Fork of the Bitfocus LG TV Companion module with three bug fixes applied.

## Fixes included

### 1. Send Key value mapping
The original module populated the Send Key dropdown with enum *names* (e.g. `volumeUp`) but `lgtv-ip-control.sendKey()` expects enum *values*. Keys like volume up/down and navigation were silently failing. This fork passes the correct values, with a backward-compatibility fallback for previously saved actions.

### 2. Power On / Wake-on-LAN
The original `powerOn` relied on the socket connection being alive. If the TV was in standby or had dropped off the network, WoL never fired. This fork sends the magic UDP packet directly via Node's `dgram`, independent of the connection state, so Power On works even when the TV is off.

### 3. Auto-reconnect
Once the TV dropped off the network, the original module stayed in `ConnectionFailure` indefinitely. This fork retries the connection every 30 seconds automatically, so Companion recovers without manual intervention after standby or a network blip.

## Building

```bash
npm install
npm run build
```

Output goes to `pkg/`. The built `main.js` is committed to this repo for direct Companion installation.

## Upstream source

Based on [`bitfocus/companion-module-lgtv-display`](https://github.com/bitfocus/companion-module-lgtv-display) and [`WesSouza/lgtv-ip-control`](https://github.com/WesSouza/lgtv-ip-control).
