using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace api_projecttracking.Models
{
    public class UserStories
    {
        [Key]
        [Required]
        public int UserId { get; set; }
        [Required]
        public string Story { get; set; }
        [Required]
        public int ProId { get; set; }
        [ForeignKey("ProId")]
        public Project project { get; set; }
    }
}