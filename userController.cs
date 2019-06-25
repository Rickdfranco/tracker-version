using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Users
{
    public class tabledata
    {
        [key]
        public int user_id { get; set; }
        public string seriel_number { get; set; }
        public string manufacturer { get; set; }
        public string model { get; set; }
        public string computer_name { get; set; }
        public string location { get; set; }
        public string operating_system { get; set; }
        public string os_architchre { get; set; }
        public string total_system_memory { get; set; }
        public string video { get; set; }
        public string video_memory { get; set; }
        public string dns_domain { get; set; }
        public string last_known_ip { get; set; }
        public int mac { get; set; }

        public Profile(int user_id, string seriel_number, string manufacturer, string model, string computer_name, string location, string operating_system, string os_architchre, string total_system_memory, string video, string video_memory, string dns_domain, string last_known_ip, int mac)
        {
            this.user_id = user_id;
            this.seriel_number = seriel_number;
            this.manufacturer = manufacturer;
            this.model = model;
            this.computer_name = computer_name;
            this.location = location;
            this.operating_system = operating_system;
            this.os_architchre = os_architchre;
            this.total_system_memory = total_system_memory;
            this.video = video;
            this.video_memory = video_memory;
            this.dns_domain = dns_domain;
            this.last_known_ip = last_known_ip;
            this.mac = mac;


        }
    }
}