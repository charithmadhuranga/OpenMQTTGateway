(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{494:function(e,t,o){"use strict";o.r(t);var r=o(14),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("h2",{attrs:{id:"compilation-build-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compilation-build-error"}},[e._v("#")]),e._v(" Compilation/build error")]),e._v(" "),t("p",[e._v("This badge "),t("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/actions?query=branch%3Amaster+workflow%3ABuild",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://github.com/1technophile/OpenMQTTGateway/workflows/Build/badge.svg?branch=master",alt:"Build Status"}}),t("OutboundLink")],1),e._v(" show you the state of the compilation of the master and this one "),t("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/actions?query=branch%3Adevelopment+workflow%3ABuild",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://github.com/1technophile/OpenMQTTGateway/workflows/Build/badge.svg?branch=development",alt:"Build Status"}}),t("OutboundLink")],1),e._v(" for the development branch.\nIf you see a green badge this means that the code compilation is OK with the configuration given in the "),t("code",[e._v("docs/platformio.ini")]),e._v(".\nCheck your IDE environment version, boards version, libraries version before submitting an issue or a question.\nVerify especially that the libraries provided into the "),t("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),t("OutboundLink")],1),e._v(' are located into your "sketchbook folder"/libraries if your are using the Arduino IDE.')]),e._v(" "),t("h2",{attrs:{id:"esp32-compilation-errors-related-to-wifi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esp32-compilation-errors-related-to-wifi"}},[e._v("#")]),e._v(" ESP32 compilation errors related to wifi")]),e._v(" "),t("p",[e._v("If you get one or several of the following errors:")]),e._v(" "),t("p",[t("code",[e._v("error: 'WIFI_STA' was not declared in this scope")])]),e._v(" "),t("p",[t("code",[e._v("error: 'class WiFiClass' has no member named 'mode'")])]),e._v(" "),t("p",[t("code",[e._v("error: no matching function for call to 'WiFiClass::macAddress()")])]),e._v(" "),t("p",[e._v("You have a conflict between Arduino default wifi library and ESP32 one. So as to resolve this issue you should move or remove the Arduino wifi library (Arduino Sketchbook folder\\libraries\\WiFi) in order to enable the IDE to take the one from ESP32 (Arduino Sketchbook folder\\hardware\\espressif\\arduino-esp32\\libraries\\WiFi)\nMore info on "),t("a",{attrs:{href:"https://community.openmqttgateway.com/t/esp32-compilation-error/144/5?u=1technophile",target:"_blank",rel:"noopener noreferrer"}},[e._v("this topic"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"not-able-to-send-or-receive-rf-or-ir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#not-able-to-send-or-receive-rf-or-ir"}},[e._v("#")]),e._v(" Not able to send or receive RF or IR")]),e._v(" "),t("p",[e._v("→ Verify your power supply voltage with a multimeter, it should be 5V (can be 12V for FS1000A emitter),  please note that on NodeMCU V3 the Vin does not supply 5V contrary to NodeMCU V1")]),e._v(" "),t("p",[e._v("→ Verify your wiring")]),e._v(" "),t("p",[e._v("→ To eliminate issues of OpenMQTTGateway or you home controller try uploading basic examples from the libraries directly (like "),t("a",{attrs:{href:"https://github.com/sui77/rc-switch/tree/master/examples/SendDemo",target:"_blank",rel:"noopener noreferrer"}},[e._v("SendDemo"),t("OutboundLink")],1),e._v(" for RF or IRSendDemo for IR) and execute them. If it doesn't work this means that you have mostly an issue related with your hardware or due to IDE/library version used.")]),e._v(" "),t("p",[e._v("Regarding the IR led emitter you can replace it with a normal led and see if it lights up when you send an MQTT command")]),e._v(" "),t("p",[e._v("→ If you are only unable to receive RF on nodemcu (or if it only works when a serial connection is active):")]),e._v(" "),t("p",[e._v("try with D2 instead of D3\nand put\n"),t("code",[e._v("#define RF_RECEIVER_GPIO 4 // D2 on nodemcu")]),e._v("\nin config_rf.h\ninstead of\n"),t("code",[e._v("#define RF_RECEIVER_GPIO 0 // D3 on nodemcu")])]),e._v(" "),t("h2",{attrs:{id:"exception-seen-on-serial-monitor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exception-seen-on-serial-monitor"}},[e._v("#")]),e._v(" Exception seen on serial monitor:")]),e._v(" "),t("p",[e._v("Hey I got a callback\nmalloc\nmemcpy\n7\nException (2):")]),e._v(" "),t("p",[e._v("→ You are not using the last update of ESP8266 into board manager, go to your Arduino IDE and update it, should be at least 2.3.0")]),e._v(" "),t("h2",{attrs:{id:"repetitive-mqtt-disconnections-or-and-commands-sent-to-the-gateway-not-taken-into-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repetitive-mqtt-disconnections-or-and-commands-sent-to-the-gateway-not-taken-into-account"}},[e._v("#")]),e._v(" Repetitive MQTT disconnections or/and commands sent to the gateway not taken into account")]),e._v(" "),t("p",[e._v("Most probably a network issue, don't use a guest network and if going through a firewall check its rules. To put aside gateway issue, try to connect to a local broker on the same network.")]),e._v(" "),t("h2",{attrs:{id:"you-don-t-see-the-messages-appearing-on-your-broker-but-they-appears-on-the-serial-monitor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#you-don-t-see-the-messages-appearing-on-your-broker-but-they-appears-on-the-serial-monitor"}},[e._v("#")]),e._v(" You don't see the messages appearing on your broker but they appears on the serial monitor")]),e._v(" "),t("p",[e._v("This is due to a too small MQTT packet size, open User_config.h and set:\n"),t("code",[e._v("#define mqtt_max_packet_size 1024")])]),e._v(" "),t("h2",{attrs:{id:"your-arduino-with-w5100-ethernet-shield-does-not-connect-to-network-until-you-press-reset-button"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#your-arduino-with-w5100-ethernet-shield-does-not-connect-to-network-until-you-press-reset-button"}},[e._v("#")]),e._v(" Your Arduino with w5100 Ethernet shield does not connect to network until you press Reset button")]),e._v(" "),t("p",[e._v("If you notice that your Arduino with w5100 Ethernet shield does not connect to network until you press its Reset button, but connects fine if you connect the Arduino with a USB cable to a computer/laptop with Arduino IDE running and open Serial Monitor, the problem is most likely the Ethernet shield and/or the power supply you're using.\nAccording to this "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=9ZBeprOqC3w&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"}},[e._v("video"),t("OutboundLink")],1),e._v(", w5100 clones sometimes struggle to initialise because the reset pin wasn't held low long enough. The solution is simple - add a 0.1uF (100nF) capacitor between the pins on the reset switch. You can get more details "),t("a",{attrs:{href:"http://forum.arduino.cc/index.php?topic=28175.15",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".\nBut even with this fix your board might not work well with a specific PSU. I would recommend try at least one different one and also try bigger capacitor (some report using 47uF)")]),e._v(" "),t("h2",{attrs:{id:"esp-continuous-restart-or-strange-behaviour"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esp-continuous-restart-or-strange-behaviour"}},[e._v("#")]),e._v(" ESP Continuous restart or strange behaviour:")]),e._v(" "),t("p",[e._v("This can be due to corruption of the ESP flash memory, try to erase flash and upload OMG on it again.")]),e._v(" "),t("p",[e._v("If you didn't find your answer here post a question to the forum:\n"),t("a",{attrs:{href:"https://community.openmqttgateway.com",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/badge/community-forum-brightgreen.svg",alt:"Community forum"}}),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"esp-does-not-connect-to-broker-with-tls-enabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esp-does-not-connect-to-broker-with-tls-enabled"}},[e._v("#")]),e._v(" ESP does not connect to broker with TLS enabled")]),e._v(" "),t("p",[e._v("If you get the following error:\n"),t("code",[e._v("W: failed, ssl error code=54")]),e._v(' ("Certificate is expired or not yet valid.")')]),e._v(" "),t("p",[e._v("This is most probable caused by the time of the esp is not correct/synchronized.\nThe esp uses the Network Time Protocol (NTP) to get the current time from a time server.\nIf you get this error ntp is not configured correctly in the gateway.\nUncomment "),t("code",[e._v('//# define NTP_SERVER "pool.ntp.org"')]),e._v(" to set the "),t("code",[e._v("pool.ntp.org")]),e._v(" as the time server.\nYou can also choose any other ntp time server you like.")]),e._v(" "),t("p",[e._v("It is normal that the time synchronization process takes some time and the MQTT connection will not be successful the first time.\nIf you set the ntp server for the gateway and keep getting the errors you should check your certificate validity duration.")])])}),[],!1,null,null,null);t.default=n.exports}}]);