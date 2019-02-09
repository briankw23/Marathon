using Dapper;
using Marathon.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Marathon.DataAccess
{
    public class RunStorage
    {
        private readonly string ConnectionString;

        public RunStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }
        //APIS
        //GET ALL RUNS
        public List<Run> GetAllRunTasks()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Run>(@"select * from Run");

                return result.ToList();
            }
        }

        public void AddARun(Run run)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"insert into Run(Name, Description, Date, TargetMiles, ActualMiles, Complete) values (@Name, @Description, @Date, @TargetMiles, @ActualMiles, @Complete)", run);
            }
        }
        public void DeleteRun(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"delete
                                        from Run
                                        where Id = @id", new { id });
            }
        }
    }
}