# license-types

A rough classification of licenses such as by aspects of permissiveness (a
license will set these with a `true` boolean value when relevant), categories
adapted from <https://github.com/delfrrr/npm-consider>.:

- `publicDomain` - Licenses effectively releasing into the public domain
- `permissive` - Highly permissive, like MIT
- `weaklyProtective` - Some protective aspects, like LGPL or MPL
- `protective`- Protective, like GPL
- `networkProtective` - Protective, including over network use, like AGPL
- `useProtective` - Has restrictions on usage (e.g., non-commercial), like
    Creative Commons Non-Commercial licenses
- `modifyProtective` - Prevents modification, like Creative Commons
    No-Derivatives licenses

These categories have generally been defined to be mutually exclusive, though
`useProtective` and `modifyProtective` may be used together or one may be used
exclusive to the other.

See a [JSON Schema](./schema.json) file specifying this format.

A file [types.json](./typeson.json) is also provided to suggest some English
text and colors for the types (with greenish tones suggesting more permissive
license types and reddish tones suggesting the need for more caution by
users/sharers/modifiers of the code due to more stringent requirements, and
darker tones indicating unclear or fully restricted uses).

The `types.json` file also has its own [JSON schema](./types-schema.json).
Note that in addition to the types in the license types JSON, this latter file
also has entries for "unlicensed" (as "UNLICENSED" is used by npm for
copyright being reserved), "custom" (where "SEE LICENSE IN " prefixes an
entry in npm `license`), "uncategorized" (for any licenses we have yet to
categorize), and "missing" (for packages which simply don't list any license
type; while the copyright should need to be treated as reserved, it is distinct
in that the author may have inadvertently failed to specify it).

None of this is legal advice and none of this should be considered as a
warranty, as final, or as authoritatively accurate. Pull requests are welcome
to add new licenses and their metadata (providing a link).

## Authors and license

[Brett Zamir](http://brett-zamir.me/) and [contributors](https://github.com/brettz9/brettz9/license-types/graphs/contributors).

MIT License, see the included [LICENSE-MIT.md](LICENSE-MIT.md) file.
