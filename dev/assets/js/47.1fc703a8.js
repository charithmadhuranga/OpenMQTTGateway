(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{431:function(t,e,a){"use strict";a.r(e);var s=a(14),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"actuators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actuators"}},[t._v("#")]),t._v(" Actuators")]),t._v(" "),e("h2",{attrs:{id:"on-off-functionality"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-off-functionality"}},[t._v("#")]),t._v(" ON/OFF Functionality")]),t._v(" "),e("p",[t._v("The ON/OFF module of the OpenMQTTGateway provides you with the capability to control actuators, such as relays or LEDs, by assigning a HIGH or LOW value to a specific PIN through MQTT topics. For instance, you might connect a transistor to power a relay or an LED to the PIN.")]),t._v(" "),e("p",[t._v("To operate the default GPIO, identified as ACTUATOR_ONOFF_GPIO, you'll need to issue certain commands which comply with the JSON receiving format.")]),t._v(" "),e("h3",{attrs:{id:"standard-on-off-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#standard-on-off-control"}},[t._v("#")]),t._v(" Standard ON/OFF control")]),t._v(" "),e("p",[t._v("The OFF command can be executed as follows:\n"),e("code",[t._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoONOFF -m '{\"cmd\":0}'")])]),t._v(" "),e("p",[t._v("For the ON command, use:\n"),e("code",[t._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoONOFF -m '{\"cmd\":1}'")])]),t._v(" "),e("p",[t._v("You can also specify the GPIO number that you wish to control:\n"),e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoONOFF -m \'{"gpio":15,"cmd":1}\'')])]),t._v(" "),e("p",[t._v("The status of the actuator will be published to the topic below every 2 minutes or upon state change.\n"),e("code",[t._v("home/OpenMQTTGateway/ONOFFtoMQTT '{\"cmd\":0}'")])]),t._v(" "),e("p",[t._v("In the case of the simple receiving format, the commands can be executed as follows:\nOFF command: "),e("code",[t._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoONOFF/setOFF -m 15")]),t._v("\nON command: "),e("code",[t._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoONOFF/setON -m 15")])]),t._v(" "),e("h3",{attrs:{id:"pulse-control-for-short-activations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pulse-control-for-short-activations"}},[t._v("#")]),t._v(" Pulse control for short activations")]),t._v(" "),e("p",[t._v("Additionally, the module also supports short activations, during which the PIN changes state for just half a second. This can be particularly useful when operating a relay board to trigger a step relay, thus allowing your home automation system to function as an auxiliary switch, without interfering with the existing switches in your house.")]),t._v(" "),e("p",[t._v("This functionality is available only through the JSON receiving format.")]),t._v(" "),e("p",[t._v("To switch ON for half a second before reverting to OFF:\n"),e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoONOFF -m \'{"gpio":15,"cmd":"high_pulse"}\'')])]),t._v(" "),e("p",[t._v("To switch OFF for half a second before reverting to ON:\n"),e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoONOFF -m \'{"gpio":15,"cmd":"low_pulse}\'')])]),t._v(" "),e("p",[t._v("If you need to specify an activation duration other than half a second, include the pulse_length parameter along with the duration in milliseconds (ms).")]),t._v(" "),e("p",[t._v("To switch ON for 25 ms before reverting to OFF:\n"),e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoONOFF -m \'{"gpio":15,"cmd":"high_pulse","pulse_length":25}\'')])]),t._v(" "),e("p",[t._v("To switch OFF for 25 ms before reverting to ON:\n"),e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoONOFF -m \'{"gpio":15,"cmd":"low_pulse","pulse_length":25}\'')])]),t._v(" "),e("p",[t._v("Recovery Functionality (ESP32 only)\nIn the event of power loss, by default, the module will record the last known state of the actuator and attempt to revert to this state upon restarting. For example, if a relay was ON at the time of a power outage, the firmware will attempt to switch the relay ON again once power is restored.")]),t._v(" "),e("p",[t._v("If you prefer to disable this functionality, you can set the macro USE_LAST_STATE_ON_RESTART to false during the build time. Alternatively, you can issue the following command at runtime:\n"),e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoONOFF/config -m \'{"uselaststate":false,"save":true}\'')])]),t._v(" "),e("h2",{attrs:{id:"fastled"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fastled"}},[t._v("#")]),t._v(" FASTLED")]),t._v(" "),e("h3",{attrs:{id:"the-fastled-module-support-2-different-operation-modes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-fastled-module-support-2-different-operation-modes"}},[t._v("#")]),t._v(" The FASTLED module support 2 different operation modes")]),t._v(" "),e("ol",[e("li",[t._v("control one specific RGB LED")])]),t._v(" "),e("ul",[e("li",[t._v("Set color")]),t._v(" "),e("li",[t._v("Set blink")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Start fire animation (Fire2012)")])]),t._v(" "),e("h3",{attrs:{id:"hardware-wiring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hardware-wiring"}},[t._v("#")]),t._v(" Hardware wiring")]),t._v(" "),e("p",[t._v("Theoretically it should be possible to use every free IO pin. But after some tests only pin D2 works at WEMOS D1. Other platforms can work.\nThe default setting use NEOPIXEL (WS2812B). The simplest wiring is direct connect D2 to data pin of LED stripe and connect VCC/GND to power source. You should also add a capacitor.")]),t._v(" "),e("h2",{attrs:{id:"pwm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pwm"}},[t._v("#")]),t._v(" PWM")]),t._v(" "),e("p",[t._v("This module allows control over PWM outputs.\nIt's primary use is for controlling LEDs, but it should be equally at home controlling anything that's controlled using PWM.\nE.g. LEDs, servos, PC fans.\nYou would typically connect a PWM output to a transistor or MOSFET to allow control over higher power devices.")]),t._v(" "),e("ul",[e("li",[t._v("JSON message format allows you to set any or all channels in a single message.")]),t._v(" "),e("li",[t._v("Each channel can be set to smoothly transition from its current setting to the new setting over a specified number of seconds.")]),t._v(" "),e("li",[t._v("Each channel can be calibrated with min and max settings, as well as a gamma curve.")])]),t._v(" "),e("h3",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("In order to use the PWM actuator, you need to configure which pins the PWM output channels will be connected to.\nThere are a couple of "),e("code",[t._v("#defines that achieve this. They can be defined in the")]),t._v("build_flags"),e("code",[t._v("section of the env, or by directly editing")]),t._v("config_PWM.h`.")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("PWM_CHANNEL_NAMES")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"g"')]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w0"')]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w1"')]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("PWM_CHANNEL_PINS")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[e("code",[t._v("PWM_CHANNEL_NAMES")]),t._v(" lists the names that you would like to assign to each channel, and determines the number of channels.\n"),e("code",[t._v("PWM_CHANNEL_PINS")]),t._v(" lists the corresponding output pins that the channels will be connected to.\nThe number of entries in "),e("code",[t._v("PWM_CHANNEL_PINS")]),t._v(" must exactly match the number of entries in "),e("code",[t._v("PWM_CHANNEL_NAMES")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("h4",{attrs:{id:"set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" Set")]),t._v(" "),e("p",[e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoPWM/set -m \'{"r":0.5,"g":0.2,"b":1,"fade":10.0}\'')])]),t._v(" "),e("p",[t._v("This example sets new values for the channels named "),e("code",[t._v("r")]),t._v(", "),e("code",[t._v("g")]),t._v(", and "),e("code",[t._v("b")]),t._v(".\nThese channels will transition from their current values to the new values over 10s.")]),t._v(" "),e("h4",{attrs:{id:"calibrate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#calibrate"}},[t._v("#")]),t._v(" Calibrate")]),t._v(" "),e("p",[t._v("Calibration allows that min and max levels to be configured for each channel, so that the full 0-1 range of values\nthat can be specified with the "),e("code",[t._v("set")]),t._v(" command actually do things.")]),t._v(" "),e("p",[e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoPWM/calibrate -m \'{"min-r":0.01,"max-r":1.0,"gamma-r":2.5}\'')])]),t._v(" "),e("p",[t._v("This example calibrates the channel named "),e("code",[t._v("r")]),t._v(".\nAfter this calibration, if you set the "),e("code",[t._v("r")]),t._v(" channel to 0.0, it will be remapped to 0.01 internally.\nAlso, the gamma curve for this channel will be set to 2.5.\nThis means that input values are raised to the power 2.5 internally.\nThis can be used to improve the linearity of inputs.")]),t._v(" "),e("h2",{attrs:{id:"somfy-rts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#somfy-rts"}},[t._v("#")]),t._v(" Somfy RTS")]),t._v(" "),e("p",[t._v("This actuator allows to control Somfy RTS devices.")]),t._v(" "),e("h3",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),e("p",[t._v("Before the module can be used, virtual Somfy RTS remotes must be created.\nThis is done in "),e("code",[t._v("config_Somfy.h")]),t._v(".")]),t._v(" "),e("p",[e("code",[t._v("SOMFY_REMOTE_NUM")]),t._v(" must be set to the number of virtual Somfy RTS remotes you want to have.\nThen create for each of the virtual Somfy RTS remotes a unique 3-byte code and add them to "),e("code",[t._v("somfyRemotes")]),t._v(".\nAfter a remote is setup, the order and codes should not be changed, else the setup process for all remotes have to be repeated.\nAdding new codes at the end of the list is no problem.\nExample of three virtual Somfy RTS remote codes:")]),t._v(" "),e("div",{staticClass:"language-C line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" somfyRemotes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SOMFY_REMOTE_NUM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x5184c8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xba24d0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xb77753")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Next the virtual Somfy RTS remotes must be paired with the Somfy RTS devices you want to control.\nThe next section describes how the PROG command/button of the virtual remote can be used.\nUse the manual of the device you want to control for instructions on how to pair the virtual remote with the device.")]),t._v(" "),e("h3",{attrs:{id:"commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),e("p",[t._v("Commands must be send to the "),e("code",[t._v("commands/MQTTtoSomfy")]),t._v(" subtopic.\nOnly json messages are supported.\nThe json message must contain two properties:")]),t._v(" "),e("ul",[e("li",[t._v("remote: the index of the remote which is used to send the command (index start at zero)")]),t._v(" "),e("li",[t._v("command: the command which should be send with the remote as string, see "),e("a",{attrs:{href:"https://github.com/Legion2/Somfy_Remote_Lib#available-commands",target:"_blank",rel:"noopener noreferrer"}},[t._v("table of command names"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("p",[t._v("Optionally it can contain the following property:")]),t._v(" "),e("ul",[e("li",[t._v("repeat: the number how often the command is repeated, default 4. Should be used to simulate long button presses, by increasing the repeat number, e.g. 20.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v('The middle button on physical Somfy RTS Remote controls is called "My".')])]),t._v(" "),e("p",[t._v("Send PROG command with remote 0:")]),t._v(" "),e("p",[e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway_Somfy/commands/MQTTtoSomfy -m \'{"remote":0,"command":"Prog"}\'')])]),t._v(" "),e("p",[t._v("Send Up command with remote 1:")]),t._v(" "),e("p",[e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway_Somfy/commands/MQTTtoSomfy -m \'{"remote":1,"command":"Up"}\'')])])])}),[],!1,null,null,null);e.default=o.exports}}]);