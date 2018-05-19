using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace api_projecttracking.Models
{
    public class Project
    {
        [Key]
        [Required]
        public int Pid { get; set; }
        [Required]
        public string Pname { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public string Cname { get; set; }
    }
}