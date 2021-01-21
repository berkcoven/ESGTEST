using ESG.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESG.MAP.Options
{
    public class NewsMap:BaseMap<News>
    {
        public NewsMap()
        {
            ToTable("Newss");
        }
    }
}
