## LG TV Fixed

This module is a fork of the Bitfocus LG TV module with a fix for Send Key actions.

### Fix included
The original module populated the Send Key dropdown with enum names from `lgtv-ip-control`, but `sendKey()` expects enum values. This fork sends the correct values, which restores keys such as `volumeUp` and `volumeDown`.

### Setup
Before anything, enable Network IP Control on the TV:

1. Open the All Settings menu on the TV.
2. Navigate to Connection or Network.
3. Press 82888 on the remote.
4. Note the MAC and IP addresses.
5. Turn Network IP Control on.
6. Generate a keycode and copy the 8-character code.
7. Enable Wake On LAN if needed.

### Available actions
- Power on
- Power off
- Set input
- Send key
- Set volume
- Mute volume
- Set energy saving level
