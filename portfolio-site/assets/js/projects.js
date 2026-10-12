/* ================================================================
   PROJECT LIST: the only file you edit to add, remove or reorder projects.

   To add a project:
     1. Copy the folder  projects/_template  and rename it, e.g.  projects/micro-mouse
     2. Put the project's images in that folder (a 16:9 "thumb.jpg" is used for the card)
     3. Add an entry below with  slug  equal to the folder name
     4. Write the page content in  projects/<slug>/index.html

   The order here is the order on the home page and the "Next project" links.
   ================================================================ */
window.PROJECTS = [
  {
    slug: "coexistence",              // folder name in projects/
    title: "Wi-Fi / LoRa Coexistence at 2.4 GHz",
    kind: "Research · Wireless Institute",          // small green line on the card
    summary: "A fully cabled test bench that injects calibrated 802.11-style interference into a LoRa link and measures what actually gets through.",
    highlight: "49% received vs. 34% predicted at −30 dB SIR",          // optional key result on the card ("" to hide)
    intro: "How much Wi-Fi can a LoRa link survive? I built a fully cabled test bench that injects calibrated 802.11-style interference into a 2.4 GHz LoRa link, measures the signal-to-interference ratio directly, and compares what gets through against a collision model.",
    meta: [
      ["Role", "Undergraduate Researcher (independent project)"],
      ["Where", "Wireless Institute, Notre Dame"],
      ["When", "Aug 2026 – Present"],
      ["Advisor", "Prof. J. Nicholas Laneman"]
    ],
    tags: ["Semtech SX1281", "ADALM-Pluto SDR", "Python", "802.11a/g OFDM", "LoRa / FLRC"],
    repo: "",               // GitHub repository name, e.g. "lora-wifi-coexistence" ("" hides the GitHub buttons)
    thumb: "thumb.jpg"
  },
  {
    slug: "vhf-receiver",              // folder name in projects/
    title: "137 MHz Satellite Receiver & LRPT Decoder",
    kind: "Project · RF hardware + DSP",          // small green line on the card
    summary: "A VHF front-end PCB with an LNA and Chebyshev bandpass filter, plus a Python pipeline to decode weather images from the Meteor-M2 satellite.",
    highlight: "",          // optional key result on the card ("" to hide)
    intro: "Weather satellites broadcast images to anyone listening at 137 MHz. I'm building the whole chain myself: a custom receiver front-end PCB with an LNA and a bandpass filter, and a Python pipeline that turns raw IQ samples from the Meteor-M2 satellite into pictures.",
    meta: [
      ["Type", "Personal project"],
      ["When", "June 2026 – Present"],
      ["Status", "PCB designed · decoder through packet extraction"]
    ],
    tags: ["KiCad", "Qucs", "LTspice", "PGA-103+", "RTL-SDR V4", "Python", "QPSK"],
    repo: "137mhz-lrpt-receiver",               // GitHub repository name ("" hides the GitHub buttons)
    thumb: "thumb.jpg"
  },
  {
    slug: "rc-car",              // folder name in projects/
    title: "ESP32 Wireless RC Car",
    kind: "Project · Embedded systems",          // small green line on the card
    summary: "A car and handheld controller built from scratch, with two-way ESP-NOW telemetry and non-blocking C/C++ firmware.",
    highlight: "",          // optional key result on the card ("" to hide)
    intro: "A two-wheel-drive car and a handheld controller, designed, wired and programmed from scratch. The two talk over ESP-NOW in both directions, so the controller doesn't just send commands: it displays live telemetry from the car.",
    meta: [
      ["Type", "Personal project"],
      ["When", "Apr 2026 – May 2026"],
      ["Status", "Complete"]
    ],
    tags: ["ESP32", "C/C++", "ESP-NOW", "H-bridge", "IR sensor", "OLED"],
    repo: "",               // GitHub repository name, e.g. "esp32-rc-car" ("" hides the GitHub buttons)
    thumb: "thumb.jpg"
  },
];
