using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESG.Model.Entities
{
    public class News : BaseEntity
    {
        [Key]
        public int NewsID { get; set; }
        public string NewsTitle { get; set; }
        public string NewsDesc { get; set; }
        public DateTime NewsDate { get; set; }

        public User NewsCreatedUser { get; set; }
    }
}
