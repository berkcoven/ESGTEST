using ESG.MAP.Options;
using ESG.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Common.CommandTrees;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESG.DAL
{
    public class ProjectContext:DbContext
    {
        public ProjectContext()
        {
            //this.Configuration.LazyLoadingEnabled = true;
            Database.Connection.ConnectionString = "server=DESKTOP-6NAVEAS\\SQLSERVER;database=ESGDB;uid=sa;password=123";

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new TeamMap());
            modelBuilder.Configurations.Add(new NewsMap());
            modelBuilder.Configurations.Add(new UserMap());
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<News> Newss { get; set; }
        public DbSet<Team> Teams { get; set; }


    }
}
