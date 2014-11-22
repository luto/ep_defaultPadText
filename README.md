# ep_defaultPadText

## Installing
use the /admin/plugins web interface
OR
```cd node_modules && git clone https://github.com/luto/ep_defaultPadText.git ep_default-pad-text```

## Function
ep_defaultPadText let's you choose a special default text for each pad-prefix. This can be be used for pads that all share the same header, for example collaborative meeting-notes could all look like like this:
```
# Weekly-Meeting
Date and Time: April 28, 2011 18:21:08

## Agenda
## Conclusions
## Roadmap for next week
```
Using this ep_defaultPadText you don't have to copy&paste that into your pad yourself, you just choose an prefix for meetings, for example `m_`, paste the template into your `settings.json` and you're good to go.

## Settings

### Format
You need to add the following section to your `settings.json`. You can repeat the inner
sections as often as you want. The name of the inner sections represents the prefix,
the `text`-attribute is the text that will be set, it can contain placeholders, which
will be explained in the next paragraph. A text with the name '*' will apply for all new
pads whose name does not fit any of the other texts, this is optional.

```JSON
"ep_defaultPadText" : {
                        "mm" : {
  			                     "text" : "MobileMacs-Episode: $num$ on $date:%B %d, %y$"
                               },
                        "wr" : {
  			                     "text" : "WRINT-Time! Number $num$ happening in your home-town at $date:%H:%M:%S$"
                               },
                        "*" : {
  			                    "text" : "I'm a pad that was created at $date:%H:%M:%S$ but has no special template."
                              },
                      }
```

### Placeholders
  * `$num$`, number after the given prefix; For example: if the Pad-ID is `mm42`, `$num$` will be `42`, not available in `*`-text
  * `$padId$`, the full pad-id
  * `$date:format$`, the date will be formatted by [strftime](https://github.com/samsonjs/strftime)
