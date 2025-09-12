import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WAN Network Tutorial - Cisco Packet Tracer",
  description: "This is a guide to implement a WAN network in Cisco Packet Tracer.",
  base: "/wan_network_tutorial_cisco_packet_tracer/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/wan_network_tutorial_cisco_packet_tracer' }
    ]
  }
})
