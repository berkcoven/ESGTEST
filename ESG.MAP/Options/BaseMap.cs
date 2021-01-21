using ESG.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESG.MAP.Options
{
    public class BaseMap<T> : EntityTypeConfiguration<T> where T : BaseEntity
    {

    }
}
