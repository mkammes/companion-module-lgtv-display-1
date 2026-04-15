const { Regex } = require('@companion-module/base');

module.exports = {
	REGEX_IP: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
	REGEX_SOMETHING: /.*/,
	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info',
				label: 'Information',
				width: 12,
				value: `
### IMPORTANT MESSAGE

Before anything, you need to enable Network IP Control, which is very easy:
  1. Open the "All Settings" menu on the TV
  2. Using the remote arrows, navigate to "Connection". For some TVs, this may say "Network" instead.
  3. Quickly, press 82888 using the remote numeric buttons
  4. Note the MAC IP addresses for reference and library configuration
  5. Turn "Network IP Control" on
  6. Click "Generate Keycode", and take note of the 8 characters code displayed on the message for reference and library configuration. You can generate a new code at any time
  7. If you want to be able to turn the TV on, turn "Wake On LAN" on
  8. Leave WOL IP at default unless you know what you're doing.
`,
			},
			{ type: 'textinput', id: 'host', label: 'Target IP', width: 6, regex: this.REGEX_IP },
			{ type: 'textinput', id: 'mac', label: 'MAC ADDRESS', width: 6, regex: this.REGEX_SOMETHING },
			{ type: 'textinput', id: 'code', label: 'Keycode', width: 6, regex: this.REGEX_SOMETHING },
			{ type: 'textinput', id: 'wol_ip', label: 'Wake-On-LAN IP', width: 6, default: '255.255.255.255', regex: this.REGEX_IP },
		];
	},
};
