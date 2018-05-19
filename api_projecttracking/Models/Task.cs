using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace api_projecttracking.Models
{
    public class Task
    {
        [Key]
        [Required]
        public int ProjTaskId { get; set; }
        [Required]
        public int AssignedTo { get; set; }
        [ForeignKey("AssignedTo")]
        public Employee employee { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime Completion { get; set; }
        [Required]
        public int UserStoryId { get; set; }
        [ForeignKey("UserStoryId")]
        public UserStories userStories { get; set; }
    }
}