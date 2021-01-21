using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESG.Model.Entities
{
    public class Team : BaseEntity
    {
        [Key]
        public int TeamID { get; set; }
        public string TeamName { get; set; }
        public string TeamTag { get; set; }

        public User TeamLeader { get; set; }
        public ICollection<User> TeamUsers { get; set; }
    }
}
