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
        public List<Run> GetSingle()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Run>(@"select * from Run");

                return result.ToList();
            }
        }
    }
}
