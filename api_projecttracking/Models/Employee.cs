using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace api_projecttracking.Models
{
    public class Employee
    {
        [Key]
        [Required]
        public int Eid { get; set; }
        [DisplayName("Employee Name")]
        [Required]
        public string Ename { get; set; }
        [Required]
        public string Designation { get; set; }
        [Required]
        public int? Mid { get; set; }
        [ForeignKey("Mid")]
        [System.Runtime.Serialization.IgnoreDataMember]
        public Employee Manager { get; set; }
        [Required]
        public string Contactno { get; set; }
        [Required]
        public string EmailId { get; set; }
        [Required]
        public string Skillsets { get; set; }
    }
}