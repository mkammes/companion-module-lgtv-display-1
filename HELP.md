## LG TV (Fixed)

Fork of the Bitfocus LG TV module with three bug fixes applied.

### Fixes included

**Send Key** — The original module sent enum names to `sendKey()` instead of enum values, causing keys like Volume Up/Down and navigation to fail silently. Now fixed, with backward compatibility for existing saved actions.

**Power On / Wake-on-LAN** — Power On now sends the WoL magic packet directly via UDP, independent of the socket connection. The TV can be powered on even when Companion shows it as disconnected.

**Auto-reconnect** — If the connection drops (standby, network blip), the module retries automatically every 30 seconds. No manual reconnect needed.

### Setup

Before anything, enable Network IP Control on the TV:

1. Open the All Settings menu on the TV.
2. Navigate to Connection or Network.
3. Press **82888** on the remote numeric buttons.
4. Note the MAC and IP addresses shown.
5. Turn **Network IP Control** on.
6. Click **Generate Keycode** and copy the 8-character code. Letters must be capitalized.
7. Enable **Wake On LAN** if you want to power the TV on remotely.
8. Leave WOL IP at default (255.255.255.255) unless you need a specific broadcast address.

### Available actions

- Power On
- Power Off
- Set Input (HDMI 1–4, Component, AV, Digital TV, Cable TV variants)
- Send Key (full remote keycode list)
- Set Volume (0–100)
- Mute / Unmute
- Set Energy Saving level
