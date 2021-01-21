using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESG.Model.Entities
{
    public class User: BaseEntity
    {
        [Key]
        public int UserID { get; set; }
        public string NickName { get; set; }
        public string UserName { get; set; }
        public string UserLastName { get; set; }
        public string UserPassword { get; set; }
        public string UserMail { get; set; }
        public DateTime UserSingedDate { get; set; }
        public int TeamInvitationsID { get; set; }

        public Team UserTeam { get; set; }
        public int TeamID { get; set; }
    }
}
