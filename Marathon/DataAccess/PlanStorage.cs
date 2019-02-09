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
    public class PlanStorage
    {
        private readonly string ConnectionString;

        public PlanStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }
        //APIS
        //GET ALL Plans
        public List<Plan> GetAllPlanTasks()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Plan>(@"select * from PlanNew");

                return result.ToList();
            }
        }
        //POST
        public void AddAPlan(Plan plan)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"insert into PlanNew(Name,UserId) values (@Name, @UserId)", plan);
            }
        }
    }
}
