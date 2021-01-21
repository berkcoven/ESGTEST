using ESG.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESG.MAP.Options
{
    public class UserMap : BaseMap<User>
    {
        public UserMap()
        {
            ToTable("Users");
        }
    }
}
