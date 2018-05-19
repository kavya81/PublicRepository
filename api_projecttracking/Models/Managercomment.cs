using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;

namespace api_projecttracking.Models
{
    public class Managercomment
    {
        [Key]
        public int McId { get; set; }
        public string comment { get; set; }
        public int protaskId { get; set; }
        [ForeignKey("protaskId")]
        public Task task { get; set; }
    }
}