# companion-module-lgtv-display-fixed

Fork of the Bitfocus LGTV Companion module with corrected key mapping for `lgtv-ip-control`.

## Included fix
`Send Key` now passes the underlying key value expected by `lgtv-ip-control.sendKey()` instead of the enum property name.

## Upstream source
Based on `bitfocus/companion-module-lgtv-display` and `WesSouza/lgtv-ip-control`.
